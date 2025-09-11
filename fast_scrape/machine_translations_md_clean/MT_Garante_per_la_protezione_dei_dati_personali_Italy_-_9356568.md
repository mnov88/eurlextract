# Garante per la protezione dei dati personali (Italy) - 9356568

## Case Information

**Authority:** Garante per la protezione dei dati personali (Italy)

**Jurisdiction:** Italy

**Relevant Law:** Article 36 GDPRArticle 36(5) GDPR

**Type:** Other

**Outcome:** n/a

**Decided:** 01.06.2020

**Published:** 01.06.2020

**Fine:** None

**Parties:** n/a

**National Case Number/Name:** 9356568

**European Case Law Identifier:** n/a

**Appeal:** n/a

**Original Language(s):** Italian

**Original Source:** Garante per la protezione dei dati personali (in IT)

**Initial Contributor:** n/a

The Garante per la protezione dei dati personali has authorised the Ministry of Health to initiate the processing of the Covid-19 alert system (through the app "Immuni"). The Garante has, however, decided to impose a series of further measures aimed at strengthening the security of the processing.

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

Under Article 36(5) GDPR, the Italian Ministry of Health has submitted the Data Protection Impact Assessment of the "Covid-19 Alert System" (and its official mobile application “Immuni”).

The impact assessment, “supported by extensive documentation”, describes the technical and organizational measures adopted by the Ministry in order to ensure an appropriate level of security of the processing.

### Dispute

In accordance with Article 36 GDPR, the Garante must decide on the adequacy of the intended processing under the GDPR.

### Holding

After careful examination, the Garante authorized the processing whilst prescribing further safeguards to be implemented within thirty days of the decision. Main integrations requested are as follows:

\- Describe the algorithm punctually within the Data Protection Impact Assessment, specifying configuration parameters, assumptions and other factors, and making it available to the scientific community;

\- Users should receive clear and intelligible information about the algorithm, also by means of infographics and similar tools;

\- Inform users about the possibility that the app generates exposure notifications that do not always reflect an actual risk condition (false "positives");

\- Allow users to temporarily deactivate the app it through an easily accessible function;

\- Identify appropriate methods to protect the analytics in the app backend, avoiding any form of re-association to identifiable subjects, also adopting appropriate security measures and anonymisation techniques, to be identified according to the specific purposes actually pursued, in compliance with the principles of privacy by design and by default;

\- Integrate the impact assessment and privacy policies in relation to how to exercise the right of deletion and objection;

\- Integrate the impact assessment and describe in further details the role of processors and other subjects involved in the processing activities, highlighting the existence of any risks for the data subjects;

\- Only store the users' IP addresses to the extent strictly necessary for the detection of anomalies and attacks, and then have them deleted;

\- Implement measures to ensure the tracking of operations carried out by system administrators on operating systems, network and databases (not only log in/off).

  

## Comment

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Italian original. Please refer to the Italian original for more details.

