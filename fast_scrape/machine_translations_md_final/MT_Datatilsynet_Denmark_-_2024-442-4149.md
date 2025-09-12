Skip the main navigation

Search

New decision

Copenhagen Municipality receives serious criticism for lack of security measures

Date: 07-05-2024

Decision Public authorities Serious criticism Reported breach of personal data security Notification of breach of personal data security Children Sensitive information Unauthorized access

The Norwegian Data Protection Authority has expressed serious criticism in a case where approx. 37,500 employees in the Municipality of Copenhagen were given unauthorized access to information on up to 3.7 million persons – including sensitive information about children.

Journal number: 2024-442-4149.

Summary

In connection with moving files with a large amount of data (disk swap), as a result of a human error, too broad user access was granted to the drive where data was stored. This resulted in approx. 37,500 employees in the municipality gained unauthorized access to information on up to 3.7 million people. The data related to a so-called SAS installation (format for management information, etc.), and it was only four SAS data warehouse developers who should have had access to the data. For the majority of those affected, there was, among other things, talk about name and address information, but in addition the files also contained information on well-being, language assessment and information on dentistry and health care relating to children.

The broad access existed for almost two months, until Copenhagen Municipality discovered the error during a routine security scan of the municipality's open drive. Access was then closed, and the incident was reported to the Danish Data Protection Authority as a breach of personal data security.

The municipality noted in connection with the case that, however, it was assessed that there was a very small probability that an ordinary IT user would come across the drive, as it required special prerequisites to find it. Network registration was thus switched off on the individual PCs, and this meant that the employees could not find the drive during ordinary searches on the PC.  This also meant that the URL had to be known, or that the drive had to be actively scanned. The municipality's investigations showed that a scanning tool that looked for open drives had not been used during the period of the breach. Examination of the administrative log also showed access only for persons with a work-related need. However, the municipality's logs of all administrative IT users' potential access to the drive did not go back so far in time that the municipality could definitively conclude that no employees other than those who had a work-related need had accessed the information during the period. The municipality also stated that the majority of SAS files were not immediately readable by those who had gained unauthorized access to them, and that this required that the data was first processed in a SAS program.

Serious criticism of lack of security measures

After an overall assessment of the circumstances of the case, including the time that has passed since the incident, the Danish Data Protection Authority found grounds for expressing serious criticism that the Municipality of Copenhagen's processing of personal data had not taken place in accordance with Article 32, paragraph 1 of the Data Protection Regulation. 1, on processing safety. Thus, the Danish Data Protection Authority did not find that the municipality had taken appropriate organizational and technical measures to ensure a level of security suitable for the risks involved in the authority's processing of personal data.

The Danish Data Protection Authority emphasized that the municipality had not ensured that only employees with a work-related need had access to the drive, that there was a set-up where a single employee's mistake could result in a breach that included 3.7 million. people, and that immediately after moving the information, it had not been tested whether the rights to the drive were correct, which would have immediately revealed the error, since all administrative staff had gained access to it.

The Danish Data Protection Authority is generally of the opinion that when new applications are developed or file drives are moved, it must initially be assessed whether it is necessary in the future to move and store the information in a personally identifiable form. If it is necessary for the purpose of the processing, a possible security measure could be for the data controller to ensure that the information is encrypted so that only a person entitled to access can read and unlock the information. A proprietary data format (such as a SAS format) cannot be equated with encryption, as there are often viewers or plugins that make it relatively easy to read the file formats in question.

For all development and maintenance tasks, it is also essential that, as part of the change process, it is required that those authorized to do so by the data controller check that the intended access control, control and logging work before the change is released for operation .   

The Danish Data Protection Authority also noted in the decision that the municipality carried out periodic (quarterly) network scans for shared drives with correct rights, and that the municipality stated that it would implement a number of measures to prevent a similar situation from occurring again. However, the Danish Data Protection Authority notes at the same time that the Municipality of Copenhagen appears to have subsequently reported several breaches of personal data security, which consist of employees having access to personal data that they do not have a work-related need to access, and that the Danish Data Protection Authority therefore assumes that there at the Municipality of Copenhagen, the focus continues to be on ensuring that appropriate security measures are implemented to reduce the risk of such breaches and to ensure that breaches are detected quickly.

