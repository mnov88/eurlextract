The North Jutland region is criticized for lack of security regarding self-service solutions

Date: 08-11-2021

Decision

The Danish Data Protection Agency has made a decision in a case where the North Jutland Region has reported a breach of personal data security regarding a vulnerability in a self-service solution.

Journal number: 2021-442-12924.

The Danish Data Protection Agency hereby returns to the case where the North Jutland Region on 8 May 2021 reported a breach of personal data security to the Danish Data Protection Agency. An internal reference number is stated for the notification: 2021-017514. The review has the following reference number:

2ca746503d826e268cbc6d6f23c1543aa7b67c1d.

Summary

From May 2018 to April 2021, it has been possible - via an IT solution - to access other people's personal information and cancel bookings, e.g. appointments at a hospital. This was a well-known type of vulnerability, which concerns the lack of control of the user's access. Abuse of the solution required that the user was logged in with NemID, but the error meant that access to bookings and letters was not limited to the current user's own bookings / letters.

The Danish Data Protection Agency has expressed criticism that the North Jutland Region had not complied with the requirement for appropriate security measures because the region had not set sufficient requirements for security in its agreements with the company that developed the solution.

The Danish Data Protection Agency emphasized that potentially half a million data subjects' personal data could have been accessed by unauthorized persons, that the information included health information and other information worthy of protection, that both the personal data's confidentiality and availability could be affected and that the breach lasted for approx. three years.

Furthermore, the Danish Data Protection Agency has emphasized that the breach of personal data security was due to a known type of vulnerability, and thus something that should have been handled already during the development and testing of the IT solution.

In the mediating direction, the Danish Data Protection Agency has, among other things, emphasized that abuse of the vulnerability should take place behind a login with NemID, which - although it could not prevent the possibility of abuse - would nevertheless give users the impression that they might be revealed if they exploited the vulnerability and that this could possibly deter them from doing so.

Decision

Following a review of the case, the Danish Data Protection Agency finds that there are grounds for criticizing the fact that Region North Jutland's processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation \[1\]. 1.

Below is a more detailed review of the case and a justification for the Danish Data Protection Agency's decision.

2. Case presentation

It appears from the case that Regions Nordjyllands data processor discovered an error in the IT solution "MineAftaler", which made it possible during login with NemID to change a number in a REST service URL and thereby gain access to other citizens' personal information.

It appears from the case that the breach of personal data security has existed from 30 May 2018 in the IT solution "SelvBooking" (ie from the IT solution was introduced). The IT solution was subsequently further developed into the "MineAftaler" solution, which was introduced on 10 February 2021. The breach consisted of "MineAftaler" until it was discovered on 29 April 2021 by the company that is the data processor in relation to the processing. of personal information in "MineAftaler", and who is also the developer and supplier of "MineAftaler". "MineAftaler" is included as a module in the booking system "BookPlan", which the North Jutland Region receives from the data processor.

The North Jutland Region has stated in the case that after logging in with NemID, you could change a number in a URL and thereby, with a certain probability, access other people's bookings. This is elaborated in two rounds:

It is not a direct URL in the browser that one can correct. It is a REST service that the web application uses under the bonnet. The URL of the REST service is: https: <host>: <port> / selvbooking / rest / breve / <brev-ID>.

It must be emphasized that it was not possible to look up a specific person's correspondence received from the North Jutland Region without knowing the specific underlying URL. If the underlying URL is changed, any letter would be displayed instead if the change happened to match.

...

"The URL that the user should correct should be found in the browser's Developer Console, so you can see what network traffic is from the application to the backend. Then find the REST call in question and change the parameters (<letter ID>), and guess at a new available <letter ID> (there are many holes in the sequence, so it was not all consecutive letter ID ' is that could be found). ”

It further appears from the case that this is a vulnerability described at https://owasp.org/www-project-top-ten/, specifically the vulnerability A5: 2017-Broken Access Control. To correct the error, the data processor implemented the correct use of Access Control, after which the authenticated user can only look up data that belongs to the user himself.

The North Jutland Region has stated that there is a limited amount of users of "MineAftaler", but everyone with a NemID, who has been logged in in the period 30 May 2018 to 29 April 2021, has had the opportunity to exploit the vulnerability. The vulnerability allowed access to all letters written to patients before April 30, 2021, which per. April 30, 2021 includes 498,599 patients. It includes information on name, home address, social security number and health information. The latter is, as a general rule, a clinical department, form of consultation, including purpose of consultation, possibly. reply letters stating the result of an examination - but not in the case of confirmatory diseases of a significant nature.

The region has not been able to confirm or deny whether there were secret addresses among the personal data concerned.

The vulnerability made it possible to delete other people's letters and bookings. However, the North Jutland Region estimates that this would have been discovered in most cases due to other communication between patients and hospitals.

