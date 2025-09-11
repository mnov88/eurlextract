Decision of the Deputy Data Protection Commissioner

Thing

Security of personal data processing (Article 32(1) and (2) of the General Data Protection Regulation ((EU) 2016/679))

A legal issue

There is a matter to be resolved

1. has the processing of personal data in the online appointment booking system maintained by the controller met the requirements set out in paragraphs 1 and 2 of Article 32 of the General Data Protection Regulation ((EU) 2016/679).

Decision of the Deputy Data Protection Commissioner

1. The processing of personal data in the online appointment booking system maintained by the controller has not met the requirements set out in Article 32, paragraphs 1 and 2 of the General Data Protection Regulation ((EU) 2016/679).

The Deputy Data Protection Commissioner gives the data controller a warning in accordance with Article 58, Paragraph 2, subparagraph b of the General Data Protection Regulation as a penalty for violating Article 32, Sections 1 and 2 of the General Data Protection Regulation.

Reasons for the Deputy Data Protection Commissioner's decision

Applicable regulations

According to Article 32, paragraph 1 of the General Data Protection Regulation ((EU) 2016/679) (hereinafter the "Data Protection Regulation"), taking into account the latest technology and implementation costs, the nature, scope, context and purposes of the processing, as well as those affecting the rights and freedoms of natural persons, likely and risks of varying severity, the controller and personal data processor must implement appropriate technical and organizational measures to ensure a level of security corresponding to the risk, such as

a) pseudonymization and encryption of personal data;

b) the ability to guarantee the continuous confidentiality, integrity, availability and fault tolerance of processing systems and services;

c) the ability to quickly restore data availability and access to data in the event of a physical and technical failure;

d) the procedure for regularly testing, examining and evaluating the effectiveness of technical and organizational measures to ensure the security of data processing.

According to Article 32, paragraph 2 of the Data Protection Regulation, when assessing the appropriate level of security, special attention must be paid to the risks involved in processing, especially due to the accidental or illegal destruction, loss, alteration, unauthorized disclosure or access to personal data of transferred, stored or otherwise processed personal data.

According to Article 58, paragraph 2, subsection b of the Data Protection Regulation, each supervisory authority has the authority to issue a notice to the controller or personal data processor if the processing operations have been in violation of the provisions of the Data Protection Regulation.
According to Article 58, paragraph 2, subparagraph d of the Data Protection Regulation, each supervisory authority has the authority to order the data controller or personal data processor to bring the processing activities into compliance with the provisions of the Data Protection Regulation, if necessary in a certain way and within a certain deadline.

According to Section 8 of the Data Protection Act (1050/2018), the national supervisory authority referred to in the Data Protection Regulation is the Data Protection Commissioner in connection with the Ministry of Justice.

Statement received from the registrar

Statement by the registrar on 13 December 2019

According to the report given by the registrar on 13 December 2019, the user logs into the online appointment booking with a social security number and first and last name. The online appointment checks the information provided by the user by comparing it with the information stored in the patient information system. The format of the personal ID provided by the user is checked. If the personal identification number is found in the patient information system, we check whether the last name and the first letter of the first name given by the user completely match the information stored in the patient information system. If the personal ID cannot be found in the patient information system, the user is treated as a new customer.

According to the report, the system prevents booking an appointment if the maximum number of bookings is full, online appointment booking is blocked, the customer has a payment default note, the check of name information fails or the format check of the personal ID fails. According to the report, the patient information system can store personal ID-specific online appointment booking blocked information and payment failure information, which prevent logging into online appointment booking and booking appointments online. If the user tries to book an appointment online and their information contains either of the above-mentioned information, logging in will not be successful and the user will be directed to call customer service without giving a reason. If, on the other hand, the login information provided by the user does not match the information in the patient information system with the personal identification number in terms of first and last name, the user will be directed to check the login information. If the format check of the personal ID provided by the user fails, the user is directed to correct the information with the message "the personal ID is in the wrong format".

According to the controller's understanding, it is possible to use the online appointment service to find out the rest of the personal identification number under certain conditions. The initial information required is the person's first and last name and date of birth. According to the registrar, the personal identification number is not used to identify the booker when booking an appointment, but to identify the booker.

According to the report, it is possible to find out the last part of the personal identification number by trying all the different options for the last part of the personal identification number, either programmatically or manually. Programmatic clarification can be done fairly quickly. According to the report, the data controller has conducted a data security audit of its services, and as a result, the data controller has the command line program code with which the programmatic brute force technique (the so-called "brute force technique") has been successfully used to determine the remainder of the personal ID for the test ID.

