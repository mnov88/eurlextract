ST. OLAVS HOSPITAL HF
 PO Box 3250 Torgarden
 7006 TRONDHEIM

Their reference Our reference Date
2020/16384 2 20 / 01813-4 20.09.2021

Decision on infringement fine

The Data Inspectorate refers to three non-conformance reports from St. Olav's hospital HF received on 10.03.2020.

The discrepancies are related to the lack of protection of personal data.

On 20.11.2020, St. Olavs hospital HF was notified of a possible decision on infringement fines and
order. The company has commented on the notification in a letter with an attachment of 15.12.2020.

We apologize for the long processing time.

 1. Decision on infringement fines
The Data Inspectorate has today made the following decision:

        Pursuant to the Privacy Ordinance, Article 58, paragraph 2, letter i, cf.

        the Personal Data Act § 26 and the Patient Records Act § 29, is imposed on St. Olav's hospital
        HF a violation fee of 750,000 NOK - seven hundred and fifty thousand Norwegian kroner
        To the Treasury, for violation of the requirements for security and internal control by

        processing of personal data, cf. the Privacy Ordinance, Article 32 and Article
        24, cf. the Personal Data Act § 26 first paragraph, and the Patient Records Act §§ 22 and 23.

 2. Description of the non-conformance reports

 2.1 Deviation report 1
The discrepancy occurred in the period 13.01.2011 to 27.01.2020 and was discovered on 21.11.2019.

The non-conformance report states that the non-conformance occurred at the cardiology department. About. 21 000

reports (pdf files) had been stored in folders on test server.

