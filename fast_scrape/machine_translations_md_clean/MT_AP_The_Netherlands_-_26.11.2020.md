# AP (The Netherlands) - 26.11.2020

## Case Information

**Authority:** AP (The Netherlands)

**Jurisdiction:** Netherlands

**Relevant Law:** Article 32(1) GDPR

**Type:** Investigation

**Outcome:** Violation Found

**Decided:** 26.11.2020

**Published:** 11.02.2021

**Fine:** 440000 EUR

**Parties:** OLVG hospital

**National Case Number/Name:** Ziekenhuis OLVG

**European Case Law Identifier:** n/a

**Appeal:** Not appealed

**Original Language(s):** Dutch

**Original Source:** Autoriteit Persoonsgegevens (in NL)

**Initial Contributor:** n/a

The Dutch DPA fined a hospital € 440,000 for violating Article 32(1) of the GDPR by failing to comply with the requirement of two-factor authentication and regular review of access log files.

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

The AP received two data breach notifications from the OLVG Foundation about access by employees and work students to electronic patient records. In response to these data breach notifications, the AP initiated an investigation into OLVG's compliance with Article 32(1) of the GDPR by inspecting, among other things, authentication, and verification of the logging procedures.

The AP announced the investigation in a letter dated 17 April 2019, and asked questions to OLVG. These questions were answered by a letter dated 3 May 2019. On 22 May 2019, five inspectors from the AP conducted an on-site investigation at one of the locations of OLVG. During this investigation, the inspectors checked different components of the hospital’s information system. Oral statements were also taken from members of the Executive Board and various employees of OLVG. The AP sent the report of findings to OLVG on 10 February 2020. On February 17, 2020, the AP sent OLVG a letter to announce the intention to enforce. OLVG provided its views on this intention in writing on 27 March 2020 and orally on 25 June 2020.

Since 19 October 2015, OLVG has been using a new information system to store which electronic patient records. OLVG provided medical care to approximately 500,000 patients in 2018 alone, which leads the AP to conclude that the hospital processes personal data, including special category (health) data under GDPR, on large scale.

The AP found two potential issues.

1\. Two-factor authentication.

The AP found that employee authentication was done in two ways, depending on whether access is requested from inside or outside the OLVG network. When logging in from within the OLVG network, the employees must use their usernames and passwords to access their virtual workstations (VDI); a second factor like a staff pass or a token are not required in this case. A single sign-on functionality is also used, allowing the employee who is already logged in to the VDI immediate access to the hospital information system with the electronic patient records.

When logging into the VDI from a computer outside the OLVG network, employees must use a username and password in combination with a changing token which they received by SMS or via an application. OLVG linked a token reader to each computer on 9 March 2020, changing this method of authentication. This means that before they can access to the computer, employees must hold their employee card in front of this reader and enter a password.

OLVG has also indicated in its Information Security and Privacy Policy that that policy is based on: 1) the Dutch standard for information security in healthcare: NEN 7510, NEN 7512 and NEN 7513, and 2) the current laws and regulations, including the GDPR. OLVG has thus also committed to complying with the NEN security standards, which dictate that the identity of users must be established by means of two-factor authentication.

Given the sensitive nature of the data, the large scale of the processing by OLVG and the risks to data subjects, the AP has concluded that OLVG should have implemented two-factor authentication when accessing personal data in electronic patient records. However, this was not done when these records were from inside of the hospital’s network.

2\. Access logs review.

The AP found that during the period from 1 January 2018 to 17 April 2019, OLVG conducted two sample checks of “Break the Glass” behaviour across larger groups of employees and eight incidental checks of the logging of health records. Further, the AP found that OLVG did not conduct systematic checks of anomalies in the access logs to all electronic health records during the period from 1 January 2018 to 22 May 2019, nor did it allow for systematic or automated alerts when certain logging limits were exceeded.

### Dispute

1\. OLVG is of the opinion that the AP incorrectly concludes that OLVG has not applied two-factor authentication. According to Standard 9.4.1 of NEN 7510-2 (2017), health information systems that process personal health information should establish the identity of users and this should be done by means of authentication involving at least two factors. According to OLVG, its computers are in rooms to which can only be accessed with a personal employee pass. The pass only allows an employee access to the rooms she or he is authorized to enter. According to OLVG, there is no fundamental difference here between access limited to the person holding a pass in front of a reader which is built into the computer. The AP does not agree with OLVG. For adequate security of personal data in electronic patient records, it is necessary that OLVG's information system is accessible only with two-factor authentication. If access to the room is controlled by the authentication via a personal pass but the computer itself is not protected by two-factor authentication, then there is a greater chance that employees who are authorized to access the room (such as cleaners) could gain access to the patient records. In addition, certain areas of the hospital are not completely locked down. Which means there is a significant difference between this and limiting access to the person holding a card in front of the computer. Finally, the AP emphasizes that standard 9.4.1 of NEN 7510-2 (2017) contains the term 'health information systems'. Which means that the information systems themselves must be secured by two-factor authentication. In view of the above, the AP considers that OLVG has violated Article 32(1), of the GDPR at least until 22 May 2019, as OLVG's hospital information system has not complied with the requirement of two-factor authentication. OLVG has since ended this violation by quipping each computer with an employee card reader.

2\. OLVG argued that the AP has imposed fine contrary to the nemo tenetur principle as set out in Article 48(1) of the European Charter and Article 6(1) of the European Convention on Human Rights (ECHR), since the investigation was based on data breach notifications which OLVG was obliged to make under the threat of a penalty. Referring to various court decisions, OLVG argues that will-dependent information may not be used for an administrative punishment by means of issuing a fine. In the letter dated 17 April 2019, the AP further requested information pursuant to Sections 5:16 and 5:17 of the General Administrative Law Act (Awb). In this letter, the AP did not point out that OLVG was not obliged to provide information if by doing so it would provide evidence of a violation of the GDPR. This means that also all the information obtained by the AP because of its request for information, was obtained under coercion as referred to in Article 6(1) ECHR and Article 48(1) of the Charter. OLVG concludes that in view of the foregoing, the wilful information obtained under coercion from OLVG cannot be used for the imposition of an administrative fine. AP disagrees. The two reported data breaches only prompted the AP to launch an investigation into OLVG's compliance with Article 32 of the GDPR. While the two data breach reports are included in the case file with the documents relating to the case, they do constitute evidence of the violation of Article 32 of the GDPR found by the AP. Exclusion of those data breach notifications as evidence is therefore out of the question. In addition, the AP considers the data breach notification to be will-independent information. In view of article 33(5) of the GDPR, OLVG is required to document all personal data breaches, together with the facts about those breaches, their consequences and the measures taken to mitigate risks, so it had this information at its disposal. Secondly, the AP does not agree with OLVG that the AP, with its information request of 17 April 2019, forced OLVG to provide information to the AP and, consequently, that this information should not be used to impose an administrative fine. Information in question was not formally requested with reference to the duty to cooperate. The fact that the letter in question referred to Article 58(1)(a) of the GDPR and Article 5:16 in conjunction with Article 5:17 of the Awb does not make this any different. These references were included in the letter for OLVG's information only to make it clear that the AP may request OLVG to provide this information and on what basis they may do so. In the opinion of the AP there is therefore no question of providing information under duress. The AP did not use the will-independent material to impose the administrative fine. The AP concludes that the imposition of a fine for the conduct observed is not in violation of the nemo tenetur principle as laid down in Article 48(1) of the European Charter and Article 6(1) of the ECHR.

