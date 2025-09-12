class CaseLawExtractor {
    constructor() {
        this.xmlDoc = null;
        this.extractedData = {};
        this.availableLanguages = [];
        this.selectedLanguage = '';
        this.isProcessing = false;
        
        // XPath mappings from provided data
        this.xpathMappings = {
            identifiers: {
                ecli: "//ECLI/VALUE | //SAMEAS[URI/TYPE='ecli']/URI/IDENTIFIER",
                celex: "//ID_CELEX/VALUE | //RESOURCE_LEGAL_ID_CELEX/VALUE | //SAMEAS[URI/TYPE='celex']/URI/IDENTIFIER",
                case_number: "//EXPRESSION_CASE-LAW_IDENTIFIER_CASE/VALUE",
                cellar_uri: "//URI[TYPE='cellar']/IDENTIFIER",
                national_ecli: "//ECLI[contains(text(), 'DE:') or contains(text(), 'FR:') or contains(text(), 'IT:')]/VALUE"
            },
            title_and_parties: {
                title: "//EXPRESSION_TITLE/VALUE",
                title_language: "//EXPRESSION_TITLE/LANG | //TITLE/LANG",
                short_title: "//TITLE[not(contains(VALUE, '#'))]/VALUE",
                parties: "//EXPRESSION_CASE-LAW_PARTIES/VALUE | //PARTIES/VALUE"
            },
            dates: {
                judgment_date: "//WORK_DATE_DOCUMENT/VALUE | //DATE_DOCUMENT/VALUE",
                request_date: "//RESOURCE_LEGAL_DATE_REQUEST_OPINION/VALUE | //DATE/VALUE",
                creation_date: "//CREATIONDATE/VALUE",
                last_modified: "//LASTMODIFICATIONDATE/VALUE"
            },
            court_info: {
                court: "//WORK_CREATED_BY_AGENT/PREFLABEL | //CREATED_BY/PREFLABEL",
                procedure_type: "//CASE-LAW_HAS_TYPE_PROCEDURE_CONCEPT_TYPE_PROCEDURE/PREFLABEL",
                procedure_language: "//CASE-LAW_USES_PROCEDURE_LANGUAGE/PREFLABEL",
                origin_country: "//CASE-LAW_ORIGINATES_IN_COUNTRY/PREFLABEL"
            },
            judges_and_ag: {
                judge_links: "//CASE-LAW_DELIVERED_BY_JUDGE",
                ag_links: "//CASE-LAW_DELIVERED_BY_ADVOCATE-GENERAL"
            },
            interpreted_legislation: {
                interpreted_celex: "//CASE-LAW_INTERPRETES_RESOURCE_LEGAL/SAMEAS[URI/TYPE='celex']/URI/IDENTIFIER",
                interpreted_articles: "//CASE-LAW_INTERPRETES_RESOURCE_LEGAL/ANNOTATION/REFERENCE_TO_MODIFIED_LOCATION"
            },
            citations_and_sources: {
                cites_celex: "//WORK_CITES_WORK/SAMEAS[URI/TYPE='celex']/URI/IDENTIFIER",
                cites_ecli: "//WORK_CITES_WORK/SAMEAS[URI/TYPE='ecli']/URI/IDENTIFIER",
                journal_articles: "//CASE-LAW_ARTICLE_JOURNAL_RELATED/VALUE"
            },
            subject_matter: {
                subject_primary: "//RESOURCE_LEGAL_IS_ABOUT_SUBJECT-MATTER_1/PREFLABEL",
                eurovoc: "//IS_ABOUT/PREFLABEL"
            },
            additional_metadata: {
                sector: "//ID_SECTOR/VALUE",
                version: "//VERSION/VALUE",
                build_info: "//ANNOTATION/BUILD_INFO",
                languages: "//EXPRESSION_USES_LANGUAGE/PREFLABEL | //LANG/VALUE"
            }
        };

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

        // Export and copy all
        document.getElementById('export-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.exportData();
        });

        document.getElementById('copy-all-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.copyAllData();
        });

        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            });
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
        this.hideNavigation();
        this.hideLanguagePanel();
    }

    switchTab(tabId) {
        if (!tabId) return;
        
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');

        // Update tab content
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
            
            // Switch back to paste tab to show the content
            this.switchTab('paste-tab');
        };

        reader.onerror = () => {
            statusDiv.innerHTML = '<span class="status status--error">Error reading file</span>';
            statusDiv.className = 'upload-status error';
        };

        reader.readAsText(file);
    }

    clearInput() {
        this.isProcessing = false;
        
        // Clear input fields
        document.getElementById('xml-textarea').value = '';
        document.getElementById('xml-file').value = '';
        
        // Clear upload status
        const statusDiv = document.getElementById('upload-status');
        statusDiv.innerHTML = '';
        statusDiv.className = 'upload-status';
        
        // Reset application state and hide all result sections
        this.resetApplicationState();
        this.xmlDoc = null;
        this.extractedData = {};
        
        // Switch back to paste tab
        this.switchTab('paste-tab');
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

        try {
            await new Promise(resolve => setTimeout(resolve, 300));

            const parser = new DOMParser();
            this.xmlDoc = parser.parseFromString(xmlContent, 'text/xml');

            const parserError = this.xmlDoc.querySelector('parsererror');
            if (parserError) {
                throw new Error('Invalid XML format. Please check your XML syntax.');
            }

            // Detect languages
            this.detectAvailableLanguages();
            
            // Extract all case law data
            this.extractedData = {
                identifiers: this.extractIdentifiers(),
                titleAndParties: this.extractTitleAndParties(),
                dates: this.extractDates(),
                courtInfo: this.extractCourtInfo(),
                judgesAndAG: this.extractJudgesAndAG(),
                interpretedLegislation: this.extractInterpretedLegislation(),
                citationsAndSources: this.extractCitationsAndSources(),
                subjectMatter: this.extractSubjectMatter(),
                academicArticles: this.extractAcademicArticles(),
                metadata: this.extractAdditionalMetadata(),
                languages: this.availableLanguages
            };

            this.displayResults();
            this.updateNavigationCounts();
            this.showNavigation();
            this.showSearch();
            if (this.availableLanguages.length > 0) {
                this.showLanguagePanel();
                this.updateLanguageUI();
            }
            
            this.isProcessing = false;
            this.hideLoading();
            this.showResults();

        } catch (error) {
            this.isProcessing = false;
            this.hideLoading();
            this.showError('Error processing case law XML: ' + error.message);
            console.error('Extraction error:', error);
        }
    }

    detectAvailableLanguages() {
        const detectedLangs = new Set();

        try {
            // Find elements with lang attributes
            const elementsWithLang = this.xmlDoc.querySelectorAll('*[lang], *[xml\\:lang]');
            elementsWithLang.forEach(element => {
                const lang = element.getAttribute('lang') || element.getAttribute('xml:lang');
                if (lang && this.euLanguages[lang.toLowerCase()]) {
                    detectedLangs.add(lang.toLowerCase());
                }
            });

            // Find LANG elements
            const langElements = this.xmlDoc.querySelectorAll('LANG');
            langElements.forEach(element => {
                const lang = element.textContent?.trim().toLowerCase();
                if (lang && this.euLanguages[lang]) {
                    detectedLangs.add(lang);
                }
            });

            // Check VALUE elements with language attributes
            const valueElements = this.xmlDoc.querySelectorAll('VALUE[xml\\:lang], VALUE[lang]');
            valueElements.forEach(element => {
                const lang = element.getAttribute('xml:lang') || element.getAttribute('lang');
                if (lang && this.euLanguages[lang.toLowerCase()]) {
                    detectedLangs.add(lang.toLowerCase());
                }
            });

        } catch (error) {
            console.warn('Error detecting languages:', error);
        }

        this.availableLanguages = Array.from(detectedLangs).sort();
        
        // Default to English if available
        if (this.availableLanguages.includes('en')) {
            this.selectedLanguage = 'en';
        } else if (this.availableLanguages.length > 0) {
            this.selectedLanguage = this.availableLanguages[0];
        }
    }

    extractIdentifiers() {
        return {
            ecli: this.getTextByXPath(this.xpathMappings.identifiers.ecli) || 'Not found',
            celex: this.getTextByXPath(this.xpathMappings.identifiers.celex) || 'Not found',
            caseNumber: this.getTextByXPath(this.xpathMappings.identifiers.case_number) || 'Not found',
            cellarUri: this.getTextByXPath(this.xpathMappings.identifiers.cellar_uri) || 'Not found',
            sector: this.getTextByXPath('//ID_SECTOR/VALUE') || 'Not found'
        };
    }

    extractTitleAndParties() {
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
            title: getMultilingualText(this.xpathMappings.title_and_parties.title),
            parties: getMultilingualText(this.xpathMappings.title_and_parties.parties)
        };
    }

    extractDates() {
        return {
            judgmentDate: this.getTextByXPath(this.xpathMappings.dates.judgment_date) || 'Not found',
            requestDate: this.getTextByXPath(this.xpathMappings.dates.request_date) || 'Not found',
            creationDate: this.getTextByXPath(this.xpathMappings.dates.creation_date) || 'Not found',
            lastModified: this.getTextByXPath(this.xpathMappings.dates.last_modified) || 'Not found'
        };
    }

    extractCourtInfo() {
        return {
            court: this.getTextByXPath(this.xpathMappings.court_info.court) || 'Not found',
            procedureType: this.getTextByXPath(this.xpathMappings.court_info.procedure_type) || 'Not found',
            procedureLanguage: this.getTextByXPath(this.xpathMappings.court_info.procedure_language) || 'Not found',
            originCountry: this.getTextByXPath(this.xpathMappings.court_info.origin_country) || 'Not found'
        };
    }

    extractJudgesAndAG() {
        const judges = this.getTextArrayByXPath('//CASE-LAW_DELIVERED_BY_JUDGE//PREFLABEL') || [];
        const advocateGenerals = this.getTextArrayByXPath('//CASE-LAW_DELIVERED_BY_ADVOCATE-GENERAL//PREFLABEL') || [];
        
        return {
            judges: judges,
            advocateGenerals: advocateGenerals
        };
    }

    extractInterpretedLegislation() {
        const legislation = [];
        
        try {
            const celexIds = this.getTextArrayByXPath(this.xpathMappings.interpreted_legislation.interpreted_celex) || [];
            const articles = this.getTextArrayByXPath(this.xpathMappings.interpreted_legislation.interpreted_articles) || [];
            
            celexIds.forEach((celex, index) => {
                const articleRef = articles[index] || 'Not specified';
                const parsedRef = this.parseCaseLawReference(articleRef);
                
                legislation.push({
                    celex: celex,
                    originalReference: articleRef,
                    parsedReference: parsedRef
                });
            });
        } catch (error) {
            console.warn('Error extracting interpreted legislation:', error);
        }

        return legislation;
    }

    extractCitationsAndSources() {
        return {
            citesCelex: this.getTextArrayByXPath(this.xpathMappings.citations_and_sources.cites_celex) || [],
            citesEcli: this.getTextArrayByXPath(this.xpathMappings.citations_and_sources.cites_ecli) || [],
            journalArticles: this.getTextArrayByXPath(this.xpathMappings.citations_and_sources.journal_articles) || []
        };
    }

    extractSubjectMatter() {
        return {
            primarySubject: this.getTextArrayByXPath(this.xpathMappings.subject_matter.subject_primary) || [],
            eurovocKeywords: this.getTextArrayByXPath(this.xpathMappings.subject_matter.eurovoc) || []
        };
    }

    extractAcademicArticles() {
        return this.getTextArrayByXPath('//CASE-LAW_ARTICLE_JOURNAL_RELATED/VALUE') || [];
    }

    extractAdditionalMetadata() {
        return {
            sector: this.getTextByXPath(this.xpathMappings.additional_metadata.sector) || 'Not found',
            version: this.getTextByXPath(this.xpathMappings.additional_metadata.version) || 'Not found',
            buildInfo: this.getTextByXPath(this.xpathMappings.additional_metadata.build_info) || 'Not found',
            languages: this.getTextArrayByXPath(this.xpathMappings.additional_metadata.languages) || []
        };
    }

    // Article reference parser function
    parseCaseLawReference(ref) {
        if (!ref || ref === 'Not specified' || ref.trim() === '') {
            return { original: ref, parsed: 'Not specified', type: 'none', components: {} };
        }

        const original = ref;
        let parsed = '';
        let type = 'original';
        let components = {};

        try {
            // URI-structured references: {AR|...} 23 {PA|...} 1 {PTA|...} (e)
            if (ref.includes('{AR|')) {
                const articleMatch = ref.match(/\{AR\|[^}]*\}\s*(\d+)/);
                const paragraphMatch = ref.match(/\{PA\|[^}]*\}\s*(\d+)/);
                const pointMatch = ref.match(/\{PTA\|[^}]*\}\s*\(([^)]+)\)/);
                
                if (articleMatch) {
                    parsed = `Article ${articleMatch[1]}`;
                    components.article = articleMatch[1];
                    if (paragraphMatch) {
                        parsed += `, Paragraph ${paragraphMatch[1]}`;
                        components.paragraph = paragraphMatch[1];
                    }
                    if (pointMatch) {
                        parsed += `, Point (${pointMatch[1]})`;
                        components.point = pointMatch[1];
                    }
                    type = 'uri_structured';
                }
            }
            // Simple references: A06P1LA, A04PT11, A02LH, A05P3, A02LF
            else if (/^A(\d+)(?:P(\d+))?(?:PT(\d+))?(?:L[A-Z])?$/.test(ref)) {
                const match = ref.match(/^A(\d+)(?:P(\d+))?(?:PT(\d+))?(?:L[A-Z])?$/);
                if (match) {
                    parsed = `Article ${match[1]}`;
                    components.article = match[1];
                    if (match[2]) {
                        parsed += `, Paragraph ${match[2]}`;
                        components.paragraph = match[2];
                    }
                    if (match[3]) {
                        parsed += `, Point ${match[3]}`;
                        components.point = match[3];
                    }
                    type = 'simple';
                }
            }
            // Recitals: C17, C24
            else if (/^C(\d+)$/.test(ref)) {
                const match = ref.match(/^C(\d+)$/);
                if (match) {
                    parsed = `Recital ${match[1]}`;
                    components.recital = match[1];
                    type = 'recital';
                }
            }
            // Colon structured: ART:55 ALN:1
            else if (ref.includes('ART:') || ref.includes('ALN:')) {
                const artMatch = ref.match(/ART:(\d+)/);
                const alnMatch = ref.match(/ALN:(\d+)/);
                
                if (artMatch) {
                    parsed = `Article ${artMatch[1]}`;
                    components.article = artMatch[1];
                    if (alnMatch) {
                        parsed += ` Paragraph ${alnMatch[1]}`;
                        components.paragraph = alnMatch[1];
                    }
                    type = 'colon_structured';
                }
            }
            // Fragment numbers: N 41, N 47 61 69 74
            else if (/^N\s+/.test(ref)) {
                const numbers = ref.replace(/^N\s+/, '').split(/\s+/).filter(n => /^\d+$/.test(n));
                if (numbers.length === 1) {
                    parsed = `Paragraph ${numbers[0]}`;
                    components.paragraph = numbers[0];
                } else if (numbers.length > 1) {
                    parsed = `Paragraphs ${numbers[0]} to ${numbers[numbers.length - 1]}`;
                    components.paragraphRange = numbers;
                }
                type = 'fragment';
            }
            // Try to extract any numbers that might be articles
            else {
                const numberMatch = ref.match(/\b(\d+)\b/);
                if (numberMatch) {
                    parsed = `Article ${numberMatch[1]} (inferred)`;
                    components.article = numberMatch[1];
                    type = 'inferred';
                } else {
                    parsed = original;
                    type = 'original';
                }
            }

        } catch (error) {
            console.warn('Error parsing article reference:', error);
            parsed = original;
            type = 'error';
        }

        return { original, parsed, type, components };
    }

    // Utility methods
    getTextByXPath(xpath) {
        try {
            const result = this.xmlDoc.evaluate(xpath, this.xmlDoc, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
            return result.singleNodeValue?.textContent?.trim() || null;
        } catch (error) {
            console.warn('XPath evaluation error:', xpath, error);
            return null;
        }
    }

    getTextArrayByXPath(xpath) {
        try {
            const result = this.xmlDoc.evaluate(xpath, this.xmlDoc, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
            const results = [];
            for (let i = 0; i < result.snapshotLength; i++) {
                const text = result.snapshotItem(i)?.textContent?.trim();
                if (text) {
                    results.push(text);
                }
            }
            return results;
        } catch (error) {
            console.warn('XPath evaluation error:', xpath, error);
            return [];
        }
    }

    displayResults() {
        this.displaySummaryDashboard();
        this.displayIdentifiers();
        this.displayTitleAndParties();
        this.displayDates();
        this.displayCourtInfo();
        this.displayJudgesAndAG();
        this.displayInterpretedLegislation();
        this.displayCitationsAndSources();
        this.displaySubjectMatter();
        this.displayAcademicArticles();
        this.displayAdditionalMetadata();
    }

    displaySummaryDashboard() {
        const { identifiers, dates, courtInfo } = this.extractedData;
        
        document.getElementById('summary-ecli').textContent = identifiers.ecli;
        document.getElementById('summary-case-number').textContent = identifiers.caseNumber;
        document.getElementById('summary-judgment-date').textContent = dates.judgmentDate;
        document.getElementById('summary-court').textContent = courtInfo.court;

        // Update court badge
        const courtBadge = document.getElementById('court-type-badge');
        if (courtInfo.court !== 'Not found') {
            courtBadge.textContent = this.getCourtAbbreviation(courtInfo.court);
            courtBadge.style.display = 'inline-block';
        }
    }

    displayIdentifiers() {
        const { identifiers } = this.extractedData;
        
        document.getElementById('ecli-value').textContent = identifiers.ecli;
        document.getElementById('celex-value').textContent = identifiers.celex;
        document.getElementById('case-number-value').textContent = identifiers.caseNumber;
        document.getElementById('court-sector-value').textContent = identifiers.sector;

        // Update copy buttons
        this.updateCopyButton('ecli-value', identifiers.ecli);
        this.updateCopyButton('celex-value', identifiers.celex);
        this.updateCopyButton('case-number-value', identifiers.caseNumber);
        this.updateCopyButton('court-sector-value', identifiers.sector);
    }

    displayTitleAndParties() {
        const { titleAndParties } = this.extractedData;
        
        this.displayMultilingualValues('title-values', titleAndParties.title);
        this.displayMultilingualValues('parties-values', titleAndParties.parties);

        // Update language indicators
        const titleLangs = Object.keys(titleAndParties.title);
        const partiesLangs = Object.keys(titleAndParties.parties);
        const allLangs = [...new Set([...titleLangs, ...partiesLangs])];
        this.updateLanguageIndicators('title-languages', allLangs);
    }

    displayDates() {
        const { dates } = this.extractedData;
        
        document.getElementById('judgment-date').textContent = dates.judgmentDate;
        document.getElementById('request-date').textContent = dates.requestDate;
        document.getElementById('creation-date').textContent = dates.creationDate;
        document.getElementById('last-modified').textContent = dates.lastModified;
    }

    displayCourtInfo() {
        const { courtInfo } = this.extractedData;
        
        document.getElementById('court-name').textContent = courtInfo.court;
        document.getElementById('procedure-type').textContent = courtInfo.procedureType;
        document.getElementById('procedure-language').textContent = courtInfo.procedureLanguage;
        document.getElementById('origin-country').textContent = courtInfo.originCountry;

        // Update procedure badge
        const procedureBadge = document.getElementById('procedure-badge');
        if (courtInfo.procedureType !== 'Not found') {
            procedureBadge.textContent = courtInfo.procedureType;
            procedureBadge.style.display = 'inline-block';
        }
    }

    displayJudgesAndAG() {
        const { judgesAndAG } = this.extractedData;
        
        this.displayOfficialsList('judges-list', judgesAndAG.judges, 'judge');
        this.displayOfficialsList('ag-list', judgesAndAG.advocateGenerals, 'ag');

        // Update counts and badges
        const totalCount = judgesAndAG.judges.length + judgesAndAG.advocateGenerals.length;
        document.getElementById('judges-count').textContent = `${totalCount} found`;

        const agBadge = document.getElementById('ag-badge');
        if (judgesAndAG.advocateGenerals.length > 0) {
            agBadge.textContent = 'AG Present';
            agBadge.classList.add('present');
        } else {
            agBadge.textContent = 'No AG';
            agBadge.classList.remove('present');
        }
    }

    displayInterpretedLegislation() {
        const { interpretedLegislation } = this.extractedData;
        const tbody = document.getElementById('legislation-tbody');
        
        document.getElementById('legislation-count').textContent = `${interpretedLegislation.length} found`;
        
        if (interpretedLegislation.length === 0) {
            tbody.innerHTML = '<tr><td colspan="5" class="no-data">No interpreted legislation found</td></tr>';
            return;
        }
        
        const rowsHtml = interpretedLegislation.map(item => `
            <tr>
                <td><span class="legislation-celex">${item.celex}</span></td>
                <td><span class="legislation-reference">${item.originalReference}</span></td>
                <td><span class="legislation-parsed">${item.parsedReference.parsed}</span></td>
                <td><span class="reference-type">${item.parsedReference.type}</span></td>
                <td><button class="copy-btn btn btn--sm" data-copy-text="${item.celex}">Copy</button></td>
            </tr>
        `).join('');
        
        tbody.innerHTML = rowsHtml;
    }

    displayCitationsAndSources() {
        const { citationsAndSources } = this.extractedData;
        
        this.displayCitationList('case-citations', citationsAndSources.citesCelex);
        this.displayCitationList('ecli-citations', citationsAndSources.citesEcli);
        this.displayCitationList('journal-citations', citationsAndSources.journalArticles);

        const totalCount = citationsAndSources.citesCelex.length + 
                          citationsAndSources.citesEcli.length + 
                          citationsAndSources.journalArticles.length;
        document.getElementById('citations-count').textContent = `${totalCount} found`;
    }

    displaySubjectMatter() {
        const { subjectMatter } = this.extractedData;
        
        this.displaySubjectList('primary-subject', subjectMatter.primarySubject);
        this.displaySubjectList('eurovoc-keywords', subjectMatter.eurovocKeywords);

        const totalCount = subjectMatter.primarySubject.length + subjectMatter.eurovocKeywords.length;
        document.getElementById('subject-count').textContent = `${totalCount} found`;
    }

    displayAcademicArticles() {
        const { academicArticles } = this.extractedData;
        
        this.displayAcademicList('academic-articles', academicArticles);
        document.getElementById('academic-count').textContent = `${academicArticles.length} found`;
    }

    displayAdditionalMetadata() {
        const { metadata } = this.extractedData;
        
        document.getElementById('sector-value').textContent = metadata.sector;
        document.getElementById('version-value').textContent = metadata.version;
        document.getElementById('languages-value').textContent = metadata.languages.join(', ') || 'Not found';
        document.getElementById('build-info-value').textContent = metadata.buildInfo;
    }

    // Helper display methods
    displayMultilingualValues(containerId, multilingualData) {
        const container = document.getElementById(containerId);
        
        if (!multilingualData || Object.keys(multilingualData).length === 0) {
            container.innerHTML = '<span class="no-data">Not found</span>';
            return;
        }
        
        const itemsHtml = Object.entries(multilingualData).map(([lang, values]) => 
            values.map(value => `
                <div class="multilingual-item">
                    <span class="multilingual-lang">${lang}</span>
                    <span class="multilingual-text">${value}</span>
                </div>
            `).join('')
        ).join('');
        
        container.innerHTML = itemsHtml;
    }

    displayOfficialsList(containerId, officials, type) {
        const container = document.getElementById(containerId);
        
        if (officials.length === 0) {
            container.innerHTML = `<div class="no-data">No ${type}s found</div>`;
            return;
        }
        
        const itemsHtml = officials.map(official => `
            <div class="official-item">
                <span class="official-name">${official}</span>
                <a href="#" class="official-link" target="_blank">View Details</a>
            </div>
        `).join('');
        
        container.innerHTML = itemsHtml;
    }

    displayCitationList(containerId, citations) {
        const container = document.getElementById(containerId);
        
        if (citations.length === 0) {
            const type = containerId.includes('case') ? 'case citations' : 
                        containerId.includes('ecli') ? 'ECLI citations' : 'journal articles';
            container.innerHTML = `<div class="no-data">No ${type} found</div>`;
            return;
        }
        
        const itemsHtml = citations.map(citation => `
            <div class="citation-item">
                <span class="citation-id">${citation}</span>
                <button class="copy-btn btn btn--sm" data-copy-text="${citation}">Copy</button>
            </div>
        `).join('');
        
        container.innerHTML = itemsHtml;
    }

    displaySubjectList(containerId, subjects) {
        const container = document.getElementById(containerId);
        
        if (subjects.length === 0) {
            const type = containerId.includes('primary') ? 'primary subjects' : 'keywords';
            container.innerHTML = `<div class="no-data">No ${type} found</div>`;
            return;
        }
        
        const itemsHtml = subjects.map(subject => `
            <div class="subject-item">
                <span class="subject-label">${subject}</span>
                <button class="copy-btn btn btn--sm" data-copy-text="${subject}">Copy</button>
            </div>
        `).join('');
        
        container.innerHTML = itemsHtml;
    }

    displayAcademicList(containerId, articles) {
        const container = document.getElementById(containerId);
        
        if (articles.length === 0) {
            container.innerHTML = '<div class="no-data">No academic articles found</div>';
            return;
        }
        
        const itemsHtml = articles.map(article => `
            <div class="academic-item">
                <span class="citation-label">${article}</span>
                <button class="copy-btn btn btn--sm" data-copy-text="${article}">Copy</button>
            </div>
        `).join('');
        
        container.innerHTML = itemsHtml;
    }

    updateNavigationCounts() {
        const { identifiers, titleAndParties, dates, courtInfo, judgesAndAG, 
                interpretedLegislation, citationsAndSources, subjectMatter, 
                academicArticles, metadata } = this.extractedData;

        document.getElementById('nav-identifiers').textContent = Object.values(identifiers).filter(v => v !== 'Not found').length;
        document.getElementById('nav-title').textContent = Object.keys({...titleAndParties.title, ...titleAndParties.parties}).length;
        document.getElementById('nav-dates').textContent = Object.values(dates).filter(v => v !== 'Not found').length;
        document.getElementById('nav-court').textContent = Object.values(courtInfo).filter(v => v !== 'Not found').length;
        document.getElementById('nav-judges').textContent = judgesAndAG.judges.length + judgesAndAG.advocateGenerals.length;
        document.getElementById('nav-legislation').textContent = interpretedLegislation.length;
        document.getElementById('nav-citations').textContent = citationsAndSources.citesCelex.length + citationsAndSources.citesEcli.length + citationsAndSources.journalArticles.length;
        document.getElementById('nav-subject').textContent = subjectMatter.primarySubject.length + subjectMatter.eurovocKeywords.length;
        document.getElementById('nav-academic').textContent = academicArticles.length;
        document.getElementById('nav-metadata').textContent = Object.values(metadata).filter(v => v !== 'Not found' && Array.isArray(v) ? v.length > 0 : true).length;
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

    updateCopyButton(elementId, text) {
        const element = document.getElementById(elementId);
        if (element) {
            const copyBtn = element.nextElementSibling;
            if (copyBtn && copyBtn.classList.contains('copy-btn')) {
                copyBtn.dataset.copyText = text;
            }
        }
    }

    updateDisplayWithSelectedLanguage() {
        // Filter multilingual content based on selected language
        console.log('Selected language:', this.selectedLanguage);
    }

    getCourtAbbreviation(courtName) {
        if (courtName.includes('Court of Justice')) return 'ECJ';
        if (courtName.includes('General Court')) return 'GC';
        if (courtName.includes('Civil Service Tribunal')) return 'CST';
        return 'Court';
    }

    // Search functionality
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

        this.showSearchResults(matchCount);
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
        // Update search controls to show results
        console.log(`Found ${count} search matches`);
    }

    // UI state management
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
        let textToCopy = button.dataset.copyText || '';
        
        if (!textToCopy) {
            const copyTarget = button.dataset.copy;
            if (copyTarget) {
                const element = document.getElementById(copyTarget);
                if (element) {
                    textToCopy = element.textContent;
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
            case_law_data: this.extractedData
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `case_law_extraction_${new Date().toISOString().split('T')[0]}.json`;
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
        }
    }

    // State display methods
    showLoading() {
        document.getElementById('loading-state').classList.remove('hidden');
        this.hideError();
        this.hideResults();
        this.hideSearch();
        this.hideNavigation();
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
        this.hideNavigation();
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

    showNavigation() {
        document.getElementById('nav-panel').classList.remove('hidden');
    }

    hideNavigation() {
        document.getElementById('nav-panel').classList.add('hidden');
    }

    showLanguagePanel() {
        document.getElementById('language-panel').classList.remove('hidden');
    }

    hideLanguagePanel() {
        document.getElementById('language-panel').classList.add('hidden');
    }
}

// Initialize the case law extractor when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new CaseLawExtractor();
});