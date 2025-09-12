# AP (The Netherlands) - Boete wifitracking Enschede

## Case Information

**Authority:** AP (The Netherlands)

**Jurisdiction:** Netherlands

**Relevant Law:** Article 5(1)(a) GDPRArticle 6(1) GDPR

**Type:** Complaint

**Outcome:** Upheld

**Decided:** 11.03.2021

**Fine:** 600,000 EUR

**Parties:** n/a

**National Case Number/Name:** Boete wifitracking Enschede

**European Case Law Identifier:** n/a

**Appeal:** Appealed - OverturnedRb. Overijssel (Netherlands)ECLI:NL:RBOVE:2024:594

**Original Language(s):** Dutch

**Original Source:** Dutch DPA (in NL)

**Initial Contributor:** CBMPN

Enschede was fined €600,000 by the Dutch DPA for unlawfully processing Wi-Fi data of 1.8M devices without legal basis, violating the GDPR. Data was insufficiently anonymized, risking re-identification.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

The municipality of Enschede, through its Executive Board, installed sensors in the city center to collect data from mobile devices with Wi-Fi enabled. The data collected included MAC addresses, signal strength, date, and time of detection.

The purpose of the Wi-Fi measurements was measuring the effects of investments by the municipality of Enschede in the city centre with a view to responsible handling of public funds. In addition, the municipality pointed out that the measurements could provide insight into subjects that are important for fulfilling its public task, such as the effects of road works, holding shopping Sundays and market days, city center promotion, the attractiveness of events, the acquisition of shops and catering establishments and determining whether and when intervention is required in the context of order and safety.

Eleven sensors have been installed at various shops in the city centre of Enschede, each of which had a range of up to 20 to 30 metres. The data collection took place from May 25, 2018, to April 30, 2020. During this period, the municipality processed data from approximately 1.8 million unique mobile devices.

The Wi-Fi measurements were done on behalf of the Enschede municipal executive by Retail Management Center B.V. (hereinafter: Bureau RMC). Bureau RMC in turn hired a third-party company (unnamed in the version of the decision made available to the public by the Dutch DPA) to manage the sensors and to process all data collected with the sensors.

All sensors run on one and the same pseudonymisation method and this method has not changed since 25 May 2018. The pseudonymization results in one MAC address on each of the sensors leading to one and the same pseudonymized MAC address.

Clear living patterns can be distilled from the data collected. They can, for example, reveal someone's place of residence or workplace, but also more sensitive data such as visits to medical institutions.

### Holding

