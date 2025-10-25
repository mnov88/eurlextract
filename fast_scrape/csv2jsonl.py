#!/usr/bin/env python3
"""
CSV to OpenAI Batch JSONL Converter - Streamlit App
Modern interface for converting CSV data to JSONL format for OpenAI's Batch API
using the Responses API endpoint with direct input method.

Usage:
    streamlit run csv_batch_converter.py
"""

import streamlit as st
import pandas as pd
import json
import csv
import io
import time
from typing import Dict, Any, List, Optional, Tuple
import re

# Page configuration
st.set_page_config(
    page_title="CSV to OpenAI Batch Converter",
    page_icon="🚀",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom CSS for better styling
st.markdown("""
<style>
    .main-header {
        font-size: 2.5rem;
        font-weight: bold;
        color: #2E86AB;
        text-align: center;
        margin-bottom: 2rem;
    }
    .section-header {
        font-size: 1.5rem;
        font-weight: bold;
        color: #A23B72;
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
    .cost-box {
        background-color: #f0f2f6;
        padding: 1rem;
        border-radius: 0.5rem;
        border-left: 5px solid #2E86AB;
        margin: 1rem 0;
    }
    .preview-box {
        background-color: #f8f9fa;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #dee2e6;
        font-family: 'Courier New', monospace;
        font-size: 0.85rem;
    }
    .success-box {
        background-color: #d4edda;
        color: #155724;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #c3e6cb;
        margin: 1rem 0;
    }
    .warning-box {
        background-color: #fff3cd;
        color: #856404;
        padding: 1rem;
        border-radius: 0.5rem;
        border: 1px solid #ffeeba;
        margin: 1rem 0;
    }
</style>
""", unsafe_allow_html=True)

def estimate_costs(num_requests: int, model: str, avg_input_tokens: int = 150, max_output_tokens: int = 4096) -> Dict[str, float]:
    """Estimate batch processing costs"""
    
    # Updated pricing for 2025 (per 1M tokens)
    model_costs = {
        'gpt-5': {'input': 5.0, 'output': 15.0},
        'gpt-5-mini': {'input': 0.15, 'output': 0.6},
        'gpt-5-nano': {'input': 0.1, 'output': 0.4},
        'gpt-4o': {'input': 2.5, 'output': 10.0},
        'gpt-4o-mini': {'input': 0.15, 'output': 0.6},
        'gpt-4-turbo': {'input': 10.0, 'output': 30.0},
    }
    
    if model not in model_costs:
        return {'regular': 0, 'batch': 0, 'savings': 0}
    
    costs = model_costs[model]
    
    # Calculate costs per 1K tokens
    input_cost_per_request = (avg_input_tokens * costs['input'] / 1_000_000)
    output_cost_per_request = (max_output_tokens * costs['output'] / 1_000_000)
    
    total_cost_per_request = input_cost_per_request + output_cost_per_request
    regular_cost = total_cost_per_request * num_requests
    batch_cost = regular_cost * 0.5  # 50% batch discount
    savings = regular_cost - batch_cost
    
    return {
        'regular': regular_cost,
        'batch': batch_cost,
        'savings': savings
    }

def create_batch_request(row_data: Dict[str, Any], config: Dict[str, Any], row_index: int) -> Dict[str, Any]:
    """Create a batch request for the Responses API"""
    
    # Get custom ID from specified column or generate one
    custom_id = str(row_data.get(config['id_column'], f"req-{row_index}"))
    
    # Get user input from specified column
    user_input = str(row_data.get(config['content_column'], ''))
    
    # Build request body for Responses API
    request_body = {
        "model": config['model']
    }
    
    # Add system instructions
    if config.get('instructions'):
        request_body["instructions"] = config['instructions']
    
    # Add user input
    request_body["input"] = user_input
    
    # Add reasoning parameters (GPT-5 specific)
    if config.get('reasoning_effort') and config.get('reasoning_effort') != 'default':
        request_body["reasoning"] = {"effort": config['reasoning_effort']}
    
    # Add verbosity (GPT-5 specific)  
    if config.get('verbosity') and config.get('verbosity') != 'default':
        request_body.setdefault("text", {})["verbosity"] = config['verbosity']
    
    # Add max output tokens
    if config.get('max_output_tokens'):
        request_body["max_output_tokens"] = config['max_output_tokens']
    
    # Add temperature only for non-GPT-5 models
    if not config['model'].startswith('gpt-5') and config.get('temperature') is not None:
        request_body["temperature"] = config['temperature']
    
    # Add JSON output format if requested
    if config.get('json_output'):
        request_body.setdefault("text", {})["format"] = {"type": "json_object"}
    
    # Add metadata if specified
    if config.get('metadata_columns'):
        metadata = {}
        for col in config['metadata_columns']:
            if col in row_data:
                metadata[col] = str(row_data[col])
        if metadata:
            request_body["metadata"] = metadata
    
    return {
        "custom_id": custom_id,
        "method": "POST",
        "url": "/v1/responses",  # Modern Responses API endpoint
        "body": request_body
    }

def generate_batch_requests(df: pd.DataFrame, config: Dict[str, Any]) -> Tuple[List[Dict], Dict]:
    """Generate batch requests, filtering out rows with missing content"""
    
    # Filter out rows with missing content or IDs
    id_column = config['id_column']
    content_column = config['content_column']
    
    # Create mask for valid rows (non-null ID and content)
    valid_mask = ~(df[id_column].isna() | df[content_column].isna())
    valid_df = df[valid_mask].copy()
    
    # Track skipped rows
    skipped_indices = df[~valid_mask].index.tolist()
    skipped_info = {
        'total_skipped': len(skipped_indices),
        'skipped_indices': skipped_indices,
        'valid_rows': len(valid_df)
    }
    
    # Generate requests for valid rows only
    requests = []
    for idx, (_, row) in enumerate(valid_df.iterrows()):
        row_dict = row.to_dict()
        request = create_batch_request(row_dict, config, idx)
        requests.append(request)
    
    return requests, skipped_info
    """Create a batch request for the Responses API"""
    
    # Get custom ID from specified column or generate one
    custom_id = str(row_data.get(config['id_column'], f"req-{row_index}"))
    
    # Get user input from specified column
    user_input = str(row_data.get(config['content_column'], ''))
    
    # Build request body for Responses API
    request_body = {
        "model": config['model']
    }
    
    # Add system instructions
    if config.get('instructions'):
        request_body["instructions"] = config['instructions']
    
    # Add user input
    request_body["input"] = user_input
    
    # Add reasoning parameters (GPT-5 specific)
    if config.get('reasoning_effort') and config.get('reasoning_effort') != 'default':
        request_body["reasoning"] = {"effort": config['reasoning_effort']}
    
    # Add verbosity (GPT-5 specific)  
    if config.get('verbosity') and config.get('verbosity') != 'default':
        request_body.setdefault("text", {})["verbosity"] = config['verbosity']
    
    # Add max output tokens
    if config.get('max_output_tokens'):
        request_body["max_output_tokens"] = config['max_output_tokens']
    
    # Add temperature only for non-GPT-5 models
    if not config['model'].startswith('gpt-5') and config.get('temperature') is not None:
        request_body["temperature"] = config['temperature']
    
    # Add JSON output format if requested
    if config.get('json_output'):
        request_body.setdefault("text", {})["format"] = {"type": "json_object"}
    
    # Add metadata if specified
    if config.get('metadata_columns'):
        metadata = {}
        for col in config['metadata_columns']:
            if col in row_data:
                metadata[col] = str(row_data[col])
        if metadata:
            request_body["metadata"] = metadata
    
    return {
        "custom_id": custom_id,
        "method": "POST",
        "url": "/v1/responses",  # Modern Responses API endpoint
        "body": request_body
    }

def validate_csv_data(df: pd.DataFrame, id_column: str, content_column: str) -> Tuple[bool, str, Dict[str, Any]]:
    """Validate CSV data and return validation info"""
    validation_info = {
        'total_rows': len(df),
        'missing_ids': 0,
        'missing_content': 0,
        'valid_rows': 0,
        'missing_id_indices': [],
        'missing_content_indices': []
    }
    
    if df.empty:
        return False, "CSV file is empty", validation_info
    
    if id_column not in df.columns:
        return False, f"ID column '{id_column}' not found in CSV", validation_info
    
    if content_column not in df.columns:
        return False, f"Content column '{content_column}' not found in CSV", validation_info
    
    # Check for missing values and log them
    missing_ids = df[id_column].isna()
    missing_content = df[content_column].isna()
    
    validation_info['missing_ids'] = missing_ids.sum()
    validation_info['missing_content'] = missing_content.sum()
    validation_info['missing_id_indices'] = df[missing_ids].index.tolist()
    validation_info['missing_content_indices'] = df[missing_content].index.tolist()
    
    # Calculate valid rows (rows that have both ID and content)
    valid_rows = ~(missing_ids | missing_content)
    validation_info['valid_rows'] = valid_rows.sum()
    
    # Critical error: missing ID column values (we need IDs for batch processing)
    if validation_info['missing_ids'] > 0:
        return False, f"Missing values found in ID column '{id_column}' (rows: {validation_info['missing_id_indices']})", validation_info
    
    # If no valid rows at all, that's an error
    if validation_info['valid_rows'] == 0:
        return False, "No valid rows found (all content values are missing)", validation_info
    
    # Missing content is OK - we'll just skip those rows
    return True, "CSV data validated successfully", validation_info

def main():
    """Main Streamlit application"""
    
    # Header
    st.markdown('<h1 class="main-header">🚀 CSV to OpenAI Batch Converter</h1>', unsafe_allow_html=True)
    st.markdown("**Convert your CSV data to JSONL format for OpenAI's Batch API using the modern Responses API endpoint**")
    
    # Sidebar configuration
    st.sidebar.header("⚙️ Configuration")
    
    # Model selection
    model = st.sidebar.selectbox(
        "Select Model",
        options=[
            'gpt-5', 'gpt-5-mini', 'gpt-5-nano',
            'gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo'
        ],
        index=1,  # Default to gpt-5-mini for cost efficiency
        help="Choose the OpenAI model. GPT-5 models offer advanced reasoning capabilities."
    )
    
    # Model-specific parameters
    is_gpt5 = model.startswith('gpt-5')
    
    if is_gpt5:
        st.sidebar.info("🧠 GPT-5 models support advanced reasoning and verbosity controls")
        
        reasoning_effort = st.sidebar.selectbox(
            "Reasoning Effort",
            options=['default', 'minimal', 'low', 'medium', 'high'],
            index=3,  # Default to medium
            help="How much computational effort the model should use for reasoning"
        )
        
        verbosity = st.sidebar.selectbox(
            "Verbosity Level",
            options=['default', 'low', 'medium', 'high'],
            index=2,  # Default to medium
            help="Control how verbose the model's responses are"
        )
        
        temperature = None  # GPT-5 doesn't support custom temperature
        st.sidebar.info("ℹ️ Temperature is not configurable for GPT-5 models")
        
    else:
        reasoning_effort = None
        verbosity = None
        temperature = st.sidebar.slider(
            "Temperature",
            min_value=0.0,
            max_value=1.0,
            value=0.7,
            step=0.1,
            help="Controls randomness. 0 = deterministic, 1 = very random"
        )
    
    # Output parameters
    max_output_tokens = st.sidebar.slider(
        "Max Output Tokens",
        min_value=256,
        max_value=16384,
        value=4096,
        step=256,
        help="Maximum number of tokens in the response"
    )
    
    json_output = st.sidebar.checkbox(
        "JSON Output Format",
        help="Force the model to respond in JSON format"
    )
    
    # Main content area with two columns
    col1, col2 = st.columns([1, 1])
    
    with col1:
        st.markdown('<h2 class="section-header">📁 Upload & Configure</h2>', unsafe_allow_html=True)
        
        # File upload
        uploaded_file = st.file_uploader(
            "Upload CSV File",
            type=['csv'],
            help="Upload your CSV file with the data to process"
        )
        
        if uploaded_file is not None:
            try:
                # Read CSV
                df = pd.read_csv(uploaded_file)
                
                st.success(f"✅ Loaded CSV with {len(df)} rows and {len(df.columns)} columns")
                
                # Show CSV preview
                with st.expander("📋 Preview CSV Data", expanded=False):
                    st.dataframe(df.head(10))
                
                # Column selection
                st.subheader("🎯 Column Mapping")
                
                col_a, col_b = st.columns(2)
                with col_a:
                    id_column = st.selectbox(
                        "ID Column",
                        options=df.columns.tolist(),
                        index=0 if 'ID' in df.columns else 0,
                        help="Column containing unique identifiers"
                    )
                
                with col_b:
                    content_column = st.selectbox(
                        "Content Column", 
                        options=df.columns.tolist(),
                        index=df.columns.tolist().index('decision_text') if 'decision_text' in df.columns else 1,
                        help="Column containing the text to process"
                    )
                
                # Metadata columns
                metadata_columns = st.multiselect(
                    "Metadata Columns (Optional)",
                    options=[col for col in df.columns if col not in [id_column, content_column]],
                    help="Additional columns to include as metadata"
                )
                
                # System prompt
                st.subheader("📝 System Prompt (Instructions)")
                instructions = st.text_area(
                    "Instructions",
                    value="""You are a legal document analyst. Analyze the provided legal decision text and extract key information including:

1. Main legal issue or question
2. Court's decision or ruling  
3. Key legal principles or precedents cited
4. Practical implications

Provide your analysis in a clear, structured format.""",
                    height=150,
                    help="System-level instructions that define how the model should behave"
                )
                
                # Validate configuration
                is_valid, validation_message, validation_info = validate_csv_data(df, id_column, content_column)
                
                if is_valid:
                    # Show validation summary
                    col_info_a, col_info_b = st.columns(2)
                    with col_info_a:
                        st.metric("📊 Total Rows", validation_info['total_rows'])
                        st.metric("✅ Valid Rows", validation_info['valid_rows'])
                    
                    with col_info_b:
                        if validation_info['missing_content'] > 0:
                            st.metric("⚠️ Missing Content", validation_info['missing_content'])
                        if validation_info['missing_ids'] > 0:
                            st.metric("❌ Missing IDs", validation_info['missing_ids'])
                    
                    # Show warnings for missing data
                    if validation_info['missing_content'] > 0:
                        st.warning(f"""
                        **⚠️ Missing Content Warning**  
                        Found {validation_info['missing_content']} rows with missing values in '{content_column}' column.  
                        These rows will be **skipped** during JSONL generation.
                        
                        **Affected rows:** {', '.join(map(str, validation_info['missing_content_indices'][:10]))}
                        {f"... and {len(validation_info['missing_content_indices']) - 10} more" if len(validation_info['missing_content_indices']) > 10 else ""}
                        """)
                    
                    if validation_info['valid_rows'] < validation_info['total_rows']:
                        st.info(f"✅ Will process {validation_info['valid_rows']} out of {validation_info['total_rows']} rows")
                    
                    # Build configuration
                    config = {
                        'model': model,
                        'id_column': id_column,
                        'content_column': content_column,
                        'instructions': instructions.strip(),
                        'reasoning_effort': reasoning_effort,
                        'verbosity': verbosity,
                        'temperature': temperature,
                        'max_output_tokens': max_output_tokens,
                        'json_output': json_output,
                        'metadata_columns': metadata_columns
                    }
                    
                    # Store in session state
                    st.session_state['df'] = df
                    st.session_state['config'] = config
                    st.session_state['validation_info'] = validation_info
                    st.session_state['valid'] = True
                    
                else:
                    st.error(f"❌ Configuration Error: {validation_message}")
                    st.session_state['valid'] = False
            
            except Exception as e:
                st.error(f"❌ Error reading CSV file: {str(e)}")
                st.session_state['valid'] = False
        
        else:
            st.info("👆 Upload a CSV file to get started")
            st.session_state['valid'] = False
    
    with col2:
        st.markdown('<h2 class="section-header">👁️ Preview & Generate</h2>', unsafe_allow_html=True)
        
        if st.session_state.get('valid', False):
            df = st.session_state['df']
            config = st.session_state['config']
            validation_info = st.session_state['validation_info']
            
            # Cost estimation using valid rows only
            valid_rows = validation_info['valid_rows']
            costs = estimate_costs(valid_rows, config['model'], max_output_tokens=config['max_output_tokens'])
            
            st.markdown(f"""
            <div class="cost-box">
                <h4>💰 Cost Estimation</h4>
                <p><strong>Valid Requests:</strong> {valid_rows:,} out of {validation_info['total_rows']:,} total rows</p>
                <p><strong>Model:</strong> {config['model']}</p>
                <p><strong>Regular Cost:</strong> ${costs['regular']:.2f}</p>
                <p><strong>Batch Cost (50% off):</strong> ${costs['batch']:.2f}</p>
                <p><strong>Savings:</strong> ${costs['savings']:.2f}</p>
            </div>
            """, unsafe_allow_html=True)
            
            # Preview sample request using first valid row
            if valid_rows > 0:
                st.subheader("🔍 Sample Request Preview")
                
                # Find first valid row
                id_column = config['id_column']
                content_column = config['content_column']
                valid_mask = ~(df[id_column].isna() | df[content_column].isna())
                first_valid_row = df[valid_mask].iloc[0].to_dict()
                
                sample_request = create_batch_request(first_valid_row, config, 0)
                
                st.markdown(f"""
                <div class="preview-box">
                <strong>Sample JSONL Request:</strong><br>
                {json.dumps(sample_request, indent=2, ensure_ascii=False)}
                </div>
                """, unsafe_allow_html=True)
            
            # Generate button
            if st.button("🚀 Generate JSONL File", type="primary", use_container_width=True):
                try:
                    # Generate requests for valid rows only
                    requests, skipped_info = generate_batch_requests(df, config)
                    
                    # Show progress
                    progress_bar = st.progress(0)
                    status_text = st.empty()
                    
                    # Simulate progress for user feedback
                    import time
                    for i in range(len(requests)):
                        progress_bar.progress((i + 1) / len(requests))
                        if i % 50 == 0:  # Update status every 50 requests
                            status_text.text(f"Generated {i + 1}/{len(requests)} requests...")
                            time.sleep(0.01)  # Small delay for visual feedback
                    
                    # Convert to JSONL format
                    jsonl_content = '\n'.join([json.dumps(req, ensure_ascii=False) for req in requests])
                    
                    # Show completion summary
                    status_text.empty()
                    progress_bar.empty()
                    
                    col_summary_a, col_summary_b = st.columns(2)
                    with col_summary_a:
                        st.success(f"✅ Generated {len(requests)} requests successfully!")
                    
                    with col_summary_b:
                        if skipped_info['total_skipped'] > 0:
                            st.warning(f"⚠️ Skipped {skipped_info['total_skipped']} rows with missing content")
                    
                    # Show detailed skip information if any rows were skipped
                    if skipped_info['total_skipped'] > 0:
                        with st.expander(f"📋 View Skipped Rows ({skipped_info['total_skipped']} total)", expanded=False):
                            skipped_rows = df.loc[skipped_info['skipped_indices']]
                            st.dataframe(skipped_rows[[config['id_column'], config['content_column']]])
                            st.caption("These rows were excluded from the JSONL file due to missing content.")
                    
                    # Download button
                    st.download_button(
                        label="📥 Download JSONL File",
                        data=jsonl_content,
                        file_name=f"batch_requests_{config['model'].replace('-', '_')}.jsonl",
                        mime="application/json",
                        use_container_width=True
                    )
                    
                    # Store for next steps
                    st.session_state['jsonl_content'] = jsonl_content
                    st.session_state['generation_summary'] = {
                        'generated': len(requests),
                        'skipped': skipped_info['total_skipped'],
                        'total': validation_info['total_rows']
                    }
                    
                except Exception as e:
                    st.error(f"❌ Error generating JSONL: {str(e)}")
                    st.exception(e)  # Show full traceback for debugging
        
        else:
            st.info("👈 Configure your CSV upload and settings first")
    
    # Next steps section
    if st.session_state.get('jsonl_content'):
        st.markdown('<h2 class="section-header">🔄 Next Steps: Upload to OpenAI</h2>', unsafe_allow_html=True)
        
        # Show generation summary if available
        if st.session_state.get('generation_summary'):
            summary = st.session_state['generation_summary']
            
            col_sum_a, col_sum_b, col_sum_c = st.columns(3)
            with col_sum_a:
                st.metric("📊 Total Rows", summary['total'])
            with col_sum_b:
                st.metric("✅ Generated", summary['generated']) 
            with col_sum_c:
                st.metric("⚠️ Skipped", summary['skipped'])
        
        # Instructions for using the generated file
        st.markdown("""
        <div class="success-box">
        <h4>🎉 Your JSONL file is ready!</h4>
        <p>Follow these steps to process your batch with OpenAI:</p>
        </div>
        """, unsafe_allow_html=True)
        
        # Code examples
        col1, col2 = st.columns(2)
        
        with col1:
            st.subheader("📚 Python Code")
            st.code("""
import openai

client = openai.OpenAI(api_key="your-api-key")

# 1. Upload JSONL file
batch_file = client.files.create(
    file=open("batch_requests.jsonl", "rb"),
    purpose="batch"
)

# 2. Create batch job
batch_job = client.batches.create(
    input_file_id=batch_file.id,
    endpoint="/v1/responses",  # Modern endpoint!
    completion_window="24h"
)

print(f"Batch created: {batch_job.id}")
            """, language="python")
        
        with col2:
            st.subheader("🔍 Monitor Progress")
            st.code("""
# Check status
status = client.batches.retrieve(batch_job.id)
print(f"Status: {status.status}")

# Download results (when complete)
if status.status == "completed":
    result_content = client.files.content(
        status.output_file_id
    )
    
    with open("results.jsonl", "wb") as f:
        f.write(result_content.read())
    
    print("✅ Results downloaded!")
            """, language="python")
    
    # Performance tips
    st.markdown("""
    ### 💡 Pro Tips
    
    - **Test First**: Try with a small subset before processing large files
    - **Monitor Costs**: Batch processing offers 50% discount but still costs money
    - **Check Status**: Batches complete within 24 hours, usually much faster
    - **Error Handling**: Some requests may fail - check the output for error details
    - **Rate Limits**: Batch processing has separate, higher rate limits than regular API calls
    """)

if __name__ == "__main__":
    # Initialize session state
    if 'valid' not in st.session_state:
        st.session_state['valid'] = False
    
    main()