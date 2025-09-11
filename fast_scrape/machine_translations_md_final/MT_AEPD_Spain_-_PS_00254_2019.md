Procedure No.: PS/00254/2019
DECISION ON DISCIPLINARY PROCEEDINGS
From the procedure instructed by the Spanish Data Protection Agency and based on the following
BACKGROUND
FIRST: On 13/12/2018, a security breach notification letter was received from VOX ESPAÑA (hereinafter VOX) informing that they had become aware, through social networks, of a computer attack carried out by the Group \*\*\*GRUPO.1, on 12 December 2018 at 19:30, which allowed access to the entity's news subscriber database.
The information accessed corresponds to basic data and VOX considers that there may be some thirty thousand affected
Upon learning the facts, VOX hired a specialized forensic service and proceeded to isolate the compromised database.
SECOND: In view of the aforementioned communication, the S.D.G. for Data Inspection proceeded to carry out previous investigative actions, being aware of the following points:
1. On December 13, 2018, the Data Inspectorate gave access to various news items published on the \*\*\*URL.1, \*\*\*URL.2, \*\*\*URL.3 websites, in which the attack carried out by the \*\*\*GRUPO.1 group on the VOX website servers and the access to data of some 30,000 users was highlighted.
The news reports that the group \*\*\*GRUPO.1 has published on its Twitter account (\*\*\*CUENTA.1) the attack on VOX's website and the information to which it has had access. On the other hand, VOX has also published on its Twitter account (\*\*\*CUENTA.2) the existence of the attack and that it has been brought to the attention of the State Security Forces.
2.	On December 13, 2018, the Data Inspectorate verified the existence of a "tweet" signed by \*\*\*ACOUNT.1 informing about the access to 30,000 VOX records and publishing a page with the name and surname data partially anonymized.
3.	On December 21, 2018, information was requested from VOX and the response received on January 15, 2019, indicated that this was the case:
3.1 Regarding the chronology of events
On December 12, 2018 at 7:30 pm, VOX was informed through social networks of a computer attack on the website hosted on an external server of the company 1&1 Internet España, S.L. (hereinafter 1&1) with whom you have a contract as a processor.
The attack was carried out by the Group \*\*\*GROUP.1 as published on its Twitter account \*\*COUNT.1
VOX proceeded to disable the equipment attacked and to report the security incident to the Spanish Data Protection Agency on 13 December and to formalise a complaint with the Guardia Civil on 14 December.
VOX contacts the hosting company 1&1 and the entity S21Sec specialized in security for the investigation of the cyber attack.
VOX states that the data affected correspond to the database of subscribers to news of the party for the sending of newsletters that maintained 30228 records.
On December 14 at 8:36 p.m., a message was sent to all the members of the group indicating the attack on the website.
VOX states that they have no knowledge of the use by third parties of the data stolen in the cyber attack.
3.2 With regard to the category of data concerned
VOX states that "The data stolen by the hackers are data from the processing of subscribers to the party's notices, they are not specially protected data, it is simply a general informative processing of the party's activities and agenda, which does not imply either political or ideological affiliation (...) it is simply a processing for sending an informative newsletter to interested parties".
In the document of the Registry of Processing Activities, regarding the processing of data for the sending of newsletters, the name and surname, postal or electronic address and telephone number appear in the section "Data category" and sub-section "Identification data". And in the "Sensitive Data" sub-section "Does not exist".
In the Risk Analysis document, in the section "Identification of personal data processing", with regard to processing for sending newsletters, it appears as a BASIC category.
3.3 With regard to actions taken to minimize the incidence
Disabling the form where data is collected for newsletter subscribers.
In this regard, on 13 December 2018, the Data Inspectorate accessed the VOX website at \*\*\*URL.4
verifying that the message "Subscriptions in maintenance operation" appears in the subscription option without asking for any personal data.
Delete all data from the attacked database.