The Dutch Data Protection Authority (DPA) found that the Municipality of Enschede processed data collected from mobile devices without a legal basis, violating [Article 5(1)(a) GDPR](/index.php?title=Article_5_GDPR#1a "Article 5 GDPR") and [Article 6(1) GDPR](/index.php?title=Article_6_GDPR#1 "Article 6 GDPR").

The Dutch DPA held that a combination of a pseudonymous identifier (truncated MAC address), timestamp, and sensor location constituted personal data. Although the MAC addresses were pseudonymized (hashed), the DPA determined that individuals could still be identified without excessive effort, especially when combining this data with other information. Particularly, the unchanged pseudonymous identifier allowed tracking over six months, making individuals identifiable. The Enschede Executive Board underestimated the sensitivity of location data and its potential to reveal movement patterns.

The DPA also found that the sensors stored non-pseudonymized MAC addresses in working memory for up to two minutes before hashing occurred in a separate module after transmission. This delay meant that unencrypted MAC addresses remained temporarily accessible.

Because the sensor locations were known, tracking individuals’ movements was possible. Even if employees of the third-party company responsible for data collection did not actively identify individuals in Enschede’s city center, they had the ability to do so. The same applied to employees of Bureau RMC and the Enschede Municipal Board. Moreover, linking data from the sensors to other smart city projects in Enschede could further facilitate identification.

The municipality argued that processing was necessary for public interest tasks, such as measuring the effectiveness of city center investments. However, the Dutch DPA ruled that the municipality lacked a specific legal basis for processing under the GDPR. The DPA rejected its reliance on [Article 61)(e) GDPR](/index.php?title=Article_6_GDPR#1e "Article 6 GDPR") (public interest) and [Article 6(1)(f) GDPR](/index.php?title=Article_6_GDPR#1f "Article 6 GDPR") (legitimate interest).

The municipality also claimed it had taken privacy safeguards, such as pseudonymization and anonymization techniques. However, the Dutch DPA concluded that these measures failed to sufficiently anonymize the data. The unchanged identifiers remained stored for six months, making it possible to track individuals over time. The DPA determined that this did not meet the standards of robust anonymization and confirmed that the data remained personal data under the GDPR.

The Dutch DPA held that the municipality, as the data controller, bore ultimate responsibility for GDPR compliance, regardless of its reliance on Bureau RMC’s to perform the actual processing of the data. The Dutch DPA emphasized that the municipality’s lack of direct access to the processed data did not exempt it from being classified as a data controller under the GDPR.

The DPA found the processing disproportionate, as it affected hundreds of thousands of individuals whose MAC addresses and location data were collected via sensors. The DPA emphasized that people in public spaces reasonably expect not to be tracked without their knowledge. The municipality systematically recorded and stored data for an extended period, significantly infringing on individuals’ privacy—especially for residents and frequent visitors of Enschede. The DPA ruled that even if the municipality did not intend to process personal data, it still did so under its responsibility, eroding public trust and undermining citizens’ confidence in the government.

Additionally, the DPA found that the municipality violated the principle of subsidiarity. It could have achieved its objectives—monitoring crowd levels at specific sensor points—through less intrusive means that did not involve personal data processing. The municipality also failed to implement sufficient technical security measures, and data (including raw data) was stored unnecessarily for six months.

Given the severity, duration, and large scale of the violation, the Dutch DPA imposed a fine of €600,000. It found that the municipality failed to take adequate privacy safeguards despite being aware of the risks. The systematic and long-term nature of the processing further aggravated the infringement.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Danish original. Please refer to the Danish original for more details.

```
Confidential/Registered 
Municipality of Enschede 
Board of Mayor and Aldermen 
P.O. Box 20 
7500 AA ENSCHEDE 

Date 
March 11, 2021 Our reference 
\[CONFIDENTIAL\] 

Contact person 
\[CONFIDENTIAL\] 

Subject 
Decision to impose an administrative fine Dutch Data Protection Authority 
P.O. Box 93374, 2509 AJ The Hague 
Bezuidenhoutseweg 30, 2594 AV The Hague T 070 8888 500 - F 070 8888 501 autoriteitpersoonsgegevens.nl 

Dear Board of Mayor and Aldermen of the Municipality of Enschede, 

The Dutch Data Protection Authority (AP) has decided to impose an administrative fine of €600,000 on the Board of Mayor and Aldermen of the Municipality of Enschede (the Board of Mayor and Aldermen of Enschede) to be laid. 
The Enschede Executive Board has processed personal data of owners/users of mobile devices on which the Wi-Fi was enabled in the city centre of Enschede without any basis. In doing so, 
the Enschede Executive Board has violated Article 5, first paragraph under a, in conjunction with Article 6, first paragraph of the General Data Protection Regulation (GDPR). 

The decision is explained in more detail below. Chapter 1 provides an introduction and Chapter 2 describes the legal framework. In Chapter 3, the AP assesses whether personal data is involved, the processing responsibility and the violation. In Chapter 4, the (amount of the) administrative fine is elaborated and Chapter 5 contains the operative part and the legal remedies clause. 

1

1. Introduction 
1.1 Government agency involved 

This decision concerns the Executive Board of the Municipality of Enschede (hereinafter: the Enschede Executive Board). On 17 July 2018, the AP received a complaint from a complainant requesting a corrective measure to be imposed on the municipality of Enschede. The complainant explained that there are sensors in the city centre of Enschede that capture data from people walking by who have enabled the Wi-Fi on their telephone. According to the complainant, the capture and processing of this data is done without a basis within the meaning of Article 6, first paragraph, of the General Data Protection Regulation (hereinafter: GDPR). The AP then started an investigation into the compliance with the GDPR by the Enschede municipal executive. During the investigation, the AP received two similar complaints. 

1.2 Process 

During the investigation, the AP requested information from the Enschede municipal executive and from Retail 
Management Center B.V. (hereinafter: Bureau RMC), the organisation that carries out the Wi-Fi measurements in the city centre of Enschede on behalf of the Enschede municipal executive. The AP also requested information from \[CONFIDENTIAL\] (hereinafter: \[CONFIDENTIAL\]), the organization that Bureau RMC in turn hires to manage the sensors and to process all data collected with the sensors. In addition, on May 29, 2019, AP supervisors conducted an on-site investigation at a number of retailers in the city center of Enschede where a sensor was installed. That same day, other AP supervisors took a statement from the director of Bureau RMC and two employees of \[CONFIDENTIAL\] at the office of Bureau RMC in Amsterdam and copied documents and requested data on site. 

By letter dated May 8, 2020, the AP sent an intention to enforce to the Enschede Executive Board. Also given the opportunity to do so by the AP in this letter, the Enschede Executive Board provided a written opinion on this intention and the report on which it is based on on July 14, 2020. The AP subsequently requested further information about this point of view on 14 January 2021. 

2. Legal framework 
2.1 Scope of the GDPR 

Pursuant to Article 2, first paragraph, of the GDPR, this regulation applies to the processing of personal data wholly or partly by automated means, as well as to the processing of personal data contained in a file or intended to be contained in a file. 

Pursuant to Article 4 of the GDPR, for the purposes of this regulation, the following definitions apply: 

1. “Personal data”: any information relating to an identified or identifiable natural person (“data subject”); \[…\]. 
2. “Processing”: any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means \[…\]. 7. “Controller” means the natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data; where the purposes and means of such processing are determined by Union or Member State law, the controller or the specific criteria for its nomination may be provided for by Union or Member State law; \[…\]. 

2.2 Lawfulness of processing 

Article 5, first paragraph, introductory phrase and point (a) of the GDPR provides, inter alia, that personal data must be processed lawfully in relation to the data subject. 

Article 6, first paragraph, of the GDPR then provides an exhaustive list of the grounds for lawful data processing. This article states that processing is only lawful if and to the extent that at least one of the six grounds mentioned is met. The grounds that may be considered by the Enschede Executive Board are: 
c) processing is necessary to comply with a legal obligation to which the controller is subject; 
e) processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller; 
f) processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party, except where the interests or fundamental rights and freedoms of the data subject which require protection of personal data outweigh those interests, in particular where the data subject is a child. 

3. Assessment 
3.1 Processing of personal data 

3.1.1 Introduction 
The Enschede Executive Board has had Wi-Fi measurements carried out with the aim of measuring the effects of investments by the municipality of Enschede in the city centre with a view to responsible handling of public funds. The AP will first assess whether the data processed for these WiFi measurements are personal data within the meaning of Article 4, section 1, of the GDPR. 

3.1.2 Facts 
Given the extensive investigation in this case, the AP refers to the first chapter of Appendix 1 to this decision for the facts. Below is a brief summary of the facts after which the AP will reach a judgment. 

The Enschede Executive Board has decided to start 24/7 measurements via sensors in the city centre of Enschede as of 6 September 2017. The Enschede Executive Board has awarded this contract to City Traffic B.V., now Bureau RMC. Bureau RMC then hired \[CONFIDENTIAL\] for the installation and maintenance of the sensors in the city centre of Enschede and for the collection and validation of the data collected with the sensors. 

The AP has determined in its investigation that at least since 25 May 2018, eleven sensors have been installed at various shops in the city centre of Enschede. Each sensor has a range of up to 20 to 30 metres. From this date onwards, the sensors have captured the MAC address, signal strength, date and time of all mobile devices within range that had Wi-Fi enabled and temporarily stored them in the working memory of the sensor. This storage lasted as long as the device was within range of the sensor plus two minutes. The AP also determined that the sensors scan continuously. Furthermore, the AP has determined that the following data was sent to the server in real time for each detected device upon entering and two minutes after leaving the range of the sensor: status 1 or 2, pseudonymised MAC address, signal strength, date and time, spoofed indicator and sensor ID. 

All sensors run on one and the same pseudonymisation method and this method has not changed since 25 May 2018. The pseudonymization results in one MAC address on each of the sensors leading to one and the same pseudonymized MAC address. 

The data measured on one day by the sensors in the city center of Enschede are collected daily in a short-term table. The time of day at which the device was scanned by the sensor is recorded accurately to the second. In the period up to January 1, 2019, the pseudonymized MAC address was not cut off upon arrival at the server, but in the period from January 1, 2019 it was. The cutting off involves removing \[CONFIDENTIAL\]. The other data sent to the server, namely sensor ID, date, time, signal strength, status and spoofed indicator were transferred unedited to the short-term table. 

Two filters were applied to the short-term table each night, namely an opt-out filter and a resident filter. These filters result in certain records from the short-term table not ending up in the long-term table. The AP has found that the residents filter does not filter out all residents and that incorrect information is provided on the municipality's website about this. 

After applying the filters to the short-term table, two consecutive records of the same (truncated) pseudonymized MAC address resulted in one record in the long-term table. From May 25, 2018 to January 1, 2019, the long-term table contained the following data: pseudonymized MAC address, date, TimeIn, TimeOut, Retention, SignalStrengthIn, SignalStrengthOut.As of 1 January 2019, the pseudonymised MAC address was cut off and the pseudonymised MAC address was replaced by the cut off pseudonymised MAC address. The AP also notes that the long-term table contained data from 25 May 2018 onwards for a period of between six and seven months. 

The Enschede Executive Board has received estimates of various variables about unique visitors to the city centre of Enschede. For this purpose, the applicable data in the long-term table is deduplicated based on the cut off pseudonymised MAC address and then certain statistical calculations are applied to it. 

On 30 April 2020, the Enschede Executive Board instructed Bureau RMC to switch off the sensors as of 1 May 2020. The sensors will no longer provide counting data from 1 May 2020. 

The AP has established that the Enschede municipal executive has had data processed from approximately 1.8 million unique mobile devices from at least 25 May 2018 to 30 April 2020 and that the number of detections will be significantly higher. 

The AP has subsequently established that clear living patterns can be distilled from the long-term table after 1 January 2019. Given the regularity of the patterns, it can reasonably be concluded that the registrations associated with the pattern belong to one mobile device. The living patterns can, for example, reveal someone's place of residence or workplace, but also more sensitive data such as visits to medical institutions. 

The AP further notes that Bureau RMC has included in its privacy protocol, which specifically concerns processing via the City Traffic method, that it and/or its partners process personal data within the meaning of the GDPR from at least 25 May 2018. Furthermore, Bureau RMC has also included in its privacy protocol that the reports that clients receive from Bureau RMC do not contain any personal data. 

3.1.3 Assessment 
During the processing process (from detection by a sensor to storage in the long-term table), different sets of data can be distinguished. These sets are shown in the table below, with a distinction made between the period prior to the introduction of the truncating of pseudonymised MAC addresses (25 May 2019 - 1 January 2019) and the period after the introduction of this truncating (1 January 2019 - 30 April 2020). 

Phase in 
processing process 25 May 2018 - 1 January 2019 1 January 2019 - 30 April 2020 
Temporary storage on each sensor MAC address; Signal strength; Date; 
Time Same as prior to January 1 
2019 

Sending to and receiving on the server Pseudonymized MAC address; 
Signal strength; Date; Time; SensorID; Status; Spoofed indicator Same as prior to January 1 
2019 

Short-term table on the server Pseudonymized MAC address; 
Signal strength; Date; Time; SensorID; Status; Spoofed indicator Truncated pseudonymized MAC address; Signal strength; Date; Time; Sensor ID; Status; Spoofed indicator 
Long-term table on the server ID; Pseudonymized MAC address; 
Signal strengthIN; Signal strengthOUT, 
Date; TimeIN; TimeOUT; 
Dwell time; Sensor ID; BWCode ID; Truncated pseudonymized 
MAC address; Signal strengthIN; 
Signal strengthOUT, Date; 
TimeIN; TimeOUT; Residence time; 
Sensor ID; BWCode 

In the table above, the most valuable attributes for identifying natural persons are printed in bold. On the one hand, this concerns the MAC address, first pseudonymised and later truncated, and on the other hand, the combination of Date, Time in seconds and Sensor ID. This last combination shows very precisely when a mobile device was where; this is therefore a location data. The AP will therefore refer to this in this context as ‘location data’. 

In addition, two hatchings have been applied in the table above, namely light grey for the 
(pseudonymised) MAC address and dark grey for the truncated pseudonymised MAC address. In the remainder of this paragraph, the AP will demonstrate that all sets of data included in the table above qualify as personal data within the meaning of Article 4, section 1, of the GDPR. 

Light grey areas: The MAC address or pseudonymised MAC address in combination with the location data qualify as personal data within the meaning of the GDPR at every stage of the processing process 

Article 4, opening paragraph and section 1, of the GDPR stipulates that data qualify as personal data if it is information about ‘an identified or identifiable natural person’. The first situation, information about an ‘identified person’, does not apply in the present situation because the identity of the natural person does not follow directly from the MAC address or the pseudonymised MAC address and the location data. 

In order to be personal data, the data must therefore be information about ‘an identifiable natural person’. In this case, the natural person must be directly or indirectly identifiable on the basis of identifiers or characteristic elements. Possible identifiers in the present situation could be: the MAC address, the pseudonymised MAC address and the location data. 

A MAC address – if not spoofed – is a unique identification number of a mobile device. Because mobile devices such as smartphones and tablets are very personal, the natural person in question can be linked to the MAC address via his/her mobile device. This means that a non-spoofed MAC address can be an identifier of a natural person. 

The pseudonymised MAC address is, as explained in the facts, a conversion of a MAC address into another unique character string. This means that the pseudonymised MAC address – if the underlying MAC address has not been spoofed – can also be an identifier of a natural person. 

As for location data, this is explicitly mentioned in Article 4, section 1, of the GDPR as a possible identifier of a natural person, since location data can reveal a lot about the owner of the mobile device. 

The question now is whether a natural person can be identified at every stage of the processing process using the identifiers mentioned above. Below, the AP describes an example of a method for identifying the natural person to whom the data relates, per phase in the processing process. 

Method 1: Identification of persons based on the data stored on the sensor 
During the investigation, the AP determined that the MAC address and location data are temporarily stored in the working memory of each sensor and that the pseudonymised MAC address and location data are sent to the server. \[CONFIDENTIAL\] is responsible for managing all sensors in the city centre of Enschede and collecting the data. At \[CONFIDENTIAL\], the exact location of the sensors is known and they have access to the working memory and the software running on each sensor. At the same time as a new detection of a mobile device by a sensor, it is possible for someone from \[CONFIDENTIAL\], for example, to observe on site or via a camera which person comes within range of the sensor. Especially at quiet moments in the city centre, this leads directly to identification of the natural person. For verification purposes, the person may be asked for his/her MAC address. The same method of identification is possible in the case of pseudonymised MAC addresses and the associated location data, because the person in question can also be observed at the time of detection on site or via a camera. 

Method 2: identification of persons based on the data in the short-term table (until 1 January 2019) 
This method describes that it is also possible to identify natural persons based on the data in the short-term table. \[CONFIDENTIAL\] is responsible for collecting and validating the data. The short-term table is therefore held by \[CONFIDENTIAL\]. Data with ‘status 1’ associated with it are included in the short-term table from mobile devices that enter the range of a sensor, and if the same mobile device leaves the range of the sensor again shortly afterwards, data with ‘status 2’ are sent to the short-term table. However, if a mobile device remains within the range of a particular sensor, for example because that person lives or works there, then the short-term table will only contain a status 1 record with the pseudonymised MAC address, Date and Time. If a status 2 record is not available for a longer period of time, \[CONFIDENTIAL\] knows that the resident or shop employee in question is still within the range of the sensor. Someone from \[CONFIDENTIAL\] can then determine on site which person it is and identify the person. 

Method 3: identification of persons based on the data in the long-term table (until 1 January 2019) 
Finally, \[CONFIDENTIAL\] is also able to identify natural persons based on the historical data included in the long-term table. The AP has determined that living and exercise patterns can be recognised in the long-term table from after 1 January 2019, i.e. after the introduction of the clipping. This will also be the case in the long-term table from before 1 January 2019, when it still contained unique pseudonymised MAC addresses, because six months of data were also stored at that time. Based on a pattern, it is possible for \[CONFIDENTIAL\] to predict when the natural person in question is located somewhere, for example the person who moves between sensors in the city centre of Enschede every night between 04:00 and 05:00.At night, there are hardly any other people on the street and it is therefore possible for \[CONFIDENTIAL\] to identify this person on the spot or via a camera. 

The above three examples of methods of identifying natural persons by \[CONFIDENTIAL\] take into account recital (26) of the GDPR, which states that account must be taken of ‘all means that can reasonably be expected to be used by the controller or by another person to identify the natural person directly or indirectly’. The AP concludes that the above three methods of identifying natural persons do not require excessive effort from \[CONFIDENTIAL\] given the required time, costs and manpower. The criteria from the Breyer v Germany judgment have also been met, because the methods are neither prohibited by law nor impracticable in practice. The fact that \[CONFIDENTIAL\] employees do not use these means in practice to identify persons in the city centre of Enschede does not detract from the fact that they could reasonably do so. In addition to identification by \[CONFIDENTIAL\], the AP establishes that identification can also be done by employees of Bureau RMC. The AP has established that Bureau RMC has access to all data collected by \[CONFIDENTIAL\] based on the service level agreement with \[CONFIDENTIAL\]. The AP also establishes that even the Enschede municipal executive can perform the identification, because it also has access to all data based on the processing agreement with Bureau RMC. Identification of natural persons could also take place by linking the personal data collected with the sensors to the data collected via the various smart city projects in Enschede. 

With regard to the use of MAC addresses and location data, it should be noted that in 2015, the predecessor of the AP ruled in an investigation into a company that provided WiFi tracking that the registration of MAC addresses and location data via sensors qualifies as the processing of personal data because identification of the natural persons was possible in the aforementioned Method 1. In addition, the joint European data protection supervisors stated in their opinion on apps on ‘smart devices’ that location data and unique identifiers of mobile devices are personal data. In their opinion on the proposed e-Privacy Regulation, they stated: ‘In this context, it should be noted that these MAC addresses are personal data, even after security measures such as hashing have been undertaken.’ 

Based on the above, the AP concludes that the combination of MAC address and location data and the combination of pseudonymised MAC address and location data on the sensor from 25 May 2018 to 30 April 2020 and in the short-term and long-term table up to 1 January 2019 qualify as personal data within the meaning of the GDPR. 

From the privacy protocol of Bureau RMC and the infographic with which Bureau RMC provides an explanation of the City Traffic method, the AP concludes that Bureau RMC also believes that it and/or its partners processed personal data up to the moment of truncating the pseudonymised MAC address. 

Dark grey areas: Cutting off the pseudonymised MAC address does not eliminate all three risks of traceability, linkability and deducibility, which means that it is still personal data within the meaning of the GDPR 

Bureau RMC states that the short-term and long-term tables no longer contain personal data within the meaning of the GDPR after the introduction of 'anonymisation on the server'. The infographic on the City Traffic method formulates this as follows: "The anonymised code is now no longer traceable, linkable and identifiable to a unique device. This means that our data does not contain any personal data." 

The AP then concludes that the chosen anonymisation method of (only) cutting off a small part of the pseudonymised MAC address does not sufficiently eliminate the risks of traceability, linkability and deducibility and that the data qualify as personal data. The AP explains this below. 

Linkability 
The risk of linkability is present if it is possible to link at least two records about the same data subject or group of data subjects (in the same database or in two different databases). 

The AP notes that linking records about the same data subject or group of data subjects actually takes place. Namely, two consecutive records with the same truncated pseudonymized MAC address are linked in the short-term table and included in the long-term table. In addition, the data in the long-term table is deduplicated based on the truncated pseudonymized MAC address to serve as the basis for the figures for the municipal executive of Enschede about unique visitors to the city center of Enschede. The AP also refers to the statement of the employees of \[CONFIDENTIAL\] that the loss of detail due to the truncating of part of the symbols of the hashed MAC address is limited, so that linking is still possible. 

It follows from the above that the chosen anonymization technique does not exclude the risk of linkability. Since it is required that all three risks are excluded, the conclusion can already be drawn that the anonymisation technique fails and that re-identification of natural persons is possible. For the sake of completeness, the AP also addresses the other two risks. 

Traceability 
The risk of traceability is present if it is possible to individualise a person in a dataset by highlighting certain records. 

The AP has been able to demonstrate that clear living patterns can be derived from the long-term table. These patterns are linked to a single truncated pseudonymised MAC address, which means that it is possible that the patterns contain the location data of multiple mobile phones. However, given the regularity of the patterns, it can reasonably be concluded that all registrations belonging to the pattern originate from a single mobile device, and therefore one natural person. This means that a person can be individualised. The AP therefore concludes that the risk of traceability cannot be ruled out either. 

Deducibility 
A risk of deducibility exists if it is possible to derive the value of a personal characteristic with a high probability from the values of a series of other attributes. From the three visualisations of the long-term table, a value of a personal characteristic can be derived with a high probability, for example the sleeping place or the location of the employer. The AP therefore concludes that cutting off the pseudonymised MAC address does not eliminate the risk of deducibility. 

Based on the above, the AP concludes that the short-term and long-term tables used from 1 January 2019 are insufficiently resistant to re-identification. 

In addition, the AP concludes that the combination of the cut-off pseudonymised MAC addresses and the detailed location data in these tables qualify as personal data within the meaning of Article 4, section 1 of the GDPR, because the previously described methods 2 and 3 of identification also apply in the case of cut-off pseudonymised MAC addresses. Method 2 works because it is also visible in the short-term table if there is only a status 1 record, and therefore that the person belonging to the truncated pseudonymized MAC address is still within the range of the sensor. Someone from \[CONFIDENTIAL\] can then determine on site which person it concerns and identify the person. For method 3, the AP had already based this on the long-term table with truncated pseudonymized MAC addresses. 

3.1.4 Opinion of the Enschede Executive Board and response from the AP 
The main point of the Enschede Executive Board is that the board only receives anonymous, aggregated data from Bureau RMC. Below is a summary of the opinion of the Enschede Executive Board with the response from the AP. 

Operation and storage of sensors 
As the Enschede Executive Board understands from Bureau RMC/\[CONFIDENTIAL\], a sensor has a range of potentially up to 70 meters around the measuring point. The sensor captures the Wi-Fi signals emitted by a device within the sensor area. The sensor receives a ‘packet’ of data including the MAC address of the device and the Wi-Fi strength. According to the municipal executive, no (other) personally identifiable data is registered. The sensor also receives no longitude, latitude or address data. 

The status messages sent to the server are accompanied by the hashed MAC address. This hashing takes place immediately upon forwarding. In its investigation, the AP indicates that non-pseudonymised (i.e. original) MAC addresses are stored in the working memory of the sensor. According to the municipal executive of Enschede, this is correct, but only very temporarily (a few milliseconds); without this temporary storage in the working memory of the sensor, hashing would not be possible. However, according to the municipal executive of Enschede, this cannot be used for identification. After all, it is not possible to gain access to the sensor in such a way that a MAC address could be retrieved. No MAC addresses are permanently stored and there are no lists or databases with MAC addresses available. Bureau 
RMC/\[CONFIDENTIAL\] cannot gain access to the MAC addresses on the sensors. 

The AP does not follow the view of the board of mayor and aldermen. The fact that the sensors potentially have a range of up to 70 meters does not detract from the fact that in this case the sensors were "calibrated" and adjusted to the other side of the road upon installation.The sensors do not have a range of 70 meters around the measuring point, but a range up to the other side of the street. Furthermore, the AP notes that no GPS data is required to determine the location. After all, the location of the sensor is known to \[CONFIDENTIAL\] and the sensor ID is sent to the server. The fact that this data is in a different database does not mean that \[CONFIDENTIAL\] does not have access to it. 

The Enschede municipal executive also states that access to the MAC addresses on the sensor is not possible. In response to this, the AP would like to emphasize the following. Two modules are active on the sensor. The first \[CONFIDENTIAL\] is the receiving module and keeps track of MAC addresses as they are received. The working memory of this module therefore contains all MAC addresses that have also been received by the sensor within the past two minutes. The second module \[CONFIDENTIAL\] receives status-1 and status-2 messages from the first module. The first message means “a new phone has been detected” and the second means “the phone has not been seen for more than two minutes”. The two modules communicate via a so-called \[CONFIDENTIAL\] and unhashed MAC addresses are sent over it. The hashing only takes place in the second module, just before the data is sent to the server. \[CONFIDENTIAL\]. \[CONFIDENTIAL\].23 \[CONFIDENTIAL\]. 

Identification of natural persons 
Furthermore, the Enschede Executive Board takes the position that the MAC addresses that the sensor captures, whether or not in combination with a location data, cannot directly or indirectly lead to the identification of an individual natural person. The Enschede Executive Board does not dispute the AP’s finding that a MAC address, for example in combination with a location data, could identify a natural person in some situations. However, the Enschede Executive Board would like to emphasise that direct or indirect identifiability could only occur if there is (a link with) additional data. 

In its report, the AP assumes too quickly, in the eyes of the Enschede board of mayor and aldermen, that there is traceability. According to the Enschede board of mayor and aldermen, the publication of WP29 explicitly shows that the single MAC address is not considered personal data. According to WP29, a MAC address is only personal data if it is combined with other data. In this case, however, there is no combination of MAC addresses with other data. The only other data that could possibly play a role in this context is a (rough) location data. In this case, however, this location data is too inaccurate to be able to identify an individual in conjunction with a MAC address. 

The Enschede board of mayor and aldermen also takes the position that the criteria from the Breyer v Germany judgment have not been met in order to be able to speak of personal data. The MAC addresses are namely not stored, but hashed directly on the sensor, after which the original MAC address is deleted. It is therefore not possible to access the original MAC addresses. Future identification is impossible for that reason alone. 

According to the Enschede municipal executive, the data sent from the sensor do not contain any direct location data. The Sensor ID is nothing more or less than an indication of the sensor; it does not yet say where the sensor is exactly located. Moreover, the Sensor ID only comes into view for the first time when sending the hashed MAC addresses of the sensor to the server. Due to the separate storage, the link between the Sensor ID and the MAC address can only take place later in the counting process. However, from that moment on, the MAC address is no longer available. After all, the MAC address is hashed when it is sent to the server and then truncated. Identification, also on the basis of a so-called location data, cannot therefore take place according to the Enschede municipal executive. 

The AP does not follow the view of the Enschede municipal executive. The municipal executive of Enschede wrongly emphasises the fact that the MAC addresses are transformed and are not stored independently for any period of time. However, they ignore the data that the AP regards as personal data. 
The combination (pseudonymous identifier + date/time + location) is personal data. In this case, this is the combination of a truncated MAC address, date plus time in seconds and the ID of the sensor. The possible possibility of going back from a hashed and truncated MAC address to the original MAC address is therefore irrelevant. The AP is concerned here with the fact that the pseudonymous identifier has changed too little over time. 

The possibility of derivation (and ultimately identification) is a consequence of design decisions in the platform. Storing the unchanged identifiers for a long period of time makes it possible to track individuals. At that time, they are only displayed as a number. But this is the same number for six months. In this case, one cannot speak of robust anonymisation techniques. This was certainly not the case during the AP investigation. 

Because the same identifier is used time and again, it is possible to track people. This makes time and location a factor. And as the AP has already stated, the exact location of the sensors is known to \[CONFIDENTIAL\], whereby the range of the sensors is set to the other side of the street and not 70 meters. Movement patterns are highly individual. The Enschede municipal executive underestimates the sensitive nature of location data that was always stored for six months. 

Lifestyle patterns 
The AP concludes that lifestyle patterns can also be distilled from the hashed and truncated data that can in themselves be traced back to an individual. However, the municipality of Enschede is of the opinion that traceability to an individual based on a lifestyle is not possible in this case. 

In the eyes of the Enschede municipal executive, assuming that a certain pattern will also occur in the future can never be the basis for a real, indirect identification. Profiling is only possible if multiple counts are collected from a pseudonym. According to the municipality, most counts in this case are based on one-off counts. This applies to approximately 70% of the counts. 

In addition, in the living patterns that the AP believes it can abstract, there can theoretically be an overlap of multiple devices, due to the truncating of the hashed values. It cannot be ruled out in advance that two or more hashed, and then truncated, data will have the same value. Furthermore, it is not only the case that individuals have devices with a MAC address with them, but that various other devices such as PIN devices, smart TVs and printers can also be found in the area. 

The only possible method of identification that the AP outlines is identification by an employee of Bureau RMC/\[CONFIDENTIAL\] on site or via remote camera images. According to the municipal executive of Enschede, this only identification option is unworkable or even impossible. The inappropriateness of a request, namely asking a person what MAC address he/she has, is no more than a theoretical one. Moreover, Bureau RMC/\[CONFIDENTIAL\] does not have a MAC address at its disposal to verify that MAC address. After all, according to the Enschede municipal executive, the MAC address is hashed immediately and later anonymized. Furthermore, the MAC address is not recorded in a list or, for example, a database, which means that identification and checking cannot take place afterwards. 

According to the Enschede municipal executive, real-time identification, which is really necessary to be able to identify a natural person and also the only example of identification that the AP gives in its investigation report, cannot take place due to the delay in the counting system and because the search area is too large. The AP must also take into account that at busy times there may be hundreds, if not thousands of people in the sensor area. 

Furthermore, contrary to what the AP believes, the municipality of Enschede has no possibility at all to take cognizance of any data that can be traced back to individuals at Bureau RMC/\[CONFIDENTIAL\]. According to the Enschede board of mayor and aldermen, the mere contractual possibility is insufficient to assume that the municipality actually had and has access to the data in question. 

The AP largely does not follow the view of the Enschede board of mayor and aldermen. As stated above, the AP considers the anonymization techniques used to be insufficient, which means that it was possible to track individuals when storing the unchanged identifiers for a long period of time. The AP does accept the fact that in 70% of the cases the counts are done on the basis of one-off counts. However, that does not detract from the fact that the Enschede board of mayor and aldermen does process multiple counts of tens of thousands of citizens and that the one-off visitors could be identified on the basis of the data on the sensors. And although there are of course also some devices such as printers in the city, the AP finds it inconceivable that these are visible at multiple locations because they move through the city. The resident filter is precisely an attempt to filter out these types of devices. 

The AP maintains its position that identification of natural persons is possible in the three ways described in paragraph 3.1.3. In doing so, the AP has taken into account all means that can reasonably be expected to be used by the controller or by another person to identify the natural person directly or indirectly, for example selection techniques.The combination (pseudonymous identifier + date time + location) makes it possible to identify someone. It is not without reason that article 4, section 1, of the GDPR considers location data as an identifier. After someone has been identified, they can be asked for their MAC address for verification purposes. The AP has mentioned this verification question as an example. However, there are many ways to verify the identity of people. 

If Bureau RMC/\[CONFIDENTIAL\] had implemented all the technical measures properly, there would be no tracking. According to the AP, the step of actually identifying someone therefore does not require a disproportionate amount of effort. And in some cases – the night walker, for example – identification requires only a very limited amount of effort. Living patterns can be traced from the collected data, allowing you to determine someone's place of residence or workplace. The AP also refers to page 12 of this decision for an explanation of why real-time identification was indeed possible. 

Finally, it is not required that all information by means of which the data subject can be identified, be held by one and the same person.26 It is important here that the Enschede Executive Board has lawful access to all means that can be used to directly or indirectly identify a natural person. The fact that the Enschede Executive Board has contractually agreed to be able to request data from Bureau RMC and \[CONFIDENTIAL\], gives the Executive Board excellent lawful access to the personal data. The fact that the Enschede Executive Board does not (want to) make use of this is legally irrelevant. 

3.2 Controller 

3.2.1 Introduction 
In the context of the question of whether the Enschede Executive Board processes the personal data in line with Article 5, first paragraph, opening sentence and under a in conjunction with Article 6, first paragraph, of the GDPR, it is also important to determine who is to be regarded as the controller as referred to in Article 4, section 7, of the GDPR. The determining factor is who determines the purpose and means of processing personal data. 

3.2.2 Facts 
Given the extensive investigation in this case, the AP refers to the second chapter of appendix 1 to this decision for the facts. Below is a brief summary of the facts, after which the AP will reach a verdict. 

The Enschede municipal executive has decided to start 24/7 measurements via sensors in the city centre of Enschede as of 6 September 2017. The contract for this has been awarded to City Traffic B.V., now RMC. In addition, the municipality of Enschede has placed a press release and a number of Q&As about the WiFi measurements on its website. 

The WiFi measurements were carried out with the aim of measuring the effects of municipal investments in the city centre of Enschede with a view to responsible handling of public funds. In addition, the municipality points out that the measurements can provide insight into subjects that are important for fulfilling its public task, such as the effects of road works, holding shopping Sundays and market days, city center promotion, the attractiveness of events, the acquisition of shops and catering establishments and determining whether and when intervention is required in the context of order and safety. 

On September 26, 2017, the Enschede Executive Board and the predecessor of Bureau RMC concluded a processing agreement in the context of the Wi-Fi measurements in the Enschede city center. This agreement stipulates that the Enschede Executive Board is the controller for the processing of personal data. It has also been stipulated that the processor, Bureau RMC, processes the data on behalf of the Enschede Executive Board. Bureau RMC only processes the data on behalf of the Enschede Executive Board and will also follow all reasonable instructions in this regard. At all times, at the request of the Enschede Executive Board, all data originating from the municipality of Enschede relating to the processing agreement will be provided to the Enschede Executive Board. Bureau RMC may only outsource the work to third parties after prior written permission from the Enschede Executive Board. And the parties agree that Bureau RMC will have the data processed by \[CONFIDENTIAL\], with which Bureau RMC has concluded a level service agreement. 

The Enschede Executive Board played a guiding role in the number and locations of the sensors used for the WiFi measurements. In addition, following the publication of the AP on 30 November 2018 about WiFi tracking, the Enschede Executive Board instructed Bureau RMC to temporarily pause the WiFi measurements in the city centre of Enschede. As of 1 January 2019, at the request of the Enschede municipal executive, Bureau RMC introduced the so-called “anonymisation on the server”, whereby the last three characters of the pseudonymised MAC addresses are cut off. Finally, on 30 April 2020, the Enschede municipal executive instructed Bureau RMC to switch off the sensors as of 1 May 2020. 

3.2.3 Assessment 
Article 4, opening words and section 7, of the GDPR defines a controller as a natural or legal person, public authority, agency or other body which, alone or jointly with others, determines the purposes and means of the processing of personal data. In this case, this is the processing of the MAC address of the mobile device, the time (in seconds) and the date of detection by the sensor and the sensor ID. It is not required that the controller has the personal data in its possession. 

The AP is of the opinion that the Enschede Executive Board is the controller for the processing of personal data by means of the Wi-Fi counts in the city centre of Enschede, because it is the party that has determined both the purpose and partly the means for the processing. It motivates this as follows. 

The party that determines the purpose of the processing of the personal data is the party that determines why the processing takes place. As discussed in paragraph 3.2.2, the Enschede Executive Board was the party that decided to carry out Wi-Fi measurements. In addition, the data is processed for a purpose determined by the Enschede Executive Board, namely measuring the effects of municipal investments in the city centre of Enschede. The other purposes that the Enschede Executive Board cites in its opinion for the Wi-Fi measurements (for example measuring the effects of road works, city centre promotion and shopping on Sundays) have also been determined by the Executive Board and are also based on the Municipal Act. Furthermore, on 30 November 2018, the Enschede Executive Board temporarily paused the processing of the RMC Bureau and switched off the sensors on 1 May 2020. The Enschede Executive Board was also the party that determined in its executive decision that personal data would be processed, and the party that could therefore decide to stop doing so. This means that the Enschede Executive Board has a say in whether or not to process the personal data. The AP concludes that the Enschede Executive Board determined the purposes for processing personal data. 

The party that decides how the processing takes place must be regarded as the party that determines the means. As discussed in paragraph 3.2.2, the Enschede Executive Board decided to use a service provider, namely Bureau RMC, for the processing of personal data. The technical elaboration of the processing of the personal data was delegated to Bureau RMC, whereby the Enschede Executive Board did have the option to issue instructions based on the processing agreement. The Enschede Executive Board also influenced the means for processing by partly determining how many sensors would be placed and where they would be placed. The AP concludes that the Enschede Executive Board, by determining who would carry out the processing and also the manner in which the processing takes place, for example by determining the number of sensors and their locations, partly determined how the processing of personal data took place. 

Based on the above, the AP concludes that the Enschede Executive Board determined both the purpose and partly the means for the processing and thus qualifies as a controller within the meaning of Article 4, opening words and section 7, of the GDPR for the processing of personal data via sensors in the city centre of Enschede. 

3.2.4 Opinion of the Enschede Executive Board and AP response 
In its opinion, the Enschede Executive Board argues that it is not a controller within the meaning of the GDPR. In doing so, she makes a distinction between her responsibility as a client, which she does not dispute, and the concept of controller as described in the GDPR. Although the Enschede Executive Board designates itself as controller in the processing agreement, there are, according to her, factual circumstances that indicate that she is not, or only jointly, controller. For example, the operation of the WiFi counting technology, the manner in which the data is collected, which data exactly is collected for the desired output, the choice of hashing and truncating, the storage and the (in consultation or otherwise) retention period are determined by Bureau RMC. The Enschede Executive Board also has no access to the data and no say in the fact that Bureau RMC provides or even sells data to third parties. The Enschede Executive Board also argues that it does not prescribe the frameworks and/or conditions within which the data is processed. Furthermore, Bureau RMC states in article 1.1 of its CityTraffic Privacy Protocol that it is itself controller.

The AP has taken note of the argument of the Enschede municipal executive, but does not follow it. Below, it will first be explained why the AP believes that the Enschede municipal executive is the data controller. The AP will then discuss why there is no joint processing responsibility. 

Processing responsibility 
The factual circumstances referred to by the executive all relate to the means for processing. After all, it concerns how the processing takes place. Although Bureau RMC has influence on the method of processing, the Enschede municipal executive is the one who has chosen to use the services offered by Bureau RMC, the one who has determined how many sensors would be placed and where they would be placed. In doing so, the municipality has (also) determined which means are used for processing. 

According to the AP, the fact that the municipality would not have access to the data processed by Bureau RMC does not mean that it cannot be a data controller within the meaning of the GDPR. The Court of Justice of the European Union (CJEU) has ruled that it is not required that all information by which the data subject can be identified be held by one and the same person. 

The Enschede Executive Board also points out that Bureau RMC can decide to sell the data to a third party. The AP makes a distinction between different processing operations. First of all, there is the processing of personal data by Bureau RMC for the purpose of the Enschede Executive Board, namely measuring the effects of municipal investment in the city centre. This is the processing that the investigation relates to and for which the AP qualifies the executive board as the controller. This responsibility is limited to the processing operations for which the Enschede Executive Board determines the purpose and partly the means. In addition, there is the possible processing in which Bureau RMC can give other parties access to the information that it also uses to supply the data to the Enschede Executive Board. Bureau RMC may have this because the processing agreement stipulates that Bureau RMC is entitled to a cut-off file (stripped of personal data), a copy of the data that can be used for anyone who makes a request about, for example, crowds at a certain location in the city centre of Enschede. In that second situation, there is processing that falls outside the purposes of the Enschede Executive Board, and therefore also outside its responsibility as the controller. The fact that the Enschede Executive Board is not the controller for this other, second processing does not detract from the conclusion that the Enschede Executive Board is still the one who determines the purpose and partly the means for the first processing and therefore qualifies as the controller for this. 

The Enschede Executive Board further argues that it does not prescribe the frameworks and/or conditions within which the data are processed. The AP does not follow this argument. The processing agreement stipulates that Bureau RMC will follow all reasonable instructions from the Enschede Executive Board. Bureau RMC has already done this by stopping the processing twice at the request of the municipal executive. The AP concludes from this that the executive can, if desired, determine the frameworks and/or conditions within which the data are processed. The fact that the municipality has not always made use of this possibility, or does not intend to do so, does not detract from its existence. 

Finally, the executive argues that the CityTraffic Privacy Protocol stipulates that Bureau RMC is the controller. The AP does not follow this argument either. First of all, paragraph 1.1 of the Privacy Protocol states that CityTraffic is the controller, insofar as it (alone or jointly with others) determines the purposes and means of processing MAC addresses. According to the AP, this does not mean that Bureau RMC is the controller in any case. Furthermore, Bureau RMC and the municipal executive of Enschede have stipulated in the processing agreement concluded between them that the municipal executive of Enschede is the controller. Since the processing agreement is the agreement concluded between the parties, in contrast to the privacy protocol of Bureau RMC, this processing agreement must be followed. In addition, the municipal executive of Enschede is the party that actually determines the purposes and partly the means for the processing. In such a situation, where the actual situation deviates from a “paper” reality, such as the privacy protocol, the actual situation is leading. 

Joint processing responsibility 
The municipal executive argues that if the AP is of the opinion that the board is the controller, then there is only joint processing responsibility. The AP does not follow this argument and motivates this as follows. 

Article 26 of the GDPR stipulates that when two or more controllers jointly determine the purposes and means of the processing, they are joint controllers. Article 4, opening words and section 7, of the GDPR also stipulates that the controller is the party that, alone or together with others, determines the purpose and means of the processing. Both articles stipulate that the (joint) controller determines the purpose and means of the processing. The factual circumstances cited by the Enschede Executive Board show that Bureau RMC has a degree of influence on the means of processing. However, it has not been demonstrated that Bureau RMC determines the purposes for the processing of personal data for the Enschede Executive Board. Since Bureau RMC does not determine the purposes for the processing, it cannot be the controller for this. As a result, there can also be no question of joint processing responsibility. The fact that Bureau RMC partly has influence on determining the means for the processing does not alter this, because the (joint) controller must determine the purpose and means of the processing. 

3.3 Lawfulness of the processing 

3.3.1 Introduction 
In paragraph 3.2, the AP established that the Enschede Executive Board is the 
controller for the processing in the context of the WiFi measurements. The AP will assess below whether the Enschede Executive Board can successfully rely on one of the grounds from Article 6 of the GDPR for this processing. 

3.3.2 Assessment and response to the opinion 
Article 5, first paragraph, opening sentence and under a, of the GDPR stipulates, among other things, that personal data must be processed in a manner that is lawful with regard to the data subject. This principle of lawfulness is complied with if there is a sound legal basis for the processing. 

Article 6, first paragraph, of the GDPR then provides an exhaustive list of the grounds for lawful data processing. This article states that processing is only lawful if and to the extent that at least one of the six grounds mentioned has been met. The grounds that may be considered by the Enschede Executive Board are: c) necessary to comply with a legal obligation; e) necessary for the performance of a task carried out in the public interest or in the exercise of official authority; f) legitimate interest. 

3.3.2.1 Legal task or task in the public interest 
Article 6(3) of the GDPR provides that the processing of personal data based on legal bases (c) and (e) must be established by Union or Member State law to which the controller is subject. The purpose of the processing must be determined by Union or Member State law or, in relation to legal base (e), be necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller. 

Recital 45 of the GDPR states: “This Regulation does not require specific legislation for each individual processing operation. It is sufficient to have legislation that provides the basis for several processing operations on the basis of a legal obligation to which the controller is subject, or for processing that is necessary for the performance of a task carried out in the public interest or in the exercise of official authority. (...)” 

Recital 41 of the GDPR does state that the legislation on the basis of which the processing operations are carried out must be sufficiently clear, precise and predictable: “However, that legal basis or legislative measure must be clear and precise, and its application must be predictable for those to whom it applies, as required by the case-law of the Court of Justice of the European Union (‘Court of Justice’) and the European Court of Human Rights.” 

Basis (c) and (e) both require that the processing be necessary. This requirement of necessity means that the principles of proportionality and subsidiarity must be met. The principle of proportionality means that the infringement of the interests of the persons involved in the processing of personal data may not be disproportionate to the purpose to be served by the processing. Based on the principle of subsidiarity, the purpose for which the personal data is provided may not reasonably be achieved in another way that is less detrimental to the person involved in the processing of personal data. 

The Enschede municipal executive states in its opinion that the processing in the context of WiFi counts can be based on Article 6, paragraph 1, sub e, of the GDPR.According to the board, the AP fails to recognise that the municipality of Enschede has a very broad task. The Municipal Act stipulates that the municipality must conduct the ‘daily management’ of the municipality. According to the board, this task is not simply formulated broadly, but rather with a well-considered reason. In the eyes of the municipality, its responsibilities, and by extension the need to carry out the WiFi counts in order to meet these various responsibilities, are evident from various (formal and material) laws and regulations and documents. 

The Enschede board of mayor and aldermen refers to article 160 paragraph 1 sub a and h, article 212 paragraph 1, article 213 paragraph 1, article 172 paragraph 1 of the Municipal Act. And to the retail agenda of the national government, Vision for a vibrant city centre and the mobility vision, the APV of Enschede, the assessment framework for event permits, the additional rules for terraces, the municipal budget and the subsidy regulation. 

According to the Enschede municipal executive, pedestrian counts can provide insight into various aspects that are important to municipalities in order to be able to base their policy on various areas and therefore to fulfil the ‘public task’ that they have as a municipality towards their residents. According to the executive, this information is only truly valuable if it is ‘continuous’ information, that is to say, not exclusively information that is based on incidental events. In the eyes of the municipality, the chosen method of counting is actually more privacy-friendly than, for example, manual counts. Manual counts have many disadvantages: double counting cannot be prevented, and so manual counts do not provide a reliable picture. Moreover, this is very labour-intensive and therefore expensive. In the latter case, the counter sees by definition which person is where. Other alternatives to counts than via WiFi are actually not available. Infrared counts do exist, but this method also does not remove double counting from the counts. The AP asked the Enschede Executive Board whether it is necessary for municipal tasks to know visitor flows or the number of visitors per (measuring) point. The Enschede Executive Board made the following statement about this. At the start of the pedestrian counts, the Enschede Executive Board was still under the assumption – based on information that the Executive Board obtained from Bureau RMC at that time – that Bureau RMC would provide anonymous information about visitor flows. The term “visitor flows” was also mentioned in the Executive Board decision to switch to visitor counts via Wi-Fi. According to the Enschede Executive Board, this explains why the Executive Board’s opinion sometimes refers to visitor flows. However, after the start of the visitor counts and the first results of the count data (around the beginning of 2018), it turned out that the Executive Board could not see any flows, but could see crowds per sensor point. The Enschede Executive Board therefore stated that it only needed the number of pedestrians at a certain point and time. The AP does not follow the view of the Enschede municipal executive and arrives at the following assessment. The AP first notes that the Enschede municipal executive is not legally obliged, laid down in EU or national law, to have the Wi-Fi measurements carried out in the city centre. The processing of personal data is also not based on a more broadly formulated duty of care or legal obligation. The AP therefore first notes that the Enschede municipal executive cannot successfully rely on the basis in Article 6, paragraph 1, sub c, of the GDPR. 

The AP then investigates whether the Wi-Fi measurements could be processing that is necessary for a task of general interest. The AP has already concluded that the Wi-Fi measurements are processing in the context of municipal government tasks. Government tasks are tasks of general interest. For example, the Enschede municipal executive is authorised to ‘conduct the daily management of the municipality’ on the basis of Article 160 of the Municipal Act. This concerns a task of general interest, which can include, for example, keeping the finances of the municipality in order, spatial planning and urban development. 

The AP notes that recital 45 of the GDPR states that specific legislation is not necessary for each individual processing. In the present case, this means that the various processing operations that have been established can be based on one legal provision. However, recital 41 of the GDPR does require a certain degree of specificity of the legislation. This recital states that the legislation, in this case the task of general interest, must be clear, precise and predictable. This requirement of foreseeability means, among other things, that the (legal) consequences of certain actions must be foreseeable to a certain extent for the citizen. 

The requirement that interference with the exercise of the right to respect for private life as referred to in Article 8 of the ECHR must be provided for by law (‘in accordance with the law’) means that such interference must be based on a properly published legal provision from which the citizen can determine with sufficient precision what data relating to his private life may be collected and recorded for the purpose of performing a specific public task, and under what conditions such data may be processed, stored and used for that purpose. A sufficiently precise legal basis is therefore required. This means that, for example, the general task of a public service cannot serve as a legal basis for data processing in all cases. It also means that an obligation for a public authority to provide data while that authority has a statutory duty of confidentiality must be expressly and clearly laid down in a legal provision, and that it is not permissible for such an obligation to be inferred solely from the legislative history or the coherence between legal provisions or to be assumed on the grounds of the effectiveness of a legal provision. The AP concludes that the statutory task of ‘carrying out the daily management of the municipality’ does not meet the above requirements, because this task is formulated too broadly, is not concrete and is therefore not sufficiently predictable. A citizen cannot sufficiently infer from Article 160 of the Municipal Act which data relating to his private life can be collected and recorded with a view to fulfilling this government task, and under which conditions this data can be processed, stored and used for that purpose. The AP is aware that the legislator has deliberately formulated Article 160 of the Municipal Act broadly. This alone means that this broadly formulated task description (for the sake of the effectiveness of a statutory regulation) cannot simply serve as a legal basis for this data processing. 

The Enschede Executive Board also refers in its opinion to various articles in the Municipal Act, the General By-law and several documents. The AP notes that only Article 160 of the Municipal Act regulates the authority of the Enschede Executive Board. The other articles relate to the powers of other bodies of the municipality. The Board of Mayor and Aldermen has been designated by the AP as the controller, which means that the other articles of law cannot apply as Member State law in which the task of general interest is assigned to the controller. 

The AP has also reviewed the entire APV of Enschede, but the AP did not come across any articles from which a citizen can infer that the personal data mentioned in paragraph 3.1 can be processed for government tasks and under which conditions that data can be processed, stored and used for that purpose. Finally, the other documents cited by the Board of Mayor and Aldermen of Enschede cannot be a basis for the processing of personal data because they are not legal provisions. 

The AP therefore determines that in this case the Board of Mayor and Aldermen of Enschede cannot successfully appeal to the basis in Article 6, first paragraph under e, of the GDPR. The AP does not mean to say that a municipality can never have a legal basis for counting visitors. However, the legal provision must be formulated more specifically for this situation and therefore be sufficiently predictable. 

For the sake of completeness, the AP also maintains its position that in the present situation the necessity requirement has not been met because the principles of proportionality and subsidiarity have not been met. The infringement of the privacy of hundreds of thousands of citizens whose MAC addresses and location data have been captured and processed via the sensors is disproportionate in relation to the purpose of the processing, namely testing the effectiveness of investments in the city centre of Enschede. In this assessment, the AP takes into account that the right to protection of the personal privacy of citizens in public spaces weighs heavily, given the reasonable expectation of the public not to be followed unnoticed as a passer-by and the fact that data was recorded systematically and for a long period of time. The current processing of personal data is an extra major infringement of the protection of personal privacy, particularly for residents and frequent visitors of the municipality of Enschede. The fact that the municipal executive of Enschede did not intend to process personal data does not detract from the fact that personal data were processed under the responsibility of the executive. This undermines the citizen's sense of being unobserved in public and of having confidence in the government.

In addition, the subsidiarity principle has not been met because the objectives pursued by the Enschede Executive Board can be served in a different, less far-reaching way. Even in ways that do not involve the processing of personal data. Whether intentionally or unintentionally, the Enschede Executive Board had personal data processed under its responsibility, which made it possible to track citizens. However, the Enschede Executive Board has stated that it does not need visitor flows, but only the crowds per sensor point. As a result, the processing of personal data under the responsibility of the Enschede Executive Board between 25 May 2018 and 30 April 2020 was unnecessary and also excessive. In addition to the fact that insufficient technical measures were taken in the database used, the personal data were also unnecessarily (apart from the raw data) stored for six months at a time. 

There are sufficient methods to measure the crowds at a specific location where the protection of personal data is better guaranteed. For example, market research can provide insight into crowds. But counting people using an automatic visitor counter that emits an infrared beam is also an extremely effective technique. This technique is also affordable and provides the opportunity to provide the continuous information that the Enschede municipal executive needs. Double counting can be filtered out using statistical calculations. Almost every method or technique used has measurement errors and requires calibration, often also at the level of individual sensors. This can be used to correct any measurement errors in the counts. In addition, a small measurement error, if it still exists after calibration, is not insurmountable, given that numbers are ultimately totalled and grouped. 

3.3.2.2. Legitimate interest 
The first paragraph of Article 6 of the GDPR stipulates that the basis f) legitimate interest does not apply to processing by government agencies in the context of the performance of their duties. Recital (47) of the GDPR provides the following explanation: “(…) Since it is up to the legislator to create the legal basis for the processing of personal data by public authorities, that legal basis should not apply to processing by public authorities in the context of the performance of their tasks.” 

Public authorities will not be able to use the ‘legitimate interest’ basis in the performance of their tasks, but will have to use other grounds. This does not apply to the extent that the public authority carries out ‘typically business operations’ in which personal data are processed, such as the processing of personal data that is necessary for the security of government buildings. For operations that fall outside the performance of the task, a basis may be assumed in the legitimate interest of the organisation. The government is not essentially different from a private party in this respect. 

Article 6, paragraph 1, of the GDPR therefore stipulates that basis f) does not apply to ‘processing by public authorities in the context of the performance of their tasks’. This does not apply to the extent that the public authority carries out ‘typically business operations’. The AP has already determined that the purpose of the WiFi measurements is to test the effectiveness of municipal investments in the city centre of Enschede, with a view to the responsible handling of public funds. The AP concludes from this that the WiFi measurements are processing in the context of municipal government tasks. The AP therefore determines that the Enschede Executive Board cannot rely on the basis of legitimate interest within the meaning of Article 6, paragraph 1, sub f, of the GDPR. It is up to the legislator to create the legal basis for personal data processing by government agencies for these types of cases. 

However, in its opinion, the Enschede Executive Board is of the opinion that collecting information about visitor numbers and visitor flows in the context of WiFi counts is a legitimate interest for the Enschede Executive Board, entrepreneurs, investors, visitors and residents. According to the Enschede Executive Board, the AP acknowledged in the Bluetrace case that there may be a legitimate interest in collecting such information. 

Furthermore, the Enschede Executive Board states that the processing in the context of WiFi counts does meet the necessity requirement. The WiFi counts are necessary to achieve the interests that are being pursued as described above. It is not possible to collect this information in a less intrusive way. According to the Enschede Executive Board, WiFi counts can yield much more sustainable, efficient and reliable results. In addition, according to the Enschede Executive Board, Bureau RMC has taken all kinds of measures that ensure that the requirement of proportionality and subsidiarity is met. As described earlier in this opinion, the Enschede Executive Board has always relied on the expertise of Bureau RMC as a professional contractor. Furthermore, the municipality of Enschede actively informs everyone who enters the city centre of Enschede about the WiFi counts by means of warning signs. The parties involved are also informed about this via the website of the municipality of Enschede. Finally, the Enschede Executive Board states that Bureau RMC already corresponded with the AP around 2016 about its working methods in the context of WiFi counts. In that context, Bureau RMC followed the instructions provided by the AP. In that context, Bureau RMC could assume – partly because the AP did not respond to it afterwards – that its working methods were in accordance with privacy legislation and regulations and had also been approved by the AP. 

The AP does not follow the view of the Enschede Executive Board and maintains its position that the Enschede Executive Board cannot successfully rely on the basis of legitimate interest. After all, the Enschede Executive Board itself has explained in detail that the processing in the context of WiFi counts is necessary for municipal government tasks and not for ‘typical business activities’. The fact that the Enschede Executive Board itself referred to its statutory tasks above underlines this assessment even more. The AP therefore does not reach a balancing of interests under Article 6, paragraph 1, sub f, of the GDPR. And as for the Bluetrace case, this case concerns a company and not a government agency, which means that the comparison by the Enschede Executive Board does not apply. 

Finally, the AP notes that it did indeed conclude the investigation into Bureau RMC with a formal letter. In this letter, the AP explicitly stated that the AP does not give an opinion on the data processing to which the investigation related. The position of the Enschede Executive Board that Bureau RMC could therefore assume that its working method is in accordance with privacy legislation and regulations and has also been approved by the AP is therefore incorrect, according to the AP. 

4. Fine 

4.1 Introduction 

From 25 May 2018 to 30 April 2020, the Enschede Executive Board acted in violation of Article 5, paragraph 1, sub a, jo. Article 6, paragraph 1, of the GDPR by unlawfully processing personal data of owners/users of mobile devices on which the Wi-Fi is enabled in the city centre of Enschede. 

For the established violation, the AP uses its authority to impose a fine on the municipal executive of Enschede. The AP uses the Fine Policy Rules 2019 for this purpose. Below, the AP will first briefly explain the fine system, followed by the motivation for the fine (amount) in the present case. 

4.2 Fine Policy Rules Dutch Data Protection Authority 2019 

Based on Article 58, paragraph 2, opening sentence and under i and Article 83, paragraph 5, of the GDPR, read in conjunction with Article 14, paragraph 3, jo. 18 of the UAVG, the AP is authorised to impose an administrative fine of up to € 20,000,000 on the municipal executive of Enschede in the event of a violation of Articles 5 and 6 of the GDPR. The fine for the current violation of Article 5, paragraph 1, under a of the GDPR is made dependent on the underlying provision, namely Article 6, paragraph 1, of the GDPR. A category III fine applies to this, with a fine range between €300,000 and €750,000 and a basic fine of €525,000. \[…\]. 

Pursuant to Article 7, the AP takes into account the factors derived from Article 83, paragraph 2, of the GDPR and in the Policy Rules referred to under a to k, without prejudice to Articles 3:4 and 5:46 of the General Administrative Law Act (Awb). 

4.3 Fine amount 

4.3.1. Assessment of circumstances 
When determining whether an administrative fine is imposed and the amount thereof, the AP takes into account various factors. In this assessment, the AP takes into account, among other things, the nature, scope and number of affected parties. Legality is one of the basic principles of data protection. Processing of personal data is lawful if it takes place on the basis of a foundation. In the case of an interference with the private life of the citizen, as in the present case, it is particularly important that a government agency can base its actions on a sufficiently accessible, accurate and foreseeable legal provision. By collecting personal data without a foundation for it, the municipal executive of Enschede violated the principle of legality. This affects the core of the right to respect for privacy and the protection of personal data.It undermines the citizen's sense of feeling unobserved in public and their trust in the government. 

From 25 May 2018 to 30 April 2020, the Enschede municipal executive processed personal data of hundreds of thousands of citizens without any basis. This violation took place in a structural manner and continued for a long period of time. The collected data processed under the responsibility of the Enschede municipal executive provides a detailed picture of the behaviour of (individual) citizens. For example, living patterns can reveal someone's place of residence or workplace, but also more sensitive data such as visits to medical institutions or locations that can provide data about someone's sex life. The mere fact that this is possible can lead to citizens no longer feeling unobserved by the government. In view of this, the AP considered this to be a serious situation. 

In addition to the fact that the Enschede Executive Board did not process personal data on the basis of a foreseeable legal provision, the AP also considers it reprehensible that the Enschede Executive Board processed the personal data excessively and for longer than was necessary for the intended purposes. If a data controller processes or has location data processed, the utmost care must be taken to prevent this data from becoming (indirectly) identifiable. 

Given the above circumstances, the AP sees reason to impose a fine on the Enschede Executive Board and to increase the basic amount of the fine on the basis of Article 7, opening sentence and under a, of the Fine Policy Rules 2019 by € 75,000 to € 600,000. 

Opinion of the Enschede Executive Board and AP response 
In its opinion, the Enschede Executive Board states that special and criminal personal data have never been processed. Given the very limited nature and seriousness of the alleged breach of the GDPR, the Enschede Executive Board believes that there is a mitigating circumstance. According to the Executive Board, the data subjects have not suffered any damage. Furthermore, the municipality of Enschede has never been reprimanded by the AP for a violation of privacy laws and regulations and the municipality of Enschede has always fully cooperated with the AP's investigation. The Enschede Executive Board therefore considers these circumstances as mitigating factors. 

The AP does not follow the view of the Enschede Executive Board and motivates this as follows. As stated above, sensitive data can be derived from the collected data. A government agency that processes personal data without having a legal basis for doing so is certainly harmful to citizens. In addition, the Enschede Executive Board has not substantiated why the data subjects have not suffered any damage. Despite the fact that the AP has not previously established the same infringement with the Enschede Executive Board and that, according to the Enschede Executive Board, there is no damage, the AP sees no reason to refrain from imposing an administrative fine or to reduce the amount of the fine due to the seriousness of the infringement and the culpability of the Enschede Executive Board. Finally, the AP is of the opinion that the cooperation of the Enschede Executive Board did not go beyond its statutory obligation to comply with Article 31 of the GDPR. The Enschede Executive Board did not cooperate with the AP in a special way. 

4.3.2 Culpability and negligent nature of the infringement 
Pursuant to Article 5:46, paragraph 2, of the General Administrative Law Act, the AP takes into account the extent to which the infringement can be attributed to the offender when imposing an administrative fine. 

Based on Article 6, paragraph 1, of the GDPR, the processing of personal data is only lawful if it takes place on the basis of a basis. This is a continuation of what already applied under Directive 95/46/EC and the Personal Data Protection Act. The starting point is that the Enschede Executive Board has its own responsibility to comply with the rules set out therein since the GDPR came into effect. The fact that the processing of data in the context of WiFi counts took place at Bureau RMC and \[CONFIDENTIAL\] does not alter this. By determining the processing purposes, the Enschede Executive Board has the legal task of bearing responsibility for the data processing regarding the WiFi counts. The Enschede Executive Board failed to carefully investigate the collected data or to obtain legal advice on this. The fact that Bureau RMC had stated in the quotation that they convert and validate data into visitor flows and shopping flows should also have alerted the Enschede Executive Board that visitor flows could also be displayed from the collected data. Instead, the Enschede Executive Board assumed that a third party with a commercial interest took responsibility. The AP considers this reprehensible. 

The Enschede Executive Board has stated that they have always focused on safeguarding privacy with regard to the WiFi counts carried out by Bureau RMC. According to the board, this can be regarded as a mitigating circumstance, since they did not intentionally or consciously process personal data in an unlawful manner. Furthermore, the Enschede Executive Board believes that they were not negligent, given that the measures taken were intended to process only anonymous data that cannot be traced back to individuals. 

The AP, also referring to paragraph 3.1.3, sees no reason on this basis to refrain from imposing an administrative fine or to reduce the fine amount. The AP is of the opinion that the above-mentioned circumstances do not exculpate the Enschede Executive Board. A government agency may be expected, also in view of the large scale of data processing, to thoroughly satisfy itself of the standards applicable to it and to comply with them. Certainly in a society where it is increasingly difficult to anonymize data. The Enschede municipal executive should have conducted more research into the data that was processed under its responsibility. Whether or not Bureau RMC complied with the agreements with the Enschede municipal executive is a civil matter between Bureau RMC and the executive. The AP further notes that the violated provision of Article 6, paragraph 1, of the GDPR does not require intent as an element. Since this concerns a violation, it is not required to demonstrate intent in order to impose an administrative fine in accordance with established case law. The AP may assume culpability if the perpetrator has been established. 4.3.3 Proportionality and financial circumstances 
Finally, the AP assesses on the basis of articles 3:4 and 5:46 of the General Administrative Law Act (principle of proportionality) whether the application of its policy for determining the amount of the fine does not lead to a disproportionate outcome given the circumstances of the specific case. Application of the principle of proportionality can, among other things, play a role in the financial capacity of the controller. 

The Enschede municipal executive has requested the AP to take into account the financial circumstances of the municipality, without explicitly stating that there is limited financial capacity. According to the Enschede municipal executive, it is generally known that finances are under pressure in almost all municipalities in the Netherlands, due to Corona, among other things. 

As far as the AP understands, the Enschede municipal executive does not want to explicitly state that there is limited financial capacity, but that the AP must take the financial circumstances of the municipality into account. Regardless of this contradictory signal, the AP has consulted the public financial figures of the municipality of Enschede. The AP determines, based on the figures (published by the municipality of Enschede itself), that the municipality of Enschede had general reserves of almost 60 million euros and claims of 40 million euros at the end of 2020. Given these general reserves and liquidity, the AP considers it unlikely that the fine in question will cause continuity problems for the municipality of Enschede. 

In conclusion, the AP sees no reason to refrain from imposing an administrative fine or to reduce the fine amount. The AP considers the fine amount of € 600,000 to be proportionate and there are no other facts and circumstances that require moderation of the aforementioned amount. 

4.4 Conclusion 
The AP sets the total fine amount at € 600,000. 

5. Judgment 
The AP imposes on the board of mayor and aldermen of the municipality of Enschede, for violation of article 5, first paragraph, under a, jo. Article 6, paragraph 1, of the GDPR imposes an administrative fine of €600,000 (six hundred thousand euros). 

Yours sincerely, 
Dutch Data Protection Authority, 

signed 

drs. C.E. Mur 
Board member 

Legal remedies clause 
If you do not agree with this decision, you can file an objection with the Dutch Data Protection Authority digitally or on paper within six weeks of the date of dispatch of the decision. Filing an objection suspends the effect of this decision. To file a digital objection, see www.autoriteitpersoonsgegevens.nl, under the heading Objecting to a decision, at the bottom of the page under the heading Contacting the Dutch Data Protection Authority. The address for filing on paper is: Dutch Data Protection Authority, PO Box 93374, 2509 AJ The Hague. 
Please state ‘Awb objection’ on the envelope and put ‘objection’ in the title of your letter. Please include at least the following in your letter of objection: 
- your name and address; 
- the date of your letter of objection; 
- the reference number mentioned in this letter (case number); or attach a copy of this decision; 
- the reason(s) why you disagree with this decision; 
- your signature.

```

Retrieved from "[https://gdprhub.eu/index.php?title=AP\_(The\_Netherlands)\_-\_Boete\_wifitracking\_Enschede&oldid=46390](https://gdprhub.eu/index.php?title=AP_\(The_Netherlands\)_-_Boete_wifitracking_Enschede&oldid=46390)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [AP (The Netherlands)](/index.php?title=Category:AP_\(The_Netherlands\) "Category:AP (The Netherlands)")
*   [Netherlands](/index.php?title=Category:Netherlands "Category:Netherlands")
*   [Article 5(1)(a) GDPR](/index.php?title=Category:Article_5\(1\)\(a\)_GDPR "Category:Article 5(1)(a) GDPR")
*   [Article 6(1) GDPR](/index.php?title=Category:Article_6\(1\)_GDPR "Category:Article 6(1) GDPR")
*   [2021](/index.php?title=Category:2021 "Category:2021")
*   [Dutch](/index.php?title=Category:Dutch "Category:Dutch")

This page was last edited on 12 March 2025, at 10:05.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)