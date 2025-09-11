Skip the main navigation

Search

Data processor receives criticism for lack of security

Date: 28-09-2023

Decision Private companies Criticism Supervision / self-operating case Notification of breach of personal data security

The Norwegian Data Protection Authority has expressed criticism in a case where a data processor, Mindworking A/S, had not ensured adequate security when developing a platform (a web application) that was targeted at real estate agents.

Journal number: 2021-431-0163.

Decision

The Danish Data Protection Authority hereby returns to the case where Mindworking A/S (hereinafter referred to as Mindworking) on 11 November 2021, as a data processor and supplier of a platform for a number of data controllers, reported a breach of personal data security to the Danish Data Protection Authority. Mindworking reported the breach of personal data security after a dialogue with the authority, as the authority had for a period received a number of notifications about breaches of personal data security from estate agents who had used the platform that Mindworking had developed. On that basis, the Danish Data Protection Authority chose to investigate the issue raised in more detail and initiated a case against Mindworking.

Mindworking and the Danish Data Protection Authority have also been in dialogue both orally and in writing, most recently with Mindworking's response to the Danish Data Protection Authority's hearing on 22 May 2023.

1. Decision

After a review of the case, the Danish Data Protection Authority finds that there is a basis for expressing criticism that Mindworking's processing of personal data has not taken place in accordance with the rules in the data protection regulation\[1\] article 32, subsection 1.

Below follows a closer review of the case and a rationale for the Data Protection Authority's decision.

2. Case presentation

On 11 November 2021, after an initial dialogue with the Danish Data Protection Authority, Mindworking reported a breach of personal data security.

The notification from Mindworking has been made on the basis of a number of notifications of breaches of personal data security that the Danish Data Protection Authority received in the period from 8 November to 12 November 2021 from a total of 65 data controllers who use the platform developed and supplied by Mindworking. Mindworking is a data processor for the data controllers.

On 4 November 2021, Mindworking became aware, via an inquiry from one of the real estate agents who use the platform, that it had been possible for unauthorized persons to access information via the platform. The estate agent had thus received an anonymous inquiry from a customer who had drawn attention to a security hole on the platform. It emerged from the inquiry that, by using a function key, the customer could read data in the source code, which it was not intended that he should be able to access.

Mindworking then launched an internal investigation and was able to establish that a file provided too much data to the individual user of the platform. Mindworking has stated that the incident was caused by a security error that Mindworking was not aware of, which is why Mindworking had not implemented technical or organizational measures in advance to prevent this from happening. The platform was put into use in early 2019, and the breach lasted until 4 November 2021, when the incident was detected, and where Mindworking simultaneously corrected the error so that only people with the right user profiles could access/extract all data directly from the platform.

Mindworking has stated that the users who were able to gain unauthorized access to information via the platform were sellers of the individual properties and buyers/potential buyers in relation to the individual cases. The users had to be created as users with access rights to the individual case. Access to the information required that the mentioned users were logged in with username and password on the platform. Mindworking has further stated that access to the information in the source code also required "developer skills" on the part of the users. They thus had to switch to a correct developer tool, understand a deep data structure and find graph types to access information.

In the source code, in the individual cases, e.g. information is accessed in the form of the estate agents' own notes regarding the individual activity on the property, names of potential buyers and the price they have offered for a property, the purchase agreement document, various calculations, annual statements for loans, BBR documents, deadlines regarding deposit and guarantee and a combined document list, which contained the creation date of the document and a url link to the specific document. Mindworking has stated that i.a. the sales-related documents contained personal data and that it cannot be denied that social security numbers could have been stated in the purchase agreements.

Thus, there was both access to information, including personal data that had already been published in other registers, but in certain cases also to personal data that should not have been accessed by unauthorized persons.

Mindworking has stated that a comprehensive analysis of the log files in November 2021 did not reveal any suspicious activity. However, Mindworking has subsequently clarified that it has not been possible to log who may have accessed the information using the function key, as log is not a browser functionality. It has thus not been possible to discover whether unauthorized persons have accessed the information.

3. Reason for the Data Protection Authority's decision

On the basis of what Mindworking has provided, the Danish Data Protection Authority assumes that in the period from early 2019 to 4 November 2021 via the platform that Mindworking has developed and which the real estate agents have used when selling properties, it has been possible to accessing too much information, including personal data, on the individual broker's case regarding a specific property.

The Danish Data Protection Authority also assumes that it was persons who had been set up as users in the specific sales cases who were able to access the information without justification, and that access to the information required logging in to the platform with a username and password and then using a specific function key. This made it possible by inspection of the source code to access too much personal data, including possibly names of potential buyers and the price they have offered for a property, as well as content of documents with personal data, e.g. purchase agreements, which - in addition to various identity information - could possibly also contain social security numbers.

3.1. Article 32 of the Data Protection Regulation