The reports had the following content:

     anamnesis (patient's own statement)
     performed procedures
     hemodynamic pressure

     coronary arteriography

Postal address: Office address: Telephone: Org.nr: Homepage:
PO Box 458 Sentrum Trelastgata 3 22 39 69 00 974 761 467 www.datatilsynet.no 1
0105 OSLO 0191 OSLO  equipment summary
     complications
     medication during procedure
     hemo-images
     name of the performing doctor and nurse

The discrepancy arose in connection with the upgrade to a new treatment-oriented health register for
cardiac medicine laboratory. In connection with the conversion of reports from the outgoing
the system of the new system, a test server was used. When the reports were finished
converted, they were placed in a folder on the server that was to be temporarily forwarded to the reports
was copied over to new system. However, the reports in the folder have not been deleted. In addition,

it made an error so that all authenticated users could access the folder.

The folder has not been distributed, but it has been possible to actively search for the files. Potentially have
all authenticated users in Helse Midt-Norge RHF could go in and read and / or copy
the contents of the folder without this being logged. The extent of patients that is potentially
the framework is large, and the hospital has no logs that can say anything about whether anyone has been inside
in the files.

The report files have now been deleted. The hospital has reviewed the systems in use today and
which have shared folders. The access control to the folders has been reviewed and checked, so that
only those with service needs have access.

 2.2 Deviation report 2
The discrepancy occurred in the period 17.05.2015 to 28.01.2020 and was discovered on 21.11.2019.

The deviation report states that reports from medical equipment (pulse oximeter for
long-term measurement of oxygen saturation and heart rate) has been stored in a file area that has been
available to everyone in Helse Midt-Norge RHF with an authenticated and active AD user. Connection
via Remote Desktop has not been actively made available, but anyone with knowledge of it has
could try to connect to the server and search for the folder. There is no log that can provide
information about whether someone has used the access. The hospital states that the routines

for access control is not followed.

The reports have the following content:
     first name and last name
     social security number

     date of measurement
     graph and table showing heart rate and oxygen saturation

The reports are currently in the same area, but the area has been access-controlled. Furthermore, it is
performed audit of access to folders for storing reports from medical devices, and it is
checked that only those with service needs have access.

The hospital has planned to use a technical solution that automatically imports the reports to
the patient's master record and then deletes the report from the folder area.

                                                                                             2 2.3 Deviation report 3
The discrepancy occurred in the period 01.01.2018 to 09.12.2019 and was discovered on 21.11.2019.

The deviation message states that the password for the databases was in clear text in a file on the server. Active
users in Helse Midt-Norge RHF's infrastructure has had the opportunity to connect, first via
Remote Desktop to server and then look up file with password for database. The access to
server is now limited to those who have service needs only. After review of

database logs, there are no indications that someone has used a username / password to
log in to the databases.

It appears that the discrepancy includes health and personal information about persons treated at RUS
and the BUP clinic, where details of the course of treatment appear.

St. Olavs hospital HF has outlined the following measures for the two databases mentioned:

     Access to the Bupdata application is limited to a given number of users (registered by
        The BUPs), according to the delegation model.
     Access to Bup databases is limited to responsible administrative users
        associated with the system (also according to the delegation model).

     Access to the Rusdata application is limited to a given number of users (registered by
        clinics), according to the delegation model.
     Access to server login via Remote Desktop is now controlled by delegation model. Only
        administrator users who need access in connection with operation and conversion have
        access.

 3. Statement from St. Olavs hospital HF
In connection with the notification of the decision dated 20.11.2020, we asked St. Olavs hospital HF several
questions related to the hospital's routines:

     What routines for access control did St. Olavs hospital HF have at the time then
        the discrepancies were discovered, and what routines does the hospital have today?

     Did St. Olav's hospital HF have a treatment protocol at the time when the deviation was
        discovered? We request that the minutes be sent. We also want submitted
        updated treatment protocol as of today.
     It appears from the deviation reports that the deviations were discovered in November 2019, while they
        was first reported to the Norwegian Data Protection Authority in March 2020. We ask for the hospital's comment on this.
     It appears from the deviation reports that two of the deviations persisted until the end of January 2020,

        that is, just over two months after they were discovered. We ask for the hospital's comment
        for this.

In the reply letter dated 15.12.2020, the hospital has explained the conditions. Attached to the letter followed
copy of St. Olavs hospital HF's written routines / procedures.

Regarding the routines for access control, the hospital has linked the answer to access control for

creation of file areas for storing information for research, quality assurance or
student projects. Attached were the routines for information security for research and

                                                                                               3 student projects that applied from October 2015 to May 2020 and from May 2020, respectively. Vi
understands that St. Olavs hospital HF has not had its own routines for access control of
quality assurance data.

Furthermore, it appears that St. Olavs hospital HF started late with the work of establishing one
processing protocol in accordance with Article 30 of the Privacy Regulation
deviation, the hospital had not compiled an overview of all processing of personal data.
The hospital now uses Normen's template for protocols, which will be used at clinic level.

With regard to the delay in reporting deviations to the Norwegian Data Protection Authority and that the deviations persisted

time after they were discovered, the hospital points out that the discrepancies were discovered in connection with
The Office of the Auditor General's control of the health trusts' prevention of attacks on their ICT systems.
The Office of the Auditor General produced a report after the audit. St. Olavs hospital HF had to join
Health Central Norway ICT analyze the report to identify any discrepancies
were present and were required to report.

After the Office of the Auditor General's inspection, the hospital prepared a priority action plan, and several technical ones
security measures were implemented by Health Central Norway ICT. Among other things, the hospital introduced a new one
password routine, limitation of allowed number of failed login attempts, system for
monitoring and log analysis, reducing the number of users and cleaning up user access as well
securing information sharing in systems where this was not sufficiently built-in.

 4. Legal basis for the assessment
The Norwegian Data Protection Authority monitors compliance with the privacy regulations, cf. the personal data
section 20 of the Act and Article 57 of the Privacy Ordinance.

We are also the supervisory authority according to the Patient Records Act, cf. section 26 of the Act. The Patient Records Act
applies to all processing of health information that is necessary to, among other things, provide and
quality-assured health care for individuals, cf. section 3 of the Act.

 4.1 On choice of law
The new Personal Data Act, which incorporates the EU Privacy Regulation into Norwegian law,

entered into force on 20.07.2018. The law also repealed the Personal Data Act (2000) and the rules
in the Personal Data Regulations (2000).

This case concerns matters that arose in 2015, ie before the entry into force of
the Personal Data Act (2018), but which has persisted in the time since. We must therefore take a stand

to whether the case is to be assessed in accordance with the Personal Data Act (2018) or the Personal Data Act
(2000).

There is a special transitional rule in the Personal Data Act (2018) § 33 first paragraph
infringement fine, which reads:

1
 https://www.ehelse.no/normen/normen-for-informasjonssikkerhet-og-personvern-i-helse-og-omsorgssektoren

                                                                                                 4 «The rules on the processing of personal data that applied at the time of the action,
        shall be used as a basis when a decision is made on an infringement fee. The legislation on
        the time of the decision shall nevertheless be used when this leads to a more favorable one
        result for the person responsible ».

The question of choice of law must therefore be assessed on the basis of what is considered the time of action.

The relevant deviation arose before the entry into force of new regulations on 20.07.2018, but persisted
until the discrepancy was discovered in January 2019. The time of action in this case has thus
persisted over time and in the time after the Personal Data Act (2018) came into force. It follows then

of the Personal Data Act (2018) § 33 that the case shall be assessed in accordance with this Act.

We also refer to the preparatory work for the Personal Data Act (2018), Prop. 56 LS (2017-2018)
page 196, where the Ministry states, among other things, the following on the question of choice of law between
the Personal Data Act (2000) and the Personal Data Act (2018):

        «The starting point will be that decisions by the Data Inspectorate and the Privacy Board will have to
        is made on the basis of the material rules in force at any given time ».

The same follows from the Privacy Board's practice in cases that were submitted to the board before the new law
entered into force, but which were dealt with after the entry into force; see for example PVN-2018-05 and

PVN-2018-06.

Against this background, it is in our assessment clear that the case must be assessed accordingly
the Personal Data Act (2018) and the Privacy Ordinance.

 4.2 The basic principles for the processing of personal data
The basic principles for the processing of personal data are set out in
Article 5 of the Privacy Regulation. We refer in particular to Article 5 (1) (f), where it
appears:

        «1. Personal information shall (…)

           f) processed in a manner that ensures sufficient security for the personal data,
              including protection against unauthorized or unlawful processing (…), using appropriate means
              technical or organizational measures ("integrity and confidentiality") ".

