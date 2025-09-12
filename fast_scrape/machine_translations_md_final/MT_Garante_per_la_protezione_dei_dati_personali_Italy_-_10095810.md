SEE ALSO Newsletter of January 31, 2025

\[web doc. no. 10095810\]

Measure of November 27, 2024

Register of measures
no. 763 of November 27

THE GUARANTOR FOR THE PROTECTION OF PERSONAL DATA

IN today's meeting, attended by Prof. Pasquale Stazione, president, Dr. Agostino Ghiglia and the lawyer Guido Scorza, members, and Councilor Fabio Mattei, secretary general;

SEEN Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (hereinafter "Regulation");

SEEN Legislative Decree no. 10095810 of June 30, 2003 196 (Personal Data Protection Code, hereinafter “Code”) as amended by Legislative Decree no. 101 of 10 August 2018 containing “Provisions for the adaptation of national legislation to the provisions of Regulation (EU) 2016/679”;

SEEN Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor for the protection of personal data, approved with resolution of the Guarantor no. 98 of 4/4/2019, published in the Official Journal no. 106 of 8/5/2019 and in www.gpdp.it, web doc. no. 9107633 (hereinafter “Guarantor Regulation no. 1/2019”);

SEEN the documentation in the files;

HAVING SEEN the observations made by the Secretary General pursuant to art. 15 of the Regulation of the Guarantor no. 1/2000 on the organization and functioning of the office of the Guarantor for the protection of personal data, in www.gpdp.it, web doc. no. 1098801;

REPORTER Dr. Agostino Ghiglia;

WHEREAS

1. The preliminary investigation.

On 24 January 2023, the Molise Region (hereinafter the Region) sent the Guarantor, pursuant to art. 33 of the Regulation, a notification of a breach of personal data, concerning the regional portal of the ESF (https://fse.regione.molise.it) which, due to a “vulnerability of the system”, had allowed a third party “through intentional manipulation of the URL to carry out a search for the data of other citizens present in the Regional Registry of Molise”.

In particular, in the aforementioned notification, the Region declared that "on the FSE Portal of the Molise Region, the user with the "Assisted" role was able, by exploiting a vulnerability in the system through intentional manipulation of the URL, to search for the data of other citizens present in the Regional Registry of Molise. Specifically, by manipulating the URL from https://fse.regione.molise.it/fseui/dashboard to https://fse.regione.molise.it/fseui/list, the user was able to use the citizen search function and subsequently, by selecting it, access the functionality for consulting the personal data and consulting the FSE of the citizen himself" (see notification of 24 January, section F, point 7). According to the documents, the number of assisted persons involved was 7.

With regard to what was represented by the Region, the Office made two requests for information (notes of 21 February and 17 April 2023) - which were responded to with notes of 3 March and 5 May 2023 - in order to acquire more details about the violation and the interventions carried out to remove the highlighted vulnerability, as well as information on the roles of the various subjects who intervened in the treatments subject to the violation, on the technical and organizational measures relating to the procedures for identification, IT authentication (Identity Management) and authorization of the assisted persons for the purpose of consulting their documents present in the FSE, on the subjects responsible for designing such procedures and on the assessments carried out in order to the risks for the rights and freedoms of the interested parties arising from the violation, also in order to verify the existence of the conditions for communicating the same to the interested parties involved.

In response to the aforementioned requests for information, the Region clarified that “on 17 January 2023, Mr. \[…\] reported to this Body, via certified email \[…\] a cybersecurity problem encountered while viewing his electronic health record” and that “access was possible by manually and forcibly altering the URL (not visible and accessible to users with the Patient role); the reporter, with the role of patient, forced the system by modifying the URL with the consequent use of the data search and consultation functionality. The search functionality was precluded in normal system navigation. It remains unknown how the patient obtained the exact URL “https://fse.regione.molise.it/fseui/list” in order to force the system” (see note of 3 March 2023, page 1 and attachment 1 and page 2 of attachment 2 to the same).

With regard to the categories of data that the third party was able to consult by calling the URL https://fse.regione.molise.it/fseui/list, the Region declared that “they refer to: personal data (Name, Surname, Date of Birth, City of Birth); residence and domicile data; data relating to healthcare (ASL affiliation, District affiliation, General Practitioner, Exemptions); health documents and reports (e.g. Laboratory reports, specialist reports, etc.)” and that the “search must be done in a timely manner by entering the complete and valid Tax Code or by entering the Name, Surname and date of birth (the three data are mandatory to finalize the search)” (see note of 5 May 2023, page 3).

With reference to the measures in place at the time of the violation, the Region recalled the document attached to the notification drawn up by the company Engineering Ingegneria Informatica S.P.A., designated as data controller, with which the same company communicated the data violation to the Region. Among the technical and organizational measures adopted with reference to the processing of the data subject to the violation described in the aforementioned document, the vulnerability assessment and penetration test activities carried out periodically by an independent designated team are indicated (see notification of 24 January 2023).

In this regard, the Region also declared that "the technical authentication measures are all sent back to the regional proxy (managed by Molise Dati) for SPID and CIE access. The Web APP accesses the proxy via a URL including an authentication token. The system receives in response a body with the personal data which, depending on the type of authentication, varies. The middleware carries out checks in the Registry to verify whether the user is actually a user of the Molise region. Otherwise, it is sent back to the system authentication page. If so, at the time of access and selection of the role, the token is generated by the User Manager (software module for user management) in order to be authorized to use the API services for registry and document searches. \[…\] the following roles have been configured: 1. Doctor/Healthcare Manager; 2. GP/PLS; 3. Pharmacist; 4. Administrative Operator; 5. Patient; 6. Guardian, Informal giver, Parent. For each of these roles, the types of interactions that can be carried out have been determined” (see note of 3 March 2023, pages 2 and 3 of Annex 2 to the same).

In particular, the Region has specified that “following the analysis of the technical and functional requirements of the FSE in which Regione Molise, Molise Dati, Tim S.p.A. and Engineering S.p.A. participated. (Annex 6 called “FSE Regione Molise-Ruoli e permessi.pdf”), the system was designed and implemented from an IT perspective by Engineering S.p.A, which, therefore, represents the entity responsible for designing the IT identification and authentication procedures (Identity Management) as well as the IT authorization of the assisted persons for the purpose of consulting the documents present in the FSE and the measures to guarantee the confidentiality of the same documents” (see note of 5 May 2023, page 2).

With reference to the measures adopted following the violation, the Region stated that “an analysis was conducted of the possible cause from which the report arose, therefore, an analysis was carried out of the logs of all the application modules at all levels and subsequently an analysis of the code was conducted to limit the bug and resolve it definitively. The first measure adopted was to inhibit the possibility of accessing the page https://fse.regione.molise.it/fseui/list via direct call from the browser. The second measure adopted was to implement, through controls inserted in the source code, a control that allows verifying that the web page https://fse.regione.molise.it/fseui/list is in no way visible and usable by authenticated users with the “Assisted” role” (see notification of 24 January 2023, section H, point 1).

With regard to the measures adopted to prevent similar violations in the future, it was then declared that it had “requested Molise Dati to carry out an analysis aimed at evaluating the possible presence of similar errors in the software developed by the company Engineering SpA” (see notification of 24 January 2023, section H, point 2).

With regard to the communication of the violation to the interested parties, the Region represented that the severity of the potential impact for the interested parties was “medium” since “the security flaw was reported by the same subject who found the possibility of access to unauthorized data. The same does not appear to have the intention to act in a prejudicial manner towards the interested parties”, that the violation “is not likely to present a high risk for the rights and freedoms of natural persons” and that “it was deemed not necessary to proceed with the communication to the interested parties, not identifying a high risk for their rights and freedoms. In particular, taking into account that the security breach was reported by the same subject who had carried out the unauthorized access, it was not deduced, on the part of the same, the intention to act in a prejudicial manner towards the interested parties” (see notification of 24 January 2023, section G, point 3, and section L, point 1 and note of 3 March 2023 page 2 in response to the request for information of 21 February 2023).

Finally, the Region declared that “on 11 May 2021 \[…\] it signed, pursuant to art. 26 of EU Regulation 2016/679 (GDPR), with the Molise Regional Health Authority -ASReM a joint-ownership agreement for the processing of health data” and that “this joint-ownership agreement, in art. 2.3, provided that each joint-owner could use external suppliers/subcontractors for the provision of any service relating to the management of the activities referred to in the aforementioned agreement” (see note of 3 March 2023, page 2 and note of 5 May 2023, attachment 2).

On the basis of the above, with a note of 28 September 2023 (prot. 133809), the Office issued a notification of violation pursuant to art. 166, paragraph 5, of the Code to the Molise Region as it was found that the processing of personal data in question was carried out in a manner not compliant with the principle of "integrity and confidentiality" (art. 5, par. 1, letter f), of the Regulation), by not adopting technical and organizational measures suitable for guaranteeing a level of security appropriate to the risk (art. 32 of the Regulation) and adequate, from the design of the processing carried out within the scope of the FSE, to effectively implement the principles of data protection and to integrate the necessary guarantees into the processing in order to satisfy the requirements of the Regulation and protect the rights of the interested parties, in violation of art. 25 of the Regulation.