If the online appointment booking service is intentionally blocked for an individual, it is not possible to verify the correctness of the personal ID, according to the report. The service then gives the notification "Login was not successful".

According to the registrar's opinion, the current solution could try to prevent finding out the rest of the personal identification number by limiting the retries of incorrectly entered data. In particular, methods of preventing programmatic detection could be, for example, temporary blocking of IP addresses, delays or locking of the name given as input, or the use of CAPTCHA technology. According to the report, the data controller is currently investigating various solution options and how they could be implemented in practice without impairing or preventing the service's usability. Since the range of alternatives to be investigated is quite small due to the formula for determining the Finnish personal identification number, according to the report, delay methods may not necessarily be beneficial. According to the report, an alternative way would be to change the service so that the user must identify himself to the service before booking an appointment, either strongly or weakly.

According to the report, the data controller is able to investigate possible abuses from the log data collected from the service. Typically, a report is made if a third party, such as an authority or the data subject himself, requests it. If the data controller detects a possible abuse situation in the log data or, for example, in connection with the technical monitoring of the system's operation, the data controller informs the parties concerned and/or the authorities, as necessary, by filing a criminal report with the police, for example. According to the report, finding out the identity of the abuser of a service open to the public network based solely on the data managed by the data controller is not possible.

According to the report, online appointment booking includes the risk that the personal identification number of the person using the system can be found out, so-called with "brute force" technology. Finding out the personal identification number may result in a possible risk that the person may become the target of identity theft, if the personal identification number is used in accordance with the identification code of an act that qualifies as identity theft. According to the report, when assessing the risk to the rights and freedoms of the data subject, it must be taken into account that it is not possible to find out other personal data or find out sensitive data through the online appointment booking system. It is not possible to see the personal identification number directly from the service, but finding it out requires the above-mentioned measures and the purposeful investigation of the information. According to the report, the registrar is not aware of any reported cases in which the personal identification number was clarified using the system in question, or that the person was a victim of identity theft. It is not possible to change, destroy, destroy or transfer personal data without permission through the system in question. According to the report, the evaluation must also take into account the fact that the identification of the data subject can be correctly considered to be in the interest of the data subject. According to the report, it should also be taken into account that the personal identification number can often be known to other people than the person concerned. Overall, the controller assesses the risk to be between a low and moderate risk in terms of probability and severity.

According to the report, efforts have been made to reduce risks by, among other things, collecting log data from logins and taking investigative measures if any suspicions of misuse arise. It is possible to technically block the online appointment, in which case the appointment cannot be made. The registered person always has the right to request that the appointment be blocked. In order to reduce risks, regular information security audits are performed for online appointment booking. According to the report, the data controller has an incident notification system in use, to which incidents related to data protection are reported.

According to the report, the security of online appointment booking has so far been assessed as corresponding to the risks caused by the processing of personal data as referred to in Article 32 of the Data Protection Regulation. The online appointment booking system has been one part of the impact assessment that was carried out for electronic transaction services in 2017–2018.

According to the report, the online appointment booking system and the possibility to find out the personal identification number related to it have been discussed by the data protection group of the data controller in the fall of 2019, and the evaluation of the possible change needs related to it has started.

Notification of data breach by the data controller on 31 January 2020 and additional information on 2 February 2020

On January 31, 2020, the controller has submitted a notification of a data breach to the Data Protection Commissioner's office, according to which the controller's online appointment system has been targeted by phishing. Phishing has come to light based on a blackmail message received by the data controller. According to the additional information submitted by the data protection officer to the office of the data protection officer on February 2, 2020, ID numbers have been clarified through the online appointment booking system.

Additional information of the registrar on February 6, 2020

According to the additional information provided to the office by the data protection officer of the data controller on February 6, 2020, the data controller has switched to strong identification in electronic appointment booking on February 6, 2020.

Evaluation of the case

Article 32 of the Data Protection Regulation requires the data controller to implement technical and organizational measures that enable the data controller to ensure that the security of the processing of personal data corresponds to the risks to the rights and freedoms of the data subjects arising from the processing of personal data. When assessing the appropriate level of security, the controller must pay attention, among other things, to the risks to the data subjects caused by unauthorized disclosure or access to personal data (Article 32, paragraph 2 of the Data Protection Regulation). The controller can try to reduce risks, among other things, by being able to guarantee the continuous confidentiality of the information systems and services used to process personal data (Article 32, paragraph 1, subparagraph b of the Data Protection Regulation).