It follows from the data protection regulation article 32, subsection 1, that data controllers and data processors must implement appropriate technical and organizational measures to ensure a level of security that matches the risks involved in the data controller's and data processor's processing of personal data.

Thus, the data controller and the data processor have a duty to identify the risks that the data controller's and the data processor's processing poses to the data subjects and to ensure that appropriate security measures are introduced to protect the data subjects against these risks.

The Danish Data Protection Authority is of the opinion that the requirement, cf. Article 32, for adequate security will normally mean that you as data controller and data processor must ensure that information about registered persons does not come to the knowledge of unauthorized persons.

Furthermore, the Danish Data Protection Authority is of the opinion that the requirement for adequate security in Article 32, subsection 1, will normally imply that all likely failure scenarios should be tested and checked in connection with the development of new applications where personal data of a large number of users are processed, to ensure that unauthorized access to personal data does not occur.

In this connection, the Danish Data Protection Authority is of the opinion that, in general, personal data should not appear in a source code or in the comment fields of the display layer. This also applies to all information that could compromise security, e.g. management parameters on services, passwords, certificates or the like.

Furthermore, the Danish Data Protection Authority is of the opinion that pressing a certain function key is a commonly known process for the inspection of the source code that does not require special skills in IT security, and it cannot be considered a security measure that it required the user to the browser i.a. "had to switch to a correct developer tool" to access the information.

On the basis of the above, the Danish Data Protection Authority finds grounds for expressing criticism that Mindworking - by not having safeguarded against, including by carrying out relevant tests of the application before commissioning, that unauthorized access to too much personal data could occur during inspection of the source code during use of a specific function key via the platform – has not taken appropriate organizational and technical measures to ensure a level of security that matches the risks involved in Mindworking's processing of personal data, cf. the data protection regulation, article 32, paragraph 1.

When choosing a sanction, the Danish Data Protection Authority has placed particular emphasis on the fact that it was a known and elementary mistake which could easily and should have been avoided, that there could be access to personal data that was not publicly available, including information about the names of others potential buyers, the price they have offered for the property and social security numbers and that there were many users on the platform.

The Danish Data Protection Authority has also noted that Mindworking corrected the error on the same day that they became aware of it.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons in connection with the processing of personal data and on the free exchange of such data and on the repeal of Directive 95/46/EC (general regulation on data protection).

The Norwegian Data Protection Authority

Carl Jacobsens Vej 35
2500 Valby
Tel. 33 19 32 00
dt@datatilsynet.dk

About us

About the Norwegian Data Protection AuthorityPresseHome pagePrivacy policyAvailability statement

Shortcuts

Guidance on GDPRCall usNewsletterThe National Whistleblower Scheme

follow us

The Norwegian Data Protection Authority on LinkedIn

Data processor receives criticism for lack of security

Date: 28-09-2023

Decision Private companies Criticism Supervision / self-operating case Notification of breach of personal data security

The Norwegian Data Protection Authority has expressed criticism in a case where a data processor, Mindworking A/S, had not ensured adequate security when developing a platform (a web application) that was targeted at real estate agents.

Journal number: 2021-431-0163.

Decision

The Danish Data Protection Authority hereby returns to the case where Mindworking A/S (hereinafter referred to as Mindworking) on 11 November 2021, as a data processor and supplier of a platform for a number of data controllers, reported a breach of personal data security to the Danish Data Protection Authority. Mindworking reported the breach of personal data security after a dialogue with the authority, as the authority had for a period received a number of notifications about breaches of personal data security from estate agents who had used the platform that Mindworking had developed. On that basis, the Danish Data Protection Authority chose to investigate the issue raised in more detail and initiated a case against Mindworking.

Mindworking and the Danish Data Protection Authority have also been in dialogue both orally and in writing, most recently with Mindworking's response to the Danish Data Protection Authority's hearing on 22 May 2023.

1. Decision

After a review of the case, the Danish Data Protection Authority finds that there is a basis for expressing criticism that Mindworking's processing of personal data has not taken place in accordance with the rules in the data protection regulation\[1\] article 32, subsection 1.

Below follows a closer review of the case and a rationale for the Data Protection Authority's decision.

2. Case presentation

On 11 November 2021, after an initial dialogue with the Danish Data Protection Authority, Mindworking reported a breach of personal data security.

The notification from Mindworking has been made on the basis of a number of notifications of breaches of personal data security that the Danish Data Protection Authority received in the period from 8 November to 12 November 2021 from a total of 65 data controllers who use the platform developed and supplied by Mindworking. Mindworking is a data processor for the data controllers.

On 4 November 2021, Mindworking became aware, via an inquiry from one of the real estate agents who use the platform, that it had been possible for unauthorized persons to access information via the platform. The estate agent had thus received an anonymous inquiry from a customer who had drawn attention to a security hole on the platform. It emerged from the inquiry that, by using a function key, the customer could read data in the source code, which it was not intended that he should be able to access.