With a note dated 27 October 2023, the Region sent its defensive briefs in which it represented, in particular:

that it had delegated "the technical implementation activity of the FSE to Molise Dati S.p.A., an in-house providing body of the Molise Region" which with "an act attached to the resolution of the Regional Council no. 143 of 20 May 2021" was designated "as the data controller with regard to the "performance of all the activities detailed in the documents approved with DGR no. 571 of 30 December 2019 and no. 59 of 7/2/2020 regarding the conventional relationship between the Molise Region and Molise Dati in the field of health IT"". This appointment, in the documents, provides for:

"the obligation to implement the principles of privacy by design and privacy by default;

ii the obligation to implement adequate security measures to protect the personal data being processed, including the “… definition of appropriate technical and organizational solutions aimed at regulating logical access… authorization profiles defined according to the “Need to Know” principle” and the “… execution of activities aimed at identifying vulnerabilities in applications and technical infrastructures functional to the provision of the service and activation of appropriate mitigation plans”;

iii the right to resort to any sub-processors, in compliance with certain formal and substantive requirements”;

that “in carrying out the task received, and having identified the need to turn to a specialized technological partner, Molise Dati S.p.A. adhered to the SPC Cloud Lot 1 Framework Contract of Consip S.p.A., stipulating, on 28 October 2020, the executive contract no. 2000379980709001COE with a R.T.I. composed of TIM S.p.A., Enterprise Services Italia S.r.l., Poste Italiane S.p.A., Postecom S.p.A. and Postel S.p.A.”;

that “the contract stipulated with the aforementioned R.T.I. had as its object the supply of IaaS, PaaS cloud services and cloud enabling services for the migration of the original FSE web app from an “on-premises” environment to the SPC cloud, with the simultaneous replatforming of the web app to adapt it to the new environment by exploiting the cloud enabling services, and expressly provided that the execution of the services indicated in the specific specifications would be entrusted to Engineering Ingegneria Informatica S.p.A.”;

that “TIM S.p.A. identified Engineering Ingegneria Informatica S.p.A. the additional controller of the processing operations carried out for the purposes of implementing the FSE, following the stipulation, with the operator, of a framework agreement for the provision of subcontracted cloud enabling services”;

that “the agreement stipulated by the parties expressly provided for the designation of Engineering Ingegneria Informatica S.p.A. as (additional) controller of the processing “in relation to the Framework Contract signed on 20/07/2016 between Telecom and CONSIP…and/or the Executive Contracts signed between Telecom and the various Beneficiary Administrations”, with the commitment of the subcontractor to “…observe the conditions/instructions reported below and in the aforementioned letter” (see art. 21 of doc. E)”;

that “Engineering Ingegneria Informatica S.p.A. represented, therefore, the entity responsible for the design and implementation, from a technical point of view, of the IT system used to manage the electronic health record, including the design of the procedures for identification and computer authentication (Identity Management) as well as the computer authorization of patients for the purpose of consulting the documents in the EHR and the measures to guarantee the confidentiality of the same documents”;

that “at the same time as the stipulation of the service contract, Molise Dati S.p.A. and TIM S.p.A. signed the deed of “appointment as data controller” attached to it, in which, for what is relevant here, the scope of the processing was delimited and the obligation of the provider to (…) “adopt all technical and organizational measures that meet the requirements of the EU Regulation in order to ensure an adequate level of security of the processing”;

that “with respect to the processing operations of the personal data subject to the violation, therefore: (i) the Molise Region assumed the role of (joint) data controller; (ii) Molise Dati S.p.A. assumed the role of data controller; (iii) TIM S.p.A. assumed the role of sub-processor, designated by Molise Dati S.p.A. by virtue of the specific power granted with the deed of designation; (iv) Engineering Ingegneria Informatica S.p.A. assumed the role of additional sub-processor, designated by TIM S.p.A. by virtue of the specific clause contained in the deed of appointment as data controller stipulated with Molise Dati S.p.A..”;

that “Molise Dati S.p.A. immediately initiated an investigation aimed at verifying the actual existence of the IT security problem reported by the citizen, asking the sub-processor Engineering Ingegneria Informatica S.p.A. to carry out all the most appropriate checks. Following the checks carried out, on 21 January 2023 Engineering Ingegneria Informatica S.p.A. sent Molise Dati S.p.A. a document, called “report”, in which the actual presence of the bug detected by the reporter was acknowledged. In particular, according to what was stated by the sub-responsible, “on the FSE Portal of the Molise Region the user with the “Assisted” role was able, by exploiting a vulnerability in the system through intentional manipulation of the URL, to search for the data of other citizens present in the Regional Registry of Molise. Specifically, by manipulating the URL from https://fse.regione.molise.it/fseui/dashboard to https://fse.regione.molise.it/fseui/list the user was able to use the citizen search function and subsequently, by selecting it, access the functionality for consulting the personal data and consulting the FSE of the citizen himself”;

that “Engineering Ingegneria Informatica S.p.A. at the same time acknowledged that it had carried out an investigation into the causes of the violation and, once the bug had been identified, that it had taken steps to resolve it, carrying out the necessary interventions to avoid the possible recurrence of the security incident”;

that “The underlying vulnerability – which was exploitable only by those authenticated subjects (and therefore identifiable and traceable) who, knowing the destination URL, had intentionally carried out such manipulation – was caused by a software coding error attributable to the work of the sub-controller of the processing Engineering Ingegneria Informatica S.p.A.”;