Decision 

The Danish Data Protection Authority hereby returns to the case where the Municipality of Copenhagen reported a breach of personal data security to the Danish Data Protection Authority on 17 June 2021. The report has the following reference number:

ab0615a02eb16368f8f79143b90e83daae7ac961.

1. Decision

After an overall assessment of the circumstances of the case, including the time that has passed since the incident, the Danish Data Protection Authority finds that there are grounds for expressing serious criticism that the Municipality of Copenhagen's processing of personal data has not taken place in accordance with the rules in the Data Protection Regulation\[1\] article 32, subsection 1.

Below follows a closer review of the case and a rationale for the Data Protection Authority's decision.

2. Case presentation

On 17 June 2021, the Municipality of Copenhagen reported a breach of personal data security to the Danish Data Protection Authority.

The Danish Data Protection Authority received a follow-up to the notification on 10 July 2021.

By letter of 30 July 2021, the Danish Data Protection Authority requested additional information in the case. The Municipality of Copenhagen issued a statement on the matter on 20 August 2021 (dated 13 August 2021).

It appears from the submitted material that in connection with a routine scan on 15 June 2021 of Copenhagen Municipality's open file drive, it was established that there was access to a normally closed drive containing data, including personal data, related to a SAS installation\[2 \]. Due to the error, it was possible for employees to search for and open the site in question. Access was closed immediately after the error was detected.

It also appears that investigations have shown that the breach was due to human error, where an employee with administrator access mistakenly gave too broad access to the drive. The error is believed to have occurred when data was moved to a larger disk on April 17, 2021.

The following appears about the affected information:

"The total number of people who have been affected by the incident is max. 3,750,000.

On affected E-drives there are, among other things, the following information:

P-data Address information max 3,750,000 social security number Information about students incl. Deregistered students approx. 504,000 social security number Information about students' parents approx. 480,000 social security number Information about children in daycare incl. deregistered children approx. 303,000 social security number Information about the children's parents approx. 120,000 social security number Master information about staff approx. 126,000 social security number

Note – the above are only unique social security numbers. within the individual type of information – i.e. the number of social security number cannot be added together. For example, the 504,000 students' social security number is included. also in the P-data Address information data set.”

Furthermore, it appears that for the majority of the affected registrants this is name and address information, but in addition the files also contain information about institution/school, family relationships for the group of children/parents in the municipality and in some cases information about well-being, language assessment and information about dentistry and health care.

The Municipality of Copenhagen has stated that access has been too broad in the period from 19 April 2021 to 15 June 2021, and that there has been no access for persons outside the Municipality of Copenhagen.

During the period, the drive has been open to all administrative IT users in the municipality. At the time the breach was discovered, there were a total of approx. 37,500 administrative IT users in Copenhagen Municipality.

Access should have been limited to a user group (AD security group) in the Children and Youth Administration. The user group provides access to a total of four SAS Datawarehouse developers at Digitization and Data in the Child and Youth Administration.

When the breach was discovered, Koncern IT searched for clues in the administrative log, which goes back 35 days. The search only showed access from specific and identified individuals with an authorized work-related need to access the server and drive. However, the municipality's logs of all administrative IT users' potential access to the drive do not go back so far in time that the municipality can definitively conclude that no employees other than those who have a work-related need have accessed the server during the period.

Copenhagen Municipality has stated that the probability that an ordinary administrative IT user in the municipality would come across the drive is very small, as it would require special prerequisites for an ordinary user to find the drive. In this connection, the municipality has stated that network registration has been switched off on the individual PCs in the municipality. It cannot be activated by an ordinary IT user without special access or rights. This means that the employees cannot find the server via ordinary searches on the PC. This also means that the URL must be known or that the drive must be actively scanned. Security in Group IT periodically scans for open drives, as this is what an external attacker would do, and that's how the broad access was identified. The URL appears in the system's documentation, but it requires an intention to find it and copy it into a pathfinder. The Municipality of Copenhagen has therefore assessed that an ordinary IT user in the municipality would not have had the insight to find the open server.