3.4 Regarding the audit report on the website under attack
The web site that is the object of the attack responds to the address \*\*\*URL.4 which navigates under a secure certificate that encrypts all communications between the web server and the Internet and is developed with the latest version of "php stable" (a programming language that allows information to be processed on the server and the information already processed to reach the user) which is regularly updated for possible security vulnerabilities.
It has an anti-injection system of SQL orders and an Intrusion Prevention System (IPS).
Only TCP 80 (the port to which the client (user) requests arrive) and TCP 443 (which uses the secure transfer protocol (HTTPS)) are open.
3.5 With regard to the impact report.
VOX has submitted to this Agency a report made by the company S21Sec hired to analyze the causes of the security incident. It is clear from this report:
S21Sec reports that:
A basic automated security analysis has been carried out and a total of 22 vulnerabilities have been found, one of which is of a serious nature and two of a medium nature, which have been referred to those responsible for their 
- A basic analysis of the source code of the server application has been performed, finding several serious confirmed vulnerabilities that need to be fixed and that are generally related to the validation of input parameters, and that should be corrected as soon as possible.
- Some security weaknesses have been identified and these are set out in the recommendations section. These are considered particularly important to address as soon as possible, given that the profile of the server is considered to be high risk.
One of the vulnerabilities that has been ruled as serious "could allow an attacker to recover username and password by intercepting an existing connection".
The report describes the vulnerability as "the application does not check the input parameters and can be used to infect users and for session theft".
S21Sec concludes that, although the tools used by the attackers could not be 100% secured, they consider that it could have been an injection of SQL via the system vulnerabilities and the possible access to directories of the old web server where web backups with data accessed by the attackers could have been dumped.
S21Sec recommends a series of technical measures and an in-depth analysis of the website as it considers that it will continue to be the target of hacking and spying campaigns.
3.6 Regarding the final resolution of the incident
Subscription forms are disabled.
In this regard, on February 12, 2019, from the Data Inspection, the VOX website was accessed at \*\*\*URL.4 verifying that the message "Subscriptions in maintenance operation" appears in the subscription option without requesting any personal data.
And on March 18, 2019, from the Data Inspection, a new access to the web \*\*\*URL.4 has been made verifying that in the subscription option the message "Subscriptions in maintenance operation. We are doing maintenance work to improve our service, we will soon be available. Sorry for the inconvenience."
 4.	On May 30, 2019, a written request for information was sent to VOX in order to find out about the improvements implemented after the incident and the report issued by the company S21Sec and the response received on