that “with a note dated 23 January 2023, Molise Dati S.p.A. reported the violation of personal data to the Molise Region, acknowledging that it had immediately carried out “a technical analysis in collaboration with Engineering S.p.A., in its capacity as Cloud Enabler of TIM S.p.A. in the FSE project”, that it had detected the actual existence of “…a security bug, which allowed a user with the “Assisted” role to be able to search for the data of other citizens present on the FSE and to be able to consult such data” and that it had taken steps to correct this IT security problem”;

that “in addition to the previous note, on 24 January 2023 Molise Dati S.p.A. sent the Molise Region the document called “report” prepared by Engineering Ingegneria Informatica S.p.A. and the following day the General Director for Health of the Molise Region acknowledged the President, ASREM and Molise Dati S.p.A. that it had provided notification”;

that “the security incident that caused the loss of data confidentiality was made possible exclusively by a programming error committed by the subcontractor Engineering Ingegneria Informatica S.p.A. in the execution phase of the operations assigned to him, and that, despite the declared performance of constant verification activities (penetration tests and vulnerability assessments), he was not able to detect the specific IT vulnerability that was the subject of the subsequent report”.

In relation to what emerged from the Region's briefs, the Office has also initiated a sanctioning procedure against the companies Molise dati S.p.A. and Engineering ingegneria informatica S.p.A. (notes of 5 February 2024).

In particular, the involvement of the company Engineering Ingegneria Informatica S.p.A. was carried out in consideration of what was represented by the aforementioned Region regarding the circumstance that “Engineering Ingegneria Informatica S.p.A. therefore represented the entity responsible for the design and implementation, from a technical point of view, of the IT system used for the management of the electronic health record, including the design of the procedures for identification and IT authentication (Identity Management) as well as IT authorization of the patients for the purposes of consulting the documents present in the FSE and the measures to guarantee the confidentiality of the same documents”; at the request of Molise Dati S.p.A. “Engineering Ingegneria Informatica S.p.A. acknowledged that it “carried out an investigation into the causes of the violation and, once the bug was identified, that it had taken steps to resolve it, carrying out the necessary interventions to avoid the possible recurrence of the security incident” and that according to what was stated in the documents “the underlying vulnerability – which was exploitable only by those authenticated subjects (and therefore identifiable and traceable) who, knowing the destination URL, had intentionally carried out such manipulation – was caused by a software coding error attributable to the work of the sub-processor Engineering Ingegneria Informatica S.p.A”.

In light of these elements, it was found that the processing of personal data in question was carried out by Engineering Ingegneria Informatica S.p.A data by failing to implement technical and organizational measures suitable to guarantee a level of security appropriate to the risk, in violation of art. 32 of the Regulation.

After access to the administrative documents held by the Office, with a note dated 13 June 2024, the company Engineering Ingegneria Informatica S.p.A. submitted its defense briefs (after an extension of the terms granted with a note dated 14 May 2024) and requested to be heard in a hearing that took place remotely on 4 July 2024. In the defense briefs and during the aforementioned hearing, it was represented, in particular, that:

“in 2018 TIM subcontracted Engineering only for a part of the activities delegated to TIM by the contracting authority (Cloud enabling), among which there is not the aspect of the security verification on the SW intended as vulnerability assessment and penetration test. The Company could have carried out the checks relating to the vulnerability of the system in operation if this had been requested in the subcontracting contract and the necessary authorizations had been granted. It should be noted that, following the event on which the Guarantor intervened, TIM contracted other services and highlighted in the contractual documents that the aforementioned security activities (vulnerability assessment and penetration test) are not included in the Company's responsibility" (see hearing minutes and briefs in the files, pages 10 and 11);

it is necessary to recall "the responsibilities of both the Region and TIM who decided what to delegate to other parties having a global vision of the processing";

"the verification of the vulnerability of the system - in operation mode - would have made it necessary for the Company to acquire specific authorization in this regard from the owner";

"the IT incident occurred by an already authenticated party who had to know the specific URL of the dashboard available to general practitioners that allowed searches by name and surname and date of birth of another user";

"for the purposes of identifying the measures that can be required pursuant to art. 32 of the Regulation, one of the main criteria to be taken into consideration is the context of the processing, which is different in relation to the role covered in the contractual chain. The person at the head of the chain has an overview and knows the division of the activities that he has decided to delegate. This aspect is inevitably not in the sphere of knowledge of the last person downstream of the contractual chain, in this case the Company. This requires a different and greater responsibility of the owner who in the specific case decided the division of tasks”.

2. Outcome of the investigation.

Having taken note of what is represented in the documentation in the files and in the defensive briefs, it is observed that:

pursuant to the Regulation, “data relating to health” are considered to be personal data relating to the physical or mental health of a natural person, including the provision of health care services, which reveal information relating to his state of health (Article 4, paragraph 1, no. 15, of the Regulation). Recital no. 35 of the Regulation then specifies that health data “include information about the natural person collected during his/her registration for the purpose of receiving health care services”; “a number, symbol or specific element attributed to a natural person to uniquely identify him/her for health purposes”;

the Regulation provides that personal data must be “processed in a manner that ensures appropriate security (…) including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage (‘integrity and confidentiality’) using appropriate technical or organisational measures” (art. 5, par. 1, letter f) of the Regulation). In this regard, art. 32 of the Regulation, concerning the security of processing, establishes that "taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, the controller and the processor shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk" (paragraph 1) and that "in assessing the appropriate level of security, special account shall be taken of the risks presented by processing, in particular from accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored or otherwise processed" (paragraph 2);

also taking into account the purpose of the FSE and the nature of the personal data processed, including those belonging to special categories, the processing carried out in the context in question requires the adoption of the highest security standards, in order not to compromise the confidentiality, integrity and availability of the personal data of millions of data subjects. On this basis, the security obligations imposed by the Regulation require the adoption of rigorous technical and organizational measures, including, in addition to those expressly identified in art. 32, par. 1, letters a) to d), all those necessary to mitigate the risks that the processing presents;

from the examination of the information and documentation provided by the Region, it emerges that the FSE Portal of the Molise Region, made available at the address https://fse.regione.molise.it, due to a "vulnerability" has allowed an authenticated user with the role of "assisted" "through an intentional manipulation of the URL, to perform a search for the data of other citizens present in the Regional Registry of Molise", in the absence of a verification of the authorization permissions attributed to the user for access to such data;

according to what is indicated by the aforementioned Region "Engineering Ingegneria Informatica S.p.A. therefore, represented the entity responsible for the design and implementation, from a technical point of view, of the IT system used for the management of the electronic health record, including the design of the procedures for identification and IT authentication (Identity Management) as well as the IT authorization of patients for the purpose of consulting the documents present in the FSE and the measures to guarantee the confidentiality of the same documents";

as indicated by the Molise Region, at the request of Molise Dati S.p.A., "Engineering Ingegneria Informatica S.p.A. acknowledged that it “carried out an investigation into the causes of the violation and, once the bug was identified, that it had taken steps to resolve it, carrying out the necessary interventions to avoid the possible recurrence of the security incident” and that according to what was stated in the documents “the underlying vulnerability – which was exploitable only by those authenticated subjects (and therefore identifiable and traceable) who, knowing the destination URL, had intentionally carried out such manipulation – was caused by a software coding error attributable to the work of the sub-processor Engineering Ingegneria Informatica S.p.A.”;