The Municipality of Copenhagen has also demonstrated that no scanning tool was used that looked for open drives during the period of the broad access.

In addition, Copenhagen Municipality has stated that it is a very small subset of the total amount of data that has been available in plain text (0.2%). The remaining part of the data volume (99.8%) are SAS files\[3\] that require data to be processed in a SAS program, and this data has thus not been readable by a random administrative user in Copenhagen Municipality. The Municipality of Copenhagen has stated that the total amount of data, of which 0.2% has been available in plain text, amounted to 1,827 gigabytes calculated on 10 August 2021. In this connection, the Municipality of Copenhagen has noted that the amount of data changes daily in connection with ongoing data runs/ updates.

The 0.2% of the total amount of data consisted of 8,424 files distributed among the file types xsl, xlsx, xlsb and txt. The content of these files originates from a number of administrative systems and specialist systems and consists to a large extent of school and institutional data and to a lesser extent information from the municipal children's dental care and health care professional systems in the Municipality of Copenhagen.

In addition, Copenhagen Municipality has stated that for the data that contains personal data, it appears that the majority will contain information about children.

However, part of the 0.2% is also various types of aggregated report data and support data, for example organizational data used for management information.

Copenhagen Municipality has stated that data could be accessed via another SAS installation. In this context, the municipality has noticed that the municipality's entire network installation is monitored with the cyber security product "Darktrace", which would have detected and alerted if there had been an attempt to retrieve these SAS files.

The following appears about Copenhagen Municipality's measures before the incident:

"Rights management for the solution takes place through AD groups. Employees with a work-related need can thus be granted access to areas with personal data at cpr.nr level via membership of one or more so-called AD security groups. Periodic (quarterly) network scans are performed for shared drives with correct rights. There is real-time network monitoring with associated incident handling, which for example detects the movement of large amounts of data and unusual user behaviour. There are user instructions for data handling in the form of internal guidance, and training is provided to employees. Of more standard technical measures, we can mention: Perimeter security in the form of firewalls and VPN with two-factor authentication. Network isolation of servers, both with internal firewalls and microsegmentation. Access restriction on servers in the form of access control lists. Central server log collection in SIEM system.”

The following appears about Copenhagen Municipality's measures after the incident:

"Going forward, the Municipality of Copenhagen has, among other things, launched the following initiatives to avoid a similar situation occurring again:

Ensured that from now on it is logged to SIEM (SIEM stands for Security Information & Event Management and is a common term for a system that can collect logs from many different systems and is used to set up automated log follow-up) when there are changes to the server's rights and precise changes thus can be tracked and does not require interviews with employees. Instructions are issued to all employees in the municipality's Group IT that rights on shares or drives must not be changed without an order from the system owner. A joint administrative procedure is drawn up which describes the rules and responsibilities in connection with the creation of shares on servers. In continuation of the business process, the Children and Youth Administration also instructs employees and external consultants that all changes to rights on shares and drives must be created as orders in ServiceNow. The Norwegian Children and Youth Administration is revisiting the risk assessment for the processing of personal data on the server."

3. Reason for the Data Protection Authority's decision

Based on what the Municipality of Copenhagen has stated, the Data Protection Authority assumes that due to human error, an employee of the Municipality of Copenhagen with administrator access gave too broad access to a drive in connection with a disk swap on 17 April 2021, whereby all approx. 37,500 employees in the municipality had unauthorized access to information on up to 3.7 million registered, including information on well-being, language assessment and information on dentistry and health care for children.

On this basis, the Danish Data Protection Authority assumes that there has been unauthorized access to personal data, which is why the Danish Data Protection Authority finds that there has been a breach of personal data security, cf. Article 4, No. 12 of the Data Protection Regulation.

3.1. Article 32 of the Data Protection Regulation

