# IMY (Sweden) - DI-2019-3375

## Case Information

**Authority:** IMY (Sweden)

**Jurisdiction:** Sweden

**Relevant Law:** Article 5(1)(f) GDPRArticle 5(1)(a) GDPRArticle 5(1) GDPRArticle 6(3) GDPRArticle 9(1) GDPRArticle 9(3) GDPRArticle 12 GDPRArticle 13 GDPRArticle 32(1) GDPRPatient Data ActSwedish Health Care Act, Chapter 2, 1 §National Board of Health and Welfare's rules and general guidelines on keeping medical records and processing personal data in healthcare

**Type:** Investigation

**Outcome:** Violation Found

**Decided:** 07.06.2021

**Published:** 08.06.2021

**Fine:** 12000000 SEK

**Parties:** MedHelp AB

**National Case Number/Name:** DI-2019-3375

**European Case Law Identifier:** n/a

**Appeal:** Unknown

**Original Language(s):** SwedishSwedish

**Original Source:** Decision (in SV)Decision (in SV)

**Initial Contributor:** Kave Noori

The Swedish DPA fined the company Medhelp AB €1,179,459 (SEK 12 million). Medhelp was contracted by three Swedish regions to answer calls from the medical advice hotline 1177. Medhelp violated the GDPR by exposing an unprotected server with patient data to the internet, failing to provide enough information about the transfer of data to a third country, and failing to continuously back up patient data. In addition, Medhelp employed a subcontractor to process data in Thailand contrary to Swedish healthcare law.

## Contents