the processing of personal data in question was carried out by the company Engineering Ingegneria Informatica S.p.A. by failing to implement technical and organizational measures suitable for guaranteeing a level of security appropriate to the risk, as also provided for in the act of appointment as data processor, in violation of art. 32 of the Regulation. The company, in creating and designing, from a technical point of view, the IT systems used in the context of the Electronic Health Record of the Molise Region, including the IT authentication and authorization systems, should have - within the scope of the duties of ordinary diligence - adopted adequate measures, and verified their effectiveness by carrying out appropriate test cases, in order to limit access by users only to the information that concerned them (or that they were eventually authorized to process) and therefore prevent third parties from being able, after having passed the IT authentication procedure, to use functions to which they were not authorized simply by modifying some parameters present in the URL.

3. Conclusions.

In light of the above assessments, taking into account the statements made by the data controller during the investigation ˗ and considering that, unless the fact constitutes a more serious crime, anyone who, in a proceeding before the Guarantor, falsely declares or certifies information or circumstances or produces false acts or documents is liable pursuant to art. 168 of the Code "False statements to the Guarantor and interruption of the execution of the tasks or exercise of the powers of the Guarantor" ˗ the elements provided by the data controller in the defensive briefs do not allow to overcome the findings notified by the Office with the act of initiation of the proceeding, since, moreover, none of the cases provided for by art. 11 of the Guarantor Regulation no. 1/2019 apply.
For these reasons, the processing of personal data carried out by the company Engineering Ingegneria Informatica S.p.A. in the terms set out in the reasons is found to be unlawful, in violation of art. 32 of the Regulation.

Finally, it is believed that the conditions set out in art. 17 of the Regulation of the Guarantor no. 1/2019 are met.

4. Adoption of the injunction order for the application of the administrative pecuniary sanction and accessory sanctions (art. 58, par. 2, letter i), and 83 of the Regulation; art. 166, paragraph 7, of the Code).

Violation of art. 32 of the Regulation entails the application of the administrative sanction provided for by art. 83, par. 4 of the Regulation.

The Guarantor, pursuant to art. 58, par. 2, letter i) of the Regulation and art. 166 of the Code, has the power to impose an administrative pecuniary sanction provided for by art. 83 of the Regulation, by adopting an injunction order (art. 18. L. 24 November 1981 n. 689), in relation to the processing of personal data carried out by the company Engineering Ingegneria Informatica S.p.A., which has been found to be unlawful, in the terms set out above.
In light of the above, it is believed that the level of severity of the violation committed by the company Engineering Ingegneria Informatica S.p.A. is low (see European Data Protection Board, “Guidelines 04/2022 on the calculation of administrative fines under the GDPR” of 23 May 2023, point 60).

With reference to the elements listed in art. 83, par. 2 of the Regulation for the purposes of applying the administrative pecuniary sanction and its quantification, taking into account that the sanction must be "effective, proportionate and dissuasive in each individual case" (art. 83, par. 1 of the Regulation), it is represented that, in the case in question, the circumstances reported below were taken into consideration:

the Authority became aware of the event following the notification of violation made by the Molise Region;

the processing in question concerns data suitable for detecting health information (personal and residence data, data relating to health care received (local health authority of affiliation, district of affiliation, name of general practitioner, any ownership of exemptions), health data inferable from documents and health reports possibly present in the specific electronic health record (e.g. laboratory reports, specialist reports, etc.) of 7 subjects who were exposed to possible illicit access for approximately 45 days (from 14 November to 30 December 2022);

the type of vulnerability detected was neither easy to detect nor easy to exploit, requiring intentional manipulation of the URL and prior knowledge of the destination URL "https://fse.regione.molise.it/fseui/list", however, the company Engineering Ingegneria Informatica S.p.A. should have - as part of the duties of ordinary diligence - adopted adequate measures, and verified their effectiveness by carrying out appropriate test cases, so to limit users' access only to information that concerned them (or that they were eventually authorized to process) and therefore prevent third parties from being able, after having passed the IT authentication procedure, to use functions to which they were not authorized simply by modifying some parameters in the URL;

Engineering Ingegneria Informatica S.p.A. has demonstrated a high level of cooperation by working to immediately introduce suitable measures to overcome the vulnerabilities highlighted above;

Engineering Ingegneria Informatica S.p.A. has not been the recipient of other sanctioning and corrective measures in relation to the case in question.

In light of the elements indicated above and the assessments carried out, it is believed, in this case, to apply to Engineering Ingegneria Informatica S.p.A. the administrative sanction of the payment of a sum equal to Euro 10,000.00 (ten thousand/00).

In this context, it is also believed that, pursuant to art. 166, paragraph 7, of the Code and art. 16, paragraph 1, of the Regulation of the Guarantor no. 1/2019, it is necessary to proceed with the publication of this chapter containing the injunction order on the website of the Guarantor.

GIVEN ALL THE ABOVE, THE GUARANTOR

a) pursuant to art. 57, par. l, letter a) and 83 of the Regulation, declares the unlawfulness of the processing of personal data carried out by the company Engineering ingegneria informatica S.p.A. with registered office in Piazzale dell’Agricoltura 24, 00144 Rome (VAT number: 05724831002 - Tax code: 00967720285), for the violation of the principles of integrity and confidentiality (art. 32 of the Regulation), within the terms set out in the reasons;

ORDERS

b) pursuant to art. 58, par. 2 ... i) of the Regulation, to the aforementioned Company to pay the sum of Euro 10,000.00 (ten thousand/00) as an administrative pecuniary sanction for having violated art. 32 of the Regulation, as described above;

ORDERS

c) to the company Engineering ingegneria informatica S.p.A. to pay the aforementioned sum of Euro 10,000.00 (ten thousand/00), according to the methods indicated in the attachment, within thirty days of notification of this provision, under penalty of the adoption of the consequent executive actions pursuant to art. 27 of Law no. 689/1981. It is represented that pursuant to art. 166, paragraph 8 of the Code, the right for the offender to settle the dispute by paying - always according to the methods indicated in the attachment - an amount equal to half of the sanction imposed within the deadline referred to in art. 10, paragraph 3, of Legislative Decree no. 150 of 1 September 2011, provided for the filing of the appeal as indicated below.

PROVIDES

d) pursuant to art. 166, paragraph 7, of the Code and art. 16, paragraph 1, of the Regulation of the Guarantor no. 1/2019, the publication of the injunction order on the website of the Guarantor;

e) pursuant to art. 154 bis, paragraph 3 of the Code, provides for the publication of this provision on the website of the Guarantor;

f) pursuant to art. 17 of the Regulation of the Guarantor no. 1/2019, the annotation of the violations and measures adopted in accordance with art. 58, paragraph 2 of the Regulation, in the internal register of the Authority provided for by art. 57, paragraph 1, letter u) of the Regulation.

Pursuant to art. 78 of the Regulation, articles 152 of the Code and 10 of Legislative Decree no. 150/2011, an appeal against this provision may be lodged before the ordinary judicial authority, under penalty of inadmissibility, within thirty days of the date of communication of the provision itself or within sixty days if the appellant resides abroad.

Rome, 27 November 2024

THE PRESIDENT
Stanzione

THE REPORTER
Ghiglia

THE GENERAL SECRETARY
Mattei

SEE ALSO Newsletter of 31 January 2025

 

\[web doc. no. 10095810\]

