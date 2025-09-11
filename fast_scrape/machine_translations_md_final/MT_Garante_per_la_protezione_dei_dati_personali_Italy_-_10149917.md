\[web doc. no. 10149917\]

Measure of May 21, 2025

Register of Measures
No. 287 of May 21, 2025

THE ITALIAN DATA PROTECTION AUTHORITY

IN today's meeting, attended by Professor Pasquale Stanzione, President, Professor Ginevra Cerrina Feroni, Vice President, Dr. Agostino Ghiglia and Guido Scorza, members, and Dr. Claudio Filippi, Acting Secretary General;

HAVING REGARD TO Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC - General Data Protection Regulation (hereinafter "Regulation");

SEEN Legislative Decree 30 June 2003, n. 196 of 30 June 2019, containing the "Personal Data Protection Code" (hereinafter the "Code");

CONSIDERING the Rules of Ethics for Processing for Statistical or Scientific Research Purposes adopted by the Italian Data Protection Authority, pursuant to Article 20, paragraph 4, of Legislative Decree No. 101 of August 10, 2018, with Order No. 515 of December 19, 2018 (web doc. No. 9069637, hereinafter the "Rules of Ethics");

CONSIDERING the Provisions relating to the processing of personal data for scientific research purposes, Annex No. 5 to the Order, which identifies the provisions contained in the General Authorizations that are compatible with the Regulation and with Legislative Decree No. 101/2018, amending the Code, of June 5, 2019 (web doc. 9124510, hereinafter the "Provisions");

CONSIDERING the documentation in the file;

CONSIDERING the observations made by the Secretary General pursuant to Article 15 of Regulation No. 1/2000 of the Italian Data Protection Authority on the organization and functioning of the Office of the Italian Data Protection Authority, at www.gpdp.it, web doc. No. 1098801;

Rapporteur: Professor Ginevra Cerrina Feroni;

WHEREAS

1. Inspection

On XX and XX, an inspection was conducted at Menarini Silicon Biosystems SpA (hereinafter the Company or MSB) to verify compliance with the provisions on the protection of personal data in processing for scientific research purposes, including through artificial intelligence tools, with specific regard to the lawfulness requirements, disclosure obligations, and pseudonymization measures (Article 58, paragraph 1, letters a), e), and f) of the Regulation; Articles 157 and 158 of the Decree Legislative Decree No. 196 of June 30, 2003, Code; Articles 21 and 22 of Regulation No. 1/2019 of the Italian Data Protection Authority; Service Order No. XX of XX).

The Company was founded around a technology that enables the isolation and subsequent analysis of cells from the blood of cancer patients. "It is a highly unique and unique entity in the life sciences field, as it is dedicated to the research and development of technologies and applications primarily related to Circulating Tumor Cells (CTCs) for Liquid Biopsy, particularly for the enrichment, counting, isolation, and analysis of rare cells. The technologies developed by MSB are designed to provide information based on the analysis of blood samples (collected through a simple blood draw) rather than tissue samples (the collection of which, on the contrary, requires invasive, risky, and/or painful procedures for patients)" (defense brief of the XX).

During the preliminary investigation, the operating procedures of the tool called CellFind—which the Office learned about from the Company's website—were illustrated, clarifying that "it is software (research use only) that analyzes images of cells for the purpose of classifying them, to be used both for the company's own research activities in the oncology field and for sale to third parties. The tool is currently not classified or authorized as a medical device under the relevant legislation, pursuant to Regulation (EC) No. EU 2017/746, but the company does not rule out initiating such proceedings in the future.

CellFind is therefore currently a product, not subject to a patent, available for sale, the result of experimental "technological development." To this end, the company has defined a specific project, \[...\], which, among other things, specifies the types of samples required for product development. \[...\].

More specifically, it was stated that "the CellFind software receives images of cells associated with a patient identified by a unique identifier. \[...\]. CellFind processes them to identify tumor cells. \[...\]. Generally, it is the operator who analyzes the images, classifies them, and generates a report on the presence and number of tumor cells. In the case of CellFind, the classification is performed automatically. The classification is then verified by the operator, who can optionally modify the CellFind classification. Specifically, "CellFind operates through a deep learning network trained in the state to distinguish tumor cells from other cells."

As explained in more detail below, it emerged that the Company has already developed CellFind for the classification of some specific oncological diseases, while the use of the tool for other diseases is currently in the planning phase.

Specifically, "The CellFind product for the analysis of metastatic breast, prostate, and colorectal tumors is already developed and enjoys an image classification accuracy of around 96%-98% \[...\].

To train the network to classify the first three tumors considered, the company relied primarily on an internal company within the group based in the United States (Menarini Silicon Biosystems Inc.), which provided the training data. The American company preliminarily intervenes on these data by removing the pseudonymous code assigned to patients enrolled in clinical trials conducted by the same American company within the group (or those from which it derives), replacing it with a random code not associated with the patient. Specifically, the data consists of a set of fluorescence images with no further temporal references. The data used in the design phase dates back approximately 10 years, while more recent images were also acquired from the same American company during the validation phase.

The ongoing project, however, aims to enable the use of CellFind on patients with multiple myeloma. In this case, the network will be trained using images of cells from approximately 200 patients \[data corrected during the preliminary investigation\], from which approximately 50,000 to 100,000 images will be extracted.

"In order to extend the applicability of CellFind to multiple myeloma, the company is also proceeding with the Collection of personal data, albeit pseudonymized, through a Bulgarian company. \[...\] Following an impact assessment pursuant to Article 35 of the Regulation, the images used to train the network to classify the images relating to this latest tumor were acquired, subject to the information and consent of the data subjects, through a provider \[...\], a company, designated as data controller pursuant to Article 28 of the Regulation, established in Bulgaria" \[...\] (the Company has provided in its documents the Data Process Agreement, entered into pursuant to Article 28 of the Regulation with the aforementioned company, with its various amendments).

"Each sample is accompanied by a code relating to each patient, necessary for data security and quality purposes, and to certify that it is truly related to a patient. Once acquired, the data is subject to a recoding process that does not exclude the possibility of tracing the data subject if necessary, including any regulatory constraints relevant to future certification of the tool as a medical device for diagnostic use, which is currently neither envisaged nor excluded by the company. For this reason, it intends to retain the collected data \[...\]”.
\[...\] The retention period would be defined with a view to the future certification of the product as a medical device, as often occurs in procedures relating to innovative medical devices”.

The Company also stated that “the CellFind algorithm is ‘locked’, thus indicating that any purchasers of the tool cannot continue training the network or modifying its parameters”.

The inspection then verified, through access, the traces of the data files acquired from the American company (Menarini Silicon Biosystems Inc.) of the group or from its respective predecessors, in which each individual record contains a code identifying the cartridge containing the biological sample. Each record in the file contains images extracted from this biological sample; these images are not modified.

The identifier assigned to the record at the data source is unknown to MSB. The American company applies a further one-way cryptographic encoding to it, generating a code (without any semantic value) that is not reversible even for MSB. MSB receives the data in this format; the records and images displayed by the party do not contain any other identifiers.

The images taken from the biological samples acquired through the Bulgarian company responsible for data processing pursuant to Article 28 of the Regulation were also verified \[...\]. Each record is associated with an alphanumeric identification code referring to a cartridge associated with the code of the sample acquired by the aforementioned company. This code is originally linked to the patient code at the data source (hospital) where the company responsible for data processing collects the samples.

2.3 Additional elements taken from the documentation submitted in the case file

A detailed description of CellFind's operation is provided in the impact assessment conducted by the Company, pursuant to Article 35 of the Regulation (VIP), for the processing of data required for its development. This assessment, in addition to the information already reported above, provides further specific information regarding:

4) Algorithm Training

The images present on GCP are used to train the CellFind algorithm to recognize and count the cells of interest. The algorithm is installed on a virtual machine resident on GCP.

5) Algorithm Testing

Once the algorithm has been trained, it is tested using new images already present on GCP. The output is a report including the count of the cells of interest.

6) Algorithm Validation

A team of experts compares the results of the cell recognition and counting process performed by CellFind with those performed manually and validates the algorithm's performance according to appropriate procedures established by industry standards, such as those developed by the Clinical Laboratory Standards Institute.

The various process outputs (e.g., tables, presentations, or draft validation plans) are stored in shared folders, protected by two-factor authentication, accessible to teams who need to access them.

Regarding retention periods, it is stated that "the data is retained for the time necessary to achieve the purposes for which consent was given and subsequently retained for a period not exceeding 25 years." This deadline is calculated based on the product's life cycle (5 years for development, 15 years for marketing, 5 years for disposal). The deadline may also be extended if necessary to comply with regulatory obligations (e.g., pursuant to Article 10, paragraph 7, of EU Regulation 2017/746, which requires the retention of file data for a period of 10 years from the placing on the market of the last device subject to the EU declaration of conformity, if longer than the first deadline).

2. Contested Violations

Based on the information acquired during the aforementioned inspection activity and subsequent assessments, the Office—with a document dated XX (ref. no. XX)—which is to be considered reproduced here in its entirety—initiated, pursuant to Article 166, paragraph 5, of the Code, a proceeding for the adoption of the measures referred to in Article 58, paragraph 1, of the Code. 2 of the Regulation, against MSB, inviting it to submit written statements or documents to the Data Protection Authority or to request a hearing before the Authority (Article 166, paragraphs 6 and 7 of the Code, as well as Article 18, paragraph 1, Law No. 689 of 24 November 1981).

With the aforementioned document, the Office notified the Company that it has established that the processing of personal data carried out to train the CellFind tool algorithm, for the analysis and classification of multiple myeloma tumor cells, violated the principle of transparency, as well as the resulting obligation to provide accurate and complete information to data subjects, the principles of purpose limitation, storage limitation, and accountability. The alleged violation of this latter principle also concerns the failure to conduct thorough assessments regarding the risk of re-identification of data subjects in the data collected from the American company of the Menarini Group, Menarini Silicon Biosystems Inc. (Articles 5, paragraph 1, letters a), b), e), and 2; 13 of the Regulation).

3. Defence briefs

With a note dated 20th, the Company submitted its defence briefs, without requesting a hearing, pursuant to Article 166, paragraph 5 of the Code.

3.1. On the principle of purpose limitation

Disputing the principle of purpose limitation (Article 5, paragraph 1, letter b) of the Regulation), the Office, having noted that, contrary to what emerged during the inspection, the documentation submitted (particularly the information notice and the impact assessment) indicates that the data is intended to be processed for scientific research purposes, also noted that the Company includes a possible purpose in the processing, namely, initiating the procedure for the classification and authorization of the tool as a medical device pursuant to the relevant legislation, pursuant to Regulation (EU) 2017/746. Although described as merely optional, this additional processing purpose appeared to influence the determination of data retention periods.