June 13, 2019 is released:
Implementation of a waf system (web application firewall) that analyzes traffic between web entry ports, eliminating various threats, including
or SQL injections.
o XXS attacks (injection by which an attacker manages to execute
code in the browsers of users accessing the website).
o Denial of service attacks.
o Zero Days Attacks (day zero attack that allows malicious code to be introduced into the system).
o Network traffic control.
Implementation of an anti-trapping control system that allows, among others, to block the ports of access to the web that are not necessary.
Implementation of redundant systems (firewall, anti-denial of services...)
Implementation of a security module that performs a filtering of incoming requests to the web and applies different actions according to the request (transmitted contents, Trojans, mail injections, vulnerabilities in pdf files...)
For the execution of processes in the web server there is a unique user and password. In the database there is a user and password for the query execution and another one for the database engine.
The web applications have been implemented in a Wordpresss CMS (software system that provides authoring and collaboration tools for websites) that manages all the pages, users, requests, forms and to which all the most common vulnerabilities of the CMS have been filtered. User data is not in that CMS.
All requests from web users use a secure HTTPS channel with a digital SSL certificate, making communications between users and the server safe.
Daily backups of the databases encrypted and stored in three different locations
PROVEN FACTS
UNO.- On 13/12/2018, from the Data Inspectorate, access is given to various news items published on the \*\*\*URL.1, \*\*\*URL.2, \*\*\*URL.3 websites in which the attack carried out by the \*\*\*GRUPO.1 Group on the VOX website servers and the access to data of some 30,000 users is highlighted.
The news reports that the group La Nueve has published on its Twitter account (\*\*\*SCORE.1) the attack on VOX's website and the information to which it has had access. On the other hand, VOX has also published on its Twitter account (\*\*\*SCORE.2) the existence of the attack and that it has been brought to the attention of the State Security Forces.
TWO - On 13/12/2018, the Data Inspectorate verified the existence of a "tweet" signed by \*\*\*AUNT.1 informing about the access to 30,000 VOX records and publishing a page with the name and surname data partially anonymized.
THREE - VOX proceeded to disable the attacked equipment and to transfer the security incident to the AEPD, on 13/12/2018 and to formalize a complaint to the Guardia Civil on 14 December.
FOUR. - On 14/12/2018 at 20:36 a message was communicated to all members indicating the attack on the website.
FIVE - In the S21Sec Report commissioned by VOX to analyze the causes of the security incident, the following is indicated:
A basic automated security analysis has been carried out and a total of 22 vulnerabilities have been found, one being of a serious nature and two of a medium nature, which have been sent to those responsible for correcting them.
- A basic analysis of the source code of the server application has been performed, finding several serious confirmed vulnerabilities that need to be fixed and that are generally related to the validation of input parameters, and that should be corrected as soon as possible.
- Some security weaknesses have been identified and these are set out in the recommendations section. These are considered particularly important to address as soon as possible, given that the profile of the server is considered to be high risk.
One of the vulnerabilities that has been ruled as serious "could allow an attacker to recover username and password by intercepting an existing connection".
The report describes the vulnerability as "the application does not check the input parameters and can be used to infect users and for session theft".
-S21Sec concludes that, although the tools used by the attackers could not be 100% secure, they consider that it could have been an injection of SQL via the system vulnerabilities and the possible access to directories of the old web server where web backups could have been dumped with data to which the attackers had access.
-S21Sec recommends a series of technical measures and an in-depth analysis of the web as it considers that it will continue to be the target of hacking and spying campaigns.
SIX - On 13/06/2019, VOX provided a letter containing the measures adopted as a result of the report by S21Sec.
SEVEN - On 12/10/2019 VOX presented two reports from HADOQ IT, S.L, and SERVYTEC NETWORKS, S.L., which show that the detected vulnerabilities have been solved and an optimum level of security has been achieved.
LEGAL FOUNDATIONS
I
The Director of the Spanish Data Protection Agency is competent to resolve this procedure, in accordance with the provisions of Article 58.2 of the RGPD and Articles 47 and 48.1 of the LOPDGDD.
II
Article 4.12 of the RGPD states that "breach of security of personal data" means any breach of security resulting in the accidental or unlawful destruction, loss or alteration of personal data transmitted, stored or otherwise processed, or the unauthorized disclosure of or access to such data.
Article 33.1 of the RGPD states the following:
In the event of a breach of the security of personal data, the controller shall notify the competent supervisory authority in accordance with Article 55 without undue delay and, if possible, no later than 72 hours after becoming aware of the breach, unless the security breach is unlikely to pose a risk to the rights and freedoms of natural persons. If the notification to the supervisory authority does not take place within 72 hours, it shall be accompanied by an indication of the reasons for the delay.
From the actions carried out, it can be seen that VOX informed this Spanish Data Protection Agency the day after the violation of personal data occurred, in compliance with the provisions of Article 33.1 of the RGPD.
III
Article 32 of the RGPD states the following:
Having regard to the state of the art, the costs of implementation, and the nature, extent, context and purposes of the processing, as well as to the risks of varying degrees of probability and seriousness for the rights and freedoms of natural persons, the controller and processor shall implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk, including, where appropriate, by means of
(a) the pseudonymisation and encryption of personal data
(b) the ability to ensure the continuing confidentiality, integrity, availability and resilience of processing systems and services;