Examination of logs has shown that there has been no abuse in the last 180 days up to the finding of the breach. In the period starting from June 2020, only "mass harvesting" of letters could be investigated, of which there were no indications. For the rest of the period when the breach was going on, it could not be further clarified whether there were indications of abuse. The North Jutland Region has explained the period for storing the log with a reference to the safety order:

In accordance with the previously applicable security executive order, as previously stated by the Danish Data Protection Agency, RN will continue to apply as a guide for security in the public sector's securing processing of personal data in the public sector, has chosen to set the audit log period at 180 days.

As documentation of measures implemented before the breach was found, the North Jutland Region has submitted an IT contract and data processor agreement. The region has also cited a GDPR audit of the data processor conducted in January 2021 (i.e., immediately prior to the commissioning of Mine Agreements) as a measure.

In relation to the IT contract (Delivery agreement of 8.4.2013), the Danish Data Protection Agency has read parts of it. Section 5 discusses Factory Acceptance Test (FAT), User Acceptance Test (UAT), load test and function test (Smoketest) as well as Installation test, Takeover test (OP) and operation test, without the exact content of these being described in more detail in the IT contract. Item 7 describes, among other things, that the purpose of OP is to ascertain whether the delivered functionality and documentation in the partial delivery in question meets the requirements of the agreement. In relation to other "tests", these are linked to some "acceptance criteria", which, however, are not described in more detail in the IT contract.

The submitted data processor agreement was entered into in September 2013 and updated on 20 January 2020. The original agreement mentions that it concerns the delivery, operation and maintenance of the IT system for clinical booking. The updated data processor agreement concerns the processing of personal data for the purpose of fulfilling the "Delivery Agreement Clinical Booking", and it mentions, among other things, that Appendix 1 (Data Processor Instructions) specifies minimum requirements for the necessary technical and organizational security measures. These requirements include following:

4.2.3 The data processor must document the identified risks and how the risk has been reduced to an acceptable level.

The above obligation implies that the data processor must make a risk assessment, and then implement measures to address identified risks. These may include, as appropriate, the following measures:

Pseudonymisation and encryption of personal data Ability to ensure continued confidentiality, integrity, availability and robustness of processing systems and services Ability to timely restore the availability of and access to personal data in the event of a physical or technical incident A procedure for regular testing, assessment and evaluation of the effectiveness of the technical and organizational measures to ensure treatment security.

As documentation for tests that are relevant to the breach, and performed before commissioning MineAftaler / SelvBooking, Region Nordjylland has submitted the data processor's test cases in the spreadsheet "Testcases-MineAftaler-Copyright".

The GDPR audit, which is also described as a measure, was completed on 14 January 2021, and showed i.a. that in relation to "Process security and Privacy-by-Design and Privacy-by-Default" a compliance level of 73% was assessed, where 100% is the best. The assessment is in the audit followed by a recommendation with the following wording: "The data controller should ensure that the data processor's compliance score within the theme is raised, as the compliance score - based on the data processor's answers to the questions included in DPA Service - is assessed as a means." The Danish Data Protection Agency has not received information on whether the recommendation has been followed.

It also appears from the case that the report of the breach took place approx. 9 days after the fracture was found. The North Jutland Region has justified the delay as follows:

The security hole was closed immediately on Friday afternoon, April 29, 2021. The solution was removed immediately and only reopened when the hole was closed. The delayed notification is due to further investigations into the possible extent of the breach at the supplier in order for RN to assess whether there was compromised data during the breach period.

RN accepted that the supplier completed a preliminary investigation of the course of events to assess whether there had been a breach that posed a risk to the data subjects' rights, or whether this could be ruled out, according to which notification to the Data Protection Authority was not mandatory, cf. Article 33 of the Data Protection Regulation. , PCS. As RN's knowledge of the breach was dependent on the supplier's investigation, this could not be reported within 72 hours, but was dependent on the supplier's preliminary investigation, which was given orally on 8 May, after which the notification took place as it could not with complete certainty it is excluded that there has been no breach of personal data security. The written preliminary report was received on 12 May 2021.

In Region North Jutland's documentation of the breach, cf. Article 33 (1) of the Data Protection Regulation. 5, there is an explanation as to why the data subjects will not be notified of the breach, as well as the consequences of the breach:

Orientation to the data subject? No. Due to the technical report, the probability has been assessed as very low and the consequences are not considered to have physical or financial consequences for the patients.

What are the consequences of the breach for the affected persons? Probably none, as the information can only be accessed through a hacker attack and there are no indications of this. In addition, a maximum of letters can be changed or deleted, which has been found not to have happened during the last 180 days.

Justification for the Danish Data Protection Agency's decision