It is the data controller's responsibility that the principles are complied with, and the data controller must be able to

demonstrate this, cf. Article 5 (2).

Health information is a so-called special category of personal information, cf.
Article 9 (1) of the Privacy Regulation. Health information where children are patients must be taken into account
as particularly sensitive, as children have a special right to protection under the privacy regulations. 2

2
 See Advocate 38 for the Privacy Ordinance.

                                                                                                 5 4.3 The requirements for personal data security and management systems
  4.3.1 The Privacy Ordinance
Article 32 of the Privacy Regulation regulates the security requirements when processing
personal information. The following is an excerpt from the relevant sections of Article 32:

        «1. Taking into account the technical development, implementation costs and
        the nature, scope, purpose and context of the treatment, as well as the risks of

        varying degrees of probability and severity for the rights of natural persons and
        freedoms, the data controller and the data processor shall implement appropriate
        technical and organizational measures to achieve a level of security that is appropriate with
        consideration of the risk, including, inter alia, as appropriate, (…)
           b) ability to ensure lasting confidentiality, integrity, availability and
              robustness in treatment systems and services, (…)
           d) a process for regular testing, analysis and assessment of how effective

              the treatment's technical and organizational security measures are.

        2. In assessing the appropriate level of safety, special consideration shall be given to the risks
        associated with the processing, in particular as a result of (…) unauthorized disclosure of
        or access to personal information that has been transferred, stored or otherwise
        treated".

The obligation to implement appropriate technical and organizational measures is correspondingly stated in
Article 24 of the Privacy Regulation, which regulates the responsibilities of the data controller separately.

Pursuant to Article 30 (1) of the Privacy Regulation, the data controller has a duty to keep minutes
over the treatment activities performed. The protocol shall, among other things, contain one
description of the categories of personal data processed, cf. Article 30, paragraph 1, letter