(c) the ability to restore the availability of and access to personal data quickly in the event of a physical or technical incident;
(d) a process of regular verification, evaluation and assessment of the effectiveness of technical and organisational measures to ensure the security of processing.
2.	In assessing the adequacy of the level of security, particular account shall be taken of the risks presented by the processing of data, notably as a result of the accidental or unlawful destruction, loss or alteration of, or unauthorized disclosure of or access to, personal data transmitted, stored or otherwise processed. (The underlining is from the Spanish Data Protection Agency)
From the actions carried out, it has been verified that the security measures that the investigated entity had in place in relation to the data it was processing, were not adequate at the time of the data breach, since, according to the report provided (...) several serious confirmed vulnerabilities were found that must be corrected and that in general have to do with the validation of the input parameters, and that must be corrected as soon as possible (...)
The consequence of this lack of adequate security measures was the public exposure on the Internet of the personal data of subscribers for the reception of information related to the activity of the person responsible. In other words, those affected have been deprived of control over their personal data.
IV
Article 28 of the LOPDGDD establishes the following:
1.	The persons responsible and in charge, taking into account the elements listed in Articles 24 and 25 of Regulation (EU) 2016/679, shall determine the appropriate technical and organisational measures to be applied in order to guarantee and prove that the processing is in accordance with the aforementioned regulation, with this organic law, its implementing rules and the applicable sectoral legislation. They shall in particular assess whether the data protection impact assessment and the prior consultation referred to in Section 3 of Chapter IV of that Regulation are appropriate.

2.	For the adoption of the measures referred to in the previous paragraph, the controllers and processors shall take into account, in particular, the higher risks that could occur in the following cases:
(a) Where the processing may give rise to discrimination, identity theft or fraud, financial loss, damage to reputation, loss of confidentiality of data subject to professional secrecy, reversal of which is not possible
of pseudonymisation or any other significant economic, moral or social harm to those affected.
b) When the processing may deprive the data subjects of their rights and freedoms or may prevent them from exercising control over their personal data.
c) When the processing is not merely incidental or ancillary to the special categories of data referred to in Articles 9 and 10 of Regulation (EU) 2016/679 and 9 and 10 of this Organic Law or of data relating to the commission of administrative offences. (...) (The underlining is from the Spanish Data Protection Agency.)
V
Recitals 51 and 75 of the RGPD state the following:
(51) Special protection is due to personal data which, by their nature, are particularly sensitive with regard to fundamental rights and freedoms, since the context of their processing could entail significant risks for fundamental rights and freedoms.
(75) Risks to the rights and freedoms of natural persons, varying in severity and probability, may result from the processing of data that could lead to physical, material or non-material harm, in particular
(...) in cases where the processing may give rise to problems of discrimination, identity theft or fraud; in cases where data subjects are deprived of their rights and freedoms or are prevented from exercising control over their personal data; in cases where the personal data processed reveals ethnic or racial origin, political opinions, (...) The emphasis is on the Spanish Data Protection Agency.
Contrary to what VOX indicates in its allegations to the agreement of initiation, this Agency is not considering the personal data subject to the security breach as ideological data that deserve to be subsumed under the umbrella of Art. 9 of the RGPD which, under the heading "Special categories of data", includes as such personal data that reveal (...), political opinions (...), but the type of data that has been exposed and the specific type of exposure, i.e., on the Internet, reveals a certain risk that must be taken into account, as indicated below.
The data in question is related to the subscription to a newsletter on the activity of the political party, and that, although it does not necessarily imply data of an ideological nature, the public exposure of this information through the Internet may give rise to certain combinations with other information - also published on the Internet or by other sources, such as comments on social networks, participation in forums, monitoring of certain user profiles on social networks, etc., - and place its headlines in a certain position in that sense.
On the possibility of combining information on a holder of personal data, we can mention Opinion 4/2007 of the Article 29 Working Party, "On the concept of personal data" which, although it analyses the possibilities of identifying someone through combinations with other information, is very clear when we refer to the risk of attributing a certain political ideology, starting only from the data of a subscriber to the information of that party, and combining it with another.
In particular, it indicates the following: (...)when we speak of "indirectly" identified or identifiable, we are generally referring to the phenomenon of "unique combinations", be they small or large. In cases where, at first sight, the available identifiers do not make it possible to single out a particular person, that person may still be 'identifiable', because that information combined with other data (whether or not the data controller is aware of them) will make it possible to distinguish that person from others. This is where the Directive refers to "one or more specific elements characteristic of their physical, physiological, mental, economic, cultural or social identity". Some of these characteristics are so unique that they make it possible to identify a person effortlessly (the "current Prime Minister of Spain"), but a combination of details belonging to different categories (age, regional origin, etc.) can also be conclusive enough in some circumstances, especially if one has access to additional information of a certain kind. This phenomenon has been extensively studied by statisticians, always ready to avoid any breach of confidentiality (...) Thus, the different pieces that make up the personality of the individual are brought together in order to attribute to him/her certain decisions (...)
As indicated above, in this case, a search on the Internet, for example, of the name, surname or e-mail address of one of the affected parties may offer results that, combined with the subscription to receive news about the activity of the political party, i.e. those who have been the object of the security breach, reveal to us a certain political ideology, the revelation of which does not have to have been consented to by the owner.
This possibility entails a risk that must be assessed when processing certain data with this characteristic and which increases the demand for the degree of protection in relation to the security and safeguarding of the integrity and confidentiality of these data.
This risk must be taken into account by the controller and, on the basis of this risk, measures must be established which would have prevented the controller from losing control of the data and, therefore, of the holders of the data who provided them to the controller.
VI
Article 71 of the LOPDGDD establishes the following under the heading "Infringements": The acts and behaviour referred to in the
Article 83(4), (5) and (6) of Regulation (EU) 2016/679, as well as those that are contrary to this Organic Law.
Article 73 of the LOPDGDD provides, under the heading "Offences considered serious", the following: In accordance with Article 83(4) of Regulation (EU) 2016/679, infringements that substantially infringe the articles mentioned therein, and in particular the following, are considered serious and shall be subject to a two-year limitation period:
(f) Failure to adopt appropriate technical and organisational measures to ensure a level of security appropriate to the risk of the processing, as required by Article 32(1) of Regulation (EU) 2016/679
In the present case, the circumstance provided for in Article 73(f) of the LOPDGDD referred to above applies.
VII
Law 40/2015, of October 1, on the Legal Regime of the Public Sector, establishes the following in Chapter III on the "Principles of Penalty Powers", in Article 28 under the heading "Responsibility
1. Only natural and legal persons and, where a law recognises them as having the capacity to act, groups of persons affected, unions and entities without legal personality and independent or autonomous assets, which are liable for them by reason of fraud or negligence, may be penalised for acts constituting an administrative offence
With regard to the subjective element in the commission of the infringement of Article 32 1 of the RGPD, it should be noted that VOX did not have adequate security measures in place to prevent the security breach that occurred, proof of which is, firstly, the meaning of the first security incident report where it is stated that several serious confirmed vulnerabilities were found that need to be corrected and which generally have to do with the validation of the input parameters, and as it appears from the report provided, they should be corrected as soon as possible, and secondly, the actions recommended to be taken and those they claim to have taken in their letter of 13 June 2019.

