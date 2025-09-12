/**
 * Enhanced Article Reference Parser with INT (Interpretation) Values
 * 
 * This module extends the existing article reference parsing to capture
 * semantic interpretation relationships between case law and legislation.
 */

class EnhancedArticleParser {
    constructor() {
        // Interpretation types mapping
        this.interpretationTypes = {
            'strict': 'Strict interpretation - narrow reading of provisions',
            'broad': 'Broad interpretation - expansive reading of provisions', 
            'literal': 'Literal interpretation - based on plain text meaning',
            'teleological': 'Teleological interpretation - based on purpose/objective',
            'systematic': 'Systematic interpretation - within legal system context',
            'historical': 'Historical interpretation - based on legislative history',
            'comparative': 'Comparative interpretation - considering other jurisdictions',
            'constitutional': 'Constitutional interpretation - considering fundamental rights',
            'clarifying': 'Clarifying interpretation - explaining unclear provisions',
            'restricting': 'Restricting interpretation - limiting scope of application',
            'extending': 'Extending interpretation - expanding scope of application'
        };

        // Keywords that indicate interpretation type
        this.interpretationKeywords = {
            'strict': ['strictly', 'narrowly', 'restrictively', 'limited to', 'confined to'],
            'broad': ['broadly', 'widely', 'extensively', 'encompasses', 'includes'],
            'literal': ['literally', 'plain meaning', 'textual', 'ordinary meaning'],
            'teleological': ['purpose', 'objective', 'aim', 'goal', 'intended'],
            'systematic': ['systematic', 'context of', 'within the framework', 'coherent'],
            'historical': ['legislative history', 'preparatory works', 'travaux préparatoires'],
            'comparative': ['comparative law', 'other member states', 'similar provisions'],
            'constitutional': ['fundamental rights', 'constitutional', 'charter'],
            'clarifying': ['clarifies', 'explains', 'makes clear', 'elucidates'],
            'restricting': ['restricts', 'limits', 'narrows', 'reduces scope'],
            'extending': ['extends', 'expands', 'widens', 'increases scope']
        };

        // Legal effect indicators
        this.legalEffects = {
            'binding': 'Creates binding precedent',
            'persuasive': 'Has persuasive authority',
            'distinguishing': 'Distinguishes from previous cases',
            'overruling': 'Overrules previous interpretation',
            'confirming': 'Confirms existing interpretation',
            'developing': 'Develops new legal principle'
        };
    }

    /**
     * Enhanced article reference parsing with interpretation analysis
     * @param {string} reference - The article reference string
     * @param {Object} context - Additional context (case type, court, etc.)
     * @param {string} caseText - Full case text for semantic analysis (optional)
     * @returns {Object} Enhanced parsing result with INT values
     */
    parseWithInterpretation(reference, context = {}, caseText = '') {
        // Get basic article parsing result
        const basicResult = this.parseBasicArticleReference(reference);
        
        // Enhance with interpretation analysis
        const interpretationAnalysis = this.analyzeInterpretation(reference, context, caseText);
        
        return {
            ...basicResult,
            interpretation: interpretationAnalysis,
            intValue: this.calculateIntValue(basicResult, interpretationAnalysis, context),
            semanticContext: this.extractSemanticContext(reference, caseText),
            legalSignificance: this.assessLegalSignificance(interpretationAnalysis, context)
        };
    }

    /**
     * Parse basic article reference (existing logic enhanced)
     * @private
     */
    parseBasicArticleReference(reference) {
        if (!reference || reference.trim() === '') {
            return { 
                original: reference, 
                parsed: 'Not specified', 
                type: 'none', 
                components: {},
                confidence: 0
            };
        }

        const original = reference.trim();
        let parsed = '';
        let type = 'original';
        let components = {};
        let confidence = 0;

        try {
            // URI-structured references: {AR|...} 23 {PA|...} 1 {PTA|...} (e)
            if (reference.includes('{AR|')) {
                const result = this.parseURIStructuredReference(reference);
                if (result.success) {
                    return { ...result, original, confidence: 0.95 };
                }
            }

            // Enhanced simple references with better pattern matching
            const simpleResult = this.parseSimpleReference(reference);
            if (simpleResult.success) {
                return { ...simpleResult, original, confidence: 0.9 };
            }

            // Recitals: C17, C24, Recital 17, Preamble (17)
            const recitalResult = this.parseRecitalReference(reference);
            if (recitalResult.success) {
                return { ...recitalResult, original, confidence: 0.85 };
            }

            // Complex structured references with multiple components
            const complexResult = this.parseComplexReference(reference);
            if (complexResult.success) {
                return { ...complexResult, original, confidence: 0.8 };
            }

            // Fallback: try to extract any meaningful numbers or terms
            const fallbackResult = this.parseFallbackReference(reference);
            return { ...fallbackResult, original, confidence: 0.3 };

        } catch (error) {
            console.warn('Error in basic article parsing:', error);
            return { 
                original, 
                parsed: original, 
                type: 'error', 
                components: {}, 
                confidence: 0,
                error: error.message 
            };
        }
    }

