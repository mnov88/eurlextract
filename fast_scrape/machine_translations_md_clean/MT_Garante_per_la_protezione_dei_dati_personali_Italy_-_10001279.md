# Garante per la protezione dei dati personali (Italy) - 10001279

## Case Information

**Authority:** Garante per la protezione dei dati personali (Italy)

**Jurisdiction:** Italy

**Relevant Law:** Article 5(1)(a) GDPRArticle 5(1)(f) GDPRArticle 9 GDPRArticle 25 GDPRArticle 32 GDPRArticle 34 GDPR

**Type:** Complaint

**Outcome:** Upheld

**Decided:** 22.02.2024

**Published:** 10.04.2024

**Fine:** 75,000 EUR

**Parties:** Azienda sanitaria dell'Alto Adige - Südtiroler Sanitätsbetrieb

**National Case Number/Name:** 10001279

**European Case Law Identifier:** n/a

**Appeal:** Unknown

**Original Language(s):** Italian

**Original Source:** Garante (in IT)

**Initial Contributor:** Martina Levi

The DPA ordered a healthcare facility to adopt technical measures apt to prevent unauthorised personnel from using a simple self-certification to justify their need to access patients’ medical records.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

The DPA received two complaints and two infringement notifications alleging unlawful processing of personal data carried out by Azienda sanitaria dell'Alto Adige - Südtiroler Sanitätsbetrieb (the controller) through their health data record system. Specifically, repeated accesses were made to the electronic health record (‘HER’) system by unauthorized healthcare personnel. In fact, some of the staff members had unrestricted access to the dossier of patients they did not treat.

The data subjects complained about repeated access to the controller’s system concerning their health records during a period of time when he was not in the hospital or undergoing treatment. The controller argued that some of the accesses were repeated within a very short period of time for technical reasons. However, they admitted that some accesses were "unjustified" or limited to "only the list of health services performed and not the relevant details". The controller explained that the system currently allows healthcare workers to access the EHR if there is a clinical-administrative event present. In cases where no clinical-administrative event is traced in the system (e.g., patient calling the professional for post-hospitalization clarifications), the healthcare worker can access the EHR by selecting an appropriate reason from a predefined list. In one case, a healthcare worker was able to access the laboratory tests of her ex-husband without his knowledge. The worker was then subject to disciplinary proceedings and consequently suspended following a complaint for abusive access pursuant to Article 615-ter of the Italian Criminal Code.

Additionally, the DPA discovered that EHR files were not protected by a system for detecting any anomalies that could constitute unlawful processing, such as alerts.

### Holding

The DPA emphasized the importance of using tools to detect alerts signaling anomalous or risky behavior by authorized data processors to comply with the principles under Article 5(1)(a) and (f) GDPR. Additionally, the DPA referred to the ‘Guidelines on the subject of the Health Dossier - 4 June 2015’ in which it recommended adoption of stringent security measures which pertain to such delicate processing operations involving sensitive data.

Before the opening of the inquiry, there were two ways of accessing the dossier: either the patient was under the care of the health professional, or the professional made a self-declaration. The DPA ordered the controller to deactivate this self-declaration method and replace it with documented patient intake. Some other requirements laid down by the DPA for access to the EHR of a patient are as follows:

1\. being medical personnel intervening in various capacities in the care process,

2\. access limited to the time during which the care process takes place (without prejudice to the possibility of accessing the file again if this is necessary by virtue of the type of medical treatment to be given to the person concerned).

Given the handling of particularly sensitive data and the necessity for strict access controls, it is evident that an organization must employ tools like a SIEM (Security Information and Event Management) integrated with an EDR (Endpoint Detection and Response) or XDR (Extended Detection and Response). These tools allow for the anonymous detection of anomalies in web traffic, access to file servers, and databases. If these anomalies reach a level that could compromise the computer systems, the organization can then proceed to an 'unencrypted' detection by intervening directly on the PC that caused the anomaly.

In conclusion, the DPA found the controller in breach of Articles 5(1)(a) and (f), 9, 25 and 32 GDPR. A fine of €75,000 was imposed for allowing indiscriminate access to the EHR system by its employees and for failing to implement tools and systems capable of detecting anomalies in authentication and authorization procedures.

In addition, the DPA ordered the controller to implement all the necessary technical and organizational measures to guarantee the security of the processed personal data and to prevent new abusive access.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Italian original. Please refer to the Italian original for more details.