This lack of diligence in implementing appropriate security measures is the element of culpability that requires any imposition of sanctions.
With regard to the possible causes of the security breach, the following was stated in the report of entity S21Sec: Although it has not been possible to secure 100% of the TTP (Techniques, Tools and Procedures) used by the attacker, based on S21sec's experience in the analysis of previous gaps related to this actor, it can be concluded that the fundamental working hypothesis is access via application vulnerabilities, such as SQL injection, as well as
access to non-indexed directories of the old web server where backups of the web and data accessed by attackers could have been dumped.
With regard to computer attacks through techniques such as SQL injection, this Agency has issued other resolutions, for example, the relapse in the Penalty Procedure No. PS/00187/2017, where the following was stated:
(...)The intruder used a technique called "SQL injection" to gain access to the Planet Vtech system environment hosted by Amazon Web Services. SQL Injection is a type of attack known at least since 2003. It has been on the list1 of the 10 most used vulnerabilities between 2003 and 2011 and has affected hundreds of thousands2 of websites around the world despite the fact that its solution is known and simple to implement (...)
(...)There are vulnerabilities associated with SQL injection techniques documented since 20023. According to the OWASP14 classification, attacks based on these techniques have been among the top 10 since 2004.4 (…)
Likewise, the absence of consideration of the risk that unauthorized access by third parties to subscribers' data on information related to a political party, and its subsequent public dissemination, aggravates the guilty and punitive reproach of the conduct carried out by VOX.