On the basis of the information provided by the North Jutland Region, the Danish Data Protection Agency assumes that it has been possible to establish unauthorized access to personal data and to delete other people's letters and bookings.

On this basis, the Danish Data Protection Agency assumes that there has been unauthorized access to personal data, which is why the Authority finds that there has been a breach of personal data security, cf. Article 4, no. 12 of the Data Protection Regulation.

3.1. Article 32 of the Data Protection Regulation

It follows from Article 32 (1) of the Data Protection Regulation 1, that the data controller must take appropriate technical and organizational measures to ensure a level of security appropriate to the risks involved in the data controller's processing of personal data.

Thus, the data controller has a duty to identify the risks that the data controller's processing poses to the data subjects and to ensure that appropriate security measures are put in place to protect the data subjects against these risks.

The Danish Data Protection Agency is of the opinion that the requirement pursuant to Article 32 for appropriate security will normally mean that 1) in systems with a high number of confidential, including sensitive, information about a high number of persons, stricter requirements must be set for the data controller's care in securing that there is no unauthorized access to personal data and that 2) all probable error scenarios should be tested in connection with the development of new software to be used for the processing of personal data.

On the basis of the above, the Danish Data Protection Agency finds that the North Jutland Region - by failing to set sufficient requirements for the development and testing of new software - has not taken appropriate organizational and technical measures to ensure a level of security appropriate to the risks involved in the region's processing. of personal data in accordance with Article 32 (1) of the Data Protection Regulation 1.

The Danish Data Protection Agency has emphasized that agreements had been entered into concerning this particular IT solution and the processing of personal data therein, but that these agreements have lacked a focus on data protection in the development and testing of the IT solution. The IT contract - which i.a. is listed as part of the measures implemented before the breach was found - does not make clear requirements for tests that have a safety focus. Certain test criteria are not specified in the contract, and tests with terms such as "User Acceptance Test" are typically not designed to detect errors of the type that have occurred here and can be abused. The Danish Data Protection Agency finds that the IT contract in particular, which is very specific about the development and testing of the IT solution, should have contained clear requirements with a focus on security in development and testing.

In connection with the above, the tests - which the North Jutland Region has submitted as documentation for tests that are relevant to the breach and which have been performed before commissioning SelvBooking / MineAftaler - appear as function tests / user tests. They thus appear as tests with a primary focus on intended functionality and thus not vulnerability tests, penetration tests and similar tests with a focus on safety - ie. tests that primarily focus on unintended functionality that may. can be abused.

Following a review of the case, the Danish Data Protection Agency hereby finds that there is a basis for expressing criticism that Region North Jutland's processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation. 1.

When choosing a response in an aggravating direction, the Danish Data Protection Agency has emphasized that potentially half a million data subjects' personal data could have been accessed by unauthorized persons, that the information included health information and other information worthy of protection, that both personal data could be affected and that the breach ca. Three years. Furthermore, the Danish Data Protection Agency has emphasized that the breach of personal data security was due to a known type of vulnerability, and thus something that should have been handled already during the development and testing of the IT solution.

That a <letter ID> had to be entered, and that there were "many gaps in the sequence, so that not all consecutive letter IDs could be found", is not immediately seen to change anything in relation to the seriousness of the breach, given that the data controller has not stated any restrictions on the possibility of trying out all possible values of <letter-ID>.

Changing a URL that could be found via the browser's Developer Console immediately means that it takes more technical knowledge to exploit the vulnerability than just changing the URL in the browser's address bar. However, the Danish Data Protection Agency assesses that this does not make much difference in relation to the risks posed by the breach. Malicious individuals who have the intent and willingness to abuse a web application will usually also have an understanding of how web applications are developed / functioning, and thus how this type of vulnerability can be exploited.

When choosing a response in a mediating direction, the Danish Data Protection Agency has emphasized that abuse of the vulnerability should take place behind a login with NemID, which - although it could not prevent the possibility of abuse - would nevertheless give users the impression that they might be revealed , if they exploited the vulnerability and that this could possibly deter them from doing so. In addition, the Danish Data Protection Agency has emphasized that the North Jutland Region had a GDPR audit carried out prior to the commissioning of MineAftaler, although this described the level of processing security, privacy by design / default as a "means".

The Danish Data Protection Agency finds that the measure "GDPR-audit" has less value, given the average level, and the fact that the audit was performed immediately before "MineAftaler" was taken into use, and thus long after the original faulty solution "SelvBooking" was developed.

3.2. Article 33 of the Data Protection Regulation

It follows from Article 33 (1) of the Regulation 1, that the data controller in the event of a breach of personal data security without undue delay, and if possible within 72 hours, must report the breach to the Danish Data Protection Agency, unless it is unlikely that the breach of personal data security entails a risk to natural persons' rights or freedoms.