c, and the categories of recipients to whom the personal data will be disclosed, cf. Article 30 no.
1 letter d.

4.3.2 Patient Records Act
The requirements for the data controller when processing journal information are also stated in
patient record law.

The Patient Records Act § 22 first paragraph on information security reads:

        «The data controller and the data processor shall carry out technical and organizational tasks
        measures to achieve a level of safety that is suitable with regard to the risk, cf.
        Article 32 of the Privacy Regulation
        otherwise provide access control, logging and subsequent control. ».

The Patient Records Act § 23 on internal control reads:

        «The data controller shall implement technical and organizational measures to ensure and
        demonstrate that the processing is carried out in accordance with the Privacy Ordinance,
        the Personal Data Act and this Act, cf. Article 24 of the Regulation.

                                                                                                6 The data controller shall document the measures. The documentation must be
        available to the employees of the data controller and the data processor.
        The documentation must also be available to the supervisory authorities.

        The Ministry may in regulations issue further provisions on internal control ».

 4.4 In particular on the imposition of infringement fines
Article 58 no. 2 letter i of the Privacy Ordinance, cf. the Personal Data Act § 26 other
paragraph, it appears that the Data Inspectorate may impose on public authorities and bodies
infringement fine under the rules of the Privacy Regulation Article 83 in case of violation
provisions in the regulations.

Article 83 of the Privacy Ordinance sets out the conditions for the imposition of a fee. The provision

contains, among other things, an overview of which aspects should be taken into account, both when it
it is considered whether an infringement fee should be imposed and in determining the size of the fee.
The relevant parts of Article 83 (1) and (2) are reproduced below:

        «1. Each supervisory authority shall ensure that the imposition of infringement fines in accordance with
        this Article for infringements of this Regulation referred to in paragraphs 4, 5 and 6 of each
        case is effective, stands in a reasonable relation to the violation and works

        deterrent.

        2. (…) When a decision is made on whether to impose an infringement fee and
        on the amount of the infringement fee, it must be duly taken into account in each individual case
        following:
        a) the nature, severity and duration of the infringement, taking into account

           the nature, scope or purpose of the treatment concerned and the number of registered persons who are
           affected, and the extent of the damage they have suffered,
        b) whether the infringement was committed intentionally or negligently,
        c) any measures taken by the data controller or data processor to
           limit the damage suffered by the data subjects,
        d) the degree of responsibility of the data controller or data processor, as taken
           with regard to the technical and organizational measures they have implemented in accordance with

           Articles 25 and 32,
        e) any relevant previous violations committed by the data controller
           or the data processor,
        (f) the degree of cooperation with the supervisory authority to remedy the infringement; and
           reduce the possible negative effects of it,
        g) the categories of personal data affected by the infringement,
        (h) the manner in which the supervisory authority became aware of the infringement, in particular whether and

           possibly to what extent the data controller or data processor has
           notified of the infringement,
        (i) if the measures referred to in Article 58 (2) have previously been taken against the person concerned
           data controller or data processor with respect to the same subject matter, that
           the said measures are complied with,

                                                                                                7 j) compliance with approved standards of conduct in accordance with Article 40 or approved
           certification mechanisms in accordance with Article 42 and
        k) any other aggravating or mitigating factor in the case, e.g. economic
           benefits gained, or losses avoided, directly or indirectly, as a result
           of the infringement ».

Article 83 also sets out the framework for the amount of the infringement fine. We show in this

in connection with Article 83 (4). The relevant parts of the provisions are:

        «In the event of violations of the following provisions, it shall be imposed in accordance with paragraph 2
        infringement fine of up to EUR 10,000,000 (…):
           (a) the obligations of the controller and the processor in accordance with
              Articles 8, 11, 25-39 and 42 and 43 ».

 5 The Data Inspectorate's assessment
In the following, we will explain our assessment of how different parts of
personal data security and privacy are taken care of with regard to the three discrepancies
St. Olavs hospital HF.

 5.1 Access control
St. Olavs hospital HF has stated that the routines for access control have not been followed in the three