The Office also noted that in the information provided to data subjects upon collection of biological samples and genetic and health data, the Company indicated that the data were processed for two purposes that appeared to be separate and alternative, and not expressly related to multiple myeloma:

i) developing a new instrument ("Product") capable of enriching and staining circulating tumor cells in order to count them. \[…\].;

ii) developing algorithms using machine learning technology for image analysis that support healthcare professionals in diagnosis or prognosis determination by introducing faster and easier methods for tumor cell identification.

It was therefore deemed that the purpose of the processing, as described in the information and in the documentation in the case, lacked the necessary specificity and completeness. This is also taking into account that, although the Company is aware of the specific oncological pathology for which the CellFind system algorithm will be trained to classify the cells, this is not explicitly stated, nor is there any specific reference to the possibility that the tool could also be sold to third parties, despite this being stated during the inspection.

In this regard, the Company stated in its defense briefs that the development of the product ("Product") and the algorithms ("algorithms") represent two integrated phases of a single analysis system, aimed at enabling the automated counting of circulating tumor cells.

More specifically, MSB owns a specific analysis system, which requires an enrichment and labeling phase for the cells present in the blood samples, a precursor to the subsequent manual counting of tumor cells by an operator.

MSB further clarified that "the specific nature of the disease was already known to the data subjects" insofar as "the information provided to the data subjects refers to the tumor disease from which they suffer, with the wording 'your disease.'" The data processing is therefore limited to research on patients' tumor cells, and in this specific case concerns multiple myeloma, since the acquired oncology samples \[...\] "were taken from patients affected only by that disease."

It was also stated that "with regard to samples from healthy donors, their use is limited to control purposes, as specified in the information, which states that 'The Project also entails the use of samples from healthy donors, as controls, to ensure the new techniques only provide reliable data. This is the reason why healthy volunteers will also be asked to participate.'" Furthermore, in the section on secondary use, the information clarifies that the processing is carried out "to further improve the diagnostic techniques related to the Project": the use of the samples therefore remains limited to these defined areas.

On this basis, the Company therefore deemed that, in accordance with Article 13, paragraph 4, of the GDPR, it was "not necessary to repeat the specific pathology in the notice, as this information is already known to the data subjects." However, the Company stated that it was willing to immediately amend the notice if requested by the Authority.

Finally, regarding the failure to mention the possible sale of the CellFind tool to third parties, MSB clarified that CellFind would be marketed without including personal data and without the possibility of further training by external parties. Therefore, the Company stated that this circumstance does not entail any change to the purposes or methods of processing of personal data already described in the notice and, consequently, does not fall within the information required to be provided pursuant to Article 13 of the GDPR.

3.2 On the principle of storage limitation

In accordance with the principle of storage limitation (Article 5, paragraph 1, letter e) of the Regulation), the Office noted, in particular, that during its inspection, MSB did not provide information on the retention periods for the data processed for the development of the CellFind system algorithm for the analysis and classification of multiple myeloma cells. MSB stated, in very general terms, that it manages a repository of the data collected for training CellFind for possible future certifications.

Furthermore, it was contested that the information on the processing of personal data does not indicate the data retention periods other than those related to any "additional research projects" \[intended to be based on an autonomous and specific consent of the interested parties\] a priori indicated as 25 years and that in the data impact assessment on CellFind, with respect to retention periods, it is instead indicated that "The terms identified take into account the applicable regulations, the life cycle of CellSearch (training, development, commercialization and phase-out)" and that "The data are retained for the time necessary to pursue the purposes for which consent was given and subsequently retained for a period not exceeding 25 years. This term is calculated on the basis of the life cycle of the product (5 years for development, 15 years for commercialization, 5 years for disposal). The term can also be extended if necessary to comply with regulatory obligations (e.g., pursuant to art. 10 paragraph 7 of EU Regulation 2017/746, which provides for the retention of data of the file for a period of 10 years from the placing on the market of the last device covered by the EU declaration of conformity, if longer than the first deadline).

In this regard, MSB stated that these details were not included in the notice because, pursuant to Article 13 of the GDPR, it is necessary and sufficient to indicate the retention period but not to explain the underlying reasons.

In its defense briefs, the Company also stated that "\[...\] the section of the notice dedicated to data retention also refers to the primary purpose, as is evident from its title ("Retention of your data and samples and additional research projects") and from the fact that the information on the retention period is found in a separate paragraph from the description of any processing for further research purposes, precisely because it refers to the total data retention period, once the primary use and any further use of the data have been completed ("The data inferred from the test will be retained for as long as needed to complete their analysis and retrospective analysis. Such period of time should not exceed 25 years").

The Company therefore emphasized that "the 'possible' purpose of initiating the procedure for classifying and authorizing the tool as a medical device does not entail any extension of the retention period (25 years) already established for the primary use. If this procedure were actually undertaken, the data would still be processed within the same timeframe, in accordance with the principle of storage limitation established by Article 13 of the GDPR." 5, paragraph 1, letter e) of the GDPR. Therefore, the potential certification purpose would not entail an extension of these timeframes, with the maximum period of 25 years remaining unchanged even if the project were to evolve towards classification as a medical device. Similarly, if the procedure is not initiated, the data will still be retained within the original limits and purposes, without exceeding the retention period communicated to the data subjects.

3.3 On the principle of transparency and the obligation to provide adequate information

The circumstances noted above, the inconsistencies, and the additional critical issues regarding the purposes of the processing and the data retention periods, have led the Office to also contest the Company's violation of the principle of transparency and the obligation to provide data subjects with adequate information prior to the start of processing, as further explained below (Articles 5, paragraph 1, letter a) and 13 of the Regulation).

Indeed, the generic indication of the purpose of the processing and the absence of specific references in the information to the fact that the tool could also be intended for sale to third parties, as well as to the future classification and authorization of the tool as a medical device pursuant to the relevant legislation, pursuant to EU Regulation 2017/746, were noted. Again The Office also noted that the information provided is silent regarding the retention periods established solely for the purpose of data collection, indicating, as anticipated, only those a priori defined for any future processing.

In this regard, in its defense briefs, the Company stated that it had prepared a notice compliant with the provisions of the Regulation, demonstrating its willingness to improve it. Indeed, it was argued that:

"a) although it does not expressly mention the oncological pathology (multiple myeloma), the information provided is not lacking, since this information is already known to the patients concerned. \[...\];

b) although the information does not explicitly mention the possible sale of CellFind to third parties, MSB clarifies that such an eventuality does not entail further processing of personal data, nor the training of the algorithm by other parties. Consequently, the marketing of the CellFind tool does not impact the purposes and methods of processing already disclosed;

c) the information provided provides a general indication (maximum duration of 25 years), as required by Article 13 of the Regulation. 13 of the GDPR.

Finally, MSB provided specific clarifications regarding the possible existence of decision-making processes based on automated processing, including—where applicable—profiling (Articles 13 and 22 of the Regulation), specifying that:

The "CellFind" system—developed as part of the multiple myeloma project—is currently used solely for research purposes (it is, in fact, a "Research Use Only" (RUO) system), as it is not registered as a diagnostic device: this means that the tool cannot be used in diagnostic procedures.

To date, the use of CellFind does not involve any automated decision-making process, nor is it likely to produce legal effects or significantly affect data subjects. The output generated by the tool is intended exclusively for the acquisition of research data and does not in any way influence medical or clinical decisions, including those relating to the subjects whose data were used to develop the CellFind tool. Data processing is for the sole purpose of developing, verifying, and validating the tool. Once validated, the CellFind tool may be certified as an in vitro diagnostic medical device ("IVD"), \[...\]; however, this can only be achieved if the results are sufficient to support certification. \[...\] Finally, the information notice specifies that the project was aimed at developing machine learning techniques.

3.4. On the principle of accountability

The omissions described above regarding the precise definition and indication of the processing purposes in the information notice, the careful ex ante assessment of data retention periods based on the purpose of collection, and, again, the indication of data in the information notice, ultimately led the Office to detect an insufficiently responsible attitude on the part of the Company, resulting in a violation of the accountability principle (Article 5, paragraph 2 of the Regulation).

This also applies to the assessment of the anonymous nature of the data collected from the group's American subsidiary, Menarini Silicon Biosystems Inc., given that the company does not appear to have conducted an assessment of the risk of re-identification of data subjects in relation to the data it received, passively accepting the alleged, albeit plausible, anonymous nature of the information received.

In this regard, in its defense briefs, MSB emphasized its "constant commitment to applying the principle of accountability, demonstrated through the adoption of procedures and organizational measures aimed at ensuring compliance with the Regulation."

Furthermore, reiterating the above observations in relation to the disclosure, regarding the assessment of the effective anonymization of the data received from the group's American subsidiary, MSB emphasized "that it conducted a concrete and formalized technical analysis, based on an internal presentation prepared for the "CellPic™ – Data for training and testing" project, dated XX \[original name of CellFind\]. This document identifies, with a concise and technical approach, the categories of personal information potentially present in the CTAII datasets, distinguishing between directly identifying data and information potentially re-identifiable through aggregation.

In this regard, the anonymization script used by MSB Inc., which was internally tested by MSB, confirmed the correct elimination and/or randomization of all fields deemed critical. \[...\]".

4. Assessment by the Office

4.1 On the Principle of Purpose Limitation

Following its inspection of MSB, the Office of the Garante (Italian Data Protection Authority) found the Company in violation of the principle of purpose limitation, pursuant to Article 5(1)(b) of the Regulation, which requires that data be "collected for specified, explicit, and legitimate purposes and not further processed in a manner that is incompatible with those purposes; further processing of personal data for archiving purposes in the public interest, scientific or historical research purposes, or statistical purposes shall not, in accordance with Article 89(1), be considered incompatible with the initial purposes."

In particular, according to the aforementioned principle, personal data must be collected for specific purposes. The data controller must clearly identify these purposes prior to collection and subsequently not collect data that is not necessary for that purpose. This also ensures compliance with applicable legislation and the implementation of appropriate technical and organizational measures to protect the data processed.

The purposes of data collection must also be explicit, meaning clearly identified, expressed, and understandable by all parties involved (data controller and, where applicable, data processor, and data subjects). This enhances the transparency, predictability, and unambiguity of processing, particularly when the legal basis for processing for research purposes is the data subject's consent (European Data Protection Board (EDPB), Guidelines 5/2020 on consent under Regulation (EU) 2016/679, Version 1.1, adopted on 4 May 2020, see point 7.2).