It follows from the data protection regulation, article 32, subsection 1, that the data controller must take appropriate technical and organizational measures to ensure a level of security appropriate to the risks involved in the data controller's processing of personal data.

The data controller thus has a duty to identify the risks that the data controller's processing poses to the data subjects and to ensure that appropriate security measures are introduced to protect the data subjects against these risks. As an example of relevant measures, the provision highlights i.a. pseudonymisation and encryption, ability to ensure ongoing confidentiality and procedures for regular testing and assessment and evaluation of the effectiveness of the technical and organizational measures to ensure processing security, cf. Article 32, para. 1, letters a, b and d.

It also follows from Article 32, subsection 2, that when assessing which level of security is appropriate, particular account is taken of the risks posed by the processing, in particular in the event of accidental or unlawful destruction, loss, alteration, unauthorized disclosure of or access to personal data that has been transmitted, stored or otherwise treated.

The Danish Data Protection Authority is of the opinion that the requirement cf. Article 32 for adequate security will normally mean that in systems with a large number of confidential information about a large number of users, higher requirements must be placed on the diligence of the data controller when ensuring that, among other things, a. there is no unauthorized access to personal data.

Copenhagen Municipality's handling of personal data of up to 3.7 million persons, including confidential and sensitive information, therefore places great demands on the municipality's diligence in relation to, among other things, to ensure that there is no unauthorized access to the information. This applies, among other things, to by a processing activity where such personal data is stored on a drive, and where it must therefore take place in a way that ensures that only employees with a work-related need have access to the information.

Furthermore, the Danish Data Protection Authority is of the opinion that the requirement for adequate security will normally mean that the data controller, in the event of a subsequent change/transfer of data on a large number of registered users, and how many employees may gain unauthorized access to the information due to a single human error, immediately extension of such a change/relocation tests whether access rights are limited to the relevant users and to the personal data that is necessary and relevant for the work-related needs of the users in question, or if there is wider access, that the data controller encrypts personal data. It is therefore the Danish Data Protection Authority's opinion that the data controller must introduce measures for disk swapping to verify that rights on folders and files on the new disk are set identically to the rights on the previous disk.

Based on the above and after an overall assessment of the circumstances of the case, including the time that has passed since the incident, the Data Protection Authority finds that there are grounds for expressing serious criticism of the Copenhagen Municipality's processing of personal data - by not having ensured that only employees with a work-related need had access to the drive, by having a set-up where a single employee's mistake could result in a breach that included 3.7 million persons, and by not having tested immediately after the transfer of the information whether the rights to the drive were correct, which would have immediately revealed the error, since all administrative employees had access – has not been done in accordance with the data protection regulation, article 32, paragraph 1. As a result of the above, no appropriate organizational and technical measures are found to have been taken to ensure a level of security suitable for the risks involved in the authority's processing of personal data.

Furthermore, the Danish Data Protection Authority does not consider that the fact that most of the data (99.8%) required a SAS installation to become readable can lead to a different assessment, as it is relatively easy to download a SAS installation on the network and thus utilize data. The Danish Data Protection Authority has noted that, according to the information, i.a. the periodic (quarterly) network scans are carried out for shared drives with correct rights, and that it was precisely such a scan that resulted in Copenhagen Municipality itself discovering the breach, and that its duration was limited to approx. Two months. The Norwegian Data Protection Authority has also noted that the Municipality of Copenhagen would implement a number of measures to prevent a similar situation from occurring again. However, the Danish Data Protection Authority notes at the same time that the Municipality of Copenhagen appears to have subsequently reported several breaches of personal data security, which consist of employees having access to personal data that they do not have a work-related need to access, and that the Danish Data Protection Authority therefore assumes that there at the Municipality of Copenhagen, the focus continues to be on ensuring, Page 1 of 2 that appropriate security measures are implemented to reduce the risk of such breaches and to ensure that potential breaches are detected quickly.

 

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons in connection with the processing of personal data and on the free exchange of such data and on the repeal of Directive 95/46/EC (general regulation on data protection).

\[2\] A SAS installation is a special format for management information and databases