The North Jutland Region's reason for not reporting the breach earlier was that the data processor was given time to assess whether there was compromised data in the period in which the breach occurred (30 May 2018 to 29 April 2021).

The Danish Data Protection Agency assumes - in accordance with what is stated by the Region - that the solution was taken down on 29 April 2021, and it is stated on that occasion that the "hole" is closed. Overall, it is therefore the Data Inspectorate's assessment that both the data processor and the data controller - at the latest at this time - were aware that there had been a possibility of unauthorized access to personal data due to a vulnerability in "MineAftaler".

In addition, the Danish Data Protection Agency assumes that the data controller awaited the result of an investigation into whether this vulnerability had been used by someone to gain unauthorized access.

It is the opinion of the Danish Data Protection Agency that in cases where there has been an unauthorized access to personal data, and it cannot be objectively proven within 72 hours of its finding that such access has not been utilized, and that, cf. Article 33, it can therefore not states, "... that the breach of personal data security is unlikely to involve a risk ...", the supervisory authority must be notified.

The termination of the investigation into an incident which is definitively covered by Article 4 (12) cannot therefore justify exceeding the 72 hours.

The Danish Data Protection Agency thus finds that the notification should have taken place earlier than 8 May 2021, but the Authority has also noted that the delay was limited

3.3. Article 34 of the Data Protection Regulation

It follows from Article 34 (1) of the Regulation 1, that when a breach of personal data security is likely to involve a high risk to the rights and freedoms of natural persons, the data controller shall notify the data subject without undue delay of the breach of personal data security.

The North Jutland Region has in their internal registration of breaches, cf. 5, justified opt-out of notification with a low probability, however, without it being possible to read as far as this probability is concerned ("Due to the technical investigation, the probability has been assessed as very low ..."). The assessment of the consequences of the breach is "probably none", but the wording is unclear ("the consequences are not considered to have physical or financial consequences for the patients") - however, it seems to be justified that access to the information would require a "hacker attack and there are no indications of this ".

If in a specific situation you do not have sufficient log data to confirm or deny that an access has been abused, this must be included in the assessment of risks to the data subjects' rights, and thus in the assessment of whether the data subjects must be notified of the breach. .

In this connection, the Danish Data Protection Agency should note that Article 33, para. 5 sets requirements for documentation of all breaches of personal data security, and this sets requirements for the quality of the internal registration. Region North Jutland's current registration does not give a clear impression of the considerations behind omitting notification of the affected data subjects.

The Danish Data Protection Agency assumes that the assessment of probabilities and consequences (and thus the risk for the data subjects affected) is based on the log data that only covers part of the period of the breach, which in the Authority's opinion is not sufficient to assess the risk as being low. . When there is a lack of documentation as to whether a vulnerability has been misused, it involves a wide range in the possible consequences from "no consequence" to the worst possible in relation to in particular the amount of personal data, what the data can be misused for and what deletion of a letter or a booking could involve (if not detected due to other communication between citizen and region).

However, on the basis of the overall information that the Danish Data Protection Agency has received regarding the nature of the breach, the Danish Data Protection Agency does not find reason to override the region's choice not to notify on the available basis.

However, the Danish Data Protection Agency recommends that the North Jutland Region improve the quality of the internal registration - and possibly the assessment - of breaches of personal data security.

In relation to the North Jutland Region's audit log, the Danish Data Protection Agency must note that when determining an appropriate logging period and content of the log, the region must take into account what the purpose of the log is and how it is used. If a data controller, for example, decides to make samples in a log, then the log must be saved for the period that you want the samples to cover (eg the last 3 months back in time). If a log is expected to show abuse of user access - access which by mistake has not been discontinued upon resignation - then the log must cover the maximum period that may elapse before such non-discontinuation is detected and corrected, so that the log can show all potential abuse during the period in which access should have been closed. Another purpose may be investigations into hacker attacks, where the data controller chooses to follow the Center for Cyber Security's recommendations on retention periods for logs.

3.4. Summary

On the basis of the above, the Danish Data Protection Agency finds that there is a basis for expressing criticism that Region North Jutland's processing of personal data has not taken place in accordance with the rules in the Data Protection Ordinance \[2\], Article 32 (1). 1.

Concluding remarks

The Danish Data Protection Agency notes that the Danish Data Protection Agency's decision cannot be appealed to another administrative authority, cf. section 30 of the Data Protection Act.

The Danish Data Protection Agency's decision may, however, be brought before the courts, cf. section 63 of the Constitution.

For the sake of good order, the Danish Data Protection Agency must note that the Authority expects to publish a news item about the decision as well as a copy of this on the Authority's website in one week's.

The Danish Data Protection Agency hereby considers the case closed and does not take any further action in the case.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC (General data protection regulation).

\[2\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC (General data protection regulation).