Furthermore, the aforementioned principle requires that the purposes of processing comply with all provisions of data protection legislation, as well as with applicable sector-specific regulations (see Opinion 03/2013 on purpose limitation, adopted on 2 April 2013 by the Article 29 Working Party).

The processing of personal data for scientific research purposes must be carried out in compliance with the Code, the provisions relating to the processing of personal data for scientific research purposes, Annex 5 to the provision containing the Provisions relating to the processing of special categories of data, and the Ethical Rules for processing for statistical or scientific research purposes, which constitute an essential condition for the lawfulness and fairness of the processing (Article 2-quater of the Code and Article 21, paragraph 5, of Legislative Decree no. 101 of 10 August 2018).

In this context, the aforementioned Rules of Ethics in Article 3 state that "Research shall be carried out on the basis of a project drawn up in accordance with the methodological standards of the relevant disciplinary field, including to document that the processing is carried out for appropriate and effective statistical or scientific purposes."

Recital 159 of the Regulation is also worth noting, stating that "Within the context of this Regulation, the processing of personal data for scientific research purposes should be interpreted broadly and include, for example, technological development and demonstration, fundamental research, applied research, and privately funded research, in addition to taking into account the Union's objective of establishing a European Research Area pursuant to Article 179(1) TFEU" (see also Article 8 of the draft law on Provisions and Delegations to the Government on Artificial Intelligence, approved by the Senate on March 20, 2025).

Given the above, we believe that, in light of the Company's defense briefs, the challenge to the purpose limitation principle can be considered resolved.

The Company has indeed adequately clarified that it defined the purpose of collecting health data from subjects enrolled solely for the research project aimed at developing the CellFind tool, required for the automated counting of multiple myeloma tumor cells. It also clarified that "the data processing is therefore limited to research on tumor cells from patients" affected by the aforementioned disease.

This purpose, although poorly represented to data subjects in the information (see section 4.3 below), following the clarifications provided, is indeed consistent with the characteristics of lawfulness, fairness, and specificity required by the Regulation. Furthermore, it appears that regardless of any further initiatives MSB may wish to undertake with respect to the CellFind tool (marketing, classification, and authorization of the tool as a medical device), the purpose that influenced the choices regarding treatment operations is precisely the project aimed at enabling the use of CellFind on patients with multiple myeloma, with the exception of the matters described below regarding the principle of storage limitation (see point 4.2).

4.2 On the principle of storage limitation

Following an inspection conducted at MSB, the Office of the Data Protection Authority charged the Company with violating the principle of storage limitation, pursuant to Article 5, paragraph 1, letter b) of the Italian Data Protection Code. Article 13(1)(e) of the Regulation, which requires that data be "kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the data are processed; personal data may be retained for longer periods provided that the data will be processed solely for archiving purposes in the public interest, scientific or historical research purposes, or statistical purposes in accordance with Article 89(1), subject to implementation of the appropriate technical and organizational measures required by this Regulation to safeguard the rights and freedoms of the data subject."

Indeed, the Office considered that the 25-year retention period indicated in the notice referred to any "additional research projects," while on this point the Company, as reported above, clarified that "The identified periods take into account the applicable regulations and the CellSearch lifecycle (training, development, commercialization, and phase-out)."

Referring to paragraph 4.3 below regarding the manner in which this period was communicated to the data subjects, despite the clarification provided, it is noted that the briefs submitted do not appear sufficient to resolve the claim of violation of the storage limitation principle pursuant to Article 5, paragraph 1, letter e) of the Regulation.

As anticipated, the aforementioned principle requires the data controller to cease (by destroying or deleting) retaining the data in a form that identifies the data subjects upon completion of the purpose of the collection, which in this case concerns solely the implementation of the research project aimed at developing the tool necessary for the automated counting of multiple myeloma tumor cells (see point 4.1 above), the data controller having clarified that all other purposes are merely optional.

Furthermore, MSB itself stated during the preliminary investigation that the CellFind would be marketed without personal data and without the possibility of further training by external parties, and that this circumstance does not entail any change to the purposes or methods of processing personal data. Consequently, it is believed, it cannot even influence the determination of the retention period for the processed data.

The data retention period, as repeatedly indicated by the Authority, must be defined based on technical and scientific parameters that demonstrate the functionality of the identifying information with respect to the purpose of its collection and the proportionality of the indicated period (see, among others, provision of June 30, 2022, web doc. 9791886).

By including in the justification for the retention period for the collected data purposes described by the Company itself as unrelated and contingent with respect to the intended purpose (marketing and disposal), the data controller has therefore misapplied the aforementioned principle.

This is regardless of the fact that the data has not materially been retained beyond the strictly necessary period, which, however, is recognized as having a mitigating effect.

MSB's violation of the principle of storage limitation pursuant to Article 5, paragraph 1, letter e) of the Regulation is therefore confirmed.

4.3 On the principle of transparency and the obligation to provide adequate information

Following an inspection of MSB, the Office of the Data Protection Authority (Official Garante) found the Company in breach of the principle of transparency and the obligation to provide data subjects with adequate information prior to the start of processing (Articles 5, paragraph 1, letter a) and 13 of the Regulation).

As already anticipated to the data controller in the aforementioned notice of violations of the XX, based on the principle of transparency, "it should be transparent to natural persons how personal data concerning them are collected, used, consulted or otherwise processed, as well as the extent to which the personal data are or will be processed \[...\]" so that data subjects are "able to determine in advance the extent of the processing and its consequences" and are not subsequently caught "by surprise by how their personal data are used" (recital 39 and art. 5, paragraph 1, letter a) of the Regulation and Guidelines on transparency pursuant to Regulation 2016/679 adopted on 29 November 2017. Amended version adopted on 11 April 2018 by the Article 29 Working Party).

Regarding the principle of transparency, Recital 39 of the Regulation states: "It should be transparent to natural persons how personal data concerning them are collected, used, consulted or otherwise processed, as well as to what extent the personal data are or will be processed. The principle of transparency requires that information and communications relating to the processing of such personal data be easily accessible and understandable, and that clear and plain language be used. This principle concerns, in particular, the information to data subjects of the identity of the controller and the purposes of the processing, and further information to ensure fair and transparent processing, with regard to the natural persons concerned and their rights to obtain confirmation and communication of whether personal data concerning them are being processed \[...\]."

To ensure the effective application of this principle, the Regulation requires controllers to provide data subjects with a notice, using clear and plain language, prior to the start of processing, setting out all the elements referred to in Article 13 of the Regulation (in the case of data collected directly from them).

Correct implementation of the transparency principle is also essential to ensuring the lawfulness of processing, especially when based on the data subjects' consent.

Furthermore, with regard to data processing for the implementation of artificial intelligence tools, data subjects have the right to know whether the processing is being carried out during the algorithm's learning phase (testing and validation) or during the subsequent application phase. Data controllers are therefore required to prepare the information to be provided to data subjects, including the elements referred to in Articles 13 and 14 of the Regulation, in clear, concise, and comprehensible terms (Italian Data Protection Authority, "Decalogue for the creation of national health services through Artificial Intelligence systems" of 10 October 2023, web doc. 9938038).

The effective application of the transparency principle is therefore particularly important when the processing of personal data is aimed, as in this case, at training artificial intelligence tools. In this regard, the European Data Protection Board has recently observed that “Transparency about the processing of personal data includes, in particular, compliance with the information obligations as set out in Articles 12 to 14 GDPR44, which also require, in case of automated decision-making, including profiling, meaningful information about the logic involved, as well as the significance and the envisaged consequences of the processing for the data subject” and that “In some cases, it is possible to determine the purpose which will be carried out during the deployment of the AI model at an early development stage. Even where this is not the case, some context for that deployment should already be clear, and therefore, how this context informs the purpose of the development should be considered. When reviewing the purpose of the processing in a given stage of development, SAs should expect a certain degree of detail from the controller(s) and an explanation as to how these details inform the purpose of processing. known at that stage context of deployment could also include, for example, whether a model is being developed for internal deployment, whether the controller intends to sell or distribute the model to third parties after its development, including whether the model is primarily intended to be deployed for research or commercial purposes” (Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models Adopted on 17 December 2024, point 65; see also with 67 Regulation (EU) 2024/1689 which establishes harmonized rules on artificial intelligence).

In light of the current regulatory framework, briefly outlined above, we believe that the Company's defense briefs do not support the dismissal of the claim of violation of the principle of transparency and the obligation to provide adequate information pursuant to Articles 5, paragraph 1, letter a), and 13 of the Regulation.

Indeed, taking note of the statements reported above regarding the description of the purpose of the processing indicated in the privacy notice, in which MBS clarified that the two phases—one aimed at developing new products and the other at developing new algorithms using machine learning technologies—are part of a single analysis system, aimed at enabling the automated counting of circulating tumor cells, it is clear that the privacy notice nevertheless states that "This Project carries out the following two main goals." It may therefore well lead data subjects to believe that the processing has two distinct and different purposes, without allowing them to understand that they are two phases of a single process. For greater clarity, the specific pathology for which the processing is being conducted should be clearly indicated. It is reiterated that the specific purpose of the processing, carried out for research purposes, must also be clearly explained to data subjects (Guidelines 5/2020 on consent pursuant to Regulation (EU) 2016/679, Version 1.1, adopted on May 4, 2020, point 155).

With regard to the indication of the data retention period, it should be noted, first of all, that this information is located in the section of the information entitled "Retention of your data and samples and additional research projects," a circumstance that the Garante deems likely to generate confusion between the indication of the data retention period necessary to achieve the purpose of the collection and the possible and preparatory period for the implementation of further projects.

This section, regarding the data retention period, states that "The data inferred from the test will be retained for as long as needed to complete their analysis and retrospective analysis. Such period of time should not exceed 25 years." In this regard, it is noted that this period also appears to be related to the possibility of conducting retrospective analyses, but this circumstance is not included among the technical and scientific reasons presented by the data controller as the basis for the retention period.

In summary, the misleading description of the purpose of the collection—which, as well described in the preliminary investigation, the data controller could and should have better explained to the data subjects—and the indication of a data retention period in terms that are equally misleading and disproportionate to the purpose of the collection confirm MSB's violation of the principle of transparency and the obligation to provide adequate information on data processing pursuant to Articles 5, paragraph 1, letter a), and 13 of the Regulation.

4.4. On the principle of accountability

Following its inspection of MSB, the Italian Data Protection Authority (Official Data Protection Authority) charged the Company with violating the principle of accountability by failing to accurately define and specify the purposes of processing in the privacy notice, by accurately assessing data retention periods based on the purpose of collection, and by accurately specifying them in the privacy notice. It also failed to assess whether the data collected from the group's US subsidiary, Menarini Silicon Biosystems Inc., was anonymous.

