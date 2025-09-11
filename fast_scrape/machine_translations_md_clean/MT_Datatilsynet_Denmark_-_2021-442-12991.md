# Datatilsynet (Denmark) - 2021-442-12991

## Case Information

**Authority:** Datatilsynet (Denmark)

**Jurisdiction:** Denmark

**Relevant Law:** Article 32(1) GDPR

**Type:** Other

**Outcome:** n/a

**Published:** 16.03.2022

**Fine:** None

**Parties:** The Danish Health Data AuthorityThe Danish Data Protection Agency

**National Case Number/Name:** 2021-442-12991

**European Case Law Identifier:** n/a

**Appeal:** Unknown

**Original Language(s):** Danish

**Original Source:** Sundhedsdatastyrelsen får kritik for manglende kontrol med personoplysninger i it-miljø (in DA)

**Initial Contributor:** lou_schda

The Danish DPA issued a reprimand against the Danish Health Data Authority for violating security requirements under [Article 32 GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR") by storing personal data on a server where it could be accessed by employees, despite existing internal guidelines prohibiting such storage. The DPA held that these guidelines were not sufficient if the controller did not monitor whether they were in fact being followed in practice.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

A former employee of the Danish Health Data Authority stored, by a mistake, pseudonymised data sets on Microsoft Azure servers used for task management, in spite of the Danish Health Data Authority's internal guidelines and procedures. The data contained pseudonymised confidential information about citizens that could be "decoded" by trusted employees. The Danish Health Data Authority only discovered a year later that the data had been stored there.

### Holding

The Danish DPA emphasized that the controller must implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk under [Article 32 GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR"). Hence, controllers must, first, put in place internal guidelines and procedures prohibiting the storage of personal data in systems not intended for such storage. Second, they must also regularly (manually or automatically) check if personal data have nevertheless been stored there (whether by mistake or not). The Danish Health Data Authority did not comply with the latter requirement.

Due to the fact that the personal data was pseudonymised and that only authorized employees had access to the server, the Danish Data Protection Agency only issued a reprimand (not a "serious reprimand" known to Danish Data Protection Law) against the controller for violating the security requirements under [Article 32 GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR").

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Danish original. Please refer to the Danish original for more details.

```
The Danish Health and Medicines Authority is criticized for lack of control over personal data in the IT environment

Date: 16-03-2022

Decision Public authorities

The Danish Data Protection Agency criticizes in a new decision, which emphasizes that a data controller must check whether personal data has been stored by mistake in IT environments, regardless of whether the IT environments may not be used for storage of personal data.

Journal number: 2021-442-12991

Summary

The Danish Data Protection Agency has made a decision in a case where an employee of the Danish Health and Medicines Authority, in violation of internal guidelines and procedures, had stored a data set - containing pseudonymised personal data - in the development environment Microsoft Azure DevOps, where they were not allowed to be stored. The data set contained pseudonymised confidential information about citizens, which could be "decoded" by trusted employees, regardless of whether they had a work-related need for it.

The Danish Health and Medicines Authority did not discover until a year later that the data set had been stored in the IT environment used for task management. The Danish Health and Medicines Authority informed the Danish Data Protection Agency that data sets stored in the IT environment are generally not checked for personal data and that it is not possible to establish technical security measures to ensure that a similar human error does not occur in the future.

The Danish Data Protection Agency found that the Danish Health and Medicines Authority - by not having established appropriate controls to ensure that no personal data was in the system - had not complied with the rules on processing security.

The Danish Data Protection Agency emphasized that data controllers must generally establish controls - either manual or automatic - to ensure that personal data is not stored in IT environments where they may not be. In this connection, it is not sufficient to have guidelines and procedures for whether information may be stored in an IT environment, without regularly checking whether it is followed in practice. The Danish Data Protection Agency also emphasized that this was a so-called “agile development environment”, where there is a known risk that personal data will be stored by mistake.

Decision

After a review of the case, the Danish Data Protection Agency finds that there are grounds for expressing criticism that the Danish Health and Medicines Authority's processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation \[1\]. 1.

Below is a more detailed review of the case and a justification for the Danish Data Protection Agency's decision.

2. Case presentation

On 12 May 2021, the Danish Health and Medicines Authority reported a breach of personal data security to the Danish Data Protection Agency.

The Danish Data Protection Agency subsequently sent a hearing to the Danish Health and Medicines Authority on 22 June 2021, to which the Danish Health and Medicines Authority replied on 8 July 2021.

It then appears from the case that a former employee in connection with internal sharing of a data extract in violation of the Danish Health and Medicines Authority's internal guidelines and procedures saved the data extract, which i.a. contained pseudonymised health information about citizens in the Capital Region, in Microsoft Azure DevOps, where the data extract was stored for a period from June 2020 to May 2021. In this connection, the Danish Health and Medicines Authority has stated that both internal and external consultants are instructed in current procedures. the board's development handbook, which i.a. describes what information may be stored in DevOps, including that no personal information may be stored - in addition to names of caseworkers, etc. in connection with task management - in DevOps.

It further appears from the case that the data set, which the employee stored in DevOps, originates from the Hospital Medicine Register and contains information on gender, age, municipality, region and prescribed / administered medicine on registrants from the Capital Region for the period between May 2018 and January 2020 and spans 877,813 medicine administrations. In this connection, the Danish Health and Medicines Authority has clarified that social security numbers that are included in the data set in the Hospital Medicine Register are replaced by "xxx" in the extract, which is why the data set is pseudonymised when the information is processed by employees in the Danish Health and Medicines Authority. In this connection, the Danish Health and Medicines Authority has stated that several internal and external employees in the agency, by virtue of their position and associated work tasks, have access to personally identifiable information in the Hospital Medicine Register, which is why it is possible for these persons to identify the personal information.

The Danish Health and Medicines Authority has finally stated that the data set was protected by the Agency's own domain DKSUND, which is located in Azure Active Directory. DevOps is used i.a. of several departments in the Danish Health and Medicines Authority for task management, and it requires authorization and authentication to access the service. The Danish Health and Medicines Authority has subsequently stated that every data set stored in DevOps is not checked and that it is not possible to establish technical measures that can counteract that a similar human error results in a breach of personal data security, e.g. . by the fact that certain file formats cannot be uploaded in DevOps.

Justification for the Danish Data Protection Agency's decision

3.1. Article 32 of the Data Protection Regulation

It follows i.a. Article 32 (1) of the Data Protection Regulation 1, that the data controller, taking into account the current technical level, the implementation costs and the nature, scope, coherence and purpose of the processing in question and the risks of varying probability and seriousness of natural persons' rights and freedoms, implement appropriate technical and organizational measures to ensure a level of security; appropriate to these risks.

It also follows from Article 32 (1) 1, letters b and d, that the data controller in that connection - and as appropriate - i.a. shall implement measures to maintain the capacity to ensure the continued confidentiality, integrity, availability and robustness of treatment systems and services, as well as procedures for regular testing, assessment and evaluation of the effectiveness of technical and organizational measures to ensure treatment security.

In this connection, the Danish Data Protection Agency is of the opinion that, as the data controller, one must relate to the risk that (even by mistake) personal data is stored in an environment, regardless of whether the environment is intended for the storage of personal data. In continuation of this, the Authority's assessment is that guidelines regarding the storage and deletion of personal data in a given system or area cannot justify not checking whether information is stored in the system or area - especially in situations where agile development environments like DevOps. In connection with this, the Danish Data Protection Agency is of the opinion that - especially where upload control is not carried out - there is a known risk that personal data will be stored by mistake in agile development environments, which emphasizes the need for the environments to be regularly checked for information is inadvertently stored in the environment.

On this basis, the Danish Data Protection Agency finds that the Danish Health and Medicines Authority - by not sufficiently controlling whether personal data is inadvertently stored in environments which, in the specific case, e.g. may lead to personal data being made available to unauthorized persons - had not established a level of security that was appropriate to the risks that were the Agency's' processing of personal data, cf. Article 32 (1). 1.

The Danish Data Protection Agency has emphasized that the Danish Health and Medicines Authority has not established appropriate organizational or technical security measures to ensure that personal data is not stored in the DevOps environment, including e.g. regular technical review - such as scanning the environment - or by manual control.

Furthermore, the Danish Data Protection Agency has emphasized that the incident includes special categories of personal information about a large number of citizens, and that the incident lasted approx. one year.

In a mitigating direction, the Danish Data Protection Agency has emphasized that the personal information has been pseudonymised and that the information has only been made available to trusted employees.

In summary, the Danish Data Protection Agency finds that there are grounds for expressing criticism that the Danish Health and Medicines Authority's processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Ordinance. 1.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC (General data protection regulation).

```

Retrieved from "[https://gdprhub.eu/index.php?title=Datatilsynet\_(Denmark)\_-\_2021-442-12991&oldid=25827](https://gdprhub.eu/index.php?title=Datatilsynet_\(Denmark\)_-_2021-442-12991&oldid=25827)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Datatilsynet (Denmark)](/index.php?title=Category:Datatilsynet_\(Denmark\) "Category:Datatilsynet (Denmark)")
*   [Denmark](/index.php?title=Category:Denmark "Category:Denmark")
*   [Article 32(1) GDPR](/index.php?title=Category:Article_32\(1\)_GDPR "Category:Article 32(1) GDPR")
*   [Danish](/index.php?title=Category:Danish "Category:Danish")

This page was last edited on 11 May 2022, at 15:27.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)