Provision of 27 November 2024

Register of provisions
no. 763 of 27 November

THE GUARANTOR FOR THE PROTECTION OF PERSONAL DATA

IN today's meeting, attended by Prof. Pasquale Stazione, President, Dr. Agostino Ghiglia and Attorney Guido Scorza, members, and Councillor Fabio Mattei, Secretary General;

SEEN Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (hereinafter the “Regulation”);

SEEN Legislative Decree no. 196 of 30 June 2003 (Personal Data Protection Code, hereinafter the “Code”) as amended by Legislative Decree no. 101 of 10 August 2018 containing “Provisions for the adaptation of national legislation to the provisions of Regulation (EU) 2016/679”;

SEEN Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers assigned to the Guarantor for the protection of personal data, approved by resolution of the Guarantor no. 98 of 4/4/2019, published in the Official Journal no. 106 of 8/5/2019 and in www.gpdp.it, web doc. no. 9107633 (hereinafter “Guarantor Regulation no. 1/2019”);

SEEN the documentation in the files;

SEEN the observations formulated by the Secretary General pursuant to art. 15 of the Guarantor Regulation no. 1/2000 on the organization and functioning of the office of the Guarantor for the protection of personal data, in www.gpdp.it, web doc. no. 1098801;

REPORTER Dr. Agostino Ghiglia;

WHEREAS

1. The preliminary investigation.

On 24 January 2023, the Molise Region (hereinafter the Region) sent the Guarantor, pursuant to art. 33 of the Regulation, a notification of violation of personal data, concerning the regional FSE Portal (https://fse.regione.molise.it) which, due to a “vulnerability of the system”, had allowed a third party “through intentional manipulation of the URL to carry out a search for the data of other citizens present in the Regional Registry of Molise”.

In particular, in the aforementioned notification, the Region declared that “on the FSE Portal of the Molise Region, the user with the “Assisted” role was able, by exploiting a vulnerability of the system through intentional manipulation of the URL, to carry out a search for the data of other citizens present in the Regional Registry of Molise. Specifically, by manipulating the URL from https://fse.regione.molise.it/fseui/dashboard to https://fse.regione.molise.it/fseui/list the user was able to use the citizen search function and subsequently, by selecting it, access the function for consulting the personal data and consulting the FSE of the citizen himself” (see notification of 24 January, section F, point 7). According to what was declared in the documents, the number of assisted persons involved was 7.

With regard to what was represented by the Region, the Office made two requests for information (notes of 21 February and 17 April 2023) - which were responded to with notes of 3 March and 5 May 2023 - in order to acquire more details about the violation and the interventions carried out to remove the highlighted vulnerability, as well as information on the roles of the various subjects who intervened in the treatments subject to the violation, on the technical and organizational measures relating to the procedures for identification, IT authentication (Identity Management) and authorization of the assisted parties for the purpose of consulting their documents present in the FSE, on the subjects responsible for designing such procedures and on the assessments carried out in order to the risks for the rights and freedoms of the interested parties deriving from the violation, also in order to verify the existence of the conditions for the communication of the same to the interested parties involved.

In response to the aforementioned requests for information, the Region clarified that “on 17 January 2023, Mr. \[…\] reported to this Body, via certified email \[…\] a cybersecurity problem encountered while viewing his electronic health record” and that “access was possible by manually and forcibly altering the URL (not visible and accessible to users with the Patient role); the reporter, with the role of patient, forced the system by modifying the URL with the consequent use of the data search and consultation functionality. The search functionality was precluded in normal system navigation. It remains unknown how the patient obtained the exact URL “https://fse.regione.molise.it/fseui/list” in order to force the system” (see note of 3 March 2023, page 1 and attachment 1 and page 2 of attachment 2 to the same).

With regard to the categories of data that the third party was able to consult by calling the URL https://fse.regione.molise.it/fseui/list, the Region declared that “they refer to: personal data (Name, Surname, Date of Birth, City of Birth); residence and domicile data; data relating to healthcare (ASL affiliation, District affiliation, General Practitioner, Exemptions); health documents and reports (e.g. Laboratory reports, specialist reports, etc.)” and that the “search must be done in a timely manner by entering the complete and valid Tax Code or by entering the Name, Surname and date of birth (the three data are mandatory to finalize the search)” (see note of 5 May 2023, page 3).

With reference to the measures in place at the time of the violation, the Region recalled the document attached to the notification drawn up by the company Engineering Ingegneria Informatica S.P.A., designated as data controller, with which the same company communicated the data violation to the Region. Among the technical and organizational measures adopted with reference to the processing of the data subject to the violation described in the aforementioned document, the vulnerability assessment and penetration test activities carried out periodically by an independent designated team are indicated (see notification of 24 January 2023).

In this regard, the Region also declared that "the technical authentication measures are all sent back to the regional proxy (managed by Molise Dati) for SPID and CIE access. The Web APP accesses the proxy via a URL including an authentication token. The system receives in response a body with the personal data which, depending on the type of authentication, varies. The middleware carries out checks in the Registry to verify whether the user is actually a user of the Molise region. Otherwise, it is sent back to the system authentication page. If so, at the time of access and selection of the role, the token is generated by the User Manager (software module for user management) in order to be authorized to use the API services for registry and document searches. \[…\] the following roles have been configured: 1. Doctor/Healthcare Manager; 2. GP/PLS; 3. Pharmacist; 4. Administrative Operator; 5. Patient; 6. Guardian, Informal giver, Parent. For each of these roles, the types of interactions that can be carried out have been determined” (see note of 3 March 2023, pages 2 and 3 of Annex 2 to the same).

In particular, the Region has specified that “following the analysis of the technical and functional requirements of the FSE in which Regione Molise, Molise Dati, Tim S.p.A. and Engineering S.p.A. participated. (Annex 6 called “FSE Regione Molise-Ruoli e permessi.pdf”), the system was designed and implemented from an IT perspective by Engineering S.p.A, which, therefore, represents the entity responsible for designing the IT identification and authentication procedures (Identity Management) as well as the IT authorization of the assisted persons for the purpose of consulting the documents present in the FSE and the measures to guarantee the confidentiality of the same documents” (see note of 5 May 2023, page 2).

With reference to the measures adopted following the violation, the Region stated that “an analysis was conducted of the possible cause from which the report arose, therefore, an analysis was carried out of the logs of all the application modules at all levels and subsequently an analysis of the code was conducted to limit the bug and resolve it definitively. The first measure adopted was to inhibit the possibility of accessing the page https://fse.regione.molise.it/fseui/list via direct call from the browser. The second measure adopted was to implement, through controls inserted in the source code, a control that allows verifying that the web page https://fse.regione.molise.it/fseui/list is in no way visible and usable by authenticated users with the “Assisted” role” (see notification of 24 January 2023, section H, point 1).

With regard to the measures adopted to prevent similar violations in the future, it was then declared that it had “requested Molise Dati to carry out an analysis aimed at evaluating the possible presence of similar errors in the software developed by the company Engineering SpA” (see notification of 24 January 2023, section H, point 2).

With regard to the communication of the violation to the interested parties, the Region represented that the severity of the potential impact for the interested parties was “medium” since “the security flaw was reported by the same subject who found the possibility of access to unauthorized data. The same does not appear to have the intention to act in a prejudicial manner towards the interested parties”, that the violation “is not likely to present a high risk for the rights and freedoms of natural persons” and that “it was deemed not necessary to proceed with the communication to the interested parties, not identifying a high risk for their rights and freedoms. In particular, taking into account that the security breach was reported by the same subject who had carried out the unauthorized access, it was not deduced, on the part of the same, the intention to act in a prejudicial manner towards the interested parties” (see notification of 24 January 2023, section G, point 3, and section L, point 1 and note of 3 March 2023 page 2 in response to the request for information of 21 February 2023).

Finally, the Region declared that “on 11 May 2021 \[…\] signed, pursuant to art. 26 of EU Regulation 2016/679 (GDPR), with the Molise Regional Health Authority -ASReM a joint-controller agreement in the processing of health data” and that “this joint-controller agreement, in art. 2.3, provided that each joint-controller could use external suppliers/subcontractors for the provision of any service relating to the management of the activities referred to in the aforementioned agreement” (see note of 3 March 2023, page 2 and note of 5 May 2023, attachment 2).

On the basis of the above, with a note of 28 September 2023 (prot. 133809), the Office issued a notification of violation pursuant to art. 166, paragraph 5, of the Code to the Molise Region as it was found that the processing of personal data in question was carried out in a manner not compliant with the principle of "integrity and confidentiality" (art. 5, par. 1, letter f), of the Regulation), by not adopting technical and organizational measures suitable for guaranteeing a level of security appropriate to the risk (art. 32 of the Regulation) and adequate, from the design of the processing carried out within the scope of the FSE, to effectively implement the principles of data protection and to integrate the necessary guarantees into the processing in order to satisfy the requirements of the Regulation and protect the rights of the interested parties, in violation of art. 25 of the Regulation.