With regard to this last aspect, MSB provided appropriate documentation to demonstrate that it had assessed the risk of re-identification of the data subjects to whom the data collected from the aforementioned US company refers. The data was used to train the CellFind tool for metastatic breast, prostate, and colorectal cancers.

Conversely, based on the investigations conducted and the documentation examined, it emerged that the data controller, despite being aware of the purpose of the personal data collection and the risks inherent in the use (even during the implementation phase) of artificial intelligence tools—to the point of properly carrying out the VIP pursuant to Article 35 of the Regulation—and always ensuring human supervision of the tool's output, nevertheless failed to implement specific responsible and necessary procedures to ensure the effective application of the data subjects' fundamental rights and freedoms.

In fact, the information on the processing of personal data does not appear to be accurate and consistent with the specific data processing performed, particularly with regard to the correct definition of the purpose of the processing, the retention periods, and the clear indication of the pathology observed.

Contrary to the Company's defense, which emphasized that "the complaints raised by the Authority concern formal issues of transparency and clarity of the information provided to data subjects rather than substantive violations of the Regulation with a direct impact on individuals," the Authority believes the aforementioned omissions are significant and serious.

The principle of accountability, the cornerstone of the revised regulatory framework for personal data protection, requires that the data controller comply with and be able to demonstrate compliance with the principles and obligations set forth in the Regulation and that it has effectively safeguarded the data subjects' right to personal data protection from the design stage (Articles 5, paragraph 2, 24, and 25, paragraph 1 of the Regulation).

The updated regulatory framework for personal data protection requires a thoughtful assessment of all choices related to the processing of personal data, logically demonstrated through specific justifications, aimed at identifying necessary and proportionate measures with respect to the concrete effectiveness of the principle protected at the time (see Provision of January 23, 2020, web doc. 9261093).

The identification of adequate and concrete measures for the application of personal data protection principles, particularly transparency, plays a crucial role in protecting the rights of data subjects in their interactions with artificial intelligence tools (considered at any stage of their lifecycle based on a whole-lifecycle approach). The opaqueness of algorithmic logic, the gap between the data subject (often vulnerable in healthcare settings) and the data controller, can be bridged primarily through the effective application of the principle of transparency. This, through adequate, accurate, clear, and intelligible information, allows data subjects to maintain control over their information and make informed choices. This also contributes to creating the climate of trust desired by the Regulation, as well as pursuing the Union's objective of establishing a European Research Area pursuant to Article 179(1) TFEU (recitals 7 and 159 of the Regulation).

Therefore, MSB's violation of the principle of accountability pursuant to Article 5(2) of the Regulation is confirmed.

5. Conclusions

In light of the above considerations, and taking into account the statements made by the data controller during the investigation—the veracity of which may be held accountable pursuant to Article 179(1) TFEU. 168 of the Code, the information provided by the data controller in the defense brief, although worthy of consideration, does not, as explained and explained above, address most of the concerns notified by the Office in the initiation of the proceeding. Furthermore, none of the cases provided for in Article 11 of the Garante Regulation No. 1/2019 apply.

For these reasons, Menarini Silicon Biosystems SpA is found to have violated Article 5, paragraph 1, letters a), e), and 2, and Article 13 of the Regulation. Violation of the aforementioned provisions also gives rise to the administrative sanction provided for in Article 83, paragraphs 4 and 5 of the Regulation, pursuant to Articles 58, paragraph 2, letter i), and 83, paragraph 3 of the Regulation.

6. Corrective Measures

Article 58, paragraph 1, letter b), provides: Article 58(2) of the Regulation provides the Garante with a series of corrective powers, both prescriptive and punitive, to be exercised in the event that unlawful processing of personal data is ascertained.

Among these powers, Article 58(2)(d) of the Regulation provides for the power to "order the controller or processor to bring the processing operations into conformity with the provisions of this Regulation, where appropriate, in a specific manner and within a specific period."

In light of the above considerations, it is deemed appropriate to order the Company, pursuant to Article 58(2)(d) of the Regulation, to disclose, within thirty (30) days of notification of this provision:

- the data retention period deemed necessary, based on specific technical and legal reasons, for the development of the CellFind tool, for the automated counting of multiple myeloma tumor cells;

- the amended text of the information notice regarding the processing of personal data collected for the development of the CellFind tool, required for the automated counting of multiple myeloma tumor cells;

- the measures taken or intended to be taken to ensure the widest possible dissemination of the aforementioned information notice, such as, for example, the publication on the websites of the healthcare facilities where the data was collected, the data controller, and the MSB itself, or the posting of specific information panels in the relevant departments of the healthcare facilities where the data was collected.

8. Adoption of the injunction order for the application of the administrative pecuniary sanction and additional sanctions (Articles 58, paragraph 2, letters i and 83 of the Regulation; Article 166, paragraph 7, of the Code).

Violations of Articles 5, paragraph 1, letter a), 5, paragraph 2, and 13 of the Regulation committed by the Company are subject to the application of an administrative fine pursuant to Article 83, paragraph 4, letter a) and Article 5, letters a) and b) of the Regulation.

The Guarantor, pursuant to Articles 58, paragraph 2, letter i) and 83 of the Regulation, as well as Article 166 of the Code, has the power to "impose a pecuniary administrative sanction pursuant to Article 83, in addition to the \[other\] corrective measures referred to in this paragraph, or in place of such measures, depending on the circumstances of each individual case." Within this framework, "the \[Garante\] Panel shall adopt the injunction order, by which it also orders the application of the additional administrative sanction, its publication, in full or in extract, on the Garante's website pursuant to Article 166, paragraph 7, of the Code" (Article 16, paragraph 1, of the Garante Regulation No. 1/2019).

The aforementioned pecuniary administrative sanction imposed, depending on the circumstances of each individual case, must be determined in amount taking into account the principles of effectiveness, proportionality, and dissuasiveness, indicated in Article 83, paragraph 1, of the Regulation, in light of the elements set out in Article 166, paragraph 1, of the Regulation. 83, paragraph 2 of the Regulation, it is noted, in particular, that:

- the processing carried out concerned, in particular, information suitable for determining the health status of approximately 98 patients involved in the research project aimed at developing the CellFind tool, necessary for the automated counting of multiple myeloma tumor cells, subject to preventive pseudonymization measures (Article 83, paragraph 2, letters a) and g) of the Regulation);

- with regard to the subjective element, no intentional conduct on the part of the data controller emerges, as the identified violations occurred in good faith (Article 83, paragraph 2, letter b) of the Regulation);

- the Company proved cooperative during the inspection and promptly provided the requested feedback during the investigation, declaring itself ready to initiate a review of the information (Article 83, paragraph 2, letters f) and g) of the Regulation);

- there are no previous corrective measures already adopted by the Guarantor against the Company (Article 83, paragraph 2, letter h) of the Regulation);

- the circumstances in which the aforementioned violations were detected concern technologies characterized by a highly innovative content in the fields of microelectronics, microfluidics, artificial intelligence, and bioinformatics, aimed primarily at customers operating in the research sector (Article 83, paragraph 2, letter k) of the Regulation);

- with specific reference to the principle of storage limitation, since the project is still ongoing, the company has not materially retained the personal data processed beyond the necessary period (Article 83, paragraph 2, letter k) of the Regulation).

Based on the above factors, assessed as a whole, it is deemed appropriate to determine the amount of the pecuniary sanction provided for by Article 83, paragraph 5, of the Regulation, in the amount of €21,000 (twenty-one thousand) for the violation of Article 5, paragraph 1, letters a), e), and paragraph 2, and Article 13 of the Regulation as an administrative pecuniary sanction deemed, pursuant to Article 83, paragraphs 1 and 3, of the Regulation, to be effective, proportionate, and dissuasive.

It is also considered that the additional sanction of publication of this provision on the website of the Data Protection Authority should apply, as provided for by Article 166, paragraph 7 of the Code and Article 13 of the Regulation. 16 of the Italian Data Protection Authority Regulation No. 1/2019, also taking into account the type of personal data subject to unlawful processing.

Finally, it is noted that the conditions set out in Article 17 of Regulation No. 1/2019 concerning internal procedures of external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Italian Data Protection Authority, are met.

NOW CONSIDERING ALL THE ABOVE, THE ITALIAN DATA PROTECTION AUTHORITY

declares the unlawful processing of personal data by Menarini Silicon Biosystems SpA, with registered office at Via G. Di Vittorio, 21b/3, 40013 Castel Maggiore, Bologna, Italy, VAT No. 02602741205, for violation of Articles 5, paragraph 1, letters a), e), and 2, and Article 13 of the Regulation, as set out in the reasons given.

ORDERS

pursuant to Articles 58, paragraph 1, and 2, of the Italian Data Protection Authority. 2, letter i) and 83 of the Regulation, as well as Article 166 of the Code, the Company is ordered to pay the sum of €21,000 (twenty-one thousand) as an administrative fine for the violations indicated in this order. It is hereby stated that the offender, pursuant to Article 166, paragraph 8, of the Code, has the right to settle the dispute by paying, within 30 days, an amount equal to half of the imposed fine;

Pursuant to Articles 58, paragraph 1, letter a), of the Regulation and 157 of the Code, to notify this Authority, within thirty (30) days of notification of this order:

- the data retention period deemed necessary, based on specific technical and legal reasons, for the development of the CellFind tool, for the automated counting of multiple myeloma tumor cells;

- the amended text of the information notice on the processing of personal data collected for the development of the CellFind tool, required for the automated counting of multiple myeloma tumor cells;

- the measures taken or intended to be taken to provide the aforementioned information notice.

ORDERS

the Company:

1. to pay the sum of €21,000 (twenty-one thousand) in the event of failure to resolve the dispute pursuant to Article 166, paragraph 8, of the Code, according to the procedures indicated in the attachment, within 30 days of notification of this order, under penalty of the adoption of the consequent enforcement proceedings pursuant to Article 27 of Law No. 689/1981;

ORDERS

pursuant to Article 166, paragraph 7 of the Code, the publication of this order in full on the website of the Guarantor and believes that the conditions set forth in Article 166, paragraph 7, of the Code are met. 17 of Regulation No. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

Pursuant to Article 78 of the Regulation, Articles 152 of the Code, and Article 10 of Legislative Decree No. 150/2011, an appeal against this provision may be lodged before the ordinary judicial authority, under penalty of inadmissibility, within thirty days of the date of notification of the provision itself, or within sixty days if the appellant resides abroad.

Catanzaro, May 21, 2025

THE PRESIDENT
Stanzione

THE REPORTER
Cerrina Feroni

