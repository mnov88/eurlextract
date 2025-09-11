class EnhancedEurLexExtractor {
    constructor() {
        this.xmlDoc = null;
        this.extractedData = {};
        this.availableLanguages = [];
        this.selectedLanguage = '';
        this.isProcessing = false;
        this.processingTimeout = null;
        this.euLanguages = {
            'bg': 'Bulgarian', 'cs': 'Czech', 'da': 'Danish', 'de': 'German',
            'el': 'Greek', 'en': 'English', 'es': 'Spanish', 'et': 'Estonian',
            'fi': 'Finnish', 'fr': 'French', 'ga': 'Irish', 'hr': 'Croatian',
            'hu': 'Hungarian', 'it': 'Italian', 'lt': 'Lithuanian', 'lv': 'Latvian',
            'mt': 'Maltese', 'nl': 'Dutch', 'pl': 'Polish', 'pt': 'Portuguese',
            'ro': 'Romanian', 'sk': 'Slovak', 'sl': 'Slovenian', 'sv': 'Swedish'
        };
        this.initializeEventListeners();
        this.resetApplicationState();
    }

    initializeEventListeners() {
        // Tab switching
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(e.target.dataset.tab);
            });
        });

        // File upload
        document.getElementById('xml-file').addEventListener('change', (e) => this.handleFileUpload(e));

        // Extract button
        document.getElementById('extract-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.extractData();
        });

        // Clear button
        document.getElementById('clear-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.clearInput();
        });

        // Language selector
        document.getElementById('language-selector').addEventListener('change', (e) => {
            this.selectedLanguage = e.target.value;
            this.updateDisplayWithSelectedLanguage();
        });

        // Search functionality
        document.getElementById('search-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.performSearch();
        });

        document.getElementById('clear-search-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.clearSearch();
        });

        document.getElementById('search-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch();
            }
        });

        // Toggle sections
        document.querySelectorAll('.result-header').forEach(header => {
            header.addEventListener('click', (e) => {
                e.preventDefault();
                this.toggleSection(e.currentTarget);
            });
        });

        // Copy buttons
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('copy-btn')) {
                e.preventDefault();
                this.copyToClipboard(e.target);
            }
        });

        // Export button
        document.getElementById('export-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.exportData();
        });

        // Copy all button
        document.getElementById('copy-all-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.copyAllData();
        });

        // Language comparison
        document.getElementById('comparison-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.showLanguageComparison();
        });
    }

    resetApplicationState() {
        this.isProcessing = false;
        this.availableLanguages = [];
        this.selectedLanguage = '';
        this.hideLoading();
        this.hideError();
        this.hideResults();
        this.hideSearch();
        this.resetLanguageStatus();
        if (this.processingTimeout) {
            clearTimeout(this.processingTimeout);
            this.processingTimeout = null;
        }
    }

    switchTab(tabId) {
        if (!tabId) return;
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.add('hidden');
            content.classList.remove('active');
        });
        const targetTab = document.getElementById(tabId);
        if (targetTab) {
            targetTab.classList.remove('hidden');
            targetTab.classList.add('active');
        }
    }

    handleFileUpload(event) {
        const file = event.target.files[0];
        const statusDiv = document.getElementById('upload-status');

        if (!file) {
            statusDiv.innerHTML = '';
            statusDiv.className = 'upload-status';
            return;
        }

        if (file.type !== 'text/xml' && file.type !== 'application/xml' && !file.name.endsWith('.xml')) {
            statusDiv.innerHTML = '<span class="status status--error">Please select a valid XML file</span>';
            statusDiv.className = 'upload-status error';
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            document.getElementById('xml-textarea').value = e.target.result;
            statusDiv.innerHTML = `<span class="status status--success">File "${file.name}" loaded successfully</span>`;
            statusDiv.className = 'upload-status success';
        };

        reader.onerror = () => {
            statusDiv.innerHTML = '<span class="status status--error">Error reading file</span>';
            statusDiv.className = 'upload-status error';
        };

        reader.readAsText(file);
    }

    clearInput() {
        this.isProcessing = false;
        if (this.processingTimeout) {
            clearTimeout(this.processingTimeout);
            this.processingTimeout = null;
        }

        document.getElementById('xml-textarea').value = '';
        document.getElementById('xml-file').value = '';
        const statusDiv = document.getElementById('upload-status');
        statusDiv.innerHTML = '';
        statusDiv.className = 'upload-status';
        
        this.resetApplicationState();
        this.xmlDoc = null;
        this.extractedData = {};
    }

    async extractData() {
        if (this.isProcessing) return;

        const xmlContent = document.getElementById('xml-textarea').value.trim();
        if (!xmlContent) {
            this.showError('Please provide XML content to extract');
            return;
        }

        this.isProcessing = true;
        this.showLoading();

        this.processingTimeout = setTimeout(() => {
            if (this.isProcessing) {
                this.isProcessing = false;
                this.hideLoading();
                this.showError('Processing timeout - XML extraction took too long');
            }
        }, 15000);

        try {
            await new Promise(resolve => setTimeout(resolve, 300));

            if (!this.isProcessing) return;

            const parser = new DOMParser();
            this.xmlDoc = parser.parseFromString(xmlContent, 'text/xml');

            const parserError = this.xmlDoc.querySelector('parsererror');
            if (parserError) {
                throw new Error('Invalid XML format. Please check your XML syntax.');
            }

            if (!this.isProcessing) return;

            // First, detect available languages
            this.detectAvailableLanguages();
            
            // Extract all enhanced data
            this.extractedData = {
                languages: this.availableLanguages,
                title: this.extractTitleData(),
                dates: this.extractDateData(),
                identifiers: this.extractIdentifiersData(),
                eurovoc: this.extractEurovocData(),
                caselaw: this.extractCaseLawData(),
                implementation: this.extractImplementationData(),
                legalRelations: this.extractLegalRelationsData(),
                metadata: this.extractMetadataData()
            };

            if (!this.isProcessing) return;

            this.displayResults();
            this.updateStatistics();
            this.showSearch();
            this.updateLanguageUI();
            
            if (this.processingTimeout) {
                clearTimeout(this.processingTimeout);
                this.processingTimeout = null;
            }
            
            this.isProcessing = false;
            this.hideLoading();
            this.showResults();

        } catch (error) {
            this.isProcessing = false;
            if (this.processingTimeout) {
                clearTimeout(this.processingTimeout);
                this.processingTimeout = null;
            }
            this.hideLoading();
            this.showError('Error processing XML: ' + error.message);
            console.error('Extraction error:', error);
        }
    }

    detectAvailableLanguages() {
        const detectedLangs = new Set();

        try {
            // Method 1: Find all elements with lang attributes
            const elementsWithLang = this.xmlDoc.querySelectorAll('*[lang], *[xml\\:lang]');
            elementsWithLang.forEach(element => {
                const lang = element.getAttribute('lang') || element.getAttribute('xml:lang');
                if (lang && this.euLanguages[lang.toLowerCase()]) {
                    detectedLangs.add(lang.toLowerCase());
                }
            });

            // Method 2: Find LANG elements
            const langElements = this.xmlDoc.querySelectorAll('LANG');
            langElements.forEach(element => {
                const lang = element.textContent?.trim().toLowerCase();
                if (lang && this.euLanguages[lang]) {
                    detectedLangs.add(lang);
                }
            });

            // Method 3: Look for common language patterns in element names and content
            const titleElements = this.xmlDoc.querySelectorAll('EXPRESSION_TITLE, DOSSIER_TITLE, WORK_TITLE');
            titleElements.forEach(element => {
                const langAttr = element.getAttribute('xml:lang') || element.getAttribute('lang');
                if (langAttr && this.euLanguages[langAttr.toLowerCase()]) {
                    detectedLangs.add(langAttr.toLowerCase());
                }
            });

            // Method 4: Check VALUE elements with language attributes
            const valueElements = this.xmlDoc.querySelectorAll('VALUE[xml\\:lang], VALUE[lang]');
            valueElements.forEach(element => {
                const lang = element.getAttribute('xml:lang') || element.getAttribute('lang');
                if (lang && this.euLanguages[lang.toLowerCase()]) {
                    detectedLangs.add(lang.toLowerCase());
                }
            });

            // Method 5: Check PREFLABEL elements with language attributes
            const prefLabelElements = this.xmlDoc.querySelectorAll('PREFLABEL[xml\\:lang], PREFLABEL[lang]');
            prefLabelElements.forEach(element => {
                const lang = element.getAttribute('xml:lang') || element.getAttribute('lang');
                if (lang && this.euLanguages[lang.toLowerCase()]) {
                    detectedLangs.add(lang.toLowerCase());
                }
            });

            // If no languages detected through attributes, make educated guesses
            if (detectedLangs.size === 0) {
                // Look for common language indicators in text content
                const allText = this.xmlDoc.documentElement.textContent || '';
                if (allText.toLowerCase().includes('english') || allText.includes('EN')) {
                    detectedLangs.add('en');
                }
                if (allText.toLowerCase().includes('french') || allText.includes('FR')) {
                    detectedLangs.add('fr');
                }
                if (allText.toLowerCase().includes('german') || allText.includes('DE')) {
                    detectedLangs.add('de');
                }
            }

        } catch (error) {
            console.warn('Error detecting languages:', error);
        }

        this.availableLanguages = Array.from(detectedLangs).sort();
        
        // Default to English if available, otherwise first available language
        if (this.availableLanguages.includes('en')) {
            this.selectedLanguage = 'en';
        } else if (this.availableLanguages.length > 0) {
            this.selectedLanguage = this.availableLanguages[0];
        }

        console.log('Detected languages:', this.availableLanguages);
    }

    extractTitleData() {
        const getMultilingualText = (selector) => {
            const results = {};
            try {
                const elements = this.xmlDoc.querySelectorAll(selector);
                elements.forEach(element => {
                    const lang = element.getAttribute('lang') || element.getAttribute('xml:lang') || 'unknown';
                    const text = element.textContent?.trim();
                    if (text) {
                        if (!results[lang]) results[lang] = [];
                        results[lang].push(text);
                    }
                });
            } catch (error) {
                console.warn('Error extracting multilingual text:', error);
            }
            return results;
        };

        return {
            primary: this.getTextContent('EXPRESSION_TITLE VALUE') || 
                    this.getTextContent('WORK_TITLE VALUE') || 
                    this.getTextContent('title') || 'Not found',
            work: this.getTextContent('WORK_TITLE VALUE') || 'Not found',
            alternative: this.getTextArray('EXPRESSION_TITLE_ALTERNATIVE VALUE'),
            subtitle: this.getTextArray('EXPRESSION_SUBTITLE VALUE'),
            multilingual: getMultilingualText('EXPRESSION_TITLE VALUE, WORK_TITLE VALUE, DOSSIER_TITLE')
        };
    }

    extractDateData() {
        const getDateFromComponents = () => {
            try {
                const yearEl = this.xmlDoc.querySelector('WORK_DATE_DOCUMENT YEAR');
                const monthEl = this.xmlDoc.querySelector('WORK_DATE_DOCUMENT MONTH');
                const dayEl = this.xmlDoc.querySelector('WORK_DATE_DOCUMENT DAY');
                
                const year = yearEl?.textContent?.trim();
                const month = monthEl?.textContent?.trim();
                const day = dayEl?.textContent?.trim();
                
                if (year && month && day) {
                    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
                }
                return null;
            } catch (error) {
                return null;
            }
        };

        return {
            document: this.getTextContent('WORK_DATE_DOCUMENT VALUE') || getDateFromComponents() || 'Not found',
            publication: this.getTextContent('DATE_PUBLICATION VALUE') || 
                        this.getTextContent('RESOURCE_LEGAL_PUBLISHED_IN_OFFICIAL-JOURNAL EMBEDDED_NOTICE WORK DATE_PUBLICATION VALUE') || 'Not found',
            signature: this.getTextContent('RESOURCE_LEGAL_DATE_SIGNATURE VALUE') || 'Not found',
            entryIntoForce: this.getTextContent('RESOURCE_LEGAL_DATE_ENTRY-INTO-FORCE VALUE') || 'Not found',
            endOfValidity: this.getTextContent('RESOURCE_LEGAL_DATE_END-OF-VALIDITY VALUE') || 'Not found',
            transpositionDeadline: this.getTextContent('RESOURCE_LEGAL_DATE_DEADLINE VALUE') || 'Not found'
        };
    }

    extractIdentifiersData() {
        return {
            celex: this.getTextContent('ID_CELEX VALUE') || 'Not found',
            eli: this.getTextContent('ELI VALUE') || this.getTextContent('RESOURCE_LEGAL_ELI VALUE') || 'Not found',
            ojReference: this.getTextContent('SAMEAS URI[TYPE="oj"] IDENTIFIER') || 'Not found',
            immc: this.getTextContent('SAMEAS URI[TYPE="immc"] IDENTIFIER') || 'Not found',
            naturalNumber: this.getTextContent('RESOURCE_LEGAL_NUMBER_NATURAL_CELEX VALUE') || 'Not found',
            type: this.getTextContent('RESOURCE_LEGAL_TYPE VALUE') || 'Not found',
            year: this.getTextContent('RESOURCE_LEGAL_YEAR VALUE') || 'Not found',
            sector: this.getTextContent('ID_SECTOR VALUE') || 'Not found'
        };
    }

    extractEurovocData() {
        const extractEurovocItems = (identifierSelector, labelSelector) => {
            try {
                const items = [];
                const identifierElements = this.xmlDoc.querySelectorAll(identifierSelector);
                
                identifierElements.forEach((idElement, index) => {
                    const id = idElement.textContent?.trim();
                    if (id) {
                        // Find corresponding label element
                        const labelElements = this.xmlDoc.querySelectorAll(labelSelector);
                        const labelElement = labelElements[index];
                        
                        const label = labelElement?.textContent?.trim() || 'No label';
                        const lang = labelElement?.getAttribute('lang') || 
                                   labelElement?.getAttribute('xml:lang') || 'unknown';
                        
                        items.push({ id, label, language: lang });
                    }
                });
                
                return items;
            } catch (error) {
                console.warn('Error extracting Eurovoc data:', error);
                return [];
            }
        };

        return {
            concepts: extractEurovocItems(
                'WORK_IS_ABOUT_CONCEPT_EUROVOC WORK_IS_ABOUT_CONCEPT_EUROVOC_CONCEPT IDENTIFIER',
                'WORK_IS_ABOUT_CONCEPT_EUROVOC WORK_IS_ABOUT_CONCEPT_EUROVOC_CONCEPT PREFLABEL'
            ),
            domains: extractEurovocItems(
                'WORK_IS_ABOUT_CONCEPT_EUROVOC WORK_IS_ABOUT_CONCEPT_EUROVOC_DOM IDENTIFIER',
                'WORK_IS_ABOUT_CONCEPT_EUROVOC WORK_IS_ABOUT_CONCEPT_EUROVOC_DOM PREFLABEL'
            ),
            microthesaurus: extractEurovocItems(
                'WORK_IS_ABOUT_CONCEPT_EUROVOC WORK_IS_ABOUT_CONCEPT_EUROVOC_MTH IDENTIFIER',
                'WORK_IS_ABOUT_CONCEPT_EUROVOC WORK_IS_ABOUT_CONCEPT_EUROVOC_MTH PREFLABEL'
            ),
            terms: extractEurovocItems(
                'WORK_IS_ABOUT_CONCEPT_EUROVOC WORK_IS_ABOUT_CONCEPT_EUROVOC_TT IDENTIFIER',
                'WORK_IS_ABOUT_CONCEPT_EUROVOC WORK_IS_ABOUT_CONCEPT_EUROVOC_TT PREFLABEL'
            )
        };
    }

    extractCaseLawData() {
        const cases = [];
        
        try {
            // Extract interpreted by case law
            const interpretedCases = this.xmlDoc.querySelectorAll('RESOURCE_LEGAL_INTERPRETED_BY_CASE-LAW');
            interpretedCases.forEach(caseElement => {
                const celexElements = Array.from(caseElement.querySelectorAll('SAMEAS URI')).filter(uri => 
                    uri.querySelector('TYPE')?.textContent === 'celex'
                );
                
                celexElements.forEach(celexUri => {
                    const celexId = celexUri.querySelector('IDENTIFIER')?.textContent.trim();
                    if (celexId) {
                        const articles = Array.from(caseElement.querySelectorAll('ANNOTATION REFERENCE_TO_MODIFIED_LOCATION'))
                            .map(ref => ref.textContent.trim())
                            .filter(ref => ref);
                        
                        cases.push({
                            celexId: celexId,
                            articles: articles.length > 0 ? articles : ['Not specified'],
                            parsedArticles: articles.map(article => this.parseArticleReference(article)),
                            type: 'Interpreted by'
                        });
                    }
                });
            });

            // Extract preliminary question cases
            const preliminaryQuestions = this.xmlDoc.querySelectorAll('RESOURCE_LEGAL_PRELIMINARY_QUESTION-SUBMITTED_BY_COMMUNICATION_CASE_NEW');
            preliminaryQuestions.forEach(caseElement => {
                const celexElements = Array.from(caseElement.querySelectorAll('SAMEAS URI')).filter(uri => 
                    uri.querySelector('TYPE')?.textContent === 'celex'
                );
                
                celexElements.forEach(celexUri => {
                    const celexId = celexUri.querySelector('IDENTIFIER')?.textContent.trim();
                    if (celexId) {
                        const articles = Array.from(caseElement.querySelectorAll('ANNOTATION REFERENCE_TO_MODIFIED_LOCATION'))
                            .map(ref => ref.textContent.trim())
                            .filter(ref => ref);
                        
                        cases.push({
                            celexId: celexId,
                            articles: articles.length > 0 ? articles : ['Not specified'],
                            parsedArticles: articles.map(article => this.parseArticleReference(article)),
                            type: 'Preliminary question'
                        });
                    }
                });
            });
        } catch (error) {
            console.warn('Error extracting case law data:', error);
        }

        return cases;
    }

    parseArticleReference(reference) {
        if (!reference || reference === 'Not specified') {
            return { parsed: 'Not specified', type: 'none' };
        }

        // URI-structured references: {AR|...} 10 {PA|...} 3 {PTA|...} (b)
        if (reference.includes('{AR|')) {
            const articleMatch = reference.match(/\{AR\|[^}]*\}\s*(\d+)/);
            const paragraphMatch = reference.match(/\{PA\|[^}]*\}\s*(\d+)/);
            const pointMatch = reference.match(/\{PTA\|[^}]*\}\s*\(([^)]+)\)/);
            
            let parsed = '';
            if (articleMatch) {
                parsed += `Article ${articleMatch[1]}`;
                if (paragraphMatch) {
                    parsed += `, Paragraph ${paragraphMatch[1]}`;
                }
                if (pointMatch) {
                    parsed += `, Point (${pointMatch[1]})`;
                }
            }
            
            return { 
                parsed: parsed || 'Could not parse URI reference', 
                type: 'uri_structured' 
            };
        }

        // Simple references: A10P2, A15
        const simpleMatch = reference.match(/^A(\d+)(?:P(\d+))?/);
        if (simpleMatch) {
            let parsed = `Article ${simpleMatch[1]}`;
            if (simpleMatch[2]) {
                parsed += `, Paragraph ${simpleMatch[2]}`;
            }
            return { parsed, type: 'simple' };
        }

        // Try to extract any numbers that might be articles
        const numberMatch = reference.match(/\b(\d+)\b/);
        if (numberMatch) {
            return { 
                parsed: `Article ${numberMatch[1]} (inferred)`, 
                type: 'inferred' 
            };
        }

        return { parsed: reference, type: 'original' };
    }

    extractImplementationData() {
        const implementations = [];
        
        try {
            const implementationElements = this.xmlDoc.querySelectorAll('RESOURCE_LEGAL_IMPLEMENTED_BY_MEASURE_NATIONAL_IMPLEMENTING');
            implementationElements.forEach(element => {
                const identifier = element.querySelector('URI IDENTIFIER')?.textContent.trim();
                const country = element.querySelector('ANNOTATION COUNTRY')?.textContent.trim();
                
                if (identifier) {
                    implementations.push({
                        identifier,
                        country: country || 'Unknown',
                        status: 'Implemented'
                    });
                }
            });
        } catch (error) {
            console.warn('Error extracting implementation data:', error);
        }

        return implementations;
    }

    extractLegalRelationsData() {
        const relations = {
            basedOn: this.getTextArray('BASED_ON SAMEAS URI IDENTIFIER') || 
                    this.getTextArray('RESOURCE_LEGAL_BASED_ON_RESOURCE_LEGAL SAMEAS URI IDENTIFIER'),
            cites: this.getTextArray('WORK_CITES_WORK SAMEAS URI IDENTIFIER'),
            amends: this.getTextArray('RESOURCE_LEGAL_AMENDS_RESOURCE_LEGAL SAMEAS URI IDENTIFIER'),
            repeals: this.getTextArray('RESOURCE_LEGAL_REPEALS_RESOURCE_LEGAL SAMEAS URI IDENTIFIER') || 
                    this.getTextArray('RESOURCE_LEGAL_DOES_REPEAL_OF_RESOURCE_LEGAL SAMEAS URI IDENTIFIER'),
            consolidatedBy: this.getTextArray('RESOURCE_LEGAL_CONSOLIDATED_BY_ACT_CONSOLIDATED SAMEAS URI IDENTIFIER'),
            correctedBy: this.getTextArray('RESOURCE_LEGAL_CORRECTED_BY_RESOURCE_LEGAL SAMEAS URI IDENTIFIER'),
            treatyBasis: this.getTextArray('RESOURCE_LEGAL_BASED_ON_CONCEPT_TREATY PREFLABEL')
        };

        return relations;
    }

    extractMetadataData() {
        return {
            createdBy: this.getTextContent('WORK_CREATED_BY_AGENT PREFLABEL') || 
                      this.getTextContent('CREATED_BY PREFLABEL') || 'Not found',
            responsibleAgent: this.getTextContent('RESOURCE_LEGAL_RESPONSIBILITY_OF_AGENT PREFLABEL') || 'Not found',
            inForce: this.getTextContent('RESOURCE_LEGAL_IN-FORCE VALUE') || 'Not found',
            subjectMatter: this.getTextContent('RESOURCE_LEGAL_IS_ABOUT_SUBJECT-MATTER_1 PREFLABEL') || 'Not found',
            dossierReference: this.getTextContent('WORK_PART_OF_DOSSIER SAMEAS URI IDENTIFIER') || 'Not found',
            version: this.getTextContent('VERSION VALUE') || 'Not found',
            lastModified: this.getTextContent('LASTMODIFICATIONDATE VALUE') || 'Not found'
        };
    }

    // Utility methods
    getTextContent(selector) {
        try {
            const element = this.xmlDoc.querySelector(selector);
            return element?.textContent?.trim() || null;
        } catch (error) {
            console.warn('Error getting text content for selector:', selector, error);
            return null;
        }
    }

    getTextArray(selector) {
        try {
            const elements = this.xmlDoc.querySelectorAll(selector);
            return Array.from(elements).map(el => el.textContent.trim()).filter(text => text);
        } catch (error) {
            console.warn('Error getting text array for selector:', selector, error);
            return [];
        }
    }

    displayResults() {
        this.displayTitleResults();
        this.displayDateResults();
        this.displayIdentifierResults();
        this.displayEurovocResults();
        this.displayCaseLawResults();
        this.displayImplementationResults();
        this.displayLegalRelationsResults();
        this.displayMetadataResults();
    }

    displayTitleResults() {
        const { title } = this.extractedData;
        
        document.getElementById('primary-title').textContent = title.primary;
        document.getElementById('work-title').textContent = title.work;
        
        if (title.alternative && title.alternative.length > 0) {
            document.getElementById('alternative-titles').textContent = title.alternative.join('; ');
        } else {
            document.getElementById('alternative-titles').textContent = 'Not found';
        }
        
        if (title.subtitle && title.subtitle.length > 0) {
            document.getElementById('subtitles').textContent = title.subtitle.join('; ');
        } else {
            document.getElementById('subtitles').textContent = 'Not found';
        }

        // Show language indicators for titles
        this.updateLanguageIndicators('title-languages', Object.keys(title.multilingual || {}));
    }

    displayDateResults() {
        const { dates } = this.extractedData;
        
        document.getElementById('document-date').textContent = dates.document;
        document.getElementById('publication-date').textContent = dates.publication;
        document.getElementById('signature-date').textContent = dates.signature;
        document.getElementById('entry-into-force').textContent = dates.entryIntoForce;
        document.getElementById('end-of-validity').textContent = dates.endOfValidity;
        document.getElementById('transposition-deadline').textContent = dates.transpositionDeadline;
    }

    displayIdentifierResults() {
        const { identifiers } = this.extractedData;
        
        document.getElementById('celex-id').textContent = identifiers.celex;
        document.getElementById('eli').textContent = identifiers.eli;
        document.getElementById('oj-reference').textContent = identifiers.ojReference;
        document.getElementById('immc').textContent = identifiers.immc;
        document.getElementById('celex-natural').textContent = identifiers.naturalNumber;
        document.getElementById('celex-type').textContent = identifiers.type;
    }

    displayEurovocResults() {
        const { eurovoc } = this.extractedData;
        
        this.displayEurovocCategory('concepts', eurovoc.concepts, 'eurovoc-concepts');
        this.displayEurovocCategory('domains', eurovoc.domains, 'eurovoc-domains');
        this.displayEurovocCategory('microthesaurus', eurovoc.microthesaurus, 'eurovoc-microthesaurus');
        this.displayEurovocCategory('terms', eurovoc.terms, 'eurovoc-terms');
        
        const totalCount = eurovoc.concepts.length + eurovoc.domains.length + 
                          eurovoc.microthesaurus.length + eurovoc.terms.length;
        document.getElementById('eurovoc-count').textContent = `${totalCount} found`;

        // Show language indicators for Eurovoc
        const eurovocLangs = new Set();
        [...eurovoc.concepts, ...eurovoc.domains, ...eurovoc.microthesaurus, ...eurovoc.terms]
            .forEach(item => item.language && eurovocLangs.add(item.language));
        this.updateLanguageIndicators('eurovoc-languages', Array.from(eurovocLangs));
    }

    displayEurovocCategory(categoryName, items, containerId) {
        const container = document.getElementById(containerId);
        
        if (items.length === 0) {
            container.innerHTML = `<p class="no-data">No ${categoryName} found</p>`;
            return;
        }
        
        const itemsHtml = items.map(item => `
            <div class="eurovoc-item">
                <span class="eurovoc-id">${item.id}</span>
                <span class="eurovoc-label">${item.label}</span>
                <span class="eurovoc-language">${item.language}</span>
            </div>
        `).join('');
        
        container.innerHTML = itemsHtml;
    }

    displayCaseLawResults() {
        const { caselaw } = this.extractedData;
        const tbody = document.getElementById('caselaw-tbody');
        
        document.getElementById('caselaw-count').textContent = `${caselaw.length} found`;
        
        if (caselaw.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="no-data">No case law references found</td></tr>';
            return;
        }
        
        const rowsHtml = caselaw.map((caseItem, index) => `
            <tr>
                <td><span class="case-celex">${caseItem.celexId}</span></td>
                <td><span class="case-articles">${caseItem.articles.join(', ')}</span></td>
                <td><span class="case-articles-parsed">${caseItem.parsedArticles.map(p => p.parsed).join(', ')}</span></td>
                <td><span class="case-type">${caseItem.type}</span></td>
                <td><button class="copy-btn btn btn--sm" data-case-id="${caseItem.celexId}">Copy ID</button></td>
            </tr>
        `).join('');
        
        tbody.innerHTML = rowsHtml;
    }

    displayImplementationResults() {
        const { implementation } = this.extractedData;
        const tbody = document.getElementById('implementation-tbody');
        
        document.getElementById('implementation-count').textContent = `${implementation.length} found`;
        
        if (implementation.length === 0) {
            tbody.innerHTML = '<tr><td colspan="4" class="no-data">No implementation data found</td></tr>';
            return;
        }
        
        const rowsHtml = implementation.map(impl => `
            <tr>
                <td><span class="country-flag">🇪🇺</span>${impl.country}</td>
                <td>${impl.identifier}</td>
                <td><span class="implementation-status implemented">${impl.status}</span></td>
                <td><button class="copy-btn btn btn--sm" data-impl-id="${impl.identifier}">Copy ID</button></td>
            </tr>
        `).join('');
        
        tbody.innerHTML = rowsHtml;
    }

    displayLegalRelationsResults() {
        const { legalRelations } = this.extractedData;
        
        this.displayRelationCategory('Based On', legalRelations.basedOn || [], 'based-on-list');
        this.displayRelationCategory('Cites', legalRelations.cites || [], 'cites-list');
        this.displayRelationCategory('Amends', legalRelations.amends || [], 'amends-list');
        this.displayRelationCategory('Repeals', legalRelations.repeals || [], 'repeals-list');
        
        const totalRelations = (legalRelations.basedOn?.length || 0) + 
                              (legalRelations.cites?.length || 0) + 
                              (legalRelations.amends?.length || 0) + 
                              (legalRelations.repeals?.length || 0);
        document.getElementById('legal-relations-count').textContent = `${totalRelations} found`;
    }

    displayRelationCategory(categoryName, items, containerId) {
        const container = document.getElementById(containerId);
        
        if (items.length === 0) {
            container.innerHTML = `<p class="no-data">No ${categoryName.toLowerCase()} found</p>`;
            return;
        }
        
        const itemsHtml = items.map(item => `
            <div class="relation-item">
                <span class="relation-id">${item}</span>
                <span class="relation-type">${categoryName}</span>
            </div>
        `).join('');
        
        container.innerHTML = itemsHtml;
    }

    displayMetadataResults() {
        const { metadata } = this.extractedData;
        
        document.getElementById('created-by').textContent = metadata.createdBy;
        document.getElementById('responsible-agent').textContent = metadata.responsibleAgent;
        document.getElementById('in-force-status').textContent = metadata.inForce;
        document.getElementById('subject-matter').textContent = metadata.subjectMatter;
        document.getElementById('version').textContent = metadata.version;
        document.getElementById('last-modified').textContent = metadata.lastModified;
    }

    updateStatistics() {
        const { caselaw, eurovoc, legalRelations, implementation, languages } = this.extractedData;
        
        const totalEurovoc = eurovoc.concepts.length + eurovoc.domains.length + 
                           eurovoc.microthesaurus.length + eurovoc.terms.length;
        
        const totalArticles = caselaw.reduce((sum, caseItem) => 
            sum + caseItem.parsedArticles.filter(art => art.type !== 'none').length, 0);
        
        const totalRelations = (legalRelations.basedOn?.length || 0) + 
                              (legalRelations.cites?.length || 0) + 
                              (legalRelations.amends?.length || 0) + 
                              (legalRelations.repeals?.length || 0);
        
        document.getElementById('stat-languages').textContent = languages.length;
        document.getElementById('stat-cases').textContent = caselaw.length;
        document.getElementById('stat-eurovoc').textContent = totalEurovoc;
        document.getElementById('stat-articles').textContent = totalArticles;
        document.getElementById('stat-relations').textContent = totalRelations;
        document.getElementById('stat-implementations').textContent = implementation.length;
    }

    updateLanguageUI() {
        const selector = document.getElementById('language-selector');
        const statusDiv = document.getElementById('language-status');
        const availableDiv = document.getElementById('available-languages');
        
        // Update selector
        selector.innerHTML = '<option value="">Auto-detect from content</option>';
        this.availableLanguages.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = `${this.euLanguages[lang]} (${lang})`;
            if (lang === this.selectedLanguage) {
                option.selected = true;
            }
            selector.appendChild(option);
        });
        selector.disabled = this.availableLanguages.length === 0;

        // Update status
        if (this.availableLanguages.length > 0) {
            statusDiv.innerHTML = `<span class="status status--success">${this.availableLanguages.length} languages detected</span>`;
        } else {
            statusDiv.innerHTML = `<span class="status status--warning">No specific languages detected</span>`;
        }

        // Update available languages chips
        if (this.availableLanguages.length > 0) {
            const chipsHtml = this.availableLanguages.map(lang => `
                <div class="language-chip ${lang === this.selectedLanguage ? 'selected' : ''}" data-lang="${lang}">
                    <span class="flag">🗣️</span>
                    ${this.euLanguages[lang]} (${lang})
                </div>
            `).join('');
            availableDiv.innerHTML = chipsHtml;

            // Add click handlers to chips
            availableDiv.querySelectorAll('.language-chip').forEach(chip => {
                chip.addEventListener('click', (e) => {
                    const lang = e.currentTarget.dataset.lang;
                    this.selectedLanguage = lang;
                    selector.value = lang;
                    this.updateLanguageUI();
                    this.updateDisplayWithSelectedLanguage();
                });
            });
        } else {
            availableDiv.innerHTML = '<span class="form-label">No languages detected in content</span>';
        }
    }

    updateLanguageIndicators(containerId, languages) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (languages && languages.length > 0) {
            const indicators = languages.filter(lang => this.euLanguages[lang]).map(lang => 
                `<span class="lang-indicator">${lang}</span>`
            ).join('');
            container.innerHTML = indicators;
        } else {
            container.innerHTML = '';
        }
    }

    updateDisplayWithSelectedLanguage() {
        console.log('Selected language:', this.selectedLanguage);
    }

    resetLanguageStatus() {
        document.getElementById('language-status').innerHTML = '<span class="status status--info">No languages detected</span>';
        document.getElementById('available-languages').innerHTML = '<span class="form-label">Available languages will appear here after extraction</span>';
        document.getElementById('language-selector').innerHTML = '<option value="">Auto-detect from content</option>';
        document.getElementById('language-selector').disabled = true;
    }

    performSearch() {
        const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
        if (!searchTerm) return;

        this.clearHighlights();

        const resultElements = document.querySelectorAll('.result-content');
        let matchCount = 0;

        resultElements.forEach(element => {
            const textNodes = this.getTextNodes(element);
            textNodes.forEach(node => {
                if (node.textContent.toLowerCase().includes(searchTerm)) {
                    this.highlightText(node, searchTerm);
                    matchCount++;
                }
            });
        });

        if (matchCount > 0) {
            this.showSearchResults(matchCount);
        } else {
            this.showNoSearchResults();
        }
    }

    clearSearch() {
        document.getElementById('search-input').value = '';
        this.clearHighlights();
    }

    clearHighlights() {
        const highlights = document.querySelectorAll('.search-highlight');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize();
        });
    }

    getTextNodes(element) {
        const textNodes = [];
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );

        let node;
        while (node = walker.nextNode()) {
            textNodes.push(node);
        }
        return textNodes;
    }

    highlightText(textNode, searchTerm) {
        const text = textNode.textContent;
        const index = text.toLowerCase().indexOf(searchTerm.toLowerCase());
        if (index === -1) return;

        const before = text.substring(0, index);
        const match = text.substring(index, index + searchTerm.length);
        const after = text.substring(index + searchTerm.length);

        const highlight = document.createElement('span');
        highlight.className = 'search-highlight';
        highlight.textContent = match;

        const parent = textNode.parentNode;
        parent.replaceChild(document.createTextNode(before), textNode);
        parent.insertBefore(highlight, parent.lastChild.nextSibling);
        parent.insertBefore(document.createTextNode(after), parent.lastChild.nextSibling);
    }

    showSearchResults(count) {
        const searchSection = document.getElementById('search-section');
        searchSection.querySelector('.card__body').innerHTML = `
            <div class="search-controls">
                <input type="text" id="search-input" class="form-control" placeholder="Search extracted data..." value="${document.getElementById('search-input').value}">
                <button id="search-btn" class="btn btn--secondary">Search</button>
                <button id="clear-search-btn" class="btn btn--outline">Clear</button>
            </div>
            <div class="search-results">
                <span class="status status--success">Found ${count} matches</span>
            </div>
        `;
        this.reinitializeSearchListeners();
    }

    showNoSearchResults() {
        const searchSection = document.getElementById('search-section');
        searchSection.querySelector('.card__body').innerHTML = `
            <div class="search-controls">
                <input type="text" id="search-input" class="form-control" placeholder="Search extracted data..." value="${document.getElementById('search-input').value}">
                <button id="search-btn" class="btn btn--secondary">Search</button>
                <button id="clear-search-btn" class="btn btn--outline">Clear</button>
            </div>
            <div class="search-results">
                <span class="status status--warning">No matches found</span>
            </div>
        `;
        this.reinitializeSearchListeners();
    }

    reinitializeSearchListeners() {
        document.getElementById('search-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.performSearch();
        });

        document.getElementById('clear-search-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.clearSearch();
        });

        document.getElementById('search-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.performSearch();
            }
        });
    }

    showLanguageComparison() {
        if (this.availableLanguages.length < 2) {
            alert('Language comparison requires at least 2 languages in the document.');
            return;
        }
        
        console.log('Language comparison feature - would show side-by-side comparison of multilingual content');
    }

    toggleSection(header) {
        const content = header.nextElementSibling;
        const toggleBtn = header.querySelector('.toggle-btn');
        
        if (content.classList.contains('collapsed')) {
            content.classList.remove('collapsed');
            toggleBtn.textContent = '−';
        } else {
            content.classList.add('collapsed');
            toggleBtn.textContent = '+';
        }
    }

    async copyToClipboard(button) {
        let textToCopy = '';
        
        if (button.dataset.caseId) {
            textToCopy = button.dataset.caseId;
        } else if (button.dataset.implId) {
            textToCopy = button.dataset.implId;
        } else {
            const copyTarget = button.dataset.copy;
            if (copyTarget) {
                const element = document.getElementById(copyTarget);
                if (element) {
                    textToCopy = this.getElementTextContent(element);
                }
            } else {
                const textElement = button.previousElementSibling;
                if (textElement) {
                    textToCopy = textElement.textContent;
                }
            }
        }
        
        if (textToCopy) {
            try {
                await navigator.clipboard.writeText(textToCopy);
                this.showCopyFeedback(button);
            } catch (err) {
                console.error('Failed to copy:', err);
                this.fallbackCopyTextToClipboard(textToCopy, button);
            }
        }
    }

    fallbackCopyTextToClipboard(text, button) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                this.showCopyFeedback(button);
            }
        } catch (err) {
            console.error('Fallback copy failed:', err);
        }
        
        document.body.removeChild(textArea);
    }

    getElementTextContent(element) {
        if (element.classList.contains('result-content')) {
            const items = element.querySelectorAll('.result-item');
            return Array.from(items).map(item => {
                const label = item.querySelector('strong')?.textContent || '';
                const value = item.querySelector('span')?.textContent || '';
                return `${label} ${value}`;
            }).join('\n');
        }
        return element.textContent;
    }

    showCopyFeedback(button) {
        const originalText = button.textContent;
        button.classList.add('copied');
        button.textContent = 'Copied!';
        setTimeout(() => {
            button.classList.remove('copied');
            button.textContent = originalText;
        }, 2000);
    }

    exportData() {
        const exportData = {
            extraction_timestamp: new Date().toISOString(),
            selected_language: this.selectedLanguage,
            available_languages: this.availableLanguages,
            document: this.extractedData
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `enhanced_eurlex_extraction_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    async copyAllData() {
        const allData = JSON.stringify(this.extractedData, null, 2);
        try {
            await navigator.clipboard.writeText(allData);
            const button = document.getElementById('copy-all-btn');
            this.showCopyFeedback(button);
        } catch (err) {
            console.error('Failed to copy all data:', err);
            const button = document.getElementById('copy-all-btn');
            this.fallbackCopyTextToClipboard(allData, button);
        }
    }

    showLoading() {
        document.getElementById('loading-state').classList.remove('hidden');
        this.hideError();
        this.hideResults();
        this.hideSearch();
    }

    hideLoading() {
        document.getElementById('loading-state').classList.add('hidden');
    }

    showError(message) {
        document.getElementById('error-message').textContent = message;
        document.getElementById('error-state').classList.remove('hidden');
        this.hideResults();
        this.hideLoading();
        this.hideSearch();
    }

    hideError() {
        document.getElementById('error-state').classList.add('hidden');
    }

    showResults() {
        document.getElementById('results-section').classList.remove('hidden');
        this.hideError();
        this.hideLoading();
    }

    hideResults() {
        document.getElementById('results-section').classList.add('hidden');
    }

    showSearch() {
        document.getElementById('search-section').classList.remove('hidden');
    }

    hideSearch() {
        document.getElementById('search-section').classList.add('hidden');
    }
}

// Initialize the enhanced application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new EnhancedEurLexExtractor();
});