```
 

SEE ALSO Newsletter of 10 April 2024

 

\[doc. web no. 10001279\]

Provision of 22 February 2024

Register of measures
n. 97 of 22 February 2024

THE GUARANTOR FOR THE PROTECTION OF PERSONAL DATA

IN today's meeting, which was attended by prof. Pasquale Stanzione, president, Prof. Ginevra Cerrina Feroni, vice-president, Dr. Agostino Ghiglia and the lawyer. Guido Scorza, members and the councilor. Fabio Mattei, general secretary;

HAVING REGARD to Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 /CE, “General Data Protection Regulation” (hereinafter “Regulation”);

HAVING REGARD TO Legislative Decree 30 June 2003, n. 196 containing "Code regarding the protection of personal data, containing provisions for the adaptation of national law to Regulation (EU) 2016/679 of the European Parliament and of the Council, of 27 April 2016, relating to the protection of natural persons with regard to the processing of personal data, as well as the free circulation of such data and which repeals Directive 95/46/EC (hereinafter the “Code”);

GIVEN Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor for the protection of personal data, approved with resolution no. 98 of 4/4/2019, published in the Official Gazette. n. 106 of 8/5/2019 and in www.gpdp.it, doc. web n.9107633 (hereinafter “Guarantor Regulation n. 1/2019”);

HAVING SEEN the documentation in the documents;

GIVEN the observations formulated by the Secretary General pursuant to art. 15 of the Guarantor's Regulation no. 1/2000 on the organization and functioning of the office of the Guarantor for the protection of personal data, in www.gpdp.it, doc. web n.1098801;

Speaker Dr. Agostino Ghiglia;

PREMISE

1. Complaints, violations of personal data and preliminary investigations

The Authority has received two complaints and two infringement notifications regarding the processing of personal data carried out by the Alto Adige Health Authority (hereinafter Company or ASDAA) through the company health dossier. In particular, repeated access to the dossier by healthcare personnel who, although authorized to carry out the treatment, was not involved in the treatment process of the subjects to whom the healthcare dossiers referred were reported.

With reference to the first complaint presented by Mr. XX, who complained about repeated access to the company health file which "does not coincide with the dates in which (he was) (..) admitted or treated in hospital", the Office requested information to the aforementioned Company (notes of the XX, XX and XX) to which confirmation was provided with the notes of the XX, XX and XX, in which it was represented, in particular, that:

“From the in-depth analysis of the accesses it emerged that out of 1309 (accesses), 780 were made by the interested party himself, who in this case is an employee of the healthcare company with a professional healthcare profile authorized to access the DSE itself”;

"Regarding the complex of accesses mentioned above, it is highlighted that part of them were repeated in a very short time by the same operator for technical reasons and therefore can be traced back to single accesses, thus reducing the number of accesses to the interested party's DSE". From the list of accesses provided by the Company it can be seen that it has marked some as "not justified" or limited to "only the list of health services performed and not the related details" with reference to which it declared to initiate "the necessary and consequent disciplinary proceedings”;

“At present, if there is a clinical-administrative event in the system (hospitalisation, access to the emergency room, specialist service), the health worker is given the opportunity to access the DSE. In situations in which there is no clinical-administrative event, tracked at an IT level (e.g. patient calling the professional for post-hospitalisation clarifications), the healthcare worker has the possibility of accessing the DSE by choosing a specific item within a predefined list which is substantiated as follows: In danger of life/emergency; Prevention/diagnosis/treatment/rehabilitation of patients in care but not registered in the expected computerized pathways";

“the healthcare professional can provide additional specification to better motivate access to the DSE. In the event of access by selecting an item from a predefined list, the operator is asked to confirm his choice with a simple electronic signature";

“The health authority has sent two circulars to health workers, respectively in April and August of this year, reiterating that the DSE is the tool that documents the health history of the interested party and can be consulted exclusively by staff healthcare professional who takes care of the patient";

“there will be an update of the data processing authorizations as well as a first course scheduled for the XX with the subject “Personal data protection and Digital Health””;

“healthcare professionals who work exclusively in the administrative field for example. to the CUP, cannot access the DSE, just as health workers, doctors, nurses and other health professionals operating within the forensic medicine service, the occupational medicine service, and in medical directorates cannot access the DSE";

“At present the Health Authority has activated an automatic alert aimed at detecting anomalies in repeated accesses to the DSE in significant numbers”; the activation of a second alert is being completed, all to prevent/identify any abuse as soon as possible";

"regarding the question whether Company employees can still access their health dossier with the health profile, "following the sending of the relevant circular in April this year, the Company has taken steps to close access, to starting from the XX, of its employees with a health profile at its DSE.

Subsequently, with reference to the second complaint received from Mr. XX and in relation to which the Company issued a violation notification on XX, subsequently integrated on XX, the Company declared, in particular, that:

between XX and XX "A total of 5 inappropriate accesses appeared to have been made to the DSE (health record) of an interested party";

“Two doctors and a nurse had access to the DSE of an interested party in the aforementioned time period, respectively: Doctor (A) XX; XX; XX; Doctor (B) XX; Nurse XX. On such occasions it appears that the interested party has not been taken care of by the services in which these professionals are/were employed. Specifically, the Company contacted the Doctor (A) and the nurse to acquire information on the reason for the access and they highlighted the following: Doctor (A) reported that he was involved in the treatment process on XX by an ED doctor when the interested party actually had access to the ED. The nurse reported that she had performed the Triage at the ED on XX date but did not remember the access on XX. The Company has not yet been able to contact Doctor (B) as he is no longer working in the Company and in this regard has requested the relevant contact details from the personnel office to ask for clarification".

With regard to the facts described above, the Company has communicated to the interested party the aforementioned violation of personal data which concerned him pursuant to art. 34 of the Regulation.

In relation to the investigations described above, the Office, with note dated XX (protocol n. XX) ordered the joining of the proceedings and requested further information regarding the methods of access to the dossier at the time of the facts which were the subject of the complaints with reference to which the Company represented, in particular, that:

− “Between XX and XX the list of reasons that allowed access to the health dossier included further” cases, namely: “in danger of life/emergency; prevention/diagnosis/treatment/rehabilitation of patients in care but not registered in the foreseen computerized pathways; critical review for analysis and possible improvement of treatment paths; sampling/transplant process; Medical management: regulatory/organizational obligations; Tumor registry: consultation. Following the start of data breach proceedings and alert activation activities, the list was reduced to the following: In danger of life / emergency; Prevention/diagnosis/treatment/rehabilitation of patients in care but not registered in the expected computerized paths. The operator, therefore, at present can only choose between the two items above and subsequently, once one of them has been chosen, has the possibility, in a free field, to note down any further addition in terms of reason for access”;

− "From a further check in association with the "illegal accesses" there appear to be no clinical administrative events traced at an IT level, in favor of the complainants",

− "activated an alert which is based on the quantity of accesses to the DSE of the individual interested party (number 0 greater than 10) and for each individual operator, creating the conditions to determine a cross-examination and in-depth verification of the activity of the operator involved".

Following these elements, the Office, with note dated XX (prot. n. XX), requested further information from the Company, which, with note dated XX, stated, in particular, that:

“where consent to the processing of data has not been expressed through the dossier, access to these data is not permitted”;

"The Company, in consideration of the need to guarantee and ensure that only the company healthcare personnel involved in the treatment process of the interested party can access the DSE has currently provided for the activation of the (automatic) alerts referred to in our previous note. Specifically, an alert which is based on the quantity of accesses to the DSE of the individual interested party (number 0 greater than 10) (already described and)(...) a second alert which automatically detects accesses to the DSE for which there appear to be no active clinical administrative events (hospitalisation, ongoing outpatient service/health service in general e.g. diagnostic test), the reason in the above list, chosen by the operator accessing the DSE, as well as any addition is automatically highlighted further in terms of reasons for access that the operator could cite”;

“the Company has planned the introduction and use of a new “NGH” SW which will be operational throughout the entire Company by the middle of next year and which will operate in light of the indications adopted by the management on the basis of careful monitoring which will be carried out by a special working group on the DSE established for this purpose";

with regard to the different authorization profiles for access to the dossier provided within the Company, the Company has produced a table in which it has highlighted the degree of depth of access to the dossier allowed for each type of operator;

with reference to the measures adopted to limit access to the dossier at the time in which the treatment process takes place, he stated that "only in the XX - 2 circulars were sent to all healthcare professionals regarding the correct use of the DSE; already last year, related targeted training was planned which will be in FAD mode and will be fully implemented in the current year and will be administered to all operators authorized to access the DSE. In consideration of the high number and role of healthcare professionals who have access to the DSE (see attachments relating to point 4), the Company, as reported above, has activated a working group made up of the privacy control room, IT division and representatives of the health and technical assistance management in order to review the roles of access and the degree of depth of access itself, all by the XX. At present, in order not to create a disservice before closing the accesses by default, it is hoped that within the times indicated in this document, the activity referred to can be completed and this Note can be integrated by the XX in order to be able to forward it to the Authority".

In relation to the results of the aforementioned preliminary investigation, the Office, with act no. XX of the XX, notified the Company, pursuant to art. 166, paragraph 5, of the Code, the initiation of the procedure for the adoption of the measures referred to in article 58, par. 2 of the Regulation, inviting the aforementioned owner to produce defensive writings or documents to the Guarantor or to request to be heard by the Authority (art. 166, paragraphs 6 and 7, of the Code; as well as art. 18, paragraph 1, of law no. 689 of 11/24/1981).

Following the aforementioned notification, the Company sent its defense briefs with note dated XX (protocol no. XX), requesting to be heard. Following the hearing held on the 20th, the Company integrated the documentation into documents with a note dated 20th.

On the same date (XX) the Company also sent a new notification of violation pursuant to art. 33 of the Regulation with reference to a case similar to those already under investigation. In particular, in this last notification it was communicated that an "employee (healthcare professional)" had access to the health file of a patient, as well as his spouse, not under treatment by the same in the period between XX and XX . Through such repeated access, the aforementioned professional viewed her husband's laboratory tests outside of his treatment path and without his knowledge. According to what was stated in the aforementioned notification, the aforementioned professional was subjected to disciplinary proceedings.

In the aforementioned notification, the Company also recalled what was already represented in the communication sent on the same date to the Office regarding the similar investigations underway relating to the processing of data carried out through the company dossier.

Given this, in relation to the aforementioned notification made on XX on treatments similar to those already under investigation, the Office, with act no. XX of the XX, in recalling in full what was already represented in the aforementioned notification of violation of the XX (prot. pursuant to art. 166, paragraph 5, of the Code, that the configuration of the company health dossier was carried out in violation of the basic principles of treatment referred to in the articles. 5, par. 1, letter. a), c) and f), 9, 25 and 32 of the Regulation, inviting the aforementioned owner to produce defensive writings or documents to the Guarantor or to request to be heard by the Authority (art. 166, paragraphs 6 and 7, of the Code; as well as art. 18, paragraph 1, of law no. 689 of 24/11/1981).

Following the aforementioned notification, the Company sent further defense briefs with note dated XX (protocol n. XX), requesting to be heard. The hearing took place remotely on the 20th.

In the aforementioned defense briefs (notes of the XX, XX and XX) and during the hearings of the XX and XX, the Company represented in particular:

“the negligent nature of the violations”;

with reference to the "last episode notified to the Guarantor, the disciplinary proceedings were suspended since the interested party informed the disciplinary commission of the presentation of a formal complaint/complaint against him/her in relation to the alleged crime referred to in the art. 615 ter of the Criminal Code;

“Following the start of the investigation by the Guarantor, the methods of access to the company health file were changed. Before the changes there were two access methods: patient in the care of the healthcare professional; self-declaration of the professional. This last modality will be deactivated and replaced with a documented acceptance of the patient. An investigation is currently underway to find out the opinion of clinicians regarding these changes with reference to the possible impact in terms of care";

“With specific reference to self-declarations, the Company decided to eliminate them as the illicit access had occurred precisely through this method. At the same time, the Company aims to define specific treatment paths in order to avoid excluding access to the dossier from a clinician who has taken care of the interested party";

to have taken steps to:" send three circulars on the DSE to health professionals during the XX; to close the possibility of access for health professionals to their DSE; to activate a specific working group on the DSE which involves all company management as well as the IT department and the privacy control room; to forward further communication to health professionals regarding the launch of the new methods of access to the DSE (...); to re-evaluate existing alerts; to further review the depth of access of health professionals; to prepare what is necessary for the launch, within the year, of a first basic course on data protection for all ASDAA employees, all in bilingual and fad mode";

that "the method of access to the DSE through "Self-certification" will be adapted starting from the XX with a view to guaranteeing access to the DSE by healthcare professionals with methods that always track the taking charge of the patient in light of the performances provided and the clinical pathways activated, and in relation only to the professionals actually involved in the patient's care pathway, without this necessarily implying the physical presence of the patient in the facility (e.g. for specialist consultation, teleconsultation, televisit, clinical case evaluation and subsequent healthcare service planning)” (circular of the XX);

The Company also produced a document drawn up in the 20th century entitled "ASDAA health dossier" in which the methods with which the processing of personal data is carried out within the company health dossier were described following the changes made following the start of the investigation activity by the Guarantor, with reference to which it was represented that:

"the purposes pursued through the establishment of the DSE are to be traced back, for the Company, exclusively to the purposes of patient care and that is prevention, diagnosis, treatment and rehabilitation, to the exclusion of any other purpose, it is important to underline that at present the DSE of the Alto Adige Health Authority as well as not containing the so-called data with greater protection (i.e. relating to acts of sexual violence or pedophilia, HIV infection, pathological addictions, services provided to women who undergo voluntary interruption interventions pregnancy or who decide to give birth anonymously)”;

the consent of the interested party is required for the creation of the dossier and for the recovery in it of the data relating to the events generated before the manifestation of consent;

with reference to access to the dossier, "The method of authorization and control of access to data and resources based on role and profile, associates roles with each actor who needs to interact with the system. Each role defines a certain series of basic rights that the actor of that role can exercise, the roles are assigned on the basis of the responsibilities inherent to the activities carried out in the organization";

“Access occurs by roles (professional profiles). Each role is allowed a specific scope of vision consistent with its needs and skills";

“For healthcare professionals, the operational context of access to the DSE is determined by the role assigned to them, as well as by the status of the “open” or “not open” event or case (hereinafter open and/or closed event) and by the structure of belonging. Specifically, an open event or case means a service in progress (hospitalization, outpatient service, etc.) or that it is scheduled in the following 30 days or that it occurred in the previous 30 days. In the event of an open event: ➢ OU in charge of the patient: this is the one that carries out the service or takes care of the predominant part of it (e.g. hospitalization, PAC, integrated clinic, etc.). In general terms, the healthcare professional has access to all the information contained in the patient's DSE, as long as the case remains open. Accesses events produced by the OU itself without formalities. ➢ Other OU: in case of need for treatment (e.g. consultancy, co-management of the case, and further cases listed below) in general terms the healthcare professional accesses all the information contained in the patient's DSE in the care of another OU for a period connected to the provision of the consultancy (opening period of the consultancy managed in a similar way to the opening period of the event). This is an event traced by a specific computerized request (e.g. via Order Entry)”;

“In view of the unification of the various IT systems in use in the Company, expected for the end of the 20th century, it is necessary to distinguish between contexts in which order entry is fully operational and contexts in which it is not yet operational everywhere”, with reference to which 6 cases have been foreseen: consultancy, interview with patient, Multidisciplinary Teleconsultation, Emergency, Request for Consultation from GP/PLS, Pre-hospitalization;

automatic alerts were activated with respect to an interested party (more than 10 daily accesses to the dossier) also capable of detecting "accesses to the DSE for which events have been opened".

With note dated XX, the Office requested further information regarding the deadline within which "order entry" will be fully operational for all reference contexts, the time limits possibly envisaged with reference to access to the dossier by of the professional roles indicated in the aforementioned document and the technical-scientific reasons that would make it essential for the roles of speech therapist, ophthalmology assistant, podiatrist, dental hygienist, masseur and masseur-physiotherapist and audiometrist technician to access the multiple types of information indicated in table 5 of the document "Dossier ASDAA healthcare system", given that the aforementioned document does not provide limits on the temporal depth of access to this information.

With a note dated XX, the Company responded to the aforementioned request for information, representing, in particular, that:

there have been "further changes compared to what was communicated on XX, changes that will continue to be made, both in relation to the findings of the working group itself, and in light of the progress of the standardization activities of the company IT system";

"to highlight the deadline within which this module will be fully operational for all reference contexts, it is necessary to refer to the dissemination plans for the Acceptance, Discharge, Transfer (ADT) and Emergency Room (PS) modules" from which "it can be seen that the last activities to be concluded according to the timetable will be (...) in the hospitals of Brunico and San Candido. (XX)”, ending on XX “;

"it was decided not to provide time limits for access for doctors (including dentists operating in the hospital context, without prejudice to the fact that by the end of January XX access to the DSE will be closed for dentists operating only in the local context), vice versa of the time limits of two years for the additional health professions referred to in the table below, all starting from the XX";

“As part of the actions to improve the management of access depths carried out, during the summer a further reconnaissance was carried out to refine the management of the access depth to the DSE by carrying out interviews with the representatives of the health professions involved and analysis of the access logs access to the health record. After this survey, the depth of access regarding the type of documents accessible was revised and in most cases further limited. Regarding the professions mentioned above, the following changes have been made:• Podiatrist: access to the DSE removed; • Dental hygienist: access to the DSE removed; • Massage physiotherapist and masseur/rice: access to the DSE removed;  Speech therapist: access to the DSE removed; • Orthoptist-ophthalmology assistant: access to the DSE removed; • Audiometrist technician: access to the DSE removed"; The monitoring activity as highlighted above will continue and there may certainly be changes both in terms of the temporal depth of access and the mere depth of access to the various documents referred to in the table" already sent to the Authority which has been sent again in updated mode .

2. Outcome of the preliminary investigation.

At the outset, it is stated that the processing of personal data must take place in compliance with the applicable legislation on the protection of personal data and, in particular, with the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (hereinafter, the “Regulation”) and Legislative Decree no. 196 of 30 June 2003 (Code regarding the protection of personal data - hereinafter, the "Code").

With particular reference to the issue in question, it is highlighted that personal data must be "processed in a lawful, correct and transparent manner" (principle of "lawfulness, correctness and transparency" and "in a manner that guarantees adequate security (...), including the protection, through adequate technical and organizational measures, from unauthorized or illicit processing (principle of “integrity and confidentiality”)” (art. 5, par. 1, letters a) and f) of the Regulation).

Furthermore, the data must be adequate, relevant and limited to what is necessary with respect to the purposes for which they are processed (data minimization principle) (art. 5, par. 1, letter c) of the Regulation).

The Regulation then requires the data controller to implement "adequate technical and organizational measures to guarantee a level of security appropriate to the risk", taking into account, among other things, "the nature, object, context and purposes of the processing, as well as the risk of varying probability and severity for the rights and freedoms of natural persons" (art. 32 of the Regulation).

With reference to the treatments covered by this provision, the Guarantor has adopted the "Guidelines on health records - 4 June 2015" (Provision dated 4.6.2015, published in Official Journal 164 of 17 July 2015, available on www.gpdp.it web doc no. 4084632), which, like the other provisions of the Authority, continue to apply even after the full application of the Regulation, as they are compatible with it (art. 22, paragraph 4, Legislative Decree no. 101/ 2018).

In the aforementioned Guidelines, the Guarantor, in order to avoid the risk of access to the information processed through the health file by unauthorized parties or communication of health data to third parties by persons authorized to do so, specifically asked the owner of the processing to pay particular attention in the identification of the authorization profiles and in the training of authorized subjects, access to the dossier must be limited only to healthcare personnel who intervene in the patient care process and technical methods of authentication of the dossier must be adopted which reflect the cases of access to this tool specific to each healthcare facility. To this end, in the aforementioned Guidelines, the Guarantor has indicated to the data controllers to carry out monitoring of the cases in which the relevant healthcare personnel may need to consult the healthcare dossier, for purposes of treatment of the interested party and, based on this reconnaissance, identify the different access authorization profiles.

Access to the dossier must therefore be limited only to healthcare personnel who intervene over time in the patient care process. This means that access must only be allowed to personnel who in various capacities intervene in the treatment process. Access to the dossier must then be limited to the time in which the treatment process takes place, without prejudice to the possibility of accessing the dossier again if this becomes necessary regarding the type of medical treatment to be provided to the interested party.

As already represented by the Authority in the aforementioned Guidelines and in other provisions, taking into account the right of obscuring exercised by the interested party to the data accessible through the health dossier and therefore the possible incompleteness of this information tool, the owner must identify, in relation to the different functions to which the staff is assigned, technical organizational solutions that allow the administrative bodies of the health management to access, within the limits of the powers established by law, a more complete information base than that present in the company health dossier.

It is also stated that in the aforementioned Guidelines the Authority considered that the data controller must implement systems to control access also to the database and for the detection of any anomalies that could constitute illicit processing, through the use of indicators of anomalies (so-called alerts) useful for guiding subsequent audit interventions. The owner must therefore prefigure the activation of specific alerts that identify anomalous or risky behavior relating to the operations carried out by those in charge of processing (e.g. relating to the number of accesses performed, the type or time frame of the same).

With provision of 3 July 2014 (web doc. no. 3325808) the Authority had already intervened regarding the processing of data carried out through the ASDAA company health file. In this provision, the Guarantor had identified specific critical issues relating to the information and consent of the interested parties, prohibiting the Company from further processing of personal data, acquired without the informed consent of the interested parties and prescribing the necessary measures to make the processing lawful. .

With specific reference to the aspects of the processing covered by this provision, i.e. the need for access to the dossier to be permitted only to the staff who are actually treating the interested party, in the aforementioned provision the Guarantor noted that the health files could be consulted, at any time, by the health professions operating within the ASDAA regardless of whether they were treating the interested party. Given this, the Guarantor had ordered the Company to complete - by 20th the implementation of specific measures that would allow only healthcare professionals who were treating the patient at that moment (who had already expressed informed consent to the creation of the dossier) to access his health dossier and for the time in which the treatment process would have taken place (see deferral provision of 11 September 2014, web doc. no. 3494478).

Further critical issues had also been identified regarding the right of redaction, with reference to which the Guarantor had ordered the aforementioned company to implement specific measures that would allow the interested party to be able to express the desire to redact individual clinical events in their health dossier also relating to the past.

Following the adoption of the aforementioned 2014 provision, the Guarantor adopted the Guidelines on health dossiers (2015) also applicable to the health dossier kept by the Company. With the full application of the Regulation, the Company was also required to adapt this information tool to the principles of data protection from design and by default pursuant to art. 25 of the Regulation.

Having said this, having taken note of what is represented by the Company in the defense briefs relating to the proceedings indicated in the previous points, it is noted that:

1. Authorization profiles for access to the dossier. The configuration of the health dossier present at the moment in which the facts which were the subject of the complaint and notification of violation occurred allowed the health personnel to access this information tool relating to any patient who had been assisted by it, declaring the existence of a plurality of pre-arranged case studies. Although the Company had declared that it had complied with the aforementioned provision of the Guarantor of 3 July 2014, the measures implemented were not fully suitable to guarantee that only the healthcare personnel who were treating them could access a patient's health file, as then it was more analytically indicated by the Guarantor in the aforementioned 2015 Guidelines. In particular, as demonstrated by the cases in question, the original configuration of the health dossier carried out by this Company, even after the aforementioned provision of the Guarantor of 3 July 2014, made it in fact it is possible that through the use of a healthcare professional operating within the same it was possible to access the health dossier of interested parties who not only were not being treated by the owner of the user ("has not been taken care of by the services in which such professionals are/were on duty"), but which were not even associated with "administrative clinical events tracked at a computer level". The changes that the Company, following the notification of the violation referred to in the art. 166, paragraph 5 of the Code, declared that it wanted to achieve access to the dossier to overcome the critical issues identified during the investigation as: "the possibility of access to health professionals at their DSE" with the health profile was closed ; “Access occurs by roles (professional profiles). Each role is allowed a specific scope of vision consistent with its own needs and skills"; the roles of speech therapist, ophthalmology assistant, podiatrist, dental hygienist, masseur and massage physiotherapist and audiometrist technician were denied access to the dossier. These changes, as stated in the documents, will be fully operational for all reference contexts by the twentieth;

2. Alert for anomalous access to the health file. Following the start of the investigation by the Guarantor, the Company activated automatic alerts regarding the number of accesses and the control over the existence of an active clinical administrative event;

3. Purpose of the health dossier. Before the start of the investigation by the Guarantor, the Company had also allowed access to the health dossier by the staff of the Medical Directorate for "regulatory/organizational obligations" and for the "Tumor Registry: consultation". In this regard, it is highlighted that, given what is represented by the Authority in the aforementioned Guidelines, the owner must identify, in relation to the different functions to which the staff is assigned, specific profiles for access to the dossier also with reference to the administrative bodies of the health management, so that they can access, within the limits of the powers established by law, a more complete information base than that present in the company health dossier. Given the right of blackout that can be exercised by the interested party on the data present in the health file, this information tool may in fact not be complete. With specific reference to the tumor registry, it is noted that the methods of consultation of this registry are expressly provided for by the sector regulations, on which the Authority has given its opinion, which do not provide for the use of the health dossier (Opinion on a scheme of decree pursuant to art. 12, paragraph 13 of the legislative decree of 18 October 2012, n. 179, converted with amendments into law 17 December 2012, n no. 9773977). Subsequent to the initiation of the sanctioning procedure by the Authority, the Company represented that it had modified the cases of access to the dossier, pursuing with the same "exclusively" the "purpose of care for the patient and that is prevention, diagnosis, treatment and rehabilitation, to the exclusion of any other purpose". On this point, it is noted that medical management and the tumor registry are no longer indicated among the roles to which access is permitted.

4. therefore, the configuration of the dossier resulting at the time of the facts under investigation made it possible for healthcare personnel working at the Company to have unrestricted access to the healthcare files of patients who were not - at the time of access - being treated at the same, in violation of the basic principles of processing referred to in the articles. 5, par. 1, letter. a) and f) and 9 of the Regulation, as well as the principles of data protection from design (privacy by design) and by default (privacy by default) contemplated in the art. 25 of the Regulation;

5. the Authority had already intervened on the processing of the data in question with the provision of 3 July 2014 in which it was required, among other things, for the Company to implement specific measures that would allow only healthcare professionals who have that moment in which the patient is treated to access his health dossier for the time in which the treatment process takes place. These measures had to be adopted by 31 October 2014 (see deferment provision of 11 September 2014, web doc. no. 3494478). The Company, in complying with the 2014 provision of the Guarantor, identified technical and organizational measures which proved to be unsuitable because, as demonstrated by the facts in question, they did not prevent healthcare personnel from accessing the healthcare files of patients who had not under treatment and has not updated these measures in light of the 2015 Guarantor Guidelines nor upon full application of the Regulation;

6. the configuration of the dossier resulting at the time of the facts under investigation did not include a system for the detection of any anomalies that could constitute illicit processing, or the use of anomaly indicators (so-called alerts) aimed at identifying anomalous or risky behavior relating to the operations carried out by the subjects authorized to process (e.g. number of accesses performed, type or temporal scope of the same), useful for orienting subsequent audit interventions in violation of the principles of integrity and confidentiality of personal data (articles 5, par. 1, letter f) and 32 of the Regulation);

7. the Company has illustrated in the program notes the process of adapting the information systems used by "all reference contexts" which will be completed by the twentieth.

3. Conclusions.

In light of the assessments mentioned above, taking into account the declarations made by the data controller during the investigation ˗ and considering that, unless the fact constitutes a more serious crime, anyone, in proceedings before the Guarantor, falsely declares or certifies information or circumstances or produces false deeds or documents and is liable pursuant to art. 168 of the Code "False statements to the Guarantor and interruption of the execution of the tasks or exercise of the powers of the Guarantor" ˗ it is stated that the elements provided by the data controller in the defense briefs relating to the aforementioned proceedings do not allow the notified findings to be overcome by the Office with the documents initiating the proceedings for the adoption of corrective and sanctioning measures, as, moreover, none of the cases provided for by the art. 11 of the Guarantor Regulation n. 1/2019.

For these reasons, we note the illicit nature of the processing of personal data carried out by the Company with reference to the aforementioned proceedings initiated following notifications of violation and complaints, in the terms set out in the motivation, in particular, for having processed personal data in violation of the articles 5, par. 1, letter. a) and f), 9, 25 and 32 of the Regulation.

In this context, considering that disciplinary and, in one case, criminal proceedings have been initiated against the author of the access and that the necessary adjustments have been made to overcome the critical issues described above, the conditions for the adoption of the corrective measures referred to in art. 58, par. 2, of the Regulation.

4. Adoption of the injunction order for the application of the pecuniary administrative sanction and accessory sanctions (articles 58, paragraph 2, letters i and 83 of the Regulation; article 166, paragraph 7, of the Code).

The violation of the articles. 5, par. 2, letter. a) and f), 9, 25 and 32 of the Regulation, caused by the conduct of the Company, is subject to the application of the pecuniary administrative sanction pursuant to art. 83, par.4 and 5, of the Regulation.

In consideration of the fact that the aforementioned proceedings concern the same owner, similar processing of personal data, which occurred in the same time frame and that the Company in the defense briefs relating to the aforementioned proceedings has provided the same defensive elements, it is deemed appropriate to adopt the respective sanctions administrative in a single provision (articles 10, paragraph 4, and 19 of the Guarantor's Regulation no. 1/2019).

Consider that the Guarantor, pursuant to articles. 58, par. 2, letter. i) and 83 of the Regulation, as well as art. 166 of the Code, has the power to "impose a pecuniary administrative sanction pursuant to article 83, in addition to the \[other\] \[corrective\] measures referred to in this paragraph, or in place of such measures, depending on the circumstances of each single case" and, in this framework, "the Board \[of the Guarantor\] adopts the injunction order, with which it also provides for the application of the additional administrative sanction of its publication, in full or in extract, on the website of the Guarantor pursuant to article 166, paragraph 7, of the Code” (art. 16, paragraph 1, of the Guarantor Regulation no. 1/2019).
The aforementioned pecuniary administrative sanction imposed, depending on the circumstances of each individual case, must be determined in the amount taking into account the principles of effectiveness, proportionality and dissuasiveness, indicated in the art. 83, par. 1 of the Regulation, in light of the elements provided for in art. 85, par. 2, of the Regulation in relation to which for both procedures it is observed that:

- the Authority became aware of the event following two notifications of violation and two complaints (art. 83, par. 2, letter h) of the Regulation);

- with reference to all the events subject to notification and complaint, the illicit accesses concerned the health dossiers of three patients by health professionals who were not involved in the treatment process of the same and against whom proceedings were initiated disciplinary and in one case also criminal (art. 83, par. 2, letter a), b) and g) of the Regulation);

- in the case of the first and second complaint, which was also the subject of a violation notification, the accesses were not justified by clinical reasons (two in the first case and five in the second) and occurred in period XX, while in the case subject of the last violation notification between XX and XX (access by a Company employee to the spouse's health file without his knowledge) (art. 83, par. 2, letters a) and b) of the Regulation) ;

- the aforementioned accesses were possible because the measures in place with reference to data processing suitable for collecting health information carried out through the company health dossier were not fully proportionate in order to guarantee adequate security and integrity of personal data and to avoid unauthorized access, although the Authority had already intervened in this regard with the aforementioned provision of 3 July 2014 and subsequently with the 2015 Guidelines (art. 83, par. 2, letters d) and e) of the Regulation);

- the Company has modified the methods and circumstances of access to the company health file following the start of the investigation by the Authority, as well as introduced alert systems, cooperating with the Authority to this end (art. 83, par. 2, letters c) and f) of the Regulation);

Based on the aforementioned elements, evaluated as a whole, it is considered necessary to determine the amount of the pecuniary sanction provided for by the art. 83, par. 5, letter. a) of the Regulation, for the violation of the articles. 5, par. 1, letter. a) and f), 9, 25 and 32 of the Regulation to the extent:

- of 25,000 (twenty-five thousand) for the proceedings initiated following the complaint presented by Mr. XX;

- of 25,000 (twenty-five thousand) for the procedure initiated following the notification of violation of the XX, subsequently integrated on the XX, and the complaint presented by Mr. XX; And

- of 25,000 (twenty-five thousand) for the proceedings initiated following the notification of violation of the XX;

which administrative pecuniary sanctions are deemed to be, pursuant to art. 83, par. 1 of the Regulation, effective, proportionate and dissuasive.

It is also believed that the accessory sanction of publication of this provision on the Guarantor's website, provided for by art., should apply with reference to both procedures examined. 166, paragraph 7 of the Code and art. 16 of the Guarantor Regulation n. 1/2019, also in consideration of the type of personal data subject to unlawful processing.

Finally, it is noted that the conditions set out in art. 17 of Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

ALL THIS CONSIDERING THE GUARANTOR

declares the unlawfulness of the processing of personal data carried out, in both procedures described, by the Alto Adige Health Authority, for the violation of the art. 5, par. 1, letter. a) and f), 9, 25 and 32 of the Regulation within the terms set out in the justification.

ORDER

pursuant to the articles 58, par. 2, letter. i) and 83 of the Regulation, as well as art. 166 of the Code, to the Alto Adige Health Authority, tax code/VAT number no. 00773750211, to pay the total sum of 75,000 (seventy-five thousand) euros, defined as follows:

the sum of 25,000 (twenty-five thousand) euros as a pecuniary administrative sanction for the violations detected in the proceedings initiated following the complaint presented by Mr. XX, indicated in this provision;

the sum of 25,000 (twenty-five thousand) euros as a pecuniary administrative sanction for the violations detected with the violation notification of XX, subsequently integrated into XX, and of the complaint presented by Mr. XX, indicated in this provision;

the sum of 25,000 (twenty-five thousand) euros as a pecuniary administrative sanction for the violations detected with the notification of violation of the XX, indicated in this provision;

according to the methods indicated in the attachment, within 30 days of the notification in the justification; it is represented that the offender, pursuant to art. 166, paragraph 8, of the Code, has the right to settle the dispute by paying, within 30 days, an amount equal to half of the sanctions imposed.

ORDERS

to the aforementioned Company, in the event of failure to resolve the dispute pursuant to art. 166, paragraph 8, of the Code, to pay the total sum of 75,000 (seventy-five thousand) euros according to the methods indicated in the annex, within 30 days of notification of this provision, under penalty of the adoption of the consequent executive acts in accordance with the art. 27 of law no. 689/1981.

HAS

pursuant to art. 166, paragraph 7, of the Code, the publication in full of this provision on the Guarantor's website and believes that the conditions set out in the art. 17 of Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

Pursuant to art. 78 of the Regulation, of the articles. 152 of the Code and 10 of Legislative Decree no. 150/2011, it is possible to appeal against this provision before the ordinary judicial authority, under penalty of inadmissibility, within thirty days from the date of communication of the provision itself or within sixty days if the appellant resides abroad.

Rome, 22 February 2024

PRESIDENT
Stanzione

THE SPEAKER
Ghiglia

THE GENERAL SECRETARY
Mattei

 

SEE ALSO Newsletter of 10 April 2024

 

\[doc. web no. 10001279\]

Provision of 22 February 2024

Register of measures
n. 97 of 22 February 2024

THE GUARANTOR FOR THE PROTECTION OF PERSONAL DATA

IN today's meeting, which was attended by prof. Pasquale Stanzione, president, Prof. Ginevra Cerrina Feroni, vice-president, Dr. Agostino Ghiglia and the lawyer. Guido Scorza, members and the councilor. Fabio Mattei, general secretary;

HAVING REGARD to Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 /CE, “General Data Protection Regulation” (hereinafter “Regulation”);

HAVING REGARD TO Legislative Decree 30 June 2003, n. 196 containing "Code regarding the protection of personal data, containing provisions for the adaptation of national law to Regulation (EU) 2016/679 of the European Parliament and of the Council, of 27 April 2016, relating to the protection of natural persons with regard to the processing of personal data, as well as the free circulation of such data and which repeals Directive 95/46/EC (hereinafter the “Code”);

GIVEN Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor for the protection of personal data, approved with resolution no. 98 of 4/4/2019, published in the Official Gazette. n. 106 of 8/5/2019 and in www.gpdp.it, doc. web n.9107633 (hereinafter “Guarantor Regulation n. 1/2019”);

HAVING SEEN the documentation in the documents;

GIVEN the observations formulated by the Secretary General pursuant to art. 15 of the Guarantor's Regulation no. 1/2000 on the organization and functioning of the office of the Guarantor for the protection of personal data, in www.gpdp.it, doc. web n.1098801;

Speaker Dr. Agostino Ghiglia;

PREMISE

1. Complaints, violations of personal data and preliminary investigations

The Authority has received two complaints and two infringement notifications regarding the processing of personal data carried out by the Alto Adige Health Authority (hereinafter Company or ASDAA) through the company health dossier. In particular, repeated access to the dossier by healthcare personnel who, although authorized to carry out the treatment, was not involved in the treatment process of the subjects to whom the healthcare dossiers referred were reported.

With reference to the first complaint presented by Mr. XX, who complained about repeated access to the company health file which "does not coincide with the dates in which (he was) (..) admitted or treated in hospital", the Office requested information to the aforementioned Company (notes of the XX, XX and XX) to which confirmation was provided with the notes of the XX, XX and XX, in which it was represented, in particular, that:

“From the in-depth analysis of the accesses it emerged that out of 1309 (accesses), 780 were made by the interested party himself, who in this case is an employee of the healthcare company with a professional healthcare profile authorized to access the DSE itself”;

"Regarding the complex of accesses mentioned above, it is highlighted that part of them were repeated in a very short time by the same operator for technical reasons and therefore can be traced back to single accesses, thus reducing the number of accesses to the interested party's DSE". From the list of accesses provided by the Company it can be seen that it has marked some as "not justified" or limited to "only the list of health services performed and not the related details" with reference to which it declared to initiate "the necessary and consequent disciplinary proceedings”;

“At present, if there is a clinical-administrative event in the system (hospitalisation, access to the emergency room, specialist service), the health worker is given the opportunity to access the DSE. In situations in which there is no clinical-administrative event, tracked at an IT level (e.g. patient calling the professional for post-hospitalisation clarifications), the healthcare worker has the possibility of accessing the DSE by choosing a specific item within a predefined list which is substantiated as follows: In danger of life/emergency; Prevention/diagnosis/treatment/rehabilitation of patients in care but not registered in the expected computerized pathways";

“the healthcare professional can provide additional specification to better motivate access to the DSE. In the event of access by selecting an item from a predefined list, the operator is asked to confirm his choice with a simple electronic signature";

“The health authority has sent two circulars to health workers, respectively in April and August of this year, reiterating that the DSE is the tool that documents the health history of the interested party and can be consulted exclusively by staff healthcare worker who takes care of the patient";

“there will be an update of the data processing authorizations as well as a first course scheduled for the XX with the subject “Personal data protection and Digital Health””;

“healthcare professionals who work exclusively in the administrative field for example. to the CUP, cannot access the DSE, just as health workers, doctors, nurses and other health professionals operating within the forensic medicine service, the occupational medicine service, and in medical directorates cannot access the DSE";

“At present the Health Authority has activated an automatic alert aimed at detecting anomalies in repeated accesses to the DSE in significant numbers”; the activation of a second alert is being completed, all to prevent/identify any abuse as soon as possible";

"regarding the question whether Company employees can still access their health dossier with the health profile, "following the sending of the relevant circular in April this year, the Company has taken steps to close access, to starting from the XX, of its employees with a health profile at its DSE.

Subsequently, with reference to the second complaint received from Mr. XX and in relation to which the Company issued a violation notification on XX, subsequently integrated on XX, the Company declared, in particular, that:

between XX and XX "A total of 5 inappropriate accesses appeared to have been made to the DSE (health record) of an interested party";

“Two doctors and a nurse had access to the DSE of an interested party in the above-mentioned time period, respectively: Doctor (A) XX; XX; XX; Doctor (B) XX; Nurse XX. On such occasions it appears that the interested party has not been taken care of by the services in which these professionals are/were employed. Specifically, the Company contacted the Doctor (A) and the nurse to acquire information on the reason for the access and they highlighted the following: Doctor (A) reported that he was involved in the treatment process on XX by an ED doctor when the interested party actually had access to the ED. The nurse reported that she had performed the Triage at the ED on XX date but did not remember the access on XX. The Company has not yet been able to contact Doctor (B) as he is no longer working in the Company and in this regard has requested the relevant contact details from the personnel office to ask for clarification".

With regard to the facts described above, the Company has communicated to the interested party the aforementioned violation of personal data which concerned him pursuant to art. 34 of the Regulation.

In relation to the investigations described above, the Office, with note dated XX (protocol n. XX) ordered the joining of the proceedings and requested further information regarding the methods of access to the dossier at the time of the facts which were the subject of the complaints with reference to which the Company represented, in particular, that:

− “Between XX and XX the list of reasons that allowed access to the health dossier included further” cases, namely: “in danger of life/emergency; prevention/diagnosis/treatment/rehabilitation of patients in care but not registered in the foreseen computerized paths; critical review for analysis and possible improvement of treatment paths; sampling/transplant process; Medical management: regulatory/organizational obligations; Tumor registry: consultation. Following the start of data breach proceedings and alert activation activities, the list was reduced to the following: In danger of life / emergency; Prevention/diagnosis/treatment/rehabilitation of patients in care but not registered in the foreseen computerized paths. The operator, therefore, at present can only choose between the two items above and subsequently, once one of them has been chosen, has the possibility, in a free field, to note down any further addition in terms of reason for access”;

− "From a further check in association with the "illegal accesses" there appear to be no clinical administrative events traced at an IT level, in favor of the complainants",

− "activated an alert which is based on the quantity of accesses to the DSE of the individual interested party (number 0 greater than 10) and for each individual operator, creating the conditions to determine a cross-examination and in-depth verification of the activity of the operator involved".

Following these elements, the Office, with note dated XX (prot. n. XX), requested further information from the Company, which, with note dated XX, stated, in particular, that:

“where consent to the processing of data has not been expressed through the dossier, access to these data is not permitted”;

“The Company, in consideration of the need to guarantee and ensure that only the company healthcare personnel involved in the treatment process of the interested party can access the DSE has currently provided for the activation of the (automatic) alerts referred to in our previous note. Specifically, an alert which is based on the quantity of accesses to the DSE of the individual interested party (number 0 greater than 10) (already described and)(...) a second alert which automatically detects accesses to the DSE for which there appear to be no active clinical administrative events (hospitalisation, ongoing outpatient service/health service in general e.g. diagnostic test), the reason in the above list, chosen by the operator accessing the DSE, as well as any addition is automatically highlighted further in terms of reasons for access that the operator could cite";

“the Company has planned the introduction and use of a new “NGH” SW which will be operational throughout the entire Company by the middle of next year and which will operate in light of the indications adopted by the management on the basis of careful monitoring which will be carried out by a special working group on the DSE established for this purpose";

with regard to the different authorization profiles for access to the dossier provided within the Company, the Company has produced a table in which it has highlighted the degree of depth of access to the dossier allowed for each type of operator;

with reference to the measures adopted to limit access to the dossier at the time in which the treatment process takes place, he stated that "only in the XX - 2 circulars were sent to all healthcare professionals regarding the correct use of the DSE; already last year, related targeted training was planned which will be in FAD mode and will be fully implemented in the current year and will be administered to all operators authorized to access the DSE. In consideration of the high number and role of healthcare professionals who have access to the DSE (see attachments relating to point 4), the Company, as reported above, has activated a working group made up of the privacy control room, IT division and representatives of the health and technical assistance management in order to review the roles of access and the degree of depth of access itself, all by the XX. At present, in order not to create a disservice before closing the accesses by default, it is hoped that within the times indicated in this document, the activity referred to can be completed and this Note can be integrated by the XX in order to be able to forward it to the Authority".

In relation to the results of the aforementioned preliminary investigation, the Office, with act no. XX of the XX, notified the Company, pursuant to art. 166, paragraph 5, of the Code, the initiation of the procedure for the adoption of the measures referred to in article 58, par. 2 of the Regulation, inviting the aforementioned owner to produce defensive writings or documents to the Guarantor or to request to be heard by the Authority (art. 166, paragraphs 6 and 7, of the Code; as well as art. 18, paragraph 1, of law no. 689 of 24/11/1981).

Following the aforementioned notification, the Company sent its defense briefs with note dated XX (protocol no. XX), requesting to be heard. Following the hearing held on the 20th, the Company integrated the documentation into documents with a note dated 20th.

On the same date (XX) the Company also sent a new notification of violation pursuant to art. 33 of the Regulation with reference to a case similar to those already under investigation. In particular, in this last notification it was communicated that an "employee (healthcare professional)" had access to the health file of a patient, as well as his spouse, not under treatment by the same in the period between XX and XX . Through such repeated access, the aforementioned professional viewed her husband's laboratory tests outside of his treatment path and without his knowledge. According to what was stated in the aforementioned notification, the aforementioned professional was subjected to disciplinary proceedings.

In the aforementioned notification, the Company also recalled what was already represented in the communication sent on the same date to the Office regarding the similar investigations underway relating to the processing of data carried out through the company dossier.

Given this, in relation to the aforementioned notification made on XX on treatments similar to those already under investigation, the Office, with act no. XX of the XX, in recalling in full what was already represented in the aforementioned notification of violation of the XX (prot. pursuant to art. 166, paragraph 5, of the Code, that the configuration of the company health dossier was carried out in violation of the basic principles of treatment referred to in the articles. 5, par. 1, letter. a), c) and f), 9, 25 and 32 of the Regulation, inviting the aforementioned owner to produce defensive writings or documents to the Guarantor or to request to be heard by the Authority (art. 166, paragraphs 6 and 7, of the Code; as well as art. 18, paragraph 1, of law no. 689 of 24/11/1981).

Following the aforementioned notification, the Company sent further defense briefs with note dated XX (protocol n. XX), requesting to be heard. The hearing took place remotely on the 20th.

In the aforementioned defense briefs (notes of the XX, XX and XX) and during the hearings of the XX and XX, the Company represented in particular:

“the negligent nature of the violations”;

with reference to the "last episode notified to the Guarantor, the disciplinary proceedings were suspended since the interested party informed the disciplinary commission of the presentation of a formal complaint/complaint against him/her in relation to the alleged crime referred to in the art. 615 ter of the Criminal Code;

“Following the start of the investigation by the Guarantor, the methods of access to the company health file were changed. Before the changes there were two access methods: patient in the care of the healthcare professional; self-declaration of the professional. This last modality will be deactivated and replaced with a documented acceptance of the patient. An investigation is currently underway to find out the opinion of clinicians regarding these changes with reference to the possible impact in terms of care";

“With specific reference to self-declarations, the Company decided to eliminate them as the illicit access had occurred precisely through this method. At the same time, the Company aims to define specific treatment paths in order to avoid excluding access to the dossier from a clinician who has taken care of the interested party";

to have taken steps to:" send three circulars on the DSE to health professionals during the XX; to close the possibility of access for health professionals to their DSE; to activate a specific working group on the DSE which involves all company management as well as the IT department and the privacy control room; to forward further communication to health professionals regarding the launch of the new methods of access to the DSE (...); to re-evaluate existing alerts; to further review the depth of access of health professionals; to prepare what is necessary for the launch, within the year, of a first basic course on data protection for all ASDAA employees, all in bilingual and fad mode";

that "the method of access to the DSE through "Self-certification" will be adapted starting from the XX with a view to guaranteeing access to the DSE by healthcare professionals with methods that always track the taking charge of the patient in light of the performances provided and the clinical pathways activated, and in relation only to the professionals actually involved in the patient's care pathway, without this necessarily implying the physical presence of the patient in the facility (e.g. for specialist consultation, teleconsultation, televisit, clinical case evaluation and subsequent healthcare service planning)” (circular of the XX);

The Company also produced a document drawn up in the 20th century entitled "ASDAA health dossier" in which the methods with which the processing of personal data is carried out within the company health dossier were described following the changes made following the start of the investigation activity by the Guarantor, with reference to which it was represented that:

"the purposes pursued through the establishment of the DSE are to be traced back, for the Company, exclusively to the purposes of patient care and that is prevention, diagnosis, treatment and rehabilitation, to the exclusion of any other purpose, it is important to underline that at present the DSE of the Alto Adige Health Authority as well as not containing the so-called data with greater protection (i.e. relating to acts of sexual violence or pedophilia, HIV infection, pathological addictions, services provided to women who undergo voluntary interruption interventions pregnancy or who decide to give birth anonymously)”;

the consent of the interested party is required for the creation of the dossier and for the recovery in it of the data relating to the events generated before the manifestation of consent;

with reference to access to the dossier, "The method of authorization and control of access to data and resources based on role and profile, associates roles with each actor who needs to interact with the system. Each role defines a certain series of basic rights that the actor of that role can exercise, the roles are assigned on the basis of the responsibilities inherent to the activities carried out in the organization";

“Access occurs by roles (professional profiles). Each role is allowed a specific scope of vision consistent with its needs and skills";

“For healthcare professionals, the operational context of access to the DSE is determined by the role assigned to them, as well as by the status of the “open” or “not open” event or case (hereinafter open and/or closed event) and by the structure of belonging. Specifically, an open event or case means a service in progress (hospitalization, outpatient service, etc.) or that it is scheduled in the following 30 days or that it occurred in the previous 30 days. In the event of an open event: ➢ OU in charge of the patient: this is the one that carries out the service or takes care of the predominant part of it (e.g. hospitalization, PAC, integrated clinic, etc.). In general terms, the healthcare professional has access to all the information contained in the patient's DSE, as long as the case remains open. Accesses events produced by the OU itself without formalities. ➢ Other OU: in case of need for treatment (e.g. consultancy, co-management of the case, and further cases listed below) in general terms the healthcare professional accesses all the information contained in the patient's DSE in the care of another OU for a period connected to the provision of the consultancy (opening period of the consultancy managed in a similar way to the opening period of the event). This is an event traced by a specific computerized request (e.g. via Order Entry)”;

“In view of the unification of the various IT systems in use in the Company, expected for the end of the 20th century, it is necessary to distinguish between contexts in which order entry is fully operational and contexts in which it is not yet operational everywhere”, with reference to which 6 cases have been foreseen: consultancy, interview with patient, Multidisciplinary Teleconsultation, Emergency, Request for Consultation from GP/PLS, Pre-hospitalization;

automatic alerts were activated with respect to an interested party (more than 10 daily accesses to the dossier) also capable of detecting "accesses to the DSE for which events have been opened".

With note dated XX, the Office requested further information regarding the deadline within which "order entry" will be fully operational for all reference contexts, the time limits possibly envisaged with reference to access to the dossier by of the professional roles indicated in the aforementioned document and the technical-scientific reasons that would make it essential for the roles of speech therapist, ophthalmology assistant, podiatrist, dental hygienist, masseur and masseur-physiotherapist and audiometrist technician to access the multiple types of information indicated in table 5 of the document "Dossier healthcare ASDAA”, given that the aforementioned document does not provide limits to the time depth of access to this information.

With a note dated XX, the Company responded to the aforementioned request for information, representing, in particular, that:

there have been "further changes compared to what was communicated on XX, changes that will continue to be made, both in relation to the findings of the working group itself, and in light of the progress of the standardization activities of the company IT system";

"to highlight the deadline within which this module will be fully operational for all reference contexts, it is necessary to refer to the dissemination plans for the Acceptance, Discharge, Transfer (ADT) and Emergency Room (PS) modules" from which "it can be seen that the last activities to be concluded according to the timetable will be (...) in the hospitals of Brunico and San Candido. (XX)”, ending on XX “;

"it was decided not to provide time limits for access for doctors (including dentists operating in the hospital context, without prejudice to the fact that by the end of January XX access to the DSE will be closed for dentists operating only in the local context), vice versa of the time limits of two years for the additional health professions referred to in the table below, all starting from the XX";

“As part of the actions to improve the management of access depths carried out, during the summer a further reconnaissance was carried out to refine the management of the access depth to the DSE by carrying out interviews with the representatives of the health professions involved and analysis of the access logs access to the health record. After this survey, the depth of access regarding the type of documents accessible was revised and in most cases further limited. Regarding the professions mentioned above, the following changes have been made:• Podiatrist: access to the DSE removed; • Dental hygienist: access to the DSE removed; • Massage physiotherapist and masseur/rice: access to the DSE removed;  Speech therapist: access to the DSE removed; • Orthoptist-ophthalmology assistant: access to the DSE removed; • Audiometrist technician: access to the DSE removed"; The monitoring activity as highlighted above will continue and there may certainly be changes both in terms of the temporal depth of access and the mere depth of access to the various documents referred to in the table" already sent to the Authority which has been sent again in updated mode .

2. Outcome of the preliminary investigation.

At the outset, it is stated that the processing of personal data must take place in compliance with the applicable legislation on the protection of personal data and, in particular, with the provisions of Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (hereinafter, the “Regulation”) and Legislative Decree no. 196 of 30 June 2003 (Code regarding the protection of personal data - hereinafter, the "Code").

With particular reference to the issue in question, it is highlighted that personal data must be "processed in a lawful, correct and transparent manner" (principle of "lawfulness, correctness and transparency" and "in a manner that guarantees adequate security (...), including the protection, through adequate technical and organizational measures, from unauthorized or illicit processing (principle of “integrity and confidentiality”)” (art. 5, par. 1, letters a) and f) of the Regulation).

Furthermore, the data must be adequate, relevant and limited to what is necessary with respect to the purposes for which they are processed (data minimization principle) (art. 5, par. 1, letter c) of the Regulation).

The Regulation then requires the data controller to implement "adequate technical and organizational measures to guarantee a level of security appropriate to the risk", taking into account, among other things, "the nature, object, context and purposes of the processing, as well as the risk of varying probability and severity for the rights and freedoms of natural persons" (art. 32 of the Regulation).

With reference to the treatments covered by this provision, the Guarantor has adopted the "Guidelines on health records - 4 June 2015" (Provision dated 4.6.2015, published in Official Journal 164 of 17 July 2015, available on www.gpdp.it web doc no. 4084632), which, like the other provisions of the Authority, continue to apply even after the full application of the Regulation, as they are compatible with it (art. 22, paragraph 4, Legislative Decree no. 101/ 2018).

In the aforementioned Guidelines, the Guarantor, in order to avoid the risk of access to the information processed through the health file by unauthorized parties or communication of health data to third parties by persons authorized to do so, specifically asked the owner of the processing to pay particular attention in the identification of the authorization profiles and in the training of authorized subjects, access to the dossier must be limited only to healthcare personnel who intervene in the patient care process and technical methods of authentication of the dossier must be adopted which reflect the cases of access to this tool specific to each healthcare facility. To this end, in the aforementioned Guidelines, the Guarantor has indicated to the data controllers to carry out monitoring of the cases in which the relevant healthcare personnel may need to consult the healthcare file, for purposes of treatment of the interested party and, based on this reconnaissance, identify the different access authorization profiles.

Access to the dossier must therefore be limited only to healthcare personnel who intervene over time in the patient care process. This means that access must only be allowed to personnel who in various capacities intervene in the treatment process. Access to the dossier must then be limited to the time in which the treatment process takes place, without prejudice to the possibility of accessing the dossier again if this becomes necessary regarding the type of medical treatment to be provided to the interested party.

As already represented by the Authority in the aforementioned Guidelines and in other provisions, taking into account the right of obscuring exercised by the interested party to the data accessible through the health dossier and therefore the possible incompleteness of this information tool, the owner must identify, in relation to the different functions to which the staff is assigned, technical organizational solutions that allow the administrative bodies of the health management to access, within the limits of the powers established by law, a more complete information base than that present in the company health dossier.

It is also stated that in the aforementioned Guidelines the Authority considered that the data controller must implement systems to control access also to the database and for the detection of any anomalies that could constitute illicit processing, through the use of indicators of anomalies (so-called alerts) useful for guiding subsequent audit interventions. The owner must therefore prefigure the activation of specific alerts that identify anomalous or risky behavior relating to the operations carried out by those in charge of processing (e.g. relating to the number of accesses performed, the type or time frame of the same).

With provision of 3 July 2014 (web doc. no. 3325808) the Authority had already intervened regarding the processing of data carried out through the ASDAA company health file. In this provision, the Guarantor had identified specific critical issues relating to the information and consent of the interested parties, prohibiting the Company from further processing of personal data, acquired without the informed consent of the interested parties and prescribing the necessary measures to make the processing lawful. .

With specific reference to the aspects of the processing covered by this provision, i.e. the need for access to the dossier to be permitted only to the staff who are actually treating the interested party, in the aforementioned provision the Guarantor noted that the health files could be consulted, at any time, by the health professions operating within the ASDAA regardless of whether they were treating the interested party. Given this, the Guarantor had ordered the Company to complete - by 20th the implementation of specific measures that would allow only healthcare professionals who were treating the patient at that moment (who had already expressed informed consent to the creation of the dossier) to access his health dossier and for the time in which the treatment process would have taken place (see deferral provision of 11 September 2014, web doc. no. 3494478).

Further critical issues had also been identified regarding the right of redaction, with reference to which the Guarantor had ordered the aforementioned company to implement specific measures that would allow the interested party to be able to express the desire to redact individual clinical events in their health dossier also relating to the past.

Following the adoption of the aforementioned 2014 provision, the Guarantor adopted the Guidelines on health dossiers (2015) also applicable to the health dossier kept by the Company. With the full application of the Regulation, the Company was also required to adapt this information tool to the principles of data protection from design and by default pursuant to art. 25 of the Regulation.

Having said this, having taken note of what is represented by the Company in the defense briefs relating to the proceedings indicated in the previous points, it is noted that:

1. Authorization profiles for access to the dossier. The configuration of the health dossier present at the moment in which the facts which were the subject of the complaint and notification of violation occurred allowed the health personnel to access this information tool relating to any patient who had been assisted by it, declaring the existence of a plurality of pre-arranged case studies. Although the Company had declared that it had complied with the aforementioned provision of the Guarantor of 3 July 2014, the measures implemented were not fully suitable to guarantee that only the healthcare personnel who were treating them could access a patient's health file, as then it was more analytically indicated by the Guarantor in the aforementioned 2015 Guidelines. In particular, as demonstrated by the cases in question, the original configuration of the health dossier carried out by this Company, even after the aforementioned provision of the Guarantor of 3 July 2014, made it in fact it is possible that through the use of a healthcare professional operating within the same it was possible to access the health dossier of interested parties who not only were not being treated by the owner of the user ("has not been taken care of by the services in which such professionals are/were on duty"), but which were not even associated with "administrative clinical events tracked at a computer level". The changes that the Company, following the notification of the violation referred to in the art. 166, paragraph 5 of the Code, declared that it wanted to achieve access to the dossier to overcome the critical issues identified during the investigation as: "the possibility of access to health professionals at their DSE" with the health profile was closed ; “Access occurs by roles (professional profiles). Each role is allowed a specific scope of vision consistent with its needs and skills"; the roles of speech therapist, ophthalmology assistant, podiatrist, dental hygienist, masseur and massage physiotherapist and audiometrist technician were denied access to the dossier. These changes, as stated in the documents, will be fully operational for all reference contexts by the twentieth;

2. Alert for anomalous access to the health file. Following the start of the investigation by the Guarantor, the Company activated automatic alerts regarding the number of accesses and the control over the existence of an active clinical administrative event;

3. Purpose of the health dossier. Before the start of the investigation by the Guarantor, the Company had also allowed access to the health dossier by the staff of the Medical Directorate for "regulatory/organizational obligations" and for the "Tumor Registry: consultation". In this regard, it is highlighted that, given what is represented by the Authority in the aforementioned Guidelines, the owner must identify, in relation to the different functions to which the staff is assigned, specific profiles for access to the dossier also with reference to the administrative bodies of the health management, so that they can access, within the limits of the powers established by law, a more complete information base than that present in the company health dossier. Given the right of blackout that can be exercised by the interested party on the data present in the health file, this information tool may in fact not be complete. With specific reference to the Cancer Registry, it is noted that the methods of consultation of this Registry are expressly provided for by the sector regulations, on which the Authority has given its opinion, which do not provide for the use of the health dossier (Opinion on a scheme of decree pursuant to art. 12, paragraph 13 of the legislative decree of 18 October 2012, n. 179, converted with amendments into law 17 December 2012, n no. 9773977). Subsequent to the initiation of the sanctioning procedure by the Authority, the Company represented that it had modified the cases of access to the dossier, pursuing with the same "exclusively" the "purpose of care for the patient and that is prevention, diagnosis, treatment and rehabilitation, to the exclusion of any other purpose". On this point, it is noted that medical management and the tumor registry are no longer indicated among the roles to which access is permitted.

4. therefore, the configuration of the dossier resulting at the time of the facts under investigation made it possible for healthcare personnel working at the Company to have unrestricted access to the healthcare files of patients who were not - at the time of access - being treated at the same, in violation of the basic principles of processing referred to in the articles. 5, par. 1, letter. a) and f) and 9 of the Regulation, as well as the principles of data protection from design (privacy by design) and by default (privacy by default) contemplated in the art. 25 of the Regulation;

5. the Authority had already intervened on the processing of the data in question with the provision of 3 July 2014 in which it was required, among other things, for the Company to implement specific measures that would allow only healthcare professionals who have that moment in which the patient is treated to access his health dossier for the time in which the treatment process takes place. These measures had to be adopted by 31 October 2014 (see deferment provision of 11 September 2014, web doc. no. 3494478). The Company, in complying with the 2014 provision of the Guarantor, identified technical and organizational measures which proved to be unsuitable because, as demonstrated by the facts in question, they did not prevent healthcare personnel from accessing the healthcare files of patients who had not under treatment and has not updated these measures in light of the 2015 Guarantor Guidelines nor upon full application of the Regulation;

6. the configuration of the dossier resulting at the time of the facts under investigation did not include a system for the detection of any anomalies that could constitute illicit processing, or the use of anomaly indicators (so-called alerts) aimed at identifying anomalous or risky behavior relating to the operations carried out by the subjects authorized to process (e.g. number of accesses performed, type or temporal scope of the same), useful for orienting subsequent audit interventions in violation of the principles of integrity and confidentiality of personal data (articles 5, par. 1, letter f) and 32 of the Regulation);

7. the Company has illustrated in the program notes the process of adapting the information systems used by "all reference contexts" which will be completed by the twentieth.

3. Conclusions.

In light of the assessments mentioned above, taking into account the declarations made by the data controller during the investigation ˗ and considering that, unless the fact constitutes a more serious crime, anyone, in proceedings before the Guarantor, falsely declares or certifies information or circumstances or produces false deeds or documents and is liable pursuant to art. 168 of the Code "False statements to the Guarantor and interruption of the execution of the tasks or exercise of the powers of the Guarantor" ˗ it is stated that the elements provided by the data controller in the defense briefs relating to the aforementioned proceedings do not allow the notified findings to be overcome by the Office with the documents initiating the proceedings for the adoption of corrective and sanctioning measures, as, moreover, none of the cases provided for by the art. 11 of the Guarantor Regulation n. 1/2019.

For these reasons, we note the illicit nature of the processing of personal data carried out by the Company with reference to the aforementioned proceedings initiated following notifications of violation and complaints, in the terms set out in the motivation, in particular, for having processed personal data in violation of the articles 5, par. 1, letter. a) and f), 9, 25 and 32 of the Regulation.

In this context, considering that disciplinary and, in one case, criminal proceedings have been initiated against the author of the access and that the necessary adjustments have been made to overcome the critical issues described above, the conditions for the adoption of the corrective measures referred to in art. 58, par. 2, of the Regulation.

4. Adoption of the injunction order for the application of the pecuniary administrative sanction and accessory sanctions (articles 58, paragraph 2, letters i and 83 of the Regulation; article 166, paragraph 7, of the Code).

The violation of the articles. 5, par. 2, letter. a) and f), 9, 25 and 32 of the Regulation, caused by the conduct of the Company, is subject to the application of the pecuniary administrative sanction pursuant to art. 83, par.4 and 5, of the Regulation.

In consideration of the fact that the aforementioned proceedings concern the same owner, similar processing of personal data, which occurred in the same time frame and that the Company in the defense briefs relating to the aforementioned proceedings has provided the same defensive elements, it is considered appropriate to adopt the respective sanctions administrative in a single provision (articles 10, paragraph 4, and 19 of the Guarantor's Regulation no. 1/2019).

Consider that the Guarantor, pursuant to articles. 58, par. 2, letter. i) and 83 of the Regulation, as well as art. 166 of the Code, has the power to "impose a pecuniary administrative sanction pursuant to article 83, in addition to the \[other\] \[corrective\] measures referred to in this paragraph, or in place of such measures, depending on the circumstances of each single case" and, in this framework, "the Board \[of the Guarantor\] adopts the injunction order, with which it also provides for the application of the additional administrative sanction of its publication, in full or in extract, on the website of the Guarantor pursuant to article 166, paragraph 7, of the Code” (art. 16, paragraph 1, of the Guarantor Regulation no. 1/2019).
The aforementioned pecuniary administrative sanction imposed, depending on the circumstances of each individual case, must be determined in the amount taking into account the principles of effectiveness, proportionality and dissuasiveness, indicated in the art. 83, par. 1, of the Regulation, in light of the elements provided for in art. 85, par. 2, of the Regulation in relation to which for both procedures it is observed that:

- the Authority became aware of the event following two notifications of violation and two complaints (art. 83, par. 2, letter h) of the Regulation);

- with reference to all the events subject to notification and complaint, the illicit accesses concerned the health dossiers of three patients by health professionals who were not involved in the treatment process of the same and against whom proceedings were initiated disciplinary and in one case also criminal (art. 83, par. 2, letter a), b) and g) of the Regulation);

- in the case of the first and second complaint, which was also the subject of a violation notification, the accesses were not justified by clinical reasons (two in the first case and five in the second) and occurred in period XX, while in the case subject of the last violation notification between XX and XX (access by a Company employee to the spouse's health file without his knowledge) (art. 83, par. 2, letters a) and b) of the Regulation) ;

- the aforementioned accesses were possible because the measures in place with reference to data processing suitable for collecting health information carried out through the company health dossier were not fully proportionate in order to guarantee adequate security and integrity of personal data and to avoid unauthorized access, although the Authority had already intervened in this regard with the aforementioned provision of 3 July 2014 and subsequently with the 2015 Guidelines (art. 83, par. 2, letters d) and e) of the Regulation);

- the Company has modified the methods and circumstances of access to the company health file following the start of the investigation by the Authority, as well as introduced alert systems, cooperating with the Authority to this end (art. 83, par. 2, letters c) and f) of the Regulation);

On the basis of the aforementioned elements, evaluated as a whole, it is considered necessary to determine the amount of the pecuniary sanction provided for by the art. 83, par. 5, letter. a) of the Regulation, for the violation of the articles. 5, par. 1, letter. a) and f), 9, 25 and 32 of the Regulation to the extent:

- of 25,000 (twenty-five thousand) for the proceedings initiated following the complaint presented by Mr. XX;

- of 25,000 (twenty-five thousand) for the procedure initiated following the notification of violation of the XX, subsequently integrated on the XX, and the complaint presented by Mr. XX; And

- of 25,000 (twenty-five thousand) for the proceedings initiated following the notification of violation of the XX;

which administrative pecuniary sanctions are deemed to be, pursuant to art. 83, par. 1 of the Regulation, effective, proportionate and dissuasive.

It is also believed that the accessory sanction of publication of this provision on the Guarantor's website, provided for by art., should be applied with reference to both procedures examined. 166, paragraph 7 of the Code and art. 16 of the Guarantor Regulation n. 1/2019, also in consideration of the type of personal data subject to unlawful processing.

Finally, it is noted that the conditions set out in art. 17 of Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

ALL THIS CONSIDERING THE GUARANTOR

declares the unlawfulness of the processing of personal data carried out, in both procedures described, by the Alto Adige Health Authority, for the violation of the art. 5, par. 1, letter. a) and f), 9, 25 and 32 of the Regulation within the terms set out in the justification.

ORDER

pursuant to the articles 58, par. 2, letter. i) and 83 of the Regulation, as well as art. 166 of the Code, to the Alto Adige Health Authority, tax code/VAT number no. 00773750211, to pay the total sum of 75,000 (seventy-five thousand) euros, defined as follows:

the sum of 25,000 (twenty-five thousand) euros as a pecuniary administrative sanction for the violations detected in the proceedings initiated following the complaint presented by Mr. XX, indicated in this provision;

the sum of 25,000 (twenty-five thousand) euros as a pecuniary administrative sanction for the violations detected with the violation notification of XX, subsequently integrated into XX, and of the complaint presented by Mr. XX, indicated in this provision;

the sum of 25,000 (twenty-five thousand) euros as a pecuniary administrative sanction for the violations detected with the notification of violation of the XX, indicated in this provision;

according to the methods indicated in the attachment, within 30 days of the notification in the justification; it is represented that the offender, pursuant to art. 166, paragraph 8, of the Code, has the right to settle the dispute by paying, within 30 days, an amount equal to half of the sanctions imposed.

ORDERS

to the aforementioned Company, in the event of failure to resolve the dispute pursuant to art. 166, paragraph 8, of the Code, to pay the total sum of 75,000 (seventy-five thousand) euros according to the methods indicated in the annex, within 30 days of notification of this provision, under penalty of the adoption of the consequent executive acts in accordance with the art. 27 of law no. 689/1981.

HAS

pursuant to art. 166, paragraph 7, of the Code, the publication of this provision in its entirety on the Guarantor's website and believes that the conditions set out in the art. 17 of Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

Pursuant to art. 78 of the Regulation, of the articles. 152 of the Code and 10 of Legislative Decree no. 150/2011, it is possible to appeal against this provision before the ordinary judicial authority, under penalty of inadmissibility, within thirty days from the date of communication of the provision itself or within sixty days if the appellant resides abroad.

Rome, 22 February 2024

PRESIDENT
Stanzione

THE SPEAKER
Ghiglia

THE GENERAL SECRETARY
Mattei

```