the deviation cases. As a result, all active / authorized users in Health Central Norway have RHF
be able to acquire patient information they have not had an official need for. This suggests that
the routines have not been suitable for capturing the lack of access control.

The Norwegian Data Protection Authority assumes that St. Olav's hospital HF has not prevented unlawful access to a
comprehensive number of health information about patients at the hospital. Although the information has

has been stored in an area that requires some knowledge to search for / find, has the risk of
breaches of the confidentiality and integrity of the information have nevertheless been present.

This is a violation of Article 32 of the Privacy Regulation, cf. Articles 24 and 5, paragraph 1, letter f,
and the Patient Records Act § 22.

 5.2 Logging

In two of the non-conformance cases, St. Olavs hospital HF has not logged the activity in the file / folder area.
It is thus not possible to confirm and / or deny whether employees have used
the accesses. If the hospital had taken care of logging the activity and followed up on the logs
in a systematic way, the hospital could have followed up the activity and uncovered unauthorized access
and any compromise of patient information. The lack of logging is increasing
the risk of losing track of where patient information is located.

This is a violation of Article 32 of the Privacy Regulation, cf. Articles 24 and 5 (2), and
Patient Records Act § 23.

                                                                                                8 5.3 Overall assessment of the discrepancies
In November 2019, St. Olavs hospital HF revealed three different deviations there in detail
patient information has been available to employees without service needs. The discrepancies have
persisted for several years (from about two to about nine years).

Although the actual number is unknown, a large number of patients are affected, as the deviation from
the cardiology department alone applies to approx. 21,000 reports. Furthermore, one deviation applies

information on drug treatment and treatment in child and adolescent psychiatry. This is
health information that is most often perceived as particularly sensitive. We also point out that children have one
special requirements for protection under the privacy regulations. This makes the discrepancy serious.

As all active / authorized users in Health Central Norway RHF has potentially been able to do
notice, we assume that there is also a large number of employees who have had
unauthorized access.

Logs do not exist for two of the discrepancies, and it is thus not possible to reveal whether
wrongful postings have been made. This makes it difficult to assess the consequences of the discrepancy
for those affected.

The hospital has reviewed the systems that are in use today and that have shared folders. It is
now checked that only employees with service needs have access. Review of

access control is one of the measures St. Olavs hospital HF has implemented in collaboration with Helse
Central Norway ICT. The Data Inspectorate views positively that the discrepancies have been rectified and that the system for
folder sharing has been reviewed.

We also assume that St. Olavs hospital HF has introduced further internal control and
security measures such as a new password routine and limiting the number of failures allowed

login attempts, monitoring and log analysis system.

Furthermore, it appears that the hospital has now prepared a treatment protocol in line with the requirement in
Article 30 of the Privacy Regulation.

Overall, the Data Inspectorate views the implemented measures and the work of St. Olav's Hospital positively
HF has done to correct the discrepancies afterwards.

However, this does not change our conclusion that the hospital has violated basic requirements
personal data security in the Privacy Regulation Article 32, cf. Articles 24 and 5, and
Sections 22 and 23 of the Patient Records Act.

 5.4 Assessment of whether an infringement fee is to be imposed
The Norwegian Data Protection Authority has come to the conclusion that St. Olavs hospital HF has violated the Privacy Ordinance article

32, cf. Articles 24 and 5, and Sections 22 and 23 of the Patient Records Act.

The offense has largely occurred before the Personal Data Act (2018) and
the Privacy Regulation entered into force. The Data Inspectorate could also impose earlier

                                                                                                 9 infringement fee, cf. the Personal Data Act (2000) § 46, but the amount was then limited to
up to 10 times the National Insurance basic amount (currently approx. 1,010,000 NOK).

However, we refer to the discussion under section 3.1 and assume that the fee will be measured
according to new regulations. In principle, there is thus a basis for imposing St. Olav's hospital
HF a violation fee of up to 10,000,000 euros (currently approx. 106,000,000 NOK), cf.
Article 83 (4) of the Privacy Regulation. We will nevertheless ensure that the offenses have taken place

also in the period when previous privacy regulations applied.