THE ACTING SECRETARY GENERAL
Filippi

\[web doc. No. 10149917\]

Provision of May 21, 2025

Register of Provisions
No. 287 of May 21, 2025

THE ITALIAN DATA PROTECTION AUTHORITY

IN today's meeting, attended by Professor Pasquale Stanzione, President, Professor Ginevra Cerrina Feroni, Vice President, Dr. Agostino Ghiglia and Guido Scorza, members, and Dr. Claudio Filippi, Acting Secretary General;

SEEN Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC - General Data Protection Regulation (hereinafter "Regulation");

SEEN Legislative Decree no. 196 of June 30, 2003 196 of 30 June 2019, containing the "Personal Data Protection Code" (hereinafter the "Code");

CONSIDERING the Rules of Ethics for Processing for Statistical or Scientific Research Purposes adopted by the Italian Data Protection Authority, pursuant to Article 20, paragraph 4, of Legislative Decree No. 101 of August 10, 2018, with Order No. 515 of December 19, 2018 (web doc. No. 9069637, hereinafter the "Rules of Ethics");

CONSIDERING the Provisions relating to the processing of personal data for scientific research purposes, Annex No. 5 to the Order, which identifies the provisions contained in the General Authorizations that are compatible with the Regulation and with Legislative Decree No. 101/2018, amending the Code, of June 5, 2019 (web doc. 9124510, hereinafter the "Provisions");

CONSIDERING the documentation in the file;

CONSIDERING the observations made by the Secretary General pursuant to Article 15 of Regulation No. 1/2000 of the Italian Data Protection Authority on the organization and functioning of the Office of the Italian Data Protection Authority, at www.gpdp.it, web doc. No. 1098801;

Rapporteur: Professor Ginevra Cerrina Feroni;

WHEREAS

1. Inspection

On XX and XX, an inspection was conducted at Menarini Silicon Biosystems SpA (hereinafter the Company or MSB) to verify compliance with the provisions on the protection of personal data in processing for scientific research purposes, including through artificial intelligence tools, with specific regard to the lawfulness requirements, disclosure obligations, and pseudonymization measures (Article 58, paragraph 1, letters a), e), and f) of the Regulation; Articles 157 and 158 of the Decree Legislative Decree No. 196 of June 30, 2003, Code; Articles 21 and 22 of Regulation No. 1/2019 of the Italian Data Protection Authority; Service Order No. XX of XX).

The Company was founded around a technology that enables the isolation and subsequent analysis of cells from the blood of cancer patients. "It is a highly unique and sui generis entity in the life sciences field, as it is dedicated to the research and development of technologies and applications primarily related to Circulating Tumor Cells (CTCs) for Liquid Biopsy, particularly for the enrichment, counting, isolation, and analysis of rare cells. The technologies developed by MSB are designed to provide information from the analysis of blood samples (collected through a simple puncture) rather than tissue samples (the collection of which, on the contrary, requires invasive, risky, and/or painful procedures for patients)" (Defense Brief of XX).

During the preliminary investigation, the operating procedures of the CellFind tool—which the Office learned about from the Company's website—were explained, clarifying that "it is software (research use only) that analyzes cell images for classification purposes, to be used both for the company's own research in the oncology field and for sale to third parties. The tool is currently neither classified nor authorized as a medical device under the relevant legislation, pursuant to EU Regulation 2017/746, but the company does not rule out initiating such proceedings in the future."

CellFind is therefore currently a patent-free product available for sale, the result of experimental "technological development." To this end, the company has therefore defined a specific project, \[...\], which, among other things, specifies the types of samples required for product development. \[...\].

More specifically, it was stated that "the CellFind software receives images of cells associated with a patient identified by a unique identifier. \[...\]. CellFind processes them to identify tumor cells. \[...\] Generally, the operator analyzes the images, classifies them, and generates a report on the presence and number of tumor cells. In the case of CellFind, the classification is performed automatically. The classification is then verified by the operator, who can optionally modify the CellFind classification." Specifically, "CellFind operates through a state-trained deep learning network to distinguish tumor cells from other cells."

As explained in more detail below, it emerged that the Company has already developed CellFind for the classification of some specific oncological diseases, while the use of the tool for other diseases is currently in the design phase. Specifically, "The CellFind product for the analysis of metastatic breast, prostate, and colorectal cancers is already developed and boasts an image classification accuracy of 96%-98% \[...\].

To train the network to classify the first three tumors considered, the company relied primarily on an internal company within the group based in the US (Menarini Silicon Biosystems Inc.), which provided the training data. The US company preliminarily removed the pseudonym assigned to patients enrolled in clinical trials conducted by the same US company within the group (or by those from which it derives), replacing it with a random code not associated with the patient." Specifically, the data consists of a set of fluorescence images with no further temporal references. The data used in the design phase dates back approximately 10 years, while more recent images were also acquired from the same US company during the validation phase.

The current project, however, aims to enable the use of CellFind on patients with multiple myeloma. In this case, the network will be trained using cell images from approximately 200 patients \[figure corrected during the preliminary investigation\], from which approximately 50,000 to 100,000 images will be extracted.

"In order to extend the applicability of CellFind to multiple myeloma, the company is also collecting personal data, albeit pseudonymized, through a Bulgarian company. \[...\] Following an impact assessment pursuant to Article 35 of the Regulation, the images used to train the network to classify images relating to this latter tumor were acquired, subject to the prior information and consent of the data subjects, through a provider \[...\], a company, designated as data controller pursuant to Article 28 of the Regulation, established in Bulgaria" \[...\] (the Company has provided in its documents the Data Process Agreement, entered into pursuant to Article 28 of the Regulation with the aforementioned company, along with its various amendments).

Each sample is accompanied by a code relating to each patient, which is necessary for security and data quality purposes, and to certify that it is truly related to a specific patient. Once acquired, the data is subject to a recoding process that does not exclude the possibility of tracing the data subject back to the data subject if necessary, including any regulatory constraints relevant to future certification of the tool as a medical device for diagnostic use, which is currently neither envisaged nor excluded by the company. For this reason, the company intends to retain the collected data \[...\].
\[...\] The retention period would be defined with a view to the future certification of the product as a medical device, as often occurs in procedures relating to innovative medical devices.

The Company also stated that "the CellFind algorithm is 'locked,' indicating that any purchasers of the tool cannot continue training the network or modifying its parameters."

During the inspection, the data files acquired by the American company (Menarini Silicon Biosystems Inc.) of the group or its predecessors were then verified through access. Each individual record contains a code identifying the cartridge containing the biological sample. Each record in the file contains images extracted from that biological sample; these images are not modified.

The identifier assigned to the record at the source of the data is unknown to MSB. The American company applies an additional one-way cryptographic encoding to it, generating a code (without any semantic value) that is irreversible even for that company. MSB receives the data in this format; The records and images displayed by the party do not contain any other identifiers.

The images taken from the biological samples acquired through the Bulgarian company responsible for data processing pursuant to Article 28 of the Regulation were also verified \[...\]. Each record is associated with an alphanumeric identification code referring to a cartridge associated with the code of the sample acquired by the aforementioned company. This code is originally linked to the patient code at the data source (hospital) where the company responsible for data processing collects the samples.

2.3 Additional elements taken from the documentation submitted in the case file

A detailed description of the CellFind operation is reported in the impact assessment conducted by the Company, pursuant to Article 35 of the Regulation (VIP), for the processing of data necessary for its development. From this assessment, in addition to what has already been reported above, further specific information is obtained regarding:

"4) Algorithm training

The images present on GCP are used to train the CellFind algorithm to recognize and count the cells of interest. The algorithm is installed on a virtual machine resident on GCP.

5) Algorithm Testing

Once the algorithm has been trained, it is tested using new images already present on GCP. The output is a report including the count of the cells of interest.

6) Algorithm Validation

A team of experts compares the results of the cell recognition and counting process performed by CellFind with those performed manually and validates the algorithm's performance according to appropriate procedures established by industry standards, such as those developed by the Clinical Laboratory Standards Institute.

The various process outputs (e.g., tables, presentations, or draft validation plans) are stored in shared folders, protected by two-factor authentication, accessible to teams who need to access them.

Regarding retention periods, it is stated that "the data is retained for the time necessary to achieve the purposes for which consent was given and subsequently retained for a period not exceeding 25 years." This deadline is calculated based on the product's life cycle (5 years for development, 15 years for marketing, 5 years for disposal). The deadline may also be extended if necessary to comply with regulatory obligations (e.g., pursuant to Article 10, paragraph 7, of EU Regulation 2017/746, which requires the retention of file data for a period of 10 years from the placing on the market of the last device subject to the EU declaration of conformity, if longer than the first deadline).

2. Contested Violations

Based on the information acquired during the aforementioned inspection activity and subsequent assessments, the Office—with a document dated XX (ref. no. XX)—which is to be considered reproduced here in its entirety—initiated, pursuant to Article 166, paragraph 5, of the Code, a proceeding for the adoption of the measures referred to in Article 58, paragraph 1, of the Code. 2 of the Regulation, against MSB, inviting it to submit written statements or documents to the Data Protection Authority or to request a hearing before the Authority (Article 166, paragraphs 6 and 7 of the Code, as well as Article 18, paragraph 1, Law No. 689 of 24 November 1981).

With the aforementioned document, the Office notified the Company that it has established that the processing of personal data carried out to train the CellFind tool algorithm, for the analysis and classification of multiple myeloma tumor cells, violated the principle of transparency, as well as the resulting obligation to provide accurate and complete information to data subjects, the principles of purpose limitation, storage limitation, and accountability. The alleged violation of this latter principle also concerns the failure to conduct thorough assessments regarding the risk of re-identification of data subjects in the data collected from the American company of the Menarini Group, Menarini Silicon Biosystems Inc. (articles 5, par. 1, letter a), b), e), and par. 2; 13 Regulation).

3. Defense briefs

With a note dated 20th, the Company submitted its defense briefs, without requesting a hearing, pursuant to Article 166, paragraph 5 of the Code.

3.1. On the principle of purpose limitation

Disputing the principle of purpose limitation (Article 5, paragraph 1, letter b) of the Regulation), the Office, having noted that, contrary to what emerged during the inspection, the documentation submitted (particularly the information notice and the impact assessment) indicates that the data is intended to be processed for scientific research purposes, also noted that the Company includes a potential purpose in the processing, namely, initiating the procedure for the classification and authorization of the tool as a medical device pursuant to the relevant legislation, pursuant to EU Regulation 2017/746. Although described as merely potential, this additional processing purpose appeared to influence the determination of data retention periods.