Retrieved from "[https://gdprhub.eu/index.php?title=Garante\_per\_la\_protezione\_dei\_dati\_personali\_(Italy)\_-\_10001279&oldid=42224](https://gdprhub.eu/index.php?title=Garante_per_la_protezione_dei_dati_personali_\(Italy\)_-_10001279&oldid=42224)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Garante per la protezione dei dati personali (Italy)](/index.php?title=Category:Garante_per_la_protezione_dei_dati_personali_\(Italy\) "Category:Garante per la protezione dei dati personali (Italy)")
*   [Italy](/index.php?title=Category:Italy "Category:Italy")
*   [Article 5(1)(a) GDPR](/index.php?title=Category:Article_5\(1\)\(a\)_GDPR "Category:Article 5(1)(a) GDPR")
*   [Article 5(1)(f) GDPR](/index.php?title=Category:Article_5\(1\)\(f\)_GDPR "Category:Article 5(1)(f) GDPR")
*   [Article 9 GDPR](/index.php?title=Category:Article_9_GDPR "Category:Article 9 GDPR")
*   [Article 25 GDPR](/index.php?title=Category:Article_25_GDPR "Category:Article 25 GDPR")
*   [Article 32 GDPR](/index.php?title=Category:Article_32_GDPR "Category:Article 32 GDPR")
*   [Article 34 GDPR](/index.php?title=Category:Article_34_GDPR "Category:Article 34 GDPR")
*   [2024](/index.php?title=Category:2024 "Category:2024")
*   [Italian](/index.php?title=Category:Italian "Category:Italian")

This page was last edited on 22 July 2024, at 07:19.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)