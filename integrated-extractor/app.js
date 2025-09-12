class IntegratedEurLexExtractor {
    constructor() {
        // Initialize components
        this.apiClient = new EUPublicationsAPIClient();
        this.enhancedArticleParser = new EnhancedArticleParser();
        this.legislationExtractor = null;
        this.caseLawExtractor = null;
        
        // State management
        this.isProcessing = false;
        this.processingSteps = [];
        this.currentStep = 0;
        this.extractedData = {
            legislative: null,
            caseLaw: {},
            combined: null,
            metadata: {
                processingTimestamp: null,
                sourceCelex: null,
                automaticCases: [],
                manualCases: [],
                apiCalls: []
            }
        };

        // Configuration
        this.autoFetchCaseLaw = true;
        this.maxConcurrentCaseLaw = 3;

        this.initializeEventListeners();
        this.resetApplicationState();
    }

    initializeEventListeners() {
        // CELEX input and processing
        document.getElementById('celex-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                this.processCelexInput();
            }
        });

        document.getElementById('process-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.processCelexInput();
        });

        document.getElementById('clear-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.clearAll();
        });

        // Auto-fetch case law toggle
        document.getElementById('auto-fetch-cases').addEventListener('change', (e) => {
            this.autoFetchCaseLaw = e.target.checked;
            this.updateUI();
        });

        // Manual case law input
        document.getElementById('manual-cases-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.processManualCases();
        });

        // View switching
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchView(e.target.dataset.view);
            });
        });

        // Export functionality
        document.getElementById('export-legislative').addEventListener('click', (e) => {
            e.preventDefault();
            this.exportData('legislative');
        });

        document.getElementById('export-caselaw').addEventListener('click', (e) => {
            e.preventDefault();
            this.exportData('caseLaw');
        });

        document.getElementById('export-combined').addEventListener('click', (e) => {
            e.preventDefault();
            this.exportData('combined');
        });

        // API test
        document.getElementById('test-api-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.testAPIConnectivity();
        });
    }

    resetApplicationState() {
        this.isProcessing = false;
        this.processingSteps = [];
        this.currentStep = 0;
        this.extractedData = {
            legislative: null,
            caseLaw: {},
            combined: null,
            metadata: {
                processingTimestamp: null,
                sourceCelex: null,
                automaticCases: [],
                manualCases: [],
                apiCalls: []
            }
        };

        this.hideAllViews();
        this.hideProcessing();
        this.hideError();
        this.updateUI();
    }

    async processCelexInput() {
        if (this.isProcessing) return;

        const celexInput = document.getElementById('celex-input').value.trim();
        if (!celexInput) {
            this.showError('Please enter a CELEX identifier');
            return;
        }

        this.isProcessing = true;
        this.extractedData.metadata.processingTimestamp = new Date().toISOString();
        this.extractedData.metadata.sourceCelex = celexInput;

        try {
            this.showProcessing();
            this.updateProcessingStep('Fetching XML from EU Publications Office...');

            // Fetch primary document
            const primaryResult = await this.apiClient.fetchXMLFromCelex(celexInput);
            this.extractedData.metadata.apiCalls.push({
                celex: celexInput,
                timestamp: new Date().toISOString(),
                success: primaryResult.success,
                type: 'primary'
            });

            if (!primaryResult.success) {
                throw new Error(`Failed to fetch primary document: ${primaryResult.error}`);
            }

            this.updateProcessingStep('Parsing primary document...');

            // Determine document type and extract accordingly
            if (this.apiClient.isLikelyCaseLaw(celexInput)) {
                await this.processCaseLawDocument(celexInput, primaryResult.data);
            } else if (this.apiClient.isLikelyLegislation(celexInput)) {
                await this.processLegislativeDocument(celexInput, primaryResult.data);
            } else {
                // Try both extractors and see which works better
                await this.processUnknownDocument(celexInput, primaryResult.data);
            }

            this.updateProcessingStep('Creating combined view...');
            this.createCombinedView();

            this.updateProcessingStep('Processing complete!');
            this.showResults();

        } catch (error) {
            console.error('Processing error:', error);
            this.showError(`Processing failed: ${error.message}`);
        } finally {
            this.isProcessing = false;
            this.hideProcessing();
        }
    }

    async processLegislativeDocument(celexId, xmlData) {
        // Initialize and use legislation extractor
        this.updateProcessingStep('Initializing legislation extractor...');
        
        // Create a temporary DOM element to simulate file input for existing extractor
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = xmlData;
        tempTextarea.id = 'temp-xml-textarea';
        document.body.appendChild(tempTextarea);

        try {
            // Use existing EnhancedEurLexExtractor logic
            this.legislationExtractor = new EnhancedEurLexExtractor();
            
            // Simulate the extraction process
            const parser = new DOMParser();
            this.legislationExtractor.xmlDoc = parser.parseFromString(xmlData, 'text/xml');

            const parserError = this.legislationExtractor.xmlDoc.querySelector('parsererror');
            if (parserError) {
                throw new Error('Invalid XML format in legislative document');
            }

            // Extract all data using existing methods
            this.legislationExtractor.detectAvailableLanguages();
            this.extractedData.legislative = {
                languages: this.legislationExtractor.availableLanguages,
                title: this.legislationExtractor.extractTitleData(),
                dates: this.legislationExtractor.extractDateData(),
                identifiers: this.legislationExtractor.extractIdentifiersData(),
                eurovoc: this.legislationExtractor.extractEurovocData(),
                caselaw: this.legislationExtractor.extractCaseLawData(),
                implementation: this.legislationExtractor.extractImplementationData(),
                legalRelations: this.legislationExtractor.extractLegalRelationsData(),
                metadata: this.legislationExtractor.extractMetadataData()
            };

            // Process case law references if enabled
            if (this.autoFetchCaseLaw && this.extractedData.legislative.caselaw.length > 0) {
                await this.processAutomaticCaseLaw();
            }

        } finally {
            // Cleanup
            if (tempTextarea.parentNode) {
                tempTextarea.parentNode.removeChild(tempTextarea);
            }
        }
    }

    async processCaseLawDocument(celexId, xmlData) {
        this.updateProcessingStep('Initializing case law extractor...');
        
        // Create temporary DOM element
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = xmlData;
        tempTextarea.id = 'temp-xml-textarea';
        document.body.appendChild(tempTextarea);

        try {
            // Use existing CaseLawExtractor logic
            this.caseLawExtractor = new CaseLawExtractor();
            
            const parser = new DOMParser();
            this.caseLawExtractor.xmlDoc = parser.parseFromString(xmlData, 'text/xml');

            const parserError = this.caseLawExtractor.xmlDoc.querySelector('parsererror');
            if (parserError) {
                throw new Error('Invalid XML format in case law document');
            }

            // Extract all data using existing methods
            this.caseLawExtractor.detectAvailableLanguages();
            this.extractedData.caseLaw[celexId] = {
                identifiers: this.caseLawExtractor.extractIdentifiers(),
                titleAndParties: this.caseLawExtractor.extractTitleAndParties(),
                dates: this.caseLawExtractor.extractDates(),
                courtInfo: this.caseLawExtractor.extractCourtInfo(),
                judgesAndAG: this.caseLawExtractor.extractJudgesAndAG(),
                interpretedLegislation: this.caseLawExtractor.extractInterpretedLegislation(),
                citationsAndSources: this.caseLawExtractor.extractCitationsAndSources(),
                subjectMatter: this.caseLawExtractor.extractSubjectMatter(),
                academicArticles: this.caseLawExtractor.extractAcademicArticles(),
                metadata: this.caseLawExtractor.extractAdditionalMetadata(),
                languages: this.caseLawExtractor.availableLanguages
            };

        } finally {
            if (tempTextarea.parentNode) {
                tempTextarea.parentNode.removeChild(tempTextarea);
            }
        }
    }

    async processUnknownDocument(celexId, xmlData) {
        this.updateProcessingStep('Attempting to identify document type...');
        
        try {
            // Try legislation first
            await this.processLegislativeDocument(celexId, xmlData);
            if (this.extractedData.legislative) {
                console.log('Document identified as legislative');
                return;
            }
        } catch (error) {
            console.warn('Document is not legislative:', error.message);
        }

        try {
            // Try case law
            await this.processCaseLawDocument(celexId, xmlData);
            if (this.extractedData.caseLaw[celexId]) {
                console.log('Document identified as case law');
                return;
            }
        } catch (error) {
            console.warn('Document is not case law:', error.message);
            throw new Error('Unable to identify document type - not recognized as legislation or case law');
        }
    }

    async processAutomaticCaseLaw() {
        if (!this.extractedData.legislative || !this.extractedData.legislative.caselaw) {
            return;
        }

        const caseCelexIds = this.extractedData.legislative.caselaw
            .map(caseRef => caseRef.celexId)
            .filter(id => id && id !== 'Not found');

        if (caseCelexIds.length === 0) {
            console.log('No case law CELEX IDs found for automatic processing');
            return;
        }

        this.extractedData.metadata.automaticCases = [...caseCelexIds];
        this.updateProcessingStep(`Fetching ${caseCelexIds.length} referenced case law documents...`);

        try {
            const caseLawResults = await this.apiClient.fetchMultipleCelex(caseCelexIds, this.maxConcurrentCaseLaw);
            
            let processedCount = 0;
            for (const [celexId, result] of Object.entries(caseLawResults)) {
                this.extractedData.metadata.apiCalls.push({
                    celex: celexId,
                    timestamp: new Date().toISOString(),
                    success: result.success,
                    type: 'automatic_case'
                });

                if (result.success) {
                    this.updateProcessingStep(`Processing case law ${++processedCount}/${caseCelexIds.length}: ${celexId}`);
                    await this.processCaseLawDocument(celexId, result.data);
                } else {
                    console.warn(`Failed to fetch case law ${celexId}:`, result.error);
                }
            }

        } catch (error) {
            console.error('Error in automatic case law processing:', error);
        }
    }

    async processManualCases() {
        const manualInput = document.getElementById('manual-cases-input').value.trim();
        if (!manualInput) {
            this.showError('Please enter CELEX identifiers for manual case processing');
            return;
        }

        // Parse comma-separated CELEX IDs
        const celexIds = manualInput.split(',').map(id => id.trim()).filter(id => id);
        this.extractedData.metadata.manualCases = [...celexIds];

        this.isProcessing = true;
        this.showProcessing();

        try {
            this.updateProcessingStep(`Fetching ${celexIds.length} manual case law documents...`);
            
            const caseLawResults = await this.apiClient.fetchMultipleCelex(celexIds, this.maxConcurrentCaseLaw);
            
            let processedCount = 0;
            for (const [celexId, result] of Object.entries(caseLawResults)) {
                this.extractedData.metadata.apiCalls.push({
                    celex: celexId,
                    timestamp: new Date().toISOString(),
                    success: result.success,
                    type: 'manual_case'
                });

                if (result.success) {
                    this.updateProcessingStep(`Processing case law ${++processedCount}/${celexIds.length}: ${celexId}`);
                    await this.processCaseLawDocument(celexId, result.data);
                } else {
                    console.warn(`Failed to fetch case law ${celexId}:`, result.error);
                }
            }

            this.createCombinedView();
            this.showResults();

        } catch (error) {
            console.error('Manual case processing error:', error);
            this.showError(`Manual processing failed: ${error.message}`);
        } finally {
            this.isProcessing = false;
            this.hideProcessing();
        }
    }

    createCombinedView() {
        this.extractedData.combined = {
            legislative: this.extractedData.legislative,
            caseLaw: this.extractedData.caseLaw,
            linkedData: this.createLinkedData(),
            summary: this.createSummary()
        };
    }

    createLinkedData() {
        if (!this.extractedData.legislative || !this.extractedData.legislative.caselaw) {
            return {};
        }

        const linkedData = {};
        const enhancedReferences = [];
        
        // Enhanced article parsing with interpretation analysis
        this.extractedData.legislative.caselaw.forEach(caseRef => {
            const celexId = caseRef.celexId;
            if (this.extractedData.caseLaw[celexId]) {
                const caseData = this.extractedData.caseLaw[celexId];
                
                // Create context for enhanced parsing
                const context = {
                    court: caseData.courtInfo?.court || 'Unknown',
                    procedureType: caseData.courtInfo?.procedureType || 'Unknown',
                    judgmentDate: caseData.dates?.judgmentDate || 'Unknown',
                    celexId: celexId
                };

                caseRef.parsedArticles.forEach(articleRef => {
                    if (articleRef.type !== 'none') {
                        // Use enhanced article parser with INT values
                        const enhancedArticleRef = this.enhancedArticleParser.parseWithInterpretation(
                            articleRef.original || articleRef.parsed,
                            context,
                            caseData.titleAndParties?.title ? JSON.stringify(caseData.titleAndParties.title) : ''
                        );

                        const linkKey = `article_${enhancedArticleRef.parsed}`;
                        
                        if (!linkedData[linkKey]) {
                            linkedData[linkKey] = {
                                article: enhancedArticleRef.parsed,
                                originalReference: enhancedArticleRef.original,
                                components: enhancedArticleRef.components,
                                interpretingCases: [],
                                interpretationSummary: {
                                    totalCases: 0,
                                    averageIntValue: 0,
                                    interpretationTypes: {},
                                    legalSignificance: { high: 0, medium: 0, low: 0 }
                                }
                            };
                        }

                        // Add enhanced interpretation data
                        linkedData[linkKey].interpretingCases.push({
                            celexId: celexId,
                            caseData: caseData,
                            interpretationType: caseRef.type,
                            enhancedInterpretation: {
                                intValue: enhancedArticleRef.intValue,
                                interpretationType: enhancedArticleRef.interpretation.type,
                                interpretationApproach: enhancedArticleRef.interpretation.approach,
                                confidence: enhancedArticleRef.interpretation.confidence,
                                reasoning: enhancedArticleRef.interpretation.reasoning,
                                semanticContext: enhancedArticleRef.semanticContext,
                                legalSignificance: enhancedArticleRef.legalSignificance
                            }
                        });

                        // Update interpretation summary for this article
                        const summary = linkedData[linkKey].interpretationSummary;
                        summary.totalCases++;
                        summary.averageIntValue = Math.round((summary.averageIntValue * (summary.totalCases - 1) + enhancedArticleRef.intValue) / summary.totalCases);
                        
                        const intType = enhancedArticleRef.interpretation.type;
                        if (intType !== 'unknown') {
                            summary.interpretationTypes[intType] = (summary.interpretationTypes[intType] || 0) + 1;
                        }

                        const sigLevel = enhancedArticleRef.legalSignificance.precedentialValue;
                        if (sigLevel in summary.legalSignificance) {
                            summary.legalSignificance[sigLevel]++;
                        }

                        enhancedReferences.push(enhancedArticleRef);
                    }
                });
            }
        });

        // Generate overall interpretation summary
        if (enhancedReferences.length > 0) {
            linkedData._overallSummary = this.enhancedArticleParser.generateInterpretationSummary(enhancedReferences);
        }

        return linkedData;
    }

    createSummary() {
        const summary = {
            totalDocuments: 0,
            legislativeDocuments: 0,
            caseLawDocuments: 0,
            linkedArticles: 0,
            apiCallsTotal: this.extractedData.metadata.apiCalls.length,
            apiCallsSuccessful: this.extractedData.metadata.apiCalls.filter(call => call.success).length,
            processingTime: null
        };

        if (this.extractedData.legislative) {
            summary.legislativeDocuments = 1;
            summary.totalDocuments++;
        }

        summary.caseLawDocuments = Object.keys(this.extractedData.caseLaw).length;
        summary.totalDocuments += summary.caseLawDocuments;

        if (this.extractedData.combined && this.extractedData.combined.linkedData) {
            summary.linkedArticles = Object.keys(this.extractedData.combined.linkedData).length;
        }

        if (this.extractedData.metadata.processingTimestamp) {
            const processingStart = new Date(this.extractedData.metadata.processingTimestamp);
            const processingEnd = new Date();
            summary.processingTime = `${(processingEnd - processingStart) / 1000}s`;
        }

        return summary;
    }

    // UI Management Methods
    updateProcessingStep(message) {
        this.processingSteps.push({
            step: ++this.currentStep,
            message: message,
            timestamp: new Date().toISOString()
        });
        
        const progressDiv = document.getElementById('processing-progress');
        if (progressDiv) {
            progressDiv.innerHTML = `
                <div class="processing-step">
                    <span class="step-number">${this.currentStep}</span>
                    <span class="step-message">${message}</span>
                </div>
            `;
        }
        
        console.log(`Step ${this.currentStep}: ${message}`);
    }

    switchView(viewName) {
        // Update view buttons
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-view="${viewName}"]`).classList.add('active');

        // Show appropriate content
        this.hideAllViews();
        document.getElementById(`${viewName}-view`).classList.remove('hidden');

        // Update view content
        this.updateViewContent(viewName);
    }

    updateViewContent(viewName) {
        switch (viewName) {
            case 'legislative':
                this.displayLegislativeData();
                break;
            case 'caselaw':
                this.displayCaseLawData();
                break;
            case 'combined':
                this.displayCombinedData();
                break;
        }
    }

    displayLegislativeData() {
        const container = document.getElementById('legislative-content');
        if (!this.extractedData.legislative) {
            container.innerHTML = '<p class="no-data">No legislative data available</p>';
            return;
        }

        // Use existing legislation extractor display logic
        container.innerHTML = this.formatLegislativeDisplay(this.extractedData.legislative);
    }

    displayCaseLawData() {
        const container = document.getElementById('caselaw-content');
        const caseLawData = this.extractedData.caseLaw;
        
        if (Object.keys(caseLawData).length === 0) {
            container.innerHTML = '<p class="no-data">No case law data available</p>';
            return;
        }

        let html = '';
        for (const [celexId, caseData] of Object.entries(caseLawData)) {
            html += this.formatCaseLawDisplay(celexId, caseData);
        }
        container.innerHTML = html;
    }

    displayCombinedData() {
        const container = document.getElementById('combined-content');
        if (!this.extractedData.combined) {
            container.innerHTML = '<p class="no-data">No combined data available</p>';
            return;
        }

        container.innerHTML = this.formatCombinedDisplay(this.extractedData.combined);
    }

    // Display formatting methods (simplified versions)
    formatLegislativeDisplay(data) {
        return `
            <div class="data-section">
                <h3>Legislative Document</h3>
                <div class="data-grid">
                    <div class="data-item">
                        <strong>CELEX:</strong> ${data.identifiers?.celex || 'Not found'}
                    </div>
                    <div class="data-item">
                        <strong>Title:</strong> ${data.title?.primary || 'Not found'}
                    </div>
                    <div class="data-item">
                        <strong>Document Date:</strong> ${data.dates?.document || 'Not found'}
                    </div>
                    <div class="data-item">
                        <strong>Referenced Cases:</strong> ${data.caselaw?.length || 0}
                    </div>
                </div>
                <div class="json-export">
                    <button class="btn btn--outline" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">Show JSON</button>
                    <pre style="display: none;">${JSON.stringify(data, null, 2)}</pre>
                </div>
            </div>
        `;
    }

    formatCaseLawDisplay(celexId, data) {
        return `
            <div class="data-section">
                <h3>Case Law: ${celexId}</h3>
                <div class="data-grid">
                    <div class="data-item">
                        <strong>ECLI:</strong> ${data.identifiers?.ecli || 'Not found'}
                    </div>
                    <div class="data-item">
                        <strong>Court:</strong> ${data.courtInfo?.court || 'Not found'}
                    </div>
                    <div class="data-item">
                        <strong>Judgment Date:</strong> ${data.dates?.judgmentDate || 'Not found'}
                    </div>
                    <div class="data-item">
                        <strong>Interpreted Legislation:</strong> ${data.interpretedLegislation?.length || 0}
                    </div>
                </div>
                <div class="json-export">
                    <button class="btn btn--outline" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">Show JSON</button>
                    <pre style="display: none;">${JSON.stringify(data, null, 2)}</pre>
                </div>
            </div>
        `;
    }

    formatCombinedDisplay(data) {
        const summary = data.summary;
        let html = `
            <div class="data-section">
                <h3>Processing Summary</h3>
                <div class="summary-stats">
                    <div class="stat-item">
                        <span class="stat-number">${summary.totalDocuments}</span>
                        <span class="stat-label">Total Documents</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${summary.linkedArticles}</span>
                        <span class="stat-label">Linked Articles</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${summary.apiCallsSuccessful}/${summary.apiCallsTotal}</span>
                        <span class="stat-label">API Calls</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">${summary.processingTime || 'N/A'}</span>
                        <span class="stat-label">Processing Time</span>
                    </div>
                </div>
            </div>
        `;

        // Overall interpretation summary
        if (data.linkedData && data.linkedData._overallSummary) {
            const overallSummary = data.linkedData._overallSummary;
            html += `
                <div class="data-section">
                    <h3>Interpretation Analysis Overview</h3>
                    <div class="interpretation-overview">
                        <div class="overview-stats">
                            <div class="stat-item">
                                <span class="stat-number">${overallSummary.totalReferences}</span>
                                <span class="stat-label">Article References</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">${overallSummary.averageIntValue}</span>
                                <span class="stat-label">Avg INT Value</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">${Object.keys(overallSummary.interpretationTypes).length}</span>
                                <span class="stat-label">Interpretation Types</span>
                            </div>
                            <div class="stat-item">
                                <span class="stat-number">${Object.keys(overallSummary.legalDomains).length}</span>
                                <span class="stat-label">Legal Domains</span>
                            </div>
                        </div>
                        <div class="interpretation-types">
                            <h4>Most Common Interpretation Approaches</h4>
                            ${Object.entries(overallSummary.commonApproaches)
                                .sort(([,a], [,b]) => b - a)
                                .slice(0, 5)
                                .map(([approach, count]) => `
                                    <div class="interpretation-tag">
                                        <span class="tag-name">${approach}</span>
                                        <span class="tag-count">${count}</span>
                                    </div>
                                `).join('')}
                        </div>
                    </div>
                </div>
            `;
        }

        if (data.linkedData && Object.keys(data.linkedData).length > 0) {
            html += '<div class="data-section"><h3>Article Interpretations with Enhanced Analysis</h3>';
            
            // Filter out the _overallSummary key
            const articleLinks = Object.entries(data.linkedData).filter(([key]) => !key.startsWith('_'));
            
            for (const [linkKey, linkData] of articleLinks) {
                if (!linkData.interpretationSummary) continue;
                
                const intSummary = linkData.interpretationSummary;
                html += `
                    <div class="linked-article enhanced">
                        <div class="article-header">
                            <h4>${linkData.article}</h4>
                            <div class="article-metrics">
                                <span class="metric-badge int-value">INT: ${intSummary.averageIntValue}</span>
                                <span class="metric-badge case-count">${intSummary.totalCases} Cases</span>
                                <span class="metric-badge significance">${Object.keys(intSummary.legalSignificance).reduce((max, key) => 
                                    intSummary.legalSignificance[key] > intSummary.legalSignificance[max] ? key : max, 'low')}</span>
                            </div>
                        </div>
                        <p><strong>Original Reference:</strong> ${linkData.originalReference}</p>
                        
                        ${Object.keys(intSummary.interpretationTypes).length > 0 ? `
                            <div class="interpretation-analysis">
                                <h5>Interpretation Types:</h5>
                                <div class="interpretation-tags">
                                    ${Object.entries(intSummary.interpretationTypes)
                                        .map(([type, count]) => `
                                            <span class="interpretation-tag">
                                                <span class="tag-name">${type}</span>
                                                <span class="tag-count">${count}</span>
                                            </span>
                                        `).join('')}
                                </div>
                            </div>
                        ` : ''}
                        
                        <div class="interpreting-cases enhanced">
                            ${linkData.interpretingCases.map(caseInfo => `
                                <div class="case-link enhanced" onclick="this.querySelector('.case-details').style.display = this.querySelector('.case-details').style.display === 'none' ? 'block' : 'none'">
                                    <div class="case-summary">
                                        <span class="case-celex">${caseInfo.celexId}</span>
                                        <span class="case-type">${caseInfo.interpretationType}</span>
                                        ${caseInfo.enhancedInterpretation ? `
                                            <span class="int-value-badge">${caseInfo.enhancedInterpretation.intValue}</span>
                                            <span class="interpretation-type-badge">${caseInfo.enhancedInterpretation.interpretationType}</span>
                                        ` : ''}
                                    </div>
                                    ${caseInfo.enhancedInterpretation ? `
                                        <div class="case-details" style="display: none;">
                                            <div class="detail-grid">
                                                <div class="detail-item">
                                                    <strong>Interpretation Approach:</strong>
                                                    ${caseInfo.enhancedInterpretation.interpretationApproach.join(', ') || 'Unknown'}
                                                </div>
                                                <div class="detail-item">
                                                    <strong>Legal Domain:</strong>
                                                    ${caseInfo.enhancedInterpretation.semanticContext?.legalDomain || 'Unknown'}
                                                </div>
                                                <div class="detail-item">
                                                    <strong>Precedential Value:</strong>
                                                    ${caseInfo.enhancedInterpretation.legalSignificance?.precedentialValue || 'Unknown'}
                                                </div>
                                                <div class="detail-item">
                                                    <strong>Scope:</strong>
                                                    ${caseInfo.enhancedInterpretation.legalSignificance?.scope || 'Unknown'}
                                                </div>
                                                ${caseInfo.enhancedInterpretation.reasoning ? `
                                                    <div class="detail-item reasoning">
                                                        <strong>Reasoning:</strong>
                                                        ${caseInfo.enhancedInterpretation.reasoning}
                                                    </div>
                                                ` : ''}
                                            </div>
                                        </div>
                                    ` : ''}
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
            html += '</div>';
        }

        return html;
    }

    // Export functionality
    exportData(type) {
        let data, filename;
        
        switch (type) {
            case 'legislative':
                data = this.extractedData.legislative;
                filename = `legislative_${this.extractedData.metadata.sourceCelex}_${new Date().toISOString().split('T')[0]}.json`;
                break;
            case 'caseLaw':
                data = this.extractedData.caseLaw;
                filename = `caselaw_${this.extractedData.metadata.sourceCelex}_${new Date().toISOString().split('T')[0]}.json`;
                break;
            case 'combined':
                data = this.extractedData;
                filename = `integrated_${this.extractedData.metadata.sourceCelex}_${new Date().toISOString().split('T')[0]}.json`;
                break;
        }

        if (!data) {
            this.showError('No data available for export');
            return;
        }

        const blob = new Blob([JSON.stringify(data, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    async testAPIConnectivity() {
        this.showProcessing();
        this.updateProcessingStep('Testing API connectivity...');
        
        try {
            const success = await this.apiClient.testConnectivity();
            if (success) {
                this.showSuccess('✅ API connectivity test successful');
            } else {
                this.showError('❌ API connectivity test failed');
            }
        } catch (error) {
            this.showError(`API test error: ${error.message}`);
        } finally {
            this.hideProcessing();
        }
    }

    clearAll() {
        document.getElementById('celex-input').value = '';
        document.getElementById('manual-cases-input').value = '';
        this.apiClient.clearCache();
        this.resetApplicationState();
    }

    updateUI() {
        // Update auto-fetch status
        const autoFetchStatus = document.getElementById('auto-fetch-status');
        if (autoFetchStatus) {
            autoFetchStatus.textContent = this.autoFetchCaseLaw ? 'Enabled' : 'Disabled';
            autoFetchStatus.className = this.autoFetchCaseLaw ? 'status-enabled' : 'status-disabled';
        }

        // Update cache status
        const cacheStats = this.apiClient.getCacheStats();
        const cacheStatus = document.getElementById('cache-status');
        if (cacheStatus) {
            cacheStatus.textContent = `${cacheStats.size} documents cached`;
        }
    }

    // UI State Management
    showProcessing() {
        document.getElementById('processing-section').classList.remove('hidden');
        this.currentStep = 0;
        this.processingSteps = [];
    }

    hideProcessing() {
        document.getElementById('processing-section').classList.add('hidden');
    }

    showResults() {
        document.getElementById('results-section').classList.remove('hidden');
        this.switchView('legislative'); // Default to legislative view
    }

    hideAllViews() {
        document.querySelectorAll('.view-content').forEach(view => {
            view.classList.add('hidden');
        });
    }

    showError(message) {
        document.getElementById('error-message').textContent = message;
        document.getElementById('error-section').classList.remove('hidden');
        setTimeout(() => this.hideError(), 10000);
    }

    showSuccess(message) {
        // Create temporary success message
        const successDiv = document.createElement('div');
        successDiv.className = 'alert alert--success';
        successDiv.textContent = message;
        document.querySelector('.container').prepend(successDiv);
        setTimeout(() => successDiv.remove(), 5000);
    }

    hideError() {
        document.getElementById('error-section').classList.add('hidden');
    }
}

// Initialize the integrated application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new IntegratedEurLexExtractor();
});