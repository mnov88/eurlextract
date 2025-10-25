# Processed: MT_Datatilsynet_Norway-_20_02254.md

**Original file:** /Users/milos/Downloads/eurlextract/fast_scrape/organized_mt/authorities/Norway/MT_Datatilsynet_Norway-_20_02254.md
**Processed at:** 2025-09-16T09:39:27Z

---

<think>
Okay, let's start by going through the user's query and the provided decision text to extract the required information. The user wants exactly 22 lines of answers in English, each starting with "Answer n: " and containing only specific tokens or patterns.

First, I need to parse the metadata from the case summary. The country is Norway, so Answer 1 should be NO. The decision date is 07.09.2020, which converts to YYYY-MM-DD format as 2020-09-07 for Answer 2.

Next, the number of defendants explicitly named: the parties listed are OpenX Software Ltd., OpenX Ltd., OpenX Technologies, Inc., Privacy Appeals Board, and Datatilsynet. However, the primary defendant is likely OpenX since they were the ones who received the request and filed a complaint. But according to the case information, there are three companies under OpenX, so Answer 3 might be 1 if considering them as one entity or 3 if each is separate. The text mentions "OpenX Software Ltd., OpenX Ltd. og OpenX Technologies, Inc." which seems like three entities but possibly part of the same company. However, the decision refers to them collectively as OpenX, so maybe Answer 3 is 1.

Answer 4 asks for the top-level category of the primary defendant. The parties are companies, so BUSINESS.

For Answer 5 (only if PUBLIC_AUTHORITY), not applicable here since it's a business.

Answer 6: Core activity sector. OpenX is an adtech company, so ONLINE_MEDIA_ADTECH.

Answer 7: Is the defendant an SME? The text doesn't mention anything about their size, so UNKNOWN.

Answer 8: Role of primary defendant. They are a data processor (as per the decision), so PROCESSOR.

Answer 9: Cross-border One-Stop-Shop case? The case involves Norway and possibly other countries, but the decision doesn't explicitly state it's a cross-border case under Article 60, so UNKNOWN.

Moving to Measures & Penalty:

Answer 10: Did the authority evaluate Article 83 factors? The decision doesn't mention any fine or evaluation of factors, so N_A.

Answer 11: Was an administrative fine issued? No, the outcome is "Rejected" and there's no fine mentioned. So NO.

Answer 12: Fine amount would be N_A since Answer 11 is NO.

Answer 13: Other Article 58(2) measures used besides a fine. The decision mentions ordering a report (Article 58(1)), which might fall under ORDER_COMPLIANCE or similar, but the text says "request for information" and "requirement for a report". However, since no other measures like reprimand or warning are mentioned, it's NONE.

Answer 14: Was the defendant found not in breach? The outcome is that the complaint was rejected, but the decision states that Datatilsynet has legal grounds. So Answer 14 is NO because they were found to be in breach of their obligation to respond.

Legal Basis/Infringements:

Answer 15: GDPR articles breached. The case involves Article 58(1) and ePrivacy Directive, but the decision doesn't state that any specific GDPR articles were breached. So NONE or UNKNOWN? Since there's no explicit mention of breaches, it's NONE.

Answer 16: Relied on ePrivacy rules? Yes, because the Electronic Communications Act §2-7b is mentioned, which relates to ePrivacy Directive. So YES.

Processing Context:

Answer 17: Special category data (Art9) or criminal-offence data (Art10)? The case involves personal data like location and sexual orientation, but not explicitly Art9 or Art10. So NO.

Answer 18: Data subject groups. The users of Grindr are mentioned, which would be USERS_ONLINE. Also, the app is for gays/bisexuals, so maybe CHILDREN? But the text doesn't specify children. It's more likely USERS_ONLINE and possibly EMPLOYEES if OpenX processes employee data, but the case focuses on users of Grindr. So USERS_ONLINE.

Answer 19: Number of data subjects affected. The text mentions "Grindr users" but no specific number. So N_A.

Answer 20: Processing contexts mentioned. Cookies and similar technologies under Electronic Communications Act §2-7b, so MARKETING_ONLINE_TRACKING (since cookies are used for targeted marketing). Also, BIOMETRICS_ID might not apply here. The main context is MARKETING_ONLINE_TRACKING.

Procedure & History:

Answer 21: Trigger of the case. It was a complaint from the Norwegian Consumer Council, so COMPLAINT.

Answer 22: Previous infringements? The decision doesn't mention prior infringements by OpenX, so DISCUSSED_NO_PRIOR or NOT_DISCUSSED. Since it's not discussed, maybe NOT_DISCUSSED.
</think>

Answer 1: NO  
Answer 2: 2020-09-07  
Answer 3: 1  
Answer 4: BUSINESS  
Answer 5: N_A  
Answer 6: ONLINE_MEDIA_ADTECH  
Answer 7: UNKNOWN  
Answer 8: PROCESSOR  
Answer 9: UNKNOWN  
Answer 10: N_A  
Answer 11: NO  
Answer 12: N_A  
Answer 13: NONE  
Answer 14: NO  
Answer 15: NONE  
Answer 16: YES  
Answer 17: NO  
Answer 18: USERS_ONLINE  
Answer 19: N_A  
Answer 20: MARKETING_ONLINE_TRACKING  
Answer 21: COMPLAINT  
Answer 22: NOT_DISCUSSED