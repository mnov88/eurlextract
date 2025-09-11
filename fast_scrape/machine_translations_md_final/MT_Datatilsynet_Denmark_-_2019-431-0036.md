Lack of security around a development server
Published 13-02-2020
Decision Private companies

The Data Inspectorate criticizes KMD for failing to take appropriate security measures in connection with the acquisition of a development and testing environment from another supplier.

Journal number: 2019-431-0036
Summary

In one specific case, the Data Inspectorate criticized the fact that a data processor in connection with the acquisition of a development and testing environment from another supplier (before the regulation was applied) had not implemented appropriate security measures.

When the data processor acquired the IT solution (in connection with a business acquisition), it was not ascertained to what extent a test and development server contained information about natural persons. The server was used for development tasks connected to networks outside the data processor's control (the Internet) and it was compromised several years after the acquisition and used unlawfully to "extract" the Bitcoin crypto currency. Due to the original classification - as an internal development server, without personal data - the server was not subject to the data processor's ordinary operational security setup (patch and security policy).

At the same time, when the misuse was detected, it was determined that the server - nevertheless - contained personally identifiable information from several data controllers.

The Data Inspectorate found that the breach could have been avoided if very common technical security measures (including firewall rules) had been introduced and therefore the established security measures could not be considered appropriate. The reason for this was primarily that the risk assessment was based solely on the original description of the server as “internal server” (without personal data).
Generally about test environments and production data

In general, the Data Inspectorate must emphasize that the necessary attention should also be paid in connection with the development and testing, if processing information about natural persons is processed. Several instances have been found where developers either on their own, in collaboration with the business or as agreed upon in the development use production data to ensure the quality of the solution. This is not - necessarily - wrong in so long as there is an assessment of the risk to the rights of the data subjects and, accordingly, adequate security has been established before the commencement of the treatment, and that in all cases where the risk to it registered may be high, an impact assessment has been done.

To put it squarely, if you want to use production data, you must basically have the same security in one's development and testing environment as what is considered appropriate in the operating setup.
Decision

The Data Protection Authority hereby returns to the case where KMD A / S (hereinafter "KMD") in April 2019 experienced a breach of personal data security by compromising a server - on which personal data was stored.
1. Decision

After a review of the case, the Data Inspectorate finds that there is a basis for criticizing the fact that KMD's processing of personal data has not taken place in accordance with the rules of Article 32 of the Data Protection Regulation \[1\] .

The following is a detailed examination of the case and a justification for the Danish Data Protection Agency's decision.
2. Case making

It appears from the case that the server, which was compromised on April 10, 2019, was acquired through the company Avaleo, which KMD signed a purchase agreement in 2015 and merged with KMD in 2017.

KMD informed the Data Inspectorate that in connection with the merger with Avaleo, several servers were to be subject to KMD's responsibility, and in this process investigations and security of servers that were not directly relevant to production and that did not contain production data were discontinued. for later or deemed redundant. Therefore, the compromised server was not investigated further on April 10, 2019, nor was the security of the server adjusted to the fact that the server contained personal information.

The case, as made by KMD, shows that the compromised server contained a backup of data from a prioritization tool in which development tasks are recorded and prioritized. This backup contained error descriptions as part of the description of development tasks. After compromising the server, a review of part of the backup was done. It was concluded that the copy contained social security numbers, often without additional information, but it could also include names and possibly indication of abuse problems. The backup also contained login information for SMDB - a central database to which abuse treatments are reported.

From some of the data controllers concerned, the Data Inspectorate has received information indicating that other types of access may also be potentially affected, including access to information about the data controller's employee name, social security number, etc. or access to the Nexus system. The latter was a test user password, which however was not used in 2019.

The case states that it cannot be ruled out that there was unauthorized access to the backup containing the personal data and login information, but KMD is of the opinion that this was unlikely due to the circumstances of the attack on the server.

It appears from the statement about the incident that it was necessary for KMD to conduct a manual review of data, including content in free-text fields, to determine which data controllers and data subjects were affected. The fact that some data controllers were only informed about the breach a few weeks after it occurred is justified by, among other things, the extent of data that had to be reviewed manually (a closer review of about 3,000 out of about 65,000 cases).

As part of the handling of the breach, KMD has deleted old records that were affected by the breach. KMD could therefore not disclose exactly how old data was to a specific municipality (data controller), but KMD could not deny that information dates from 2011 and 2012. Due to the deletion, KMD could also not state with certainty what types of personal data were concerned where this particular municipality was responsible for the data processing.

68 data controllers - primarily municipalities - are affected by the breach.

The server is described as an "internal server" that was established for the purpose of developing the Avaleo solution, and KMD became aware of the breach, due to a sharp deterioration in the server's services, which resulted from the running of a Bitcoin mining program.

Measures taken by KMD based on the breach included deletion of older data, restriction on access by the server being accessible only from KMD's IP addresses, deactivation of the software used to gain unauthorized access, and relocation of logins information (usernames and passwords) for a dedicated key management system.

In addition, measures have been implemented to minimize the processing of personal data on the server going forward.
3. Justification for the Danish Data Protection Agency's decision

The Danish Data Protection Agency assumes that KMD is a data processor for the processing of personal data affected by the breach.

When the data controller has to report a breach to the Data Protection Authority, the notification must, if possible, describe the categories of personal data concerned, in accordance with Article 33 (1) of the Data Protection Regulation. In a specific case, which was further investigated by the Data Inspectorate, this does not appear to be possible due to KMD's deletion of the information. While the deletion may have been a sensible move to deal with the breach, the data processor must also ensure that it is able to provide the information to the data controller that enables the latter to comply with Article 33. This should be possible without retaining the fatal personal data. , which was affected by the breach.

KMD has explained why some data controllers were first informed about the breach a few weeks after it happened. The Data Inspectorate finds no reason to disregard KMD's explanation.

The Data Inspectorate finds that KMD has violated Article 32 of the Data Protection Regulation by processing as personal data processor without having taken appropriate technical and organizational measures to protect against the illegal processing of personal data.

The Data Inspectorate has hereby emphasized that:

    KMD recognizes insufficient security for the processing affected by the breach of personal data security.
    In describing the purpose of the server and the measures taken in the light of the breach of the personal data security, the case appears that KMD could have avoided this breach, by ordinary technical security measures which would not have prevented the intended use of the server. 

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such information and repealing Directive 95/46 / EC (general data protection regulation).