With a note dated 27 October 2023, the Region sent its defensive briefs in which it represented, in particular:

that it had delegated "the technical implementation activity of the FSE to Molise Dati S.p.A., an in-house providing body of the Molise Region" which with "an act attached to the resolution of the Regional Council no. 143 of 20 May 2021" was designated "as the data controller with regard to the "performance of all the activities detailed in the documents approved with DGR no. 571 of 30 December 2019 and no. 59 of 7/2/2020 regarding the conventional relationship between the Molise Region and Molise Dati in the field of health IT"". This appointment, in the documents, provides for:

"the obligation to implement the principles of privacy by design and privacy by default;

ii the obligation to implement adequate security measures to protect the personal data being processed, including the “…definition of appropriate technical and organizational solutions aimed at regulating logical access…authorization profiles defined according to the “Need to Know” principle” and the “…execution of activities aimed at identifying vulnerabilities in applications and technical infrastructures functional to the provision of the service and activation of appropriate mitigation plans”;

iii the right to resort to any sub-processors, in compliance with certain formal and substantial requirements”;

that “in carrying out the task received, and having identified the need to turn to a specialized technological partner, Molise Dati S.p.A.adhered to the SPC Cloud Framework Contract Lot 1 of Consip S.p.A., stipulating, on 28 October 2020, the executive contract no. 2000379980709001COE with a R.T.I. composed of TIM S.p.A., Enterprise Services Italia S.r.l., Poste Italiane S.p.A., Postecom S.p.A. and Postel S.p.A.”;

that “the contract stipulated with the aforementioned R.T.I. had as its object the supply of IaaS, PaaS and cloud enabling services for the migration of the original FSE web app from an “on-premises” environment to the SPC cloud, with the simultaneous replatforming of the web app to adapt it to the new environment by exploiting the cloud enabling services, and expressly provided that the execution of the services indicated in the specific specifications would be entrusted to Engineering Ingegneria Informatica S.p.A.”;

that “TIM S.p.A. identified Engineering Ingegneria Informatica S.p.A. as the additional person responsible for the processing operations carried out for the purposes of implementing the FSE, following the stipulation, with the operator, of a framework agreement for the provision of subcontracted cloud enabling services”;

that “the agreement stipulated by the parties expressly provided for the designation of Engineering Ingegneria Informatica S.p.A. as (further) data controller “in relation to the Framework Contract signed on 20/07/2016 between Telecom and CONSIP…and/or the Executive Contracts signed between Telecom and the various Beneficiary Administrations”, with the subcontractor’s commitment to “…observe the conditions/instructions reported below and in the aforementioned letter” (see art. 21 of doc. E)”;

that “Engineering Ingegneria Informatica S.p.A. therefore represented the entity responsible for the design and implementation, from a technical point of view, of the IT system used to manage the electronic health record, including the design of the identification and IT authentication procedures (Identity Management) as well as the IT authorization of the patients for the purposes of consulting the documents in the FSE and the measures to guarantee the confidentiality of the same documents”;

that “at the same time as the stipulation of the service contract, Molise Dati S.p.A. and TIM S.p.A. signed the deed of “appointment as data controller” attached to it, in which, for what is relevant here, the scope of the processing was delimited and the obligation of the provider to (…) “adopt all technical and organizational measures that meet the requirements of the EU Regulation in order to ensure an adequate level of security of the processing”;

that “with respect to the processing operations of the personal data subject to the violation, therefore: (i) the Molise Region assumed the role of (joint) data controller; (ii) Molise Dati S.p.A. assumed the role of data controller; (iii) TIM S.p.A. assumed the role of sub-processor, designated by Molise Dati S.p.A. by virtue of the specific power attributed with the deed of designation; (iv) Engineering Ingegneria Informatica S.p.A. assumed the role of additional sub-processor, designated by TIM S.p.A. by virtue of the specific clause contained in the deed of appointment as data controller stipulated with Molise Dati S.p.A..”;

that “Molise Dati S.p.A. immediately started an investigation aimed at verifying the actual existence of the IT security problem reported by the citizen, asking the sub-manager Engineering Ingegneria Informatica S.p.A. to carry out all the most appropriate investigations. Following the checks carried out, on 21 January 2023 Engineering Ingegneria Informatica S.p.A. sent Molise Dati S.p.A. a document, called “report”, in which the actual presence of the bug detected by the reporter was acknowledged. In particular, according to what was stated by the sub-manager, “on the FSE Portal of the Molise Region, the user with the “Assisted” role was able, by exploiting a vulnerability in the system through intentional manipulation of the URL, to carry out a search for the data of other citizens present in the Regional Registry of Molise. Specifically, by manipulating the URL from https://fse.regione.molise.it/fseui/dashboard to https://fse.regione.molise.it/fseui/list the user was able to use the citizen search functionality and subsequently, by selecting it, access the functionality for consulting the personal data and consulting the FSE of the citizen himself”;

that “Engineering Ingegneria Informatica S.p.A. simultaneously acknowledged that it had carried out an investigation into the causes of the violation and, once the bug had been identified, that it had taken steps to resolve it, carrying out the necessary interventions to avoid the possible recurrence of the security incident”;

that “The underlying vulnerability – which was exploitable only by those authenticated subjects (and therefore identifiable and traceable) who, knowing the destination URL, had intentionally carried out such manipulation – was caused by a software coding error attributable to the work of the sub-controller of the treatment Engineering Ingegneria Informatica S.p.A.”;

that “with a note dated 23 January 2023, Molise Dati S.p.A. reported the violation of personal data to the Molise Region, acknowledging that it had immediately carried out “a technical analysis in collaboration with Engineering S.p.A., in its capacity as Cloud Enabler of TIM S.p.A. in the FSE project”, that it had detected the actual existence of “… a security bug, which allowed a user with the “Assisted” role to be able to carry out a search for the data of other citizens present on the FSE and to be able to consult such data” and that it had taken steps to correct this IT security problem”;