*   [1 Facts](#Facts)
*   [2 Holding](#Holding)
    *   [2.1 Outsourcing to Medicall, Thailand](#Outsourcing_to_Medicall,_Thailand)
    *   [2.2 NAS accessible from the internet](#NAS_accessible_from_the_internet)
    *   [2.3 Information to data subjects](#Information_to_data_subjects)
    *   [2.4 Backup obligations](#Backup_obligations)
    *   [2.5 Fines](#Fines)
    *   [2.6 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## Facts

The Swedish DPA, Integritetsskyddsmyndigheten (IMY), launched an investigation into Medhelp after a data breach was reported by the newspaper Computer Sweden. According to Computer Sweden, 2.7 million recorded phone calls to the medical advice hotline 1177 were accessible on the Internet without password protection. The 1177 hotline is operated by the public health system and serves as the first point of contact for many patients. Patients can call the service for basic medical advice over the phone or speak to a nurse to discuss whether they should seek medical help and from where.

In Sweden, the health care system is managed by the regions. Each region is also responsible for providing 1177 consultations to its residents. At the time of the data breach, Medhelp AB was contracted by the regions of Stockholm, Sörmland and Värmland to answer 1177 calls. Another company, Inera AB, was also contracted by these regions to bridge incoming calls from the 1177 telephone system to Medhelp.

When the data breach occurred, the DPA received notifications of the data breach from both the data controller and several processors, although the responsibility to notify lies with the data controller. Both Medhelp and the DPA considered that Medhelp had primary legal responsibility, taking on the role of data controller in the GDPR and caregiver under the Patient Data Act (Patientdatalagen).

Medhelp estimated that they receive 3 million calls a year. Medhelp employed nurses to answer the calls and document them in patient records. Approximately 20% of these calls were handled by Medicall, a Thailand-based subcontractor. According to Medhelp, all of the nurses employed by the subcontractor held Swedish licenses to work as nurses and adhered to the terms and conditions in Medhelp's contracts with the regions. Medhelp claimed that the subcontractor was contractually bound to confidentiality and that Swedish healthcare regulations also applied to the subcontractor. All incoming calls received by nurses working for the contractor and the subcontractor were recorded and documented in Medhelp's patient record system, called Princess. Medicall also claimed that its nurses worked directly in Princess and that they could not view the patient record once the call was completed. Medicall also stated in its data breach report that incoming and outgoing calls were processed using Biz, a recording software developed by Voice Integrate AB.

Medhelp and Medicall employed another contractor, Voice Integrate AB, to provide telephony and software services. Also connected to the system was a Network Attached Storage Device (NAS) where the recorded calls were stored. According to Medhelp's data breach report, the NAS was exposed to the Internet without protection, which exposed sensitive personal information that included health, sexuality, personal number, date of birth, and other identifying information such as last name, name, and contact information.

## Holding

### Outsourcing to Medicall, Thailand

On the basis of the information provided by Medhelp and Medicall, the DPA found that both companies carried out activities defined as the provision of healthcare services under Swedish law. [The Swedish Health Care Act, chapter 2, 1 § (Hälso- och sjukvårdslagen HSL)](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/halso--och-sjukvardslag-1982763_sfs-1982-763#K2P1), defines the medical activity of preventing, examining and treating illness and injury as the provision of health care services.

Second, the DPA concluded that, contrary to Medhelp's claims, Swedish healthcare law, namely the [Healtchare Act](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/halso--och-sjukvardslag-1982763_sfs-1982-763) and t[he Patient Data Act (Patientdatalagen)](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/patientdatalag-2008355_sfs-2008-355), did not apply to the subcontractor Medicall because it was a company in Thailand.

Because Swedish healthcare laws did not apply to the Medicall subcontractor, the company did not have the rights and obligations that a healthcare provider has. The legal obligations regarding patient confidentiality did not apply to Medicall, nor did they have the authority to create new entries in a patient's medical record.

The DPA found that the relationship between Medhelp and Medicall had been contractually constructed as one between controller and processor. The DPA clarified that confidentiality obligations in a contract are not strong enough and cannot replace statutory patient confidentiality requirements for private caregivers.

The DPA considered that Medhelp's outsourcing of telephone consultations to a subcontractor based in Thailand had no legal basis. This was a breach of [Article 5(1) GDPR](/index.php?title=Article_5_GDPR#1 "Article 5 GDPR"), [Article 6(3) GDPR](/index.php?title=Article_6_GDPR#3 "Article 6 GDPR"), [Article 9(1) GDPR](/index.php?title=Article_9_GDPR#1 "Article 9 GDPR") and [Article 9(3) GDPR](/index.php?title=Article_9_GDPR#3 "Article 9 GDPR") as well as Swedish health care legislation. The DPA set the fine for this violation to SEK 3 000 000.

### NAS accessible from the internet

The DPA's investigation revealed that the calls recorded on the NAS were those handled by the subcontractor Medicall. However, this did not change the responsibility that Medhelp had for the handling of this data, as the controller is liable for the actions of its processor.

The DPA estimated that the data breach involved between 650,000 and 900,000 individual calls. Further, the DPA stated that everyone has the right to health care and that patients who call the hotline have a high expectation and right to private and confidential contact with the health service.

Medhelp informed the DPA that it was unaware that the recordings in the NAS had been made available on the Internet. The DPA therefore concluded that Medhelp had failed to implement the necessary technical and organizational measures under [Article 32(1) GDPR](/index.php?title=Article_32_GDPR#1 "Article 32 GDPR") and failed its obligations under [Article 5(1)(f) GDPR](/index.php?title=Article_5_GDPR#1f "Article 5 GDPR"). According to the DPA, Medhelp was not able to ensure the confidentiality, integrity, robustness and accessibility of the personal data and to continuously test, verify and evaluate the effectiveness of its measures. For this the DPA issued a fine of SEK 8 000 000.

### Information to data subjects

During the investigation, the DPA found that information on the identity of the data controller was missing on the 1177 website operated by the Stockholm region.

Medhelp claimed that it was the responsibility of the Stockholm region to provide information to patients calling the 1177 hotline. Further, Medhelp claimed that since they represent the Region and provide health care under their 1177 brand, they are not allowed to tell the caller that they called Medhelp pursuant to the contract with the Region.

The DPA was unsatisfied with this state of affairs. On the basis of [Article 12 GDPR](/index.php?title=Article_12_GDPR "Article 12 GDPR") the DPA argued that the primary responsibility for providing information to patients lies with the data controller, Medhelp. The DPA noted that when a patient calls 1177, Medhelp collects information necessary to provide documentation for the patient's record. The DPA further clarified that [Article 13 GDPR](/index.php?title=Article_13_GDPR "Article 13 GDPR") and Patient Data Act 8(6) contain extensive requirements about what data must be provided to patients. The DPA concluded that important information such as purpose and legal basis of transfer to third countries was missing.

On the basis of the above, the DPA concluded that Medhelp breached the data protection principle (lawfulness, fairness and transparency) under [Article 5(1)(a) GDPR](/index.php?title=Article_5_GDPR#1a "Article 5 GDPR") as well as [Article 13 GDPR](/index.php?title=Article_13_GDPR "Article 13 GDPR") and issued a fine of SEK 500 000.

### Backup obligations

Calls answered directly by Medhelp were recorded on a Medhelp server. The server was running a specific RAID configuration, but without backup. Swedish healthcare law has backup requirements for a healthcare provider in the National Board of Health and Welfare's rules and general guidelines on keeping medical records and processing personal data in healthcare ([Socialstyrelsens föreskrifter och allmänna råd om journalföring och behandling av personuppgifter i hälso- och sjukvården, HSLF-FS 2016:40](https://www.socialstyrelsen.se/regler-och-riktlinjer/foreskrifter-och-allmanna-rad/konsoliderade-foreskrifter/201640-om-journalforing-och-behandling-av-personuppgifter-i-halso--och-sjukvarden/)).

[HSLF-FS 2016:40 Chapter 3, 12 §](https://www.socialstyrelsen.se/regler-och-riktlinjer/foreskrifter-och-allmanna-rad/konsoliderade-foreskrifter/201640-om-journalforing-och-behandling-av-personuppgifter-i-halso--och-sjukvarden/) requires that patient data be recorded with a predetermined regularity and that backups be kept separate from the original data. Further, [HSLF-FS 2016:40 Chapter 3, 13 §](https://www.socialstyrelsen.se/regler-och-riktlinjer/foreskrifter-och-allmanna-rad/konsoliderade-foreskrifter/201640-om-journalforing-och-behandling-av-personuppgifter-i-halso--och-sjukvarden/) requires that the caregiver decides how long the backups should be kept and how often the backups should be tested.

The DPA clarified that while RAID is a robust storage method that helps ensure data integrity and continuity in operations, it is still not a backup that protects against malicious code. The DPA concluded that Medhelp did not meet the statutory requirement to perform continuous backups. The DPA considered that this led to a risk of loss of documented patient data, which would pose a high risk to patients. The failure to back up data was a breach of [Article 32(1) GDPR](/index.php?title=Article_32_GDPR#1 "Article 32 GDPR") and [Article 5(1)(f) GDPR](/index.php?title=Article_5_GDPR#1f "Article 5 GDPR"), for which the DPA imposed a fine of SEK 500 000.

### Fines

Violation

Fine in SEK

Subcontractor in Thailand

3 000 000

Unproctected NAS connected to the Internet

8 000 000

Lack of information to data subjects

500 000

No backup

500 000

**Total**

**12 000 000**

### Comment

The Thai subcontractor, Medicall, recorded calls with legitimate interest as a legal basis. The DPA found that legitimate interest is not an applicable legal basis in this context. According to the DPA, sector-specific laws, namely the [Patient Data Act](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/patientdatalag-2008355_sfs-2008-355) and the [Healthcare Act](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/halso--och-sjukvardslag-1982763_sfs-1982-763), require that the appropriate legal grounds are public interest under [Article 6(1)(e) GDPR](/index.php?title=Article_6_GDPR#1e "Article 6 GDPR") or legal obligation [Article 6(1)(c) GDPR](/index.php?title=Article_6_GDPR#1c "Article 6 GDPR").

The contractor and subcontractor had framed their relationship as that of a controller and a processor. The DPA clarified that sector specific legislation requires the subcontractor to act as an independent data controller and to act as an independent healthcare provider with independent legal responsibility for patient safety. The DPA also advised that if Medicall was a Swedish caregiver, the correct arrangement would have been for Medhelp and Medicall to enter into a voluntary collaboration, controller to controller (caregiver to caregiver, in the terminology of healthcare legislation) under [Chapter 6 of the Patient Data Act](https://www.riksdagen.se/sv/dokument-lagar/dokument/svensk-forfattningssamling/patientdatalag-2008355_sfs-2008-355#K6).

At the same time, Swedish healthcare legislation requires that anyone providing healthcare services must be bound by healthcare rules in the interest of patient safety. However, due to the limited territorial scope of Swedish healthcare laws, this is not possible: a company in Thailand cannot assume the role of a healthcare provider. The subcontractor cannot be punished for violations of the health care law. And is therefore not recognized as a legal healthcare provider under Swedish healthcare law.

## Further Resources

_Share blogs or news articles here!_

1.  Report by Computer Sweden who broke the news, on 18th of February 2019 (Swedish): [https://computersweden.idg.se/2.2683/1.714787/inspelade-samtal-1177-vardguiden-oskyddade-internet](https://computersweden.idg.se/2.2683/1.714787/inspelade-samtal-1177-vardguiden-oskyddade-internet)
2.  Report by Radio Sweden on 19th of February 2019 (English): [https://sverigesradio.se/artikel/7158721](https://sverigesradio.se/artikel/7158721)

## English Machine Translation of the Decision

The decision below is a machine translation of the Swedish original. Please refer to the Swedish original for more details.

Retrieved from "[https://gdprhub.eu/index.php?title=IMY\_(Sweden)\_-\_DI-2019-3375&oldid=17656](https://gdprhub.eu/index.php?title=IMY_\(Sweden\)_-_DI-2019-3375&oldid=17656)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [IMY (Sweden)](/index.php?title=Category:IMY_\(Sweden\) "Category:IMY (Sweden)")
*   [Sweden](/index.php?title=Category:Sweden "Category:Sweden")
*   [Article 5(1)(f) GDPR](/index.php?title=Category:Article_5\(1\)\(f\)_GDPR "Category:Article 5(1)(f) GDPR")
*   [Article 5(1)(a) GDPR](/index.php?title=Category:Article_5\(1\)\(a\)_GDPR "Category:Article 5(1)(a) GDPR")
*   [Article 5(1) GDPR](/index.php?title=Category:Article_5\(1\)_GDPR "Category:Article 5(1) GDPR")
*   [Article 6(3) GDPR](/index.php?title=Category:Article_6\(3\)_GDPR "Category:Article 6(3) GDPR")
*   [Article 9(1) GDPR](/index.php?title=Category:Article_9\(1\)_GDPR "Category:Article 9(1) GDPR")
*   [Article 9(3) GDPR](/index.php?title=Category:Article_9\(3\)_GDPR "Category:Article 9(3) GDPR")
*   [Article 12 GDPR](/index.php?title=Category:Article_12_GDPR "Category:Article 12 GDPR")
*   [Article 13 GDPR](/index.php?title=Category:Article_13_GDPR "Category:Article 13 GDPR")
*   [Article 32(1) GDPR](/index.php?title=Category:Article_32\(1\)_GDPR "Category:Article 32(1) GDPR")
*   [2021](/index.php?title=Category:2021 "Category:2021")
*   [Swedish](/index.php?title=Category:Swedish "Category:Swedish")

This page was last edited on 29 July 2021, at 08:36.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)