Mindworking then launched an internal investigation and was able to establish that a file provided too much data to the individual user of the platform. Mindworking has stated that the incident was caused by a security error that Mindworking was not aware of, which is why Mindworking had not implemented technical or organizational measures in advance to prevent this from happening. The platform was put into use in early 2019, and the breach lasted until 4 November 2021, when the incident was detected, and where Mindworking simultaneously corrected the error so that only people with the right user profiles could access/extract all data directly from the platform.

Mindworking has stated that the users who were able to gain unauthorized access to information via the platform were sellers of the individual properties and buyers/potential buyers in relation to the individual cases. The users had to be created as users with access rights to the individual case. Access to the information required that the mentioned users were logged in with username and password on the platform. Mindworking has further stated that access to the information in the source code also required "developer skills" on the part of the users. They thus had to switch to a correct developer tool, understand a deep data structure and find graph types to access information.

In the source code, in the individual cases, e.g. information is accessed in the form of the estate agents' own notes regarding the individual activity on the property, names of potential buyers and the price they have offered for a property, the purchase agreement document, various calculations, annual statements for loans, BBR documents, deadlines regarding deposit and guarantee and a combined document list, which contained the creation date of the document and a url link to the specific document. Mindworking has stated that i.a. the sales-related documents contained personal data and that it cannot be denied that social security numbers could have been stated in the purchase agreements.

Thus, there was both access to information, including personal data that had already been published in other registers, but in certain cases also to personal data that should not have been accessed by unauthorized persons.

Mindworking has stated that a comprehensive analysis of the log files in November 2021 did not reveal any suspicious activity. However, Mindworking has subsequently clarified that it has not been possible to log who may have accessed the information using the function key, as log is not a browser functionality. It has thus not been possible to discover whether unauthorized persons have accessed the information.

3. Reason for the Data Protection Authority's decision

On the basis of what Mindworking has provided, the Danish Data Protection Authority assumes that in the period from early 2019 to 4 November 2021 via the platform that Mindworking has developed and which the real estate agents have used when selling properties, it has been possible to accessing too much information, including personal data, on the individual broker's case regarding a specific property.

The Danish Data Protection Authority also assumes that it was persons who had been set up as users in the specific sales cases who were able to access the information without justification, and that access to the information required logging into the platform with a username and password and then using a specific function key. This made it possible by inspection of the source code to access too much personal data, including possibly names of potential buyers and the price they have offered for a property, as well as content of documents with personal data, e.g. purchase agreements, which - in addition to various identity information - could possibly also contain social security numbers.

3.1. Article 32 of the Data Protection Regulation

It follows from the data protection regulation article 32, subsection 1, that data controllers and data processors must implement appropriate technical and organizational measures to ensure a level of security that matches the risks involved in the data controller's and data processor's processing of personal data.

Thus, the data controller and the data processor have a duty to identify the risks that the data controller's and the data processor's processing poses to the data subjects and to ensure that appropriate security measures are introduced to protect the data subjects against these risks.

The Danish Data Protection Authority is of the opinion that the requirement, cf. Article 32, for adequate security will normally mean that you as data controller and data processor must ensure that information about registered persons does not come to the knowledge of unauthorized persons.

Furthermore, the Danish Data Protection Authority is of the opinion that the requirement for adequate security in Article 32, subsection 1, will normally imply that all likely failure scenarios should be tested and checked in connection with the development of new applications where personal data of a large number of users is processed, to ensure that unauthorized access to personal data does not occur.

In this connection, the Danish Data Protection Authority is of the opinion that, in general, personal data should not appear in a source code or in the comment fields of the display layer. This also applies to all information that could compromise security, e.g. management parameters on services, passwords, certificates or the like.

Furthermore, the Danish Data Protection Authority is of the opinion that pressing a certain function key is a commonly known process for the inspection of the source code that does not require special competences in IT security, and it cannot be considered a security measure that it required the user to the browser i.a. "had to switch to a correct developer tool" to access the information.

On the basis of the above, the Danish Data Protection Authority finds grounds for expressing criticism that Mindworking - by not having safeguarded against, including by carrying out relevant tests of the application before commissioning, that unauthorized access to too much personal data could occur during inspection of the source code during use of a specific function key via the platform – has not taken appropriate organizational and technical measures to ensure a level of security that matches the risks involved in Mindworking's processing of personal data, cf. the data protection regulation, article 32, paragraph 1.

When choosing a sanction, the Danish Data Protection Authority has placed particular emphasis on the fact that it was a known and elementary mistake which could easily and should have been avoided, that there could be access to personal data that was not publicly available, including information about the names of others potential buyers, the price they have offered for the property and social security numbers and that there were many users on the platform.

The Danish Data Protection Authority has also noted that Mindworking corrected the error on the same day that they became aware of it.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons in connection with the processing of personal data and on the free exchange of such data and on the repeal of Directive 95/46/EC (general regulation on data protection).
