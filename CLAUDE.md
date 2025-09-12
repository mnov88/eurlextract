# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a dual-purpose EurLEX XML metadata extraction system with two specialized applications:

1. **Legislation Extractor** (`legislation-extractor/`) - Parses legislative XML documents from EurLEX
2. **Case Law Extractor** (`case-law-extractor/`) - Parses case law XML documents from EurLEX

The system extracts structured metadata from EurLEX XML notices, with legislative documents potentially referencing case law that interprets specific provisions.

## Current Architecture

### Core Components

**Legislation Extractor** (`legislation-extractor/app.js`)
- `EnhancedEurLexExtractor` class handles legislative document parsing
- Extracts: titles, dates, identifiers (CELEX, ELI), Eurovoc classifications, case law references, implementation data, legal relations, metadata
- Parses article references from case law citations using multiple formats (URI-structured, simple, inferred)
- Article reference parsing in `parseArticleReference()` method

**Case Law Extractor** (`case-law-extractor/app.js`)  
- `CaseLawExtractor` class handles case law document parsing
- Extracts: identifiers (ECLI, CELEX), titles/parties, dates, court info, judges/advocate generals, interpreted legislation, citations, subject matter, academic articles
- Advanced article reference parsing in `parseCaseLawReference()` method with support for various formats

### Data Extraction System

Both extractors use comprehensive XPath mapping systems defined in JSON configuration files:
- `enhanced_xpath_mappings.json` - Structured XPath selectors organized by categories
- Categories: title, language, date, eurovoc, celex, case_law, implementation, legal_relations, metadata

### Article Reference Parsing

The system includes sophisticated parsing for legal article references:
- **URI-structured**: `{AR|...} 10 {PA|...} 3 {PTA|...} (b)`
- **Simple**: `A10P2`, `A15` 
- **Recitals**: `C17`, `C24`
- **Colon-structured**: `ART:55 ALN:1`
- **Fragment numbers**: `N 41`, `N 47 61 69 74`
- **Inferred**: Extracts article numbers from unstructured text

## Running the Applications

Both applications are client-side HTML/JavaScript applications:

1. **Legislation Extractor**: Open `legislation-extractor/index.html` in a browser
2. **Case Law Extractor**: Open `case-law-extractor/index.html` in a browser

No build process, package managers, or server setup required.

## Development Goals & Roadmap

### Goal 1: Create Integrated Version

**Objective**: Combine both extractors into a unified system where:
- Legislative XML is parsed first
- If it refers to cases (and we have XML for those cases), parse them automatically  
- Store both separate and joint output

**Technical Approach**:
- Preserve existing parsing logic (minimal refactor)
- Create new integrated extractor class that leverages both existing extractors
- Implement case law reference detection and automatic retrieval logic

### Goal 2: EU Publications Office API Integration

**Objective**: Enable direct XML retrieval from EU Publications Office API

**API Details**:
```javascript
apiUrl = `https://publications.europa.eu/resource/celex/${celexRef}`
// Required headers:
'Accept': 'application/xml;notice=branch'
'Accept-Language': 'eng'
// Must allow redirects
```

**User Flow**:
1. User enters CELEX identifier
2. XML is retrieved from API and parsed
3. If XML is legislative and contains case CELEX references:
   - User chooses whether to parse referenced cases
   - System retrieves and parses case law XML automatically

### Goal 3: Enhanced Article Reference Logic

**Objective**: Extend article reference parsing to include INT (interpretation) values per case

**Current Limitations**: 
- Article references are parsed but don't capture interpretation context
- Need to enhance parsing to include semantic meaning of how articles are interpreted

## Implementation Strategy

### Phase 1: Integrated Extractor
- Create `IntegratedEurLexExtractor` class
- Combine `EnhancedEurLexExtractor` and `CaseLawExtractor` functionality
- Implement case law detection and linking logic
- Maintain separate outputs plus combined view

### Phase 2: API Integration  
- Add CELEX input interface
- Implement EU Publications Office API client with proper headers and redirect handling
- Add error handling for API failures and invalid CELEX identifiers
- Test with both legislative and case law documents

### Phase 3: Enhanced Article Parsing
- Extend article reference parsing to capture interpretation semantics
- Add INT value extraction and association with specific cases
- Enhance data structure to represent article interpretation relationships

## Technical Considerations

- **Development Environment**: Localhost for now
- **Minimal Refactor**: Preserve existing parsing logic that works well
- **Browser Compatibility**: Ensure API integration works across modern browsers
- **Error Handling**: Robust handling of API failures, invalid XML, missing references
- **Performance**: Consider caching for frequently accessed documents

## Key Features to Maintain

- **Multi-language Support**: EU language detection and handling
- **Search and Filter**: Built-in search across extracted data
- **Export Capabilities**: JSON export of metadata
- **Responsive UI**: Tabbed interface with collapsible sections
- **Copy Functions**: Easy copying of identifiers and data

## Data Structure Categories

Both extractors organize data into:
- **Identifiers**: CELEX, ELI, ECLI, sector codes
- **Titles**: Primary, alternative, multilingual
- **Dates**: Document, publication, signature, entry into force  
- **Legal Relations**: Citations, amendments, repeals, consolidations
- **Classifications**: Eurovoc concepts, domains, subject matter
- **Implementation**: National implementing measures by country
- **Case Law**: Referenced cases with parsed article citations