3\. OLVG argues that the imposing of a fine for the behaviour identified by the AP, at least those related to authentication, violates the rights of defence as set forth in Article 48(2) of the European Charter and Article 6(2) ECHR, as the identified behaviour fall outside the scope of the purpose of investigation previously formulated by the AP. According to OLVG, the AP does not conclude in the investigation report that OLVG has not taken appropriate technical and organizational measures to ensure that personal data in the electronic patient record are not accessed by unauthorized employees. Instead the AP notes that OLVG does not comply with the requirement of at least two-factor authentication pursuant to article 32(1) of the GDPR. The AP disagrees. The conclusion of the AP that OLVG does not comply with article 32(1) of the GDPR by not meeting the requirement for two-factor authentication is directly related to the purpose of the investigation and falls within the scope of the purpose of the investigation. The AP explicitly mentioned that the investigation would focus on the access security (authentication and authorization), logging, checking the logging and awareness of employees. The fact that two-factor authentication cannot guarantee that unauthorized access to patient records by employees will no longer occur, does not change the fact that it is still a measure that contributes significantly to preventing unauthorized access as required under Article 32 of the GDPR. In this context, the AP emphasizes that the application of two-factor authentication and logging control are not isolated measures, but they must be considered in conjunction with all other appropriate measures. It is the combination of these measures that enables OLVG to manage the protection of personal data as well as possible and to prevent breaches as much as possible. The application of two-factor authentication does not therefore relieve OLVG of the obligation to promote the awareness of employees about data protection.

4\. OLVG points out that AP is not allowed to set further binding rules to interpret Article 32 of the GDPR, like AP did when they applied the NEN security standards. These standards cannot constitute a basis for the interpretation of article 32 of the GDPR since they are not referred to by the GDPR and were created without being related to or based on the GDPR. The AP disagrees with this argument. NEN standards are generally accepted security standards of information security in healthcare. The AP considers the requirement for two-factor authentication contained in these standards and the obligation to regularly assess the log files to be a concrete interpretation of what can be considered appropriate by Article 32 of the GDPR. Moreover, OLVG itself indicated in its Information Security & Privacy Policy that that policy was based on the Dutch standard for information security in healthcare, namely: NEN 7510, NEN 7512 and NEN 7513 and the current laws and regulations, including the GDPR. In its Epic logging policy, OLVG indicates that this document must lead to compliance with NEN 7513 and applicable laws and regulations. In short, the AP concludes that OLVG also believes that these NEN standards provide interpretation of the correct degree of information security and has therefore committed itself to comply with the NEN standards.

5\. The AP's investigation report refers to Article 3(2) of the Decree on Electronic Data Processing by Healthcare Providers (Begz). This article states that a healthcare provider must, in accordance with the provisions of NEN7510 and NEN7512, ensure a safe and careful use of the healthcare information system and a safe and careful use of the electronic exchange system to which it is connected. OLVG states that the AP can only impose a fine or issue a penalty to enforce the obligations imposed by the GDPR and not for a violation of the Begz. The AP does not follow OLVG's view in this regard either. The AP imposed an administrative fine for the violation of Article 32(1) of the GDPR, more specifically with respect to authentication and a regular checks of the log files. Incidentally, the Begz does apply to the OLVG and it obliges OLVG to apply the NEN 7510 and NEN 7512 standards.

### Holding

The AP has concluded that OLVG has not applied an appropriate level of security for the processing of personal data in its hospital information system. The AP has determined that until at least 22 May 2019, OLVG has been processing sensitive personal data of hundreds of thousands of patients without adequate security. The AP considers the fact that the violation continued in a structural manner for a longer period, partly under the Personal Data Protection Act, which already required an adequate security level, to be serious. In view of the nature, seriousness, scope and duration of the infringement, the AP increased the basic amount of the fine by €80,000 to €390,000 under the 2019 Fine Policy.

OLVG is expected, partly in view of the sensitive nature and large scale of the processing, to ascertain the standards applicable to it and to act according to those standards. In addition, OLVG has indicated in its own Information Security & Privacy Policy that the policy is based on the Dutch standard for information security in healthcare, namely: NEN 7510, NEN 7512 and NEN 7513 and the current laws and regulations, including the GDPR. Which means that OLVG has committed itself to complying with those norms. OLVG also stipulated in its logging policy that it will take a representative sample every four weeks to analyse the log data. OLVG therefore also fails to comply with its own existing policy rules, which is considered by the AP to be extremely negligent. Given the negligent nature of the breach, the AP increases the base amount of the fine under Article 7(b) of the 2019 Fine Policy by €50,000 to €440,000.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Dutch original. Please refer to the Dutch original for more details.