```
Authorization provision for the processing of personal data carried out through the Covid-19 Alert System - Immune App - 1 June 2020

Register of measures
n. 95 of 1st June 2020

GUARANTOR FOR THE PROTECTION OF PERSONAL DATA

In today's meeting, in which dr. Antonello Soro, president, Dr. Augusta Iannini, vice-president, Dr. Giovanna Bianchi Clerici and Prof. Licia Califano, members, and Dr. Giuseppe Busia, secretary general;

Given the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data, as well as on the free movement of such data and which repeals Directive 95/46 / CE (General data protection regulation, hereinafter "Regulation");

Given the legislative decree 30 June 2003, n. 196, containing "Code regarding the protection of personal data, containing provisions for the adaptation of the national system to Regulation (EU) 2016/679 of the European Parliament and of the Council, of 27 April 2016, relating to the protection of individuals with regarding the processing of personal data, as well as the free movement of such data and which repeals Directive 95/46 / EC ", as amended by legislative decree 10 August 2018, n. 101 (hereinafter "Code");

Having regard to the "Guidelines 04/2020 on the use of location data and tools for tracing contacts in the context of the emergency related to COVID-19" of the European Data Protection Committee of 21 April 2020 (web doc. no. 9322516 );

Having regard to the documentation in documents;

Given the comments made by the secretary general pursuant to art. 15 of the Guarantor regulation n. 1/2000;

Speaker dr. Antonello Soro;

WHEREAS

The Ministry of Health, with the note of 28 May 2020, sent to the Guarantor, pursuant to art. 36, § 5, of the Regulations and art. 2-quinquiesdecies of the Code, the impact assessment on data protection, carried out pursuant to art. 35 of the Regulation, to be authorized to start the processing of personal data relating to the "Covid-19 alert system", established by art. 6 of the law decree 30 April 2020, n. 28 (on which the Authority expressed its opinion with provision no.79 of 29 April 2020, web doc. No. 9328050), "For the sole purpose of alerting people who have come into close contact with positive results and protecting their health through the envisaged prevention measures in the context of public health measures linked to the Covid-19 emergency" through a single platform national "for the management of the alert system of subjects who have installed, on a voluntary basis, a specific application on mobile telephony devices". The Ministry subsequently integrated the documentation sent, providing, on May 30, 2020, the text of the information that is intended to be made available to the interested parties, pursuant to articles 13 and 14 of the Regulation, in relation to the processing of personal data.

In the aforementioned impact assessment, accompanied by extensive documentation, the technical and organizational measures adopted by the Ministry were represented in order to guarantee, in particular, a level of security adequate to the high risks for the rights and freedoms of the interested parties.

1. The description of the Covid-19 Warning System

The Covid-19 alert system, which represents the national contact tracing system, is aimed at contrasting the spread of Covid-19 and is complementary to the ordinary contact tracking methods already in use within the National Health Service (SSN). This system, called Immuni, is composed of an application (hereafter "app" or "Immuni app") for mobile devices; the systems and technological and organizational components that allow it to function (hereinafter the "backend"), as well as an interaction service with healthcare professionals that uses the Healthcare Card System (hereinafter the "TS System").

The Ministry of Health is the owner of the processing of personal data collected within the aforementioned System and makes use of Sogei Spa and the Ministry of Economy and Finance, limited to the use of the TS System, which operate as data processors (art.28 of the Regulations).

The application, installed freely and voluntarily by the interested parties, allows users to be promptly informed that they have come into close contact with a subject tested positive at Covid-19, providing recommendations on the behavior to be taken and inviting them to consult their doctor.

Alongside this mechanism, further data are collected from users' devices (so-called analytics) for public health purposes, while helping to improve the functioning of the Covid-19 alert system.

The Immuni app is based on the use of Bluetooth Low Energy (BLE) technology and on the Exposure Notification Framework created by Apple and Google (hereinafter "Framework A / G"), made available on mobile devices with iOS and Android systems, which includes application programming interfaces (API - Application Programming Interface) and technologies at the operating system level to allow the tracking of contacts, without resorting to the geolocation of users' devices.

In the impact assessment, the Ministry of Health represented the need, shared with the Regions, for a preliminary testing phase of the digital contact tracing process in a limited number of Regions or autonomous Provinces.

1.1. The detection of exposure to the risk of contagion

In summary, it is represented that the Immune System uses a so-called "decentralized" approach to detect exposure to infection, described below, in which close contact with positive test subjects is notified directly to the user following a procedure carried out within the device on which the Immuni app is installed.

This procedure is possible because the data relating to interactions, occurred with bluetooth technology in peer-to-peer mode, with the devices of other users of the app are stored inside the device, in a cryptographically protected area. Immune detected in its vicinity.

A) Installation and configuration of the app

Each user, after downloading the Immuni app from the official Apple and Google app stores, proceeds with its installation and configuration, receiving a brief description of its operation and some characteristics of the processing of personal data carried out through infographics, accompanied by the links to the "privacy policy" and to the "terms of use" of the service.

The Immuni app, for its operation, does not require identification of the interested party by registering or creating an individual account of its users.

In this preliminary phase (onboarding), the user is asked to declare that he is at least 14 years old (minimum age to access the service), to indicate the province of domicile (which can subsequently be changed), as well as to grant the necessary permits. the functioning of the app (enabling notifications of exposure to Covid-19; display, for iOS devices only, of the local notifications generated by the app; activation of bluetooth and, for Android devices only, also of geolocation which, although not being used by the Immuni app, it is required by the operating system to be able to detect nearby bluetooth devices).

B) Interaction between users' mobile devices

Once these operations have been carried out, the app starts working and a temporary key (consisting of 128 bits) called TEK (Temporary Exposure Key) is generated randomly using cryptographic algorithms, which varies with daily frequency. Starting from each TEK, every 10 minutes, a proximity identification of the mobile device (consisting of 128 bits), called RPI (Rolling Proximity Identifier) ​​is generated. 144 RPI corresponding to it can be generated from each TEK, while in the presence of RPI alone it is not possible to trace the TEK from which it was generated.

These RPIs are broadcast in broadcast mode and are received by other devices reachable via bluetooth interface, effectively producing, in case of sufficient proximity, a mutual exchange of RPIs between the devices on which the Immuni app is installed, automatically recording them in their memory local, together with other ancillary data (metadata such as the date, duration and distance of the contact). In this way, the list of their TEKs (updated daily) and the list of RPIs of the devices of the other users with which they have come into contact are stored on each user's device. TEKs and RPIs are automatically deleted from the devices after 14 days from their storage.

C) Collection of TEKs from the device of a user tested positive to Covid-19

If a swab is successful, as part of the epidemiological investigation carried out by the health worker of the prevention department of the competent local health company, the patient is asked if he has installed the Immuni app. In this case, the operator will ask him if he wants to make his TEK available in order to alert the users with whom he came into close contact in the days preceding the diagnosis or the manifestation of the symptoms of the risk of contagion. If the patient wishes to do so, the healthcare professional requests the same to open the app and to use the function of generating the OTP code (One Time Password), consisting of 10 characters. The patient communicates this OTP code to the healthcare professional and waits for the authorization to load (so-calledupload) of their TEK. The healthcare professional, using a specific function made available on the TS System, enters the OTP code and the start date of the symptoms provided by the patient, which are thus transmitted to the Immuni backend. Within a limited time interval (2 minutes and 30 seconds), the patient must complete the loading procedure of the TEK generated on his device in the last 14 days, which are sent to the Immuni backend which, after verification of the OTP, processes them for identify, on the basis of the starting date of the symptoms, only the TEK generated on the days in which the patient, on the basis of the declared onset date of the symptoms, must be considered contagious.enters the OTP code and the start date of the symptoms provided by the patient, which are thus transmitted to the Immuni backend. Within a limited time interval (2 minutes and 30 seconds), the patient must complete the loading procedure of the TEK generated on his device in the last 14 days, which are sent to the Immuni backend which, after verification of the OTP, processes them for identify, on the basis of the starting date of the symptoms, only the TEK generated on the days in which the patient, on the basis of the declared date of onset of symptoms, must be considered contagious.enters the OTP code and the start date of the symptoms provided by the patient, which are thus transmitted to the Immuni backend. Within a limited time interval (2 minutes and 30 seconds), the patient must complete the loading procedure of the TEK generated on his device in the last 14 days, which are sent to the Immuni backend which, after verification of the OTP, processes them for identify, on the basis of the starting date of the symptoms, only the TEK generated on the days in which the patient, on the basis of the declared date of onset of symptoms, must be considered contagious.the patient must complete the loading procedure of the TEK generated on his device in the last 14 days, which are sent to the Immuni backend which, after checking the OTP, processes them to identify, on the basis of the starting date of the symptoms, only the TEK generated on the days when the patient, on the basis of the reported onset date of symptoms, should be considered contagious.the patient must complete the loading procedure of the TEK generated on his device in the last 14 days, which are sent to the Immuni backend which, after checking the OTP, processes them to identify, on the basis of the starting date of the symptoms, only the TEK generated on the days when the patient, based on the reported onset date of symptoms, should be considered contagious.

The aforementioned authorization mechanism is aimed at ensuring that only TEKs referring to users ascertained positive to Covid-19 are loaded on the Immune System.

Upon uploading the TEKs, the app also automatically uploads some information relating to any close contacts with previously detected positive subjects to the Immuni backend (so-called Epidemiological Information analytics, better described in letter A) of par. 1.2 of this provision), and the province of domicile indicated by the user when the app is first used or subsequently modified.

D) Publication of TEKs of users who tested positive at Covid-19

The TEKs of the positive users, acquired in the manner described above, are published for the provision of the immune app, so that they can be automatically and periodically downloaded by the app users to allow it to detect the recurrence of a possible contact by comparison with the RPIs saved within each mobile device.

To this end, the Immuni backend periodically generates, at a regular interval of 30 minutes, a digitally signed file containing the set of TEKs (so-called TEK Chunks) of the new positive subjects. This file is published and made available through a Content Delivery Network (CDN), that is a set of geographically distributed servers that allows to guarantee the download (download) of the file by numerous users, provided by a company, designated in turn , responsible for the treatment by Sogei. These files are automatically deleted after 14 days of its generation.

The app installed on users' individual devices periodically checks (every 4 hours, but also more frequently if the mobile device is connected to its own power supply) for updates, memorizing any new files containing the published TEKs in the device.

E) Comparison with the RPIs saved on users' devices

Once the TEKs published by the backend system have been received, each device on which the app is installed starts the comparison between the RPIs obtained from the downloaded TEKs and those, detected in the previous 14 days, stored within each mobile device, in order to to verify the presence of a close contact with users verified positive at Covid-19 (match).

This comparison is carried out locally through the algorithm made available by the A / G Framework which on the basis of some parameters such as the duration of the contact and the distance between the devices on which the app is installed (detected by the intensity of the bluetooth signal), calculates the Total Risk Score for each contact detected. If this risk index exceeds a predefined threshold, the app shows the user an alert message on the possible exposure to the infection (so-called exposure notification), for having been a close contact with a subject verified positive at Covid-19 (“ On TOT day you were close to a positive COVID-19 case "). The message therefore invites the user to adopt some rules of behavior,as well as contacting their general practitioner / pediatrician of free choice, who in turn will contact the prevention department of the local competent local health authority.

Following the comparison operation with the RPIs stored within the mobile device, in the presence or absence of a risk contact, the app can automatically transmit some information to the Immuni backend regarding a risk model. : the receipt or not of a risk exposure notification, the date of any last close contact with a positive result, the province of domicile, as well as technical indicators relating to the user's device and the use of the app (so-called analytics Operational Info with / without Exposure, better described in letter B) of par. 1.2 of this provision).

1.2. The collection and use of analytics

The Covid-19 Warning System, in addition to the TEKs of users tested positive to Covid-19, collects, through the app, the additional information described below.

A) Epidemiological Info analytics

Whenever a user tested positive at Covid-19 freely decides, in order to "warn other users at risk of contagion", to upload their TEKs to the backend system, communicating the start date of the symptoms, the app also automatically transmits additional information called Epidemiological Info to the Immuni backend. In this circumstance, by default, the data specified below are therefore collected on the Covid-19 warning system to “allow the refinement of the algorithm for calculating the risk deriving from a contact and to alert only the people who are actually at risk ", as well as for" public health protection "and" epidemiological "purposes:

The Epidemiological Info collected includes:

1) province of domicile;

2) Exposure Detection Summary, i.e. a series of summary information relating to all possible contacts at risk that occurred in the last 14 days (detected through the comparison of the downloaded TEKs with the RPIs stored inside the device), which includes:

a) number of identified risk contacts;

b) number of days since the last risky contact;

c) aggregate duration of the contacts at risk (measured in multiples of 5 min. up to a maximum of 30 min.), divided into three bluetooth signal intensity intervals (so-called attenuation);

d) highest risk index among those relating to risky contacts;

3) Exposure Info, i.e. a series of analytical information relating to each risk contact that occurred in the last 14 days (detected by comparing the downloaded TEKs with the RPIs stored inside the device), which includes:

a) date on which the risky contact took place;

b) duration of the contact at risk (measured in multiples of 5 min up to a maximum of 30 min);

c) bluetooth signal intensity during risk contact (so-called attenuation);

d) duration of the contact at risk (measured in multiples of 5 min up to a maximum of 30 min), divided into three bluetooth signal intensity intervals (so-called attenuation);

e) the risk of contagiousness associated with the TEK relating to risk contact;

f) risk index related to risk contact.

The collection of the aforementioned data (Epidemiological Info, TEK of the last 14 days, device clock and start date of the symptoms, is subject to the authorization mechanism based on an OTP code described in letter C of par. 1.1 of this provision).

B) Operational Info analytics

The app automatically transmits the so-called Operational Info without Exposure and, if there has been a risky contact, the so-called Operational Info with Exposure, automatically and according to a probabilistic model. In any case, the number of Operational Info analytics submissions that a single device can carry out is limited on a monthly basis.

The Operational Info is collected to “statistically understand the level of diffusion of the app in the area and the correctness of its use”, as well as to “monitor the epidemic on a statistical basis, allocate health resources more efficiently and thus maximize readiness and adequacy of the support provided to users who are at risk ".

At present, the transmission of these analytics only concerns devices with the iOS operating system. In fact, in order to ensure the validity of Operational Info and to impose a monthly limit on their sending by mobile devices, while avoiding any pollution of the data collected from the backend, the Covid-19 Alert System uses techniques device attestations that allow you to verify the authenticity of the device from which the data originate, currently only possible for devices with the iOS operating system (Apple DeviceCheck API) in the manner described below.

Operational Info includes:

1) analytics token (the meaning of which is described in par. 1.3, collected for a purely technical purpose instrumental to guarantee the security and greater reliability of the data processed within the device attestation mechanism of iOS devices);

2) province of domicile;

3) activation status of the bluetooth interface;

4) status of permission to use the A / G Framework for exposure notification;

5) status of permission to view local notifications generated by the app;

6) operating system of the mobile device (iOS or Android);

7) whether or not risk exposure notifications have been received;

8) date on which the last risk exposure occurred (close contact with a positive result subject).

C) The conservation and use of analytics by the Ministry

In relation to the methods of storage and subsequent processing of both categories of analytics for the purposes described above, it is represented that "the supply of data by Sogei will be carried out daily, anonymously and aggregated via PEC, to the competent offices of the Ministry of Health. ", Without providing additional elements (e.g. anonymization techniques applied to data after their collection, retention times).

D) Device attestation: generation and use of the analytics token

In order to allow the Immuni backend to verify the authenticity of the devices from which the Operational Info analytics come, the following operations are carried out only for devices with the iOS operating system:

the Immuni app requires Apple ("DeviceCheck iOS API") to assign a temporary device ID, called a device token, which will allow the Immuni backend to verify its authenticity;

subsequently, the Immuni app randomly generates another device identifier, called the analytics token, saving it locally and sending it to the Immuni backend together with the token device assigned by Apple;

upon receipt of such data, the Immuni backend checks with Apple ("DeviceCheck server API") the validity of the device token relating to the user's device; in this circumstance, the Immuni backend also makes use of some features made available by Apple (so-called "DeviceCheck per-device bits") which allow keeping track of those mobile devices which, having assumed an anomalous behavior in the generation of the analytical token , are not authorized to send Operational Info;

in the event of a positive response from the Apple service, the Immuni backend stores the analytics token in a database, associating it with a sending counter;

every time the Immuni app must send the Operational Info analytics, the previously generated analytics token is transmitted together with this data;

upon receipt of these analytics, the Immuni backend checks whether the analytical token exists, if it has been generated and if it has not already been used to make two submissions; only if all these conditions are met, the Operational Info are accepted and saved in the Immuni backend; otherwise, the data is discarded.

The analytical token changes monthly and is sent to the Immuni backend at most three times a month (when generating, sending Operational Info with Exposure and sending Operational Info without Exposure), so as to limit "the ability of the server to re-identify the same device across multiple calls to the server".

On a monthly basis, the devices on which the Immuni app is installed randomly generate an identifier called analytics token necessary to verify the validity of the Operational Info analytics sent to the Covid-10 Alert System.

LOOKS

The processing of personal data carried out within the Alert System is legitimate and proportionate in that the rights and freedoms of the data subjects are respected and is also accompanied by adequate prevention and diagnosis measures aimed at facilitating the taking in charge of the persons infected by part of the national health system and the early detection of new outbreaks of infection. This, ensuring, in particular, transparency, correctness and security at every stage of treatment, in relation to the high risks it presents for the rights and freedoms of the data subjects.

1. Legal basis of the processing, voluntariness and pursued purposes

As mentioned, the implementation of the Immuni app is placed in the regulatory context established by art. 6 of Legislative Decree 28/2020 with which the single national platform for the management of the Covid-19 Alert System was established.

The aforementioned provision, among other things, provides for some closely related requirements such as: 1.1) the voluntary nature of the installation of the app; 1.2) the pursuit of some specific purposes; 1.3) the use of pseudonymised data.

1.1. On the voluntary use of the app

As for the first, it should be emphasized that an application based on the voluntary nature of the users implies that the will manifests itself in all parts of its operation: the download, the installation, the configuration, the activation of Bluetooth technology, the loading of the TEKs on the backend of Immuni in case of a positive result of the swab, the collection of the different categories of analytics in the phases in which the treatment is divided, the consultation of the trusted doctor after receiving an alert message on the risk of being in close contact with subjects positive results, uninstalling the application, etc. (Cfr.points 24 and 31 of the "Guidelines 04/2020 on the use of location data and tools for tracing contacts in the context of the emergency linked to COVID-19" of the European Data Protection Committee of 21 April 2020) .

Corollary of voluntariness is, as also provided by the legislator, that people who do not intend or cannot use the application, understood in its entirety or only in one of its phases, cannot be prejudiced, and must, in any case, be compliance with the principle of equal treatment is ensured (Article 6, paragraph 3, of Legislative Decree 28/2020).

The voluntary use of the app must be clearly specified to users, in compliance with the principle of transparency and any innovations in the characteristics of the treatment must be found in corresponding changes to the information itself (articles 5, paragraph 1, letter a; 12; cons. Nos. 39 and 60 of the Regulation).

1.2. On the purposes of the app

The reference legislation establishes that the Covid-19 Alert System must pursue exclusively the purpose, on the one hand, of "alerting people who have come into close contact with subjects who have tested positive" and, on the other, of "protecting their health" through the envisaged prevention measures in the context of public health measures linked to the Covid 19 emergency ". Furthermore, as the owner of the processing of personal data carried out through the aforementioned System, the Ministry is entrusted with the task of implementing the additional requirements necessary for the management of the alert system for the adoption of related public health measures and of care, in coordination with the subjects required by law,also through the TS System and in compliance with the relative institutional competences in health matters connected to the epidemiological emergency (art. 6, paragraph 1, dln 28/2020).

The aforementioned purposes can be pursued through the processing of personal data collected by the app which, "by default, are exclusively those necessary to warn users of the application to be among the close contacts of other users deemed positive to COVID-19, identified according to criteria established by the Ministry of Health and specified within the measures referred to in this paragraph, as well as to facilitate the possible adoption of health care measures in favor of the same subjects "(art. 6, paragraph 2, letter b , ibid.).

In addition, the operation of the Immuni app also implies the treatment of "particular data categories, as they relate to the health of users. The latter can be processed pursuant to art. 9, par. 1, lett. g, of the Regulations, in compliance with the additional guarantees provided by art. 2-sexies of the Code, which specifies the "types of data that can be processed, the operations that can be carried out and the reason for the relevant public interest, as well as the appropriate and specific measures to protect the fundamental rights and interests of the interested party".

In this regard, this level of detail is reported in the impact assessment in question, with which - pursuant to art. 6, paragraph 2, of Legislative Decree 28/2020 - the Ministry of Health has been called to adopt "technical and organizational measures suitable for guaranteeing a level of security adequate to the high risks for the rights and freedoms of the interested parties". This document contains a general description of the data processed, the operations performed, the data flows and the specific purposes pursued.

In particular, the System involves the processing of the data necessary, as required by the legislator, on the one hand, for the tracing of contracts in order to alert people who have come into close contact with positive results subjects (e.g. TEK, RPI, the start date of symptoms for swab-positive people, receipt of exposure notification) and, on the other, for public health purposes, while helping to improve the functioning of the Covid-19 Warning System (e.g.: analytics Operational Info and Epidemiological Info, described above, which include, among other things, the province of domicile, the date on which the last risk contact occurred, the degree of risk of contagion, having received a message of alert, bluetooth activation status,permission to use the A / G Framework which makes it possible to track contacts, permission for notifications, the device's operating system, the device's clock, the token analytics, the token devices).

1.3. On the use of pseudonymised data

Article. 6 paragraph 2, lett. c) of dln 28/2020 establishes that the treatment carried out to alert the contacts is based on the processing of proximity data of the pseudonymised devices.

Pseudonymisation, pursuant to Article 25 of the regulation, constitutes a measure of privacy by design, aimed primarily at ensuring the effective application of the principles of the protection of personal data, integrating the necessary guarantees in the treatment in order to meet the requirements of this regulation. and protect the rights of data subjects. It is therefore a fulfillment and not a data anonymization technique.

The purpose of protection is represented by the definition of pseudonymisation, introduced by Article 4 paragraph 1 of the Regulation as the result of a processing of personal data that does not allow it to be attributed to a specific interested party without the use of additional information, provided that such additional information is stored separately and subject to specific technical and organizational measures aimed at ensuring that such personal data is not attributed to an identified or identifiable natural person.

To fully implement the regulatory requirements, the two components of a pseudonymisation treatment, the pseudonymised data and additional information must therefore be clearly identified, and the separation between these two components must also be guaranteed in the absence of which identification would be possible. of an interested party.

In the context of contact tracing, the purpose of the pseudonymisation, thus realized, is to allow the distribution of the TEK keys (i.e. the result of the pseudonymisation) to the participants in the system but not the co-decoding keys (i.e. the additional information), which would prevent the participants from being able to trace the identity of any other participant.

In this regard, the application of state-of-the-art asymmetric encryption techniques (for example, based on hash algorithms), with adequate custody of the keys by the central entity, which would be the only one capable of allowing the re-identification for reasons purely functional to the operation of the system, would be configured as a pseudonymisation scheme suitable for carrying out the decoupling between TEK and their decoding keys, thus allowing the correct application of art. 6 paragraph 2, lett. C) of the dln 28/2020, as well as, on this basis, the publication of the TEK of the subjects tested positive.

2. The characteristics of the contagion exposure algorithm

As a preliminary, it is represented that, in the impact assessment, the epidemiological risk criteria and the probabilistic models on which the algorithm is based are not yet identified, nor the configuration parameters used accompanied by the assumptions made, in accordance with the provisions of the 'art. 6, paragraph 2, lett. B), of the dln 28/2020, which provides that the identification of close contact takes place "according to criteria established by the Ministry of Health and specified in the" technical and organizational measures contained in the impact assessment.

In this regard, it is underlined the importance of ensuring maximum public transparency of these criteria, also in order to guarantee an appropriate scrutiny by the scientific community.

From this point of view, it is represented that the app's risk of exposure to contagion is calculated using an algorithm, only generically represented in the impact assessment, which takes into account the duration of the contact and the distance of the mobile devices deduced from the intensity of the bluetooth signal received by the device (cd attenuation). The risk model may evolve over time, depending on the information on the virus that will be available.

It should be considered that the evaluation of the distance between devices is intrinsically susceptible to errors as the intensity of the bluetooth signal depends on different factors such as the mutual orientation of two devices or the presence of obstacles between them (including the presence of human bodies), thus being able to detect "false positives" and "false negatives".

Moreover, the lack of knowledge of the context in which the close contact with a Covid-19 confirmed case took place (certainly certainly relevant for epidemiological purposes, also due to the possible use of protection systems) is likely to potentially create numerous "False positives".

It is important to underline that the identification of the contacts at risk is carried out in a probabilistic way, in order to alert users of a possible risk of contagion; therefore it must be clear that in no case the receipt of an alert message from the app automatically means that the user has certainly been infected.

What has been said is also relevant considering the testing phase and the subsequent initial phase of use of the app throughout the national territory, also to obtain (and maintain) users' confidence about the accuracy and precision of the app in generating messages alert only to users who have had a real risk of contracting the virus. Otherwise, in fact, in the event that where the false contacts that are close or not actually at high risk of contagion were numerous, it would instead risk compromising users' trust in the reliability of the app with consequent interruption of its use.

\*\*\*\*\*\*

On this basis, it is therefore recommended that:

the algorithm, based on epidemiological risk criteria and probabilistic models (specifying the configuration parameters used and the assumptions made), is promptly indicated and constantly updated in the impact assessment, in compliance with the principle of accountability, as moreover 'art. 6, paragraph 2, lett. b) of Legislative Decree 28/2020, making it available for scrutiny by the scientific community;

users are adequately informed about the possibility that the app generates exposure notifications that do not always reflect an actual risk condition (given the possibility, for example, that some subjects come into contact with people who are positive at Covid-19 because of their work, but by adopting personal protective equipment or other devices), and provide users with simple and clear information on the operation of the algorithm (also through a so-called infographic);

app users can temporarily deactivate it through a function easily accessible on the main screen and that users of this temporary deactivation function are clearly informed through the infographics displayed when the app is installed.

3. Analytics

To achieve the aims of "alerting people who have come into close contact with positive results" and "protecting their health through the envisaged prevention measures in the context of public health measures linked to the Covid 19 emergency", the Ministry of health has deemed it necessary to provide that the Immune System collects the various types of analytics described above through the app. This is to allow, in the first place, to prepare the adequate measures for taking charge of the subjects at risk of contagion by the National Health Service - promptly identifying new outbreaks of infection and monitoring the degree of adhesion to the use of the users' app - and, on the other hand, to allow, through the analysis of epidemiological data,a constant improvement of the algorithm's ability to identify close contacts between users, while ensuring the overall functioning of the Covid-19 Warning System through better calibration of the app configurations.

In this regard, it is considered appropriate that, as already represented, maximum transparency is ensured towards users, guaranteeing the voluntary nature of the provision of information by users towards the Immuni backend. The information that the Ministry intends to acquire is, in fact, stored on the user's device which must be guaranteed maximum awareness of the operations performed, thus favoring a confident and broad adherence to the Covid-19 alert system (see point 28 of the Guidelines No. 04/2020 cited by the European Data Protection Board).

In fact, it is necessary to represent that this information cannot be considered anonymous data (these are, in fact, acquired by the Covid-19 alert system individually from the individual devices) and allow, in different contexts, concrete possibilities for re-identification of the interested parties , especially if associated with other information or in the case of low morbidity or territorial areas with low population density.

In this regard, it should be noted that the impact assessment does not adequately specify the methods with which the Ministry of Health intends to treat and preserve the various types of analytics collected, the anonymization techniques that may have been adopted, the cancellation times, as well as the specific measures security measures implemented also in relation to the prospective data flows via PEC between Sogei and the same Ministry.

Finally, with reference to the fact that the Operational Info is currently collected only by iOS devices, it is represented that the Ministry has considered that the data acquired in this way is sufficient to obtain representative processing, since the distribution of iOS and Android devices in the different is known Italian provinces, also specifying that a device certification mechanism is also being developed for Android devices. In particular, the need to involve Apple and, subsequently, Google in the aforementioned mechanism would derive from purely technical needs, instrumental to guaranteeing the security and greater reliability of the data collected.

In this regard, it is advisable to observe how the initial use of analytics produced by iOS devices only introduces a possible distortion (bias) in the sample on which the indicators of effectiveness in the use of the system will be calculated and from which calibration will eventually be carried out. the functioning of the app. This is also due to the socio-demographic characteristics of iOS device users which can be significantly different from those of Android device users.

It is also noted that the communication of data, other than those belonging to particular categories, against Apple can find legitimacy in art. 17-bis of dl 9 March 2020, n. 14, which governs the processing of personal data in the emergency context, provided that users are adequately informed of the role played by Apple in this circumstance.

\*\*\*\*\*\*

In relation to the above, it is considered necessary that the analytics are carefully protected in the Immuni backend, avoiding any form of re-association of the same with identifiable interested parties and ensuring the adoption of adequate security measures and anonymization techniques, to be identified on the basis of of the specific purposes actually pursued, in compliance with the principles of privacy by design and by default (art.25 of the Regulation).

With reference to the proposed device certification mechanism made available by Apple, we invite you to consider the possibility of introducing similar tools that do not involve the involvement of third parties in the processing. Where, however, this, in compliance with the principle of accountability, is considered indispensable, it is recommended to clearly represent this circumstance to users, specifying that only the technical data necessary to guarantee the security and greater reliability of the data collected will be communicated to Apple, without prejudice to the need to examine the device attestation solution that will be identified for Android devices.

4. Transparency of treatment and rights of the interested parties

4.1. Transparency principle

By virtue of the principle of transparency, the owner must inform the data subject of the existence of the treatment carried out within the Covid-19 alert system and its purposes, providing him with the information necessary to ensure correct and transparent treatment, while taking into consideration the emergency circumstances in which it is carried out and the specific context in which personal data are processed (articles 5, par. 1, lett. a), 13 and 14 of the Regulation and recital no. 60).

The information must be made available to the interested party before the data is collected, even with a progressive method, providing first of all those relating to the main characteristics of the treatment. In this regard, the legislator has provided that users receive clear and transparent information before the application is activated, in order to achieve full awareness, in particular, of the purposes and processing operations, of the pseudonymisation techniques used to protect your identity and the timing of data retention (art.6, paragraph 2, letter a), dln 28/2020). Particular attention must also be paid to the voluntary nature of the use of the app, the type of data processed and the subjects involved in the treatment.

In addition to what is already indicated in the previous paragraphs in relation to compliance with the principle of transparency, in order to facilitate the understanding of the information elements provided by the Regulation, it is agreed that, as represented in the impact assessment, the same can be provided in combination with standardized icons - readable by automatic device - to give, in an easily visible, intelligible and clearly legible way, an overview of the treatment envisaged (see recital no. 61 of the Regulation).

The language in which the information required by the Regulation must be made must be formulated in such a way as to be comprehensible to as many people as possible, as a significant part of the population will probably be affected by the app.

It also urges that individual people with disabilities also find suitable ways of using the aforementioned information.

\*\*\*\*\*\*

Having said that, in addition to the requirement represented in paragraph 3 relating to transparency in the collection and processing of analytics, in relation to the information model sent to this Authority after receiving the impact assessment, it is recommended to describe - in the relative part to the "Data transmission / flow" - the operations carried out with reference to the data analytics of the Epidemiological Info type, as well as to specify more clearly that the personal data collected "For only users exposed to the risk of contagion" and "For only users positive results for SARS-CoV-2 "are added to those acquired for" All users of the app "(points 5 and 4 of the model" Information provided pursuant to articles 13-14 of Regulation (EU) 2016/679 ( "General Data Protection Regulation - GDPR" in deeds).

With specific reference to the use of the app also by parts of minors over fourteen years of age, it is recommended to pay particular attention to the information to be provided and the content of the messages of exposure to the risk of contagion.

As for the testing phase of the Covid-19 warning system indicated in the impact assessment (par. 3), it is recommended to inform users, promptly and in an effective manner, that -in this phase- although they can install the app , the notice of exposure to the risk of contagion can only be received if contact has taken place with subjects tested positive to Covid-19 assisted by the Regions or autonomous Provinces in charge of the experimentation.

4.2. Rights of the interested party

The Regulation, in recognizing to the interested party specific rights with respect to the processing of his personal data, also identifies some areas in which the exercise of the same can be limited (see recitals nos. 63 and 68 and art. 15 and following of the Regulation ).

Firstly, it should be noted that, due to the characteristics of the treatment carried out through the Covid-19 alert system and the pseudonymisation techniques used, as indicated in the impact assessment, the owner may not be able to identify the interested party in function of the exercise by the same of the rights recognized by the Regulations. The owner must fully inform the interested party of this circumstance (Article 11, paragraph 2 of the Regulation).

This being said, with specific reference to the assessments made by the Ministry regarding the exercise of rights by the interested parties and to what is indicated in the information model sent to this Authority, it is noted that:

the access rights (art.15 of the Regulation), rectification (art.16 of the Regulation), limitation of treatment (art.18 of the Regulation) and data portability (art.20 of the Regulation) cannot be exercised by the interested party with reference to the processing of personal data carried out through the Covid-19 Alert System in consideration of the characteristics of the treatment;

the right of opposition (art.21 of the Regulation), similarly to what is indicated for the right to erasure, can be exercised by the interested party. As correctly represented in the impact assessment and in the information, the right to object is expressed in the possibility for the interested party to uninstall the app. In this regard, it represents the opportunity for the interested party to be informed of the fact that the keys will be gradually erased, at the end of the fourteenth day of life, also on the central infrastructure.

\*\*\*\*\*\*

The cancellation right can instead be exercised directly through the app for all temporary keys (TEK) and proximity identifiers (RPI) through a function specifically made available by the A / G Framework aimed at interrupting the use of the app in any time. The interested party should be made aware of the method of exercising this right indicated in the impact assessment and its consequences.

Furthermore, it represents the opportunity that the functionality necessary to adapt the use of the app in contexts in which false positive products would be described above, can usefully be used to guarantee the exercise of the right of opposition if the user on a temporary, see the need, avoiding resorting to the most radical solution of uninstalling the app.

5. Temporary nature of the measurement and data cancellation times

The processing of personal data must comply with the principles of data minimization and limitation of conservation, according to which - respectively - personal data must be "adequate, relevant and limited to what is necessary with respect to the purposes for which they are processed" , as well as "kept in a form that allows the identification of the interested parties for a period of time not exceeding the achievement of the purposes for which they are processed" (art. 5, par. 1, letter c) and e), of the Regulation ).

In this regard, art. 6, paragraph 6, of Legislative Decree 28/2020 provides that the use of the app and the platform, as well as any processing of personal data carried out through them, must be stopped on the date of cessation of the state of emergency ordered by resolution of the Council of Ministers of January 31, 2020, and in any case not later than December 31, 2020. By that date all personal data processed must be deleted or made permanently anonymous.

It is also provided that "the data relating to close contacts are kept, even in users' mobile devices, for the period strictly necessary for the treatment, the duration of which is established by the Ministry of health and specified within the measures referred to in this paragraph ; the data are automatically deleted at the end of the term "(art. 6, paragraph 2, letter e), of the dln 28/2020)

In the impact assessment, the Ministry promptly identified the data retention times in relation to the specific purposes, providing for the cancellation of the individual types of personal data processed once the purpose for which they were collected is exhausted and in any case no later than 31 / 12/2020.

In this regard, in order to assess the proportionality of the treatment carried out, it is relevant, among other things, that:

TEKs and RPIs stored on users' mobile devices are automatically deleted after 14 days;

the TEKs of the Covid-19 positive subjects who uploaded the Immuni backend are similarly canceled after 14 days.

In any case, the observations made regarding the retention times of the analytics referred to in par. 3 and the IP address referred to in par. 7 to whose content please refer in full.

6. Subjects involved in the treatment

Article. 6, paragraphs 1 and 5, of Legislative Decree 28/2020 provides which institutional bodies are involved in the processing of personal data.

The data controller is the Ministry of Health which makes use of the subjects indicated in the aforementioned provisions, including Sogei Spa and the Ministry of Economy and Finance, limited to the use of the TS System, who operate as data processors ( art.28 of the Regulations).

In this context, the impact assessment also indicates the involvement of Content Delivery Network (CDN) service providers, designated as sub-managers by Sogei, following specific authorization from the Ministry of Health pursuant to art. 28 of the Regulation. This, in order to guarantee - as reported in the aforementioned impact assessment - the availability and resilience of the system, the exposure of temporary keys relating to users who tested positive for the Covid-19 buffer.

In the impact assessment, however, the role of other subjects nominated therein or who could be involved in the Immune System, such as the company that developed the application (Bending Spoons Spa), or the companies Apple and Google is not sufficiently clarified. With regard to the latter, the use of the A / G Framework attributes to them a mere role of technology provider (technology provider) without itself implying any processing of personal data.

This aspect should be clarified, in compliance with the principles of transparency and accountability.

7. Security of processing

The various advantages of the decentralized model on which the Immune System is based, are flanked by some vulnerabilities which must also be aware of in order to adopt the appropriate measures to mitigate the System's security risks, also relating to the possible re-identification of users with reference to both those who receive the alert and those who tested positive for Covid-19.

7.1. Device security and re-identification risks

The confidentiality of the data relating to the subjects tested positive to Covid-19 is entrusted in part to the technical and organizational measures that must be identified by the data controller but, in part, also to the ability to avoid the occasions when the RPI of a user ( proximity identifiers, short-term pseudonyms), broadcast via bluetooth technology, can be detected by third parties, also in combination with other identifying information, to be subsequently compared with the TEKs of the subjects tested positive, published by the Alert System COVID-19.

The user must be adequately advised of the particular care to be given to the security of their mobile device, to prevent the action of malware even in the form of apparently harmless apps which could have malicious behavior in order to acquire information useful for rebuilding relationships among users or chains of contagion, or to identify those exposed to the risk of contagion or those who tested positive for Covid-19.

It is also necessary to consider that, outside the mobile device, scanning devices (sniffers) capable of intercepting the broadcast transmission of the RPIs for improper or, in any case, unauthorized use, can be activated, causing detrimental consequences for the interested parties.

In addition to the aforementioned scenarios, there are also the risks of inferential re-identification of the subjects tested positive to Covid-19, with the compromise of the confidentiality of information, both by subjects involved in the treatment, also through the availability of analytics, and by other users with attempts to rebuild contacts without requiring sophisticated technological tools.

In this regard, it is represented that the publication of the TEK relating to subjects tested positive to Covid-19, involving the diffusion of the pseudonyms of their devices, exposes them to a particular attack technique called "paparazzi attack", which is carried out when it is possible to acquire easily the pseudonym of a person whose identity is known, for example near his place of residence or in any other place where the pseudonym is transmitted via bluetooth, additional information can be associated, as happens in commercial businesses at the time of payment with credit card, when passing through controlled boarding gates at airports, or in workplaces with presence detection systems.

These are contexts in which the RPI generated by the device of an unsuspecting user could be acquired by associating other identifying information with it and allowing the search for the RPI thus acquired among those obtainable from the publication of the TEK keys of the positive subjects, with a final effect of re-identification associated with a characterization of the state of health.

In particular, in the case of the Immuni app, the publication of the program code as open source and the advertising given to the cryptographic algorithms used in the A / G Framework could allow anyone who knows, having downloaded them, the TEKs of the subjects tested positive, to derive from each of them the 144 RPIs to be compared with the "labeled" RPI database.

7.2. Measures taken under the Covid-19 alert system

With reference to the overall safety of the treatment, it is represented that in the impact assessment the technical and organizational measures adopted by the Ministry of Health in the context of the Covid-19 Warning System are accurately described, as well as those shared by the Ministry of Economy and finances in relation to the functions specifically introduced in the TS System, briefly described below:

TEKs, RPIs and other data present on the user's device are stored in cryptographically protected areas, in order to make them illegible to unauthorized subjects;

the dialogue between the app and the Immuni backend services takes place through secure communication channels based on the HTTPS (Hypertext Transfer Protocol Secure) protocol and on the use of the certificate pinning mechanism;

the generation of dummy traffic (fictitious data), automatically and according to a probabilistic model, allows to effectively limit the possibility of inferring - through the analysis of the encrypted traffic between the app and the Immuni backend act of uploading the TEK or transmitting the Operational Info - information relating to particular categories of users (subjects who are positive or exposed to the risk of contagion);

the files containing the Chunck TEKs are digitally signed, in order to allow the app to verify their integrity and authenticity;

the publication of the source code of the app and of the main components of the Immuni backend which allows scrutiny by the developer community;

the tracing of the accesses made to the systems and databases by the system administrators, with a suitable period of log retention;

the use of perimeter security devices to block attacks aimed at exploiting known vulnerabilities associated with both the basic software and the code developed for the Immune System;

the use of an OTP code, with a limited time validity (2 minutes and 30 seconds), to authorize - during the epidemiological investigation conducted by a health worker from the prevention department of the competent local health company - the upload operation TEK of a subject tested positive;

the adoption of IT authentication procedures for healthcare professionals for access to the OTP authentication service, made available on the TS System;

the tracing of the accesses and operations performed on the TS System by the aforementioned health workers and system administrators, with a reasonable period of log retention.

7.3. Further suggested measures

In relation to the high risks presented by the treatment, also identified in the impact assessment, there is an opportunity to make further improvements to overall safety by intervening on the following aspects.

A) Retention of the IP addresses of mobile devices

From the examination of the documentation, it is not clear whether the IP addresses of the mobile devices that interact with the backend are kept, both directly (when uploading the TEK and the Epidemiological Info) and through the intervention of the CDN (at the moment for the download of the TEK and the transmission of the Operational Info).

In particular, in the impact assessment it is stated that "the IP address of the device sending the data is transformed into a fictitious address through Network Address Translation (NAT) techniques by the backend infrastructure when uploading the data and is not stored in the database or in the log files. The IP address is only traced temporarily on the perimeter access systems of the uploads ", while in its attachment no. 15 shows that “the central backend server does not store client IP addresses. The IP address is kept by the perimeter infrastructure for the sole purpose of guaranteeing IT security ".

\*\*\*\*\*\*

It is therefore necessary to measure the storage times to the extent strictly necessary for the detection of anomalies and attacks. This is because IP addresses are personal data and may constitute that additional information which, linked to the data collected, allows the identification of users in certain circumstances.

B) Tracking of operations performed by system administrators

An examination of the documentation shows that the tracing of access by system administrators is limited to login and logoff operations, thus not allowing effective control, a posteriori, of the operations performed on the data.

\*\*\*\*\*\*

It is therefore necessary to introduce measures to ensure the tracing of the operations performed by system administrators on operating systems, on the network and on databases.

C) Incorrect loading of Diagnosis Keys (TEK) not referred to positive subjects as a result of material or diagnostic errors

With reference to the assessment of the risks identified in the impact assessment, it is necessary to consider the further scenario of compromising the integrity of the data deriving from the hypothesis in which, once the TEKs of a subject deemed positive have been published, for various reasons (for example , cases of homonymy, exchange of reports, material errors), it is necessary to correct the data entered in order to restore its accuracy.

Therefore, in accordance with the principle of accountability, the appropriate technical and organizational measures for this purpose should be identified.

8. Experimentation

In the impact assessment, the Ministry of Health represented the need, shared with the Regions, for a preliminary testing phase of the digital contact tracing process in a limited number of Regions or autonomous Provinces.

This is in order to verify the correct functioning from a technical point of view and the impact on the territorial services of the app, in consideration of the possible additional workload (contact tracing, identification, isolation / quarantine, diagnostics, surveillance) deriving from the diffusion of the new digital instrument, which should presumably also reveal contacts not detectable with traditional contact tracing methods.

In this regard, the duration of at least one week of the experimentation phase was deemed appropriate, to be carried out in the Regions or autonomous Provinces which will be identified by national and regional political decision-makers.

In this context, since the app cannot be released only in limited areas of the country, to carry out the experimentation, the use of the OTP unlocking code will initially be allowed only in the regions or autonomous provinces chosen for the experimentation. Consequently, in this phase, all citizens, while being able to download the app from the official stores, will be warned in advance that the notice of exposure to the risk of contagion can only be received if contact has taken place with subjects tested positive to Covid-19 assisted by the autonomous Regions or Provinces in which the trial was started. In the impact assessment, however, it is indicated that a specific notice will be provided in the app store.

In relation to the initial phase of use of the app, art. 35, par. 9, of the Regulation, pursuant to which the data controller collects, if necessary, the opinions on the treatment provided by the interested parties who will be involved in the treatment itself, or their representatives, without prejudice to the protection of commercial or public interests or the safety of the treatments.

In this regard, the Ministry highlighted that "full compliance with the transparency obligations through, among other things, the free and open nature of the software using the tool of the GitHub platform for sharing and cooperation on technical issues related to application, leaving at a later time, and in particular at the end of the testing phase, the collection of opinions on the actual use of the application by those directly concerned ", which should allow" a first moment of comparison with the opinions experts on the most strictly technical part of the application and on the security measures aimed at strengthening that bond of trust which is a fundamental element for the success of the project ".

In relation, however, to the collection of users' opinions, it was decided to "postpone the collection of said opinions to the testing phase", considering, among other things, the wide-ranging debate on all the media in the Immuni app and the particular "emergency context in which the treatment is inserted and therefore with the need to adopt Covid-19 containment measures in the shortest possible time".

It is hoped that the opinions of users expressed in the experimentation phase, collected in the manner described above, will be duly taken into account for the expected update of the impact assessment and for the improvement of the Immune System.

ESTIMATED

Due to the need to start the Covid-19 alert system, the processing of personal data carried out within this system can be considered proportionate, as measures have been envisaged to sufficiently guarantee respect for the rights and freedoms of concerned by mitigating the risks deriving from the treatment.

This provision contains some provisions aimed at reinforcing the guarantees towards the subjects whose data are processed within the Covid 19 alert system. The prescribed measures may be adopted during the experimentation of the System, so as to ensure that in phase implementation any remaining critical issues are resolved.

Lastly, it is recalled that the collection of personal data processed through this system, by unauthorized persons, determines an illegal processing of personal data (also from a criminal point of view, where the additional requirements of this case exist). Similarly, the data collected through the aforementioned system cannot be processed for purposes not provided for by the aforementioned art. 6 of Legislative Decree 28/2020 and in particular to take decisions against the interested party likely to cause injury.

ALL THIS PREMISED, THE GUARANTOR

a) pursuant to and for the purposes of articles 36, § 5, and 58, § 3, lett. c), of the Regulation and of art. 2-quinquiesdecies of the Code, authorizes the Ministry of Health to start the treatment relating to the Covid-19 Alert System pursuant to art. 6 of Legislative Decree 30 April 2020, n. 20, in compliance with the following requirements:

1) promptly indicate in the impact assessment, the algorithm, based on risk epidemiological criteria and probabilistic models, constantly updating it, specifying the configuration parameters used and the assumptions made, making it available to the scientific community (§2);

2) adequately inform users about the possibility that the app generates exposure notifications that do not always reflect an actual risk condition, due to the possibility of contact with positive people at Covid-19 due to their work, in however, conditions characterized by an adequate degree of protection (§2);

3) allow users of the app to temporarily disable it through a function easily accessible on the main screen, informing about this option through the infographics displayed when the application is installed (§ 2);

4) identify suitable methods to protect the analytics in the Immuni backend, avoiding any form of re-association with identifiable subjects, also adopting suitable security measures and anonymisation techniques, to be identified based on the specific purposes specifically pursued, in compliance with the principles of privacy by design and by default (§3);

5) specify, in the information model, the description of the operations carried out with reference to the analytics of the Epidemiological Info type and the personal data collected in relation to the various categories of data subjects (§ 4.1);

6) devote particular attention to the information and the warning message taking into account the fact that the system is also expected to be used by minors over fourteen (§ 4.1);

7) provide adequate information to users in relation to the characteristics of the testing phase (§ 4.1 and 8);

8) integrate the impact assessment and the information in relation to the methods of exercising the right of cancellation and opposition (§ 4.2);

9) integrate, on the basis of the principle of accountability, the impact assessment with the description of the role and operations ascribable to other subjects cited there or likely, in any case, to be involved in the Immune System, highlighting the existence of any risks for the interested parties whose data are processed by the system (§ 6);

10) to measure the retention times of the IP addresses, for the purposes and in the terms referred to, to the extent strictly necessary for the detection of anomalies and attacks (§ 7.3);

11) introduce measures to ensure the tracing of the operations performed by system administrators on operating systems, on the network and on databases (§ 7.3);

12) adopt technical and organizational measures to mitigate the risks deriving from uploading TEK not related to positive subjects following any material or diagnostic errors (§ 7.3);

b) pursuant to and for the purposes of art. 157 of the Code, requires the Ministry of Health to communicate which initiatives have been undertaken in order to implement the provisions of this provision, within 30 days from the date of receipt of this provision.

Pursuant to art. 78 of the Regulation, as well as articles 152 of the Code and 10 of Legislative Decree 1 September 2011, n. 150, opposition to this provision may be filed against the ordinary judicial authority with an appeal lodged with the ordinary court of the place where the owner of the data processing has his residence, within thirty days from the date of communication of the provision.

```

Retrieved from "[https://gdprhub.eu/index.php?title=Garante\_per\_la\_protezione\_dei\_dati\_personali\_(Italy)\_-\_9356568&oldid=37040](https://gdprhub.eu/index.php?title=Garante_per_la_protezione_dei_dati_personali_\(Italy\)_-_9356568&oldid=37040)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Garante per la protezione dei dati personali (Italy)](/index.php?title=Category:Garante_per_la_protezione_dei_dati_personali_\(Italy\) "Category:Garante per la protezione dei dati personali (Italy)")
*   [Italy](/index.php?title=Category:Italy "Category:Italy")
*   [Article 36 GDPR](/index.php?title=Category:Article_36_GDPR "Category:Article 36 GDPR")
*   [Article 36(5) GDPR](/index.php?title=Category:Article_36\(5\)_GDPR "Category:Article 36(5) GDPR")
*   [2020](/index.php?title=Category:2020 "Category:2020")
*   [Italian](/index.php?title=Category:Italian "Category:Italian")

This page was last edited on 6 December 2023, at 15:49.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)