The deputy data protection commissioner considers that the data controller has not been able to guarantee the continuous confidentiality of the online appointment booking system it maintains. According to the report given by the registrar, it has been possible to use the online appointment system to find out the rest of the personal identification number. The clarification has been possible either programmatically or manually, and the programmatic clarification has been done fairly quickly. In connection with the data security audit of the registrar, the rest of the personal ID has been successfully clarified for the test ID. Personal IDs have also been found out from the appointment booking system as a result of an attack by an external party.

The personal identification number is not information belonging to special personal data groups as referred to in Article 9, paragraph 1 of the Data Protection Regulation, the processing of which is prohibited in principle. However, personal identifiers that have come into the possession of an external party can spread to a large number of people, and they can be repeatedly misused, for example, for purposes of fraud and harassment. Misuses can cause both material and non-material damage to the persons affected by the data leak. The amount of damage can be increased by the fact that it may take time to detect a data leak, which means that data subjects are unable to protect themselves from abuse as soon as the data leak occurs. The controller has to take these factors into account when assessing the risks to the data subjects from the processing of personal data.

In addition to the risks, when assessing the appropriateness of the technical and organizational measures taken, the controller must also take into account the latest technology and implementation costs, as well as the nature, scope, context and purposes of the processing of personal data (Article 32, paragraph 1 of the Data Protection Regulation). According to the registrar's report, the registrar has been able to find out abuses of the online appointment booking system from the log data. Typically, the report is made at the request of a third party. In its report, the controller also refers to the technical monitoring of the system's operation, but the report does not highlight how quickly the controller has been able to become aware of possible abuses of the online appointment system through technical monitoring. According to the registrar, the phishing targeting the online appointment system has come to light through a blackmail message.

The registrar has considered in his report that efforts could be made to prevent finding out the rest of the personal identification number from the online appointment booking system by limiting retries of incorrectly entered information. Alternatively, the online appointment booking system could require either strong or weak identification. The deputy data protection commissioner considers that the vulnerability of the online appointment booking system would therefore have been possible to fix based on the report provided by the data controller. According to the Deputy Data Protection Commissioner's opinion, switching to strong or weak identification would not have meant an unreasonable burden on the controller in terms of implementation costs. Taking into account, in addition to the above-mentioned points, the fact that the online appointment booking system has processed personal IDs on a large scale, the technical and organizational measures implemented by the controller and the level of security of personal data processing cannot be considered appropriate in the manner referred to in Article 32, Paragraphs 1 and 2 of the Data Protection Regulation with regard to the online appointment booking system.

On the grounds mentioned above, the deputy data protection commissioner issues a notice to the data controller in accordance with Article 58, paragraph 2, subparagraph b of the Data Protection Regulation as a penalty for the violation of Article 32, Sections 1 and 2 of the Data Protection Regulation.

According to the data provided by the data protection officer to the data protection officer's office on February 6, 2020, the data controller has implemented strong identification in its online appointment booking system on February 6, 2020. Since the data controller has thus already corrected the flaw that weakens the security of the online appointment booking system, the deputy data protection commissioner has no reason to order the data controller to bring its processing operations in accordance with the provisions of the data protection regulation as referred to in Article 58, paragraph 2, letter d of the data protection regulation.

Applicable legal provisions

Those mentioned in the reasons for the decision.

Appeal

This decision may be appealed in accordance with section 25 subsection 1 of the Data Protection Act (1050/2018) by appealing to the administrative court as stipulated in the Act on Trial in Administrative Matters (808/2019). The appeal is made to the administrative court.

Service

In accordance with section 60 subsection 1 of the Administrative Act (434/2003), the decision is notified by post against receipt.

The decision is legally binding.

Guidance of the deputy data protection officer for the data controller

Methods used for identification

According to Section 17, subsection 1 of the Act on the Electronic Processing of Customer Data in Social and Health Care, i.e. the Customer Data Act (784/2021), the customer must be reliably identified in the electronic processing of customer data. According to the rationale of the provision, identification could take place, for example, on the basis of a document used to verify identity or other identifying information. In connection with remote services, at least strong identification is considered a reliable identification method according to the Licensing and Supervision Agency of the Social and Health Sector and the Center for Customer and Patient Safety.

On 2 November 2020, the Digital and Population Information Agency issued a strong recommendation, according to which all online services should use good practices for verifying identity, i.e. strong identification with either bank credentials or a mobile certificate. According to the established position of the Data Protection Commissioner, identifying persons solely on the basis of personal identification number and name cannot be considered a reliable method, because the personal identification number and name may also be known to other persons.

You cannot apply for a change to this guidance of the deputy data protection officer by appealing.
