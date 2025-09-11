# Garante per la protezione dei dati personali (Italy) - 9973790

## Case Information

**Authority:** Garante per la protezione dei dati personali (Italy)

**Jurisdiction:** Italy

**Relevant Law:** Article 5(1)(f) GDPRArticle 9(1) GDPRArticle 32 GDPR

**Type:** Complaint

**Outcome:** Upheld

**Decided:** 30.11.2023

**Fine:** n/a

**Parties:** C.B. Sistemi s.r.l.

**National Case Number/Name:** 9973790

**European Case Law Identifier:** n/a

**Appeal:** Unknown

**Original Language(s):** Italian

**Original Source:** GPDP (in IT)

**Initial Contributor:** carloc

The Italian DPA reprimanded a processor for having breached [Article 5(1)(f) GDPR](/index.php?title=Article_5_GDPR#1f "Article 5 GDPR") and [Article 32 GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR") since, following a software update, the platform of a healthcare provider suffered a vulnerability and allowed logged-in patients to access other reports.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

CB Sistemi s.r.l. (the processor) provided health care provider Medical Center s.r.l. (the controller) with the StudioWEB platform, which made the results of medical examinations available to patients through an authentication process.

A person accessed the StudioWEB platform with his grandmother's credentials. He then discovered a vulnerability that allowed logged-in patients to access other reports by changing the URL link. Specifically, the person stressed that by changing the final number of the URL link, it was possible to access other patients' reports. It was also even possible to see the "Event Log" of the report, which showed a list of the users who have downloaded the report.

Thus, the person informed both the controller and the Italian DPA of the vulnerability. The processor immediately fixed the vulnerability and later explained that it was due to a bug introduced with a software update.

Pursuant to [Article 157 of the Italian Privacy Code](https://www.garanteprivacy.it/documents/10160/0/Codice+in+materia+di+protezione+dei+dati+personali+%28Testo+coordinato%29.pdf/b1787d6b-6bce-07da-a38f-3742e3888c1d?version=7.0), the DPA requested the controller to provide more information on the matter that were necessary to evaluate its data protection practices.

### Holding

To begin with, the Italian DPA held that the medical reports shown on the platform could be considered as data concerning health pursuant to [Article 4(15) GDPR](/index.php?title=Article_4_GDPR#15 "Article 4 GDPR").

In this regard, and taking into consideration the submission by the controller, the DPA noted that the vulnerability of the system had been foreseen in the initial test phase and appropriately blocked.

Therefore, since the processor did not take into account the vulnerability following the software update of the same portal, the DPA believed that the processor had not adopted appropriate measures to guarantee a level of security adequate to the risk, as provided by [Article 5(1)(f) GDPR](/index.php?title=Article_5_GDPR#1f "Article 5 GDPR") and [Article 32 GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR") to ensure the confidentiality, integrity, availability and resilience of processing systems and services permanently.

The DPA held that the infringement was minor because of the limited extent of the data breach, the processor's collaboration during the investigation, and the fact that the vulnerability was quickly fixed. Hence, the DPA did not impose a fine and reprimanded the processor.

## Comment

The warning only addresses the processor, not the controller. The motivation does not address this aspect of the decision.

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Italian original. Please refer to the Italian original for more details.

```
\[doc. web no. 9973790\]

Provision of 30 November 2023

Register of measures
n. 556 of 30 November 2023

THE GUARANTOR FOR THE PROTECTION OF PERSONAL DATA

IN today's meeting, which was attended by prof. Pasquale Stanzione, president, Prof. Ginevra Cerrina Feroni, vice-president, Dr. Agostino Ghiglia and the lawyer. Guido Scorza, members and the councilor. Fabio Mattei, general secretary;

HAVING REGARD to Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 /CE, “General Data Protection Regulation” (hereinafter “Regulation”);

HAVING REGARD TO Legislative Decree 30 June 2003, n. 196 containing "Code regarding the protection of personal data, containing provisions for the adaptation of national law to Regulation (EU) 2016/679 of the European Parliament and of the Council, of 27 April 2016, relating to the protection of natural persons with regard to the processing of personal data, as well as the free circulation of such data and which repeals Directive 95/46/EC” (hereinafter “Code”);

GIVEN Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor for the protection of personal data, approved with resolution no. 98 of 4/4/2019, published in the Official Gazette. n. 106 of 8/5/2019 and in www.gpdp.it, doc. web no. 9107633 (hereinafter “Guarantor Regulation no. 1/2019”);

HAVING SEEN the documentation in the documents;

GIVEN the observations formulated by the Secretary General pursuant to art. 15 of the Guarantor's Regulation no. 1/2000 on the organization and functioning of the office of the Guarantor for the protection of personal data, in www.gpdp.it, doc. web no. 1098801;

SPEAKER Dr. Agostino Ghiglia;

PREMISE

1. Reporting

The Authority received a report from Mr. XX concerning the reporting methods used by the Medical Center s.r.l. company. In particular, it was represented that "the platform offers a valid link to a report" but "by changing the final number" it is possible to "access some information relating to other reports" and "by expanding the specific section, it is possible to see the "Registry events" of the report contained in the link, which shows a list of users who have downloaded the report. In this case the platform (...) shows in the "name.surname" format the username of a third party to which the report indicated in the link corresponds". This, according to what was represented by the reporter, would make it possible for a logged in user to "enumerate the names of patients who have used the (...) services".

2. The preliminary investigation activity

In relation to what is represented in the report, the Office, with note of the XX prot. n. XX, requested the Company Medical Center s.r., pursuant to art. 157 of the Code, to provide some useful elements for the evaluation of the relevant profiles regarding the protection of personal data and, in relation to this request, the same company, with note dated XX, provided feedback by declaring that:

- “on the basis of a service contract dated XX, the company CB Sistemi s.r.l. (…) ensures the periodic maintenance of the platform https://referti.medicalcentersrl.it/Account/LogOn?ReturnUrl=%2f which it itself designed to serve the needs of the Data Controller company. After careful evaluation of the relationships between the parties on XX the parties finalized an agreement which provides pursuant to art. 28 of EU Reg. 2016/679 that the company CB Sistemi S.r.l. operates as Data Processor";

- "CB Sistemi technicians (...) found that the application, due to a bug, displayed a small part of the data relating to acceptances made out to a user other than the one logged in; in particular, the register of the operations performed was visible, in which the user name used to access the website appeared (consisting of name.surname), as well as the date and time of download of the invoice files";

- "absolutely no personal data or other information from other users has ever been visible nor has it been possible to download invoices or reports from other users";

- "regarding the complaint, the problem was promptly resolved on the XX day at approximately 4.50 pm and this information was also hidden from those who were not authorized to see it";

- "following the investigation launched around the complainant's access, the Data Controller was (...) able to ascertain the following:

to. the attempt to access the platform by Mr. XX concerned the download operations of a single natural person. CB Sistemi, to the questions posed by the DPO, confirms on XX (...) that "Mr. XX did not have access to particular or sensitive data of interested parties or to the type of services requested". Although Mr. XX attempted access on the XX to the file XX, XX, XX, XX, and on the day XX Acceptance n°: XX, CB Sistemi explains that "from more in-depth checks, of the acceptances to which Mr. XX had access, only the XX of the XX belongs to a natural person, the rest of the acceptances are related to Occupational Medicine and therefore associated with the company name of a company. Therefore Mr. XX was able to observe the download data of only one natural person”;

b.although, at present, Mr. XX knows the name and surname of the person who downloaded the report XX on XX (without being aware of its contents (...)), this information does not allow him to identify unmistakable a person, given the possible cases of homonymy;

c. the unique code assigned to the patient is a progressive data that is automatically generated upon acceptance and does not allow third parties to trace the patient and the service.

d. on the application side, the software implements the most popular security tools such as Microsoft's mvc form authentication to securely authenticate users accessing the website, antiforgery token to prevent false cross-site request attacks. Access to resources is also differentiated based on the role assigned to the user.

And. it is good to keep in mind that this wording is only a notification log of the start of the procedure; it absolutely does not mean that the user has downloaded the file in question, as the system recognizes that the user is not authorized and immediately redirects the browser to an error page";

- "Mr. XX's access, although illicit, resulted in a low impact as it actually had no effect on the services and no material or reputational consequences on the interested party (...)".

In support of what has been declared, the owner has attached some documents containing "Appointment of data controller for software maintenance and assistance services", "Declaration of GDPR conformity" of CB Sistemi s.r.l., the Technical Report of CB Sistemi s.r.l., "Instruction-management violation and notification to the Guarantor", "Analysis of data breach incident" by CB Sistemi s.r.l., as well as the notification to the Guarantor of violation of personal data, from which it appears that, what measures were adopted following the violation "the company CB Sistemi s.r.l. has (...) hidden the register of operations on the reports from those who were not authorized to deal with its contents; as proof of this, no other download attempts by Mr. XX have been recorded since that date".

In relation to what was communicated by the Medical Center s.r.l. company, the Office, with deed of XX, prot. n. XX, has initiated, pursuant to art. 166, paragraph 5, of the Code, a procedure for the adoption of the measures referred to in the art. 58, par. 2 of the Regulation, towards the Company, inviting it to produce defensive writings or documents to the Guarantor or to request to be heard by the Authority (art. 166, paragraphs 6 and 7, of the Code, as well as art. 18, paragraph 1, law no. 689 of 24 November 1981). Following what emerged, in fact, the Office considered that the Medical Center s.r.l. company, at the time of reporting, had carried out processing of personal data in violation of the basic principles of processing referred to in articles. 5, par. 1, letter. f), 25, par. 1 and 32 of the Regulation and has, therefore, complained to the same Company, pursuant to art. 166, paragraph 5, the aforementioned violation.

With an email from the 20th century, the Medical Center s.r.l. sent its defense briefs, in which, in particular, in addition to what has already been stated, it was stated that:

- "according to what the CB Sistemi company reports (...): "1) The software, installed in companies throughout the national territory starting from the XX, was developed in compliance with the GDPR regulations and is monitored by specialized technicians who are responsible for carrying out updates and corrective, adaptive and evolutionary maintenance actions. In particular, following the entry into force of the GDPR privacy legislation in the 20th century, the software, starting from the StudioLab 4.25 version, has been updated with evolutionary maintenance actions to be in compliance with the mandatory regulatory obligations, as per the GDPR compliance delivered to our customers. 2) Before the complaint sent to the Guarantor, none of our Customers who use StudioWeb reported problems similar to the one highlighted by Mr. XX. 3) The actions undertaken by Mr. XX are dictated by a knowledge of specific skills, predict a desire to improperly acquire particular data and are therefore believed to be bordering on the lawful. The particular action that led to the flaw consists in manipulating the URL to access a specific page of the site (which allows you to view the data of an acceptance) in the part where the acceptance number is specified, modifying it with another value, to in order to attempt to access information that is not yours. This illicit operation was foreseen by our developer during the testing phase and appropriately blocked. The flaw was created following a functionality update of the portal which provided the possibility of viewing the register of operations performed. The developer who introduced this functionality did not foresee the possibility of illicit access through manipulation of the URL. Note that only this log was visible via this form of attack”;

“based on what was reported by the company CB Sistemi, following the verification of the logs, it was found that Mr. XX using the account of his grandmother Mrs. XX (based on what was declared ..) could certainly have access to the access register of a section of the platform, but in a far from immediate way since:

• the user had to have specific skills in software programming and development (...);

• the user had to repeat the attempt several times to enter the acceptance area of the program (…)”;

“on XX at around 10.40 pm Mr. XX, using Ms. XX's account, attempts several times to access the acceptances of the following users, represented with the unique code shown below: XX, XX, XX, XX, XX, XX. The following day he tries the same access on acceptance no.: XX. In addition to this, further failed download attempts and non-own documents are reported: for the day XX reports XX, XX, XX, XX, XX, XX, XX (does not exist), XX, XX, XX, XX (does not exist ), XX (non-existent), XX (non-existent), XX (non-existent), XX, XX, XX; invoices XX, XX, XX, XX, XX; for the XX day no download attempts. The access attempts made it possible to actually observe, on XX, the download data of a single natural person (code XX)”;

in relation to the malicious or negligent nature, "Medical Center, not having internal knowledge and specific skills in terms of programming to manage the online reporting platform, chooses to outsource risks connected to development and maintenance, however adopting the following precautions (...): A. Choose a qualified supplier with experience in the sector; B. Choose a product declared by the supplier to be GDPR Compliant; C. Formalize the guarantee agreement for the protection of personal data pursuant to art. 28 GDPR and obtain Declaration of Conformity to the GDPR and Technical Report of the Measures to guarantee the protection and security of personal data pursuant to art. 32 of EU Reg. 2016/679; D. Maintain, following the launch of the software, a support contract with the supplier to ensure the security standard over time and the generation of releases that allow the company to have a product that is always effective in terms of both functionality and security";

“the bug was generated during the software update and was not present at the time of purchase”;

“the company CB systems s.r.l. (...) he first took steps to resolve the problem and on day XX at 4.50 pm he hid the register of operations on the reports from those who were not authorized to deal with the contents; as proof of this, no other download attempts by Mr. have been recorded since that date. XX and third parties. On dayXX at 4.50 pm (by correcting the bug), the log of operations on the reports is hidden from those who were not authorized to process the contents. The organization intends to plan periodic checks to detect any system vulnerabilities in good time; in addition to this, the staff and strategic suppliers who operate as data controllers will be trained so that they can, according to shared criteria, intercept incidents and manage data breach classification and management procedures more promptly".

The supplier's technical report illustrating the internal software development procedures as well as the "Document collecting the privacy policies of Medical Center s.r.l." was attached to the aforementioned declarations.

Having said this, in relation to what was communicated by the Medical Center Company, the Office, with

act of the XX, prot. n. XX, has initiated, pursuant to art. 166, paragraph 5, of the Code, a procedure for the adoption of the measures referred to in art. 58, par. 2 of the Regulation, towards the C.B. Company. Sistemi s.r.l. inviting it to produce defensive writings or documents to the Guarantor or to request to be heard by the Authority (art. 166, paragraphs 6 and 7, of the Code, as well as art. 18, paragraph 1, law no. 689 of 24 November 1981). Following what emerged, in fact, the Office considered that the C.B. Company. Sistemi s.r.l., at the time of reporting, as data controller, did not comply with the obligations set out in the art. 32 of the Regulation, having not adopted technical and organizational measures suitable to guarantee a level of security adequate to the risks presented by the processing; this, in violation of the basic principles of processing referred to in the articles. 5, par. 1, letter. f) and 32 of the Regulation.

With an email from the 20th century, the C.B. Company Sistemi s.r.l. submitted its defense briefs, in which, in particular, it was stated that:

- “the event in question was an opportunity to draw on a series of elements that have been and will be actively taken into consideration by CB Sistemi in future actions and behaviour. In this sense, the company intends to undertake, and has already partly started, a process of improvement in its structure, to offer customers and final recipients an increasingly safe and high-performance product and also, thanks to the indications it will be able to draw from from this procedure, which is more compliant with the dictates of the GDPR. In this sense, in the coming periods it intends to:

1. make pseudonymisation of user access mandatory for all healthcare facilities. To date, the licensed software gives the licensee the option, during the configuration phase, to have their users access the online report via: username + password; or acceptance number + PIN. CB Sistemi is already modifying the program by making pseudonymisation mandatory, in compliance with the provisions of the Guarantor and the Code of Conduct of the Veneto Region;

2. implement a strong two-factor authentication system by adding the receipt of a confirmation SMS to the password verification;

3. undertake an ISO 27001 certification process; 27005 and 9001;

4. designate a Data Protection Officer;

5. undertake an internal training course focused on both data protection and cyber security and make checks constant";

- in relation to the roles assumed, respectively, by the companies Medical Center s.r.l. and by CB Sistemi s.r.l. in the processing of personal data of users of the healthcare facility, "the company CB Sistemi has as its corporate purpose the activity of "wholesale and retail trade as well as the rental of electronic machines, stationery, office materials and furniture; software development, implementation and distribution activities; assistance and maintenance activities for software and electronic office machines \[...\]";

- “in this context, in 2005 the company created:

- the StudioLAB software: which consists of a management software licensed for use by healthcare facilities and downloaded by them onto their servers. Studio LAB contains the patients' personal, accounting and health data and operates only on the LAN network of the licensed structure;

- the StudioWEB web portal: also licensed for use and installed on the customer's servers, which allows online reporting activities. The platform does not contain personal, accounting or health data but allows access to the data placed on StudioLAB. This is also a customer portal (in the case under consideration today: Medical Center) installed on the servers of the healthcare facility. The patient who wants to download their report online only accesses StudioWEB, without having access to the data contained in StudioLAB. And in fact, as will be better explained, in the episode in question, the access relates to a register of log files placed on StudioWEB, and not to personal or health data placed on StudioLAB";

- "both software are granted by CB Sistemi, under a paid user license to its customers who download them onto their systems, with the technical requirement that they must be two different servers that communicate: StudioLAB on the LAN network and StudioWEB on another server with an encrypted connection and protected by a firewall”;

- "by virtue of the user license agreements, CB Sistemi does not have access to the licensee's systems in any way";

- "the programs are marketed throughout the national territory and are constantly monitored by specialized technicians who carry out updates or corrective, adaptive and evolutionary maintenance activities";

- “Medical Center purchased the two programs under license in 2018, which since then have operated exclusively on the customer's IT systems”;

- "in 2018 the user license was integrated with a separate software maintenance and assistance service contract";

- "the software maintenance activity (adaptive, evolutionary or corrective) consists in the release by CB Sistemi of patches to be downloaded by the customer onto their systems";

- "in particular corrective maintenance: "includes interventions on programs carried out by CB Sistemi srl in order to correct malfunctions or program errors (Bug) on the basis of tests and reports received from the Client". Assistance is also guaranteed, provided by CB Sistemi via telephone or electronic means, in this case having access (limited to the request for intervention) to the customer's systems and being able to view the data";

- "legally qualifying the roles assumed by the parties, as regards the case in question, it is highlighted that: Medical Center Srl has purchased a license to use the StudioLab program and one of StudioWeb, downloading the software onto its systems and taking on the role of Data Controller of the personal data processed through the program and the portal. CB Sistemi Srl limited itself to transferring the user license, not assuming any role in relation to the personal data processed by Medical Center on its portal. In 2018 the parties also stipulated a separate software maintenance and assistance contract";

- “the two obligations must be distinguished:

• for the maintenance service, CB Sistemi does not play any role (i.e. it is neither owner, nor appointed, nor responsible pursuant to art. 28 of the GDPR) in the processing of personal data, which are processed solely by the Medical Center, limiting itself to the release of patches,

• for the "assistance" service, CB Sistemi may have access to the personal data processed by the Medical Center where it is not a matter of telephone assistance, but telematic assistance and only and exclusively "on call":

- "in this sense, only for the assistance activity, Medical Center has appointed CB Sistemi as responsible for the processing pursuant to art. 28 GDPR”; considering the definition of "processing" (art. 4, par. 1, n. 2) "CB Sistemi does not carry out any of these activities in the context of software development or maintenance activities";

- “CB Sistemi, in the context of software development or maintenance activities, does not process personal data on behalf of the data controller (Medical Center). On the other hand, Medical Center and CB Sistemi had regulated the relationships and responsibilities since the signing of the 2018 contract which, it is true, has legal effect only between the parties, but can help the Authority to better define the roles in concrete terms. employed in data processing. In this sense, the agreement states that CB Sistemi undertakes to carry out "corrective maintenance" which "includes interventions on programs carried out by CB Sistemi srl in order to correct malfunctions or program errors (Bug) on the basis of tests is the reports received from the Customer"";

- "it is excluded that "health data" can be obtained from the "Event Register" pursuant to art. 4 par. 1 sub 15 GDPR, given that the document number displayed as below will be better explained, does not contain any reference to the state of health nor to the services used by the user (interested party) at the Medical Center";

- “from this it follows that art 83, par 2. letter g) GDPR cannot, and above all must not, be applied to the case in question. The reference legislation, still applicable, is the GPDP Provision of 19 November 2009, n. 36 (web doc. no. 1679033) “Guidelines on online reports”, deemed compatible with the current GDPR”;

- "the representative complained that by accessing his grandmother's online report, he would have done some tests to modify the last part of the URL, viewing a database containing some names, access times and a number, from XX traced back to a report number. The data indicated, due to the context in which they were found (site of a healthcare facility), were considered by the Authority to be special data processed in violation of the art. 5 and 25 GDPR”;

- "in reality other elements must be considered: the structure, indicating the possibility of downloading one's reports online, suggests to the interested party who intends to use the telematic procedure, their name.surname as username (..). This is a mere suggestion and the field can be freely modified by the user. Therefore, it is a mere conjecture that the name present in the database seen by XX actually belongs to a user of the clinic and therefore a recipient of medical services. Added to this is that the mere "name" data, not associated with further elements such as at least tax code, place and date of birth, does not in any way allow us to identify a specific or even abstractly determinable natural person";

- "the event reported by Mr. XX must be largely downplayed and declassified. Summarizing what he said: on XX XX he entered the Medical Center online application instead of the interested party (the grandmother), who had used the services, XX, in order to download his report online. Once the operation was successfully completed, he artfully and abusively began (29 times and on two consecutive days) to make attempts to access the Medical Center computer system. What the reasons were is unclear. Based on XX's access logs, it was possible to verify that he was able to view the following positions: XX; XX; XX; XX; XX (for the second time); XX the XX and XX the XX. The XX logs all correspond to Park Hotel Imperial Srl (which evidently uses Medical Center for occupational medicine) and are not personal data; the log of, which is reported again, is the only one referring to a natural person (such as XX, a widely used name)";

- “(…) the log “File Registry” contains: Username used for access (which may correspond to the patient's name.surname, but may be that of a third party or even an imaginary name); Date and time of download of the invoice file";

- “Mr. XX did not have access to information on personal details or other particular or accounting data of other users; was unable to download any files, nor invoices, nor reports from users other than Mrs. XX. And therefore... despite having stubbornly made 29 access attempts... the number of potential interested parties in disclosing the username (natural person) is only and uniquely 1!”;

- “the username alone, in the absence of other additional information and without the use of further elements accessible only to the Data Controller (Medical Center) which the reporting party (XX) has never had available, does not allow identification or make a subject (interested) precisely identifiable by distinguishing him from all the others":

- "the duration of the violation is limited to a time frame limited to approximately 30 hours (time elapsed between the report sent (...) by Mr. XX to Medical Center, the immediate activation of the latter towards CB Sistemi, and the more than timely resolution of the bug by CB Sistemi technicians)”;

- "the reported flaw (...) led Mr. XX to view only 2 (two) profiles different from those of his grandmother, of which 1 profile (one) only referable to a user name (name.surname) apparently attributable to a person physical, which however remains de facto unidentifiable pursuant to the provisions of the art. 4, paragraph 1 sub 1, GDPR, and the other (user profile) referring to the company name of a company and therefore certainly extra regulatory reference";

- "the data can (...) be considered as personal first of all when it concerns an "identified" person (see for example CJEU 30/05/2013 C-342/12, with reference to information on income and working hours, and CJEU C-101/01 with reference to associated names with respect to telephone numbers). In this case, the user name (name.surname) displayed by the XX is only pigeonholed into a string called "Event log" from which it could only be deduced that this user downloaded an (undefined) document on a certain (precise) date . No reference to the content of the document, nor to the type of document was present on the URL, which the XX maliciously manipulated to see what could come out of it";

- "the XX only displayed a document number without any indication of its nature or type (invoice/report/other...) and even without any possibility of linking to open it and read its contents";

- "therefore clarified that a person is considered identified/identifiable if the "information" referred to him, due to its content, purpose or effect, makes him clearly distinguishable from others, not exclusively through his name, but possibly also with others means (WP29, opinion 4/2007 on the concept of personal data), it is clear that what was viewed by the reporting party (...) did not cause any risk to the rights and freedoms of the interested party in question (only 1) of which XX nothing has seen, if not a username entered in an event log”;

- "the statement according to which "name and surname may be sufficient to identify a person and infer possible health problems" must therefore be rejected in the specific case". None of this can be derived from the data displayed by the reporting party, given that an alphanumeric reference indicating a document, the date of access and download and a user name, in themselves, not only do not allow a natural person to be identified/identifiable with precision, but do not even give any indication of the state of health and/or illness of the same";

- "in the matter under examination today, any reference to the category of particular data relating to the state of health must therefore be excluded (pursuant to art 83 par 2 letter g, GDPR), since at most we can hypothesize a display of a common data (name. surname=username) without any other additional information useful for identifying the real natural person to whom such data refers";

- "even if we wanted, only by hypothesis, to configure the case in question from this perspective, we could at most hypothesize a "Confidentiality breach" or the leakage of personal data from the cognitive space recognized only to authorized subjects";

- "the technical and organizational measures adopted, both by the Data Controller itself and by CB Sistemi for the part of its competence, have in fact prevented any other access by the reporting party to other databases from which additional information could be obtained that could allow for precise identification which natural person corresponded to the username displayed, and above all which services/exams they had requested from Medical Center!”;

- “the conduct of CB Sistemi must also be taken into account. It was promptly and absolutely collaborative and transparent both towards the Data Controller (Medical Center), both towards the DPO (Dr. XX) and towards the Guarantor himself. The corrective actions were adopted by CB Sistemi precisely and completely resolved the reported bug and all this within a few hours of receiving the report from the Medical Center. The violation (flaw) emerged following a requested evolutionary update carried out by CB Sistemi for which neither Medical Center, nor any other customer, has ever raised (before the XX email from Mr. XX) any dispute or report in this regard ”.

In the alternative request to impose a sanction as low as possible, it was finally underlined that "a) the violation is of a formal nature; b) no prejudice occurred to the interested parties involved (only 1, however); c) the flaw was only online for a few hours; d) the good faith demonstrated and the attitude demonstrated by CB Sistemi srl is demonstrated, evident and peaceful; e) the disputed fact is completely harmless".

The hearing requested by C.B. took place on XX. Sistemi s.r.l. in which it was specified that:

- "the duration of the flaw was limited, as the Company intervened promptly to resolve the problem that had made it possible for only one user name to be displayed";

- “the method of access to the system was chosen by the owner; the C.B. Company Sistemi s.r.l. had in fact proposed an alternative access system via acceptance number and pin, instead of name.surname; if, in fact, the owner had accepted this alternative method, even in the event of a flaw, a name.surname would not have been displayed but an acceptance number";

- "the flaw that made access by third parties possible occurred in a second phase compared to the moment of supply of the software, as it occurred following an evolutionary update, caused by an error by the developer, which had not foreseen the blocking of access by non-legitimate subjects to the specific functionality".

3. Outcome of the preliminary investigation

Having taken note of what is represented by the Company, it is noted that:

- “personal data” means “any information relating to an identified or identifiable natural person (“data subject”)”; for "data relating to health" "personal data relating to the physical or mental health of a natural person, including the provision of healthcare, which reveal information relating to his or her state of health" (art. 4, par. 1, nos. 1 and 13 of the Regulation; see also Council no. 35);

- it is noted that the owner can entrust processing "to data controllers who present sufficient guarantees to implement adequate technical and organizational measures so that the processing satisfies the principles of the Regulation", also for the security of the processing, taking into account account of the specific risks deriving from it (articles 28, paragraphs 1, 24 and 32 of the Regulation; see also Council no. 81). In this case "the processing by a manager is governed by a contract or other legal act in accordance with Union or Member State law, which binds the manager to the owner and which stipulates the subject matter regulated and the duration of the processing , the nature and purpose of the processing, the type of personal data and the categories of interested parties, the obligations and rights of the owner" (art. 28, par. 3 of the Regulation);

- personal data must be "processed in a manner that guarantees adequate security (...), including protection, through appropriate technical and organizational measures, from unauthorized or unlawful processing and from accidental loss, destruction or damage" (principle of «integrity and confidentiality»)” (art. 5, par. 1, letter e f) of the Regulation).

- the data controller and data controller are required to implement "adequate technical and organizational measures to guarantee a level of security appropriate to the risk", taking into account, among other things, "the nature, object, context and of the purposes of the processing, as well as the risk of varying probability and severity for the rights and freedoms of natural persons", highlighting that "in evaluating the adequate level of security, special account is taken of the risks presented by the processing which derive in particular from the destruction, loss, modification, unauthorized disclosure or access, in an accidental or illegal manner, to personal data transmitted, stored or otherwise processed” (art. 32, par. 1 and 2). In any case, the aforementioned subjects are required to adopt procedures "to test, verify and regularly evaluate the effectiveness of the technical and organizational measures in order to guarantee the security of the processing" (art. 32, par. 1, letter d) of the Regulation).

4. Conclusions.

In light of the assessments mentioned above, taking into account the declarations made by the data controller during the investigation and considering that, unless the fact constitutes a more serious crime, anyone, in proceedings before the Guarantor, falsely declares or certifies information or circumstances or produces false deeds or documents and is liable pursuant to art. 168 of the Code "False statements to the Guarantor and interruption of the execution of the tasks or exercise of the powers of the Guarantor", the elements provided by the data controller in the defense statement referred to above and during the hearing, although worthy of consideration, do not allow us to fully overcome the findings notified by the Office with the aforementioned act of initiation of the proceedings, since, moreover, none of the cases provided for by the art. 11 of the Guarantor's regulation no. 1/2019.

In fact, in highlighting, as repeatedly recalled by the Authority, that the provision of a health care service referring to a person specifically indicated by the user name (name.surname) constitutes information attributable to the notion of health data , pursuant to art. 4, par. 1, no. 15 of the Regulation and of the Council. n. 35 (see, ex multis, Provision 29 September 2021 n. 358, web doc. n. 9720448), it was ascertained that the reporting party, as an unauthorized third party, had the opportunity to view personal data relating to the health contents in the acceptance registered to another interested party through the platform available to patients for downloading reports, due to a bug in the application. In this regard, it is noted that, in light of the principles highlighted above, the aforementioned application should have been subject to testing and acceptance by the Company, also following the update of the portal's functionality. In fact, the vulnerability of the system - which could have allowed third parties to access information relating to acceptances registered to other interested parties, by manipulating the access URL to a specific page of the site - had been foreseen in the initial testing phase and appropriately blocked, but it was not considered following an update operation of the same portal, aimed at introducing the functionality which provided the possibility of viewing the register of operations performed (see the declarations present in the XX document "The violation (flaw) emerged following a requested evolutionary update carried out by CB Sistemi for which neither Medical Center, nor any other customer, has ever raised (before the XX email from Mr. XX) any dispute or report in this regard").

Therefore, taking into account the nature of the data being accessed and the high risks deriving from their possible acquisition by third parties, in relation to the aforementioned new functionality, introduced without having foreseen the possibility of alteration of the URL by third parties, and without , therefore, having carried out the relevant acceptance test, it is believed that the Company CB Sistemi s.r.l. has not adopted suitable measures to guarantee a level of security adequate to the risk (art. 5, par. 1, letter f), and 32 of the Regulation to "ensure confidentiality, integrity, availability and resilience on a permanent basis of processing systems and services”).

In fact, although the data controller, who determines the purposes and methods of data processing, bears a "general responsibility" for the processing carried out (see art. 5, par. 2, so-called "accountability", and 24 of the Regulation), even when these are carried out by other subjects "on its behalf" (Cons. n. 81, articles 4, point 8), and 28 of the Regulation), the Regulation has regulated the obligations and other forms of cooperation to which the data controller is required and the scope of the related responsibilities (see articles 30, 32, 33, paragraphs 2, 82 and 83 of the Regulation). As mentioned above, art. 32 of the Regulation establishes that, not only the owner, but also the data controller, within the scope of his/her competences and tasks delegated by the owner, "taking into account the state of the art and the implementation costs, as well as the nature, of the 'object of the context and purposes of the processing, as well as the risk of varying probability and severity for the rights and freedoms of natural persons" implements "adequate technical and organizational measures to guarantee a level of security appropriate to the risk" and that “in assessing the adequate level of security, special account is taken of the risks presented by the processing which derive in particular from the destruction, loss, modification, unauthorized disclosure or access, in an accidental or illegal manner, to data personal data transmitted, stored or otherwise processed".

We therefore note the illicit nature of the processing of personal data carried out by CB Sistemi s.r.l for having carried out processing in violation of the principle of "integrity and confidentiality" referred to in art. 5, par. 1, letter. f) of the same Regulation and of the obligations referred to in the art. 32, par. 1, of the Regulation, as described above.

In this context, considering, in any case, that the conduct has exhausted its effects, the conditions for the adoption of the corrective measures referred to in the art. 58, par. 2, of the Regulation.

Having said this, taking into account that:

- from the findings of the documents, the episode appears to be an isolated event and, from a psychological point of view, free of malice, determined by the intentional behavior of the reporter; the responsibility is attributable to a degree of guilt to be assessed as slight in light of the elements that characterize the episode;

- the violation concerned data on the health of a single interested party, but did not involve medical reports;

- the Company intervened promptly to mitigate the effects of the violation that occurred, as well as to prevent the recurrence of similar events;

- the data controller has proven to be promptly and extremely collaborative throughout the investigation and procedural phase and there are no previous relevant violations committed by the data controller;

the circumstances of the specific case lead to classify it as a "minor violation", pursuant to the cons. 148 of the Regulation and the “Guidelines regarding the application and provision of administrative pecuniary sanctions for the purposes of Regulation (EU) no. 2016/679”, adopted by the “Art. 29 Working Group” on 3 October 2017, WP 253 and endorsed by the European Data Protection Committee with the “Endorsement 1/2018” of 25 May 2018. It is believed, therefore, in relation to the case in question, it is sufficient to warn the data controller pursuant to the articles. 58, par. 2, letter. b), and 83, par. 2, of the Regulation, for having violated the articles. 5, par. 1, letter. f), and 32 of the Regulation.

Finally, it is noted that the conditions set out in art. 17 of Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

It is also believed that the additional sanction of publication of this provision on the Guarantor's website, provided for by art., should be applied. 166, paragraph 7, of the Code and art. 16 of the Guarantor Regulation n. 1/2019, also in consideration of the type of personal data subject to unlawful processing.

ALL THIS CONSIDERING THE GUARANTOR

a) declares, pursuant to art. 57, par. 1, letter. f), of the Regulation, the unlawfulness of the processing carried out by the Company CB Sistemi s.r.l., with registered office in via F. Hayez n. 4, Venice, (C.F./P. Iva 03941880274);

b) pursuant to art. 58, par. 2, letter. b), of the Regulation, warns the Company CB Sistemi s.r.l., as responsible for the processing in question, for having violated the articles. 5, par. 1, letter. f) and 32 of the Regulation, as described above;

c) believes that the conditions set out in the art. 17 of Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

Pursuant to the articles. 78 of the Regulation, 152 of the Code and 10 of Legislative Decree no. 150/2011, it is possible to lodge an appeal against this provision before the ordinary judicial authority, under penalty of inadmissibility, within thirty days from the date of communication of the provision itself or within sixty days if the appellant resides abroad.

Rome, 30 November 2023

PRESIDENT
Stanzione

THE SPEAKER
Ghiglia

THE GENERAL SECRETARY
Mattei

\[doc. web no. 9973790\]

Provision of 30 November 2023

Register of measures
n. 556 of 30 November 2023

THE GUARANTOR FOR THE PROTECTION OF PERSONAL DATA

IN today's meeting, which was attended by prof. Pasquale Stanzione, president, Prof. Ginevra Cerrina Feroni, vice-president, Dr. Agostino Ghiglia and the lawyer. Guido Scorza, members and the councilor. Fabio Mattei, general secretary;

HAVING REGARD to Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 /CE, “General Data Protection Regulation” (hereinafter “Regulation”);

HAVING REGARD TO Legislative Decree 30 June 2003, n. 196 containing "Code regarding the protection of personal data, containing provisions for the adaptation of national law to Regulation (EU) 2016/679 of the European Parliament and of the Council, of 27 April 2016, relating to the protection of natural persons with regard to the processing of personal data, as well as the free circulation of such data and which repeals Directive 95/46/EC” (hereinafter “Code”);

GIVEN Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor for the protection of personal data, approved with resolution no. 98 of 4/4/2019, published in the Official Gazette. n. 106 of 8/5/2019 and in www.gpdp.it, doc. web no. 9107633 (hereinafter “Guarantor Regulation no. 1/2019”);

HAVING SEEN the documentation in the documents;

GIVEN the observations formulated by the Secretary General pursuant to art. 15 of the Guarantor's Regulation no. 1/2000 on the organization and functioning of the office of the Guarantor for the protection of personal data, in www.gpdp.it, doc. web no. 1098801;

SPEAKER Dr. Agostino Ghiglia;

PREMISE

1. Reporting

The Authority received a report from Mr. XX concerning the reporting methods used by the Medical Center s.r.l. company. In particular, it was represented that "the platform offers a valid link to a report" but "by changing the final number" it is possible to "access some information relating to other reports" and "by expanding the specific section, it is possible to see the "Registry events" of the report contained in the link, which shows a list of users who have downloaded the report. In this case the platform (...) shows in the "name.surname" format the username of a third party to which the report indicated in the link corresponds". This, according to what was represented by the reporter, would make it possible for a logged in user to "enumerate the names of patients who have used the (...) services".

2. The preliminary investigation activity

In relation to what is represented in the report, the Office, with note of the XX prot. n. XX, requested the Company Medical Center s.r., pursuant to art. 157 of the Code, to provide some useful elements for the evaluation of the relevant profiles regarding the protection of personal data and, in relation to this request, the same company, with note dated XX, provided feedback by declaring that:

- “on the basis of a service contract dated XX, the company CB Sistemi s.r.l. (…) ensures the periodic maintenance of the platform https://referti.medicalcentersrl.it/Account/LogOn?ReturnUrl=%2f which it itself designed to serve the needs of the Data Controller company. After careful evaluation of the relationships between the parties on XX the parties finalized an agreement which provides pursuant to art. 28 of EU Reg. 2016/679 that the company CB Sistemi S.r.l. operates as Data Processor";

- "CB Sistemi technicians (...) found that the application, due to a bug, displayed a small part of the data relating to acceptances made out to a user other than the one logged in; in particular, the register of the operations performed was visible, in which the user name used to access the website appeared (consisting of name.surname), as well as the date and time of download of the invoice files";

- "absolutely no personal data or other information from other users has ever been visible nor has it been possible to download invoices or reports from other users";

- "regarding the complaint, the problem was promptly resolved on the XX day at approximately 4.50 pm and this information was also hidden from those who were not authorized to see it";

- "following the investigation launched around the complainant's access, the Data Controller was (...) able to ascertain the following:

to. the attempt to access the platform by Mr. XX concerned the download operations of a single natural person. CB Sistemi, to the questions posed by the DPO, confirms on XX (...) that "Mr. XX did not have access to particular or sensitive data of interested parties or to the type of services requested". Although Mr. XX attempted access on the XX to the file XX, XX, XX, XX, and on the day XX Acceptance n°: XX, CB Sistemi explains that "from more in-depth checks, of the acceptances to which Mr. XX had access, only the XX of the XX belongs to a natural person, the rest of the acceptances are related to Occupational Medicine and therefore associated with the company name of a company. Therefore Mr. XX was able to observe the download data of only one natural person”;

b.although, at present, Mr. XX knows the name and surname of the person who downloaded the report XX on XX (without being aware of its contents (...)), this information does not allow him to identify unmistakable a person, given the possible cases of homonymy;

c. the unique code assigned to the patient is a progressive data that is automatically generated upon acceptance and does not allow third parties to trace the patient and the service.

d. on the application side, the software implements the most popular security tools such as Microsoft's mvc form authentication to securely authenticate users who access the website, antiforgery token to prevent false cross-site request attacks. Access to resources is also differentiated based on the role assigned to the user.

And. it is good to keep in mind that this wording is only a notification log of the start of the procedure; it absolutely does not mean that the user has downloaded the file in question, as the system recognizes that the user is not authorized and immediately redirects the browser to an error page";

- "Mr. XX's access, although illicit, resulted in a low impact as it actually had no effect on the services and no material or reputational consequences on the interested party (...)".

In support of what has been declared, the owner has attached some documents containing "Appointment of data controller for software maintenance and assistance services", "Declaration of GDPR conformity" of CB Sistemi s.r.l., the Technical Report of CB Sistemi s.r.l., "Instruction-management violation and notification to the Guarantor", "Analysis of data breach incident" by CB Sistemi s.r.l., as well as the notification to the Guarantor of violation of personal data, from which it appears that, as measures adopted following the violation, "the company CB Sistemi s.r.l. has (...) hidden the register of operations on the reports from those who were not authorized to deal with its contents; as proof of this, no other download attempts by Mr. XX have been recorded since that date".

In relation to what was communicated by the Medical Center s.r.l. company, the Office, with deed of XX, prot. n. XX, has initiated, pursuant to art. 166, paragraph 5, of the Code, a procedure for the adoption of the measures referred to in art. 58, par. 2 of the Regulation, towards the Company, inviting it to produce defensive writings or documents to the Guarantor or to request to be heard by the Authority (art. 166, paragraphs 6 and 7, of the Code, as well as art. 18, paragraph 1, law no. 689 of 24 November 1981). Following what emerged, in fact, the Office considered that the Medical Center s.r.l. company, at the time of the report, had carried out processing of personal data in violation of the basic principles of processing referred to in articles. 5, par. 1, letter. f), 25, par. 1 and 32 of the Regulation and has, therefore, complained to the same Company, pursuant to art. 166, paragraph 5, the aforementioned violation.

With an email from the 20th century, the Medical Center s.r.l. sent its defense briefs, in which, in particular, in addition to what has already been stated, it was stated that:

- "according to what the CB Sistemi company reports (...): "1) The software, installed in companies throughout the national territory starting from the XX, was developed in compliance with the GDPR regulations and is monitored by specialized technicians who are responsible for carrying out updates and corrective, adaptive and evolutionary maintenance actions. In particular, following the entry into force of the GDPR privacy legislation in the 20th century, the software, starting from the StudioLab 4.25 version, has been updated with evolutionary maintenance actions to be in compliance with the mandatory regulatory obligations, as per the GDPR compliance delivered to our customers. 2) Before the complaint sent to the Guarantor, none of our Customers who use StudioWeb reported problems similar to the one highlighted by Mr. XX. 3) The actions undertaken by Mr. XX are dictated by a knowledge of specific skills, predict a desire to improperly acquire particular data and are therefore believed to be bordering on the lawful. The particular action that led to the flaw consists in manipulating the URL to access a specific page of the site (which allows you to view the data of an acceptance) in the part where the acceptance number is specified, modifying it with another value, to in order to attempt to access information that is not yours. This illicit operation was foreseen by our developer during the testing phase and appropriately blocked. The flaw was created following a functionality update of the portal which provided the possibility of viewing the register of operations performed. The developer who introduced this functionality did not foresee the possibility of illicit access through manipulation of the URL. Note that only this log was visible via this form of attack”;

“based on what was reported by the company CB Sistemi, following the verification of the logs, it was found that Mr. XX using the account of his grandmother Mrs. XX (based on what was declared ..) could certainly have access to the access register of a section of the platform, but in a far from immediate way since:

• the user had to have specific skills in software programming and development (...);

• the user had to repeat the attempt several times to enter the acceptance area of the program (…)”;

“on XX at around 10.40 pm Mr. XX, using Ms. XX's account, attempts several times to access the acceptances of the following users, represented with the unique code shown below: XX, XX, XX, XX, XX, XX. The following day he tries the same access on acceptance no.: XX. In addition to this, further failed download attempts and non-own documents are reported: for the day XX reports XX, XX, XX, XX, XX, XX, XX (does not exist), XX, XX, XX, XX (does not exist ), XX (non-existent), XX (non-existent), XX (non-existent), XX, XX, XX; invoices XX, XX, XX, XX, XX; for the XX day no download attempts. The access attempts made it possible to actually observe, on XX, the download data of a single natural person (code XX)”;

in relation to the malicious or negligent nature, "Medical Center, not having internal knowledge and specific skills in terms of programming to manage the online reporting platform, chooses to outsource risks connected to development and maintenance, however adopting the following precautions (...): A. Choose a qualified supplier with experience in the sector; B. Choose a product declared by the supplier to be GDPR Compliant; C. Formalize the guarantee agreement for the protection of personal data pursuant to art. 28 GDPR and obtain Declaration of Conformity to the GDPR and Technical Report of the Measures to guarantee the protection and security of personal data pursuant to art. 32 of EU Reg. 2016/679; D. Maintain, following the launch of the software, a support contract with the supplier to ensure the security standard over time and the generation of releases that allow the company to have a product that is always effective in terms of both functionality and security";

“the bug was generated during the software update and was not present at the time of purchase”;

“the company CB systems s.r.l. (...) he first took steps to resolve the problem and on day XX at 4.50 pm he hid the register of operations on the reports from those who were not authorized to deal with the contents; as proof of this, no other download attempts by Mr. have been recorded since that date. XX and third parties. On dayXX at 4.50 pm (by correcting the bug), the log of operations on the reports is hidden from those who were not authorized to process the contents. The organization intends to plan periodic checks to detect any system vulnerabilities in good time; in addition to this, the staff and strategic suppliers who operate as data controllers will be trained so that they can, according to shared criteria, intercept incidents and manage data breach classification and management procedures more promptly".

The supplier's technical report was attached to the aforementioned declarations which illustrates the internal software development procedures as well as the "Collection document of the Medical Center s.r.l. privacy policy".

Having said this, in relation to what was communicated by the Medical Center Company, the Office, with

act of the XX, prot. n. XX, has initiated, pursuant to art. 166, paragraph 5, of the Code, a procedure for the adoption of the measures referred to in art. 58, par. 2 of the Regulation, towards the C.B. Company. Sistemi s.r.l. inviting it to produce defensive writings or documents to the Guarantor or to request to be heard by the Authority (art. 166, paragraphs 6 and 7, of the Code, as well as art. 18, paragraph 1, law no. 689 of 24 November 1981). Following what emerged, in fact, the Office considered that the C.B. Company. Sistemi s.r.l., at the time of reporting, as data controller, did not comply with the obligations set out in the art. 32 of the Regulation, having not adopted technical and organizational measures suitable to guarantee a level of security adequate to the risks presented by the processing; this, in violation of the basic principles of processing referred to in the articles. 5, par. 1, letter. f) and 32 of the Regulation.

With an email from the 20th century, the C.B. Company Sistemi s.r.l. submitted its defense briefs, in which, in particular, it was stated that:

- “the event in question was an opportunity to draw on a series of elements that have been and will be actively taken into consideration by CB Sistemi in future actions and behaviour. In this sense, the company intends to undertake, and has already partly started, a process of improvement in its structure, to offer customers and final recipients an increasingly safe and high-performance product and also, thanks to the indications it will be able to draw from from this procedure, which is more compliant with the dictates of the GDPR. In this sense, in the coming periods it intends to:

1. make pseudonymisation of user access mandatory for all healthcare facilities. To date, the licensed software gives the licensee the option, during the configuration phase, to have their users access the online report via: username + password; or acceptance number + PIN. CB Sistemi is already modifying the program by making pseudonymisation mandatory, in compliance with the provisions of the Guarantor and the Code of Conduct of the Veneto Region;

2. implement a strong two-factor authentication system by adding the receipt of a confirmation SMS to the password verification;

3. undertake an ISO 27001 certification process; 27005 and 9001;

4. designate a Data Protection Officer;

5. undertake an internal training course focused on both data protection and cyber security and make checks constant";

- in relation to the roles assumed, respectively, by the companies Medical Center s.r.l. and by CB Sistemi s.r.l. in the processing of personal data of users of the healthcare facility, "the company CB Sistemi has as its corporate purpose the activity of "wholesale and retail trade as well as the rental of electronic machines, stationery, office materials and furniture; software development, implementation and distribution activities; assistance and maintenance activities for software and electronic office machines \[...\]";

- “in this context, in 2005 the company created:

- the StudioLAB software: which consists of a management software licensed for use by healthcare facilities and downloaded by them onto their servers. Studio LAB contains the patients' personal, accounting and health data and operates only on the LAN network of the licensed structure;

- the StudioWEB web portal: also licensed for use and installed on the customer's servers, which allows online reporting activities. The platform does not contain personal, accounting or health data but allows access to the data placed on StudioLAB. This is also a customer portal (in the case under consideration today: Medical Center) installed on the servers of the healthcare facility. The patient who wants to download their report online only accesses StudioWEB, without having access to the data contained in StudioLAB. And in fact, as will be better explained, in the episode in question, the access relates to a register of log files placed on StudioWEB, and not to personal or health data placed on StudioLAB";

- "both software are granted by CB Sistemi, under a paid user license to its customers who download them onto their systems, with the technical requirement that they must be two different servers that communicate: StudioLAB on the LAN network and StudioWEB on another server with an encrypted connection and protected by a firewall”;

- "by virtue of the user license agreements, CB Sistemi does not have access to the licensee's systems in any way";

- "the programs are marketed throughout the national territory and are constantly monitored by specialized technicians who carry out updates or corrective, adaptive and evolutionary maintenance activities";

- “Medical Center purchased the two programs under license in 2018, which since then have operated exclusively on the customer's IT systems”;

- "in 2018 the user license was integrated with a separate software maintenance and assistance service contract";

- "the software maintenance activity (adaptive, evolutionary or corrective) consists in the release by CB Sistemi of patches to be downloaded by the customer onto their systems";

- "in particular corrective maintenance: "includes interventions on programs carried out by CB Sistemi srl in order to correct malfunctions or program errors (Bug) on the basis of tests and reports received from the Client". Assistance is also guaranteed, provided by CB Sistemi via telephone or electronic means, in this case having access (limited to the request for intervention) to the customer's systems and being able to view the data";

- "legally qualifying the roles assumed by the parties, as regards the case in question, it is highlighted that: Medical Center Srl has purchased a license to use the StudioLab program and one of StudioWeb, downloading the software onto its systems and taking on the role of Data Controller of the personal data processed through the program and the portal. CB Sistemi Srl limited itself to transferring the user license, not assuming any role in relation to the personal data processed by Medical Center on its portal. In 2018 the parties also stipulated a separate software maintenance and assistance contract";

- “the two obligations must be distinguished:

• for the maintenance service, CB Sistemi does not play any role (i.e. it is neither owner, nor appointed, nor responsible pursuant to art. 28 of the GDPR) in the processing of personal data, which are processed solely by the Medical Center, limiting itself to the release of patches,

• for the "assistance" service, CB Sistemi may have access to the personal data processed by the Medical Center where it is not a matter of telephone assistance, but telematic assistance and only and exclusively "on call":

- "in this sense, only for the assistance activity, Medical Center has appointed CB Sistemi as responsible for the processing pursuant to art. 28 GDPR”; considering the definition of "processing" (art. 4, par. 1, n. 2) "CB Sistemi does not carry out any of these activities in the context of software development or maintenance activities";

- “CB Sistemi, in the context of software development or maintenance activities, does not process personal data on behalf of the data controller (Medical Center). On the other hand, Medical Center and CB Sistemi had regulated the relationships and responsibilities since the signing of the 2018 contract which, it is true, has legal effect only between the parties, but can help the Authority to better define the roles in concrete terms. employed in data processing. In this sense, the agreement states that CB Sistemi undertakes to carry out "corrective maintenance" which "includes interventions on programs carried out by CB Sistemi srl in order to correct malfunctions or program errors (Bug) on the basis of tests is the reports received from the Customer"";

- "it is excluded that "health data" can be obtained from the "Event Register" pursuant to art. 4 par. 1 sub 15 GDPR, given that the document number displayed as below will be better explained, does not contain any reference to the state of health nor to the services used by the user (interested party) at the Medical Center";

- “from this it follows that art 83, par 2. letter g) GDPR cannot, and above all must not, be applied to the case in question. The reference legislation, still applicable, is the GPDP Provision of 19 November 2009, n. 36 (web doc. no. 1679033) “Guidelines on online reports”, deemed compatible with the current GDPR”;

- "the representative complained that by accessing his grandmother's online report, he would have done some tests to modify the last part of the URL, viewing a database containing some names, access times and a number, from XX traced back to a report number. The data indicated, due to the context in which they were found (site of a healthcare facility), were considered by the Authority to be special data processed in violation of the art. 5 and 25 GDPR”;

- "in reality other elements must be considered: the structure, indicating the possibility of downloading one's reports online, suggests to the interested party who intends to use the telematic procedure, their name.surname as username (..). This is a mere suggestion and the field can be freely modified by the user. Therefore, it is a mere conjecture that the name present in the database seen by XX actually belongs to a user of the clinic and therefore a recipient of medical services. Added to this is that the mere "name" data, not associated with further elements such as at least tax code, place and date of birth, does not in any way allow us to identify a specific or even abstractly determinable natural person";

- "the event reported by Mr. XX must be largely downplayed and declassified. Summarizing what he said: on XX XX he entered the Medical Center online application instead of the interested party (the grandmother), who had used the services, XX, in order to download his report online. Once the operation was successfully completed, he artfully and abusively began (29 times and on two consecutive days) to make attempts to access the Medical Center computer system. What the reasons were is unclear. Based on XX's access logs, it was possible to verify that he was able to view the following positions: XX; XX; XX; XX; XX (for the second time); XX the XX and XX the XX. The XX logs all correspond to Park Hotel Imperial Srl (which evidently uses Medical Center for occupational medicine) and are not personal data; the log of, which is reported again, is the only one referring to a natural person (such as XX, a widely used name)";

- “(…) the log “File Registry” contains: Username used for access (which may correspond to the patient's name.surname, but may be that of a third party or even an imaginary name); Date and time of download of the invoice file";

- “Mr. XX did not have access to information on personal details or other particular or accounting data of other users; was unable to download any files, nor invoices, nor reports from users other than Mrs. XX. And therefore... despite having stubbornly made 29 access attempts... the number of potential interested parties in disclosing the username (natural person) is only and uniquely 1!”;

- “the username alone, in the absence of other additional information and without the use of further elements accessible only to the Data Controller (Medical Center) which the reporting party (XX) has never had available, does not allow identification or make a subject (interested) precisely identifiable by distinguishing him from all the others":

- "the duration of the violation is limited to a time frame limited to approximately 30 hours (time elapsed between the report sent (...) by Mr. XX to Medical Center, the immediate activation of the latter towards CB Sistemi, and the more than timely resolution of the bug by CB Sistemi technicians)”;

- "the reported flaw (...) led Mr. XX to view only 2 (two) profiles different from those of his grandmother, of which 1 profile (one) only referable to a user name (name.surname) apparently attributable to a person physical, which however remains de facto unidentifiable pursuant to the provisions of the art. 4, paragraph 1 sub 1, GDPR, and the other (user profile) referring to the company name of a company and therefore certainly extra regulatory reference";

- "the data can (...) be considered as personal first of all when it concerns an "identified" person (see for example CJEU 30/05/2013 C-342/12, with reference to information on income and working hours, and CJEU C-101/01 with reference to associated names with respect to telephone numbers). In this case, the user name (name.surname) displayed by the XX is only pigeonholed into a string called "Event log" from which it could only be deduced that this user downloaded an (undefined) document on a certain (precise) date . No reference to the content of the document, nor to the type of document was present on the URL, which the XX maliciously manipulated to see what could come out of it";

- "the XX only displayed a document number without any indication of its nature or type (invoice/report/other...) and even without any possibility of linking to open it and read its contents";

- "therefore clarified that a person is considered identified/identifiable if the "information" referred to him, due to its content, purpose or effect, makes him clearly distinguishable from others, not exclusively through his name, but possibly also with others means (WP29, opinion 4/2007 on the concept of personal data), it is clear that what was viewed by the reporting party (...) did not cause any risk to the rights and freedoms of the interested party in question (only 1) of which XX nothing has seen, if not a username entered in an event log”;

- "the statement according to which "name and surname may be sufficient to identify a person and infer possible health problems" must therefore be rejected in the specific case". None of this can be derived from the data displayed by the reporting party, given that an alphanumeric reference indicating a document, the date of access and download and a user name, in themselves, not only do not allow a natural person to be identified/identifiable with precision, but do not even give any indication of the state of health and/or illness of the same";

- "in the matter under examination today, any reference to the category of particular data relating to the state of health must therefore be excluded (pursuant to art 83 par 2 letter g, GDPR), since at most we can hypothesize a display of a common data (name. surname=username) without any other additional information useful for identifying the real natural person to whom such data refers";

- "even if we wanted, only by hypothesis, to configure the case in question from this perspective, we could at most hypothesize a "Confidentiality breach" or the leakage of personal data from the cognitive space recognized only to authorized subjects";

- "the technical and organizational measures adopted, both by the Data Controller itself and by CB Sistemi for the part of its competence, have in fact prevented any other access by the reporting party to other databases from which additional information could be obtained that could allow for precise identification which natural person corresponded to the username displayed, and above all which services/exams they had requested from Medical Center!”;

- “the conduct of CB Sistemi must also be taken into account. It was promptly and absolutely collaborative and transparent both towards the Data Controller (Medical Center), both towards the DPO (Dr. XX) and towards the Guarantor himself. The corrective actions were adopted by CB Sistemi precisely and completely resolved the reported bug and all this within a few hours of receiving the report from the Medical Center. The violation (flaw) emerged following a requested evolutionary update carried out by CB Sistemi for which neither Medical Center, nor any other customer, has ever raised (before the XX email from Mr. XX) any dispute or report in this regard ”.

In the alternative request to impose a sanction as low as possible, it was finally underlined that "a) the violation is of a formal nature; b) no prejudice occurred to the interested parties involved (only 1, however); c) the flaw was only online for a few hours; d) the good faith demonstrated and the attitude demonstrated by CB Sistemi srl is demonstrated, evident and peaceful; e) the disputed fact is completely harmless".

The hearing requested by C.B. took place on XX. Sistemi s.r.l. in which it was specified that:

- "the duration of the flaw was limited, as the Company intervened promptly to resolve the problem that had made it possible for only one user name to be displayed";

- “the method of access to the system was chosen by the owner; the C.B. Company Sistemi s.r.l. had in fact proposed an alternative access system via acceptance number and pin, instead of name.surname; if, in fact, the owner had accepted this alternative method, even in the event of a flaw, a name.surname would not have been displayed but an acceptance number";

- "the flaw that made access by third parties possible occurred in a second phase compared to the moment of supply of the software, as it occurred following an evolutionary update, caused by an error by the developer, which had not foreseen the blocking of access by non-legitimate subjects to the specific functionality".

3. Outcome of the preliminary investigation

Having taken note of what is represented by the Company, it is noted that:

- “personal data” means “any information relating to an identified or identifiable natural person (“data subject”)”; for "data relating to health" "personal data relating to the physical or mental health of a natural person, including the provision of healthcare, which reveal information relating to his or her state of health" (art. 4, par. 1, nos. 1 and 13 of the Regulation; see also Council no. 35);

- it is noted that the owner can entrust processing "to data controllers who present sufficient guarantees to implement adequate technical and organizational measures so that the processing satisfies the principles of the Regulation", also for the security of the processing, taking into account account of the specific risks deriving from it (articles 28, paragraphs 1, 24 and 32 of the Regulation; see also Council no. 81). In this case "the processing by a manager is governed by a contract or other legal act in accordance with Union or Member State law, which binds the manager to the owner and which stipulates the subject matter regulated and the duration of the processing , the nature and purpose of the processing, the type of personal data and the categories of interested parties, the obligations and rights of the owner" (art. 28, par. 3 of the Regulation);

- personal data must be "processed in a manner that guarantees adequate security (...), including protection, through appropriate technical and organizational measures, from unauthorized or unlawful processing and from accidental loss, destruction or damage" (principle of «integrity and confidentiality»)” (art. 5, par. 1, letter e f) of the Regulation).

- the data controller and data controller are required to implement "adequate technical and organizational measures to guarantee a level of security appropriate to the risk", taking into account, among other things, "the nature, object, context and of the purposes of the processing, as well as the risk of varying probability and severity for the rights and freedoms of natural persons", highlighting that "in evaluating the adequate level of security, special account is taken of the risks presented by the processing which derive in particular from the destruction, loss, modification, unauthorized disclosure or access, in an accidental or illegal manner, to personal data transmitted, stored or otherwise processed” (art. 32, par. 1 and 2). In any case, the aforementioned subjects are required to adopt procedures "to test, verify and regularly evaluate the effectiveness of the technical and organizational measures in order to guarantee the security of the processing" (art. 32, par. 1, letter d) of the Regulation).

4. Conclusions.

In light of the assessments mentioned above, taking into account the declarations made by the data controller during the investigation and considering that, unless the fact constitutes a more serious crime, anyone, in proceedings before the Guarantor, falsely declares or certifies information or circumstances or produces false deeds or documents and is liable pursuant to art. 168 of the Code "False statements to the Guarantor and interruption of the execution of the tasks or exercise of the powers of the Guarantor", the elements provided by the data controller in the defense statement referred to above and during the hearing, although worthy of consideration, do not allow us to fully overcome the findings notified by the Office with the aforementioned act of initiation of the proceedings, since, moreover, none of the cases provided for by the art. 11 of the Guarantor's regulation no. 1/2019.

In fact, in highlighting, as repeatedly recalled by the Authority, that the provision of a health care service referring to a person specifically indicated by the user name (name.surname) constitutes information attributable to the notion of health data , pursuant to art. 4, par. 1, no. 15 of the Regulation and of the Council. n. 35 (see, ex multis, Provision 29 September 2021 n. 358, web doc. n. 9720448), it was ascertained that the reporting party, as an unauthorized third party, had the opportunity to view personal data relating to the health contents in the acceptance registered to another interested party through the platform available to patients for downloading reports, due to a bug in the application. In this regard, it is noted that, in light of the principles highlighted above, the aforementioned application should have been subject to testing and acceptance by the Company, also following the update of the portal's functionality. In fact, the vulnerability of the system - which could have allowed third parties to access information relating to acceptances registered to other interested parties, by manipulating the access URL to a specific page of the site - had been foreseen in the initial testing phase and appropriately blocked, but it was not considered following an update operation of the same portal, aimed at introducing the functionality which provided the possibility of viewing the register of operations performed (see the declarations present in the XX document "The violation (flaw) emerged following a requested evolutionary update carried out by CB Sistemi for which neither Medical Center, nor any other customer, has ever raised (before the XX email from Mr. XX) any dispute or report in this regard").

Therefore, taking into account the nature of the data being accessed and the high risks deriving from their possible acquisition by third parties, in relation to the aforementioned new functionality, introduced without having foreseen the possibility of alteration of the URL by third parties, and without , therefore, having carried out the relevant acceptance test, it is believed that the Company CB Sistemi s.r.l. has not adopted suitable measures to guarantee a level of security adequate to the risk (art. 5, par. 1, letter f), and 32 of the Regulation to "ensure confidentiality, integrity, availability and resilience on a permanent basis of processing systems and services”).

In fact, although the data controller, who determines the purposes and methods of data processing, bears a "general responsibility" for the processing carried out (see art. 5, par. 2, so-called "accountability", and 24 of the Regulation), even when these are carried out by other subjects "on its behalf" (Cons. n. 81, articles 4, point 8), and 28 of the Regulation), the Regulation has regulated the obligations and other forms of cooperation to which the data controller is required and the scope of the related responsibilities (see articles 30, 32, 33, paragraphs 2, 82 and 83 of the Regulation). As mentioned above, art. 32 of the Regulation establishes that, not only the owner, but also the data controller, within the scope of his/her competences and tasks delegated by the owner, "taking into account the state of the art and the implementation costs, as well as the nature, of the 'object of the context and purposes of the processing, as well as the risk of varying probability and severity for the rights and freedoms of natural persons" implements "adequate technical and organizational measures to guarantee a level of security appropriate to the risk" and that “in assessing the adequate level of security, special account is taken of the risks presented by the processing which derive in particular from the destruction, loss, modification, unauthorized disclosure or access, in an accidental or illegal manner, to data personal data transmitted, stored or otherwise processed".

We therefore note the illicit nature of the processing of personal data carried out by CB Sistemi s.r.l for having carried out processing in violation of the principle of "integrity and confidentiality" referred to in art. 5, par. 1, letter. f) of the same Regulation and of the obligations referred to in the art. 32, par. 1, of the Regulation, as described above.

In this context, considering, in any case, that the conduct has exhausted its effects, the conditions for the adoption of the corrective measures referred to in the art. 58, par. 2, of the Regulation.

Having said this, taking into account that:

- from the findings of the documents, the episode appears to be an isolated event and, from a psychological point of view, free of malice, determined by the intentional behavior of the reporter; the responsibility can be traced back to a degree of guilt to be assessed as slight in light of the elements that characterize the episode;

- the violation concerned data on the health of a single interested party, but did not involve medical reports;

- the Company intervened promptly to mitigate the effects of the violation that occurred, as well as to prevent the recurrence of similar events;

- the data controller has proven to be promptly and extremely collaborative throughout the investigation and procedural phase and there are no previous relevant violations committed by the data controller;

the circumstances of the specific case lead to classify it as a "minor violation", pursuant to the cons. 148 of the Regulation and the “Guidelines regarding the application and provision of administrative pecuniary sanctions for the purposes of Regulation (EU) no. 2016/679”, adopted by the “Art. 29 Working Group” on 3 October 2017, WP 253 and endorsed by the European Data Protection Committee with the “Endorsement 1/2018” of 25 May 2018. It is believed, therefore, in relation to the case in question, it is sufficient to warn the data controller pursuant to the articles. 58, par. 2, letter. b), and 83, par. 2, of the Regulation, for having violated the articles. 5, par. 1, letter. f), and 32 of the Regulation.

Finally, it is noted that the conditions set out in art. 17 of Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

It is also believed that the additional sanction of publication of this provision on the Guarantor's website, provided for by art., should be applied. 166, paragraph 7, of the Code and art. 16 of the Guarantor Regulation n. 1/2019, also in consideration of the type of personal data subject to unlawful processing.

ALL THIS CONSIDERING THE GUARANTOR

a) declares, pursuant to art. 57, par. 1, letter. f), of the Regulation, the unlawfulness of the processing carried out by the Company CB Sistemi s.r.l., with registered office in via F. Hayez n. 4, Venice, (C.F./P. Iva 03941880274);

b) pursuant to art. 58, par. 2, letter. b), of the Regulation, warns the Company CB Sistemi s.r.l., as responsible for the processing in question, for having violated the articles. 5, par. 1, letter. f) and 32 of the Regulation, as described above;

c) believes that the conditions set out in the art. 17 of Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

Pursuant to the articles. 78 of the Regulation, 152 of the Code and 10 of Legislative Decree no. 150/2011, it is possible to lodge an appeal against this provision before the ordinary judicial authority, under penalty of inadmissibility, within thirty days from the date of communication of the provision itself or within sixty days if the appellant resides abroad.

Rome, 30 November 2023

PRESIDENT
Stanzione

THE SPEAKER
Ghiglia

THE GENERAL SECRETARY
Mattei

```

Retrieved from "[https://gdprhub.eu/index.php?title=Garante\_per\_la\_protezione\_dei\_dati\_personali\_(Italy)\_-\_9973790&oldid=42278](https://gdprhub.eu/index.php?title=Garante_per_la_protezione_dei_dati_personali_\(Italy\)_-_9973790&oldid=42278)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Garante per la protezione dei dati personali (Italy)](/index.php?title=Category:Garante_per_la_protezione_dei_dati_personali_\(Italy\) "Category:Garante per la protezione dei dati personali (Italy)")
*   [Italy](/index.php?title=Category:Italy "Category:Italy")
*   [Article 5(1)(f) GDPR](/index.php?title=Category:Article_5\(1\)\(f\)_GDPR "Category:Article 5(1)(f) GDPR")
*   [Article 9(1) GDPR](/index.php?title=Category:Article_9\(1\)_GDPR "Category:Article 9(1) GDPR")
*   [Article 32 GDPR](/index.php?title=Category:Article_32_GDPR "Category:Article 32 GDPR")
*   [Italian](/index.php?title=Category:Italian "Category:Italian")

This page was last edited on 23 July 2024, at 10:19.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)