# Processed: MT_IMY_Sweden_-_DI-2020-11397.md

**Original file:** D:\aidpas\eurlextract\fast_scrape\organized_mt\authorities\Sweden\MT_IMY_Sweden_-_DI-2020-11397.md
**Processed at:** 2025-09-12 16:12:54

---

Based on the provided decision text, here's a summary of the key points:

### Key Points from the Decision

1. **Context**:
   - The Swedish Authority for Privacy Protection (IMY) issued a decision regarding CDON AB's use of Google Analytics.
   - The complaint was filed by Max Schrems' NGO, NOYB.

2. **Facts**:
   - CDON AB used Google Analytics to collect and transfer personal data from users in the EU/EEA to the USA via Google LLC.
   - The data included IP addresses (with the last octet truncated) and unique identifiers like UUIDs.
   - The processing was done for analytics purposes, such as tracking user behavior on CDON's website.

3. **Legal Basis**:
   - IMY assessed whether the transfer of personal data to the USA complied with EU data protection laws, specifically Chapter V GDPR (Article 44 et seq.).
   - The key legal question was whether the transfer ensured an adequate level of protection for personal data in light of US surveillance laws (e.g., Section 702 FISA).

4. **Analysis**:
   - IMY found that Google Analytics transfers personal data to the USA, where US intelligence agencies can access it under laws like Section 702 FISA.
   - The standard contractual clauses (SCCs) used by CDON and Google were insufficient because they did not prevent or effectively mitigate access by US authorities.
   - Additional measures taken by CDON (e.g., IP address truncation) were deemed inadequate because:
     - Truncated IP addresses could still be combined with other data to identify users.
     - No technical or organizational measures were in place to prevent US intelligence agencies from accessing the data.

5. **Conclusion**:
   - IMY concluded that CDON AB violated Article 44 GDPR by failing to ensure an adequate level of protection for personal data transferred to the USA.
   - The authority imposed a penalty fee of SEK 300,000 (approximately €27,800) on CDON AB.
   - Additionally, IMY ordered CDON AB to cease using Google Analytics in its current form unless additional protective measures were implemented.

6. **Remedies**:
   - CDON AB was given one month from the date the decision gained legal force to comply with the order (i.e., stop using Google Analytics or implement sufficient safeguards).

### Implications
This decision aligns with other EU supervisory authorities' rulings on Google Analytics, emphasizing that:
- Standard contractual clauses alone are insufficient for transfers to the USA due to US surveillance laws.
- Technical measures like IP address truncation do not provide enough protection when combined with other identifiers (e.g., UUIDs).
- Companies must implement additional safeguards or avoid using tools like Google Analytics if they cannot ensure compliance with EU data protection standards.

### Next Steps
If CDON AB wishes to appeal the decision, it must submit an appeal within three weeks of receiving the decision. The appeal would be reviewed by the Administrative Court in Stockholm.

This case highlights the ongoing challenges for companies using US-based analytics tools under EU data protection law post-Schrems II.