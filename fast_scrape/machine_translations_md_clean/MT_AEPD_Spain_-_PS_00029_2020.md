# AEPD (Spain) - PS/00029/2020

## Case Information

**Authority:** AEPD (Spain)

**Jurisdiction:** Spain

**Relevant Law:** Article 5(1)(f) GDPRArticle 32 GDPRArticle 35(3)(b) GDPRArticle 58(2)(b) GDPRArticle 58(2)(d) GDPR

**Type:** Investigation

**Outcome:** Violation Found

**Fine:** None

**Parties:** n/a

**National Case Number/Name:** PS/00029/2020

**European Case Law Identifier:** n/a

**Appeal:** n/a

**Original Language(s):** Spanish

**Original Source:** AEPD (in ES)

**Initial Contributor:** n/a

The Spanish DPA (AEPD) ruled on a data breach of a health service file management system. The breach resulted in the loss and unauthorised access to the personal files of over 400 patients. The AEPD found a violation of Articles 5(1)(f), 32 and 35(3)(b) of the GDPR.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Dispute](#Dispute)
    *   [1.3 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

The case refers to the processing carried out by four hospitals in the region of Castilla La Mancha. The Health Service was using an application for managing files. Due to wrong settings, the system exposed sensitive information to unauthorized personnel. The technical malfunction also overwrote different files resulting in the loss of and therefore lost over 400 files containing patient information. The Castilla La Mancha Health notified the AEPD of the breach. In the course of the investigation, it was discovered that among other things, the Health Services had not carried out any Data Protection Impact Assessment.

### Dispute

Which provisions of the GDPR did the AEPD consider violated as a result of the breach?

### Holding

The AEPD held that the Health Service infringed the data confidentiality principle under Article 5(1)(f) by "improperly allowing access to the health data of 431 patients by unauthorised personnel". The AEPD also held that the respondents had failed to prove that they had carried out an adequate risk analysis or necessary data impact assessment as required by Article 35(3)(b). The AEPD also held that there had a been a violation of Article 32 because of a failure to comply with GDPR security measure requirements, such as ensuring a level of data security appropriate to risks for that data, and assessing the appropriate level of risk for certain processing activities. For all three violations, the AEPD issued the Castilla La Mancha Health Service with a warning pursuant to its powers under Article 58(2)(b) GDPR. The Authority ordered the Health Service to carry out a DPIA and bring its processing operations in line with the GDPR within six months, pursuant to Article 58(2)(d) of the Regulation.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Spanish original. Please refer to the Spanish original for more details.

```
RESOLUTION OF SANCTIONING PROCEDURE
From the procedure instructed by the Spanish Data Protection Agency and based on the following
BACKGROUND
FIRST: On 25 September 2019 the director of the Spanish Data Protection Agency (hereinafter the AEPD) agrees to initiate an investigation into a breach of personal data security (hereinafter the Security Breach) notified by the CASTILLALA MANCHA HEALTH SERVICE, with tax identification number Q4500146H, relating to the loss of data and improper access to patient records in various hospitals in the aforementioned Autonomous Community. 
SESCAM has notified this Agency of the following facts: 
 
"X" service of "Y" hospital has consulted a filed document of a patient of "Y" hospital and has been shown the documentation of a patient of "Z" hospital. The path where each patient's files are stored was not correctly configured, with the same location being shared for different hospitals. The identification of the different files was done by means of a numerical sequence. These aspects led to the substitution of files with the same name for different patients and the appearance of crossed documents between different hospitals".
They report that the security gap affects the confidentiality, integrity and availability of basic and health data for some 431 patients. 
SECOND: In view of the facts notified and the documents provided by the data controller, the Subdirectorate-General for the Inspection of Data initiates preliminary investigation proceedings for the clarification of the facts notified by SESCAM, by virtue of the powers of investigation, having knowledge of the following points:
BACKGROUND
Security breach notification date: 16/09/2019
ENTITY INVESTIGATED
CASTILLA LA MANCHA HEALTH SERVICE (hereinafter SESCAM), with NIF
Q4500146H and with address at Avenida Río Guadiana 4, 45071 - Toledo (Toledo) RESULTS OF THE RESEARCH
Regarding the facts.
•	There has been an overlap of attached files within the VITROPATH application (VITROPATH is an integrated system for the management of the Pathological Anatomy service) by users of the application in four SESCAM hospitals.
They point out that the information improperly indexed only corresponds to the files attached to the report made by the Pathology Service. Under no circumstances has the report produced on the basis of the attached file been de-indexed, so that the information supplied to doctors and patients is not compromised since the attached file is only consulted from the Pathology Service itself.
There are 423 files that could not be recovered. The Pathological Anatomy services of the centres affected have been informed so that they can analyse the possibility of recovering the information from paper copies. 
•	The chronology of events is as follows: 
On 09/09/2019 at 12:50 a call from VITROPATH was received at the Medical Imaging Support informing that they had received an incident indicating that from the Puertollano Hospital they were consulting attached documents in VITROPATH and documents from another hospital appeared. 
This incident was reported by the Head of Service of one of the hospitals attached to SESCAM directly to the VITROPATH provider by e-mail instead of communicating it through the IRIS incident registration system as it is logged.
The incident arrives at SESCAM by telephone communication from the supplier to the Medical Image Support group. After analysing the problem by the Medical Image Support group together with Middleware Support, it was discovered that in the VITROPATH deployments the path where the attached files are stored had not been configured, being by default the path c:\\temp which stores the report in the root directory of the OAS. As there is more than one VITROPATH deployment in the same OAS, and as the application uses a numerical sequence to identify the uploaded files, documents with the same identifier have been overlapped.
•	This incident has led to overlapping attachments and the deindexing of patient documentation that had been attached to the patient's history in VITROPATH. Another consequence of this overlap is that reports associated with a patient were being displayed by different Services. 
These attached documents correspond to requests and reports of tests carried out in external centres which are attached to the VITROPATH report.
•	Each of the OAS where VITROPATH is deployed has been analysed to determine whether other SESCAM hospitals may have been affected, and it has been verified that the incidence has affected four SESCAM hospitals. 
With regard to the measures implemented prior to the security breach.
•	They have developed a Treatment Activity Register (TAR), provided to this Data Inspectorate, with a description of the activities involved in the gap:
"SESCAM's Clinical History" for the Management of SESCAM Patients' Clinical Histories
"SESCAM patients" for the purpose of controlling and managing the identification data of SESCAM patients.
•	They do not have Risk Analysis (RA) or Data Protection Impact Assessments (DIA). 
•	For the development of the software there are controls consisting of a test plan that is agreed with the company hired for this purpose.
•	There is a procedure established in the Information Technology Area (ITA) of SESCAM to respond, through Severe Incident Response Groups (SIRG), to incidents occurring in the Information Technology services.
The Severe Incident Response Groups (SIRG) are composed of at least one person from each of the functional units of the ITA Operations and Service Department and one person from the functional area of the ITA Projects Department related to the Information System affected.
Among the functions and objectives of this work team are to reduce as much as possible the uncertainty in the organisation of the situation in the face of severe incidents, to take appropriate decisions during these processes, to coordinate the actions of the technicians and to liaise with the ITA management to keep them informed of the evolution of the event. It will coordinate the necessary actions for a rapid and efficient recovery of the affected Information Systems, so that the organisation can operate normally in the shortest possible time. It will draw up a report detailing the evolution of the incident from its detection to its resolution, indicating the measures that should be taken to avoid similar incidents in the future.
With regard to actions and measures taken in the event of the possible occurrence of the gap.
•	They notify the security gap to this Agency.
•	On the occasion of the security breach that occurred, they provide a copy of the report prepared by the SIRG, which details and informs about the evolution of the incident, from its detection to its resolution and the measures that the Organization has adopted to prevent and avoid similar events in the future.
•	As a concrete measure to prevent a similar incident from happening again, the SIRG report states that "specific tasks of including attachments and reviewing file location have been included in the tests in Production of the deployment". 
THIRD: On 24/06/2020, the Director of the Spanish Data Protection Agency agreed to initiate sanctioning proceedings against SESCAM, with NIF Q4500146H, for the alleged infringement of Article 5.1.f) of the RGPD, in accordance with the provisions of Article 83.5 of the RGPD and 72.1.i) of the LOPDGDD, considered very serious for the purposes of prescription; and of Articles 32 and 35.3.b) of the aforementioned RGPD, pursuant to the provisions of Article 83.4 of the RGPD and Article 73, paragraphs d), e), f), g) and t) of the LOPDGDD, considered serious for the purposes of prescription. 
 FOURTH: On 29 June 2020, SESCAM was notified of the agreement to initiate the procedure and made no representations. 
PROVEN FACTS
FIRST: On 09/09/2019 an incident was detected indicating that from the Puertollano Hospital documents attached to VITROPATH were being consulted and documents from another hospital appeared. 
This incident was reported directly to the VITROPATH supplier by e-mail instead of being reported by the IRIS incident registration system as it is logged.
SECOND: The incidence has its origin in the fact that in the VITROPATH displays the path where the attached files are stored had not been configured, being by default the path <<c:\\temp>> which stores the report in the root directory of the OAS. As there is more than one VITROPATH deployment in the same OAS, and as the application uses a numerical sequence to identify the uploaded files, documents with the same identifier have been overlapped.
THIRD: This incident has led to the overlapping of attached files and the deindexing of patient documentation that had been attached to the patient's history in VITROPATH. Another consequence of this overlap is access to reports associated with a patient by different Services.
FOURTH: It has been verified that the incidence has affected four hospitals attached to SESCAM. 
LEGAL FOUNDATIONS
I
By virtue of the powers that Articles 58, 64.2 and 68.1 of the RGPD recognise to each supervisory authority, and in accordance with that established in Articles 47 and 48 of the LOPDGDD, the Director of the Spanish Data Protection Agency is competent to initiate and resolve this procedure.
II
The RGPD is defined in Article 4:
1)	"personal data" means any information relating to an identified or identifiable natural person ("data subject"); an identifiable natural person is one who can be identified, directly or indirectly, in particular by reference to an identifier, such as a name, an identification number, localisation data, an online identifier or one or more factors specific to that person's physical, physiological, genetic, mental, economic, cultural or social identity
2)	"processing' means any operation or set of operations which is performed upon personal data or upon sets of personal data, whether or not by automatic means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, limitation, erasure or destruction;
6)	"File" means any structured set of personal data, accessible according to specific criteria, whether centralised, decentralised or distributed in a functional or geographical manner;
7)	"controller" or "processor" means the natural or legal person, public authority, agency or other body which alone or jointly with others determines the purposes and means of the processing; where Union law or Member States' law determines the purposes and means of the processing, the controller or the specific criteria for its nomination may lay them down in Union law or in Member States' law;
12) "breach of security of personal data" means any breach of security resulting in the accidental or unlawful destruction, loss or alteration of, or unauthorized disclosure of or access to, personal data transmitted, stored or otherwise processed;
health-related data' means personal data relating to the physical or mental health of a natural person, including the provision of health care services, which reveal information about his or her state of health;
In accordance with the definitions transcribed and investigations carried out, it must be concluded that the person responsible for processing the data subject to the aforementioned security breach is SESCAM.
The facts notified to this Agency by SESCAM, in its capacity as data controller, constitute an infringement, attributable to SESCAM, for violation of Article 5.1.f) of the RGPD which it states:
<<1. The personal data will be:
(f) processed in such a way as to ensure appropriate security of personal data, including protection against unauthorised or unlawful processing and accidental loss, destruction or damage, through the use of appropriate technical or organisational measures ('integrity and confidentiality')>>.
This obligation is set out in article 5 of the Organic Law 3/2018, of 5/12, on the Protection of Personal Data and the Guarantee of Digital Rights (hereinafter LOPDGDD), which specifies:
< 1. Data controllers and data processors as well as all persons involved at any stage of the processing shall be bound by the duty of confidentiality referred to in Article 5(1)(f) of Regulation (EU) 2016/679.
2.	The general obligation indicated in the previous section will be complementary to the duties of professional secrecy in accordance with the applicable regulations.
3.	The obligations established in the previous sections will be maintained even when the relationship between the data subject and the data processor has ended.>> The obligations established in the previous sections will be maintained even when the relationship between the data subject and the data processor has ended.
Article 24 of the RGPD, responsibility of the data controller, provides:
<< Taking into account the nature, scope, context and purposes of the processing, and the risks of varying degrees of probability and seriousness to the rights and freedoms of natural persons, the controller shall implement appropriate technical and organisational measures in order to ensure and to be able to demonstrate that the processing complies with this Regulation. Those measures shall be reviewed and updated as necessary. 
2. When they are provided in relation to the processing activities, the measures mentioned in paragraph 1 shall include the application by the data controller of the appropriate data protection policies>>.
Article 25 of the RGPD establishes the following obligations
<<1. Having regard to the state of the art, the cost of the implementation and the nature, scope, context and purposes of the processing, and taking into account the risks of varying degrees of probability and seriousness for the rights and freedoms of natural persons, the controller shall apply, both when determining the means of processing and at the time of the processing itself, appropriate technical and organisational measures, such as pseudonymisation, designed to apply effectively data protection principles, such as data minimisation, and to integrate the necessary safeguards into the processing in order to meet the requirements of this Regulation and to protect the rights of data subjects.
2. The controller shall implement appropriate technical and organisational measures with a view to ensuring that, by default, personal data are processed only if they are necessary for each specific purpose of the processing. This obligation shall apply to the amount of personal data collected, the extent of their processing, their storage period and their accessibility. Such measures shall ensure in particular that, by default, personal data are not accessible, without the intervention of the person, to an undetermined number of natural persons.>> Article 13
Article 28.1 and 2 of the LOPDGDD, relating to the general obligations of the data controller and processor, states the following:
<<1. The data controllers and processors, taking into account the elements listed in Articles 24 and 25 of Regulation (EU) 2016/679, shall determine the appropriate technical and organisational measures to be applied in order to guarantee and accredit that the processing is in accordance with the aforementioned regulation, with this organic law, its implementing rules and the applicable sectoral legislation. In particular, they shall assess whether it is appropriate to carry out the data protection impact assessment and the prior consultation to which Section 3 of Chapter IV of the Regulation refers.
2. For the adoption of the measures to which the previous section refers, the data controllers and processors shall take into account, in particular, the greater risks that could arise in the following cases:
a)	When the processing could generate situations of discrimination, usurpation of identity or fraud, financial losses, damage to reputation, loss of confidentiality of data subject to professional secrecy, unauthorised reversion of pseudonymisation or any other significant economic, moral or social damage to those affected.
b)	Where the processing may deprive the data subjects of their rights and freedoms, it may prevent them from exercising control over their personal data.
c)	When the processing is not merely incidental or ancillary to the special categories of data to which Articles 9 and 10 of Regulation (EU) 2016/679 and 9 and 10 of this Organic Law refer or of data related to the commission of administrative offences.
f) When there is a massive processing operation involving a large number of affected persons or involving the collection of a large amount of personal data >>.
Article 35.1 and 35.3.b) of the GPRS, on the impact assessment relating to data protection, states the following: 
<1. Where a type of processing, in particular using new technologies, is likely, by its nature, its scope, its context or its purposes, to present a high risk to the rights and freedoms of natural persons, the controller shall, prior to the processing, carry out an assessment of the impact of the processing operations on the protection of personal data. A single assessment may cover a number of similar processing operations entailing similar high risks. 
<<3. The data protection impact assessment referred to in paragraph 1 shall be required in particular in the case of 
(b) large-scale processing of special categories of data referred to in Article 9(1) or of personal data relating to convictions and criminal offences referred to in Article 10>>.
In accordance with the provisions of Article 35.4 of the RGPD, the AEPD has established and published a list of the types of processing operations that require an impact assessment. 
This list is based on the criteria set out by the Article 29 Working Party in the WP248 "Guidelines on Data Protection Impact Assessment (DPA) and to determine whether the processing is "likely to be of high risk" for the purposes of the RGPD", it complements them and should be understood as a non-exhaustive list:
(…)
<<4. Processing that involves the use of special categories of data referred to in Article 9.1 of the RGPD, data relating to convictions or criminal offences referred to in Article 10 of the RGPD or data that enables the financial situation or solvency of assets to be determined or information about persons relating to special categories of data to be deduced
In the above-mentioned document (WP248, page 15, III.c) it states
<<The requirement to carry out a PFI applies to existing processing operations likely to present a high risk to the rights and freedoms of natural persons and for which the risks have changed, taking into account the nature, scope, context and purposes of the processing. 
A DPE is not required for processing operations which have been verified by a supervisory authority or the data protection delegate in accordance with Article 20 of Directive 95/46/EC and which are carried out in a way that has not changed since the previous verification. Indeed, 'Commission decisions and authorisations of supervisory authorities based on Directive 95/46/EC remain in force until they are amended, replaced or repealed' (recital 171). 
On the other hand, this means that processing operations whose conditions of application (scope, purpose, personal data collected, identity of the data controllers or recipients, data retention period, technical or organisational measures, etc.) have changed since the previous verification by the supervisory authority or the data protection delegate and which are likely to involve a high risk must be subject to a PTIA. 
In addition, an EIPD may be required after a change in risks due to the processing operations, for example because of the implementation of a new technology or because personal data are used for a different purpose. Data processing operations can evolve rapidly and new vulnerabilities may arise. It should therefore be noted that the review of a PTIA is not only useful for continuous improvement, but is also essential for maintaining the level of data protection in an environment that evolves over time. A DSME may also become necessary due to changes in the organisational or social context of the processing activity, for example because the effects of certain automated decisions have gained importance or because new categories of data subjects become vulnerable to discrimination. Each of these examples could be an element in changing the risk resulting from the processing activity in question. 
In terms of context, the data collected, purposes, functionalities, personal data processed, recipients, combinations of data, risks (means of support, causes of risk, possible effects, threats, etc.), security measures and international transfers. 
However, certain changes could also reduce the risk. For example, a processing operation could evolve so that decisions are no longer automated or an observation activity is no longer systematic. In this case, the review of the risk analysis conducted may show that an IPE is no longer required.
For reasons of good practice, a PCIA should be continually reviewed and regularly re-evaluated. Therefore, even if on 25 May 2018 a DSME is not required, it will be necessary, at the appropriate time, for the data controller to carry out such an evaluation as part of his general obligations of proactive responsibility.>>.
Consequently, a PTIA must be carried out if it is not available or, if appropriate, the existing one must be revised and re-evaluated after new modifications to the data processing carried out within the scope of the VITROPATH application. 
III
Article 83.5(a) of the RGPD considers that the infringement of << the basic principles for processing, including the conditions for consent under Articles 5, 6, 7 and 9" is punishable, in accordance with paragraph 5 of the aforementioned Article 83 of the Regulation, with administrative fines of a maximum of 20,000,000 euros or, in the case of a company, of an amount equivalent to a maximum of 4% of the total annual turnover of the previous financial year, whichever is greater.>>
Article 83.4 a) of the RGPD states: << Infringements of the following provisions shall be sanctioned, in accordance with paragraph 2, with administrative fines of up to EUR 10,000,000 or, in the case of a company, of up to 2% of the total annual turnover of the previous financial year, whichever is greater: a) the obligations of the person responsible and the person in charge under Articles 8, 11, 25 to 39, 42 and 43>>.
IV Article 83.7 of the RGPD states:
< Without prejudice to the corrective powers of the supervisory authorities under Article 58(2), each Member State may lay down rules on whether and to what extent administrative fines may be imposed on public authorities and bodies established in that Member State
Article 58(2)(b) and (d) of the GPRS reads as follows
< Each supervisory authority shall have all the following corrective powers as set out below:
b) sanction any person responsible for or in charge of the processing with a warning
where processing operations have infringed the provisions of this Regulation;
(d) instruct the controller or processor to ensure that the processing operations are carried out in accordance with the provisions of this Regulation, where appropriate, in a particular manner and within a specified period of time
The Spanish legal system has opted not to fine public entities, as indicated in Article 77.1. c) and 2. 4. 5. and 6 of the
LOPDDGG: 
<< 1. The regime established in this Article shall apply to the processing operations for which they are responsible or in charge:
c) The General State Administration, the Administrations of the Communities
The local authorities and the entities that make up the local administration.
2. When the controllers or managers listed in subsection 1 commit any of the infringements to which Articles 72 to 74 of this organic law refer, the competent data protection authority shall issue a decision sanctioning them with a warning. The resolution shall also establish the measures that may be adopted to cease the conduct or correct the effects of the infringement committed.
The decision shall be notified to the data controller or processor, to the body to which he reports, if appropriate, and to the data subjects who are data subjects, if any.
4.	The data protection authority must be informed of the decisions taken in relation to the measures and actions to which the previous paragraphs refer.
5.	The Ombudsman or, where appropriate, the analogous institutions of the Autonomous Communities shall be notified of actions taken and resolutions issued under this article.
6.	When the competent authority is the Spanish Data Protection Agency, it shall publish on its website, with due separation, the resolutions referring to the entities in paragraph 1 of this Article, with express indication of the identity of the controller or person responsible for the processing who has committed the infringement.>>.
V
In the present case, it is clear from the investigations carried out by that Agency that SESCAM has infringed the principle of confidentiality by improperly allowing access to the health data of 431 patients by unauthorised personnel. It also infringed the principle of integrity by failing to ensure the security of the health data of 431 patients against accidental loss, destruction or damage through the application of appropriate technical or organisational measures. Nor is there any evidence that SESCAM has carried out an adequate risk analysis and the required impact assessment in accordance with the provisions of Article 35 of the RGPD.    
Therefore, in accordance with the applicable legislation and having assessed the criteria for the graduation of the penalties whose existence has been accredited, the Director of the Spanish Data Protection Agency RESOLVES:
< Each supervisory authority shall have all the following corrective powers as set out below:
b) sanction any person responsible for or in charge of the processing with a warning
where processing operations have infringed the provisions of this Regulation;
(d) instruct the controller or processor to ensure that the processing operations are carried out in accordance with the provisions of this Regulation, where appropriate, in a particular manner and within a specified period of time
The Spanish legal system has opted not to fine public entities, as indicated in Article 77.1. c) and 2. 4. 5. and 6 of the
LOPDDGG: 
<< 1. The regime established in this Article shall apply to the processing operations for which they are responsible or in charge:
c) The General State Administration, the Administrations of the Communities
The local authorities and the entities that make up the local administration.
2. When the controllers or managers listed in subsection 1 commit any of the infringements to which Articles 72 to 74 of this organic law refer, the competent data protection authority shall issue a decision sanctioning them with a warning. The resolution shall also establish the measures that may be adopted to cease the conduct or correct the effects of the infringement committed.
The decision shall be notified to the data controller or processor, to the body to which he reports, if appropriate, and to the data subjects who are data subjects, if any.
4.	The data protection authority must be informed of the decisions taken in relation to the measures and actions to which the previous paragraphs refer.
5.	The Ombudsman or, where appropriate, the analogous institutions of the Autonomous Communities shall be notified of actions taken and resolutions issued under this article.
6.	When the competent authority is the Spanish Data Protection Agency, it shall publish on its website, with due separation, the resolutions referring to the entities in paragraph 1 of this Article, with express indication of the identity of the controller or person responsible for the processing who has committed the infringement.>>.
V
In the present case, it is clear from the investigations carried out by that Agency that SESCAM has infringed the principle of confidentiality by improperly allowing access to the health data of 431 patients by unauthorised personnel. It also infringed the principle of integrity by failing to ensure the security of the health data of 431 patients against accidental loss, destruction or damage through the application of appropriate technical or organisational measures. Nor is there any evidence that SESCAM has carried out an adequate risk analysis and the required impact assessment in accordance with the provisions of Article 35 of the RGPD.    
Therefore, in accordance with the applicable legislation and having assessed the criteria for the graduation of the penalties whose existence has been accredited, the Director of the Spanish Data Protection Agency RESOLVES:
< Each supervisory authority shall have all the following corrective powers as set out below:
b) sanction any person responsible for or in charge of the processing with a warning
where processing operations have infringed the provisions of this Regulation;
(d) instruct the controller or processor to ensure that the processing operations are carried out in accordance with the provisions of this Regulation, where appropriate, in a particular manner and within a specified period of time
The Spanish legal system has opted not to fine public entities, as indicated in Article 77.1. c) and 2. 4. 5. and 6 of the
LOPDDGG: 
<< 1. The regime established in this Article shall apply to the processing operations for which they are responsible or in charge:
c) The General State Administration, the Administrations of the Communities
The local authorities and the entities that make up the local administration.
2. When the controllers or managers listed in subsection 1 commit any of the infringements to which Articles 72 to 74 of this organic law refer, the competent data protection authority shall issue a decision sanctioning them with a warning. The resolution shall also establish the measures that may be adopted to cease the conduct or correct the effects of the infringement committed.
The decision shall be notified to the data controller or processor, to the body to which he reports, if appropriate, and to the data subjects who are data subjects, if any.
4.	The data protection authority must be informed of the decisions taken in relation to the measures and actions to which the previous paragraphs refer.
5.	The Ombudsman or, where appropriate, the analogous institutions of the Autonomous Communities shall be notified of actions taken and resolutions issued under this article.
6.	When the competent authority is the Spanish Data Protection Agency, it shall publish on its website, with due separation, the resolutions referring to the entities in paragraph 1 of this Article, with express indication of the identity of the controller or person responsible for the processing who has committed the infringement.>>.
V
In the present case, it is clear from the investigations carried out by that Agency that SESCAM has infringed the principle of confidentiality by improperly allowing access to the health data of 431 patients by unauthorised personnel. It also infringed the principle of integrity by failing to ensure the security of the health data of 431 patients against accidental loss, destruction or damage through the application of appropriate technical or organisational measures. Nor is there any evidence that SESCAM has carried out an adequate risk analysis and the required impact assessment in accordance with the provisions of Article 35 of the RGPD.    
Therefore, in accordance with the applicable legislation and having assessed the criteria for the graduation of the penalties whose existence has been accredited, the Director of the Spanish Data Protection Agency RESOLVES:
< Each supervisory authority shall have all the following corrective powers as set out below:
b) sanction any person responsible for or in charge of the processing with a warning
where processing operations have infringed the provisions of this Regulation;
(d) instruct the controller or processor to ensure that the processing operations are carried out in accordance with the provisions of this Regulation, where appropriate, in a particular manner and within a specified period of time
The Spanish legal system has opted not to fine public entities, as indicated in Article 77.1. c) and 2. 4. 5. and 6 of the
LOPDDGG: 
<< 1. The regime established in this Article shall apply to the processing operations for which they are responsible or in charge:
c) The General State Administration, the Administrations of the Communities
The local authorities and the entities that make up the local administration.
2. When the controllers or managers listed in subsection 1 commit any of the infringements to which Articles 72 to 74 of this organic law refer, the competent data protection authority shall issue a decision sanctioning them with a warning. The resolution shall also establish the measures that may be adopted to cease the conduct or correct the effects of the infringement committed.
The decision shall be notified to the data controller or processor, to the body to which he reports, if appropriate, and to the data subjects who are data subjects, if any.
4.	The data protection authority must be informed of the decisions taken in relation to the measures and actions to which the previous paragraphs refer.
5.	The Ombudsman or, where appropriate, the analogous institutions of the Autonomous Communities shall be notified of actions taken and resolutions issued under this article.
6.	When the competent authority is the Spanish Data Protection Agency, it shall publish on its website, with due separation, the resolutions referring to the entities in paragraph 1 of this Article, with express indication of the identity of the controller or person responsible for the processing who has committed the infringement.>>.
V
In the present case, it is clear from the investigations carried out by that Agency that SESCAM has infringed the principle of confidentiality by improperly allowing access to the health data of 431 patients by unauthorised personnel. It also infringed the principle of integrity by failing to ensure the security of the health data of 431 patients against accidental loss, destruction or damage through the application of appropriate technical or organisational measures. Nor is there any evidence that SESCAM has carried out an adequate risk analysis and the required impact assessment in accordance with the provisions of Article 35 of the RGPD.    
Therefore, in accordance with the applicable legislation and having assessed the criteria for the graduation of the penalties whose existence has been accredited, the Director of the Spanish Data Protection Agency RESOLVES:
< Each supervisory authority shall have all the following corrective powers as set out below:
b) sanction any person responsible for or in charge of the processing with a warning
where processing operations have infringed the provisions of this Regulation;
(d) instruct the controller or processor to ensure that the processing operations are carried out in accordance with the provisions of this Regulation, where appropriate, in a particular manner and within a specified period of time
The Spanish legal system has opted not to fine public entities, as indicated in Article 77.1. c) and 2. 4. 5. and 6 of the
LOPDDGG: 
<< 1. The regime established in this Article shall apply to the processing operations for which they are responsible or in charge:
c) The General State Administration, the Administrations of the Communities
The local authorities and the entities that make up the local administration.
2. When the controllers or managers listed in subsection 1 commit any of the infringements to which Articles 72 to 74 of this organic law refer, the competent data protection authority shall issue a decision sanctioning them with a warning. The resolution shall also establish the measures that may be adopted to cease the conduct or correct the effects of the infringement committed.
The decision shall be notified to the data controller or processor, to the body to which he reports, if appropriate, and to the data subjects who are data subjects, if any.
4.	The data protection authority must be informed of the decisions taken in relation to the measures and actions to which the previous paragraphs refer.
5.	The Ombudsman or, where appropriate, the analogous institutions of the Autonomous Communities shall be notified of actions taken and resolutions issued under this article.
6.	When the competent authority is the Spanish Data Protection Agency, it shall publish on its website, with due separation, the resolutions referring to the entities in paragraph 1 of this Article, with express indication of the identity of the controller or person responsible for the processing who has committed the infringement.>>.
V
In the present case, it is clear from the investigations carried out by that Agency that SESCAM has infringed the principle of confidentiality by improperly allowing access to the health data of 431 patients by unauthorised personnel. It also infringed the principle of integrity by failing to ensure the security of the health data of 431 patients against accidental loss, destruction or damage through the application of appropriate technical or organisational measures. Nor is there any evidence that SESCAM has carried out an adequate risk analysis and the required impact assessment in accordance with the provisions of Article 35 of the RGPD.    
Therefore, in accordance with the applicable legislation and having assessed the criteria for the graduation of the penalties whose existence has been accredited, the Director of the Spanish Data Protection Agency RESOLVES:
FIRST: IMPOSE CASTILLA LA MANCHA HEALTH SERVICE, with NIF
Q4500146H, for the infringement of article 5.1.f) of the RGPD, in accordance with the provisions of article 83.5 of the RGPD and 72.1.i) of the LOPDGDD, considered very serious for the purposes of prescription, a warning sanction; and of articles 32 and 35.3.b) of the aforementioned RGPD, pursuant to the provisions of Article 83.4 of the RGPD and Article 73, paragraphs d), e), f) and g) of the LOPDGDD, considered serious for the purposes of prescription, a sanction of warning. 
SECOND: REQUIRE the CASTILLA LA MANCHA HEALTH SERVICE to contribute within six months:
•	Risk analysis and impact assessment of personal data processing operations within the scope of the VITROPATH application in accordance with art. 35 of the RGPD.
•	Audit after the notified security breach certifying that the personal data processing operations in the scope of the VITROPATH application are in accordance with the provisions of the RGPD. 
THIRD: TO NOTIFY this resolution to SERVICIO DE SALUD DE CASTILLA LA MANCHA, with NIF Q4500146H and domiciled at Avenida Río Guadiana 4, 45071 Toledo. 
FOURTH: To communicate this resolution to the Ombudsman, in accordance with Article 77.5 of the LOPDGDD.
 
FIFTH: To communicate this resolution to the HEALTH COUNCIL OF CASTILLA LA MANCHA, with NIF S1911001D, Plaza Conde 2, 45002, Toledo. 
In accordance with Article 50 of the LOPDGDD, this Resolution will be made public after it has been notified to the interested parties. 
Against this resolution, which puts an end to the administrative procedure in accordance with Article 48.6 of the LOPDGDD, and pursuant to the provisions of Article 123 of the LPACAP, data subjects may lodge, optionally, an appeal for reversal with the Director of the Spanish Data Protection Agency within one month starting from the day following notification of this decision or directly an administrative appeal before the Contentious-Administrative Chamber of the National Court, in accordance with the provisions of Article 25 and paragraph 5 of the fourth additional provision of Law 29/1998, of 13 July, regulating the Contentious-Administrative Jurisdiction, within a period of two months from the day following notification of this act, as provided in Article 46.1 of the aforementioned Law.
Finally, it is pointed out that in accordance with the provisions of art. 90.3 a) of the LPACAP, the final resolution may be suspended as a precautionary measure through administrative channels if the interested party states his intention to file a contentious-administrative appeal. If this is the case, the data subject must formally communicate this fact in writing addressed to the Spanish Data Protection Agency, presenting it through the Electronic Register of the Agency
\[https://sedeagpd.gob.es/sede-electronica-web/\], or through any of the other registers provided for in Article 16.4 of the aforementioned Law 39/2015, of 1 October. He must also send the Agency the documentation proving the effective filing of the contentious-administrative appeal. Should the Agency not be aware of the lodging of the contentious-administrative appeal within two months from the day following the notification of the present resolution, it shall terminate the precautionary suspension.

Mar España Martí
Director of the Spanish Data Protection Agency

```

Retrieved from "[https://gdprhub.eu/index.php?title=AEPD\_(Spain)\_-\_PS/00029/2020&oldid=38065](https://gdprhub.eu/index.php?title=AEPD_\(Spain\)_-_PS/00029/2020&oldid=38065)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [AEPD (Spain)](/index.php?title=Category:AEPD_\(Spain\) "Category:AEPD (Spain)")
*   [Spain](/index.php?title=Category:Spain "Category:Spain")
*   [Article 5(1)(f) GDPR](/index.php?title=Category:Article_5\(1\)\(f\)_GDPR "Category:Article 5(1)(f) GDPR")
*   [Article 32 GDPR](/index.php?title=Category:Article_32_GDPR "Category:Article 32 GDPR")
*   [Article 35(3)(b) GDPR](/index.php?title=Category:Article_35\(3\)\(b\)_GDPR "Category:Article 35(3)(b) GDPR")
*   [Article 58(2)(b) GDPR](/index.php?title=Category:Article_58\(2\)\(b\)_GDPR "Category:Article 58(2)(b) GDPR")
*   [Article 58(2)(d) GDPR](/index.php?title=Category:Article_58\(2\)\(d\)_GDPR "Category:Article 58(2)(d) GDPR")
*   [Spanish](/index.php?title=Category:Spanish "Category:Spanish")

This page was last edited on 13 December 2023, at 13:49.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)