\[3\] SAS files are also readable by those who have installed the correct software available on the web ie. if you have downloaded the right "viewer".

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

New decision

Copenhagen Municipality receives serious criticism for lack of security measures

Date: 07-05-2024

Decision Public authorities Serious criticism Reported breach of personal data security Notification of breach of personal data security Children Sensitive information Unauthorized access

The Danish Data Protection Authority has expressed serious criticism in a case where approx. 37,500 employees in the Municipality of Copenhagen were given unauthorized access to information on up to 3.7 million persons – including sensitive information about children.

Journal number: 2024-442-4149.

Summary

In connection with moving files with a large amount of data (disk swap), as a result of a human error, too broad user access was granted to the drive where data was stored. This resulted in approx. 37,500 employees in the municipality gained unauthorized access to information on up to 3.7 million people. The data related to a so-called SAS installation (format for management information, etc.), and it was only four SAS data warehouse developers who should have had access to the data. For the majority of those affected, there was, among other things, talk about name and address information, but in addition the files also contained information on well-being, language assessment and information on dentistry and health care relating to children.

The broad access existed for almost two months, until Copenhagen Municipality discovered the error during a routine security scan of the municipality's open drive. Access was then closed, and the incident was reported to the Danish Data Protection Authority as a breach of personal data security.

The municipality noted in connection with the case that, however, it was assessed that there was a very small probability that an ordinary IT user would come across the drive, as it required special prerequisites to find it. Network registration was thus switched off on the individual PCs, and this meant that the employees could not find the drive during ordinary searches on the PC.  This also meant that the URL had to be known, or that the drive had to be actively scanned. The municipality's investigations showed that a scanning tool that looked for open drives had not been used during the period of the breach. Examination of the administrative log also showed access only for persons with a work-related need. However, the municipality's logs of all administrative IT users' potential access to the drive did not go back so far in time that the municipality could definitively conclude that no employees other than those who had a work-related need had accessed the information during the period. The municipality also stated that the majority of SAS files were not immediately readable by those who had gained unauthorized access to them, and that this required that the data was first processed in a SAS program.

Serious criticism of lack of security measures

After an overall assessment of the circumstances of the case, including the time that has passed since the incident, the Danish Data Protection Authority found grounds to express serious criticism that the Municipality of Copenhagen's processing of personal data had not taken place in accordance with Article 32, paragraph 1 of the Data Protection Regulation. 1, on processing security. Thus, the Danish Data Protection Authority did not find that the municipality had taken appropriate organizational and technical measures to ensure a level of security suitable for the risks involved in the authority's processing of personal data.

The Danish Data Protection Authority emphasized that the municipality had not ensured that only employees with a work-related need had access to the drive, that there was a set-up where a single employee's mistake could result in a breach that included 3.7 million. people, and that immediately after moving the information, it had not been tested whether the rights to the drive were correct, which would have immediately revealed the error, since all administrative staff had gained access to it.

The Danish Data Protection Authority is generally of the opinion that when new applications are developed or file drives are moved, it must initially be assessed whether it is necessary in the future to move and store the information in a personally identifiable form. If it is necessary for the purpose of the processing, a possible security measure could be for the data controller to ensure that the information is encrypted so that only a person entitled to access can read and unlock the information. A proprietary data format (such as a SAS format) cannot be equated with encryption, as there are often viewers or plugins that make it relatively easy to read the file formats in question.

For all development and maintenance tasks, it is also essential that, as part of the change process, it is required that those authorized to do so by the data controller check that the intended access control, control and logging work before the change is released for operation .   

The Danish Data Protection Authority also noted in the decision that the municipality carried out periodic (quarterly) network scans for shared drives with correct rights, and that the municipality stated that it would implement a number of measures to prevent a similar situation from occurring again. However, the Danish Data Protection Authority notes at the same time that the Municipality of Copenhagen appears to have subsequently reported several breaches of personal data security, which consist of employees having access to personal data that they do not have a work-related need to access, and that the Danish Data Protection Authority therefore assumes that there at the Municipality of Copenhagen, the focus continues to be on ensuring that appropriate security measures are implemented to reduce the risk of such breaches and to ensure that breaches are detected quickly.

