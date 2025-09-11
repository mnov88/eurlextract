# EurLex and CELLAR XML XPath Extraction Guide

## Overview

This guide provides comprehensive XPath expressions for extracting specific information from EurLex and CELLAR XML legislative notices, particularly useful for legal researchers and academics working with EU law.

## Key Information Extracted

### 1. Document Title
- **Primary Title**: `//EXPRESSION_TITLE/VALUE`
- **Alternative Title**: `//EXPRESSION_TITLE_ALTERNATIVE/VALUE`
- **Subtitle**: `//EXPRESSION_SUBTITLE/VALUE`

### 2. Dates
- **Document Date**: `//WORK_DATE_DOCUMENT/VALUE` (with YEAR, MONTH, DAY)
- **Publication Date**: `//RESOURCE_LEGAL_PUBLISHED_IN_OFFICIAL-JOURNAL/EMBEDDED_NOTICE/WORK/DATE_PUBLICATION/VALUE`
- **Signature Date**: `//RESOURCE_LEGAL_DATE_SIGNATURE/VALUE`
- **Entry into Force**: `//RESOURCE_LEGAL_DATE_ENTRY-INTO-FORCE/VALUE`
- **End of Validity**: `//RESOURCE_LEGAL_DATE_END-OF-VALIDITY/VALUE`

### 3. Eurovoc Tags
- **Concept**: `//WORK_IS_ABOUT_CONCEPT_EUROVOC/WORK_IS_ABOUT_CONCEPT_EUROVOC_CONCEPT/IDENTIFIER`
- **Concept Label**: `//WORK_IS_ABOUT_CONCEPT_EUROVOC/WORK_IS_ABOUT_CONCEPT_EUROVOC_CONCEPT/PREFLABEL`
- **Domain**: `//WORK_IS_ABOUT_CONCEPT_EUROVOC/WORK_IS_ABOUT_CONCEPT_EUROVOC_DOM/IDENTIFIER`
- **Domain Label**: `//WORK_IS_ABOUT_CONCEPT_EUROVOC/WORK_IS_ABOUT_CONCEPT_EUROVOC_DOM/PREFLABEL`

### 4. CELEX Identifiers
- **Main CELEX ID**: `//ID_CELEX/VALUE`
- **Natural Number**: `//RESOURCE_LEGAL_NUMBER_NATURAL_CELEX/VALUE`
- **Type**: `//RESOURCE_LEGAL_TYPE/VALUE`
- **Year**: `//RESOURCE_LEGAL_YEAR/VALUE`
- **Sector**: `//ID_SECTOR/VALUE`
- **ELI**: `//ELI/VALUE` or `//RESOURCE_LEGAL_ELI/VALUE`

### 5. Case Law References

#### Main Case Law Types:
- **Interpreted By**: `//RESOURCE_LEGAL_INTERPRETED_BY_CASE-LAW/SAMEAS/URI/IDENTIFIER`
- **Preliminary Questions**: `//RESOURCE_LEGAL_PRELIMINARY_QUESTION-SUBMITTED_BY_COMMUNICATION_CASE_NEW/SAMEAS/URI/IDENTIFIER`
- **Confirmed By**: `//CASE-LAW_CONFIRMS_RESOURCE_LEGAL/SAMEAS/URI/IDENTIFIER`
- **Declared Valid By**: `//CASE-LAW_DECLARES_VALID_RESOURCE_LEGAL/SAMEAS/URI/IDENTIFIER`
- **Declared Void By**: `//CASE-LAW_DECLARES_VOID_RESOURCE_LEGAL/SAMEAS/URI/IDENTIFIER`

#### Article References:
- **Interpreted Articles**: `//RESOURCE_LEGAL_INTERPRETED_BY_CASE-LAW/ANNOTATION/REFERENCE_TO_MODIFIED_LOCATION`
- **Preliminary Articles**: `//RESOURCE_LEGAL_PRELIMINARY_QUESTION-SUBMITTED_BY_COMMUNICATION_CASE_NEW/ANNOTATION/REFERENCE_TO_MODIFIED_LOCATION`