that "in addition to the previous note, on 24 January 2023 Molise Dati S.p.A. sent the Molise Region the document called "report" prepared by Engineering Ingegneria Informatica S.p.A. and the following day the General Director for Health of the Molise Region acknowledged the President, ASREM and Molise Dati S.p.A. that they had provided the notification";

that "the security incident that caused the loss of data confidentiality was made possible exclusively by a programming error committed by the subcontractor Engineering Ingegneria Informatica S.p.A. in the execution phase of the operations assigned to it, and that, despite the declared performance of constant verification activities (penetration tests and vulnerability assessments), it was not able to detect the specific IT vulnerability that was the subject of the subsequent report".

In relation to what emerged from the Region's briefs, the Office has also initiated a sanctioning procedure against the companies Molise dati S.p.A. and Engineering ingegneria informatica S.p.A. (note of 5 February 2024).

In particular, the involvement of the company Engineering Ingegneria Informatica S.p.A. was carried out in consideration of what was represented by the aforementioned Region regarding the circumstance that “Engineering Ingegneria Informatica S.p.A. therefore represented the entity responsible for the design and implementation, from a technical point of view, of the IT system used for the management of the electronic health record, including the design of the IT identification and authentication procedures (Identity Management) as well as the IT authorization of the patients for the purposes of consulting the documents present in the FSE and the measures to guarantee the confidentiality of the same documents”; at the request of Molise Dati S.p.A. “Engineering Ingegneria Informatica S.p.A. acknowledged that it “carried out an investigation into the causes of the violation and, once the bug was identified, that it had taken steps to resolve it, carrying out the necessary interventions to avoid the possible recurrence of the security incident” and that according to what was stated in the documents “the underlying vulnerability – which was exploitable only by those authenticated subjects (and therefore identifiable and traceable) who, knowing the destination URL, had intentionally carried out such manipulation – was caused by a software coding error attributable to the work of the sub-processor Engineering Ingegneria Informatica S.p.A”.

In light of these elements, it was found that the processing of personal data in question was carried out by Engineering Ingegneria Informatica S.p.A data by failing to implement technical and organizational measures suitable to guarantee a level of security appropriate to the risk, in violation of art. 32 of the Regulation.

After access to the administrative documents held by the Office, with a note dated 13 June 2024, the company Engineering Ingegneria Informatica S.p.A. submitted its defense briefs (after an extension of the terms granted with a note dated 14 May 2024) and requested to be heard in a hearing that took place remotely on 4 July 2024. In the defense briefs and during the aforementioned hearing, it was represented, in particular, that:

“in 2018 TIM subcontracted Engineering only for a part of the activities delegated to TIM by the contracting authority (Cloud enabling), among which there is not the aspect of the security verification on the SW intended as vulnerability assessment and penetration test. The Company could have carried out the checks relating to the vulnerability of the system in operation if this had been requested in the subcontracting contract and the necessary authorizations had been granted. It should be noted that, following the event on which the Guarantor intervened, TIM contracted other services and highlighted in the contractual documents that the aforementioned security activities (vulnerability assessment and penetration test) are not included in the Company's responsibility" (see hearing minutes and briefs in the files, pages 10 and 11);

it is necessary to recall "the responsibilities of both the Region and TIM who decided what to delegate to other parties having a global vision of the processing";

"the verification of the vulnerability of the system - in operation mode - would have made it necessary for the Company to acquire specific authorization in this regard from the owner";

"the IT incident occurred by an already authenticated party who had to know the specific URL of the dashboard available to general practitioners that allowed searches by name and surname and date of birth of another user";

"for the purposes of identifying the measures that can be required pursuant to art. 32 of the Regulation one of the main criteria to take into consideration is the context of the treatment which is different in relation to the role covered in the contractual chain. The person at the head of the chain has the overall vision and knows the division of the activities that he has decided to delegate. This aspect is inevitably not in the sphere of knowledge of the last person downstream of the contractual chain, in this case the Company. This requires a different and greater responsibility of the owner who in the specific case has decided the division of tasks”.

2. Outcome of the investigation.

Having taken note of what is represented in the documentation in the files and in the defense briefs, it is noted that:

pursuant to the Regulation, “health data” are considered to be personal data relating to the physical or mental health of a natural person, including the provision of health care services, which reveal information relating to his or her state of health (Article 4, paragraph 1, no. 15, of the Regulation). Recital no. 35 of the Regulation then specifies that health data “include information about the natural person collected in the course of his or her registration for the purpose of receiving health care services”; “a number, symbol or specific element attributed to a natural person to uniquely identify him or her for health purposes”;

the Regulation provides that personal data must be “processed in a manner that ensures appropriate security (…) including protection against unauthorised or unlawful processing and against accidental loss, destruction or damage (‘integrity and confidentiality’) using appropriate technical or organisational measures” (art. 5, par. 1, letter f) of the Regulation). In this regard, art. 32 of the Regulation, concerning the security of processing, establishes that "taking into account the state of the art, the costs of implementation and the nature, scope, context and purposes of processing as well as the risk of varying likelihood and severity for the rights and freedoms of natural persons, the controller and the processor shall implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk" (paragraph 1) and that "in assessing the appropriate level of security, special account shall be taken of the risks presented by processing, in particular from accidental or unlawful destruction, loss, alteration, unauthorized disclosure of, or access to, personal data transmitted, stored or otherwise processed" (paragraph 2);

also taking into account the purpose of the FSE and the nature of the personal data processed, including those belonging to special categories, the processing carried out in the context in question requires the adoption of the highest security standards, in order not to compromise the confidentiality, integrity and availability of the personal data of millions of data subjects. On this basis, the security obligations imposed by the Regulation require the adoption of rigorous technical and organizational measures, including, in addition to those expressly identified in art. 32, par. 1, letters a) to d), all those necessary to mitigate the risks that the processing presents;

from the examination of the information and documentation provided by the Region, it emerges that the FSE Portal of the Molise Region, made available at the address https://fse.regione.molise.it, due to a "vulnerability" has allowed an authenticated user with the role of "assisted" "through an intentional manipulation of the URL, to perform a search for the data of other citizens present in the Regional Registry of Molise", in the absence of a verification of the authorization permissions attributed to the user for access to such data;

according to what is indicated by the aforementioned Region "Engineering Ingegneria Informatica S.p.A. therefore, represented the entity responsible for the design and implementation, from a technical point of view, of the IT system used for the management of the electronic health record, including the design of the procedures for identification and IT authentication (Identity Management) as well as the IT authorization of patients for the purpose of consulting the documents present in the FSE and the measures to guarantee the confidentiality of the same documents";

as indicated by the Molise Region, at the request of Molise Dati S.p.A., "Engineering Ingegneria Informatica S.p.A. acknowledged that it “carried out an investigation into the causes of the violation and, once the bug was identified, that it had taken steps to resolve it, carrying out the necessary interventions to avoid the possible recurrence of the security incident” and that according to what was stated in the documents “the underlying vulnerability – which was exploitable only by those authenticated subjects (and therefore identifiable and traceable) who, knowing the destination URL, had intentionally carried out such manipulation – was caused by a software coding error attributable to the work of the sub-processor Engineering Ingegneria Informatica S.p.A.”;

