#!/usr/bin/env python3
"""
Ollama Markdown Processor - Enhanced with Git Integration
Processes markdown files using Ollama with full LM Studio parameter control
"""

import streamlit as st
import os
import sys
import subprocess
import shutil
from pathlib import Path
from typing import List, Dict, Any, Optional, Tuple
import time
import json
import re
from datetime import datetime
import hashlib
import threading
import queue
from concurrent.futures import ThreadPoolExecutor, as_completed

# Import validation
REQUIRED_PACKAGES = {
    'requests': 'requests',
    'ollama': 'ollama'
}

missing_packages = []
for package_name, import_name in REQUIRED_PACKAGES.items():
    try:
        __import__(import_name)
    except ImportError:
        missing_packages.append(package_name)

if missing_packages:
    st.error(f"❌ Missing required packages: {', '.join(missing_packages)}")
    st.info(f"Install with: pip install {' '.join(missing_packages)}")
    st.stop()

import requests
try:
    import ollama
except ImportError:
    ollama = None

class GitManager:
    """Handles git operations for the processed files."""
    
    def __init__(self, repo_path: str = "."):
        self.repo_path = Path(repo_path).resolve()
        self.git_available = self._check_git_availability()
        self.is_git_repo = self._check_git_repo()
    
    def _check_git_availability(self) -> bool:
        """Check if git is available in system."""
        try:
            subprocess.run(['git', '--version'], capture_output=True, check=True)
            return True
        except (subprocess.CalledProcessError, FileNotFoundError):
            return False
    
    def _check_git_repo(self) -> bool:
        """Check if current directory is a git repository."""
        if not self.git_available:
            return False
        try:
            subprocess.run(
                ['git', 'rev-parse', '--git-dir'], 
                cwd=self.repo_path, 
                capture_output=True, 
                check=True
            )
            return True
        except subprocess.CalledProcessError:
            return False
    
    def get_status(self) -> Dict[str, Any]:
        """Get git status information."""
        if not self.is_git_repo:
            return {"available": False, "is_repo": False}
        
        try:
            # Get current branch
            branch_result = subprocess.run(
                ['git', 'branch', '--show-current'], 
                cwd=self.repo_path, 
                capture_output=True, 
                text=True, 
                check=True
            )
            current_branch = branch_result.stdout.strip()
            
            # Get status
            status_result = subprocess.run(
                ['git', 'status', '--porcelain'], 
                cwd=self.repo_path, 
                capture_output=True, 
                text=True, 
                check=True
            )
            
            # Check for remote
            remote_result = subprocess.run(
                ['git', 'remote', '-v'], 
                cwd=self.repo_path, 
                capture_output=True, 
                text=True, 
                check=True
            )
            has_remote = bool(remote_result.stdout.strip())
            
            return {
                "available": True,
                "is_repo": True,
                "branch": current_branch,
                "has_changes": bool(status_result.stdout.strip()),
                "has_remote": has_remote,
                "status_output": status_result.stdout
            }
        except subprocess.CalledProcessError as e:
            return {
                "available": True,
                "is_repo": True,
                "error": str(e)
            }
    
    def add_and_commit_files(self, file_paths: List[str], commit_message: str = None) -> Tuple[bool, str]:
        """Add files to git and commit them."""
        if not self.is_git_repo:
            return False, "Not a git repository"
        
        try:
            # Add files
            for file_path in file_paths:
                subprocess.run(
                    ['git', 'add', file_path], 
                    cwd=self.repo_path, 
                    check=True, 
                    capture_output=True
                )
            
            # Create commit message
            if not commit_message:
                timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
                commit_message = f"Auto-commit: Processed {len(file_paths)} files at {timestamp}"
            
            # Commit
            commit_result = subprocess.run(
                ['git', 'commit', '-m', commit_message], 
                cwd=self.repo_path, 
                capture_output=True, 
                text=True, 
                check=True
            )
            
            return True, f"Committed: {commit_message}"
            
        except subprocess.CalledProcessError as e:
            error_output = e.stderr.decode('utf-8') if e.stderr else str(e)
            return False, f"Git commit failed: {error_output}"
    
    def push_to_remote(self, remote_name: str = "origin", branch_name: str = None) -> Tuple[bool, str]:
        """Push commits to remote repository."""
        if not self.is_git_repo:
            return False, "Not a git repository"
        
        try:
            # Get current branch if not specified
            if not branch_name:
                branch_result = subprocess.run(
                    ['git', 'branch', '--show-current'], 
                    cwd=self.repo_path, 
                    capture_output=True, 
                    text=True, 
                    check=True
                )
                branch_name = branch_result.stdout.strip()
            
            # Push
            push_result = subprocess.run(
                ['git', 'push', remote_name, branch_name], 
                cwd=self.repo_path, 
                capture_output=True, 
                text=True, 
                check=True
            )
            
            return True, f"Successfully pushed to {remote_name}/{branch_name}"
            
        except subprocess.CalledProcessError as e:
            error_output = e.stderr.decode('utf-8') if e.stderr else str(e)
            return False, f"Git push failed: {error_output}"