#### Case Law Details:
- **ECLI**: `//ECLI/VALUE`
- **Case Number**: `//EXPRESSION_CASE-LAW_IDENTIFIER_CASE/VALUE`
- **Case Parties**: `//EXPRESSION_CASE-LAW_PARTIES/VALUE`
- **Court Country**: `//CASE-LAW_ORIGINATES_IN_COUNTRY/PREFLABEL`

## Article Reference Formats

### Complex Structured References:
```
{AR|http://publications.europa.eu/resource/authority/fd_370/AR} 23 {PA|http://publications.europa.eu/resource/authority/fd_370/PA} 1 {PTA|http://publications.europa.eu/resource/authority/fd_370/PTA} (e)
```
This refers to Article 23, Paragraph 1, Point (e)

### Simple References:
```
A58P5    - Article 58, Paragraph 5
A65      - Article 65
A61      - Article 61
```

## XML Structure Overview

EurLex XML notices follow the CELLAR Common Data Model (CDM) structure:

```xml
<NOTICE decoding="eng" type="object">
  <WORK>
    <!-- Document metadata, legal relationships, case law -->
  </WORK>
  <EXPRESSION>
    <!-- Language-specific content, titles -->
  </EXPRESSION>
  <MANIFESTATION>
    <!-- Format-specific information -->
  </MANIFESTATION>
</NOTICE>
```

## Key Namespaces and Patterns

### SAMEAS Elements
Many elements contain `<SAMEAS>` sub-elements with different identifier types:
- `celex` - CELEX identifier
- `eli` - European Legislation Identifier  
- `oj` - Official Journal reference
- `cellar` - CELLAR URI

### URI Types
```xml
<URI>
  <VALUE>http://publications.europa.eu/resource/celex/32016R0679</VALUE>
  <IDENTIFIER>32016R0679</IDENTIFIER>
  <TYPE>celex</TYPE>
</URI>
```

## Web Application Usage

The provided web application (`eurlex-xml-extractor`) allows you to:

1. **Input XML**: Paste XML content or upload files
2. **Extract Data**: Automatically parse and extract structured information
3. **View Results**: Organized display of titles, dates, Eurovoc, CELEX, and case law
4. **Export Data**: Export to JSON or copy individual sections
5. **Article Analysis**: Detailed breakdown of case law article references

### Features:
- ✅ Handles both paste and file upload
- ✅ Comprehensive error handling and validation
- ✅ Clean, organized results display
- ✅ Copy to clipboard functionality
- ✅ JSON export capabilities
- ✅ Statistics and counts for extracted data
- ✅ Responsive design for desktop and tablet

## Common CELEX Patterns

- **32016R0679** - Regulation 679 from 2016 (GDPR)
- **62019CN0620** - Case law from 2019, case number 620
- **31995L0046** - Directive 46 from 1995

## Tips for Usage

1. **XML Validation**: Ensure your XML is well-formed before extraction
2. **Large Files**: The application handles large XML files efficiently
3. **Missing Data**: Not all elements are present in every notice - the app shows "Not found" for missing data
4. **Case Law**: Complex documents may have dozens of case law references
5. **Export**: Use JSON export for further processing or integration with other tools

## Technical Implementation

The XPath expressions use the `//` descendant-or-self axis to handle the complex nested structure of CELLAR XML. The application:

- Uses JavaScript's native `DOMParser` for XML parsing
- Implements XPath-like queries using `querySelector` and `querySelectorAll`
- Handles namespaces and complex structures gracefully
- Provides detailed error messages for parsing issues

## Resources

- [CELLAR Documentation](https://op.europa.eu/en/web/cellar)
- [EurLex Web Services](https://eur-lex.europa.eu/content/tools/webservices/)
- [Publications Office SPARQL Endpoint](http://publications.europa.eu/webapi/rdf/sparql)

This comprehensive guide and application provide researchers with powerful tools to extract structured data from EU legislative XML notices for further analysis and research.