The Office also noted that, in the information provided to data subjects upon collection of biological samples and genetic and health data, the Company indicated that the data were processed for two purposes that appeared to be separate and alternative, and not expressly related to multiple myeloma:

i) developing a new instrument ("Product") capable of enriching and staining circulating tumor cells to count them. \[…\].;

ii) developing algorithms using machine learning technology for image analysis that support healthcare professionals in diagnosis or prognosis determination by introducing faster and easier methods for tumor cell identification.

It was therefore deemed that the purpose of the processing, as described in the information and in the documentation, lacked the necessary specificity and completeness. This is also taking into account that, although the Company is aware of the specific oncological pathology for which the CellFind system algorithm will be trained to classify the cells, this is not explicitly stated, nor is there any specific reference to the possibility that the tool could also be sold to third parties, despite this being stated during the inspection.

In this regard, the Company stated in its defense briefs that the development of the product ("Product") and the algorithms ("algorithms") represent two integrated phases of a single analysis system, aimed at enabling the automated counting of circulating tumor cells.

More specifically, MSB owns a specific analysis system, which requires an enrichment and labeling phase for the cells present in the blood samples, a precursor to the subsequent manual counting of tumor cells by an operator.

MSB further clarified that "the specific nature of the disease was already known to the data subjects" insofar as "the information provided to the data subjects refers to the tumor disease from which they suffer, with the wording 'your disease.'" The data processing is therefore limited to research on patients' tumor cells, and in this specific case concerns multiple myeloma, since the acquired oncology samples \[...\] "were taken from patients affected only by that disease."

It was also stated that "with regard to samples from healthy donors, their use is limited to control purposes, as specified in the information, which states that 'The Project also entails the use of samples from healthy donors, as controls, to ensure the new techniques only provide reliable data. This is the reason why healthy volunteers will also be asked to participate.'" Furthermore, in the section on secondary use, the information clarifies that the processing is carried out "to further improve the diagnostic techniques related to the Project": the use of the samples therefore remains limited to these defined areas.

On this basis, the Company therefore deemed that, in accordance with Article 13, paragraph 4, of the GDPR, it was "not necessary to repeat the specific pathology in the notice, as this information is already known to the data subjects." However, the Company stated that it was willing to immediately amend the notice if requested by the Authority.

Finally, regarding the failure to mention the possible sale of the CellFind tool to third parties, MSB clarified that CellFind would be marketed without including personal data and without the possibility of further training by external parties. Therefore, the Company stated that this circumstance does not entail any change to the purposes or methods of processing of personal data already described in the notice and, consequently, does not fall within the information required to be provided pursuant to Article 13 of the GDPR.

3.2 On the principle of storage limitation

In accordance with the principle of storage limitation (Article 5, paragraph 1, letter e) of the Regulation), the Office noted, in particular, that during its inspection, MSB did not provide information on the retention periods for the data processed for the development of the CellFind system algorithm for the analysis and classification of multiple myeloma cells. MSB stated, in very general terms, that it manages a repository of the data collected for training CellFind for possible future certifications.

Furthermore, it was contested that the information on the processing of personal data does not indicate the data retention periods other than those related to any "additional research projects" \[intended to be based on an autonomous and specific consent of the interested parties\] a priori indicated as 25 years and that in the data impact assessment on CellFind, with respect to retention periods, it is instead indicated that "The terms identified take into account the applicable regulations, the life cycle of CellSearch (training, development, commercialization and phase-out)" and that "The data are retained for the time necessary to pursue the purposes for which consent was given and subsequently retained for a period not exceeding 25 years. This term is calculated on the basis of the life cycle of the product (5 years for development, 15 years for commercialization, 5 years for disposal). The term can also be extended if necessary to comply with regulatory obligations (e.g., pursuant to art. 10 paragraph 7 of EU Regulation 2017/746, which provides for the retention of data of the file for a period of 10 years from the placing on the market of the last device covered by the EU declaration of conformity, if longer than the first deadline).

In this regard, MSB stated that these details were not included in the notice because, pursuant to Article 13 of the GDPR, it is necessary and sufficient to indicate the retention period but not to explain the underlying reasons.

In its defense briefs, the Company also stated that "\[...\] the section of the notice dedicated to data retention also refers to the primary purpose, as is evident from its title ("Retention of your data and samples and additional research projects") and from the fact that the information on the retention period is found in a separate paragraph from the description of any processing for further research purposes, precisely because it refers to the total data retention period, once the primary use and any further use of the data have been completed ("The data inferred from the test will be retained for as long as needed to complete their analysis and retrospective analysis. Such period of time should not exceed 25 years").

The Company therefore emphasized that "the 'possible' purpose of initiating the procedure for classifying and authorizing the tool as a medical device does not entail any extension of the retention period (25 years) already established for the primary use. If this procedure were actually undertaken, the data would still be processed within the same timeframe, in accordance with the principle of storage limitation established by Article 5, paragraph 1, of the GDPR." 1, letter e) of the GDPR. Therefore, the potential certification purpose would not entail an extension of these timeframes, with the maximum period of 25 years remaining unchanged even if the project were to evolve towards classification as a medical device. Similarly, if the procedure is not initiated, the data will still be retained within the original limits and purposes, without exceeding the retention period communicated to the data subjects.

3.3 On the principle of transparency and the obligation to provide adequate information

The circumstances noted above, the inconsistencies, and the additional critical issues regarding the purposes of the processing and the data retention periods, have led the Office to also contest the Company's violation of the principle of transparency and the obligation to provide data subjects with adequate information prior to the start of processing, as further explained below (Articles 5, paragraph 1, letter a) and 13 of the Regulation).

Indeed, the generic indication of the purpose of the processing and the absence of specific references in the information to the fact that the tool could also be intended for sale to third parties, as well as to the future classification and authorization of the tool as a medical device pursuant to the relevant legislation, pursuant to EU Regulation 2017/746, were noted. Again The Office also noted that the information provided is silent regarding the retention periods established solely for the purpose of data collection, indicating, as anticipated, only those a priori defined for any future processing.

In this regard, in its defense briefs, the Company stated that it had prepared a notice compliant with the provisions of the Regulation, demonstrating its willingness to improve it. Indeed, it was argued that:

"a) although it does not expressly mention the oncological pathology (multiple myeloma), the information provided is not lacking, since this information is already known to the patients concerned. \[...\];

b) although the information does not explicitly mention the possible sale of CellFind to third parties, MSB clarifies that such an eventuality does not entail further processing of personal data, nor the training of the algorithm by other parties. Consequently, the marketing of the CellFind tool does not impact the purposes and methods of processing already disclosed;

c) the information provided provides a general indication (maximum duration of 25 years), as required by Article 13 of the Regulation. 13 of the GDPR”.

Finally, MSB provided specific clarifications regarding the possible existence of decision-making processes based on automated processing, including, where applicable, profiling (Articles 13 and 22 of the Regulation), specifying that:

"The 'CellFind' system – developed as part of the multiple myeloma project – is currently used solely for research purposes (it is, in fact, a 'Research Use Only' (RUO) system), as it is not registered as a diagnostic device: this means that the tool cannot be used in diagnostic procedures.

To date, the use of CellFind does not involve any automated decision-making process, nor is it likely to produce legal effects or significantly impact data subjects. The output generated by the tool is intended exclusively for the acquisition of research data and does not in any way influence medical or clinical decisions, including those relating to the subjects whose data were used to develop the CellFind tool. The data processing is for the sole purpose of developing, verifying, and validating the tool. Once Once validated, the CellFind tool may be subject to certification as an in vitro diagnostic medical device ("IVD"), \[...\]; however, this can only be achieved if the results are sufficient to support certification. \[...\] Finally, the information notice specifies that the project was aimed at developing machine learning techniques.

3.4. On the principle of accountability

The omissions described above regarding the precise definition and indication of the processing purposes in the information notice, the careful ex ante assessment of data retention periods based on the purpose of collection, and, again, their indication in the information notice ultimately led the Office to detect an insufficiently responsible attitude on the part of the Company, resulting in a violation of the accountability principle (Article 5, paragraph 2 of the Regulation).

This also applies to the assessment of the anonymous nature of the data collected from the group's American subsidiary, Menarini Silicon Biosystems Inc., given that the Company does not appear to have conducted an assessment of the risk of re-identification of data subjects in relation to the data it received, accepting passively dismissed the alleged, albeit plausible, anonymous nature of the information received.

In this regard, in its defense briefs, MSB emphasized its "constant commitment to applying the principle of accountability, demonstrated through the adoption of procedures and organizational measures aimed at ensuring compliance with the Regulation."

Furthermore, reiterating the observations already made above regarding the disclosure, regarding the assessment of the effective anonymization of the data received from the group's American subsidiary, MSB emphasized "that it conducted a concrete and formalized technical analysis, based on an internal presentation prepared for the "CellPic™ – Data for training and testing" project, dated XX \[original name of CellFind\]. This document identifies, with a concise and technical approach, the categories of personal information potentially present in the CTAII datasets, distinguishing between directly identifying data and information potentially re-identifiable through aggregation."

In this regard, the anonymization script used by MSB Inc., which was internally tested by MSB, confirmed the correct elimination and/or randomization of all fields deemed critical. \[...\]”.

4. Office's Assessment

4.1 On the Principle of Purpose Limitation

Following its inspection of MSB, the Office of the Garante (Italian Data Protection Authority) found the Company in violation of the principle of purpose limitation, pursuant to Article 5, paragraph 1, letter b) of the Regulation, according to which data must be "collected for specified, explicit, and legitimate purposes and not further processed in a manner that is incompatible with those purposes; Further processing of personal data for archiving purposes in the public interest, scientific or historical research purposes, or statistical purposes shall not, in accordance with Article 89(1), be considered incompatible with the initial purposes.

In particular, according to the aforementioned principle, personal data must be collected for specific purposes. The data controller must clearly identify these purposes before collection and subsequently not collect data that is not necessary for that purpose. This also ensures compliance with applicable legislation and the implementation of appropriate technical and organizational measures to protect the data processed.

The purposes of collection must also be explicit, meaning clearly identified, expressed, and understandable to all parties involved (controller and, where applicable, processor, data subjects). This enhances the transparency, predictability, and unambiguity of processing, particularly when the legal basis for processing for research purposes is the data subject's consent (European Data Protection Board (EDPB), Guidelines 5/2020 on consent under Regulation (EU) 2016/679). 2016/679, Version 1.1, adopted on May 4, 2020, see point 7.2).

Furthermore, the aforementioned principle requires that the purposes of the processing comply with all provisions of data protection legislation, as well as with the applicable sector-specific regulations (see Opinion 03/2013 on purpose limitation, adopted on April 2, 2013 by the Article 29 Working Party).

