# CNIL (France) - SAN-2024-013

## Case Information

**Authority:** CNIL (France)

**Jurisdiction:** France

**Relevant Law:** Article 5(1)(a) GDPRArticle 66 Loi n° 78-17 du 6 janvier 1978 relative à l'informatique, aux fichiers et aux libertés (Law no. 78-17 of January 6, 1978 on data processing, data files and individual liberties)

**Type:** Investigation

**Outcome:** Violation Found

**Decided:** 05.09.2024

**Fine:** 800,000 EUR

**Parties:** Cegedim

**National Case Number/Name:** SAN-2024-013

**European Case Law Identifier:** n/a

**Appeal:** n/a

**Original Language(s):** French

**Original Source:** LEGIFRANCE (France) (in FR)

**Initial Contributor:** wp

The DPA fined a software provider for the health sector €800,000 for a violation of [Article 5 GDPR](/index.php?title=Article_5_GDPR "Article 5 GDPR") and national data protection law. The provider unlawfully processed patients’ data, collected by doctors and incorrectly assumed the data were anonymized even though data subjects could still be identified.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

Cegedim is a company providing IT products and services for healthcare professionals, inter alia, a software enabling doctors to manage patients’ data (basic identification data, as well as health history, diagnoses, prescribed medicines or procedures; and the data coming from third-parties, including HRI system, i.e. the national health identifier system).

The users of the software were offered an option to enrol for research (health-sector studies and statistics) performed by Cegedim and their business partners. In exchange for access to patients’ data, the software users received a discount on the license and access to statistics created by Cegedim.

To enable the transfer of data from the users’ software, Cegedim encrypted patient data and assigned each patient an unique identifier. The identifier informed about the category of doctor visited which made a cross-doctor data examination possible every time the patient visited a same kind of doctor, regardless its location. The patients’ data collected by Cegedim was stored for three months and then transferred to Cegedim business partners.

According to Cegedim, since the patients’ data was anonymised, the GDPR was no longer applicable to the processing at hand.

The French DPA (CNIL) initiated ex officio investigation to examine the practices of Cegedim.

### Holding

The DPA rejected Cegedim interpretation suggesting they processed anonymised data. Under Recital 26 GDPR, quoted by Cegedim, the pseudonymised data was still personal data covered by the GDPR. It was clear for the DPA that Cegedim processed personal data which were only pseudonymised. That was because the identifiers assigned to patients’ data allowed Cegedim to identify each patient. Also, as proved during the investigation, it was possible to re-identify a patient using reasonable means and data processed by Cegedim, even without access to additional information. Hence, Cegedim failed to assess the risk of re-identification.

Regarding the nature of Cegedim business activities, the DPA found it was a health database (data warehouse as understood by French doctrine). Furthermore, for the DPA Cegedim was a controller. Cegedim determined the means and purposes of the data processing, including in reference to business relations with healthcare professionals.

The aforementioned facts of the case led the DPA to confirm that Cegedim violated Article 66 of the French Data Procection Act (). Cegedim was obliged to get prior authorization from the DPA to run a health database (data warehouse). Also, Cegedim's duty was to obtain the patients’ consent for data processing including its transmission and processing within the database. Nevertheless, Cegedim failed to fulfil both duties.