Below we review the factors that we consider relevant for the assessment of whether
infringement fines must be imposed.

(a) the nature, gravity and duration of the infringement, taking into account it;
the nature, extent or purpose of the treatment concerned and the number of data subjects affected; and

the extent of the damage they have suffered
All the discrepancies have persisted for several years without being detected. Health information about a large
number of patients is affected; about. 21,000 reports from the cardiology department alone are included.
Furthermore, the information has been available to all active / authorized users in Helse Midt-
Norway RHF. For two of the discrepancies, there is no log, so it is not possible to detect
whether employees have made unlawful access to the information and / or about patient information
has gone astray.

b) whether the infringement was committed intentionally or negligently
St. Olavs hospital HF has stated that the routines for access control have been broken in connection with
the discrepancies. We consider the offense to be negligent. The CEO will, as the hospital
senior manager, be responsible for the negligent offense, cf. also the principle of liability in
Article 5 (2) of the Privacy Regulation.

c) any measures taken by the data controller or data processor to limit
the damage suffered by the data subjects
St. Olavs hospital HF has taken measures in connection with the three deviations, so that the information
no longer available to employees without service needs.

The hospital has also initiated several security measures related to passwords and login, file sharing,

monitoring and log analysis.

d) the degree of responsibility of the data controller or data processor, taking into account
the technical and organizational measures they have implemented in accordance with Articles 25 and 32
St. Olavs hospital HF has stated that the routines for access control have been broken. We have noticed that
all deviations concern the storage of patients' health information outside the patient record. Routines
has thus not been suitable for detecting deviations in this type of storage.

We assume that the hospital's work to correct the discrepancies has been aimed at storing
health information outside the patient record, for use in quality assurance.

                                                                                                10g) the categories of personal data affected by the infringement
Health information has been available to a large number of employees without service needs. After
Article 9 (1) of the Privacy Regulation, health information is designated as a special category
personal information, ie information with special protection requirements. The information also has
related to child and adolescent psychiatry. This increases the severity of the offense.

h) in what way the supervisory authority became aware of the infringement, in particular if and if so

the extent to which the data controller or data processor has notified
the infringement
St. Olavs hospital HF itself reported to the Data Inspectorate about the deviations after the hospital had
mapped that the deviations were notifiable.

 5.5 Assessment of the amount of the infringement fee
In assessing the size of the fee, we have emphasized that St. Olav's hospital HF has implemented measures

to ensure that shared folders are only available to employees with service needs. The hospital
has also done more work to introduce more relevant measures to improve
personal data security.

We have also ensured that the hospital itself reported the discrepancy to the Norwegian Data Protection Authority, even though the discrepancies
was first discovered after an external inspection by the Office of the Auditor General.

It is not known that the non-conformance cases have had specific consequences for individual patients, although
this is given less weight.

We have emphasized that the offense partly took place before the Personal Data Act (2018) and
the Privacy Regulation entered into force. Pursuant to the previously applicable Personal Data Act (2000)
the fee was limited to a maximum of approx. NOK 1,010,000.

In this case, a greater amount of health information has been available to all
active / authorized users in Helse Midt-Norge HF for several years. St. Olavs hospitals HFs
access control routines have not been suitable for capturing the relevant deviations, like all
applies to the storage of health information outside the patient record.

The Danish Data Protection Agency has come to the conclusion that an infringement fee of NOK 750,000 is reasonable in this

the case.

 6 Right of appeal
The decision on infringement fines can be appealed within three weeks of receiving this letter,
cf. Sections 28 and 29 of the Public Administration Act.

If we uphold our decision after a possible appeal, the case will be forwarded to

The Privacy Board for decision, cf. the Personal Data Act § 22.

                                                                                              11If you have any questions, you can contact caseworker Susanne Lie (tel. 22 39 69 57,
e-mail suli@datatilsynet.no).

With best regards

Bjørn Erik Thon
director
                                                                Susanne Lie
                                                                senior legal adviser

The document is electronically approved and therefore has no handwritten signatures

Copy to: ST. OLAVS HOSPITAL HF, Stein Gilde

                                                                                          12