class OllamaProcessor:
    def __init__(self, base_url: str = "http://localhost:11434"):
        self.base_url = self._resolve_host_for_client(base_url)
        self.api_url = f"{self.base_url}/api"
        self.client = None
        
        if ollama is None:
            st.error("The 'ollama' Python package is not installed. Run: pip install ollama")
        else:
            try:
                self.client = ollama.Client(host=self.base_url)
            except Exception as e:
                st.error(f"Failed to initialize Ollama client: {e}")

    def _resolve_host_for_client(self, base_url: str) -> str:
        """Replace 0.0.0.0 with 127.0.0.1 to make a routable client URL."""
        try:
            if "0.0.0.0" in base_url:
                return base_url.replace("0.0.0.0", "127.0.0.1")
            return base_url
        except Exception:
            return base_url
    
    def test_connection(self) -> Tuple[bool, str]:
        """Test connection to Ollama server."""
        try:
            response = requests.get(f"{self.api_url}/version", timeout=5)
            if response.status_code == 200:
                return True, "Connection successful"
            else:
                return False, f"Server returned {response.status_code}"
        except requests.exceptions.RequestException as e:
            return False, f"Connection failed: {str(e)}"
    
    def get_available_models(self) -> List[str]:
        """Get list of available Ollama models with better error handling."""
        # Test connection first
        connected, message = self.test_connection()
        if not connected:
            st.error(f"❌ Cannot connect to Ollama: {message}")
            return []
        
        # First try Python client
        if self.client is not None:
            try:
                result = self.client.list()
                models = result.get('models', []) if isinstance(result, dict) else []
                names = []
                for m in models:
                    name = (m.get('name') or m.get('model')) if isinstance(m, dict) else None
                    if name:
                        names.append(name)
                if names:
                    return sorted(names)
            except Exception as e:
                st.warning(f"Client list failed, retrying via HTTP: {e}")

        # Fallback: HTTP GET /api/tags
        try:
            resp = requests.get(f"{self.api_url}/tags", timeout=10)
            resp.raise_for_status()
            payload = resp.json()
            models = payload.get('models', []) if isinstance(payload, dict) else []
            names = []
            for m in models:
                if isinstance(m, dict):
                    name = m.get('name') or m.get('model')
                    if name:
                        names.append(name)
            return sorted(names)
        except Exception as e:
            st.error(f"Failed to get models from Ollama: {e}")
            return []
    
    def generate_response_with_retry(self, model: str, prompt: str, system_prompt: str = None,
                                   max_retries: int = 3, **kwargs) -> Optional[str]:
        """Generate response with retry logic."""
        for attempt in range(max_retries):
            try:
                response = self.generate_response(
                    model=model, 
                    prompt=prompt, 
                    system_prompt=system_prompt,
                    **kwargs
                )
                if response:
                    return response
                else:
                    st.warning(f"Attempt {attempt + 1}: Empty response from model")
            except Exception as e:
                st.warning(f"Attempt {attempt + 1} failed: {str(e)}")
                if attempt < max_retries - 1:
                    time.sleep(2 ** attempt)  # Exponential backoff
        
        return None
    
    def generate_response(self, model: str, prompt: str, system_prompt: str = None, 
                         temperature: float = 0.15, top_p: float = 0.9, 
                         top_k: int = 40, repeat_penalty: float = 1.1,
                         num_predict: int = -1, num_ctx: Optional[int] = None) -> Optional[str]:
        """Generate response from Ollama model with full parameter control."""
        # Input validation
        if len(prompt.strip()) == 0:
            st.error("Empty prompt provided")
            return None
        
        # Check prompt length (rough token estimation: 1 token ≈ 4 characters)
        estimated_tokens = len(prompt) // 4
        if num_ctx and estimated_tokens > num_ctx * 0.8:  # Leave 20% for output
            st.warning(f"Prompt may be too long ({estimated_tokens} estimated tokens) for context window ({num_ctx})")
        
        options: Dict[str, Any] = {
            "temperature": max(0.0, min(2.0, temperature)),
            "top_p": max(0.1, min(1.0, top_p)),
            "top_k": max(1, min(100, top_k)),
            "repeat_penalty": max(0.5, min(2.0, repeat_penalty)),
            "num_predict": num_predict,
        }
        if num_ctx is not None:
            options["num_ctx"] = max(512, num_ctx)  # Minimum context size

        payload: Dict[str, Any] = {
            "model": model,
            "prompt": prompt,
            "options": options,
            "stream": False,
        }
        if system_prompt and system_prompt.strip():
            payload["system"] = system_prompt

        # First try Python client if available
        if self.client is not None:
            try:
                result = self.client.generate(**payload)
                if isinstance(result, dict):
                    response = result.get("response", "")
                    if response:
                        return response
            except Exception as e:
                st.warning(f"Client generate failed, retrying via HTTP: {e}")

        # Fallback to HTTP
        try:
            resp = requests.post(
                f"{self.api_url}/generate",
                json=payload,
                timeout=300,
            )
            if resp.ok:
                data = resp.json()
                return data.get("response", "") if isinstance(data, dict) else None
            else:
                try:
                    body = resp.text
                except Exception:
                    body = "<no body>"
                st.error(f"Ollama HTTP error {resp.status_code}: {body}")
                return None
        except Exception as e:
            st.error(f"HTTP generate request failed: {e}")
            return None