Moreover, Cegedim violated [Article 5(1)(a) GDPR](/index.php?title=Article_5_GDPR#1a "Article 5 GDPR") collecting patients’ data from HRI system. Cegedim software automatically integrated data form the HRI system with patients’ data, giving Cegedim direct access to data process in HRI system. As a result, Cegedim was also in breach of Article L. 162-4-3 and R. 162-1-10 of the French Social Security Code and article R. 1111-8-6 of the French Public Health Code, prohibiting private entities from direct access to HRI system.

Consequently, Cegedim was fined €800,000.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the French original. Please refer to the French original for more details.

```
Decision of the Restricted Formation No. SAN-2024-013 of September 5, 2024, concerning the company CEGEDIM SANTÉ

The National Commission for Informatics and Liberties, assembled in its restricted formation composed of Mr. Philippe-Pierre CABOURDIN, President, Mr. Vincent LESCLOUS, Vice-President, Ms. Isabelle LATOURNARIE-WILLEMS, Ms. Laurence FRANCESCHINI, and Mr. Alain DRU, members;

Having regard to Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016, on the protection of personal data and the free movement of such data;

Having regard to Law No. 78-17 of January 6, 1978, relating to Information Technology, Files and Liberties, especially its articles 20 and subsequent;

Having regard to Decree No. 2019-536 of May 29, 2019, issued for the application of Law No. 78-17 of January 6, 1978, relating to Information Technology, Files, and Liberties;

Having regard to Resolution No. 2013-175 of July 4, 2013, adopting the internal regulations of the National Commission for Informatics and Liberties;

Having regard to Decision No. 2020-085C of May 12, 2020, by the President of the National Commission for Informatics and Liberties to appoint the Secretary General to carry out or to have carried out a verification mission of the processing carried out by CEGEDIM LOGICIEL MEDICAUX FRANCE, its subsidiaries, or on its behalf, at any location that might be concerned by their implementation;

Having regard to the Decision of the President of the National Commission for Informatics and Liberties designating a rapporteur before the restricted formation, dated March 2, 2023;

Having regard to the report by Mr. François PELLEGRINI, Commissioner-Rapporteur, notified to the company CEGEDIM SANTÉ on October 12, 2023;

Having regard to the written observations submitted by the company on November 17, 2023, January 8, and May 21, 2024;

Having regard to the rapporteur's responses to these observations, notified to the company on December 8, 2023, and March 15, 2024;

Having regard to the expiration of Mr. François PELLEGRINI's commissioner mandate on February 1, 2024;

Having regard to the Decision of the President of the National Commission for Informatics and Liberties designating a new rapporteur, Mr. Claude CASTELLUCCIA, before the restricted formation, dated January 31, 2024;

Having regard to the closure of the investigation, notified to the company on May 28, 2024;

Having regard to the oral observations made during the restricted formation session;

Having regard to the other documents in the case file;

Present during the restricted formation session on June 13, 2024:
- Mr. Claude CASTELLUCCIA, Commissioner, presenting his report;

On behalf of the company CEGEDIM SANTÉ:
- \[...\]

The company CEGEDIM SANTÉ having the last word;

The restricted formation adopted the following decision:

I. Facts and Procedure
1. The company CEGEDIM LOGICIELS MEDICAUX FRANCE, headquartered at 137 rue d’Aguesseau in Boulogne-Billancourt (92100), is a simplified joint-stock company with a sole shareholder. In 2020 and 2021, it achieved revenues of \[…\] and \[…\] and net results of \[…\] and \[…\].

2. The sole shareholder of the company CEGEDIM LOGICIELS MEDICAUX FRANCE is the company CEGEDIM SANTÉ (hereinafter referred to as "the company"), a simplified joint-stock company headquartered at 137 rue d’Aguesseau, 92100 Boulogne-Billancourt.

3. As sole shareholder, the company CEGEDIM SANTÉ decided on the early dissolution without liquidation of the company CEGEDIM LOGICIELS MEDICAUX FRANCE as of November 22, 2021. CEGEDIM SANTÉ took over all activities of CEGEDIM LOGICIELS MEDICAUX FRANCE, as well as the processing of personal data it carried out.

4. The company CEGEDIM SANTÉ is part of the CEGEDIM group, specializing in managing digital flows within the healthcare ecosystem between professionals and designing software for healthcare professionals. In 2022, the revenue of the CEGEDIM group amounted to \[…\] and its net result to \[…\].

5. The activity of the company CEGEDIM SANTÉ consists in publishing and selling management software to city doctors practicing in offices and health centers. Approximately 25,000 medical offices and 500 health centers use the software offered by the company. Notably, it publishes the CROSSWAY software, which allows doctors to manage their schedules, patient records, and prescriptions.

6. The company offers a panel of city doctors using this software, eligible based on geographic, age, and specialty criteria, to join an observatory to collect data from patient records. If they join the observatory, the data contained in the doctors' software are extracted in the CROSSWAY flow to be used later for studies and statistics in health carried out by the clients of CEGEDIM SANTÉ, including companies \[…\] and \[…\]. For example, CEGEDIM SANTÉ's clients conduct studies on patient management according to their pathologies, demographic, regional disparities, and doctors' management profiles, as well as measuring healthcare consumption. In 2021, about \[…\] doctors had joined this observatory.

7. In return, the panel doctors benefit from a discount on the CROSSWAY software license and the company gives them access to the statistical studies produced by the \[…\] , as well as to personalized dashboards.

8. By Decision No. 2020-085C of May 12, 2020, the President of the National Commission for Informatics and Liberties (hereinafter referred to as "the Commission" or "CNIL") appointed the Secretary General to carry out or to have carried out a verification mission of the processing carried out by the company CEGEDIM LOGICIEL MEDICAUX FRANCE, its subsidiaries, or on its behalf, at any location that might be concerned by their implementation.

9. On March 30, 2021, a CNIL delegation conducted an inspection at the company's premises to verify compliance with the provisions of Law No. 78-17 of January 6, 1978, as amended, relating to Information Technology, Files, and Liberties (hereinafter referred to as "the Informatics and Liberties Act or the Law of January 6, 1978, as amended") and Regulation (EU) 2016/679 of the European Parliament and of the Council of April 27, 2016, on the protection of personal data and the free movement of such data (hereinafter referred to as "the Regulation or GDPR").

10. On April 12, 2021, and February 16, 2023, the company provided additional information requested by the delegation during the on-site inspection.

11. To process this information, the President of the Commission appointed Mr. François PELLEGRINI as rapporteur on March 2, 2023, under Article 39 of Decree No. 2019-536 of May 29, 2019, issued for the application of the Informatics and Liberties Act.

12. On October 12, 2023, at the end of his investigation, the rapporteur notified the company of a report detailing the violations of Article 5, paragraph 1, a) of the GDPR and Article 66 of the Informatics and Liberties Act that he considered established in this case. This report proposed that the restricted formation impose an administrative fine on the company and an injunction with a penalty to comply with the identified violations. It also proposed that this decision be made public.

13. On November 17, 2023, the company submitted observations in response to the sanction report.

14. The rapporteur responded to the company's observations on December 8, 2023.

15. On January 8, 2024, the company submitted its second set of observations in response.

16. With Mr. François PELLEGRINI's mandate as commissioner ending on February 1, 2024, the President of CNIL appointed Mr. Claude CASTELLUCCIA as rapporteur on January 31, 2024, pursuant to Article 40 I, paragraph 5 of Decree No. 2019-536 of May 29, 2019.

17. On March 15, 2024, the rapporteur responded to the company's second set of observations.

18. On May 21, 2024, the company provided its third set of observations.

19. By letter dated May 27, 2024, the rapporteur, in accordance with Article 40 III of Decree No. 2019-536 mentioned above, informed the company and the President of the restricted formation that the investigation was closed.

20. By letter dated May 27, 2024, the company was informed that the case was scheduled for the restricted formation meeting on June 13, 2024.

21. On June 12, 2024, the company, through its counsel, requested the postponement of the closure of the investigation until the restricted formation meeting scheduled for the next day, to submit an additional document, namely a copy of a letter addressed by CEGEDIM LOGICIELS MEDICAUX to CNIL on April 25, 2013. The President of the restricted formation granted this request.

22. The rapporteur and the company made oral observations during the restricted formation meeting.

II. Grounds for the Decision

A. On the grievance alleging the infringement of the rights of defense and the right to a fair trial

23. The company contends that its rights of defense were infringed as the President of the restricted formation, by letter dated December 21, 2023, denied the extension of the deadline for submitting its second set of observations, thus violating its right to a fair trial according to the company. It specifies that to respond to the new arguments advanced by the rapporteur regarding the risk of re-identification analysis, which the company believes requires additional analyses, it had to hire an expert who could only provide conclusions by mid-January 2024, whereas the deadline for responding expired on January 8, 2024.

24. Moreover, the company argues that essential evidence it cited in defense to demonstrate the anonymous nature of the CROSSWAY data flow was not considered by the rapporteur, raising questions about the effective consideration of its arguments and, therefore, the respect of its rights of defense and a fair trial guarantee.

25. Firstly, the restricted formation notes that the deadlines applied in the contradictory procedure are those defined by Article 40 I of Decree No. 2019-536 mentioned above. It notes that the company also received an additional five-day period to submit its initial observations in defense, according to its request made to the President of the restricted formation.

26. Secondly, the restricted formation points out that the sanction report was notified to the company on October 12, 2023. Therefore, nothing prevented it from commissioning an expert since that date because, from the sanction report, the rapporteur considered the data processed by the company to be pseudonymous rather than anonymous. Both the analysis and the rapporteur's position on this point were consistent throughout the sanction procedure and were disclosed as soon as the sanction report was issued. The company could have therefore sought an expert well before receiving the rapporteur’s response to its initial observations in defense.

27. Thirdly, the restricted formation notes that the company was able to submit the expert's relevant conclusions for its defense that it wished to produce since the rapporteur did not close the investigation after the company's second set of observations in defense. Indeed, the rapporteur decided to send a second response to the company's observations, allowing it two months and seven days to submit its third set of observations in response.

28. Finally, if the company believes that the...

\[Note: The text cuts off, suggesting the continuation of the decision which may address further points raised by the company or any final determinations by the restricted formation.\]
...rapporteur did not sufficiently take into account the arguments advanced by the company in its various writings and made several errors of judgment, the restricted formation recalls that all the writings and evidence produced by both the company and the rapporteur were indeed brought to its attention, and it thus has the necessary elements to rule on the matter at hand. The restricted formation also notes that the company was able to present its defense observations in its three sets of writings, with several rounds of adversarial exchanges having taken place within the framework of this procedure, as well as orally during the restricted formation session of June 13, 2024.

29. The restricted formation therefore considers that the grievance alleging an infringement of its rights of defense and of the right to a fair trial must be dismissed.

B. On the Processing in Question and the Responsibility of the Processing

30. At the time of the inspection conducted by the CNIL and until 2022, the company collected a certain amount of data from panel doctors who had joined its observatory. This data related to both the administrative files of patients (patient numbers, year of birth, sex, socio-professional category, region code, consultation date), medical records (allergies, patient history, family history, height, weight, pulse, blood pressure, diagnoses of the day, etc.), pharmaceutical prescriptions (medication, dosage, duration, etc.), and other prescriptions (sick leave, vaccines, results of biological exams, etc.).

31. All this data is encrypted and linked to a unique identifier for each patient, which does not rely on any personal traits of the patient. The patient data is periodically extracted from the CROSSWAY flow to create a file on the panel doctor's workstation. When generating this file, the patient numbers from the flow are re-encrypted. The file is then transmitted via an encrypted HTTPS channel to the server hosting the database, which aggregates and temporarily stores the data. Thus, even if each patient is assigned different identifiers in the CROSSWAY flow and in the files transmitted by doctors to the company CEGEDIM SANTÉ, all data concerning the same patient from the same doctor is always associated with this second identifier in the dataset communicated to the company CEGEDIM SANTÉ. Conversely, the same patient visiting another medical office will be assigned another unique identifier specific to that other office. The identifier is linked to the medical and administrative data of the same patient, thus enabling the tracking of the patient’s history for a single and the same office.

32. The lines present in the database are composed of the identifiers of the patient and the consulted doctor, as well as various codes. According to the figures provided by the company, the number of lines collected between January 1, 2021, and April 2, 2021, by the company CEGEDIM SANTÉ is more than \[...\].

33. The data is stored for three months from its reception in the CROSSWAY flow. They are then transmitted to the company's clients, including the company \[...\], which conducts studies and statistics in the health field. Although the data is only stored for three months in the flow, some have more significant historical depth. For example, data from the HRi teleservice, which will be discussed later, is automatically downloaded with a twelve-month depth when the doctor consults it.

34. The company CEGEDIM SANTÉ considers that the data it processes is anonymous and therefore no longer subject to the applicable personal data protection regime.

35. The rapporteur, however, believes that the company has built a warehouse of pseudonymized health data from the data communicated to it by panel doctors to make it available to its clients – some of which belong to the same group – which conduct studies and statistics in the health field. Thus, the rapporteur believes that the company CEGEDIM SANTÉ is required to comply with the regulations relating to the protection of personal data for processing said data and, particularly, to have an authorization to do so.

36. In defense, the company also argues that since 2022, it has implemented new data impoverishment measures at the extraction stage, resulting in less precise data since then. For example, it no longer collects information on patients whose year of birth is 1920 or earlier or if the patient is older than 95 years, it no longer collects the exact number of patient’s children (0 if no children, 1 if 1 child or more, and if the patient is under 18 years old, the number of children is systematically set to 0), and it no longer collects information on patients with an unspecified gender.

37. The restricted formation considers that it is necessary to examine the nature of the processed data and the qualification of the processing before determining the associated responsibilities.

1) On the Nature of the Data Processed in the CROSSWAY Flow

a) On the Applicable Legal Framework

38. Article 4, paragraph 1, of the GDPR defines the notion of personal data as any information relating to an identified or identifiable natural person \[...\]; an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier, such as a name, an identification number \[...\].

39. Article 4, paragraph 15, of the GDPR states that personal data related to the physical or mental health of a natural person, including the provision of health care services, which reveals information about their health status, constitutes health data.

40. Article 4, paragraph 5, of the GDPR defines pseudonymization as the processing of personal data in such a way that they can no longer be attributed to a specific data subject without the use of additional information, provided that such additional information is kept separately and is subject to technical and organizational measures to ensure that the personal data are not attributed to an identified or identifiable natural person.

41. The restricted formation notes that, unlike the notion of pseudonymization, the concept of anonymization is not defined by the GDPR.

42. Recital 26 of the GDPR states that personal data that has undergone pseudonymization and which could be attributed to a natural person through the use of additional information should be considered as information on an identifiable natural person. To determine whether a natural person is identifiable, all reasonable means likely to be used either by the data controller or by another person to identify the natural person directly or indirectly should be taken into consideration, such as the method of targeting. To establish whether means are likely to be used to identify a natural person, all objective factors such as the costs of and the time required for identification, while taking into account the technologies available at the time of processing and technological developments, should be taken into account. Hence, principles relating to data protection should not apply to anonymous information, namely information that does not relate to an identified or identifiable natural person, nor to personal data rendered anonymous in such a way that the data subject is not or no longer identifiable. This regulation does not, therefore, apply to the processing of such anonymous information, including for statistical or research purposes.

43. In its Breyer ruling under Directive 95/46/EC of the European Parliament and Council of October 24, 1995, on the protection of individuals regarding the processing of personal data and the free movement of such data (CJEU, 2nd Chamber, October 19, 2016, C-582/14), the Court of Justice of the European Union (hereinafter referred to as “the CJEU”) held that recital 26 of Directive 95/46 states that, to determine whether a person is identifiable, all means likely to be reasonably used either by the data controller or by another person to identify the person should be considered (para. 42) and that, as long as this recital refers to means likely to be reasonably implemented by both the data controller and another person, the wording suggests that, for data to be considered personal data \[...\], it is not required that all the information enabling the identification of the data subject be in the possession of a single person (para. 43).

44. This jurisprudence was confirmed in the OC v European Commission ruling (CJEU, 6th Chamber, March 7, 2024, C-479/22). In this case, the CJEU held that the fact that additional information is needed to identify the data subject does not exclude that the data in question may be considered personal data (para. 49), while taking into account that the possibility of combining the data in question with additional information constitutes a means likely to be reasonably implemented to identify the data subject, by considering all objective factors such as the costs and time required for identification, while taking into account the available technologies at the time of processing and their developments (para. 50).

45. Furthermore, the CJEU specifies in this ruling that it is inherent to the indirect identification of a person that additional information must be combined with the data in question for the purposes of identifying the data subject (para. 55) and that the applicant was not required to prove that they had actually been identified by one of these persons, as such a condition is not provided for in Article 3, point 1, of Regulation 2018/1725, which is limited to requiring that a person be identifiable (para. 61).

46. Lastly, in its ruling IAB Europe v Gegevensbeschermingsautoriteit (CJEU, 4th Chamber, March 7, 2024, C-604/22), the Court held that Article 4, point 1, of the GDPR must be interpreted in the sense that a chain composed of a combination of letters and characters, such as the TC String \[Transparency and Consent String\], containing preferences of an Internet or application user regarding the consent of this user to the processing of personal data concerning them by website or application providers as well as by brokers and advertising platforms, constitutes personal data within the meaning of this provision, insofar as it can, by reasonable means, be associated with an identifier, such as the IP address of the said user’s device, allowing the identification of the data subject. It adds that the fact that, without external contributions, a sectoral organization holding this chain cannot access the data processed by its members under the rules it established nor combine the chain with other elements does not prevent the same chain from being personal data under this provision (para. 51).

47. Lastly, for context, the restricted formation notes that in its Opinion 05/2014 on anonymization techniques of April 10, 2014, the Article 29 Working Party on the Protection of Individuals with regard to the Processing of Personal Data (hereinafter referred to as “WP29”), now the European Data Protection Board (hereinafter referred to as “EDPB”), indicates that a process can primarily be qualified as anonymization if it withstands three types of risks:
  - Individualization, which corresponds to the possibility of isolating some or all records identifying an individual within the dataset;
  - Correlation, which consists of the capacity to link two records concerning the same person in the dataset or between different datasets;
  - Inference, which corresponds to the possibility of deducing the value of an attribute from the values of a set of attributes in the dataset.

Based on an analysis of the nature of the data and the legal framework concerning anonymization and pseudonymization, the restricted formation will now further determine the responsibilities associated with the data processing in question.
the same individual within a dataset or across different datasets; - Inference, which involves the ability to deduce the value of an attribute from other attributes within the dataset with a high degree of probability.

48. If data does not resist the above three types of risk, it cannot necessarily be considered pseudonymized. However, data may be deemed anonymous if the data controller can demonstrate that re-identification is not possible through reasonable means, which implies that the risks of re-identification are negligible.

49. The rapporteur asserts, in light of various jurisprudence and doctrine sources, that it is evident the applicable legal framework allows for an assessment of whether processed data is anonymous or pseudonymous. Consistently, tracking individuals over time using a unique identifier can isolate an individual within a dataset, thereby increasing the risk of de-pseudonymization.

50. On the contrary, the company argues that the legal, jurisprudential, and doctrinal framework concerning data anonymization causes legal uncertainty for operators. It highlights the lack of clarity in the framework and the absence of benchmarks, methodologies, or technical prescriptions to demonstrate the anonymity of a dataset. It claims that publications, particularly from the CNIL, the Article 29 Working Party, and the EDPB, fail to ensure compliance with the principle of legal foreseeability stemming from the constitutional requirement of legal security in French law. These publications provide no sufficiently clear technical prescriptions to either ensure operators can reasonably trust their anonymization processes or ensure that proof of anonymization is acceptable to the CNIL. The company presents several arguments to support its stance.

51. Firstly, the company references a decision by a Milan court judge (Milan court, order of December 4, 2023) in a dispute involving the Italian data protection authority, which has a similar activity to CEGEDIM SANTÉ under its observatory. According to the company, the judge concluded that, given the elements at the time, the Italian authority had not demonstrated that the data were not anonymous and that an independent expertise was needed to verify the anonymity of the data, the potential for re-identification, and the concrete risk of such re-identification considering the time and costs involved.

52. Secondly, the company argues that it is justified in relying on a probabilistic acceptance of the notion of personal data. It believes that the analysis of the identification risk should not necessarily strive to reduce this risk to zero, but rather to an acceptable level considering the data's sensitivity, the context, and the processing purposes. It cites a joint document by the Spanish data protection authority and the EDPB published in June 2021, as well as an article co-authored by the rapporteur, Mr. CASTELLUCCIA, in 2020.

53. Thirdly, it contends that the fact that a dataset can be linked to an identifier does not rule out that the data can be considered anonymous, similar to the data in the OpenDamir database of the SNIIRAM. The company posits that if OpenDamir data, which are more detailed in many respects than those processed by CEGEDIM SANTÉ, can be considered anonymous, so should its own data.

54. Ultimately, the company claims that even in the event of identifying a patient code associated with known information about the sought individual in the CROSSWAY flow, this does not necessarily lead to re-identification. It asserts that there is only a certain probability that the information found in the database belongs to the sought individual. Numerous uncertainties can hinder re-identification, such as the possibility that an individual shares known characteristics with others or whether the individual is present in the database. The company supports its point with an extract from a publication by the Directorate of Research, Studies, Evaluation and Statistics (DREES).

55. As a preliminary note, the restricted committee recalls that while the CNIL can publish guidelines, recommendations, or benchmarks to assist in aligning personal data processing with applicable regulations (pursuant to Article 8, paragraph 2(b) of the French Data Protection Act), legal norms are established by French and European legislators and interpreted by competent judicial authorities. Therefore, even if the CNIL has not published specific benchmarks or guidelines on pseudonymization and anonymization, the restricted committee notes that the EDPB has published guidelines that remain relevant. It stresses that both the rapporteur and the company's submissions indicate that these concepts are extensively addressed in jurisprudence and doctrine. Consequently, the absence of CNIL benchmarks, guidelines, or recommendations does not suffice to deem the applicable legal framework unclear.

56. Regarding the Milan court decision, the restricted committee observes that the judge chose to suspend only the enforcement of auxiliary sanctions imposed by the Italian data protection authority related to publication on the company's website and transmission to relevant orders and federations, pending an independent expertise to ascertain whether the data processed by the Italian subsidiary of CEGEDIM SANTÉ are pseudonymized or anonymized.

57. The restricted committee notes that the judge did not suspend the fine and injunction and did not declare the processed data to be anonymous. It further highlights that the Italian data protection authority, in its decision, considered the processed data to be personal data, particularly because a unique identifier is assigned to each patient.

58. Concerning the OpenDamir database mentioned by the company, the restricted committee notes that the two datasets are not comparable. In OpenDamir, each row corresponds to a health insurance reimbursement and not to a patient. A file is issued each month, making it impossible to track an individual patient's medical pathway over time via OpenDamir. Conversely, in the dataset in question, CEGEDIM SANTÉ can identify that multiple files transmitted successively by the same doctor concern the same patient.

59. Moreover, regarding the DREES study cited by the company, the restricted committee notes that it specifies that an accumulation of similarities with a known person could, over subsequent annual releases of the dataset, lead to a probability of identification close to certainty. This corresponds to how CEGEDIM SANTÉ’s processing is structured, as it can trace the exact care pathway of a patient from the same doctor over time and possesses a large volume of data. The same DREES study clearly states that replacing an individual's initial identifier with another arbitrary identifier constitutes pseudonymization, not anonymization. Therefore, the restricted committee considers the use of this DREES study by the company to be irrelevant in this case.

60. Finally, the restricted committee notes that there is no dispute, either in jurisprudence or doctrine, that assigning a unique code or identifier to individuals for tracking purposes enables their individualization within a dataset. Additionally, it is well established that to assess the risk of de-pseudonymization, the potential to combine the primary dataset with other data, which may be held by third parties, must be considered. Such other data may include, for instance, geolocation data.

b) On the Nature of Processed Data

61. Concerning patient data, the rapporteur notes that the dossier documents reveal that each patient is assigned a unique identifier for the same doctor within the CROSSWAY flow. This identifier, which does not rely on any personal trait, is linked to the medical and administrative data of the same patient, enabling tracking of the patient’s historical data for the same doctor. Consequently, the rapporteur considers that, with the patient identifier provided, CEGEDIM SANTÉ can identify that multiple files transmitted successively by the same doctor pertain to the same patient within its observatory.

62. The rapporteur concludes that:
   - Firstly, the process of replacing directly identifying data with indirectly identifying data, i.e., a unique identifier for the same doctor’s patient, perfectly aligns with the definition of pseudonymization, facilitating longitudinal patient tracking.
   - Secondly, because an individual can thus be isolated in the dataset and data concerning that individual can accumulate over time, the patient data is sufficiently detailed to allow de-pseudonymization through reasonable means.

63. During adversarial exchanges with the company, the rapporteur produced evidence to support his analysis, demonstrating the ability to accurately trace the care pathway of a 12-year-old child with a long-term disease (ALD) using only a few lines of data provided by the company during the control process.

64. Regarding doctors’ data, the rapporteur notes that the company generates a panel number from a doctor’s client number, and this panel number appears in the files generated by panel doctors and transmitted to CEGEDIM SANTÉ. Moreover, the company holds a correspondence table between the panel number and the doctor’s identity. This possession of such a table makes the data even more precise. Hence, the rapporteur considers the company can identify that the same doctor repeatedly provides files and that these are pseudonymized data.

65. In its defense, the company claims the data is anonymous. It argues that the rapporteur's demonstration is theoretical and entirely focused on the possibilities of individualization from the CROSSWAY flow data, without evaluating real and residual re-identification risks under practical means reasonably used by the company, including specific contextual elements.

66. The company contends that identifying a person, allowing data to be considered personal data, cannot be affirmed by hypothesis but must be validated by an in concreto analysis of the reasonable means of identification. According to the Breyer and OC v European Commission decisions, these reasonable means must be legal and practically mobilizable, considering objective factors like identification costs and time, and the technologies available at the time of processing. Furthermore, beyond analyzing precise contextual elements and quantifying the likelihood of their occurrence against objective factors (time, cost, workforce, available technologies), the motivations of individuals who could perform identification must also be considered.
the company argues that the hypothetical identification approach without such practical assessment does not align with the requirements laid out in legal precedents and is insufficient to prove the risk of re-identification. 

67. To support its claims, the company provides an external evaluation conducted by the firm \[…\], commissioned by \[…\], concerning the data in the \[…\] database fed by the CROSSWAY stream. This evaluation concludes that the data is anonymous.

68. Lastly, regarding the correspondence table held by the company, it argues that the table listing the codes and identities of the physicians participating in the observatory cannot reasonably be used to assist in re-identifying patients. The company asserts that this table is managed by a dedicated team separate from the one operating the CROSSWAY stream, on an isolated workstation, with complete separation of information and perfect role and responsibility segregation between the two teams.

69. Firstly, the restricted committee notes that the pseudonymous or anonymous nature of the data is of considerable importance for the concerned individuals. If data is not deemed personal data, data protection regulations do not apply, thus permitting unrestricted usage. Specifically, an anonymous database is exempted from the security obligations stipulated by Article 32 of the GDPR and can be freely disclosed or published. The entity operating such a database has no obligation to inform.

70. In this case, regarding patient data, the restricted committee notes that CEGEDIM SANTÉ, from the time of the CNIL's inspection until 2022, collected a significant amount of data from panel physicians, covering patients' administrative records, medical records, pharmaceutical prescriptions, and other prescriptions. The restricted committee notes that since 2022, the company has stopped collecting information related to socio-professional category, family situation, and number of children, removed the regional code, and reduced the granularity of height and weight measurements.

71. The restricted committee notes that even though each patient is assigned different identifiers in the CROSSWAY stream and the files transmitted by physicians to CEGEDIM SANTÉ, all data related to the same patient from the same physician remains associated with the latter identifier within the dataset communicated to CEGEDIM SANTÉ. Consequently, using the patient identifier provided, CEGEDIM SANTÉ can link several files transmitted successively by the same physician for the same patient, which the company does not contest, thus tracking the patient's care with this physician.

72. As a result, the restricted committee notes that it is possible to isolate an individual within the dataset since the unique identifier allows for tracking patients over time. Consequently, the processing does not withstand the risk of individualization as described in the Opinion 05/2014 on anonymization techniques of April 10, 2014.

73. Regarding physicians' data, the restricted committee notes that CEGEDIM SANTÉ can identify from the panel's physicians, thanks to the physician identifier, which physician is repeatedly communicating files.

74. Secondly, the restricted committee observes that the data collected is particularly extensive and the data's depth significant: on one hand, because the company processes numerous data points; on the other hand, because although the company retains data for only three months in its database, it retrieves twelve-month-depth data via the HRi teleservice, containing health reimbursement history information by health insurance. This extensive dataset allows the company to trace patient care pathways over the past twelve months, substantially increasing the risk of de-pseudonymization.

75. Given the failure to meet the three criteria established in the Opinion 05/2014 on anonymization techniques, the restricted committee concludes that the risk of re-identification must be evaluated concretely to establish the data's anonymous or pseudonymous nature.

76. In support of this approach, the restricted committee notes that the rapporteur, in his writings, managed to trace a 12-year-old child's care pathway suffering from a long-term ailment from a reduced dataset transmitted by the company. The rapporteur achieved this quickly and with minimal resources, using only Excel software and the provided nomenclature to link alphanumeric codes to patient information and medical acts. The rapporteur did not resort to third-party data sources, such as data brokers or geolocation data.

77. The restricted committee further notes that correlating third-party data with the information held by CEGEDIM SANTÉ (notably patient data and consultation information) would considerably increase the possibilities of de-pseudonymization. Despite the company's assertion of not holding geographic data, the restricted committee recalls that a regional code was collected until 2022, and the company maintains a correspondence table between panel numbers and physicians’ identities.

78. The company also contests using third-party data to evaluate the anonymity of a dataset. The restricted committee reminds that the CJUE has ruled that for data to be categorized as personal, it is not necessary for the data to independently identify the individual. Furthermore, the necessity of additional external information does not exclude data from being considered personal (OC v European Commission, §§ 47 and 55, and IAB Europe v Gegevensbeschermingsautoriteit, § 51).

79. The restricted committee highlights that if the rapporteur isolated an individual and tracked part of their care pathway in detail from only a dataset extract, without additional information, then it is possible to de-pseudonymize individuals using reasonable means. The restricted committee notes the richness of data held by the company, having received over \[…\] lines between January 1, 2021, and April 2, 2021 (each line representing an event, such as a consultation), \[…\] patient codes from January to March 2021, and \[…\] prescriber codes in April 2021.

80. Despite the rapporteur not personally de-pseudonymizing the child's care pathway, the restricted committee reminds that identification is not necessary for data to be categorized as personal. The CJUE ruled in OC v European Commission that proving effective identification is unnecessary, as Article 3, point 1, of Regulation 2018/1725 only requires identifiability (§ 61). The restricted committee considers a similar reasoning applies to the GDPR, as the definition in Article 4, paragraph 1, is identical.

81. Thirdly, when the three criteria set by the G29 opinion are unfulfilled, the company must analyze and demonstrate negligible re-identification risks. The company did not perform such an analysis for the CNIL's control period, only conducting it in October 2023, applying it to post-2022 data processing. Furthermore, to assess re-identification risks, the company only combined a limited number of data points from its vast dataset, rendering the assessment unreliable (in this case, combining the patient's birth year, gender, and parenthood status, ignoring other data like approximate weight and height, consultation history, prescriptions, duration, medical history, physiological constants, and diagnosed pathologies).

82. The restricted committee notes that the conclusions of the evaluation conducted by \[…\] during the adversarial process do not undermine this assessment. The evaluation focused on post-implementation processing, which included new measures such as reducing data depth, and did not assess the data's anonymity at the control's time.

83. The restricted committee also notes that \[…\]'s expertise does not integrate all factors representing data richness from long-term tracking of the same individuals.

84. Lastly, the restricted committee notes that the expertise of \[…\] concurs with the rapporteur's conclusion on the possibility of isolating an individual within the dataset held by CEGEDIM SANTÉ, confirming k-anonymity equals 1. K-anonymity is a confidentiality measurement model ensuring each identifier in a dataset corresponds to an equivalence class containing at least K records. The restricted committee notes that although expertise \[…\] did not conclude the re-identification of individuals, it acknowledged the possibility of isolating an individual in the dataset, aligning with the first risk type identified by the G29 in its Opinion 05/2014 on anonymization techniques.

85. The second phase of expertise involves risk analysis to determine the plausibility of making data held by the company accessible to others, capable of linking these data to patients' actual identities, for instance, in the event of a data breach. The restricted committee notes the high security level highlighted by the company but concludes that the analysis focused on data access risk and breach probability. The security level ensures data confidentiality.
The security level, however high it may be, does not impact the qualification of the processed data. 

86. It results from all the above that on the day of the inspection and until 2022, the directly identifying data was replaced by indirectly identifying data, namely a unique identifier for the concerned patient, allowing the processing of their data without being able to identify them directly. Nevertheless, the pseudonymity could be lifted due to the richness of the information.

87. Consequently, the restricted committee considers that the data processed by CEGEDIM SANTÉ until 2022 is pseudonymous and not anonymous.

88. The restricted committee takes note of the additional measures implemented by the company since 2022, notably that it no longer collects certain data and, for others, it no longer collects the same level of granularity. The company believes that as modified, its processing is anonymous. However, the restricted committee believes that the analysis of the new state of the processing was not the initial object of the procedure and is not in a position to pronounce on this point within the framework of this decision. It invites the company, if it wishes, to request advice from the CNIL to determine the anonymous nature or not of the database in its new state.

2) On the qualification of the processing as a health data warehouse
89. The company argues that the processing it implements is not a health data warehouse but a network of doctors who agree to transmit anonymous data from their medical records to CEGEDIM SANTÉ partners, namely \[…\] and \[…\]. It particularly believes that the transitory nature of the flow, in which data is only kept for three months, demonstrates that it is not a permanent database like a warehouse.

90. The restricted committee recalls that the notion of a health data warehouse is not in the Law on Information Technology and Liberties but constitutes a doctrinal construction of the CNIL for the application of articles 65 et seq. of this law. It is evaluated using a combination of criteria, taking into account, but not limited to, the duration of data retention. Among the determining elements of a health data warehouse qualification are the reuse of data in subsequent processing, the continuous feeding of the database, and the purposes of the processing.

91. In this case, the restricted committee notes from the records that CEGEDIM SANTÉ:
- Massively collects health data from patients and doctors (more than \[…\] lines received in the database between January 1, 2021, and April 2, 2021 - a line corresponding to an event, for example, a consultation; \[…\] patient codes held from January to March 2021; \[…\] prescriber codes held in April 2021);
- Continuously feeds its database to achieve a significant volume of data (daily data upload from doctors' workstations);
- Makes the data available to its clients who conduct health studies and statistics. Among these clients is \[…\] company.

92. The restricted committee notes substantial changes to the processing effective June 1, 2024. Specifically, data upload from doctors' workstations to \[…\] company is no longer operated through CEGEDIM SANTÉ. Since the end of July 2024, CEGEDIM SANTÉ no longer manages the CROSSWAY stream data from doctors’ software, with doctors now directly feeding the \[…\] database held by \[…\] company.

93. Given the above, the restricted committee believes that the company maintained a health data warehouse until the CNIL control and until the effective reorganization on June 1, 2024, which stopped data transit through CEGEDIM SANTÉ.

3) On the company's status in terms of data controller responsibility
94. According to Article 4 of the GDPR, the data controller is the natural or legal person, public authority, agency, or other body which, alone or jointly with others, determines the purposes and means of processing (point 7), and a processor is a natural or legal person, public authority, agency or other body which processes personal data on behalf of the controller (point 8).

95. As guidance, in its guidelines 07/2020 on the concepts of controller and processor in the GDPR, adopted on July 7, 2021, the EDPB explains the definition of the controller as follows: Determining the purposes and means involves deciding respectively the "why" and the "how" of the processing: for a specific processing operation, the controller is the entity that has determined the reason why the processing takes place (i.e., "for what purpose" or "why") and how that aim shall be attained (i.e., which means shall be employed to achieve the aim). A natural or legal person exercising this influence on the processing of personal data thus participates in determining the purposes and means of the processing in question, in accordance with the definition in Article 4, paragraph 7, of the GDPR. The controller must decide both the purposes and the means of processing \[…\]. (§§ 35 and 36).

96. Regarding processing, the guidelines specify that Article 4, paragraph 8, of the GDPR defines a processor as a natural or legal person, public authority, agency, or other body which processes personal data on behalf of the controller and that For an entity to be considered a processor, two basic conditions must be met: a) it must be a separate entity from the controller and b) process personal data on behalf of the controller (§§ 73 and 76).

97. The rapporteur considers that CEGEDIM SANTÉ defines the purposes and means of the processing in question and constitutes a health data warehouse for its own activity needs, subsequently making the data available to its clients who reuse them for health studies and statistics.

98. In defense, the company states it acts as a processor for the doctors using the CROSSWAY software and for \[…\] and \[…\] companies for which it operates the CROSSWAY flow. It argues that the purposes and means determination claimed by the rapporteur only applies to the management and recruitment of a panel of doctors by CEGEDIM SANTÉ, and not to obtaining patient data. Thus, it claims not to pursue its own purposes for the data derived from this flow and limits its role to a technical intermediary facilitating data upload from doctors' workstations to partner companies.

99. The company supports its statements with a closure letter from a 2014 control of CEGEDIM LOGICIELS MEDICAUX FRANCE (dissolved in 2021 and whose entire activity was taken over by CEGEDIM SANTÉ), in which the CNIL ostensibly recognized the company's processor status. It asserts that this letter remains applicable as the factual and legal circumstances regarding party qualification have not changed, and that the letter represents a validly adopted act by an authorized person to represent and commit the CNIL, namely the Commission’s President. Additionally, it contends that the letter's age is irrelevant because the understanding of anonymity has not substantially changed with the GDPR or the Law on Information Technology and Liberties.

100. Firstly, the restricted committee notes that in its impact assessment, the company designated itself as the data controller for its observatory and not merely for recruiting a doctor panel. Furthermore, the records indicate that CEGEDIM SANTÉ manages data collection contracts with eligible doctors wishing to join its epidemiological observatory and defines data transmission modalities to its partners \[…\] and \[…\].

101. Regarding processing purposes, the restricted committee notes that the company determines the scope and purposes of data use from its observatory vis-à-vis its partners. Specifically, the contract with \[…\] company stipulates that the authorized data use is: conducting health-related analyses or studies directly or through an intermediary, and the addendum to the contract with \[…\] company specifies that it will use the data on medical prescriptions transmitted by CLM \[CEGEDIM SANTÉ\] solely for performing studies. The study results will only be commercialized in the form of statistics. Any other form of data commercialization is prohibited (free translation). Moreover, the company defines the participant scope for the observatory by offering CROSSWAY software use to a representative panel of outpatient doctors, eligible based on geographic, age, and specialty criteria.

102. Regarding processing means, the restricted committee notes that the contracts between the company and the panel doctors do more than merely recruit doctors; they detail processing methods, including data collection and transmission modalities. For instance, the contracts impose participation conditions on doctors, such as the categories of collected data, data communication methods, and collection frequency.

103. The restricted committee believes that the records show CEGEDIM SANTÉ determines the processing purposes and means, organizes the processing for its own needs to implement its observatory, and does not receive execution directives.

104. The restricted committee clarifies that the data transmission to third-party partners who will reuse the data for their purposes does not obstruct CEGEDIM SANTÉ's qualification as a data controller. In chain processing, each company acts as a data controller, determining the means for the processing they conduct for their purposes.

105. Secondly, the restricted committee assesses that the processing should be evaluated considering observations from the March 30, 2021, control mission and the current doctrine and state-of-the-art perspectives. The restricted committee does not feel bound by the observations from the 2012 control mission.

106. The restricted committee notes that substantial developments in personal data protection have occurred since the closure letter addressed to CEGEDIM LOGICIELS MEDICAUX FRANCE in 2014, following verification missions conducted in 2001 and March 2012. This letter predates the GDPR, the reference text for personal data protection. Doctrine developments particularly reflect in the terminology used, as the letter mentioned patient anonymity, at a time when anonymity referred to the absence of directly identifying data, not the impossibility of identifying a person from a data set.
107. The restricted committee further notes that the letter does not indicate that the CNIL considered, based on its verification missions in 2002 and then in 2014, that it was a case of anonymized data processing falling outside the scope of the Informatique et Libertés law. If this had been the case, the letter would not have listed several recommendations to ensure the security of the data processed. The letter notably invited the company to implement an automatic purge mechanism for files on doctors' workstations and to designate a data protection officer.

108. In any case, the restricted committee recalls that it is incumbent on the controller to take into account doctrinal developments and regularly reassess the technical and organizational measures of the implemented processing.

109. In conclusion, the restricted committee does not challenge the validity of the 2014 letter but, considering its age and the developments in the legal and jurisprudential framework, it does not feel bound by this old position, which is itself based on a CNIL deliberation over twenty years old and relevant findings. The restricted committee considers that this letter alone cannot demonstrate the status of the company CEGEDIM SANTÉ as a processor.

110. In view of all the above, the restricted committee considers that the company CEGEDIM SANTÉ is a data controller within the meaning of Article 4, point 7, of the GDPR. Therefore, by implementing the concerned processing, the company, if it collects and processes personal data as a controller, must comply with the regulations regarding the protection of personal data.

C. On the breach of Article 66 of the Informatique et Libertés law

111. Article 65 of the Informatique et Libertés law provides that processing containing data regarding people’s health is subject to Section 3: Processing of personal data in the health sector of Chapter III: Obligations of controllers and processors, except for various categories of processing listed in paragraphs 1 to 6 of this article.

112. Article 66 of the Informatique et Libertés law states:
I - The processing falling under this section can only be implemented in consideration of the public interest purpose they represent. Ensuring high standards of quality and safety of healthcare and medicines or medical devices constitutes a public interest purpose.
II - Frameworks and standard regulations, as described in b and c of 2° of I of Article 8, applicable to processing falling under this section are established by the Commission nationale de l'informatique et des libertés, in consultation with the health data platform mentioned in Article L. 1462-1 of the public health code and representative public and private bodies of the concerned stakeholders. Processing that complies with these frameworks can be implemented provided their controllers send a prior declaration to the Commission nationale de l'informatique et des libertés attesting to this compliance. \[…\]
III - The processing mentioned in I that does not comply with a framework mentioned in II can only be implemented after authorization by the Commission nationale de l'informatique et des libertés. The authorization request is presented in the forms provided in Article 33. \[…\]

113. Thus, under III of Article 66 of the Informatique et Libertés law, personal data processing in the health sector, including health data warehouses, can only be implemented after CNIL authorization or if they comply with a framework mentioned in II of this article, considering the public interest they represent.

114. The rapporteur considers that the company collects pseudonymized data from computerized patient records, transmitted by panel doctors via the CROSSWAY flow, to constitute this health data warehouse. In the absence of obtaining the consent of the concerned individuals for the inclusion of their data in a health data warehouse (applying Article 9(2)(a) of the GDPR), such a warehouse's creation is subject to prior formalities with the CNIL. However, the rapporteur recalls that the company CEGEDIM SANTÉ has neither obtained the explicit consent of the concerned individuals for the collection, recording, and storage of the health data included in the warehouse nor submitted any authorization request concerning the processing to the CNIL, nor sent any declaration attesting to the processing's compliance with a framework within the meaning of II of Article 66 of the Informatique et Libertés law. The rapporteur concludes that the company failed to comply with the obligations provided in Article 66 of the Informatique et Libertés law in the health sector.

115. In defense, the company argues that it does not breach Article 66 of the Informatique et Libertés law as it does not process personal data, including pseudonymized or health data. It asserts that the CROSSWAY flow only contains anonymous data and, therefore, does not constitute a health data warehouse and is not subject to the formalities provided by Article 66 of the Informatique et Libertés law to process such data.

116. Furthermore, the company asserts it cannot be reproached for failing to comply with its obligations due to the lack of clarity in the legal framework, particularly in defining the notion of anonymization. The company argues it cannot be faulted for not seeking the CNIL’s advice since the CNIL has never indicated the possibility for organizations to seek validation of the anonymization methods they use, and in any case, it has in good faith considered that the data it processes were anonymous.

117. Initially, the restricted committee notes that the CNIL has published certain resources on its website before the control, for instance, on defining health data (early 2018), the formalities to be carried out for health data processing (early 2018), or the distinction between a health data warehouse and research (late 2019). In addition to its resources, the CNIL also relays other information sources as it did with the Opinion 05/2014 on anonymization techniques of WP29. The restricted committee also recalls that the legal framework is primarily set by the French and European legislators.

118. Therefore, the restricted committee considers that the company could not have been unaware of the legal regime applicable to its health data warehouse at the time of the control, especially considering other companies conducting similar processing in the same market have requested authorizations from the CNIL, and these authorizations are public and accessible on the website www.legifrance.gouv.fr. If the company considers that these authorizations are not comparable to the database it constitutes, particularly regarding the richness of the data collected by these companies, the restricted committee recalls that any organization constituting a health data warehouse must comply with its obligations, including Article 66 of the Informatique et Libertés law, regardless of the warehouse's richness and the granularity of the collected data.

119. The restricted committee recalls that, for the reasons exposed above, the company CEGEDIM SANTÉ processed pseudonymized health data during the control to constitute a health data warehouse, and thus it was bound to comply with the GDPR and the Informatique et Libertés law.

120. Firstly, the restricted committee notes that the only exception to the obligations of Article 65 of the said law applicable in this case is the one regarding the explicit consent of the concerned individual for the processing of their personal data for one or more specific purposes, in accordance with Article 65 1°, referring to Article 9(2)(a) of the GDPR. However, in this case, since CEGEDIM SANTÉ considers it does not process personal data, it has not implemented any measures to comply with the applicable rules for processing them. Specifically, the company has not implemented any mechanism for obtaining the explicit and prior consent of the patients from panel doctors for the concerned processing.

121. Consequently, the restricted committee considers that since the company processed health data during the control and cannot rely on any of the exceptions provided in Article 65 of the Informatique et Libertés law, the processing it implements falls under Section 3 of Chapter III of said law.

122. Secondly, the restricted committee notes that, in this case, the company has not complied with the requirements of Article 66 of the Informatique et Libertés law to constitute a health data warehouse.

123. Firstly, it notes that the company has not submitted any authorization request for the concerned processing to be considered necessary for reasons of public interest in the field of public health or necessary for scientific research purposes.

124. Secondly, the restricted committee recalls that in the absence of CNIL authorization, personal data processing in the health sector can also be implemented if it complies with a framework within the meaning of II of Article 66 of the Informatique et Libertés law, provided the controller submits a prior declaration to the CNIL attesting to this compliance. The restricted committee notes that this is not the case here and that the company has not sent the CNIL any declaration attesting to this compliance.

125. Thirdly, the restricted committee takes note of the new measures implemented post-control.

126. On one hand, the company indicated that it no longer collects certain data since 2022. However, as developed above, the restricted committee considers that the elements communicated by the company during the procedure do not allow it to ensure that it now processes anonymous data. It also notes, in any case, that the measures deployed in 2022 cannot absolve the company of its past responsibilities.

127. On the other hand, the company indicated that starting at the end of July 2024, it would no longer participate in the management of the CROSSWAY flow, which now directly feeds the base \[…\] held by the company \[…\]. Thus, CROSSWAY flow data no longer transits through CEGEDIM SANTÉ.

128. In view of all the above, the restricted committee considers that the company processed health data during the control and until July 2024 and should have complied with the requirements of Article 66 of the amended Law of January 6, 1978, to constitute a health data warehouse.

129. Therefore, the restricted committee considers that the company has failed to meet its obligations by processing personal data in the health sector in violation of Article 66 of the amended Law of January 6, 1978.

130. Given the measures taken by the company during the procedure, the restricted committee considers that there is no need to impose any sanctions.
D. On the Breach of Article 5(1)(a) of the GDPR

131. Under Article 5(1)(a) of the GDPR, personal data must be:
a) processed lawfully, fairly, and transparently in relation to the data subject (lawfulness, fairness, transparency).

132. Article L. 162-4-3 of the Social Security Code provides that physicians may, during the medical care they provide and under the conditions referred to in Article L. 161-31, consult data derived from reimbursement or coverage procedures held by the organization to which each insured person belongs. In such cases, they must inform the patient beforehand. The care recipient consents to this access by allowing the physician to use, for this purpose, the electronic identification means referred to in Article L. 161-31. The data report made available to the physician contains the necessary information to identify the acts, products, or services covered for care provided in outpatient or health facilities, particularly with reference to the lists mentioned in Articles L. 162-1-7, L. 165-1, and L. 162-17. It also includes the code provided to identify them in these lists, the coverage level, and, for patients with long-term illnesses, the elements constituting the care protocol mentioned in the seventh paragraph of Article L. 324-1.

133. Article R. 162-1-10 of the same code states:
"For the application of Article L. 162-4-3, the managers of the basic health insurance schemes ensure, for the use of contracted doctors or doctors practicing in a facility or health center, during the medical care they provide, the implementation of an electronic information consultation service regarding the benefits provided to their beneficiaries."

134. For implementing these provisions, the health insurance scheme has notably established two teleservices:
- The HRi teleservice: information related to the health reimbursement history by the health insurance scheme for a patient over the last twelve months;
- The ALDi teleservice: data related to long-term illnesses (ALD) recognized by the health insurance scheme for a patient (including the consultation date, ALD code, start and end dates of the ALD, and information on whether the ALD is covered).

135. In this case, the supervisory delegation found that among the data transmitted by the CROSSWAY flow to CEGEDIM SANTÉ are data derived from these two teleservices.

136. The delegation was also informed that the information transmitted to CEGEDIM SANTÉ via the CROSSWAY flow could originate from teleservice queries or be directly entered by doctors.

137. The rapporteur contends that the Social Security Code and the Public Health Code provisions only provide a right to consult the data contained in the teleservices set up by the National Health Insurance Fund for authorized professionals. They do not foresee the possibility for a private entity, via the physician, to directly collect these data from the teleservices. Thus, the rapporteur believes that the collection of these data by CEGEDIM SANTÉ is illegal and conducted in violation of Article 5(1)(a) of the GDPR.

1) On Data from the ALDi Teleservice

138. The restricted committee reiterates that the provisions of the Social Security Code govern only the methods of direct access to personal data from the ALDi teleservice but do not prescribe access to these same data from doctors' computerized records. The CNIL has previously authorized pseudonymized extractions of patient records to build health databases, without excluding as a principle the import of data originally from health insurance databases, provided the processing is proportional and adequately secure, and that the other rules on the processing of personal data are respected. Under these conditions, the restricted committee believes, as argued by the company, that it is permitted to receive ALDi teleservice data in the CROSSWAY flow as long as they are integrated into the computerized patient record by the physician, just like other data recorded therein.

139. However, the case file indicates that the CROSSWAY extractor only allows data extraction from patients' computerized records and does not connect to the teleservice or directly extract data from it. Specifically, the company asserts that the physician may first consult the data from the ALDi teleservice without downloading them and later decide to download these data and add them to the computerized patient record in the CROSSWAY software.

140. The restricted committee takes into account the evidence provided by the company and concludes that the breach of Article 5(1)(a) of the GDPR is not established concerning the collection of data from the ALDi teleservice.

2) On Data from the HRi Teleservice

141. Regarding data from the HRi teleservice, the company argues that the Social Security Code's provisions do not prescribe or prohibit access to doctors' computerized records containing data from the HRi teleservice, especially when such access concerns only anonymous data. Thus, the company believes it is authorized to receive these data in the CROSSWAY flow, just like other data in patient records.

142. More specifically, the company asserts that HRi teleservice data are recorded in the CROSSWAY flow locally by the physician during the teleservice consultation and that only later are the data retrieved by the CROSSWAY extractor. It concludes that the CROSSWAY extractor does not directly extract these data, and thus the collection cannot be considered illegal. However, the company has indicated it is willing, as an alternative and if the restricted committee adopts the rapporteur's position, to modify the CROSSWAY software to make HRi data download an optional feature activatable by doctors.

143. In any case, the company emphasizes its transparency and good faith, asserting that the CNIL was aware of the data retrieval methods for reimbursement history data by CEGEDIM LOGICIELS MEDICAUX, then CEGEDIM SANTÉ. It supports its defense with a letter dated April 25, 2013, in which CEGEDIM LOGICIELS MEDICAUX informed the CNIL about integrating a feature in doctors' software to retain data from reimbursement histories.

144. Finally, the company emphasizes that access to HRi teleservice data by healthcare professionals is recommended by the GIE SESAME-Vitale and, more broadly, that this functionality of data access by physicians serves a public health and drug iatrogeny prevention purpose, allowing them to access information on medications, care, and tests prescribed to their patients by other physicians.

145. The rapporteur emphasizes that the concern is not about doctors accessing HRi teleservice data and adding them to the computerized patient record but the fact that once accessed, CEGEDIM SANTÉ automatically receives the data without the doctor needing to decide whether these data should be included in the patient's record within their working software.

146. The restricted committee notes that, unlike the ALDi teleservice data, HRi teleservice data consultation by the doctor automatically triggers their download, up to twelve months, into the patient's computerized record in the CROSSWAY software.

147. By not providing an intermediate step allowing doctors to consult the data without it automatically triggering the download into the patient record, the restricted committee considers CEGEDIM SANTÉ performs an automatic data extraction from the HRi teleservice into the CROSSWAY flow, as soon as the doctor connects to the software to consult the data, without any additional action on their part.

148. The restricted committee further considers that the practicality criterion invoked in defense by the company, where doctors can directly access information on medications, care, and tests prescribed to their patients by other physicians to detect possible incompatibilities, does not justify the use of patient data in a manner that contravenes the regulations.

149. The restricted committee also states that the issue is not about doctors' access to HRi teleservice data or their addition to the computerized patient record, but the fact that the extractor does not allow for consulting the data without automatically downloading it into the patient record and thus, de facto, without CEGEDIM SANTÉ extracting these data via the CROSSWAY extractor. The restricted committee considers this data collection occurs in violation of Articles L. 162-4-3 and R. 162-1-10 of the Social Security Code and Article R. 1111-8-6 of the Public Health Code, which do not allow a private entity to collect data directly through the sole consultation by a doctor of the HRi teleservice.

150. Finally, regarding the April 25, 2013 letter provided by the company, the restricted committee notes that it does not detail the consultation, downloading into the patient record, and data transmission methods of the reimbursement history to CEGEDIM LOGICIELS MEDICAUX. It reminds that the issue is not doctors' access to the data but the methods of their transmission to the company. Therefore, the content of this letter does not impact the characterization of the breach.

151. In view of the above, the restricted committee considers that the breach of Article 5(1)(a) of the GDPR is established regarding the collection of data from the HRi teleservice.

III. On the Pronouncement of Corrective Measures and Publicity

152. Article 20, paragraph IV, of the Informatique et Libertés law states:
"When the controller or its processor does not comply with the obligations resulting from Regulation (EU) 2016/679 of April 27, 2016, or this law, the president of the Commission nationale de l'informatique et des libertés may, if necessary after issuing the warning provided in I of this article or after pronouncing one or more of the corrective measures provided in III, bring the matter before the restricted committee for the issuance, following an adversarial procedure, of one or more of the following measures: \[…\]
2° An order to bring the processing into conformity with the obligations resulting from Regulation (EU) 2016/679 of April 27, 2016, or this law or to comply with requests submitted by the data subject to exercise their rights, which may be accompanied, except when the processing is implemented by the State, by a penalty of up to €100,000 per day of delay from the date set by the restricted committee;
\[…\]

7° With the exception of cases where the processing is implemented by the State..." 
"... a penalty of up to €10 million or, in the case of an undertaking, 2% of the total worldwide annual turnover of the preceding financial year, whichever is higher, may be imposed. In the cases referred to in points 5 and 6 of Article 83 of Regulation (EU) 2016/679 of 27 April 2016, these caps are respectively increased to €20 million and 4% of said turnover. The restricted committee considers the criteria outlined in the same Article 83 when determining the amount of the fine.

A. On the imposition of an administrative fine and its amount 

154. The company argues that in good faith it believed it was not processing personal data. It notes that punitive action was initiated against it more than two years after the checks, without the CNIL having previously notified it of its differing position on the nature of the data processed, thereby not providing the opportunity to complete the required formalities. The company also claims that the CNIL was aware of the processing carried out by the company since the checks on CEGEDIM LOGICIELS MEDICAUX in 2002 and 2012, without requesting the company to submit an authorization application. Finally, the company indicates that, given its status as a processor, it should not be held responsible for the alleged breaches, as the provisions of Article 66 of the Informatique et Libertés law and Article 5(1)(a) of the GDPR set out obligations applicable only to data controllers.

155. Regarding the amount of the fine proposed by the rapporteur, the company considers it disproportionate and argues that it has not been demonstrated how the share of CEGEDIM SANTÉ’s turnover related to the observatory’s activity was accounted for in determining this amount.

156. Firstly, the restricted committee notes that the breaches of the provisions of Article 66 of the Informatique et Libertés law and Article 5(1)(a) of the GDPR are attributable to it in its capacity as the data controller in question.

157. Secondly, in assessing the merit of imposing a fine, the restricted committee underscores the application of the criterion in point a) of Article 83(2) of the GDPR regarding the severity of the breach, considering the nature, scope of the processing, and the number of individuals concerned.

158. The restricted committee deems the breaches identified as severe. Both the GDPR and the Informatique et Libertés law establish a principle prohibiting the processing of specific categories of data, including health data. The regime provided by Section 3 (Processing of personal data in the field of health) of Chapter III (Obligations of the data controller and the processor) of the Informatique et Libertés law constitutes an exception to this prohibition principle and must be interpreted strictly. Adhering strictly to the provisions of this section by data controllers who wish to process health data is essential to safeguard the fundamental rights of the individuals concerned. However, in this case, the restricted committee finds that the company failed to comply with the obligations incumbent on it under Article 66 of the modified law of 6 January 1978. Moreover, by collecting data from the HRi teleservice, whose usage and access are strictly regulated, the company violated the principle of lawful data processing for commercial purposes, a factor to consider when determining the fine amount.

159. Furthermore, the restricted committee notes the extensive scope of the processing. From 1 January 2021 to 2 April 2021, the number of entries received by CEGEDIM SANTÉ exceeded \[…\], which is significant and demonstrates the scale of the processing involved. This scale and the richness of the data processed also reflect their historical depth, with the company retrieving HRi teleservice data over a twelve-month period.

160. Thirdly, the restricted committee considers that the CNIL cannot be blamed for not asking the company to regularize its processing earlier, despite being aware of it before the 2021 inspections. The restricted committee recalls that under the principle of accountability introduced by Articles 5(2) and 24 of the GDPR, it is up to the actors to inquire about their obligations and undertake the necessary steps to comply. The restricted committee believes that the company exhibited negligence by assuming it could implement health data processing while ignoring Article 66 of the Informatique et Libertés law. Given that processing health data is the company’s primary and historical activity, the restricted committee believes the company could not, in good faith, overlook its obligations under personal data protection regulations, especially as a specialized actor in the health field and considering the aforementioned available doctrine, particularly since other companies implementing similar processing on the same market have requested CNIL authorizations, which are public.

161. Fourthly, the restricted committee considers it appropriate to apply the criterion in point g) of Article 83(2) of the GDPR concerning the categories of personal data affected by the breaches.

162. The restricted committee recalls that the data involved are mainly health data, categorized as special categories of data under Article 9 of the GDPR, known as sensitive data. Given the nature of the data involved and the sector in which it operates, the restricted committee believes the company should have exhibited particular vigilance concerning the processing it implements.

163. Finally, the restricted committee notes that under Article 20, paragraph IV, of the Informatique et Libertés law, CEGEDIM SANTÉ faces a financial penalty up to a maximum of €20 million or 4% of its annual worldwide turnover from the previous financial year, whichever is higher. It notes that the turnover of CEGEDIM LOGICIELS MEDICAUX France, from which CEGEDIM SANTÉ has taken over all activities, was \[…\] in 2021.

164. Therefore, considering the breaches identified, the company’s financial capabilities, and the relevant criteria of Article 83(2) of the GDPR mentioned above, the restricted committee believes an €800,000 fine is justified.

B. On the imposition of an order

165. On one hand, regarding the rapporteur’s proposed order to anonymize the data or bring the processing in line with the provisions of Article 66 of the modified law of 6 January 1978, the restricted committee notes that the company has indicated substantial changes in the processing during the sanction procedure. According to the information submitted by the company in its defense observations, data from the CROSSWAY flow is now transmitted directly to the company \[…\], without CEGEDIM SANTÉ acting as an intermediary.

166. Therefore, in any event, there is no need to issue an order to comply with the provisions of Article 66 of the modified law of 6 January 1978 for the processing operated by CEGEDIM SANTÉ, as the company no longer operates within this framework.

167. On the other hand, if the restricted committee were to uphold the breach of Article 5(1)(a) of the GDPR, the company requests that the rapporteur's proposed order mandating it to cease collecting HRi teleservice data not be followed. It alternatively proposes to modify the CROSSWAY software to eliminate the automatic download feature of HRi data by physicians, only making download into the patient record possible through a positive action by doctors.

168. The restricted committee takes note of the company’s willingness, as the software editor, to evolve the CROSSWAY flow so that the processing complies with the applicable provisions. Additionally, for the above-mentioned reasons, mainly due to CEGEDIM SANTÉ no longer being responsible for processing since this July but merely the software editor, the restricted committee considers there is no need to issue an order.

C. On the publicity

169. The rapporteur considers that the sanction’s publicity is necessary given the severity of the breaches and the number of individuals concerned. The rapporteur believes that publicity will help inform the individuals concerned about the processing of their data, including health data, which most of them are unaware of.

170. In defense, the company disputes the rapporteur’s proposal to make this decision public and claims that if the breach were as severe as the rapporteur asserts, the CNIL would not have allowed it to persist without corrective action since 2014. The company adds that making the deliberation public would cause commercial harm and risk disclosing information on data hosting and transmission, potentially jeopardizing data security.

171. The company also states it lacks the financial means to communicate with physicians to retain their participation in the observatory, adding that, generally, publicizing the sanction would put it at real risk concerning its survival given its precarious financial health.

172. Lastly, the company argues that the rapporteur cannot validly invoke the need to inform individuals about the processing conducted by the company to justify the sanction’s publicity, as there is no accusation of the company failing to inform individuals, with individuals having been informed personally by their physicians about the processing's existence and the company having no direct contact with the individuals concerned.

173. The restricted committee believes making this decision public is justified given the severity of the breaches and the number of individuals affected. It recalls that in case of publicity, the information covered by business secrecy, per Article L. 151 of the Commercial Code, is removed from the decisions published by the restricted committee. Regarding the argument about the impact of publicity on relationships with partner physicians, the committee emphasizes that the company can communicate with its partners about the actions taken to comply with its obligations.

174. Concerning the information of individuals, the restricted committee considers that even though the company is not blamed for failing to inform individuals about the existing processing in this procedure, it is essential that individuals are aware of the company's breaches, particularly to assert their rights.
Rights

175. The measure is proportionate since the decision will no longer identify the company by name after a period of two years from its publication.

FOR THESE REASONS

The restricted committee of the CNIL, after deliberation, decides to:

- Impose an administrative fine on the company CEGEDIM SANTÉ in the amount of eight hundred thousand euros (€800,000) for breaches of Article 66 of the Law No. 78-17 of 6 January 1978 as amended and Article 5, paragraph 1, a) of the GDPR;
- Publish its deliberation on the CNIL’s website and on the Légifrance website, which will no longer identify the company by name after two years from its publication.

The President

Philippe-Pierre CABOURDIN

This decision may be appealed before the Council of State within two months of its notification.

```

Retrieved from "[https://gdprhub.eu/index.php?title=CNIL\_(France)\_-\_SAN-2024-013&oldid=43196](https://gdprhub.eu/index.php?title=CNIL_\(France\)_-_SAN-2024-013&oldid=43196)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [CNIL (France)](/index.php?title=Category:CNIL_\(France\) "Category:CNIL (France)")
*   [France](/index.php?title=Category:France "Category:France")
*   [Article 5(1)(a) GDPR](/index.php?title=Category:Article_5\(1\)\(a\)_GDPR "Category:Article 5(1)(a) GDPR")
*   [2024](/index.php?title=Category:2024 "Category:2024")
*   [French](/index.php?title=Category:French "Category:French")

This page was last edited on 1 October 2024, at 07:38.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)