The processing of personal data for scientific research purposes must be carried out in compliance with the Code, the provisions relating to the processing of personal data for scientific research purposes, Annex 5 to the provision containing the Requirements relating to the processing of special categories of data, and the Rules of Ethics for processing for statistical or scientific research purposes, which constitute an essential condition for the lawfulness and fairness of processing (Article 2-quater of the Code and Article 21, paragraph 5, of Legislative Decree No. 101 of August 10, 2018).

In this regard Within this framework, the aforementioned Rules of Ethics in Article 3 state that "Research shall be carried out on the basis of a project drawn up in accordance with the methodological standards of the relevant disciplinary field, including to document that the processing is carried out for appropriate and effective statistical or scientific purposes."

Recital 159 of the Regulation is also worth mentioning, stating that "Within the context of this Regulation, the processing of personal data for scientific research purposes should be interpreted broadly and include, for example, technological development and demonstration, fundamental research, applied research, and privately funded research, in addition to taking into account the Union's objective of establishing a European Research Area pursuant to Article 179(1) TFEU" (see also Article 8 of the draft law on Provisions and Delegations to the Government on Artificial Intelligence, approved by the Senate on March 20, 2025).

Given the above, it is believed that, in light of the defence briefs submitted by the Company, the challenge to the principle of limitation of the right to data processing can be considered resolved. Purpose.

The Company has indeed adequately clarified that it has defined the purpose of collecting health data from subjects enrolled solely for the research project aimed at developing the CellFind tool, required for the automated counting of multiple myeloma tumor cells. It also clarified that "The data processing is therefore limited to research on tumor cells from patients" affected by the aforementioned disease.

This purpose, although poorly represented to data subjects in the information notice (see paragraph 4.3 below), following the clarifications provided, is in fact consistent with the characteristics of lawfulness, fairness, and specificity required by the Regulation. Furthermore, it appears that regardless of any further initiatives MSB may wish to undertake with respect to the CellFind tool (marketing, classification, and authorization of the tool as a medical device), the purpose that influenced the choices regarding processing operations is precisely the project aimed at enabling the use of CellFind on patients affected by multiple myeloma, with the exception of what is stated below regarding the principle of storage limitation (see point 4.2).

4.2 On the principle of storage limitation

Following an inspection of MSB, the Office of the Data Protection Authority (Official Garante) found the Company in violation of the principle of storage limitation, pursuant to Article 5, paragraph 1, letter e) of the Regulation, which requires that data be "kept in a form which permits identification of data subjects for no longer than is necessary for the purposes for which the data are processed; Personal data may be retained for longer periods provided that they are processed solely for archiving purposes in the public interest, scientific or historical research purposes, or statistical purposes, in accordance with Article 89(1), subject to implementation of the appropriate technical and organizational measures required by this Regulation to safeguard the rights and freedoms of the data subject.

Indeed, the Office considered that the 25-year retention period indicated in the notice related to any "additional research projects," while on this point the Company, as reported above, clarified that "The identified periods take into account applicable regulations and the CellSearch lifecycle (training, development, commercialization, and phase-out)."

Referring to paragraph 4.3 below regarding the manner in which this period was communicated to the data subjects, despite the clarification provided, it is noted that the briefs submitted do not appear sufficient to resolve the claim of violation of the storage limitation principle pursuant to Article 5, paragraph 1, letter e) of the Regulation.

As anticipated, the aforementioned principle requires the data controller to cease (by destroying or deleting) retaining the data in a form that identifies the data subjects upon completion of the purpose of the collection, which in this case concerns solely the implementation of the research project aimed at developing the tool necessary for the automated counting of multiple myeloma tumor cells (see point 4.1 above), the data controller having clarified that all other purposes are merely optional.

Furthermore, MSB itself stated during the preliminary investigation that the CellFind would be marketed without personal data and without the possibility of further training by external parties, and that this circumstance does not entail any change to the purposes or methods of processing personal data. Consequently, it is believed, it cannot even influence the determination of the retention period for the processed data.

The data retention period, as repeatedly indicated by the Authority, must be defined based on technical and scientific parameters that demonstrate the functionality of the identifying information with respect to the purpose of its collection and the proportionality of the indicated period (see, among others, provision of June 30, 2022, web doc. 9791886).

By including in the justification for the retention period for the collected data purposes described by the Company itself as unrelated and contingent with respect to the intended purpose (marketing and disposal), the data controller has therefore misapplied the aforementioned principle.

This is regardless of the fact that the data has not materially been retained beyond the strictly necessary period, which, however, is recognized as having a mitigating effect.

MSB's violation of the principle of storage limitation pursuant to Article 5, paragraph 1, letter e) of the Regulation is therefore confirmed.

4.3 On the principle of transparency and the obligation to provide adequate information

Following an inspection of MSB, the Office of the Data Protection Authority (Official Garante) found the Company in breach of the principle of transparency and the obligation to provide data subjects with adequate information prior to the start of processing (Articles 5, paragraph 1, letter a) and 13 of the Regulation).

As already anticipated to the data controller in the aforementioned notice of violations of the XX, based on the principle of transparency, "it should be transparent to natural persons how personal data concerning them are collected, used, consulted or otherwise processed, as well as the extent to which the personal data are or will be processed \[...\]" so that data subjects are "able to determine in advance the extent of the processing and its consequences" and are not subsequently caught "by surprise by how their personal data are used" (recital 39 and art. 5, paragraph 1, letter a) of the Regulation and Guidelines on transparency pursuant to Regulation 2016/679 adopted on 29 November 2017. Amended version adopted on 11 April 2018 by the Article 29 Working Party).

Regarding the principle of transparency, Recital 39 of the Regulation states: "It should be transparent to natural persons how personal data concerning them are collected, used, consulted or otherwise processed, as well as to what extent the personal data are or will be processed. The principle of transparency requires that information and communications relating to the processing of such personal data be easily accessible and understandable, and that clear and plain language be used. This principle concerns, in particular, the information to data subjects of the identity of the controller and the purposes of the processing, and further information to ensure fair and transparent processing, with regard to the natural persons concerned and their rights to obtain confirmation and communication of whether personal data concerning them are being processed \[...\]."

To ensure the effective application of this principle, the Regulation requires controllers to provide data subjects with a notice, using clear and plain language, prior to the start of processing, setting out all the elements referred to in Article 13 of the Regulation (in the case of data collected directly from them).

Correct implementation of the transparency principle is also essential to ensuring the lawfulness of processing, especially when based on the data subjects' consent.

Furthermore, with regard to data processing for the implementation of artificial intelligence tools, data subjects have the right to know whether the processing is being carried out during the algorithm's learning phase (testing and validation) or during the subsequent application phase. Data controllers are therefore required to prepare the information to be provided to data subjects, including the elements referred to in Articles 13 and 14 of the Regulation, in clear, concise, and comprehensible terms (Italian Data Protection Authority, "Decalogue for the creation of national health services through Artificial Intelligence systems" of 10 October 2023, web doc. 9938038).

The effective application of the transparency principle is therefore particularly important when the processing of personal data is aimed, as in this case, at training artificial intelligence tools. In this regard, the European Data Protection Board has recently observed that “Transparency about the processing of personal data includes, in particular, compliance with the information obligations as set out in Articles 12 to 14 GDPR44, which also require, in case of automated decision-making, including profiling, meaningful information about the logic involved, as well as the significance and the envisaged consequences of the processing for the data subject” and that “In some cases, it is possible to determine the purpose which will be carried out during the deployment of the AI model at an early development stage. Even where this is not the case, some context for that deployment should already be clear, and therefore, how this context informs the purpose of the development should be considered. When reviewing the purpose of the processing in a given stage of development, SAs should expect a certain degree of detail from the controller(s) and an explanation as to how these details inform the purpose of processing. known at that stage The context of deployment could also include, for example, whether a model is being developed for internal deployment, whether the controller intends to sell or distribute the model to third parties after its development, including whether the model is primarily intended to be deployed for research or commercial purposes” (Opinion 28/2024 on certain data protection aspects related to the processing of personal data in the context of AI models Adopted on 17 December 2024, point 65; see also Article 67 of Regulation (EU) 2024/1689 establishing harmonized rules on artificial intelligence).

In light of the current regulatory framework, briefly outlined above, it is believed that the Company's defense briefs do not allow the challenge of violation of the principle of transparency and the obligation to provide adequate information pursuant to Articles 5, paragraph 1, letter a), and 13 of the Regulation to be considered resolved.

Indeed, in acknowledging the statements above regarding the purpose of the processing indicated in the privacy policy, where MBS clarified that the two phases—one aimed at developing new products and the other at developing new algorithms using machine learning technologies—are part of a single analysis system, aimed at enabling the automated counting of circulating tumor cells, it is important to note that the privacy policy nevertheless states that "This Project carries out the following two main goals." It may therefore well lead data subjects to believe that the purposes of the processing are two distinct and different ones, without allowing them to understand that they are two phases of a single process. For greater clarity, the specific pathology for which the treatment is being studied should be clearly indicated. Indeed, it is reiterated that the specific purpose of the processing carried out for research purposes must also be clearly communicated to data subjects (Guidelines 5/2020 on consent pursuant to Regulation (EU) 2016/679, Version 1.1, adopted on May 4, 2020, point 155).

With regard to the data retention period, it should be noted, first of all, that this information is located in the section of the privacy notice entitled "Retention of your data and samples and additional research projects." The Garante deems this likely to lead to confusion between the indication of the data retention period necessary to achieve the purpose of the collection and the possible retention period preparatory to the implementation of further projects.

In this section, regarding the data retention period, it is stated that "The data inferred from the test will be retained for as long as needed to complete their analysis and retrospective analysis. This period of time should not exceed 25 years." In this regard, it should be noted that this period also appears to be related to the possibility of carrying out retrospective analyses, but this circumstance does not emerge among the technical-scientific reasons presented by the owner as the basis for the retention period.

In summary, the misleading description of the purpose of the data collection—which, as was clearly described in the preliminary investigation, the data controller could and should have better explained to the data subjects—and the equally misleading indication of a data retention period, which is also disproportionate to the purpose of the data collection, confirm MSB's violation of the principle of transparency and the obligation to provide adequate information on data processing pursuant to Articles 5, paragraph 1, letter a), and 13 of the Regulation.

4.4. On the principle of accountability

Following its inspection of MSB, the Italian Data Protection Authority (Official Data Protection Authority) charged the Company with violating the principle of accountability by failing to accurately define and specify the purposes of processing in the privacy notice, by accurately assessing data retention periods based on the purpose of collection, and by accurately specifying them in the privacy notice. It also failed to assess whether the data collected from the group's US subsidiary, Menarini Silicon Biosystems Inc., was anonymous.