```
Subject

Decision to impose an administrative fine

Dear Mr Van den Bosch

The Dutch Personal Data Authority (AP) has decided to impose an administrative fine of €440,000 on the OLVG Foundation (OLVG) because OLVG failed to comply with the requirement for two-factor authentication and the regular review of log files. In doing so, OLVG failed to take adequate measures as referred to in Article 32, first paragraph, of the General Data Protection Regulation (AVG).

The decision is explained in more detail below. Chapter 1 contains an introduction and Chapter 2 describes the legal framework. In chapter 3, the AP assesses the processing responsibility and the breach. Chapter 4 details the (level of the) administrative fine and Chapter 5 contains the operative part and the legal remedies clause.

1. Introduction

1.1 Legal entities involved and reason for investigation

OLVG is a foundation with its registered office at Oosterpark 9, in Amsterdam. OLVG is registered in the trade register of the Chamber of Commerce under number 41199082. OLVG is a top clinical teaching hospital in Amsterdam with two main locations in Amsterdam East and West. OLVG provides medical care to approximately 500,000 patients annually. In 2018, OLVG had 5890 salaried employees, of which 4274 were in patient-related positions.1

The AP received two data breach notifications from the OLVG Foundation regarding access by employees and work students to electronic patient records. In response to these data breach notifications, the AP initiated an ex officio investigation into OLVG's compliance with Article 32(1) of the AVG by examining, among other things, security aspects such as authentication and the monitoring of logging.

1.2 Course of the process

By letter of 17 April 2019, the AP announced the investigation and asked questions of OLVG. These questions were answered by OLVG by letter of 3 May 2019.

On 22 May 2019, five supervisors from the AP conducted an on-site investigation at OLVG, location Oost, at Oosterpark 9 in Amsterdam. During this investigation, the hospital information system was demonstrated and viewed at various times and parts. Oral statements were also taken from members of the Executive Board and from various employees of OLVG.

The AP sent the report of findings to OLVG on 10 February 2020. By letter of 17 February 2020 the AP sent OLVG an intention to enforce the law. On 27 March 2020 and on 25 June 2020 the AP gave OLVG the opportunity to express its views on this intention and the underlying report orally.

2. Legal Framework

2.1 Scope of the AVG

Pursuant to Article 2, paragraph 1, of the AVG, this Regulation applies to the processing of personal data wholly or partly by automatic means, and to the processing of personal data which form part of a filing system or are intended to form part of a filing system.

Pursuant to Article 3, paragraph 1, of the AVG, this Regulation applies to the processing of personal data in connection with the activities of an establishment of a controller or a processor in the Union, regardless of whether the processing takes place in the Union or not.

Pursuant to Article 4 of the AVG, for the purposes of this Regulation the following definitions shall apply:

(1) "Personal data" means any information relating to an identified or identifiable natural person ("data subject"); \[...\].

Processing" means any operation or set of operations which is performed upon personal data or sets of personal data, whether or not by automatic means; \[...\].

7. "Controller" means a \[...\] legal person who, alone or jointly with others, determines the purposes and means of the processing of personal data; \[...\].

15. "Health data" means personal data relating to the physical or mental health of a natural person, including data relating to health services provided that give information on their state of health.

2.2 Security obligation

Pursuant to Article 32(1) of the AVG, the controller must implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, having regard to the state of the art, the cost of implementation, the nature, scope, context and purposes of the processing, and the risks to the rights and freedoms of individuals, which vary in terms of probability and severity \[...\].

Pursuant to paragraph 2, the assessment of the appropriate level of security shall take account in particular of the processing risks resulting in particular from the destruction, loss, alteration, unauthorised disclosure of or access to data transmitted, stored or otherwise processed, whether accidental or unlawful.

2.3 Administrative fine

Pursuant to Section 58(2)(i) in conjunction with Section 83(4)(a) of the AVG and Section 14(3) of the Dutch General Data Protection Implementation Act (UAVG), the AP is authorised to impose an administrative penalty in respect of violations of the AVG.

2.3.1 AVG

Pursuant to Article 83(1) of the AVG, each supervisory authority shall ensure that the administrative fines imposed under this Article for the breaches of this Regulation referred to in paragraphs 4, 5 and 6 are in each case effective, proportionate and dissuasive. Pursuant to paragraph 2, administrative pecuniary sanctions shall be imposed, depending on the circumstances of the specific case, in addition to or instead of the measures referred to in Article 58(2)(a) to (h) and (j).

It follows from the fourth paragraph, opening words and under (a), that a breach of the obligation of the controller under Article 32 of the AVG in accordance with paragraph 2 is subject to an administrative fine of up to € 10,000,000 or, in the case of an enterprise, up to 2% of the total worldwide annual turnover in the preceding financial year, whichever is higher.

2.3.2 UAVG

Pursuant to Article 14, third paragraph, of the UAVG, the AP may impose an administrative fine of up to the amounts specified in these paragraphs in the event of a violation of the provisions of Article 83, fourth, fifth or sixth paragraph of the Regulation.

3. Assessment

3.1 Processing of personal data

Since 19 October 2015, OLVG has been using a new and integrated hospital information system in which electronic patient records are stored.2 The patient data that OLVG processes in the hospital information system is information by which OLVG can identify natural persons. These patient data are therefore personal data within the meaning of article 4, section 1, of the AVG. Some of these data are health data and therefore also qualify as a special category of personal data within the meaning of Article 9 of the AVG.

Furthermore, this is a case of processing personal data within the meaning of Article 4, section 2, of the AVG. Because of its scope, the concept of 'processing' encompasses every possible operation or set of operations involving personal data. The recording and consulting of patient data in the hospital information system is also included. It involves extensive processing in which many people are involved. In 2018 alone, OLVG provided medical care to approximately 500,000 patients.3

3.2 Party responsible for processing

In the context of the question of whether OLVG is acting in violation of Section 32(1) of the AVG, it is also important to determine who is to be regarded as the data controller in the sense of Section 4(7) of the AVG. The determining factor here is who determines the purposes and means of the processing of personal data - in this case the processing of patient data in the hospital information system of the OLVG. To answer this question, the AP in this case attaches value to the statements of the OLVG Board of Directors during the on-site investigation, the registration in the trade register of the Chamber of Commerce, policy documents and the OLVG annual statements of 2015 and 2018.

The Chairman of the Executive Board of OLVG stated that in 2013 an administrative merger took place between Stichting Sint Lucas Andreas Ziekenhuis and Stichting Onze Lieve Vrouwen Gasthuis and that since then there has been one joint board.4 Subsequently, in June 2015, these two hospitals were legally merged into one hospital, named: Stichting OLVG.5 Furthermore, during the merger in 2015, the current hospital information system was introduced uniformly within OLVG.6 As mentioned above, this system was finally put into use by OLVG on 19 October 2015.7

According to the registration in the Chamber of Commerce, the activities of OLVG are 'general hospitals, practices of medical specialists and medical day treatment centres, health centres and ambulatory youth care.'8 OLVG further mentions in its information security & privacy policy that the system of security and privacy measures focuses, among other things, on securing all information and information systems, preventing information security incidents and taking precautionary measures. The information security and privacy policy is applicable to all OLVG business units and to the exchange of data with other organisations.9 The 'patient data and the use of means of communication' scheme also shows that OLVG has determined how its employees should deal with electronic patient files.10

Based on the above-mentioned documents and statements from the OLVG management, the AP observes that OLVG determines the purpose and means of the processing of personal data for the purpose of OLVG's electronic patient records. This means that OLVG is the data controller in the sense of article 4, section 7 of the AVG for the processing of patient data in the hospital information system of OLVG.

3.3 Violation of data security

3.3.1 Introduction

To ensure security and to prevent the processing of personal data from being in breach of the AVG, the controller is required, pursuant to Article 32 of the AVG, to assess the risks inherent in the processing and to take measures to mitigate those risks. These measures should ensure an appropriate level of security, taking into account the state of the art and the implementation costs in relation to the risks and the nature of the personal data to be protected.11 In the following, the AP will assess whether OLVG has implemented an appropriate security level for the processing of personal data in its hospital information system.

3.3.2 Two-factor authentication

3.3.2.1 Facts

The current hospital information system was taken into use by OLVG on 19 October 2015. During the on-site investigation on 22 May 2019 at OLVG, supervisors of the AP investigated the manner in which employees of OLVG obtain access to the electronic patient records (login) within the hospital information system. The AP found that the authentication of the employee's identity for the use of the hospital information system of OLVG is possible in two ways, depending on whether access is requested from inside or outside the OLVG network.

The supervisors of the AP determined during the on-site investigation12 that OLVG employees are able to log in to the virtual workplace (VDI) on a computer (terminal) within the OLVG network.13 Logging in takes place by entering a user name and password and no use is made of a staff pass or token as part of the log-in process to gain access to the hospital information system. This manner of logging in was observed at various times during the on-site investigation. The supervisors of the AP first observed this during the demonstration of the hospital information system.14 This observation was also confirmed by the oral statements of \[CONFIDENTIAL\].15

Furthermore, the supervisors of the AP observed, during inspections of the workplace of three different employees16 of OLVG, that if the employee fills in his/her user name and password correctly, he/she will have access to the VDI environment and to the electronic patient files. It appeared that this involved a 'single sign on' functionality17 , which means that the employee who is logged on to the VDI also has immediate access to the hospital information system with the electronic patient files.

Furthermore, article 2.1. of the 'Regulation on patient data and the use of means of communication' states that "employees of OLVG, (...) in so far as this is necessary for the function they perform within OLVG, will be granted access to the electronic patient file in Epic and comparable patient information systems within OLVG (hereinafter jointly referred to as "EPD") by means of a log-in code and password.

The second way to access the hospital information system is via a computer outside the OLVG network. During the demonstration during the on-site investigation, the AP observed that it is also possible to log in to the VDI via a computer outside the OLVG network, for example, when employees work from home.19 In this case, logging in to the VDI environment and the hospital information system is required with a user name and password20 in combination with a changing token that is received or created by SMS or application.21

On 9 March 2020, OLVG linked a reader to each computer (terminal) and thus changed the above working method. As a result, an employee must hold his/her personnel card in front of this reader and then enter a password before being able to access the computer.22

3.3.2.2 Assessment

Pursuant to Article 32, paragraph 1, of the AVG, the controller must take appropriate technical and organisational measures to ensure a level of security appropriate to the risk. According to Article 32(2) of the AVG, when assessing the risks, attention must be paid to risks that occur when personal data are processed. The more sensitive the data, or the greater the threat to the privacy of those involved, the greater the requirements for data security.

OLVG processes personal data of approximately 500,000 patients on a large scale in its hospital system. This (mostly) concerns extremely sensitive health data. Data concerning health is designated as a special category of personal data on the basis of article 9, paragraph 1 of the AVG. These personal data, which by their nature are particularly sensitive in relation to fundamental rights and freedoms, deserve specific protection as the context of their processing may entail significant risks to fundamental rights and freedoms. OLVG should therefore take appropriate measures to protect personal data to the greatest extent possible and to prevent any breaches as far as possible.

In view of the sensitive nature of the data, the large scale of the processing by OLVG and the risks to the privacy of those concerned, OLVG should have implemented two-factor authentication for access to personal data in electronic patient files. However, the AP established in the foregoing that employees on a computer within the OLVG network could gain access to the data in the electronic patient files with only something known to an employee (namely a user name and password). This means that only one factor was used in that case. The investigation showed that OLVG did not make use of a pass, token or any other second factor. OLVG therefore did not comply with the requirement for at least two-factor authentication, which is required in the context of this processing under Article 32 of the AVG. The AP considers such a security measure appropriate, also given the current state of the art and the implementation costs. The AP also takes into account that generally accepted security standards, such as the Dutch standard for information security in healthcare, prescribe two-factor authentication.

OLVG has further indicated in its Information Security & Privacy Policy that the aforementioned policy is based on: 1) the Dutch norm for information security in healthcare, namely: NEN 7510, NEN 7512 and NEN 7513 and 2) current laws and regulations, including the AVG. OLVG strives to demonstrably comply with these standards.23 OLVG has thus also independently committed itself to comply with the above-mentioned NEN standards, which state that the identity of users must be established by means of two-factor authentication.24

Finally, and superfluously, the AP notes that the words 'appropriate technical and organisational measures' in Article 32 AVG are a continuation of what already applied under Directive 95/46/EC and the Personal Data Protection Act (Wbp).25 There is no material change. Under these circumstances, the obvious course of action - also with a view to legal certainty - is to continue the interpretation followed in the past when interpreting Article 32(1) of the AVG. This means that the interpretation already used in the past via the requirements of two-factor authentication and the regular assessment of log files contained in the NEN standards will be maintained.26 The AP has also always made it clear that NEN 7510, as a generally accepted security standard within the practice of information security in the healthcare sector, will remain an important standard for information security in the healthcare sector under the AVG regime and that these guidelines must be followed.27

OLVG view and AP response

OLVG states in its view that the AP incorrectly judges that OLVG has not applied two-factor authentication. According to Standard 9.4.1 of NEN 7510-2 (2017), health information systems that process personal health information should establish the identity of users and this should be done by means of authentication involving at least two factors. According to OLVG, access to PCs has been restricted for years by access to the physical space where the PC is located. PCs are located in rooms that can only be accessed with a personal staff pass. The pass is configured in such a way that an employee only has access to rooms and functions for which the employee is authorised. According to OLVG, there is no difference in principle between access restricted to the person holding a pass in front of a reader located at the PC.

The AP does not follow OLVG's view. Adequate security of the personal data in electronic patient records requires that the OLVG information system be accessible only with two-factor authentication. If access to the room is charged with authentication via a personal pass but the computer itself does not have two-factor authentication, there is a greater chance that employees who are authorised to access the room (such as cleaners) but not the electronic patient files, can gain access to those files. In addition, certain areas of the hospital, such as outpatient clinics, are not completely locked. There is therefore a significant difference from access being limited to the person holding a card in front of a reader located near the computer. Finally, the AP emphasises that standard 9.4.1 of NEN 7510-2 (2017) contains the term 'health information systems'. In other words, the information systems themselves must be secured by two-factor authentication.

In view of the above, the AP considers that OLVG has violated Article 32, paragraph 1, of the AVG at least until 22 May 2019, as OLVG's hospital information system did not meet the requirement of two-factor authentication. OLVG has since ended this breach by attaching a reader to each computer (terminal). As a result, an employee must hold his/her employee card in front of this reader and then enter a password before gaining access to the computer.

3.3.3 Control of logging

3.3.3.1 Facts

The OLVG information security & privacy policy states that OLVG strives to comply demonstrably with the NEN 7510 standards (information security in the care sector), NEN 7512 (basis of trust for data exchange), NEN 7513 (logging actions on electronic patient files) and the AVG.28 OLVG also states in the Epic logging policy that this document must lead to compliance with the NEN 7513 standard and applicable legislation and regulations.29 The Epic logging policy states as a basic principle that the log files are checked periodically for indications of irregularities or errors so that, where necessary, these can be dealt with preferably at an early stage.30 To this end, all activities of users, systems and information security events are recorded in log files.31 A report is made of abnormal events recorded in the log data and, if necessary, further investigation is carried out.32 The Epic logging policy distinguishes between the way in which the log data is checked, namely on a random basis and on an incident basis.33

Pursuant to the Epic Logging policy, a representative sample must be taken every four weeks for the random checks to be analysed.34 The Epic Logging procedure shows that a report is obtained monthly from the data warehouse on the number of break-the-glass events. 35 There will always be an average number of events.36 The EHR Service randomly checks the break-the-glass events and is free to determine what constitutes a representative sample.37 If there are major deviations for one or more users, these deviations must be further investigated.38 The incidental check takes place when topicality (from an incident or a request from a patient) gives cause to do so.39 The necessary analyses will then be performed. In this respect, if there is a request from a patient, the request for investigation must come from Legal Affairs.40 Reports are drawn up of deviating events.41 The report indicates what the striking events are and in what way or why these events are striking, and how they conflict with the policy and/or the lawful access to a file.42

During the on-site investigation, \[VERTROUWELIJK\] of OLVG stated that every action is logged.43 \[VERTROUWELIJK\] of OLVG stated that with regard to the control of logging, a number of spot checks and occasional checks were made.44 For example, on 26 March 2018, a spot check was made on the break-the-glass behaviour of certain function groups.45 This looked at the function groups nurses and doctors in training and covered a period of three months.46 The report drawn up as a result of this random check consisted of one page of figures and a graph of the total number of break-the-glasses per month, without any analysis of the aforementioned figures.47

On 13 March 2019, a report was also drawn up containing the analysis of the sample into break-the-glass use by working students.48 The report of the analysis consists of eight pages with a numerical overview and analysis on deviant break-the-glass use in the period from 1 January 2018 to 7 February 2019 of all 181 working students who were still employed at OLVG on 6 February 2019.49 

\[VERTROUWELIJK\] of OLVG stated that these two samples were the only two samples that OLVG performed in the period from 1 January 2018 to 22 May 2019.50 Moreover, \[VERTROUWELIJK\] of OLVG stated that OLVG believes that a collection of incidental checks also constitutes another sample, as it looks at the aggregate frequency of unlawful access and the incidents involved.51 According to \[CONFIDENTIAL\] of OLVG, very few irregularities were found in this and it did not constitute a specific reason to schedule another random check.52 \[CONFIDENTIAL\] stated that, as described in the logging policy, random checks are not performed every four weeks but that, in practice, what gives cause to do a random check is looked at.53 The above mentioned random checks are the only two random checks that were performed.54 At the time of the on-site investigation, an alarm for certain limit values was still under development.55

In addition to these two random samples, OLVG also performed incidental checks. OLVG performed eight incidental checks in the period from January 2018 to April 2019.56 This concerns the retrieval of one electronic patient record at a time in response to a patient request.57 In response to the view session of 25 June 2020, OLVG provided additional written documents on 13 July 2020, including a data query on all logging data, reports of samples from different perspectives, and reports resulting from the newly used selection method.

3.3.3.2 Assessment

Section 3.3.2.2 has already set out that, pursuant to Article 32(1) of the AVG, the data controller must take appropriate technical and organisational measures to ensure a level of security appropriate to the risk.

The AP has established that in the period from 1 January 2018 to 17 April 2019, OLVG conducted two broader (sample) checks of break-the-glass behaviour across larger groups of employees and eight incidental checks of the logging of one electronic patient record. Furthermore, the AP found that in the period from 1 January 2018 to 22 May 2019, OLVG did not carry out systematic checks of notable deviations of all logging of all electronic patient records, nor did it apply systematic or automatic alerts when certain limits in the logging were exceeded involving all logging of all electronic patient records.

In its view, OLVG states that the protocol "procedure for checking the legitimacy of file inspection" has been updated and re-adopted on 17 March 2020. The monitoring of logging has been further tightened since the on-site investigation by the AP in May 2019. As of 1 July 2019, OLVG has already increased the frequency of logging checks to once every fortnight (at least two or more reports per month). This check involves a (fortnightly) data query on all logging data. In the period from July 2019 to November 2019, reports based on logging data were made from different perspectives. From these different perspectives, logging behaviour has been reported several times in this period. The different perspectives have also been used to be able to determine where the risk of unlawful access is greatest. From May 2020, a new selection method was started. A score is assigned to all contacts; a higher score means a greater chance of unlawful access. From June 2020 onwards, at least every fortnight on a random day, a printout is made of 50 accesses with the highest score, which are assessed and then further investigated on suspicion of unlawfulness. In addition to random checks, ad hoc logging checks take place if current events (to resolve incidents or at the request of a patient) give cause to do so. OLVG is of the opinion that this complies with standard 12.4.1 of NEN 7510-2 (2017).

As stated above, the AP has determined that in the period from 1 January 2018 to 17 April 2019, OLVG performed two spot checks and eight incidental checks of the logging of one electronic patient record. OLVG thus failed to act in accordance with its own policy (including the Information Security & Privacy Policy and Epic Logging Policy) at least during the aforementioned period. Apart from that, carrying out only eight incidental checks and two proactive random samples in a period of 15.5 months is amply and evidently insufficient to be able to speak of an appropriate security level for identifying unauthorised access to patient data and taking measures in response to unauthorised access. In this respect the AP considers important the scale of the processing of health data by the hospital, the sensitive nature of the data and the risks to the privacy of those involved.

OLVG processes (special categories of) personal data on a large scale and (often) this involves extremely sensitive health data. This places higher demands on the security of this data. In view of the sensitive nature of the data, the large scale of the processing and the risks to the privacy of the data subjects, OLVG should therefore have regularly checked the log data. In this way, unauthorised access could have been identified and measures taken. The starting point of the AP is that checking of the logging must take place systematically and consistently, whereby random checking and/or checking on the basis of complaints is not sufficient. 58 The fineness of the authorisation model used and the verification of the correctness of the authorisations partly determine the intensity of the verification of the logging. Random checking does not constitute a system focused on unlawful use and risks. Consequently, OLVG has not complied with the requirement to regularly assess log files, which is required in the context of this processing under Article 32 of the AVG. The AP considers such a monitoring measure appropriate, also given the current state of the art and the implementation costs. The AP also takes into account that generally accepted security standards, such as the Dutch standard for information security in healthcare, prescribe regular logging.

Finally, as already mentioned in section 3.3.2.2, OLVG has also independently committed itself to comply with NEN standards. Section 12.4.1 of NEN 7510-2 states that log files of events that register user activities, exceptions and information security events should be created, kept and regularly reviewed.

In view of the above, the AP considers that, at least until 22 May 2019, OLVG violated Article 32(1) of the AVG by not regularly reviewing log files. OLVG has since ended this violation by tightening the procedure with respect to logging review and increasing the frequency of logging review.

3.4 OLVG's other views and the AP's response

3.4.1 Rights of the defence

OLVG argued that the imposition of a fine for the acts observed by the AP is contrary to the nemo tenetur principle59 as set out in Article 48(1) of the European Charter and Article 6(1) of the European Convention on Human Rights (ECHR), since the observations are based on data leaks that OLVG was obliged to make under the threat of a penalty. Referring to various case law, OLVG stated that if during a procedure there is (the reasonable expectation) of a criminal charge, or at least if it cannot be excluded that the material will also be used in connection with a criminal charge against the provider, the nemo tenetur principle precludes the use of the will-dependent material obtained in the procedure for administrative punishment by means of a fine.60

According to OLVG, the fact that, on the basis of the Decree on Electronic Data Processing by Healthcare Providers and the NEN standards contained therein, OLVG is obliged to keep certain log files which make it possible to monitor compliance with the AVG, does not mean that there is no willful evidence. Pursuant to Section 33(1) of the AVG, OLVG submitted a data breach notification to the AP on 13 September 2018 and 15 February 2019. According to OLVG, these data breach notifications concern information that does not exist independently of OLVG's will: OLVG compiled the information in order to comply with the obligation of Article 33(1) of the AVG. Referring again to various court decisions, OLVG argued that will-dependent information may not be used for an administrative punishment by means of fines.61 The AP initiated an investigation as a result of the two data leaks, in the context of which the on-site investigation took place on 22 May 2019. According to OLVG, it is therefore clear that the entire investigation by the AP is based on the notifications made by OLVG under the AVG.

By letter dated 17 April 2019, the AP further requested information pursuant to Articles 5:16 and 5:17 of the General Administrative Law Act (Awb). In this letter, the AP did not point out that OLVG is not obliged to provide information if by doing so it would provide evidence of a breach of the AVG. According to the OLVG, this means that all the information which the AP obtained in its request for information was also obtained under duress within the meaning of Article 6(1) of the ECHR and Article 48(1) of the Charter. OLVG concludes that, in view of the above, the voluntarily obtained information from OLVG under coercion cannot be used for the imposition of an administrative fine.

AP response

The AP does not share the OLVG's view. The AP takes the view that the evidence it obtained was not obtained in violation of Article 48(1) of the European Charter and Article 6(1) of the ECHR and the nemo tenetur principle enshrined therein. Nor should evidence be excluded. The AP gives the following reasons for this.

First of all, the AP will deal with the two data breach notifications. As OLVG itself indicates, the two data leaks reported were only a reason for the AP to initiate an ex officio investigation into OLVG's compliance with Article 32 of the AVG. Although the two data leak reports are included in the file with the documents relating to the case, they do not constitute in any way evidence of the breach of Article 32 of the AVG identified by the AP. Exclusion of these data breach notifications as evidence is therefore out of the question. Apart from this, the AP considers the data breach notification to be information that is independent of the will. In view of Article 33 (5) of the AVG, OLVG is obliged to document all data breaches, including the facts about the data breach, its consequences and the corrective measures taken, so that it is considered to have this information at its disposal.62

Secondly, the AP does not follow OLVG in its contention that, with its information request of 17 April 2019, the AP forced OLVG to provide information to the AP and, consequently, that such information may not be used to impose an administrative fine. To this end, it is first of all relevant to establish that the AP requested information in that letter. Information was not formally 'demanded' with reference to the duty to cooperate, as follows from, for example, Article 5:20 of the General Administrative Law Act and/or Article 31 of the AVG. The fact that the letter in question referred to Article 58(1)(a) of the AVG and Article 5:16 in conjunction with Article 5:17 of the Awb does not alter this. These references were included in the letter for OLVG's information only, in order to make clear that the AP (and its employees) may request OLVG to provide this information and on what basis they may do so. In the AP's view, therefore, there is no question of information being provided under duress.

Moreover, if and to the extent that exclusion of evidence would (nevertheless) be at issue, according to established case law such exclusion only applies to evidence whose existence depends on the will of the provider (will-dependent material). This does not apply to evidence that exists independently of the provider's will (will-independent material). The AP received from OLVG in response to the AP's request for information dated 3 May 2019 both will-dependent material (statements and explanations prepared for the AP), and will-independent material. The will-independent material consists of documents that already existed in a physical sense at OLVG, such as the logging policy dated 29 September 2016 and sample reports dated 13 March 2019 and 26 March 2018 respectively. The AP did not subsequently use the will-dependent material to determine the violation and impose the administrative fine. However, in addition to will-independent material, the offence was also based on will-independent material that was later provided by OLVG employees after they had been reminded of their right to remain silent by means of the cautions. In the opinion of the AP, therefore, the exclusion of evidence is not applicable.

Based on the above, the AP concludes that imposing a fine for the observed conduct does not violate the nemo tenetur principle as laid down in Article 48(1) of the European Charter and Article 6(1) of the ECHR.

3.4.2 Purpose of the investigation

OLVG argued that the imposition of a fine for the acts observed by the AP, or at least those relating to authentication, was contrary to the rights of defence laid down in Article 48(2) of the European Charter and Article 6(2) of the ECHR, since the acts observed fell outside the scope of the objective of the investigation previously formulated by the AP.

According to OLVG, the AP does not conclude in the investigative report that OLVG has not taken appropriate technical and organizational measures to ensure that personal data in the electronic patient file cannot be consulted by unauthorized personnel. But the AP does find that OLVG does not comply with the requirement of at least two-factor authentication pursuant to Article 32, paragraph 1, introductory part, of the AVG. According to OLVG, two-factor authentication as interpreted by the AP does not prevent the behaviour of the employees concerned. With two-factor authentication, all employees, including work students, have a pass, token or other second factor. Having one does not mean that they would not be able to carry out the conduct described in the data breach reports. These employees would also have had the authorisation they currently have with two-factor authentication as used by the AP.

AP response

The AP does not share the OLVG's view. The AP has informed OLVG that it is investigating whether OLVG's technical and organizational measures are "appropriate" within the meaning of Article 32 of the AVG to ensure that personal data in the electronic patient file cannot be consulted by unauthorized personnel. The AP explicitly stated that the investigation would focus on the logical access security (authentication and authorisation), logging, monitoring of the logging and employee awareness. 

The conclusion of the AP that OLVG does not comply with article 32, paragraph 1, of the AVG because the requirement for two-factor authentication is not met is directly related to the objective of the investigation and falls within the scope of the objective of the investigation. After all, the AP mentions Article 32.1 of the AVG, the corresponding guarantee and explicitly the logical access security (authentication and authorisation) in its investigative objective. In the context of the right of defence, it is not relevant whether OLVG employees would have had the same authorisation in practice with or without two-factor authentication.

For the sake of completeness, the AP notes that in its investigative objective it mentioned the fact that personal data in the electronic patient file may not be consulted by unauthorised employees as a safeguard. To minimise the risk of unauthorised access to patient data, it is very important to establish the correct identity of the employee in advance. The fact that two-factor authentication is not a measure that guarantees that unauthorised access to patient records by employees will no longer occur, does not alter the fact that it is a measure that contributes significantly to the prevention of unauthorised access and in this case is required pursuant to Article 32 of the AVG. In this context, the AP emphasises that the application of two-factor authentication and also the monitoring of logging do not stand alone, but must be viewed in conjunction with all other appropriate measures to be taken. It is the combination of these measures that enables OLVG to manage the protection of personal data as well as possible and to prevent breaches as much as possible. The application of two-factor authentication does not therefore relieve OLVG of the obligation to promote the awareness of employees concerning the protection of privacy of patients.

3.4.3 Implementation of Article 32 of the AVG

OLVG took the position that the AVG does not give Member States, and therefore the national legislature, any scope for using NEN standards to specify the assessment against the norm set out in Article 32 of the AVG. According to OLVG, by doing so in the investigation report, the AP is therefore acting contrary to the AVG. OLVG argued that Member States may only go beyond the protection given in the Regulation and may only interpret this protection further if this is explicitly provided for in the AVG. According to OLVG, this is not the case. According to OLVG, the AP did not weigh up a number of aspects as included in Article 32 of the AVG, which is at odds with the principle of due care. Finally, in OLVG's opinion, the NEN standards cannot constitute a basis for the interpretation of Article 32 of the AVG because these standards are not referred to by the AVG and were created without being related to or based on the AVG.

AP response

The AP does not share the OLVG's view in this regard either. OLVG refers to the prohibition on laying down further (binding) rules in national regulations where a European regulation applies and this regulation does not explicitly permit this. However, such a situation does not arise in this case. In the opinion of the AP, Article 6(2) and (3) of the AVG explicitly provide the possibility to do so. This does not alter the fact that Article 32 of the AVG was applied and interpreted in this case. The application and interpretation is - in view of the task assigned to it in Article 6(3) of the UAVG to supervise compliance with the AVG - up to the AP. This is what the AP has done in the investigation report and what it is obliged to do.

When answering the question of whether there are appropriate technical and organizational measures within the meaning of Article 32 of the AVG, it is relevant what is included in the relevant NEN standards. After all, these standards are generally accepted security standards within the practice of information security in healthcare. The AP considers the requirement for two-factor authentication contained in these NEN standards and the obligation to regularly assess the log files to be a concrete interpretation of what can be considered 'appropriate' within the meaning of Article 32 of the AVG. The fact that the NEN standards are not mentioned in the AVG and were developed without being related to or based on the AVG is not relevant to the AP. After all, Article 32 of the AVG provides for a standard that is aimed at all data controllers in all segments of the market. With reference to Sections 3.3.2 and 3.3.3, the AP assessed whether OLVG had taken sufficient and appropriate security measures as referred to in Article 32 of the AVG, 'taking account of the state of the art and the cost of implementation in relation to the risks and nature of the personal data to be protected'. In making these considerations, the AP took into account and was permitted to take into account the presence of generally accepted security standards such as the NEN standards.

Moreover, OLVG itself indicated in its Information Security & Privacy Policy that the aforementioned policy was based on the Dutch standard for information security in healthcare, namely: NEN 7510, NEN 7512 and NEN 7513 and the current legislation and regulations, including the AVG.63 In its Epic Logging Policy, OLVG indicates that this document must lead to compliance with NEN 7513 and the applicable legislation and regulations.64 In short, the AP deduces from this that OLVG also believes that these NEN standards provide interpretation of the correct degree of information security and has therefore independently committed itself to comply with the above NEN standards.

3.4.4 Electronic Data Processing (Healthcare Providers) Decree

The AP's investigation report refers to Article 3, subsection 2, of the Electronic Data Processing by Healthcare Providers Decree (Begz). This states that a healthcare provider, in accordance with the provisions of NEN 7510 and NEN 7512, ensures a safe and careful use of the healthcare information system and a safe and careful use of the electronic exchange system to which it is connected. OLVG stated that the AP may only impose a fine or order subject to a penalty for the enforcement of the obligations imposed in the AVG and not for a violation of the Begz. The Begz was adopted on the basis of Article 26 of the Wbp and not on the basis of the UAVG. Pursuant to Article 51 of the UAVG, the Personal Data Protection Act expired on 25 May 2018. This means that the basis of the Begz also lapsed on that date.

AP response

Finally, the AP does not follow the OLVG's view in this respect either. As explained in the next section, the AP imposed an administrative penalty for the violation of Article 32(1) of the AVG, more specifically with respect to authentication and a regular check of the log files. Incidentally, the Begz does apply to the OLVG and pursuant to the Begz it is obliged to apply the NEN 7510 and NEN 7512 standards. 

4. Penalty

4.1 Introduction

From 25 May 2018 until at least 22 May 2019, OLVG violated Article 32(1) of the AVG by failing to comply with the requirement of two-factor authentication and the regular review of log files.

For the established violation, the AP makes use of its authority to impose a fine on OLVG pursuant to Article 58, second paragraph, opening words and under (i) and Article 83, fourth paragraph, of the AVG, read in conjunction with Article 14, third paragraph, of the UAVG. The AP applies the Penalty Policy Rules 2019.65

Below, the AP will first briefly explain the penalty system, followed by the reasons for the level of the penalty in the present case.

4.2 Penalty Policy Rules of the Authority for Personal Data 2019

Pursuant to Articles 58(2)(i) and 83(4) of the AVG, read in conjunction with Article 14(3) of the UAVG, the AP is authorised to impose an administrative fine on OLVG in the event of a violation of Article 32(1) of the AVG of up to €10,000,000 or, for an enterprise, up to 2% of the total worldwide annual turnover in the preceding financial year, whichever is higher.

The AP has adopted Fines Policy Rules regarding the interpretation of the aforementioned power to impose an administrative fine, including the determination of the amount thereof.

Pursuant to Article 2, under 2.1, of the Penalty Policy Rules, the provisions for violations of which the AP may impose an administrative penalty of up to the amount of € 10,000,000 (or for an enterprise up to 2% of the total worldwide annual turnover in the preceding financial year, if this figure is higher) are classified in Annex 1 in category I, category II or category III.

In Annex 1, Article 32 of the AVG is classified as Category II.

Under Article 2(2.3), for violations subject to a statutory maximum fine of € 10,000,000 or, for an undertaking, up to 2% of the total worldwide annual turnover in the preceding business year, whichever is the higher, the AP sets the basic fine \[...\] within the following penalty band:

Category II: Fine range between € 120,000 and € 500,000 and a basic fine of € 310,000. \[...\].

Under Article 6, the AP determines the amount of the fine by adjusting the basic fine upwards (up to the upper limit of the band of the category of fines linked to a violation) or downwards (down to the lower limit of the band).

Pursuant to Article 7, the AP will, without prejudice to Articles 3:4 and 5:46 of the General Administrative Law Act, take into account the factors derived from Article 83(2) of the AVG and in the Policy Rules referred to under a through k.

4.3 Penalty levels

4.3.1. Nature, seriousness and duration of the infringement

Pursuant to Section 7(a) of the 2019 Fines Policy, the AP takes into account the nature, seriousness and duration of the infringement. In assessing this, the AP takes into account, among other things, the nature, scope or purpose of the processing as well as the number of data subjects affected and the extent of the damage suffered by them.

All processing of personal data must be done properly and lawfully. Personal data must be processed in a way that ensures their adequate security and confidentiality. This includes preventing unauthorised access to or unauthorised use of personal data and the equipment used for processing. The controller must therefore, pursuant to Article 32(1) of the AVG, take appropriate technical and organisational measures to ensure a level of security appropriate to the risk. In determining the risk to the data subject, the nature of the personal data and the nature of the processing are important: these factors determine the potential damage to the individual data subject in the event of, for example, loss, alteration or unlawful processing of the data. The AP has concluded that OLVG has not applied an appropriate security level to the processing of personal data in its hospital information system.

The AP has established that until at least 22 May 2019 OLVG has been processing personal data without appropriate security. These personal data contain highly sensitive information of OLVG's patients, such as a wide variety of health data. It is important to note that OLVG processes personal data of hundreds of thousands of patients. This large group of data subjects has run an unnecessary additional risk of, among other things, unauthorised access to their personal data. The AP considers the fact that the violation has continued in a structural manner for a longer period, partly under the Personal Data Protection Act (Wbp) under which an appropriate security level was already required, to be serious. The fact that this also concerns the processing of particularly sensitive data makes the inadequate security of the personal data even more serious.

In view of the nature, seriousness, scope and duration of the infringement, the AP sees cause to increase the basic amount of the fine by €80,000 to €390,000 pursuant to Article 7, opening words and under (a) of the Penalty Policy Rules.

4.3.2 Culpability and negligent nature of the infringement

Pursuant to Article 5:46(2) of the Awb, when imposing an administrative penalty, the AP shall take into account the extent to which the offender can be blamed for the penalty. In accordance with established case law, since this concerns a violation, in order to impose an administrative penalty it is not necessary to demonstrate intent and the AP may assume culpability if culpability is established. In addition, pursuant to Section 7(b) of the 2019 Fines Policy, the AP takes into account the intentional or negligent nature of the infringement.

OLVG is obliged under Article 32 of the AVG to implement security measures that are appropriate to the nature and scope of the processing that OLVG performs. Now that OLVG has not implemented two-factor authentication and regular checking of log files in its organization for an extended period, the AP considers that OLVG has in any event been particularly negligent in failing to take such measures. OLVG may well be expected, in view of the sensitive nature and large scale of the processing, to ascertain the standards applicable to it and to act accordingly. The AP considers this to be culpable.

In addition, OLVG indicated in its own Information Security & Privacy Policy that the aforementioned policy is based on the Dutch standard for information security in healthcare, namely: NEN 7510, NEN 7512 and NEN 7513 and the current laws and regulations, including the AVG. OLVG strives to demonstrably comply with these standards. OLVG has also determined in its logging policy that it takes a representative sample every four weeks to analyse the log data. The fact that OLVG therefore also failed to comply with its own existing policy rules is, in the AP's opinion, extremely negligent. It would have been OLVG's responsibility to implement the standards and to end the violation of article 32 of the AVG as soon as possible, so that, among other things, the detection of unauthorized access to patient data and the taking of measures in response to unauthorized access would be guaranteed.

In view of the negligent nature of the breach, the AP sees cause to increase the basic amount of the fine pursuant to Article 7(b) of the 2019 Fine Policy by €50,000 to €440,000.

4.3.3 Proportionality

Finally, pursuant to Articles 3:4 and 5:46 of the General Administrative Law Act, the AP assesses whether the application of its policy for determining the amount of the fine does not lead to a disproportionate result in view of the circumstances of the case. The AP is of the opinion that, in view of the seriousness of the violation and the extent to which OLVG can be blamed for it, the (amount of) the fine is proportionate.66 The AP sees no reason to increase or decrease the amount of the fine on the basis of proportionality and the other circumstances mentioned in Article 7 of the Penalty Policy Rules, insofar as applicable in the present case.

4.4 Conclusion

The AP fixes the total amount of the fine at €440,000.

5. Operative part of the judgment

Fine

The AP imposes an administrative penalty on OLVG for breach of Article 32(1) of the AVG in the amount of €440,000 (in words: four hundred and forty thousand euros).67

Please accept, Sir, the assurance of my highest consideration,

Personal Data Authority,

w.g.

```

Retrieved from "[https://gdprhub.eu/index.php?title=AP\_(The\_Netherlands)\_-\_26.11.2020&oldid=37664](https://gdprhub.eu/index.php?title=AP_\(The_Netherlands\)_-_26.11.2020&oldid=37664)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [AP (The Netherlands)](/index.php?title=Category:AP_\(The_Netherlands\) "Category:AP (The Netherlands)")
*   [Netherlands](/index.php?title=Category:Netherlands "Category:Netherlands")
*   [Article 32(1) GDPR](/index.php?title=Category:Article_32\(1\)_GDPR "Category:Article 32(1) GDPR")
*   [2021](/index.php?title=Category:2021 "Category:2021")
*   [Dutch](/index.php?title=Category:Dutch "Category:Dutch")

This page was last edited on 12 December 2023, at 17:15.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)