def validate_file_safety(file_path: Path, max_size_mb: int = 10) -> Tuple[bool, str]:
    """Validate file for safety before processing."""
    try:
        # Check file exists
        if not file_path.exists():
            return False, "File does not exist"
        
        # Check file size
        file_size_mb = file_path.stat().st_size / (1024 * 1024)
        if file_size_mb > max_size_mb:
            return False, f"File too large ({file_size_mb:.1f}MB > {max_size_mb}MB)"
        
        # Check if it's actually a text file
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                # Read first 1KB to check if it's text
                sample = f.read(1024)
                if '\0' in sample:  # Binary file indicator
                    return False, "File appears to be binary, not text"
        except UnicodeDecodeError:
            return False, "File is not valid UTF-8 text"
        
        return True, "File is safe to process"
        
    except Exception as e:
        return False, f"Error validating file: {str(e)}"

def get_preset_configurations():
    """Return preset configurations matching LM Studio setups."""
    return {
        "Custom": {
            "system_prompt": """You are an expert in analyzing GDPR case documents. Extract and analyze organization information from the provided document. Focus on identifying:

1. Organizations mentioned in the case
2. Their type (government/public vs private sector)
3. Their core business activities
4. Estimated organization size
5. Any relevant case details

Provide structured analysis with confidence levels for your assessments.""",
            "main_prompt": """Please analyze the following GDPR case document and extract information about all organizations mentioned.

For each organization, provide:
- Organization name and identifier
- Type: GOV (government/public) or PRIVATE (private sector)
- Core activity with NACE code if possible
- Size estimate: LARGE, MEDIUM, SMALL, or SMALL OR MEDIUM
- Confidence levels (0-100) for each assessment

Document content:
{document_content}

Provide your analysis in a clear, structured format.""",
            "temperature": 0.15,
            "top_p": 0.9,
            "top_k": 40,
            "repeat_penalty": 1.1,
            "max_tokens": -1
        },
        
        "LM Studio Style - EU DPA Extraction": {
            "system_prompt": """SYSTEM
Extract facts from an EU data protection authority (DPA) decision. Output MUST be exactly 11 lines in English. Each line starts with "Answer n: " and contains ONLY one of the allowed tokens. No extra text.

SCOPE AND EVIDENCE
- "EXPLICIT" means either (a) the exact term appears in the decision text (including official translations), or (b) the decision explicitly cites the relevant GDPR article and clause describing that measure (e.g., "Article 58(2)(b) reprimand"). If neither, answer UNKNOWN.
- Use ONLY the provided decision text. Do NOT infer.
- If a conditional question does not apply, answer N_A (not applicable).

PRIMARY DEFENDANT RULE
- If multiple defendants are named, choose the one in the operative part. If several are equally primary, choose the first named there.

TOP-LEVEL CATEGORY (Q1)
Allowed tokens:
- PUBLIC_AUTHORITY
- BUSINESS
- NON_PROFIT
- INDIVIDUAL
- UNKNOWN

PUBLIC AUTHORITY TYPE (Q2, only if Q1=PUBLIC_AUTHORITY)
Choose ONE:
- LOCAL_GOVERNMENT
- CENTRAL_MINISTRY_AGENCY
- LAW_ENFORCEMENT_POLICE
- EDUCATION_PUBLIC
- HEALTH_PUBLIC
- REGULATOR_INDEPENDENT_AUTHORITY
- OTHER
- UNKNOWN
Else answer N_A.

PRIVATE-SECTOR ACTIVITY (Q3, only if Q1 in {BUSINESS, NON_PROFIT})
Choose ONE:
- DIGITAL_IT_TELECOM
- FINANCE_INSURANCE
- HEALTH_LIFESCIENCES_PRIVATE
- RETAIL_ECOMMERCE
- PROFESSIONAL_BUSINESS_SERVICES
- TRANSPORT_POSTAL
- OTHER
- UNKNOWN
Else answer N_A.

SME STATUS (Q4, only if Q1=BUSINESS)
SME per EU Recommendation 2003/361/EC. If not explicitly stated → UNKNOWN.
Allowed: YES / NO / UNKNOWN / N_A.

FINE (Q6–Q7)
- "Fine issued" means an administrative fine under GDPR (exclude damages/compensation/costs).
- If Answer 11=YES (not in breach), Answer 6 MUST be NO and Answer 7 MUST be N_A.

ARTICLE 58(2) POWERS (Q8)
- Answer is a semicolon-separated list of CODES from the set below, sorted alphabetically, with no spaces, or the single token NONE.
- NONE is exclusive (cannot appear with any other code).
Allowed codes:
WARNING; REPRIMAND; ORDER_DSR; ORDER_COMPLIANCE; ORDER_BREACH_COMMUNICATION; BAN_PROCESSING; ORDER_RECTIFY_ERASE_RESTRICT; CERT_WITHDRAW_BLOCK; SUSPEND_TRANSFERS; TEMPORARY_DAILY_FINE; NONE.
- REPRIMAND requires explicit mention of a reprimand (or explicit 58(2)(b)). WARNING may appear even if not in breach (e.g., likely future infringement).

PREVIOUS INFRINGEMENTS (Q10)
Tokens:
- PRIOR_INFRINGER_PRESENT
- DISCUSSED_NO_PRIOR
- NOT_DISCUSSED
- UNKNOWN

NOT-IN-BREACH (Q11)
- If any infringement is upheld → NO.
- Only if the decision explicitly exonerates on all grounds → YES.
- If unclear → UNKNOWN.

CURRENCY AND NUMBERS
- Answer 7 format: DIGITS SPACE ISO4217 (uppercase), e.g., 5000 EUR. No symbols, no separators. Round to nearest whole unit if needed. If Q6≠YES → N_A.

FORMAT — EXACTLY THESE 11 LINES

Question 1: What is the explicitly identified top-level category of the defendant?
Answer 1: [PUBLIC_AUTHORITY|BUSINESS|NON_PROFIT|INDIVIDUAL|UNKNOWN]

Question 2 (only if Answer 1=PUBLIC_AUTHORITY): What is the primary public authority type?
Answer 2: [LOCAL_GOVERNMENT|CENTRAL_MINISTRY_AGENCY|LAW_ENFORCEMENT_POLICE|EDUCATION_PUBLIC|HEALTH_PUBLIC|REGULATOR_INDEPENDENT_AUTHORITY|OTHER|UNKNOWN|N_A]

Question 3 (only if Answer 1 in {BUSINESS, NON_PROFIT}): What is the core activity sector?
Answer 3: [DIGITAL_IT_TELECOM|FINANCE_INSURANCE|HEALTH_LIFESCIENCES_PRIVATE|RETAIL_ECOMMERCE|PROFESSIONAL_BUSINESS_SERVICES|TRANSPORT_POSTAL|OTHER|UNKNOWN|N_A]

Question 4 (only if Answer 1=BUSINESS): Is the defendant explicitly a Small or Medium Enterprise (SME)?
Answer 4: [YES|NO|UNKNOWN|N_A]

Question 5: (reserved for future use)
Answer 5: [N_A]

Question 6: Was an administrative fine explicitly issued?
Answer 6: [YES|NO|UNKNOWN]

Question 7 (only if Answer 6=YES): What is the total fine amount?
Answer 7: [<INTEGER><SPACE><ISO4217>|N_A]

Question 8: Which other Article 58(2) corrective powers were explicitly used (besides a fine)?
Answer 8: [WARNING;REPRIMAND;ORDER_DSR;ORDER_COMPLIANCE;ORDER_BREACH_COMMUNICATION;BAN_PROCESSING;ORDER_RECTIFY_ERASE_RESTRICT;CERT_WITHDRAW_BLOCK;SUSPEND_TRANSFERS;TEMPORARY_DAILY_FINE|NONE]

Question 9: Did the authority explicitly refer to EDPB administrative-fines guidance (Guidelines 04/2022) or WP253?
Answer 9: [YES|NO|UNKNOWN]

Question 10: Did the decision explicitly reference previous infringements by the same defendant?
Answer 10: [PRIOR_INFRINGER_PRESENT|DISCUSSED_NO_PRIOR|NOT_DISCUSSED|UNKNOWN]

Question 11: Was the defendant found not in breach?
Answer 11: [YES|NO|UNKNOWN]""",
            "main_prompt": """INPUT
<<DECISION_TEXT>>
{document_content}
</<DECISION_TEXT>>""",
            "temperature": 0.15,
            "top_p": 0.9,
            "top_k": 40,
            "repeat_penalty": 1.1,
            "max_tokens": -1
        },
        
        "JSON Structured Output": {
            "system_prompt": """You are an expert analyst that extracts structured information from legal documents. Always respond with valid JSON only, no additional text.

Your response must follow this exact JSON schema:
{
  "defendant_type": "string (PUBLIC_AUTHORITY|BUSINESS|NON_PROFIT|INDIVIDUAL|UNKNOWN)",
  "authority_type": "string or null",
  "business_sector": "string or null", 
  "is_sme": "string (YES|NO|UNKNOWN|N_A)",
  "fine_issued": "boolean",
  "fine_amount": {
    "value": "number or null",
    "currency": "string or null"
  },
  "corrective_powers": ["array of strings"],
  "not_in_breach": "boolean",
  "confidence_level": "number (0-100)"
}""",
            "main_prompt": """Extract key information from this EU DPA decision and return as JSON:

{document_content}

Return valid JSON only.""",
            "temperature": 0.1,
            "top_p": 0.9,
            "top_k": 40,
            "repeat_penalty": 1.1,
            "max_tokens": 1000
        }
    }