Decision 

The Danish Data Protection Authority hereby returns to the case where the Municipality of Copenhagen reported a breach of personal data security to the Danish Data Protection Authority on 17 June 2021. The report has the following reference number:

ab0615a02eb16368f8f79143b90e83daae7ac961.

1. Decision

After an overall assessment of the circumstances of the case, including the time that has passed since the incident, the Danish Data Protection Authority finds that there are grounds for expressing serious criticism that the Municipality of Copenhagen's processing of personal data has not taken place in accordance with the rules in the Data Protection Regulation\[1\] article 32, subsection 1.

Below follows a closer review of the case and a rationale for the Data Protection Authority's decision.

2. Case presentation

On 17 June 2021, the Municipality of Copenhagen reported a breach of personal data security to the Danish Data Protection Authority.

The Danish Data Protection Authority received a follow-up to the notification on 10 July 2021.

By letter of 30 July 2021, the Danish Data Protection Authority requested additional information in the case. The Municipality of Copenhagen issued a statement on the matter on 20 August 2021 (dated 13 August 2021).

It appears from the submitted material that in connection with a routine scan on 15 June 2021 of Copenhagen Municipality's open file drive, it was found that there was access to a normally closed drive containing data, including personal data, related to a SAS installation\[2 \]. Due to the error, it was possible for employees to search for and open the site in question. Access was closed immediately after the error was detected.

It also appears that investigations have shown that the breach was due to human error, where an employee with administrator access mistakenly gave too broad access to the drive. The error is believed to have occurred when data was moved to a larger disk on April 17, 2021.

The following appears about the affected information:

"The total number of people who have been affected by the incident is max. 3,750,000.

On affected E-drives there are, among other things, the following information:

P-data Address information max 3,750,000 social security number Information about students incl. Deregistered students approx. 504,000 social security number Information about students' parents approx. 480,000 social security number Information about children in daycare incl. deregistered children approx. 303,000 social security number Information about the children's parents approx. 120,000 social security number Master information about staff approx. 126,000 social security number

Note – the above are only unique social security numbers. within the individual type of information – i.e. the number of social security number cannot be added together. For example, the 504,000 students' social security number is included. also in the P-data Address information data set.”

Furthermore, it appears that for the majority of the affected registered persons, this is name and address information, but in addition, the files also contain information about the institution/school, family relationships for the group of children/parents in the municipality and, in some cases, information about well-being, language assessment and information about dentistry and health care.

The Municipality of Copenhagen has stated that access has been too broad in the period from 19 April 2021 to 15 June 2021, and that there has been no access for persons outside the Municipality of Copenhagen.

During the period, the drive has been open to all administrative IT users in the municipality. At the time of the discovery of the breach, there was a total of approx. 37,500 administrative IT users in Copenhagen Municipality.

Access should have been limited to a user group (AD security group) in the Children and Youth Administration. The user group provides access to a total of four SAS Datawarehouse developers at Digitization and Data in the Child and Youth Administration.

When the breach was discovered, Koncern IT searched for clues in the administrative log, which goes back 35 days. The search only showed access from specific and identified individuals with an authorized work-related need to access the server and drive. However, the municipality's logs of all administrative IT users' potential access to the drive do not go back so far in time that the municipality can definitively conclude that no employees other than those who have a work-related need have accessed the server during the period.

Copenhagen Municipality has stated that the probability that an ordinary administrative IT user in the municipality would come across the drive is very small, as it would require special prerequisites for an ordinary user to find the drive. In this connection, the municipality has stated that network registration has been switched off on the individual PCs in the municipality. It cannot be activated by an ordinary IT user without special access or rights. This means that the employees cannot find the server via ordinary searches on the PC. This also means that the URL must be known or that the drive must be actively scanned. Security in Group IT periodically scans for open drives, as this is what an external attacker would do, and that's how the broad access was identified. The URL appears in the system's documentation, but it requires an intention to find it and copy it into a pathfinder. Copenhagen Municipality has therefore assessed that an ordinary IT user in the municipality would not have had the insight to find the open server.

