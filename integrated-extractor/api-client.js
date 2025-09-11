class EUPublicationsAPIClient {
    constructor() {
        this.baseUrl = 'https://publications.europa.eu/resource/celex/';
        this.defaultHeaders = {
            'Accept': 'application/xml;notice=branch',
            'Accept-Language': 'eng'
        };
        this.cache = new Map();
        this.maxRetries = 3;
        this.retryDelay = 1000;
    }

    /**
     * Fetch XML document from EU Publications Office by CELEX identifier
     * @param {string} celexId - The CELEX identifier (e.g., '32016R0679', '62019CJ0311')
     * @param {boolean} useCache - Whether to use cached response if available
     * @returns {Promise<{success: boolean, data?: string, error?: string, cached?: boolean}>}
     */
    async fetchXMLFromCelex(celexId, useCache = true) {
        if (!celexId) {
            return { success: false, error: 'CELEX identifier is required' };
        }

        // Validate CELEX format (basic validation)
        if (!this.isValidCelexFormat(celexId)) {
            return { success: false, error: 'Invalid CELEX identifier format' };
        }

        // Check cache first
        if (useCache && this.cache.has(celexId)) {
            const cached = this.cache.get(celexId);
            console.log(`Using cached XML for CELEX: ${celexId}`);
            return { ...cached, cached: true };
        }

        const url = `${this.baseUrl}${celexId}`;
        console.log(`Fetching XML from: ${url}`);

        try {
            const result = await this.fetchWithRetry(url, this.defaultHeaders);
            
            if (result.success) {
                // Cache successful responses
                this.cache.set(celexId, result);
                console.log(`Successfully fetched and cached XML for CELEX: ${celexId}`);
            }

            return result;
        } catch (error) {
            console.error(`Failed to fetch XML for CELEX ${celexId}:`, error);
            return { 
                success: false, 
                error: `Network error: ${error.message}` 
            };
        }
    }

    /**
     * Fetch multiple CELEX documents in parallel
     * @param {string[]} celexIds - Array of CELEX identifiers
     * @param {number} concurrency - Maximum concurrent requests (default: 3)
     * @returns {Promise<Object>} Object with celexId as key and result as value
     */
    async fetchMultipleCelex(celexIds, concurrency = 3) {
        if (!Array.isArray(celexIds) || celexIds.length === 0) {
            return {};
        }

        console.log(`Fetching ${celexIds.length} CELEX documents with concurrency: ${concurrency}`);
        const results = {};

        // Process in batches to respect concurrency limit
        for (let i = 0; i < celexIds.length; i += concurrency) {
            const batch = celexIds.slice(i, i + concurrency);
            const batchPromises = batch.map(async (celexId) => {
                const result = await this.fetchXMLFromCelex(celexId);
                return { celexId, result };
            });

            const batchResults = await Promise.all(batchPromises);
            batchResults.forEach(({ celexId, result }) => {
                results[celexId] = result;
            });

            // Small delay between batches to be respectful to the API
            if (i + concurrency < celexIds.length) {
                await this.delay(500);
            }
        }

        return results;
    }

    /**
     * Fetch XML with retry logic and proper error handling
     * @private
     */
    async fetchWithRetry(url, headers, retryCount = 0) {
        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: headers,
                redirect: 'follow', // Important: allow redirects as specified
                mode: 'cors'
            });

            if (!response.ok) {
                if (response.status === 404) {
                    return { 
                        success: false, 
                        error: 'Document not found (404). Please verify the CELEX identifier.' 
                    };
                } else if (response.status === 403) {
                    return { 
                        success: false, 
                        error: 'Access forbidden (403). The document may not be publicly available.' 
                    };
                } else {
                    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
                }
            }

            // Check if response is actually XML
            const contentType = response.headers.get('content-type');
            if (!contentType || !contentType.includes('xml')) {
                console.warn(`Unexpected content type: ${contentType}`);
            }

            const xmlData = await response.text();
            
            // Basic validation that we received XML
            if (!xmlData.trim().startsWith('<')) {
                return { 
                    success: false, 
                    error: 'Response does not appear to be valid XML' 
                };
            }

            return { 
                success: true, 
                data: xmlData,
                contentType: contentType,
                url: response.url // May be different due to redirects
            };

        } catch (error) {
            console.warn(`Attempt ${retryCount + 1} failed:`, error.message);
            
            if (retryCount < this.maxRetries - 1) {
                const delay = this.retryDelay * Math.pow(2, retryCount); // Exponential backoff
                console.log(`Retrying in ${delay}ms...`);
                await this.delay(delay);
                return this.fetchWithRetry(url, headers, retryCount + 1);
            } else {
                throw error;
            }
        }
    }

    /**
     * Basic CELEX identifier format validation
     * @private
     */
    isValidCelexFormat(celexId) {
        // Basic CELEX format: sector + year + type + sequential number
        // Examples: 32016R0679, 62019CJ0311, 52021PC0206
        const celexPattern = /^[1-9]\d{4}[A-Z]{1,3}\d+/;
        return celexPattern.test(celexId);
    }

    /**
     * Determine if a CELEX identifier likely refers to case law
     * @param {string} celexId - The CELEX identifier
     * @returns {boolean} True if likely case law
     */
    isLikelyCaseLaw(celexId) {
        // Case law typically has sector 6 and types like CJ, GC, etc.
        return celexId.startsWith('6') && /^6\d{4}[A-Z]{2}\d+/.test(celexId);
    }

    /**
     * Determine if a CELEX identifier likely refers to legislation
     * @param {string} celexId - The CELEX identifier
     * @returns {boolean} True if likely legislation
     */
    isLikelyLegislation(celexId) {
        // Legislation typically has sectors 3 (EU acts) or 5 (international agreements)
        return celexId.startsWith('3') || celexId.startsWith('5');
    }

    /**
     * Clear the cache
     */
    clearCache() {
        this.cache.clear();
        console.log('API cache cleared');
    }

    /**
     * Get cache statistics
     */
    getCacheStats() {
        return {
            size: this.cache.size,
            keys: Array.from(this.cache.keys())
        };
    }

    /**
     * Utility method for delays
     * @private
     */
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /**
     * Test API connectivity with a known CELEX document
     */
    async testConnectivity() {
        console.log('Testing EU Publications Office API connectivity...');
        // Use a well-known CELEX (GDPR regulation) for testing
        const testCelex = '32016R0679';
        const result = await this.fetchXMLFromCelex(testCelex, false);
        
        if (result.success) {
            console.log('✅ API connectivity test successful');
            return true;
        } else {
            console.error('❌ API connectivity test failed:', result.error);
            return false;
        }
    }
}