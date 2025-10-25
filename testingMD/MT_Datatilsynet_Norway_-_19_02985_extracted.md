# Processed: MT_Datatilsynet_Norway_-_19_02985.md

**Original file:** /Users/milos/Downloads/eurlextract/fast_scrape/organized_mt/authorities/Norway/MT_Datatilsynet_Norway_-_19_02985.md
**Processed at:** 2025-09-16T12:03:12Z

---

<think>
Okay, let's start by going through the user's query and the provided information step by step. The task is to extract specific facts from the decision made by Datatilsynet (Norway) regarding Bergen municipality and format them into exactly 22 lines as per the instructions.

First, I need to identify each answer based on the questions provided. Let me go through each question one by one.

Question 1 asks for the country of the deciding DPA. The authority mentioned is Datatilsynet (Norway), so the answer should be NO. But wait, the user's instruction says to use ISO 3166-1 alpha-2 codes. Norway's code is NO. So Answer 1: NO.

Question 2 is about the decision date. The published date is 19.05.2020. In YYYY-MM-DD format, that's 2020-05-19. Answer 2: 2020-05-19.

Question 3 asks how many defendants are explicitly named. The parties section lists Bergen municipality as the only defendant. So Answer 3: 1.

Question 4 is the top-level category of the primary defendant. Since Bergen municipality is a public authority, Answer 4: PUBLIC_AUTHORITY.

Question 5 (only if Answer 4=PUBLIC_AUTHORITY): What's the primary public authority type? The case involves a municipality, which falls under LOCAL_GOVERNMENT. So Answer 5: LOCAL_GOVERNMENT.

Question 6 applies to BUSINESS or NON_PROFIT, but since it's PUBLIC_AUTHORITY, this is N_A. Answer 6: N_A.

Question 7 (only if BUSINESS): Not applicable here. Answer 7: N_A.

Question 8 asks the role of the primary defendant. Bergen municipality was the controller, so Answer 8: CONTROLLER.

Question 9 checks if it's a cross-border case. The jurisdiction is Norway only, no mention of other countries. Answer 9: NO.

Moving to Measures & Penalty:

Question 10: Did they evaluate Article 83 factors? The decision mentions a fine but doesn't detail systematic evaluation of factors. So Answer 10: UNKNOWN.

Question 11: Was an administrative fine issued? Yes, 3,000,000 NOK. Answer 11: YES.

Question 12 (if YES): Total fine amount is 3000000 NOK. Answer 12: 3000000 NOK.

Question 13: Other Article 58 measures? The decision mentions criticism but no specific corrective actions like reprimand or orders. So NONE. Answer 13: NONE.

Question 14: Was the defendant not in breach? No, violation was found. Answer 14: NO.

Legal Basis/Infringements:

Question 15: Which GDPR articles were breached? The relevant laws listed are Article 5(1)(f), 5(2), and 32(1)(b) GDPR. So Answer 15: A5;A5;A32.

Wait, the user's instruction says to use the exact article numbers as per GDPR. The case mentions Article 5(1)(f), which is A5, and Article 5(2) (also A5?), but maybe they should be listed as separate entries? Wait, the original text lists "Article 5(1)(f) GDPRArticle 5(2) GDPRArticle 32(1)(b) GDPR". So that's three articles: A5, A5 again (but perhaps it's a typo?), and A32. But according to the user's instruction, if they are explicitly mentioned, even duplicates should be included? Or maybe the user intended them as separate entries. However, in the answer format, semicolons separate different articles. So I think Answer 15: A5;A5;A32.

But wait, looking back at the case information, it's "Article 5(1)(f) GDPRArticle 5(2) GDPRArticle 32(1)(b) GDPR". The user might have made a typo with missing spaces. So that's three articles: Article 5(1)(f), Article 5(2), and Article 32(1)(b). Therefore, Answer 15 should be A5;A5;A32.

Question 16: Did the decision rely on ePrivacy rules? The case mentions GDPR only. So Answer 16: NO.

Processing Context:

Question 17: Involves Art.9 or Art.10 data? The summary says personal data of pupils, but no mention of special categories (Art.9) or criminal offence data (Art.10). So Answer 17: NO.

Question 18: Data subject groups. The facts mention pupils and parents without parental responsibility. But the options are predefined. "Pupils" would be under STUDENTS, and "parents" might not fit any of the listed categories. However, looking at the answer options, there's no exact match for parents. The closest is CONSUMERS_CUSTOMERS or OTHER. Since the case specifically mentions parents without parental responsibility, which isn't a standard category, Answer 18: OTHER.

Question 19: Number of data subjects affected. The facts mention 477 parents and 113 others. But the answer should be the total number of data subjects. However, the text says "in total 477 parents without parental responsibility received such an email" and "information that pupils were living on a secret address was disclosed to 113 parents." So total affected is 477 + 113 = 590? But the answer should be explicitly stated. The text doesn't state the exact number of data subjects, just the counts for specific groups. Since the question asks for the explicitly stated number, and it's not given as a single figure, Answer 19: UNKNOWN.

Question 20: Processing contexts mentioned. The app Vigilo was used for communication, leading to breaches. The context is about data processing through an app, which might relate to BIOMETRICS_ID if there were biometric data, but the summary doesn't mention that. It's more about general personal data leakage. However, the answer options include "OTHER" as a possibility. Since the case involves data breaches from an app used for communication, perhaps it's not listed in the options. The closest might be MARKETING_ONLINE_TRACKING or OTHER. But since the app is for communication and not marketing, maybe OTHER. Answer 20: OTHER.

Procedure & History:

Question 21: Trigger of the case. The municipality notified Datatilsynet about breaches under Article 33 GDPR. So it's a breach notification. Answer 21: BREACH_NOTIFICATION.

Question 22: Previous infringements? The decision doesn't mention prior infringements by Bergen municipality. Answer 22: DISCUSSED_NO_PRIOR.
</think>

Answer 1: NO  
Answer 2: 2020-05-19  
Answer 3: 1  
Answer 4: PUBLIC_AUTHORITY  
Answer 5: LOCAL_GOVERNMENT  
Answer 6: N_A  
Answer 7: N_A  
Answer 8: CONTROLLER  
Answer 9: NO  
Answer 10: UNKNOWN  
Answer 11: YES  
Answer 12: 3000000 NOK  
Answer 13: NONE  
Answer 14: NO  
Answer 15: A5;A5;A32  
Answer 16: NO  
Answer 17: NO  
Answer 18: OTHER  
Answer 19: UNKNOWN  
Answer 20: OTHER  
Answer 21: BREACH_NOTIFICATION  
Answer 22: DISCUSSED_NO_PRIOR