Copenhagen Municipality has also demonstrated that no scanning tool was used that looked for open drives during the period of the broad access.

In addition, Copenhagen Municipality has stated that it is a very small subset of the total amount of data that has been available in plain text (0.2%). The remaining part of the data volume (99.8%) are SAS files\[3\] that require data to be processed in a SAS program, and this data has thus not been readable by a random administrative user in Copenhagen Municipality. The Municipality of Copenhagen has stated that the total amount of data, of which 0.2% has been available in plain text, amounted to 1,827 gigabytes calculated on 10 August 2021. In this connection, the Municipality of Copenhagen has noted that the amount of data changes daily in connection with ongoing data runs/ updates.

The 0.2% of the total amount of data consisted of 8,424 files distributed among the file types xsl, xlsx, xlsb and txt. The content of these files originates from a number of administrative systems and specialist systems and consists to a large extent of school and institutional data and to a lesser extent information from the municipal children's dental care and health care professional systems in the Municipality of Copenhagen.

In addition, Copenhagen Municipality has stated that for the data that contains personal data, it appears that the majority will contain information about children.

However, part of the 0.2% is also various types of aggregated report data and support data, for example organizational data used for management information.

Copenhagen Municipality has stated that data could be accessed via another SAS installation. In this context, the municipality has noticed that the municipality's entire network installation is monitored with the cyber security product "Darktrace", which would have detected and alerted if there had been an attempt to retrieve these SAS files.

The following appears about Copenhagen Municipality's measures before the incident:

"Rights management for the solution takes place through AD groups. Employees with a work-related need can thus be granted access to areas with personal data at cpr.nr level via membership of one or more so-called AD security groups. Periodic (quarterly) network scans are performed for shared drives with correct rights. There is real-time network monitoring with associated incident handling, which for example detects the movement of large amounts of data and unusual user behaviour. There are user instructions for data handling in the form of internal guidance, and training is provided to employees. Of more standard technical measures, we can mention: Perimeter security in the form of firewalls and VPN with two-factor authentication. Network isolation of servers, both with internal firewalls and microsegmentation. Access restriction on servers in the form of access control lists. Central server log collection in SIEM system.”

The following appears about Copenhagen Municipality's measures after the incident:

"Going forward, the Municipality of Copenhagen has, among other things, launched the following initiatives to avoid a similar situation occurring again:

Ensured that in the future it is logged to SIEM (SIEM stands for Security Information & Event Management and is a common term for a system that can collect logs from many different systems and is used to set up automated log follow-up) when there are changes to the server's rights and precise changes thus can be tracked and does not require interviews with employees. Instructions are issued to all employees in the municipality's Group IT that rights on shares or drives must not be changed without an order from the system owner. A joint administrative procedure is drawn up which describes the rules and responsibilities in connection with the creation of shares on servers. In continuation of the business process, the Children and Youth Administration also instructs employees and external consultants that all changes to rights on shares and drives must be created as orders in ServiceNow. The Norwegian Children and Youth Administration is revisiting the risk assessment for the processing of personal data on the server."

3. Reason for the Data Protection Authority's decision

Based on what the Municipality of Copenhagen has stated, the Data Protection Authority assumes that due to human error, an employee of the Municipality of Copenhagen with administrator access gave too broad access to a drive in connection with a disk swap on 17 April 2021, whereby all approx. 37,500 employees in the municipality had unauthorized access to information on up to 3.7 million registered, including information on well-being, language assessment and information on dentistry and health care for children.

On this basis, the Danish Data Protection Authority assumes that there has been unauthorized access to personal data, which is why the Danish Data Protection Authority finds that there has been a breach of personal data security, cf. Article 4, No. 12 of the Data Protection Regulation.

3.1. Article 32 of the Data Protection Regulation

It follows from the data protection regulation, article 32, subsection 1, that the data controller must take appropriate technical and organizational measures to ensure a level of security appropriate to the risks involved in the data controller's processing of personal data.