    /**
     * Parse URI-structured references with enhanced accuracy
     * @private
     */
    parseURIStructuredReference(reference) {
        const patterns = {
            article: /\{AR\|[^}]*\}\s*(\d+)/,
            paragraph: /\{PA\|[^}]*\}\s*(\d+)/,
            point: /\{PTA\|[^}]*\}\s*\(([^)]+)\)/,
            subpoint: /\{SPT\|[^}]*\}\s*\(([^)]+)\)/,
            indent: /\{IND\|[^}]*\}\s*(\d+)/
        };

        const components = {};
        let parsed = '';

        const articleMatch = reference.match(patterns.article);
        if (articleMatch) {
            components.article = articleMatch[1];
            parsed = `Article ${articleMatch[1]}`;

            const paragraphMatch = reference.match(patterns.paragraph);
            if (paragraphMatch) {
                components.paragraph = paragraphMatch[1];
                parsed += `, Paragraph ${paragraphMatch[1]}`;
            }

            const pointMatch = reference.match(patterns.point);
            if (pointMatch) {
                components.point = pointMatch[1];
                parsed += `, Point (${pointMatch[1]})`;
            }

            const subpointMatch = reference.match(patterns.subpoint);
            if (subpointMatch) {
                components.subpoint = subpointMatch[1];
                parsed += `, Subpoint (${subpointMatch[1]})`;
            }

            return { 
                success: true, 
                parsed, 
                type: 'uri_structured', 
                components 
            };
        }

        return { success: false };
    }

    /**
     * Parse simple reference patterns with enhanced recognition
     * @private
     */
    parseSimpleReference(reference) {
        const patterns = [
            // A06P1LA, A04PT11, A02LH, A05P3, A02LF
            /^A(\d+)(?:P(\d+))?(?:PT(\d+))?(?:L([A-Z]))?$/,
            // Article 6, Art. 15, Art 23(1)
            /^Art(?:icle|\.?)\s+(\d+)(?:\((\d+)\))?/i,
            // 6(1), 15(2)(a), 23
            /^(\d+)(?:\((\d+)\))?(?:\(([a-z])\))?$/
        ];

        for (const pattern of patterns) {
            const match = reference.match(pattern);
            if (match) {
                const components = { article: match[1] };
                let parsed = `Article ${match[1]}`;

                if (match[2]) {
                    components.paragraph = match[2];
                    parsed += `, Paragraph ${match[2]}`;
                }

                if (match[3]) {
                    components.point = match[3];
                    parsed += `, Point (${match[3]})`;
                }

                if (match[4]) {
                    components.letter = match[4];
                    parsed += `, Letter ${match[4]}`;
                }

                return { 
                    success: true, 
                    parsed, 
                    type: 'simple', 
                    components 
                };
            }
        }

        return { success: false };
    }

    /**
     * Parse recital references
     * @private
     */
    parseRecitalReference(reference) {
        const patterns = [
            /^C(\d+)$/,
            /^Recital\s+(\d+)/i,
            /^Preamble\s*\((\d+)\)/i,
            /^Whereas\s+(\d+)/i
        ];

        for (const pattern of patterns) {
            const match = reference.match(pattern);
            if (match) {
                return {
                    success: true,
                    parsed: `Recital ${match[1]}`,
                    type: 'recital',
                    components: { recital: match[1] }
                };
            }
        }

        return { success: false };
    }

    /**
     * Parse complex multi-component references
     * @private
     */
    parseComplexReference(reference) {
        // Handle colon-separated patterns: ART:55 ALN:1
        if (reference.includes('ART:') || reference.includes('ALN:')) {
            const artMatch = reference.match(/ART:(\d+)/);
            const alnMatch = reference.match(/ALN:(\d+)/);
            
            if (artMatch) {
                const components = { article: artMatch[1] };
                let parsed = `Article ${artMatch[1]}`;
                
                if (alnMatch) {
                    components.paragraph = alnMatch[1];
                    parsed += ` Paragraph ${alnMatch[1]}`;
                }
                
                return {
                    success: true,
                    parsed,
                    type: 'colon_structured',
                    components
                };
            }
        }

        // Handle fragment numbers: N 41, N 47 61 69 74
        if (/^N\s+/.test(reference)) {
            const numbers = reference.replace(/^N\s+/, '').split(/\s+/).filter(n => /^\d+$/.test(n));
            if (numbers.length === 1) {
                return {
                    success: true,
                    parsed: `Paragraph ${numbers[0]}`,
                    type: 'fragment',
                    components: { paragraph: numbers[0] }
                };
            } else if (numbers.length > 1) {
                return {
                    success: true,
                    parsed: `Paragraphs ${numbers[0]} to ${numbers[numbers.length - 1]}`,
                    type: 'fragment_range',
                    components: { 
                        paragraphRange: numbers,
                        startParagraph: numbers[0],
                        endParagraph: numbers[numbers.length - 1]
                    }
                };
            }
        }

        return { success: false };
    }

    /**
     * Fallback parsing for unrecognized patterns
     * @private
     */
    parseFallbackReference(reference) {
        // Try to extract any numbers that might be articles
        const numberMatch = reference.match(/\b(\d+)\b/);
        if (numberMatch) {
            return {
                success: true,
                parsed: `Article ${numberMatch[1]} (inferred)`,
                type: 'inferred',
                components: { article: numberMatch[1], inferred: true }
            };
        }

        return {
            success: true,
            parsed: reference,
            type: 'unparsed',
            components: { raw: reference }
        };
    }

    /**
     * Analyze interpretation type and approach
     * @private
     */
    analyzeInterpretation(reference, context, caseText) {
        const analysis = {
            type: 'unknown',
            approach: [],
            keywords: [],
            confidence: 0,
            reasoning: ''
        };

        // Combine reference and case text for analysis
        const textToAnalyze = `${reference} ${caseText}`.toLowerCase();

        // Check for interpretation keywords
        for (const [intType, keywords] of Object.entries(this.interpretationKeywords)) {
            const foundKeywords = keywords.filter(keyword => 
                textToAnalyze.includes(keyword.toLowerCase())
            );
            
            if (foundKeywords.length > 0) {
                analysis.approach.push(intType);
                analysis.keywords.push(...foundKeywords);
                analysis.confidence += foundKeywords.length * 0.1;
            }
        }

        // Determine primary interpretation type
        if (analysis.approach.length > 0) {
            analysis.type = analysis.approach[0]; // Most prominent
            analysis.reasoning = this.interpretationTypes[analysis.type];
        }

        // Consider context factors
        if (context.court === 'Court of Justice') {
            analysis.confidence += 0.2;
            analysis.reasoning += ' (ECJ interpretation carries high precedential value)';
        }

        if (context.procedureType && context.procedureType.includes('preliminary')) {
            analysis.approach.push('clarifying');
            analysis.reasoning += ' (Preliminary ruling provides guidance to national courts)';
        }

        return analysis;
    }

    /**
     * Calculate INT value - a numeric representation of interpretation significance
     * @private
     */
    calculateIntValue(basicResult, interpretationAnalysis, context) {
        let intValue = 0;

        // Base value from parsing confidence
        intValue += basicResult.confidence * 10;

        // Interpretation type weighting
        const typeWeights = {
            'constitutional': 10,
            'systematic': 8,
            'teleological': 7,
            'clarifying': 6,
            'broad': 5,
            'strict': 5,
            'literal': 4,
            'extending': 4,
            'restricting': 4,
            'historical': 3,
            'comparative': 2
        };

        if (interpretationAnalysis.type in typeWeights) {
            intValue += typeWeights[interpretationAnalysis.type];
        }

        // Court authority weighting
        if (context.court === 'Court of Justice') {
            intValue += 15;
        } else if (context.court === 'General Court') {
            intValue += 10;
        }

        // Procedure type weighting
        if (context.procedureType && context.procedureType.includes('preliminary')) {
            intValue += 12;
        }

        // Multiple interpretation approaches (complex interpretation)
        if (interpretationAnalysis.approach.length > 1) {
            intValue += interpretationAnalysis.approach.length * 2;
        }

        // Confidence factor
        intValue *= Math.max(0.1, interpretationAnalysis.confidence);

        return Math.round(Math.max(0, Math.min(100, intValue)));
    }

    /**
     * Extract semantic context from the reference and surrounding text
     * @private
     */
    extractSemanticContext(reference, caseText) {
        const context = {
            legalDomain: 'unknown',
            conceptualFramework: [],
            relatedProvisions: [],
            jurisdictionalScope: 'EU'
        };

        // Identify legal domain based on keywords
        const domainKeywords = {
            'data_protection': ['personal data', 'privacy', 'gdpr', 'processing', 'controller'],
            'competition': ['competition', 'antitrust', 'market', 'undertaking', 'abuse'],
            'internal_market': ['free movement', 'establishment', 'services', 'goods'],
            'fundamental_rights': ['fundamental rights', 'charter', 'human rights', 'dignity'],
            'environmental': ['environmental', 'climate', 'pollution', 'sustainability'],
            'consumer': ['consumer', 'protection', 'unfair terms', 'warranty'],
            'employment': ['employment', 'worker', 'working time', 'equality']
        };

        const combinedText = `${reference} ${caseText}`.toLowerCase();
        for (const [domain, keywords] of Object.entries(domainKeywords)) {
            if (keywords.some(keyword => combinedText.includes(keyword))) {
                context.legalDomain = domain;
                break;
            }
        }

        // Extract conceptual framework indicators
        const conceptIndicators = [
            'proportionality', 'subsidiarity', 'legal certainty', 'legitimate expectations',
            'effectiveness', 'equivalence', 'fundamental rights', 'rule of law'
        ];

        context.conceptualFramework = conceptIndicators.filter(concept =>
            combinedText.includes(concept)
        );

        return context;
    }

    /**
     * Assess the legal significance of the interpretation
     * @private
     */
    assessLegalSignificance(interpretationAnalysis, context) {
        const significance = {
            precedentialValue: 'low',
            scope: 'narrow',
            novelty: 'standard',
            practicalImpact: 'limited'
        };

        // Assess precedential value
        if (context.court === 'Court of Justice') {
            significance.precedentialValue = 'high';
        } else if (context.court === 'General Court') {
            significance.precedentialValue = 'medium';
        }

        // Assess scope based on interpretation type
        if (['constitutional', 'systematic', 'broad'].includes(interpretationAnalysis.type)) {
            significance.scope = 'broad';
        } else if (['teleological', 'clarifying'].includes(interpretationAnalysis.type)) {
            significance.scope = 'medium';
        }

        // Assess novelty
        if (interpretationAnalysis.approach.includes('extending') || 
            interpretationAnalysis.approach.includes('constitutional')) {
            significance.novelty = 'innovative';
        } else if (['teleological', 'systematic'].includes(interpretationAnalysis.type)) {
            significance.novelty = 'developing';
        }

        // Practical impact assessment
        if (significance.precedentialValue === 'high' && significance.scope === 'broad') {
            significance.practicalImpact = 'significant';
        } else if (significance.precedentialValue === 'high' || significance.scope === 'broad') {
            significance.practicalImpact = 'moderate';
        }

        return significance;
    }

    /**
     * Batch process multiple article references with interpretation analysis
     * @param {Array} references - Array of reference objects with context
     * @returns {Array} Enhanced parsing results
     */
    batchParseWithInterpretation(references) {
        return references.map(ref => {
            const { reference, context = {}, caseText = '' } = ref;
            return this.parseWithInterpretation(reference, context, caseText);
        });
    }

    /**
     * Generate interpretation summary for a set of article references
     * @param {Array} parsedReferences - Array of enhanced parsing results
     * @returns {Object} Interpretation summary
     */
    generateInterpretationSummary(parsedReferences) {
        const summary = {
            totalReferences: parsedReferences.length,
            interpretationTypes: {},
            averageIntValue: 0,
            legalSignificance: {
                high: 0,
                medium: 0,
                low: 0
            },
            commonApproaches: {},
            legalDomains: {}
        };

        parsedReferences.forEach(ref => {
            // Count interpretation types
            if (ref.interpretation.type !== 'unknown') {
                summary.interpretationTypes[ref.interpretation.type] = 
                    (summary.interpretationTypes[ref.interpretation.type] || 0) + 1;
            }

            // Sum INT values for average
            summary.averageIntValue += ref.intValue || 0;

            // Count significance levels
            const sigLevel = ref.legalSignificance.precedentialValue;
            if (sigLevel in summary.legalSignificance) {
                summary.legalSignificance[sigLevel]++;
            }

            // Count approaches
            ref.interpretation.approach.forEach(approach => {
                summary.commonApproaches[approach] = 
                    (summary.commonApproaches[approach] || 0) + 1;
            });

            // Count legal domains
            if (ref.semanticContext.legalDomain !== 'unknown') {
                summary.legalDomains[ref.semanticContext.legalDomain] = 
                    (summary.legalDomains[ref.semanticContext.legalDomain] || 0) + 1;
            }
        });

        summary.averageIntValue = Math.round(summary.averageIntValue / parsedReferences.length);

        return summary;
    }
}

// Export for use in integrated extractor
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedArticleParser;
} else if (typeof window !== 'undefined') {
    window.EnhancedArticleParser = EnhancedArticleParser;
}