the processing of personal data in question was carried out by the company Engineering Ingegneria Informatica S.p.A. by failing to implement technical and organizational measures suitable for guaranteeing a level of security appropriate to the risk, as also provided for in the act of appointment as data processor, in violation of art. 32 of the Regulation. The company, in creating and designing, from a technical point of view, the IT systems used in the context of the Electronic Health Record of the Molise Region, including the IT authentication and authorization systems, should have - within the scope of the duties of ordinary diligence - adopted adequate measures, and verified their effectiveness by executing appropriate test cases, in order to limit access by users only to the information that concerned them (or that they were eventually authorized to process) and therefore prevent third parties from being able, after having passed the IT authentication procedure, to use functions to which they were not authorized simply by modifying some parameters present in the URL.

3. Conclusions.

In light of the assessments mentioned above, taking into account the declarations made by the owner during the investigation ˗ and considering that, unless the fact constitutes a more serious crime, anyone, in a proceeding before the Guarantor, falsely declares or certifies information or circumstances or produces false acts or documents is liable pursuant to art. 168 of the Code “False statements to the Guarantor and interruption of the execution of the tasks or exercise of the powers of the Guarantor” ˗ the elements provided by the data controller in the defensive briefs do not allow to overcome the findings notified by the Office with the act of initiation of the proceeding, since none of the cases provided for by art. 11 of the Guarantor Regulation no. 1/2019 apply.
For these reasons, the processing of personal data carried out by the company Engineering Ingegneria Informatica S.p.A. in the terms set out in the reasons is found to be unlawful, in violation of art. 32 of the Regulation.

Finally, it is believed that the conditions set out in art. 17 of the Guarantor Regulation no. 1/2019 apply.

4. Adoption of the injunction order for the application of the administrative pecuniary sanction and accessory sanctions (articles 58, par. 2, letter i), and 83 of the Regulation; art. 166, paragraph 7, of the Code).

Violation of art. 32 of the Regulation entails the application of the administrative sanction provided for by art. 83, par. 4 of the Regulation.

The Guarantor, pursuant to art. 58, par. 2, letter i) of the Regulation and art. 166 of the Code, has the power to impose an administrative pecuniary sanction provided for by art. 83 of the Regulation, by adopting an injunction order (art. 18. L. 24 November 1981 n. 689), in relation to the processing of personal data carried out by the company Engineering Ingegneria Informatica S.p.A., which has been found to be unlawful, in the terms set out above.
In light of the above, it is believed that the level of severity of the violation committed by the company Engineering Ingegneria Informatica S.p.A. is low (see European Data Protection Board, “Guidelines 04/2022 on the calculation of administrative fines under the GDPR” of 23 May 2023, point 60).

With reference to the elements listed in art. 83, par. 2 of the Regulation for the purposes of applying the administrative pecuniary sanction and its quantification, taking into account that the sanction must be "effective, proportionate and dissuasive in each individual case" (art. 83, par. 1 of the Regulation), it is represented that, in the case in question, the circumstances reported below were taken into consideration:

the Authority became aware of the event following the notification of violation made by the Molise Region;

the processing in question concerns data suitable for detecting health information (personal and residence data, data relating to health care received (local health authority of affiliation, district of affiliation, name of general practitioner, any ownership of exemptions), health data inferable from documents and health reports possibly present in the specific electronic health record (e.g. laboratory reports, specialist reports, etc.) of 7 subjects who were exposed to possible illicit access for approximately 45 days (from 14 November to 30 December 2022);

the type of vulnerability detected was neither easy to detect nor easy to exploit, requiring intentional manipulation of the URL and prior knowledge of the destination URL "https://fse.regione.molise.it/fseui/list", however, the company Engineering Ingegneria Informatica S.p.A. should have - as part of the duties of ordinary diligence - adopted adequate measures, and verified their effectiveness by carrying out appropriate test cases, so to limit users' access only to information that concerned them (or that they were eventually authorized to process) and therefore prevent third parties from being able, after having passed the IT authentication procedure, to use functions to which they were not authorized simply by modifying some parameters in the URL;

Engineering Ingegneria Informatica S.p.A. has demonstrated a high level of cooperation by working to immediately introduce suitable measures to overcome the vulnerabilities highlighted above;

Engineering Ingegneria Informatica S.p.A. has not been the recipient of other sanctioning and corrective measures in relation to the case in question.

In light of the above elements and the assessments made, it is believed, in this case, to apply to the company Engineering Ingegneria Informatica S.p.A. the administrative sanction of the payment of a sum equal to Euro 10,000.00 (ten thousand/00).

In this context, it is also believed that, pursuant to art. 166, paragraph 7, of the Code and art. 16, paragraph 1, of the Regulation of the Guarantor no. 1/2019, it is necessary to proceed with the publication of this chapter containing the injunction order on the website of the Guarantor.

GIVEN ALL THE ABOVE, THE GUARANTOR

a) pursuant to art. 57, par. l, letter a) and 83 of the Regulation, declares the unlawfulness of the processing of personal data carried out by the company Engineering ingegneria informatica S.p.A. with registered office in Piazzale dell’Agricoltura 24, 00144 Rome (VAT number: 05724831002 - Tax code: 00967720285), for the violation of the principles of integrity and confidentiality (art. 32 of the Regulation), within the terms set out in the reasons;

ORDERS

b) pursuant to art. 58, par. 2, letter i) of the Regulation, to the aforementioned Company to pay the sum of Euro 10,000.00 (ten thousand/00) as an administrative pecuniary sanction for having violated art. 32 of the Regulation, as described above;

ORDERS

c) to the company Engineering ingegneria informatica S.p.A. to pay the aforementioned sum of Euro 10,000.00 (ten thousand/00), according to the methods indicated in the attachment, within thirty days of notification of this provision, under penalty of the adoption of the consequent executive actions pursuant to art. 27 of law no. 689/1981. It is represented that pursuant to art. 166, paragraph 8 of the Code, the right for the offender to settle the dispute by paying - always according to the methods indicated in the attachment - an amount equal to half of the fine imposed within the deadline referred to in art. 10, paragraph 3, of Legislative Decree no. 150 of 1 September 2011 provided for the filing of the appeal as indicated below.

PROVIDES

d) pursuant to art. 166, paragraph 7, of the Code and art. 16, paragraph 1, of the Regulation of the Guarantor no. 1/2019, the publication of the injunction order on the website of the Guarantor;

e) pursuant to art. 154 bis, paragraph 3 of the Code, provides for the publication of this provision on the website of the Guarantor;

f) pursuant to art. 17 of the Guarantor Regulation no. 1/2019, the annotation of the violations and measures adopted in accordance with art. 58, paragraph 2 of the Regulation, in the internal register of the Authority provided for by art. 57, paragraph 1, letter u) of the Regulation.

Pursuant to art. 78 of the Regulation, arts. 152 of the Code and 10 of Legislative Decree no. 150/2011, against this provision it is possible to appeal before the ordinary judicial authority, under penalty of inadmissibility, within thirty days from the date of communication of the provision itself or within sixty days if the appellant resides abroad.

Rome, November 27, 2024

THE PRESIDENT
Stanzione

THE REPORTER
Ghiglia

THE GENERAL SECRETARY
Mattei