The data controller thus has a duty to identify the risks that the data controller's processing poses to the data subjects and to ensure that appropriate security measures are introduced to protect the data subjects against these risks. As an example of relevant measures, the provision highlights i.a. pseudonymisation and encryption, ability to ensure ongoing confidentiality and procedures for regular testing and assessment and evaluation of the effectiveness of the technical and organizational measures to ensure processing security, cf. Article 32, para. 1, letters a, b and d.

It also follows from Article 32, subsection 2, that when assessing which level of security is appropriate, particular account is taken of the risks posed by the processing, in particular in the event of accidental or unlawful destruction, loss, alteration, unauthorized disclosure of or access to personal data that has been transmitted, stored or otherwise treated.

The Danish Data Protection Authority is of the opinion that the requirement cf. Article 32 for adequate security will normally mean that in systems with a large number of confidential information about a large number of users, higher requirements must be placed on the diligence of the data controller when ensuring that, among other things, a. there is no unauthorized access to personal data.

Copenhagen Municipality's handling of personal data of up to 3.7 million persons, including confidential and sensitive information, therefore places great demands on the municipality's diligence in relation to, among other things, to ensure that there is no unauthorized access to the information. This applies, among other things, to by a processing activity where such personal data is stored on a drive, and where it must therefore take place in a way that ensures that only employees with a work-related need have access to the information.

Furthermore, the Danish Data Protection Authority is of the opinion that the requirement for adequate security will normally mean that the data controller, in the event of a subsequent change/transfer of data on a large number of registered users, and how many employees may gain unauthorized access to the information due to a single human error, immediately extension of such a change/relocation tests whether access rights are limited to the relevant users and to the personal data that is necessary and relevant for the work-related needs of the users in question, or if there is wider access, that the data controller encrypts personal data. It is therefore the Danish Data Protection Authority's opinion that the data controller must introduce measures for disk swapping to verify that rights on folders and files on the new disk are set identically to the rights on the previous disk.

Based on the above and after an overall assessment of the circumstances of the case, including the time that has passed since the incident, the Data Protection Authority finds that there are grounds for expressing serious criticism of the Copenhagen Municipality's processing of personal data - by not having ensured that only employees with a work-related need had access to the drive, by having a set-up where a single employee's mistake could result in a breach that included 3.7 million persons, and by not having tested immediately after the transfer of the information whether the rights to the drive were correct, which would have immediately revealed the error, since all administrative employees had access – has not been done in accordance with the data protection regulation, article 32, paragraph 1. As a result of the above, no appropriate organizational and technical measures are found to have been taken to ensure a level of security suitable for the risks involved in the authority's processing of personal data.

Furthermore, the Danish Data Protection Authority does not consider that the fact that most of the data (99.8%) required a SAS installation to become readable can lead to a different assessment, as it is relatively easy to download a SAS installation on the network and thus utilize data. The Danish Data Protection Authority has noted that, according to the information, i.a. the periodic (quarterly) network scans are carried out for shared drives with correct rights, and that it was just such a scan that resulted in Copenhagen Municipality itself discovering the breach, and that its duration was limited to approx. Two months. The Norwegian Data Protection Authority has also noted that the Municipality of Copenhagen would implement a number of measures to prevent a similar situation from occurring again. However, the Danish Data Protection Authority notes at the same time that the Municipality of Copenhagen appears to have subsequently reported several breaches of personal data security, which consist of employees having access to personal data that they do not have a work-related need to access, and that the Danish Data Protection Authority therefore assumes that there at the Municipality of Copenhagen, the focus continues and continuously is to ensure, Page 1 of 2 that appropriate security measures are implemented to reduce the risk of such breaches and to ensure that potential breaches are detected quickly.

 

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons in connection with the processing of personal data and on the free exchange of such data and on the repeal of Directive 95/46/EC (general regulation on data protection).

\[2\] A SAS installation is a special format for management information and databases

\[3\] SAS files are also readable by those who have installed the correct software available on the web ie. if you have downloaded the right "viewer".
