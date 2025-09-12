SYSTEM
Extract facts from an EU data protection authority (DPA) decision. Output MUST be exactly 11 lines in English. Each line starts with "Answer n: " and contains ONLY one of the allowed tokens. No extra text. Extract facts from an EU data protection authority (DPA) decision. Answer in ENGLISH. You must follow the exact Question/Answer format below. No commentary, no extra lines.


SCOPE AND EVIDENCE
- “EXPLICIT” means either (a) the exact term appears in the decision text (including official translations), or (b) the decision explicitly cites the relevant GDPR article and clause describing that measure (e.g., “Article 58(2)(b) reprimand”). If neither, answer UNKNOWN.
- Use ONLY the provided decision text. Do NOT infer.
- If a conditional question does not apply, answer N_A (not applicable).

PRIMARY DEFENDANT RULE
- If multiple defendants are named, choose the one in the operative part. If several are equally primary, choose the first named there.

TOP-LEVEL CATEGORY (Q1)
Allowed tokens:
- PUBLIC_AUTHORITY
- BUSINESS
- NON_PROFIT
- INDIVIDUAL
- UNKNOWN

PUBLIC AUTHORITY TYPE (Q2, only if Q1=PUBLIC_AUTHORITY)
Choose ONE:
- LOCAL_GOVERNMENT
- CENTRAL_MINISTRY_OR_AGENCY
- LAW_ENFORCEMENT_POLICE
- EDUCATION_PUBLIC
- HEALTH_PUBLIC
- REGULATOR_INDEPENDENT_AUTHORITY
- OTHER
- UNKNOWN
Else answer N_A.

PRIVATE-SECTOR ACTIVITY (Q3, only if Q1 in {BUSINESS, NON_PROFIT})
Choose ONE:
- DIGITAL_IT_TELECOM
- FINANCE_INSURANCE
- HEALTH_LIFESCIENCES_PRIVATE
- RETAIL_ECOMMERCE
- PROFESSIONAL_BUSINESS_SERVICES
- TRANSPORT_POSTAL
- OTHER
- UNKNOWN
Else answer N_A.

SME STATUS (Q4, only if Q1=BUSINESS)
SME per EU Recommendation 2003/361/EC. If not explicitly stated → UNKNOWN.
Allowed: YES / NO / UNKNOWN / N_A.

FINE (Q6–Q7)
- “Fine issued” means an administrative fine under GDPR (exclude damages/compensation/costs).
- If Answer 11=YES (not in breach), Answer 6 MUST be NO and Answer 7 MUST be N_A.

ARTICLE 58(2) POWERS (Q8)
- Answer is a semicolon-separated list of CODES from the set below, sorted alphabetically, with no spaces, or the single token NONE.
- NONE is exclusive (cannot appear with any other code).
Allowed codes:
WARNING; REPRIMAND; ORDER_DSR; ORDER_COMPLIANCE; ORDER_BREACH_COMMUNICATION; BAN_PROCESSING; ORDER_RECTIFY_ERASE_RESTRICT; CERT_WITHDRAW_BLOCK; SUSPEND_TRANSFERS; TEMPORARY_DAILY_FINE; NONE.
- These must be explicitly and directly issued formal legal measures with the authority exercising its Article 58 power: a general negative observation towards the defendant, for instance, does not qualify as a reprimand.

PREVIOUS INFRINGEMENTS (Q10)
Tokens:
- PRIOR_INFRINGER_PRESENT
- DISCUSSED_NO_PRIOR
- NOT_DISCUSSED
- UNKNOWN

NOT-IN-BREACH (Q11)
- If any infringement is upheld → NO.
- Only if the decision explicitly exonerates on all grounds → YES.
- If unclear → UNKNOWN.

CURRENCY AND NUMBERS
- Answer 7 format: DIGITS SPACE ISO4217 (uppercase), e.g., 5000 EUR. No symbols, no separators. Round to nearest whole unit if needed. If Q6≠YES → N_A.

FORMAT (STRICT)
Return EXACTLY the 11 lines below, each starting with “Answer n: ” and containing only one of the allowed values.


Question 1: What is the explicitly identified top-level category of the defendant?
Answer 1: [PUBLIC_AUTHORITY|BUSINESS|NON_PROFIT|INDIVIDUAL|UNKNOWN]

Question 2 (only if Answer 1=PUBLIC_AUTHORITY): What is the primary public authority type?
Answer 2: [LOCAL_GOVERNMENT|CENTRAL_MINISTRY_AGENCY|LAW_ENFORCEMENT_POLICE|EDUCATION_PUBLIC|HEALTH_PUBLIC|REGULATOR_INDEPENDENT_AUTHORITY|OTHER|UNKNOWN|N_A]

Question 3 (only if Answer 1 in {BUSINESS, NON_PROFIT}): What is the core activity sector?
Answer 3: [DIGITAL_IT_TELECOM|FINANCE_INSURANCE|HEALTH_LIFESCIENCES_PRIVATE|RETAIL_ECOMMERCE|PROFESSIONAL_BUSINESS_SERVICES|TRANSPORT_POSTAL|OTHER|UNKNOWN|N_A]

Question 4 (only if Answer 1=BUSINESS): Is the defendant explicitly a Small or Medium Enterprise (SME)?
Answer 4: [YES|NO|UNKNOWN|N_A]

Question 5: Did the authority explicitly and systematically evaluate individual Article 83(2) factors when setting the fine?
Answer 5: [YES|NO|UNKNOWN]

Question 6: Was an administrative fine explicitly issued?
Answer 6: [YES|NO|UNKNOWN]

Question 7 (only if Answer 6=YES): What is the total fine amount?
Answer 7: [<INTEGER><SPACE><ISO4217>|N_A]

Question 8: Which other Article 58(2) corrective powers were explicitly used (besides a fine)?
Answer 8: [WARNING;REPRIMAND;ORDER_DSR;ORDER_COMPLIANCE;ORDER_BREACH_COMMUNICATION;BAN_PROCESSING;ORDER_RECTIFY_ERASE_RESTRICT;CERT_WITHDRAW_BLOCK;SUSPEND_TRANSFERS;TEMPORARY_DAILY_FINE|NONE]

Question 9: Did the authority explicitly refer to EDPB administrative-fines guidance (Guidelines 04/2022) or WP253?
Answer 9: [YES|NO|UNKNOWN]

Question 10: Did the decision explicitly reference previous infringements by the same defendant?
Answer 10: [PRIOR_INFRINGER_PRESENT|DISCUSSED_NO_PRIOR|NOT_DISCUSSED|UNKNOWN]

Question 11: Was the defendant found not in breach?
Answer 11: [YES|NO|UNKNOWN]

INPUT
<<DECISION_TEXT>>
{paste the full decision text here}
</<DECISION_TEXT>>
