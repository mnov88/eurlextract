# Processed: MT_Datatilsynet_Norway_-_18_02140.md

**Original file:** /Users/milos/Downloads/eurlextract/testingMD/MT_Datatilsynet_Norway_-_18_02140.md
**Processed at:** 2025-09-15 15:57:34

---

<think>
Okay, let's start breaking this down. The user wants me to extract specific facts from the provided decision text by the Norwegian DPA, Datatilsynet. They need exactly 11 lines of answers following a strict format.

First, looking at Question 1: What is the top-level category of the defendant? The defendant here is Bergen municipality. Since municipalities are public authorities, the answer should be PUBLIC_AUTHORITY.

Question 2 asks for the public authority type. Bergen is a municipality, so LOCAL_GOVERNMENT makes sense here.

For Question 3, since the defendant is a public authority, this question isn't applicable. So I'll put N_A.

Question 4 is about SME status, but again, since it's a municipality (public authority), this doesn't apply. Answer N_A.

Question 5 is reserved, so N_A.

Question 6: Was an administrative fine issued? Yes, the decision mentions a fine of NOK 1,600,000. So YES.

Question 7 requires the amount in ISO format. The fine is 1,600,000 NOK, which translates to 1600000 NOK. So Answer 7: 1600000 NOK.

Question 8 asks about Article 58(2) powers used besides the fine. The decision mentions ordering the implementation of two-factor authentication. Looking at the allowed codes, ORDER_COMPLIANCE fits here. No other measures are explicitly mentioned, so just ORDER_COMPLIANCE.

Question 9: Did they reference EDPB guidance? The text mentions WP253 but not explicitly the EDPB administrative-fines guidance. So UNKNOWN.

Question 10: Previous infringements? The decision references a previous case with Møhlenpris school where two-factor authentication was required, indicating PRIOR_INFRINGER_PRESENT.

Question 11: Not in breach? No, the holding states a violation was found. Answer NO.
</think>

Answer 1: PUBLIC_AUTHORITY  
Answer 2: LOCAL_GOVERNMENT  
Answer 3: N_A  
Answer 4: N_A  
Answer 5: N_A  
Answer 6: YES  
Answer 7: 1600000 NOK  
Answer 8: ORDER_COMPLIANCE  
Answer 9: UNKNOWN  
Answer 10: PRIOR_INFRINGER_PRESENT  
Answer 11: NO