From what has been indicated so far, it is clear that VOX has not been diligent in implementing security measures, taking into account the state of the art, the costs of implementation, and the nature, scope, context and purposes of the processing, as well as the variable risks of probability and seriousness for the rights and freedoms of natural persons ( art. 32 RGPD), which gives content to the guilty element of the typical and anti-legal action.
VIII
Article 58.2 of the RGPD provides the following:
2.	Each supervisory authority shall have all the following corrective powers as set out below:
(b) sanction any controller or processor with a warning where processing operations have infringed the provisions of this Regulation;
Article 76 of the LOPDGDD establishes the following under the heading "Penalties and corrective measures":
1.	The penalties provided for in Article 83(4), (5) and (6) of Regulation (EU) 2016/679 shall be applied taking into account the graduation criteria laid down in paragraph 2 of that Article.

2.	In accordance with Article 83(2)(k) of Regulation (EU) 2016/679, they may also be taken into account:
(a) the continuing nature of the infringement
b) The link between the activity of the offender and the processing of personal data.
(c) The benefits obtained as a result of the commission of the Violation.
(d) the possibility that the conduct of the person concerned could have led to the commission of the infringement.
(e) The existence of a merger by absorption process after the infringement has been committed, which cannot be attributed to the absorbing entity.
(f) Affecting the rights of minors.
(g) Have, where not mandatory, a delegate for the protection of data.
h) The submission by the person responsible or in charge, on a voluntary basis, to alternative dispute resolution mechanisms, in those cases where there are disputes between them and any interested party.
3. It shall be possible, in addition or alternatively, to take the other corrective measures referred to in Article 83(2) of Regulation (EU) 2016/679 where appropriate.

In the present case, in view of the diligence carried out by VOX with regard to the prompt communication of the security violation to this Spanish Data Protection Agency, as well as the initiation of actions aimed at minimizing the negative consequences of the aforementioned security violation, and as indicated in proven facts six and seven of this resolution, which show that following the security incident and the reports commissioned by the security experts, the entity has remedied the vulnerabilities identified and the level of security has been improved, it is considered lawful not to impose a penalty in the form of an administrative fine and to replace it with the penalty of a warning under Article 76. 3 of the LOPDGDD in relation to Article 58.2 b) of the RGPD.
Therefore, in accordance with the applicable legislation and assessed the criteria for the graduation of the sanctions whose existence has been accredited, the Director of the Spanish Data Protection Agency RESOLVES:
FIRST: IMPOSE on VOX ESPAÑA, with NIF G86867108, for an infringement of Article 32 of the RGPD, typified in Article 83.4 of the RGPD, a warning sanction.
SECOND: NOTIFY this resolution to VOX SPAIN.
In accordance with the provisions of Article 50 of the LOPDGDD, this Resolution will be made public once it has been notified to the interested parties.
Against this resolution, which puts an end to the administrative procedure in accordance with Article 48. 6 of the LOPDGDD, and in accordance with the provisions of Article 123 of the LPACAP, the interested parties may lodge, optionally, an appeal for reversal with the Director of the Spanish Data Protection Agency within a period of one month from the day following notification of this decision or directly an administrative appeal before the Contentious-Administrative Chamber of the National Court, in accordance with the provisions of Article 25 and paragraph 5 of the fourth additional provision of Law 29/1998 of 13 July 1998, regulating the Contentious-Administrative Jurisdiction, within a period of two months from the day following notification of this act, as provided for in Article 46. 1 of the aforementioned Act.
Finally, it is pointed out that in accordance with the provisions of art. 90.3 a) of the LPACAP, the final resolution may be suspended as a precautionary measure through administrative channels if the interested party expresses its intention to file a contentious-administrative appeal. If this is the case, the interested party must formally communicate this fact by writing to the Spanish Data Protection Agency, presenting it through the Agency's Electronic Register \[https://sedeagpd.gob.es/sede-electronica-web/\], or through any of the other registers provided for in Article 16.4 of the aforementioned Law 39/2015, of 1 October. It must also send to the Agency the documentation proving the effective filing of the contentious-administrative appeal. If the Agency is not informed of the lodging of the contentious-administrative appeal within two months from the day following the notification of the present decision, it shall terminate the precautionary suspension.