def find_markdown_files(folders: List[str]) -> List[Path]:
    """Find all markdown files in selected folders and subfolders."""
    md_files = []
    
    for folder in folders:
        folder_path = Path(folder)
        if folder_path.exists():
            # Find all .md files recursively
            md_files.extend(folder_path.rglob("*.md"))
    
    return sorted(md_files)

def extract_id_from_response(response: str) -> Optional[str]:
    """Extract ID pattern like NO_123, ES_1, etc. from response."""
    patterns = [
        r'\b([A-Z]{2,3}_\d+)\b',
        r'\b([A-Z]{2,3}\d+)\b',
        r'\b([A-Z]+_\d+)\b'
    ]
    
    for pattern in patterns:
        match = re.search(pattern, response)
        if match:
            return match.group(1)
    
    return None

def save_processed_file(original_path: Path, response: str, output_folder: str) -> str:
    """Save processed response to new markdown file."""
    extracted_id = extract_id_from_response(response)
    original_name = original_path.stem
    
    if extracted_id:
        new_filename = f"{extracted_id}_{original_name}_extracted.md"
    else:
        new_filename = f"{original_name}_extracted.md"
    
    output_path = Path(output_folder) / new_filename
    output_path.parent.mkdir(parents=True, exist_ok=True)
    
    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(f"# Processed: {original_path.name}\n\n")
        f.write(f"**Original file:** {original_path}\n")
        f.write(f"**Processed at:** {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write("---\n\n")
        f.write(response)
    
    return str(output_path)

def process_single_file(args) -> Dict[str, Any]:
    """Process a single file - designed for concurrent execution."""
    file_path, model, prompt_template, system_prompt, output_folder, model_params, processor = args
    
    result = {
        'file': str(file_path),
        'success': False,
        'output_path': None,
        'error': None,
        'processing_time': None
    }
    
    start_time = time.time()
    
    try:
        # Validate file
        is_safe, safety_message = validate_file_safety(file_path)
        if not is_safe:
            result['error'] = f"File validation failed: {safety_message}"
            return result
        
        # Read file content
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Prepare prompt
        full_prompt = prompt_template.replace("{document_content}", content)
        
        # Generate response with retry
        response = processor.generate_response_with_retry(
            model=model,
            prompt=full_prompt,
            system_prompt=system_prompt,
            **model_params
        )
        
        if response:
            output_path = save_processed_file(file_path, response, output_folder)
            result['success'] = True
            result['output_path'] = output_path
        else:
            result['error'] = 'No response from model'
        
        result['processing_time'] = time.time() - start_time
        
    except Exception as e:
        result['error'] = str(e)
        result['processing_time'] = time.time() - start_time
    
    return result

def main():
    st.set_page_config(
        page_title="Enhanced Ollama Processor with Git",
        page_icon="📝",
        layout="wide"
    )
    
    st.title("📝 Enhanced Ollama Processor with Git Integration")
    st.markdown("Process markdown files using Ollama with full LM Studio parameter control + Git automation")
    
    # Initialize components
    if 'ollama_processor' not in st.session_state:
        st.session_state.ollama_processor = OllamaProcessor()
    
    if 'git_manager' not in st.session_state:
        st.session_state.git_manager = GitManager()
    
    # Sidebar configuration
    st.sidebar.header("🔧 Enhanced Configuration")
    
    # Git Status Section
    st.sidebar.subheader("📦 Git Status")
    git_status = st.session_state.git_manager.get_status()
    
    if not git_status.get("available"):
        st.sidebar.error("❌ Git not available")
    elif not git_status.get("is_repo"):
        st.sidebar.warning("⚠️ Not a git repository")
    else:
        st.sidebar.success(f"✅ Git repo: {git_status.get('branch', 'unknown')}")
        if git_status.get('has_remote'):
            st.sidebar.info("🌐 Remote configured")
        if git_status.get('has_changes'):
            st.sidebar.warning("📝 Uncommitted changes")
    
    # Ollama connection settings
    st.sidebar.subheader("🔗 Ollama Connection")
    ollama_url = st.sidebar.text_input(
        "Ollama Base URL", 
        value="http://localhost:11434",
        help="URL where Ollama is running"
    )
    
    if st.sidebar.button("🔄 Test Connection & Refresh Models"):
        st.session_state.ollama_processor = OllamaProcessor(ollama_url)
        # Test connection
        connected, message = st.session_state.ollama_processor.test_connection()
        if connected:
            st.sidebar.success("✅ " + message)
        else:
            st.sidebar.error("❌ " + message)
    
    # Get available models
    models = st.session_state.ollama_processor.get_available_models()
    
    if not models:
        st.error("❌ No Ollama models found! Make sure Ollama is running and has models installed.")
        st.info("💡 To install models, run: `ollama pull llama3.2` or similar")
        st.info("🔍 To check if Ollama is running: `ollama list`")
        return
    
    # Model selection
    st.sidebar.subheader("🤖 Model Selection")
    selected_model = st.sidebar.selectbox(
        "Choose Ollama Model",
        options=models,
        help="Select which Ollama model to use for processing"
    )
    
    # Preset configurations
    st.sidebar.subheader("⭐ Configuration Presets")
    preset_configs = get_preset_configurations()
    
    selected_preset = st.sidebar.selectbox(
        "Choose Configuration Preset",
        options=list(preset_configs.keys()),
        index=1,
        help="Select a preconfigured prompt template"
    )
    
    preset = preset_configs[selected_preset]
    
    # Prompt configuration
    st.sidebar.subheader("📝 Prompt Configuration")
    
    use_system_prompt = st.sidebar.checkbox(
        "Use System Prompt", 
        value=True,
        help="Use system prompt if model supports it"
    )
    
    if use_system_prompt:
        system_prompt = st.sidebar.text_area(
            "System Prompt",
            value=preset["system_prompt"],
            height=200,
            help="System prompt for the model"
        )
    else:
        system_prompt = None
    
    main_prompt_template = st.sidebar.text_area(
        "Main Prompt Template",
        value=preset["main_prompt"],
        height=100,
        help="Use {document_content} placeholder for file content"
    )
    
    # Model parameters
    st.sidebar.subheader("🎛️ Model Parameters")
    
    col1, col2 = st.sidebar.columns(2)
    
    with col1:
        temperature = st.slider("Temperature", 0.0, 2.0, preset.get("temperature", 0.15), 0.05)
        top_p = st.slider("Top P", 0.1, 1.0, preset.get("top_p", 0.9), 0.05)
    
    with col2:
        top_k = st.slider("Top K", 1, 100, preset.get("top_k", 40), 1)
        repeat_penalty = st.slider("Repeat Penalty", 0.5, 2.0, preset.get("repeat_penalty", 1.1), 0.05)
    
    max_tokens = st.sidebar.number_input("Max Tokens", value=int(preset.get("max_tokens", -1)), step=1)
    num_ctx = st.sidebar.number_input("Context Window", value=8192, step=1)
    
    # Main interface
    col1, col2 = st.columns([2, 1])
    
    with col1:
        st.header("📁 Enhanced Folder Selection")
        
        input_method = st.radio(
            "How would you like to select folders?",
            ["Type paths manually", "Use current directory"],
            horizontal=True
        )
        
        folders = []
        
        if input_method == "Type paths manually":
            folder_input = st.text_area(
                "Enter folder paths (one per line)",
                placeholder="/path/to/your/markdown/files\n/another/path",
                help="Enter full paths to folders containing markdown files"
            )
            
            if folder_input:
                folders = [line.strip() for line in folder_input.split('\n') if line.strip()]
        
        else:
            # Use current directory
            current_dir = os.getcwd()
            st.info(f"📂 Using current directory: {current_dir}")
            folders = [current_dir]
        
        # Validate folders and find files
        valid_folders = []
        if folders:
            st.subheader("📋 Folder Validation")
            for folder in folders:
                normalized_path = os.path.normpath(folder.strip())
                if os.path.exists(normalized_path):
                    st.success(f"✅ {normalized_path}")
                    valid_folders.append(normalized_path)
                else:
                    st.error(f"❌ {normalized_path} (not found)")
        
        # Find markdown files
        if valid_folders:
            md_files = find_markdown_files(valid_folders)
            
            st.subheader(f"📄 Found {len(md_files)} Markdown Files")
            
            if md_files:
                # File size validation
                total_size_mb = sum(f.stat().st_size for f in md_files) / (1024 * 1024)
                st.info(f"📊 Total size: {total_size_mb:.2f}MB across {len(md_files)} files")
                
                # Show preview
                with st.expander("Preview files to process"):
                    for i, file_path in enumerate(md_files[:10]):
                        file_size = file_path.stat().st_size / 1024
                        st.text(f"{i+1}. {file_path} ({file_size:.1f}KB)")
                    if len(md_files) > 10:
                        st.text(f"... and {len(md_files) - 10} more files")
    
    with col2:
        st.header("⚙️ Enhanced Processing Options")
        
        # Current configuration summary
        st.subheader("📊 Current Configuration")
        st.info(f"""
**Preset:** {selected_preset}
**Model:** {selected_model}
**Temperature:** {temperature}
**Top P/K:** {top_p}/{top_k}
**Repeat Penalty:** {repeat_penalty}
**Max Tokens:** {max_tokens}
        """)
        
        # Processing options
        st.subheader("🚀 Processing Settings")
        
        output_folder = st.text_input(
            "Output Folder",
            value="./processed_outputs",
            help="Where to save processed files"
        )
        
        max_files = st.number_input(
            "Max files to process",
            min_value=1,
            max_value=1000,
            value=10,
            help="Limit for testing"
        )
        
        # Enhanced processing options
        use_concurrent = st.checkbox(
            "Concurrent processing",
            value=False,
            help="Process multiple files simultaneously (faster but uses more resources)"
        )
        
        if use_concurrent:
            max_workers = st.slider("Max concurrent workers", 1, 8, 3)
        else:
            max_workers = 1
        
        delay_between_requests = st.slider(
            "Delay between requests (seconds)",
            min_value=0.0,
            max_value=5.0,
            value=1.0,
            step=0.1,
            help="Delay for sequential processing"
        )
        
        # Git integration options
        st.subheader("📦 Git Integration")
        
        enable_git = st.checkbox(
            "Auto-commit processed files",
            value=git_status.get("is_repo", False),
            disabled=not git_status.get("is_repo", False),
            help="Automatically commit processed files to git"
        )
        
        if enable_git:
            commit_message = st.text_input(
                "Commit message template",
                value="Auto-process: {count} files at {timestamp}",
                help="Use {count} and {timestamp} placeholders"
            )
            
            auto_push = st.checkbox(
                "Auto-push to remote",
                value=False,
                disabled=not git_status.get("has_remote", False),
                help="Push commits to remote repository"
            )
            
            if auto_push:
                remote_name = st.text_input("Remote name", value="origin")
                branch_name = st.text_input("Branch name", value=git_status.get("branch", "main"))
        
        # Enhanced debugging
        show_debug_requests = st.checkbox("Show detailed request info", value=False)
        
        # Process button
        if st.button("🚀 Start Enhanced Processing", type="primary"):
            if not valid_folders:
                st.error("❌ Please select valid folders first")
            elif not md_files:
                st.error("❌ No markdown files found")
            else:
                model_params = {
                    'temperature': temperature,
                    'top_p': top_p,
                    'top_k': top_k,
                    'repeat_penalty': repeat_penalty,
                    'num_predict': max_tokens,
                    'num_ctx': int(num_ctx)
                }
                
                git_options = {
                    'enable_git': enable_git,
                    'commit_message': commit_message if enable_git else None,
                    'auto_push': auto_push if enable_git else False,
                    'remote_name': remote_name if enable_git and auto_push else None,
                    'branch_name': branch_name if enable_git and auto_push else None
                }
                
                process_files_enhanced(
                    md_files[:max_files],
                    selected_model,
                    main_prompt_template,
                    system_prompt,
                    output_folder,
                    delay_between_requests,
                    model_params,
                    show_debug_requests,
                    use_concurrent,
                    max_workers,
                    git_options
                )

def process_files_enhanced(md_files: List[Path], model: str, prompt_template: str, 
                          system_prompt: str, output_folder: str, delay: float,
                          model_params: Dict[str, Any], show_debug_requests: bool,
                          use_concurrent: bool, max_workers: int,
                          git_options: Dict[str, Any]):
    """Enhanced file processing with concurrency and git integration."""
    
    processor = st.session_state.ollama_processor
    git_manager = st.session_state.git_manager
    
    # Create progress containers
    progress_bar = st.progress(0)
    status_container = st.container()
    results_container = st.container()
    
    total_files = len(md_files)
    processed_files = []
    failed_files = []
    
    start_time = time.time()
    
    st.info(f"🎛️ Processing {total_files} files with {max_workers} workers" + 
           (" (concurrent)" if use_concurrent else " (sequential)"))
    
    if use_concurrent and max_workers > 1:
        # Concurrent processing
        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            # Prepare arguments for each file
            file_args = [
                (file_path, model, prompt_template, system_prompt, output_folder, model_params, processor)
                for file_path in md_files
            ]
            
            # Submit all jobs
            future_to_file = {executor.submit(process_single_file, args): args[0] for args in file_args}
            
            # Process completed futures
            for i, future in enumerate(as_completed(future_to_file)):
                file_path = future_to_file[future]
                progress = (i + 1) / total_files
                progress_bar.progress(progress)
                
                try:
                    result = future.result()
                    
                    if result['success']:
                        processed_files.append(result)
                        with status_container:
                            st.success(f"✅ ({i+1}/{total_files}) {file_path.name} → {Path(result['output_path']).name} ({result['processing_time']:.1f}s)")
                    else:
                        failed_files.append(result)
                        with status_container:
                            st.error(f"❌ ({i+1}/{total_files}) {file_path.name}: {result['error']}")
                
                except Exception as e:
                    failed_files.append({
                        'file': str(file_path),
                        'error': str(e),
                        'success': False
                    })
                    with status_container:
                        st.error(f"❌ ({i+1}/{total_files}) {file_path.name}: {str(e)}")
    
    else:
        # Sequential processing
        for i, file_path in enumerate(md_files):
            progress = (i + 1) / total_files
            progress_bar.progress(progress)
            
            with status_container:
                st.info(f"🔄 Processing ({i+1}/{total_files}): {file_path.name}")
            
            # Process single file
            args = (file_path, model, prompt_template, system_prompt, output_folder, model_params, processor)
            result = process_single_file(args)
            
            if result['success']:
                processed_files.append(result)
                with status_container:
                    st.success(f"✅ Completed: {file_path.name} → {Path(result['output_path']).name} ({result['processing_time']:.1f}s)")
            else:
                failed_files.append(result)
                with status_container:
                    st.error(f"❌ Failed: {file_path.name}: {result['error']}")
            
            # Delay for sequential processing
            if delay > 0 and i < total_files - 1:
                time.sleep(delay)
    
    # Git integration
    if git_options.get('enable_git') and processed_files:
        with status_container:
            st.info("📦 Git integration: Adding processed files...")
        
        try:
            # Prepare file paths for git
            output_paths = [result['output_path'] for result in processed_files]
            
            # Create commit message
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            commit_msg = git_options['commit_message'].format(
                count=len(processed_files),
                timestamp=timestamp
            )
            
            # Add and commit files
            success, message = git_manager.add_and_commit_files(output_paths, commit_msg)
            
            if success:
                with status_container:
                    st.success(f"✅ Git commit successful: {message}")
                
                # Auto-push if enabled
                if git_options.get('auto_push'):
                    push_success, push_message = git_manager.push_to_remote(
                        git_options.get('remote_name', 'origin'),
                        git_options.get('branch_name')
                    )
                    
                    if push_success:
                        with status_container:
                            st.success(f"🚀 Git push successful: {push_message}")
                    else:
                        with status_container:
                            st.error(f"❌ Git push failed: {push_message}")
            else:
                with status_container:
                    st.error(f"❌ Git commit failed: {message}")
        
        except Exception as e:
            with status_container:
                st.error(f"❌ Git integration error: {str(e)}")
    
    # Final results
    total_time = time.time() - start_time
    
    with results_container:
        st.header("📊 Enhanced Processing Results")
        
        col1, col2, col3, col4 = st.columns(4)
        
        with col1:
            st.metric("Total Files", total_files)
        with col2:
            st.metric("Successful", len(processed_files))
        with col3:
            st.metric("Failed", len(failed_files))
        with col4:
            st.metric("Total Time", f"{total_time:.1f}s")
        
        # Performance metrics
        if processed_files:
            avg_time = sum(r['processing_time'] for r in processed_files) / len(processed_files)
            st.info(f"⚡ Average processing time: {avg_time:.1f}s per file")
        
        # Show results
        if processed_files:
            st.subheader("✅ Successfully Processed")
            for result in processed_files:
                file_name = Path(result['file']).name
                output_name = Path(result['output_path']).name
                st.success(f"📄 {file_name} → {output_name} ({result['processing_time']:.1f}s)")
        
        if failed_files:
            st.subheader("❌ Failed Files")
            for failure in failed_files:
                file_name = Path(failure['file']).name
                st.error(f"📄 {file_name}: {failure['error']}")
        
        # Export enhanced results
        if processed_files or failed_files:
            results_data = {
                'summary': {
                    'total_files': total_files,
                    'successful': len(processed_files),
                    'failed': len(failed_files),
                    'total_time': total_time,
                    'average_time': avg_time if processed_files else 0,
                    'processing_mode': 'concurrent' if use_concurrent else 'sequential',
                    'max_workers': max_workers,
                    'git_enabled': git_options.get('enable_git', False)
                },
                'processed_files': processed_files,
                'failed_files': failed_files,
                'configuration': {
                    'model': model,
                    'model_parameters': model_params,
                    'system_prompt': system_prompt,
                    'main_prompt_template': prompt_template,
                    'git_options': git_options
                },
                'timestamp': datetime.now().isoformat()
            }
            
            results_json = json.dumps(results_data, indent=2, default=str)
            
            st.download_button(
                label="📥 Download Enhanced Results",
                data=results_json,
                file_name=f"enhanced_results_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json",
                mime="application/json"
            )

if __name__ == "__main__":
    main()