With regard to this last aspect, MSB provided appropriate documentation to demonstrate that it had assessed the risk of re-identification of the data subjects to whom the data collected from the aforementioned US company refers. The data was used to train the CellFind tool for metastatic breast, prostate, and colorectal cancers.

Conversely, based on the investigations conducted and the documentation examined, it emerged that the data controller, despite being aware of the purpose of the personal data collection and the risks inherent in the use (even during the implementation phase) of artificial intelligence tools—to the point of properly carrying out the VIP pursuant to Article 35 of the Regulation—and always ensuring human supervision of the tool's output, nevertheless failed to implement specific responsible and necessary procedures to ensure the effective application of the data subjects' fundamental rights and freedoms.

In fact, the information on the processing of personal data does not appear to be accurate and consistent with the specific data processing performed, particularly with regard to the correct definition of the purpose of the processing, the retention periods, and the clear indication of the pathology observed.

Contrary to the Company's defense, which emphasized that "the complaints raised by the Authority concern formal issues of transparency and clarity of the information provided to data subjects rather than substantive violations of the Regulation with a direct impact on individuals," the Authority believes the aforementioned omissions are significant and serious.

The principle of accountability, the cornerstone of the revised regulatory framework for personal data protection, requires that the data controller comply with and be able to demonstrate compliance with the principles and obligations set forth in the Regulation and that it has effectively safeguarded the data subjects' right to personal data protection from the design stage (Articles 5, paragraph 2, 24, and 25, paragraph 1 of the Regulation).

The updated regulatory framework for personal data protection requires a thoughtful assessment of all choices related to the processing of personal data, logically demonstrated through specific justifications, aimed at identifying necessary and proportionate measures with respect to the concrete effectiveness of the principle protected at the time (see Provision of January 23, 2020, web doc. 9261093).

The identification of adequate and concrete measures for the application of personal data protection principles, particularly transparency, plays a crucial role in protecting the rights of data subjects in their interactions with artificial intelligence tools (considered at any stage of their lifecycle based on a whole-lifecycle approach). The opaqueness of algorithmic logic, the gap between the data subject (often vulnerable in healthcare settings) and the data controller, can be bridged primarily through the effective application of the principle of transparency. This, through adequate, accurate, clear, and intelligible information, allows data subjects to maintain control over their information and make informed choices. This also contributes to creating the climate of trust desired by the Regulation, as well as pursuing the Union's objective of establishing a European Research Area pursuant to Article 179(1) TFEU (recitals 7 and 159 of the Regulation).

Therefore, MSB's violation of the principle of accountability pursuant to Article 5(2) of the Regulation is confirmed.

5. Conclusions

In light of the above considerations, and taking into account the statements made by the data controller during the investigation—the veracity of which may be held accountable pursuant to Article 179(1) TFEU. 168 of the Code, the information provided by the data controller in the defense brief, although worthy of consideration, does not, as explained and explained above, address most of the concerns notified by the Office in the initiation of the proceeding. Furthermore, none of the cases provided for in Article 11 of the Garante Regulation No. 1/2019 apply.

For these reasons, Menarini Silicon Biosystems SpA is found to have violated Article 5, paragraph 1, letters a), e), and 2, and Article 13 of the Regulation. Violation of the aforementioned provisions also gives rise to the administrative sanction provided for in Article 83, paragraphs 4 and 5 of the Regulation, pursuant to Articles 58, paragraph 2, letter i), and 83, paragraph 3 of the Regulation.

6. Corrective Measures

Article 58, paragraph 1, letter b), provides: Article 58(2) of the Regulation provides the Garante with a series of corrective powers, both prescriptive and punitive, to be exercised in the event that unlawful processing of personal data is ascertained.

Among these powers, Article 58(2)(d) of the Regulation provides for the power to "order the controller or processor to bring the processing operations into conformity with the provisions of this Regulation, where appropriate, in a specific manner and within a specific period."

In light of the above considerations, it is deemed appropriate to order the Company, pursuant to Article 58(2)(d) of the Regulation, to disclose, within thirty (30) days of notification of this provision:

- the data retention period deemed necessary, based on specific technical and legal reasons, for the development of the CellFind tool, for the automated counting of multiple myeloma tumor cells;

- the amended text of the information notice on the processing of personal data collected for the development of the CellFind tool, required for the automated counting of multiple myeloma tumor cells;

- the measures taken or intended to be taken to ensure the widest possible dissemination of the aforementioned information notice, such as, for example, the publication on the websites of the healthcare facilities where the data was collected, the data controller, and MSB itself, or the posting of specific information panels in the relevant departments of the healthcare facilities where the data was collected.

8. Adoption of the injunction order for the application of the administrative fine and additional penalties (Articles 58, paragraph 2, letters i and 83 of the Regulation; Article 166, paragraph 7, of the Code).

Violation of Articles 5, paragraph 1, letters a), e), and 2, and Article 5, paragraph 1, letters b), c), and d), and Article 5, paragraph 1, letters c), and d), and Article 5, paragraph 2, of the Code. 13 of the Regulation committed by the Company is subject to the application of an administrative fine, pursuant to Article 83, paragraph 4, letter a) and Article 5, letters a) and b) of the Regulation.

The Guarantor, pursuant to Articles 58, paragraph 2, letter i) and 83 of the Regulation, as well as Article 166 of the Code, has the power to "impose a pecuniary administrative sanction pursuant to Article 83, in addition to the \[other\] corrective measures referred to in this paragraph, or in place of such measures, depending on the circumstances of each individual case." Within this framework, "the \[Garante\] Panel shall adopt the injunction order, by which it also orders the application of the additional administrative sanction, its publication, in full or in extract, on the Garante's website pursuant to Article 166, paragraph 7, of the Code" (Article 16, paragraph 1, of the Garante Regulation No. 1/2019).

The aforementioned pecuniary administrative sanction imposed, depending on the circumstances of each individual case, must be determined in amount taking into account the principles of effectiveness, proportionality, and dissuasiveness, indicated in Article 83, paragraph 1, of the Regulation, in light of the elements set out in Article 166, paragraph 1, of the Regulation. 83, paragraph 2 of the Regulation, it is noted, in particular, that:

- the processing carried out concerned, in particular, information suitable for determining the health status of approximately 98 patients involved in the research project aimed at developing the CellFind tool, necessary for the automated counting of multiple myeloma tumor cells, subject to preventive pseudonymization measures (Article 83, paragraph 2, letters a) and g) of the Regulation);

- with regard to the subjective element, no intentional conduct on the part of the data controller emerges, as the identified violations occurred in good faith (Article 83, paragraph 2, letter b) of the Regulation);

- the Company proved cooperative during the inspection and promptly provided the requested feedback during the investigation, declaring itself ready to initiate a review of the information (Article 83, paragraph 2, letters f) and g) of the Regulation);

- there are no previous corrective measures already adopted by the Guarantor against the Company (Article 83, paragraph 2, letter h) of the Regulation);

- the circumstances in which the aforementioned violations were detected concern technologies characterized by a highly innovative content in the fields of microelectronics, microfluidics, artificial intelligence, and bioinformatics, aimed primarily at customers operating in the research sector (Article 83, paragraph 2, letter k) of the Regulation);

- with specific reference to the principle of storage limitation, since the project is still ongoing, the company has not physically retained the personal data processed beyond the necessary period (Article 83, paragraph 2, letter k) of the Regulation).

Based on the above factors, assessed as a whole, it is deemed appropriate to set the fine provided for in Article 83, paragraph 5, of the Regulation at €21,000 (twenty-one thousand) for violations of Article 5, paragraph 1, letters a), e), and paragraph 2, and Article 13 of the Regulation as an administrative fine deemed, pursuant to Article 83, paragraphs 1 and 3, of the Regulation, to be effective, proportionate, and dissuasive.

It is also deemed appropriate to apply the additional sanction of publishing this provision on the Garante's website, as provided for in Article 166, paragraph 7 of the Code and Article 16 of the Garante's Regulation No. 1/2019, also taking into account the type of personal data subject to unlawful processing.

Finally, it is noted that the conditions set out in Article 17 of Regulation No. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Data Protection Authority, are met.

NOW CONSIDERING ALL THE ABOVE, THE DATA PROTECTION AUTHORITY

declares the processing of personal data carried out by Menarini Silicon Biosystems SpA, with registered office at Via G. Di Vittorio, 21b/3, 40013 Castel Maggiore, Bologna, VAT No. 02602741205, as unlawful for violation of Articles 5, paragraph 1, letters a), e), and 2, and Article 13 of the Regulation, as set out in the reasons given.

ORDERS

Pursuant to Articles 58, paragraph 2, letters i), and 83 of the Regulation, as well as Article 166 of the Code, the Company is ordered to pay the sum of €21,000 (twenty-one thousand) as an administrative fine for the violations indicated in this order. It is hereby stated that the offender, pursuant to Article 166, paragraph 8, of the Code, has the right to settle the dispute by paying, within 30 days, an amount equal to half of the imposed fine;

Pursuant to Articles 58, paragraph 1, letter a), of the Regulation and 157 of the Code, to notify this Authority, within thirty (30) days of notification of this order:

- the data retention period deemed necessary, based on specific technical and legal reasons, for the development of the CellFind tool, for the automated counting of multiple myeloma tumor cells;

- the amended text of the information notice on the processing of personal data collected for the development of the CellFind tool, required for the automated counting of multiple myeloma tumor cells;

- the measures taken or intended to be taken to provide the aforementioned information notice.

ORDERS

the Company:

1. to pay the sum of €21,000 (twenty-one thousand) in the event of failure to resolve the dispute pursuant to Article 166, paragraph 8, of the Code, according to the procedures indicated in the attachment, within 30 days of notification of this order, under penalty of the adoption of the consequent enforcement proceedings pursuant to Article 27 of Law No. 689/1981;

ORDERS

pursuant to Article 166, paragraph 7 of the Code, the publication of this order in full on the website of the Guarantor and believes that the conditions set forth in Article 166, paragraph 7, of the Code are met. 17 of Regulation No. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.

Pursuant to Article 78 of the Regulation, Articles 152 of the Code, and Article 10 of Legislative Decree No. 150/2011, an appeal against this provision may be lodged before the ordinary judicial authority, under penalty of inadmissibility, within thirty days of the date of notification of the provision itself, or within sixty days if the appellant resides abroad.

Catanzaro, May 21, 2025

THE PRESIDENT
Stanzione

THE REPORTER
Cerrina Feroni

THE ACTING SECRETARY GENERAL
Filippi
