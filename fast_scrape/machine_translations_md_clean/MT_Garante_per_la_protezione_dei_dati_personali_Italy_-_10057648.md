# Garante per la protezione dei dati personali (Italy) - 10057648

## Case Information

**Authority:** Garante per la protezione dei dati personali (Italy)

**Jurisdiction:** Italy

**Relevant Law:** Article 5 GDPRArticle 25 GDPRArticle 32 GDPRArticle 33 GDPRArticle 34 GDPR

**Type:** Investigation

**Outcome:** Violation Found

**Started:** 01.04.2020

**Decided:** 17.07.2024

**Published:** 17.07.2024

**Fine:** n/a

**Parties:** Istituto Nazionale Previdenza Sociale

**National Case Number/Name:** 10057648

**European Case Law Identifier:** n/a

**Appeal:** Unknown

**Original Language(s):** Italian

**Original Source:** Garante (in IT)

**Initial Contributor:** Mgrd

The Italian DPA, Garante, issued a reprimanded against INPS (National Social Security Institute) after two data breaches occurred, for delaying the notifications and not taking appropriate security measures, considering them inadequate under GDPR standards.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

On March 31, 2020, INPS changed it CDN technology (Content Delivery Network is a system that uses servers located in different places to deliver web content quickly to users around the world) to handle a large number of people accessing its website at the same time, especially important during the high-demand times caused by the COVID-19 pandemic benefits.

However, during the setup, it led to caching errors that allowed unauthorized access to personal data for about 30 minutes. Instead of just showing users their own information, the system ended up showing some user's personal information to others if they visited the website during that time period. This happened because some pages that contained sensitive information were not excluded from caching.

On April 1, 2020, the new system went live, and almost immediately, it was discovered that the system allowed unauthorized access to claims applications. On the same day, INPS notified Garante regarding the CDN data breaches that occurred because of incorrect caching configurations that led to unauthorized access to personal data by displaying cached personal data to other users. This data breach involved personal details displayed on the INPS portal, such as tax codes, names, addresses, and email contacts, among other information.

On April 2, 2020, another breach happened in the context of emergency measures during the pandemic, specifically around the application process for a babysitting service bonus that began on April 1, 2020. Due to the hurried implementation and simplified access measures (like a simplified PIN system), the application procedure did not adequately differentiate between different user types. As a result, some users were wrongly granted access levels typically reserved for authorized intermediaries (like patronages), allowing them to view, modify, or submit applications that contained personal data.

On April 3, 2020, INPS published a notice about the data breach on their homepage and set up a dedicated email for breach reports to manage the situation and communicate with the public.

On April 6, 2020, INPD notified Garante regarding the second data breaches that occurred.

On May 14, 2020, Garante instructed the controller, INPD to notify affected individuals of the data breach.

On July 8, 2020, INPS completed the notification process to the data subject potentially affected by the data breach.

### Holding

Garante found that INPS had not implemented adequate technical and organizational measures to ensure a level of security appropriate to the risk, violating [Article 32 GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR"). Specifically, the misconfigurations in the CDN and the authorization system for the "Bonus Baby Sitting" procedure allowed unauthorized access to personal data.

INPS underestimated the risks associated with the data breaches and their potential impact on the rights and freedoms of individuals and this misjudgment led to delays in notifying the affected parties, violating [Article 5(1)(f) GDPR](/index.php?title=Article_5_GDPR#1f "Article 5 GDPR").

Also, Garante identified that INPS did not promptly notify them or the individuals affected by the breaches, violating [Article 33](/index.php?title=Article_33_GDPR "Article 33 GDPR") and [Article 34 GDPR](/index.php?title=Article_34_GDPR "Article 34 GDPR").

The breaches demonstrated a failure to comply with several GDPR principles, including the principles of data protection by design and by default, and the principle of ensuring the confidentiality and integrity of personal data, as determined in [Article 25](/index.php?title=Article_25_GDPR "Article 25 GDPR") and [Article 5(1) GDPR](/index.php?title=Article_5_GDPR#1 "Article 5 GDPR").

Although INPS took steps to address the breaches after they became known, Garante found these measures insufficient to mitigate the risks posed by the breaches effectively.

Because of that, Garante issued a warning to INPS, acknowledging the extraordinary circumstances and the efforts made to address the issues. However, they emphasized that compliance with GDPR standards is mandatory, regardless of the situation at the hand. Garante highlighted that INPS shall adhere strictly to GDPR standards, particularly in relation to security, data breach notification, and overall compliance with data protection principles.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Italian original. Please refer to the Italian original for more details.

```
Provision of 17 July 2024

Register of Provisions
No. 475 of 17 July 2024

THE GUARANTOR FOR THE PROTECTION OF PERSONAL DATA

IN today's meeting, attended by Prof. Pasquale Stanzione, President, Prof. Ginevra Cerrina Feroni, Vice President, Dr. Agostino Ghiglia and Attorney Guido Scorza, members, and Councillor Fabio Mattei, Secretary General;

HAVING SEEN Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC, General Data Protection Regulation (hereinafter, the Regulation);

HAVING SEEN Legislative Decree No. 30 June 2003 196, containing the Personal Data Protection Code (hereinafter, the Code);

SEEN Regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers assigned to the Guarantor for the protection of personal data, approved with resolution no. 98 of 4/4/2019, published in the Official Journal no. 106 of 8/5/2019 and in www.garanteprivacy.it, web doc. no. 9107633 (hereinafter “Reg. of the Guarantor no. 1/2019”);

SEEN the documentation in the files;

SEEN the observations formulated by the Secretary General pursuant to art. 15 of the Guarantor Regulation no. 1/2000 on the organization and functioning of the office of the Guarantor for the protection of personal data (web doc. no. 1098801);

REPORTER Prof. Ginevra Cerrina Feroni;

WHEREAS

1. Introduction

With notes dated 1 and 6 April 2020, INPS – National Social Security Institute (hereinafter, INPS or Institute) notified the Guarantor, pursuant to art. 33 of the Regulation, of two violations of personal data that occurred in the context of the provision of services provided for by Legislative Decree no. 18 of 17 March 2020 (see paragraphs 2 and 3 of this provision), which were also the subject of certain complaints and reports.

In the context of the investigation, in particular, the measures adopted by the Institute to mitigate the possible negative effects on the interested parties and to prevent similar violations in the future were examined, considering that with provision no. 86 of 14 May 2020 (available on the website www.garanteprivacy.it, web doc. no. 9344061), INPS was ordered to communicate the aforementioned personal data breaches to the data subjects involved (art. 58, par. 2, letter e), of the Regulation).

2. The personal data breach caused by the caching of personal information in a content distribution network (CDN)

The first personal data breach resulted in access to the personal data of some users of its portal by unauthorized third parties, caused by an incorrect configuration of the caching functions of the Content Delivery Network (hereinafter, CDN) service used.

2.1. The circumstances in which the breach occurred

The Institute highlighted that, by providing that the start of the services for the provision of bonuses and allowances established by the Legislative Decree 18/2020 would have determined "a load of simultaneous accesses that cannot be managed with the current architecture of the portal", "proceeded to allocate new processing resources to scale existing ones both on the front-end of the internet portal and on the back-end application servers with dedicated databases". However, "the state of emergency and the urgent needs connected to the immediate start of all measures to support people and businesses, also for reasons of public order arising from the lockdown, did not \[... have\] allowed structural interventions to be implemented on such a complex internet portal and forced the Institute to adopt emergency solutions to allow the management of the enormous flow of requests". Furthermore, INPS highlighted that “a further critical factor, which influenced the choices made by the Institute, lies in the fact that, in the days preceding April 1, the Institute’s portal was the subject of DDOS attacks” which began on March 21, 2020 and continued at least until April 4, 2020. INPS stated that, in order to guarantee “adequate levels of usability of the services \[…\] and at the same time protection from DDOS attacks” on the days in which it would have been possible to submit applications for the provision of the benefits provided for by Legislative Decree no. 18/2020, it had decided to use a CDN service, “a more suitable tool for managing this service provision model (so-called click day), which is completely new for the Institute”.

In particular, the Institute stated that "in view of the release of new services to citizens, scheduled for 01/04/2020, INPS requests the involvement of Microsoft support, in order to evaluate technological solutions that can help improve the performance of the service provided through the INPS institutional website, in anticipation of possible exceptional loads. Leonardo is also involved, which provides system support within the Consip framework agreement on system management. A "technical table" is formed between INPS, Microsoft and Leonardo and the use of a Content Delivery Network (CDN) is identified as the only possible solution to deal with the emergency".

In this regard, INPS stated that, "drawing on existing contracts, \[...\] it has opted for the technological offer of Microsoft which, within the Azure Cloud services, offers a content distribution service based on its own technology \[(hereinafter, Microsoft CDN)\] or on Akamai technology \[(hereinafter, Akamai CDN)\], leader in the reference market".

Initially, on the evening of March 31, 2020, the Institute declared that it had activated the Microsoft CDN service but, as “critical issues immediately emerged in the caching \[… with\] generic responses such as “The Request cannot be served””, it “deemed it appropriate to roll back the situation by restoring direct access to its site”, specifying that “the observed disruptions \[... were\] related to the inability of the service to provide responses to the user and therefore to its unavailability”.

Subsequently, INPS stated that “upon opening the service, there was immediately a very high traffic that revealed some performance limitations of the portal, further aggravated by the succession of DDOS attacks that were observed throughout the first part of the morning” of April 1, 2020. In particular, “by 9:00 am, over 300,000 applications had been received, but the systems were in severe difficulty and the service was severely degraded, so, in agreement with Microsoft technicians who in the meantime had carried out troubleshooting with their laboratories on the causes that led to the rollback of the previous day, it was decided to reactivate the CDN service, this time on Akamai technology”, a service that was “activated, through the modification of the DNS, at 10:13 am on April 1”. However, “the anomalous functioning of the caching mechanism was immediately evident, which in fact caused the replication of some personal data sheets present in the portal www.inps.it, the only domain subjected to caching by the CDN” and “as soon as the first signs of a potential data breach emerged, at 10:30 a.m. the rollback of the solution was initiated by modifying the DNS resolution to return to the provision of services exclusively through the Institute’s portal without the intermediation of the CDN”.

The Institute stated that “from the description of the events, it is clear that the data breach occurred in a time window of just 30 minutes, within which the CDN AKAMAI servers served multiple requests through the cached copy of the pages visited by the first request managed by each server”.

Finally, INPS stated that, with reference to “the reports of violation of privacy sent by users during the activation of the CDN, further and specific investigations were conducted which led to the finding that, if the user clicked on the “Enter myINPS” button before any other navigation, he had direct access to the corresponding cached page on the CDN without first authenticating himself”.

2.2. The categories of personal data and data subjects involved in the violation

With reference to the types of personal data subject to the violation, it emerged, as represented by INPS, that this violation “was limited to the sole possibility of viewing personal data (personal details, residence and electronic contacts), present in the cached pages, no modification by third parties being permitted”. In particular, the types of personal data subject to the violation were “tax code, surname, name, date of birth, place of birth, address of residence, telephone, mobile phone, email and PEC”, present in the ““Personal details” page within the myINPS section of the information portal”.

Subsequently, the Institute declared that the personal data breach also involved the personal data present on the “INPS Risponde” page (which “reports the last 3 questions submitted by the user in free text and which may contain references to personal data”) and on the “Notices” and “Messages” pages, specifying that, “unlike the Anagrafica page which provides information for all registered users, the aforementioned pages present personal content only for a very limited percentage of users”.

With reference to the number of data subjects involved, INPS, also following further investigations requested by the Office, carried out further analyses which led to the identification of a total of 47 data subjects involved in the personal data breach in question (see the following paragraph 2.4).

2.3. Measures taken following the violation

INPS stated that “careful monitoring of the effectiveness of the CDN allowed us to react promptly to the anomaly that occurred by restoring the service by deactivating the CDN. In particular, the Akamai CDN delivery window was active from 10:11:29, when the addressing of the domain www.inps.it to the domain inps-cdn-a.azureedge.net was activated, to 10:45:08 with the restoration of direct addressing to the INPS systems”.

INPS also highlighted that, “in order to limit the dissemination of personal data that had been triggered on various social networks, \[…\] a special mailbox violenzadatiGDPR@inps.it was set up, made public with a specific notice on the portal’s home page, to allow reports and evidence regarding the data breach to be sent”. Furthermore, “the Institute requested the removal of all content that had been unduly disseminated by third parties on Twitter”.

2.4. Notification of the breach to interested parties

In transmitting the aforementioned provision of 14 May 2020 to INPS, the Office, in order to facilitate the fulfillment of the obligation to communicate also towards those interested parties who, although involved in a breach of personal data, had not yet been identified as such by the Institute, provided a list of 42 subjects, which emerged from the examination of the reports and complaints received by the Authority.

In this regard, the Institute stated that, “in compliance with the aforementioned provision, it has sent the communications referred to in art. 34 of the Regulation by email to the interested parties who, following the checks carried out, have been identified”, specifying that it has informed “14 subjects affected by the data breach following the caching determined by the activation of the CDN”, since only for these subjects “the page with the details of the personal data (and therefore, not only surname and name) appears to have been displayed. In all other cases, only the landing page of the myINPS section appears to have been displayed, which exclusively reports the name and surname of a subject without any other personal data (e.g. place and date of birth) that allows to uniquely identify which subject it is (it is sufficient to think of the cases of homonymy) and, therefore, to whom to send the communication”.

Subsequently, INPS stated that “the additional 28 cases cannot be fully identified as only the landing page of the myINPS section was viewed, which exclusively reports the name and surname without any other personal data that would allow identification (e.g. place and date of birth)”, then conducting “further and burdensome analyses to try to identify them and, above all, identify for which of these it was possible to view the additional personal data”, which then led to “3 additional subjects who could have been affected by the data breach”, while “for the remaining 25 unidentified subjects, it is excluded that it was possible to view further data by third parties, in addition to the name and surname, knowledge of which alone is not sufficient to affect their personal sphere in any way”.

Following further investigation, INPS stated that “in order to identify all the subjects affected by the data breach of 1 April, the Institute made every further useful effort by cross-referencing various databases” which led to “the identification of \[an additional\] 30 potential interested parties”.

Finally, INPS confirmed that the communications pursuant to art. 34 had been sent to all the aforementioned interested parties, highlighting that “the text of the communication was customized for each user based only on the data potentially consultable”.

3. The violation of personal data caused by the incorrect configuration of the authorization system of the Bonus Baby Sitting procedure

The second violation of personal data involved access to the personal data of users who requested the provision of the bonus for the purchase of babysitting services (hereinafter, Bonus Baby Sitting), with viewing, modification, cancellation or sending to INPS of applications containing personal data relating to minors, including those with disabilities, by unauthorized third parties.

3.1. The circumstances in which the violation occurred

In relation to this violation of personal data, INPS stated that, in order to “allow the submission of applications exclusively electronically, despite the very limited time allowed for its preparation (the decree is dated 17 March 2020 and the submission of applications was always started from 1 April, with production on 31 March, in the context of all the critical issues described above), a new IT procedure had to be created” and that access to this procedure had to be allowed “to all citizens and patronages as intermediaries authorised for transmission”, also taking into account the fact that “many potential beneficiaries of the benefits might not have had access credentials (PIN, SPID, CIE, CNS)” to the portal “www.inps.it”.

INPS stated that it had “allowed, for the sole applications for the €600 allowance and the Baby Sitting Bonus, the possibility of submitting applications with only the first 8 characters received via SMS after the PIN request” (so-called access with simplified mode or, also, with “simplified PIN”). However, “in order to carry out all the activities of the software life cycle in a very short time, the application areas had to partially derogate also from the ordinary application security tests that the Institute carries out on all its applications”.

In particular, the Institute stated that “the procedure had to provide for the possibility of transmitting applications also through the patronages. Therefore, the procedure provides for a dual operation: “citizen in person” who can enter the application only on his own behalf, “Patronato” which can also enter applications for third parties. In determining the behavior that should be assumed on the basis of the information in the profile of the user identified by the access system, the implementation of the procedure did not take into account the existence of multiple other categories of users, other than the citizen (with a full PIN) and the patronage, assimilating them to all intents and purposes to patronages rather than to citizens”.

The Institute specified that “it was not a question of an exchange of session and/or digital identity but only of the incorrect attribution of an intermediary profile \[…\] and no longer possible after the corrective intervention”.

3.2. The categories of personal data and interested parties involved in the violation

With reference to the interested parties involved, INPS stated that “the malfunction occurred from the moment the procedure was opened and affected citizen users who accessed with the simplified PIN and all other categories of users other than the simple citizen and the patronages, regardless of the type of \[authentication\] credentials used”.

With reference to the types of personal data subject to the violation, the Institute declared that the aforementioned “incorrect implementation of \[… an\] application control allowed unauthorized persons to consult the list of applications submitted by the same category of users” and that, starting from the list of such applications, it was possible to view their content and, in the case of applications saved in draft (i.e. not yet transmitted by the applicant), modify their content, delete them or transmit them to the Institute.

In particular, according to what was declared by INPS, “each user belonging to the aforementioned categories was able to access the applications transmitted by other users of the same category” and “starting from the display of the list of practices, based on the status of the application, it is possible to perform the following actions: viewing the application (for all statuses); deleting the application (possible only for applications in draft status); modifying the application (possible only for applications in draft status); the action of deleting an application does not allow viewing \[of the content\] of the application itself, but only a confirmation window of the operation is displayed”.

INPS stated that “the maximum number of applications potentially viewable by \[… different\] categories of users, during the period in which the procedure was found to be vulnerable” was 773 (of which 670 were filled out by users with a “Simplified PIN Citizen” profile, 71 were filled out by users with a “Consultant” profile, 8 were filled out by users with a “Company” profile, 24 were filled out by users with a profile attributable to different professional orders).

Following further analyses, INPS stated that it had found the execution of different types of operations on some of the aforementioned applications, in the following terms: 68 applications, transmitted or saved in draft, were viewed by third parties (not patronage operators); 17 applications, saved in draft, were modified by third parties (not patronage operators); 81 applications, saved in draft, were deleted by third parties (not patronage operators); 62 applications, saved in draft, were sent to the Institute by third parties (not patronage operators).

With reference to the applications modified or deleted by third parties (not patronage operators), the Institute considered that "any modifications or deletions of applications in draft status, by third parties, could not affect the right to the benefit by the interested parties".

With reference to the applications sent by third parties (not patronage operators), the INPS stated that "28 of the 62 applications were acquired by a person coinciding with the spouse of the applicant \[...\] and/or having the same surname as one of the spouses or the minor" and considered that "these are applications sent by members of the same family unit or by intermediaries unaware of the impossibility of transmission by these". The Institute also highlighted that "following the communication to all interested parties of the cancellation of the application, 41 of the 62 applications were re-transmitted correctly".

3.3. Measures adopted following the breach

With reference to the aforementioned breach, INPS stated that “as soon as \[…\] it became aware of the vulnerability, at 11:48 on 2 April, the service was immediately closed” and that “after having identified and corrected the anomaly, the service was reopened late in the evening”.

Furthermore, the Institute highlighted that, “considering that the sole case of the 17 draft applications modified by third parties may represent a risk for the rights of the interested parties, where the latter did not notice the modification that had occurred, \[…\] the same \[… would have been\] promptly contacted to ensure that the data transmitted complies with what was intended to be declared”.

Lastly, INPS highlighted that the 62 applications transmitted by third parties “were blocked \[… and the administrative process of the same was managed by involving the interested parties”.

3.4. Communication of the violation to the interested parties

With regard to the communication of the violation of personal data to the interested parties involved, INPS stated that:

“the subjects who viewed \[the 68\] applications entered by third parties are, almost entirely, residents in another region, province or municipality of the interested parties” and, furthermore, “the possibility of searching for applications through identifying elements of the subjects was not provided unless the tax code of the minor was already known and said tax code was present in the list randomly displayed”;

“with regard to the 17 interested parties for whom a modification, by third parties, of the relevant application in draft status was detected, since the interested party had not yet sent it, we proceeded \[…\] to their logical cancellation”;

the 81 “subjects who saw their draft application cancelled, did not see their data viewed by third parties and the only consequence was that they had to re-acquire the data previously entered before sending”;

the 62 applications sent to the Institute by third parties “were blocked”.

INPS also stated that “no evidence of the dissemination of personal data of specific Baby Sitting applications was found” and that “from the analyses conducted on the applications viewed or modified by third parties, it emerged that only 2 applications contained the indication that the minor has a handicap in a situation of seriousness ascertained pursuant to art. 3 paragraph 3 L. 104/92 without attaching any additional documentation. None of the applications referred to the situation of minors in foster care or adopted; the procedure did not include data relating to criminal convictions and crimes”.

INPS informed the interested parties involved in the breach in execution of the aforementioned provision of 14 May 2020.

In this regard, INPS specified that it had informed “1,106 subjects affected by the data breach concerning the Bonus Baby Sitting procedure, both applicants and spouses who can be contacted electronically”. Furthermore, the Institute highlighted that "even the 62 subjects, whose application had been transmitted by unauthorized intermediaries, were all informed of the circumstances and of the need to re-transmit the application with their personal PIN".

4. The violation of personal data caused by the caching of personal information on INPS web servers

With the provision of 14 May 2020, the Guarantor brought to the attention of INPS some further anomalies, which emerged from the analysis of the reports and complaints received. In particular, some subjects had highlighted to this Authority that, already on 31 March 2020, unauthorized access to the personal data of users of the Institute's portal had occurred.

In this regard, INPS stated that "the investigations carried out highlighted that the cause of such access was due to the fact that, in parallel with the preparation of the CDN, a fine tuning of the web server settings was being carried out, in the search and testing of solutions that could have allowed the influx of requests to be managed more quickly. In particular, in the review of the settings of the 30 twin servers set up to serve the portal requests, server-side content caching was activated from 6:10 PM to 6:25 PM \[on March 31, 2020\] and, in this period of time, unauthorized access could have occurred”.

4.1. The categories of personal data and data subjects involved in the violation

INPS stated that “the violation may have affected any category of user who accessed the institutional portal with their credentials in those minutes. The time elapsed between the event and the knowledge of the same did not allow for the availability of detailed debug logs of the impacted systems. Furthermore, the web server access logs do not report evidence of the user code to which they refer nor an indication of whether the individual request was served from the cache or from the execution of the application pages”.

In particular, the Institute conducted a series of analyses that “led to the identification of 235 users who may have been affected by the violation, with particular reference to personal and contact data, and, for 9 of these, at least one of the following categories of data may have been affected: Consultation of the status of the Domus application; Duplicate Single Certification; Viewing of Contribution Extract; Viewing of maternity practice; Viewing of payment details of non-pension benefits”, declaring, however, that “the estimates and identifications reported above may be in excess of the real state of the violations and therefore present false positives in whole or in part. It is therefore absolutely not verifiable that all the subjects reported above may have been affected by the violation”.

Furthermore, INPS highlighted that it must be kept in mind that “the dynamics with which the violation could be determined, as reconstructed, allowed third parties to view the data of the interested parties in a completely random manner without the possibility of voluntarily affecting the personal sphere of specific subjects”.

4.2. The measures adopted following the violation

INPS stated that, “in order to prevent the use or communication to third parties of any improperly displayed data, and therefore mitigate the risk for the interested parties, on 3 April 2020 INPS published a statement on the simplified home page of its institutional website, highlighting the need for anyone who accidentally became aware of other people’s personal data not to use them, avoiding communicating them to third parties or disseminating them, for example on social media channels, potentially also incurring criminal offences.”.

4.3. The ways in which the Institute became aware of the violation

INPS stated that it became aware of the violation of the personal data in question “following the report of Ms \[…\], forwarded by this Authority, and the subsequent analyses that were necessary to identify the causes that led to the violation. In the specific case, it was found that Ms \[…\] accessed the portal immediately after Ms \[…\], obtaining the content of the pages that had been cached by the latter”.

Subsequently, with reference to another similar report brought to the attention of the Institute by the Guarantor, INPS stated, despite having also reached its Multichannel Customer Care (CCM), "the report fortuitously remained in a limbo that could not be handled by any operator. This meant that even the subsequent reminders, since they were associated with the initial request, were not taken into account".

4.4. Communication of the violation to the interested parties

INPS, after learning of the violation following notification of the Guarantor's provision, on 8 July 2020, stated that it would proceed "with all possible urgency, to send appropriate communication pursuant to art. 34 of the Regulation to all the subjects identified above even if, with the limitations represented above, they may not have actually been the subject of the violation".

With the note of 25 August 2020, the Institute confirmed that it had informed the 235 data subjects involved in the personal data breach in question, providing the Authority with the text of the communication sent pursuant to art. 34 of the Regulation.

5. The initiation of the procedure for the adoption of corrective and sanctioning measures, pursuant to art. 166, paragraph 5, of the Code

From the investigation carried out on the basis of the elements acquired and the facts that emerged following the investigation, with a note sent on 17 May 2022 to INPS pursuant to art. 166, paragraph 5, of the Code, the Office notified the Institute, in the terms described below, that the personal data processing in question was carried out in violation of art. 5, paragraphs 1, letters a) and f), and 2, 12, 25, 32 and 34 of the Regulation.

5.1. Late communication of personal data breaches to data subjects

During the investigation, it was ascertained that the Institute, despite taking into account the aforementioned provision of 14 May 2020 of this Authority, was late in informing the data subjects involved in the aforementioned personal data breaches. In particular, it emerged that:

- the communications relating to the personal data breach caused by the caching of personal information in the CDN (see paragraph 2 of this provision) were sent late to the data subjects involved compared to the time when INPS became aware of it in the period April-September 2020);

- the communications relating to the personal data breach caused by the incorrect configuration of the authorization system of the Bonus Baby Sitting procedure (see paragraph 3 of this provision) were sent late to the data subjects involved compared to the time when INPS became aware of it in the period April-June 2020);

- the communications relating to the personal data breach caused by the caching of personal information on the web servers of the Institute – which had become aware of the breach as part of the investigations carried out before 5 June 2020 (see paragraph 4 of this provision) – were made in the period July-August 2020.

Therefore, in light of the above, the violation of Articles 5, paragraph 1, letter a), 12 and 34 of the Regulation by INPS was ascertained, for having belatedly provided the interested parties involved with adequate information on the violations of personal data that occurred, i.e. only following the aforementioned provision of the Guarantor of 14 May 2020 and the further requests for further information subsequently formulated by the Office.

5.2. The inadequacy of security measures

5.2.1. Incorrect configuration of the caching functions of the Akamai CDN and the INPS web servers

During the investigation (see paragraph 2.1 of this provision) it emerged that, in order to manage the high number of concurrent connections to its institutional portal by beneficiaries of the benefits provided for by the Legislative Decree. 18/2020 and to mitigate Distributed Denial of Service (DDoS) cyber attacks, INPS, taking into account the impossibility of having "new processing resources to scale existing ones both on the front-end of the internet portal and on the back-end application servers with dedicated databases", deemed it necessary, "as the only possible solution to deal with the emergency, to use a Content Delivery Network (CDN)". The adoption of this solution, identified by the Institute with the technical support of Leonardo S.p.A. and Microsoft S.r.l., would have allowed the loads of the Institute's IT systems to be reduced. In particular, by exploiting the caching functionality of a CDN, the contents of the Institute's institutional portal would have been provided to users' browsers via the CDN nodes and, therefore, no longer directly from the Institute's IT systems.

However, it was found that INPS, in defining the operating parameters of the Akamai CDN, did not adequately identify and configure the web pages of its institutional portal which, containing personal information of users (for example, the sections “Anagrafica”, “INPS Risponde”, “Avvisi” and “Messaggi”), should have been excluded from the caching mechanisms. The same configuration problems were also found with reference to the fine tuning activities of the institutional portal web servers carried out by INPS on 31 March 2020 (see par. 4.1 of this provision). In particular, it was found that the Institute temporarily activated some caching functions of the web servers in question without identifying the web pages to be excluded from these mechanisms as they contained personal data of users.

In both cases, the incorrect configuration of the caching functions resulted in the storage in their cache of the personal data of users who connected to certain web pages in the minutes immediately following the activation of such functions, with the consequent making such data available to other users who were viewing those pages at that time.

Therefore, the methods with which INPS configured the caching functions of the Akamai CDN and the web servers do not appear to comply with the principle of integrity and confidentiality pursuant to art. 5, par. 1, letter f), and with the obligations pursuant to art. 32 of the Regulation.

5.2.2. Unsuitability of the authorization system of the Bonus Baby Sitting procedure

With reference to the violation of personal data that occurred in the context of the Bonus Baby Sitting procedure, it emerged that the same was caused by the incorrect attribution of an intermediary authorization profile to certain categories of users. In particular, INPS stated that "the implementation of the procedure did not take into account the existence of multiple other categories of users, other than the citizen (with full PIN) and the patronage, assimilating them to all effects to patronages rather than to citizens".

For these reasons, it is established that, at the time of the personal data breach, users belonging to some categories (including, "Citizen Simplified PIN", "Consultant", "Company" and "Professional Orders"), after having passed the computer authentication procedure, due to an unsuitable authorization system of the Baby Sitting Bonus procedure (which assimilated these users to patronages), could view the list of applications submitted by users of their same category, view their content and, in the case of applications saved in draft, modify them, delete them or send them to the Institute (see paragraphs 3.1 and 3.2 of this provision). This, therefore, in the absence of adequate technical measures that should have, instead, limited the access of the aforementioned categories of users exclusively to their own applications.
Therefore, failure to adopt an adequate authorization system in the context of the Bonus Baby Sitting procedure entails a violation of the principle of integrity and confidentiality referred to in art. 5, par. 1, letter f), and of the obligations referred to in art. 32 of the Regulation.

5.2.3. Failure to adopt adequate measures to promptly detect and manage personal data violations

During the investigation (see par. 4.4 of this provision), it was ascertained that INPS, already on 31 March 2020, had received, without taking charge of it, a report relating to the violation of personal data caused by the incorrect configuration of the caching functions of the Institute's web servers. The inadequate management of the aforementioned report did not allow the Institute to promptly become aware of the violation of personal data that had occurred and to identify, thus, the interested parties involved, even potentially, in the violation.

As noted above (see paragraph 2 of this provision), the measures adopted to outline the scope of the personal data breach caused by the caching of personal information in the CDN were also inadequate, as they did not allow the Institute to identify the data subjects involved, even potentially, in the breach.

The failure to adopt adequate measures to promptly detect and manage personal data breaches by INPS entails a violation of the principles of integrity and confidentiality and accountability referred to in art. 5, paragraphs 1, letter f), and 2, and of the obligations referred to in art. 32 of the Regulation.

5.3. Non-compliance with the principles of data protection by design and by default

As represented in the previous paragraphs, it is established that INPS has not adopted adequate measures and guarantees to effectively implement the principles of lawfulness, fairness and transparency (see par. 5.1 of this provision) and integrity and confidentiality (see par. 5.2 of this provision), in violation of the principles of data protection by design and data protection by default pursuant to art. 25 of the Regulation.

6. The defensive activity

With a note dated June 15, 2022, INPS sent its defensive documents, representing, in general, that:

“in consideration of the ongoing emergency situation and the urgency of providing the unpostponable economic support provided for by the extraordinary decree, it was essential \[…\] to implement an IT procedure, by March, that could be used by millions of users, with the widest and most simplified possibility of access to all recipients (consider that the total lockdown did not even allow going to consultants, patronages, etc. or easily obtaining a digital identity). IT implementation that, in order to deal with completely new procedures and allow access to all potential beneficiaries, was not achievable through the sole expansion of the technological system in use by the Institution but required the development of new procedures for new workflows and infrastructures prepared for the expected workload that was not included in the ordinary processes managed by INPS”;

“in the face of this completely exceptional, indeed extraordinary, unpredictable and certainly not caused by the Institute, scenario, \[…\] the Institution was forced to find, a few hours after the start of the submission of applications, additional emergency solutions to address the critical situation it would have encountered. In this turbulent context, the Institute availed itself of the support of Microsoft \[… and\] Leonardo, which provides system support under the Consip framework agreement on system management. Thus forming a “technical table” between INPS, Microsoft and Leonardo, identifying, as the only possible solution to address the emergency, the use of a Content Delivery Network (CDN)”;

two of the three personal data breaches were “contained \[and…\] in a period of no more than 30 minutes”.

Furthermore, with reference to the specific objections raised by the Office, INPS observed the following:

a) on the violation of articles 5, par. 1, lett. a), 12 and 34 of the Regulation:

“On 3 April 2020, the Institute published a data breach notice on the home page of its institutional website, highlighting the need for anyone who accidentally became aware of other people’s personal data not to use them, avoiding communicating them to third parties or disseminating them \[…\] possibly also incurring criminal offences \[…\] Furthermore, the news of the data breach and the potential information that was the subject of the same bounced across all communication channels, from the press, to social media, to news programs, to in-depth programs, even with the direct participation of the Institute. \[…\] For this reason too, the Institution considered that the violations found were not of such gravity as to require the sending of communications pursuant to art. 34 of EU Regulation no. 2016/679 to individual interested parties, whose identification, especially for those involved in the caching of the CDN service, was of particular and proven complexity”;

“the circumstance that a series of communications were forwarded to the interested parties a few months after the violation cannot be considered late also because, for the reasons set out above, all Italians were already informed of the event immediately after the fact”;

“in the specific case, INPS \[…\] considered that there was no HIGH risk such as to require, in addition to public knowledge, further communication to individual interested parties”;

“it was a case of data security incident intended to affect at most the “confidentiality” (case of accidental disclosure of data) while the “breach of availability” (loss, destruction, access) of personal data was excluded”;

“due to the nature, character and volume of the personal data that would have been exposed, a serious risk to the rights and freedoms of natural persons was unlikely since in almost all cases the data concerned were non-sensitive, referring to personal data elements that were not capable of determining substantial damage in ordinary circumstances.In fact, they were types of personal data (name, surname, address, email, etc.) relatively “harmless” as they were not particularly confidential or sensitive and made visible to other individuals who were not motivated by a particular interest in knowing them but were aware of having seen them only accidentally.”;

b) on the violation of Articles 5, paragraphs 1, letter f), and 2, and 32 of the Regulation:

“it is quite evident that the Institute has taken into account the “state of the art” mentioned in Article 32 of the EU Regulation when in identifying the appropriate technical and organizational measures for the implementation of the procedure it made use of partners (Microsoft, Akamai, Leonardo, Sistemi Informativi S.r.l.) \[…\] For this reason, the «state of the art», understood as the «existing scientific knowledge and research» and the most consolidated «generally recognized technical rules», was well known both to the Institute and to the other support and consultancy entities Microsoft, Akamai, Leonardo, Sistemi Informativi S.r.l., however, it was necessary to relate to the context in which the processing was going to be carried out”;

“there was therefore no neglect with regard to technological progress but, in consideration of the urgency and limited time frame available, it was necessary to reconcile the priorities, the need to safeguard and protect the processing with the overall IT system in use at the Institute and the fulfillment of the institutional function assigned by the legislator”;

“the same art. 32 of the EU Regulation does not limit itself to imposing the application of the most up-to-date and efficient measure that can absolutely guarantee the intangibility of the data processed but also places emphasis on the costs of implementation as well as on the nature, context and purpose of the processing \[...\]. For this reason, as also provided for in the Guidelines 4/2019 on Article 25 "Data protection by design and by default" Version 2.0, with considerations also applicable to art. 32 "23. The controller may take into account the cost of implementation when choosing and applying appropriate technical and organizational measures and necessary guarantees that effectively implement the principles in order to protect the rights of the data subjects. The cost refers to resources in general, including time and human resources. 24. The cost factor implies that the controller does not employ a disproportionate amount of resources in the event that alternative, less expensive, but effective measures exist."";

"the new and exceptional contribution provided for by art. 27, 28, 29, 30 and 38 of Legislative Decree no. 18/2020 provided for a generalized form of subsidy intended for a very large group of subjects (essentially all non-employed workers) with the aim of providing them with financial support, regardless of their economic conditions. A group of users (tens of millions) that also included subjects who had no previous relationships with the Institute and, precisely for this reason, the issue of the simplified PIN was provided for as a security measure. Therefore, due to the breadth of recipients, the conditions of eligibility, the type of subjects involved, and the intended purpose, there was a reduced risk for the rights and freedoms of natural persons \[…\]. In fact, the personal data entered were almost entirely related to known, public elements of the people (consider that it was the name, surname, address, telephone number of individuals who carried out self-employed activities and who therefore notoriously advertised them on various social channels, published registers, websites, etc.) as well as, taking into account the type of benefit provided (a sort of "rain shower") there was not even the risk of discrimination, loss of confidentiality of data protected by professional secrecy or prejudice to rights. For this reason, in consideration of the "state of the art", the "cost of implementation" of the nature of the processing and of the data, it appears evident that INPS cannot be considered violated, having availed itself of the consultancy, collaboration, cooperation of highly significant reference partners, among the best and most up-to-date on the market, the obligation to implement adequate technical and organizational measures and the necessary guarantees in the processing carried out, referred to in art. 32 of the EU Regulation";

"it is undeniable that data breaches occurred, but it must also be considered that the incidents occurred in such a way (also adding the ongoing cyber attack) as to exclude the failure to adopt suitable precautions to avoid it, being evident that the events occurred in such atypical and abnormal ways that they must be considered completely unforeseeable and inevitable despite the adoption of adequate prevention measures, in relation to the circumstances, times and means available. It is observed on this point that the state of emergency, the number of subjects who considered the procedure as a "click day", the ongoing hacker attacks and the extremely short times imposed by the law are external factors characterized by unpredictability and exceptionality such that they can be considered force majeure (not only referable to the natural fact, but also to that of the third party) capable of determining the occurrence of the harmful event, so as to interrupt the etiological link between the fact and the event";

“for this reason, the conduct of the Institute does not appear to be punishable, having reasonably planned and prepared the most appropriate system, in relation to the resources and time available, making use of the best possible professional advice”;

c) on the violation of art. 25 of the Regulation: “INPS has made the maximum effort of diligence and expertise possible, in relation to the existing situations and available resources, in preparing in a very short time (fifteen days) completely new IT procedures, pre-establishing conditions suitable for reducing the permitted risk to the extent possible, making use of the best professional advice, such as that provided by the leading experts in the sector (Microsoft, Akamai, Leonardo, Sistemi Informativi S.r.l.). \[…\] As well as on the communication obligations and content of the same, it appears undeniable that the Institute has complied with the indications of the same Department and that the content of the notes reported exhaustively and clearly all the necessary information \[…\]. It should be remembered, in fact, that the Institute did not limit itself to forwarding a standard communication to the interested parties, but modulated the content of the notes, interacting with this Authority, based on the various types of data displayed. It is equally undeniable that the data breaches were accidental and concerned non-sensitive personal data that were not such as to lead to discrimination, financial losses, damage to reputation, or identity theft, so much so that - as already highlighted - after two years no compensation action in this sense has been brought against INPS".

Finally, during the hearing held, via videoconference, on 14 November 2022, INPS, in addition to reiterating what was already stated in the documents, added, in particular, that "the circumstance that this Authority, with order no. 86 of 14 May 2020 deemed it necessary to communicate to the individuals affected by the violation by ordering the Institute to proceed within a certain time limit, it cannot be considered tout court a violation of the aforementioned art. 34, as it is only a different assessment of the risk by the Authority".

7. Outcome of the investigation

In general terms, the arguments put forward in the defense documents, although worthy of consideration, do not allow to overcome the findings notified by the Office with the act of initiation of the proceeding and are insufficient to allow the archiving of the present proceeding, since, moreover, none of the cases provided for by art. 11 of the Guarantor's regulation no. 1/2019 apply.

In particular, what has been highlighted with reference to the context in which INPS found itself operating in the period considered becomes the object of assessment in terms of circumstances in which the violations of the Regulation occurred, without however eliminating the Institute's responsibilities in the failure to adopt measures aimed at adequately protecting the fundamental rights and freedoms of the interested parties.

The same argument also applies with specific reference to the newly implemented IT procedures aimed at allowing the provision, in a short time, of economic benefits to a large number of citizens affected by the effects of the pandemic, on the basis of what is established by the emergency decree (Legislative Decree no. 18/2020).

Furthermore, it is believed that the violations contested in the note of 17 May 2022, the subject of examination in this provision, are to be attributed to INPS, as data controller, as no elements were provided, during the investigation, aimed at proving any specific responsibilities on the part of the subjects used by the Institute itself pursuant to art. 28 of the Regulation for the performance of the processing in question (see recital 74 of the same Regulation).

With reference to the specific objections raised in the act of initiation of the procedure aimed at adopting corrective and sanctioning measures, in relation to what was argued by INPS, the following is noted.

7.1. On the violation of articles 5, par. 1, letter a), 12 and 34 of the Regulation, in relation to the late communication of personal data violations to the interested parties

With reference to the personal data violations caused by the caching of personal information present on the pages of the portal “www.inps.it” (see par. 2 of this provision) and by the incorrect configuration of the authorization system of the Bonus Baby Sitting procedure (see par. 3 of this provision), INPS, considering that these were not likely to present a high risk for the rights and freedoms of natural persons, did not initially inform the interested parties involved in such violations.

The Guarantor, however, with the aforementioned provision of 14 May 2020 – to which reference is made for the examination of the considerations of merit – has qualified the aforementioned violations of personal data as likely to present a high risk for the rights and freedoms of natural persons, ordering INPS to communicate them to the interested parties involved.

With the same provision, the Guarantor considered that the public communication carried out by the Institute through publication on its institutional website did not constitute a suitable instrument for fulfilling the obligations under art. 34 of the Regulation. Although, at first, this generic communication could, in fact, represent a sufficient measure, offering a dedicated address to contact, it did not allow, however, to effectively inform the data subjects involved in each personal data breach, partly identified by the Institute, nor to make the natural persons directly involved aware of this circumstance, also in order to allow them to take the necessary precautions in consideration of the different characteristics of the breaches that concerned them (see in this regard the Guidelines on the notification of personal data breaches pursuant to Regulation (EU) 2016/679 in force at the time of the facts, adopted by the Article 29 Working Party on 3 October 2017, as amended and adopted lastly on 6 February 2018 and endorsed by the European Data Protection Board, according to which the data controller "should also provide specific advice to natural persons on how to protect themselves from the possible negative consequences of the breach”).

The need for timely communication was increased by the variety of situations that occurred (described in paragraphs 2, 3 and 4 of this provision). In light of this, a standard communication could not constitute a sufficient means to inform each category of interested parties about the implications of the violations committed and the measures implemented by the Institute.

Furthermore, the measures adopted by the Institute following the aforementioned violations were not suitable to completely prevent the occurrence of a high risk (and therefore could not be traced back to the exemption referred to in art. 34, paragraph 3, letter b), of the Regulation, referred to by the Institute in its defense documents).

The incorrect assessments regarding the existence of the conditions for communication to the interested parties have, therefore, determined the lateness of such fulfillment by the Institute, which proceeded only following the provision of the Guarantor of 14 May 2020.

Therefore, what has already been ascertained by the Authority is confirmed regarding the fact that INPS has committed the violation of articles 5, par. 1, letter a), 12 and 34 of the Regulation with reference to the late communication of the violations of personal data detected to the interested parties involved in each of them.

7.2. On the violation of articles 5, par. 1, letter a), f), and 2, and 32 of the Regulation, in relation to the critical issues concerning the security of the processing

As previously reported (see paragraph 5.2 of this provision), it was ascertained that INPS did not adopt adequate measures to guarantee a level of security appropriate to the risk, with reference to the incorrect configuration of the caching functions of the Akamai CDN and the INPS web servers, the unsuitability of the authorization system of the Baby Sitting Bonus procedure and the failure to adopt adequate measures to promptly detect and manage violations of personal data.

In this regard, given that the Institute has not adduced elements that cast doubt on what was ascertained by the Authority with respect to the critical issues identified in terms of the design and configuration of the functions involved (see what is reported in paragraphs 5.2.1 and 5.2.2 of this provision), with reference to the arguments put forward in the defense, the following is noted.

First of all, the Institute believes that, for the purposes of assessing the adequacy of the measures adopted, the use of "partners (Microsoft, Akamai, Leonardo, Sistemi Informativi S.r.l.) who are top experts in the field and aware of the most up-to-date progress made by the technology available on the market" should be valued as an element relating to the "state of the art".

It should be noted that the object of the dispute to the Institute is not the use of systems (such as those indicated) that are not state of the art, but rather their incorrect configuration for the specific purposes set - such as, for example, that of guaranteeing the availability and resilience of the systems in the face of the expected and significant increase in connections to the institutional portal and the cyber attacks underway on the same days.

Furthermore, with reference to the “implementation costs” – an element that INPS intends to refer to “the resources available, the time required, the expenditure to be incurred and the means that can be used” – we recall what is indicated in the Guidelines 4/2019 on Article 25 – Data protection by design and by default (adopted by the European Data Protection Board on 20 October 2020), according to which “the implementation cost represents a factor to be taken into account when implementing data protection by design, and not a reason to refrain from implementing it. The measures identified must therefore ensure that the processing activity envisaged by the controller does not involve processing of personal data in violation of the principles, regardless of the cost of such measures” (points 24 and 25). This means that the implementation costs cannot be considered an element that authorizes the controller to lower the level of protection that the measures must adequately ensure; if anything, they may constitute a factor to be taken into account when choosing between multiple solutions.

With reference to the alleged “reduced risk for the rights and freedoms of natural persons” “due to the breadth of recipients, the conditions of delivery, the type of interested parties, the intended purpose”, the thesis put forward by INPS cannot be accepted, according to which “the personal data entered were almost entirely related to known, public elements of the people (consider that it was the name, surname, address, telephone number of individuals who carried out self-employed activities and who therefore notoriously advertised them on various social channels, published registers, websites, etc.) as well as, taking into account the type of benefit provided (a sort of “dispersion”) there was not even the risk of discrimination, loss of confidentiality of data protected by professional secrecy or prejudice to rights”. This is because the personal data subject to violation cannot be considered public due to an alleged propensity of the interested parties themselves to disseminate them online.

Therefore, what has already been ascertained by the Authority regarding the fact that INPS has committed the violation of Articles 5, par. 1, letter f), and 32 of the Regulation with reference to the incorrect configuration of the caching functions of the Akamai CDN and the Institute's web servers and the unsuitability of the authorization system of the Bonus Baby Sitting procedure (see paragraphs 5.2.1 and 5.2.2 of this provision).

\* \* \* \* \*

Finally, with specific reference to the failure to adopt adequate measures to promptly detect and manage personal data breaches, reference is made to the indications of the Guidelines on the notification of personal data breaches pursuant to Regulation (EU) 2016/679, which clarify that "the ability to promptly identify, process and report a breach must be considered an essential aspect" of the technical and organizational measures that the data controller and processor must implement, pursuant to art. 32 of the Regulation. In addition, defining in advance the actions to be taken to mitigate risks and fulfill obligations without undue delay ensures, and enables the controller to demonstrate, that, where appropriate, an incident can be managed more quickly, especially in relation to controllers who process personal data characterized by high risks for the rights and freedoms of data subjects within complex organizations (see Guidelines 01/2021 on examples concerning the notification of a personal data breach, adopted by the European Data Protection Board on 14 December 2021, point 13).

Moreover, the execution of analysis activities aimed at identifying the data subjects involved is necessary to ensure correct fulfillment of the obligations under Articles 33 and 34 of the Regulation and could not fail to be required of a data controller such as INPS, which – in compliance with the principle of accountability – must be able to have adequate means and resources to manage such activities, even in a phase following the containment of the breach.

Therefore, what has already been ascertained by the Authority is confirmed regarding the fact that INPS has committed the violation of Articles 5, paragraphs 1, letter f), and 2, and 32 of the Regulation with reference to the failure to adopt adequate measures to promptly detect and manage personal data violations (see paragraph 5.2.3 of this provision).

7.3. On the violation of Article 25 of the Regulation, in relation to non-compliance with the principles of data protection by design and by default

Pursuant to Article 25 of the Regulation, the data controller is therefore required to implement the principles of data protection (Article 5 of the Regulation) by adopting adequate technical and organizational measures and integrating the necessary guarantees into the processing to meet the requirements of the Regulation and protect the rights and freedoms of the data subjects.

In this regard, in relation to the principle of lawfulness, fairness and transparency (art. 5, par. 1, letter a), of the Regulation), it is stated that the controller must be transparent with the interested parties also in the event of communications of personal data breaches, promptly providing relevant information applicable to the specific interested party, in clear and simple, concise and comprehensible language (see arts. 12 and 34 of the Regulation and Guidelines 4/2019 on article 25, esp. points 65 and 66).

Furthermore, with reference to the principle of integrity and confidentiality (art. 5, par. 1, letter f), of the Regulation), the controller must constantly assess whether he is using, at any time, the appropriate means of processing and whether the measures adopted effectively counteract existing vulnerabilities (see Guidelines 4/2019 on Article 25 – Data protection by design and by default, esp. points 84 and 85), assessing, in particular, the risks to the security of personal data, taking into account the impact on the rights and freedoms of data subjects, and effectively countering those identified, as well as having adequate procedures to manage personal data breaches, including those for their documentation and communication to the data subjects involved.

Therefore, it is believed that, in relation to what is established in paragraphs 7.1 and 7.2 of this provision, INPS has not effectively implemented the principles of lawfulness, correctness and transparency and integrity and confidentiality, and, therefore, it is confirmed that the Institute has implemented the violation of the principles of data protection from the design and by setting out in art. 25 of the Regulation.

8. Conclusions

In light of the set of assessments mentioned above, the statements made by INPS in the defense documents and in the hearing, although worthy of consideration for the purposes of assessing the conduct, do not allow the main findings notified by the Office with the act of initiation of the procedure for the adoption of the provisions referred to in article 58, paragraph 2, of the Regulation to be overcome and are insufficient to allow the archiving of this proceeding, since, moreover, none of the cases provided for by art. 11 of the regulation of the Guarantor no. 1/2019.

In this context, confirming the findings notified by the Office with the note of 17 May 2022, it is noted that, in the matter in question, INPS has committed the violation of art. 5, paragraphs 1, letters a) and f), and 2, and of arts. 12, 25, 32 and 34 of the Regulation, with reference to each of the three personal data violations that occurred, namely:

a) the personal data violation caused by the caching of personal information in a content distribution network (CDN) (described in paragraph 2 of this provision);

b) the personal data violation caused by the incorrect configuration of the authorization system of the Bonus Baby Sitting procedure (described in paragraph 3 of this provision);

c) the personal data violation caused by the caching of personal information in the INPS web servers (described in paragraph 4 of this provision).
Given that measures have been adopted to overcome the critical issues described above, the conditions for adopting the corrective measures referred to in Article 58, paragraph 2, of the Regulation do not exist.

9. Warning (Articles 58, paragraph 2, letter b), and 83 of the Regulation; Article 154-bis, paragraph 3, of the Code)

The Guarantor, pursuant to Article 58, paragraph 2, letter b), of the Regulation, has the power to "address warnings to the controller or processor where the processing has violated the provisions of this Regulation" (see also recital 148 of the Regulation).

In this case, it emerges that the contextual elements, due to the emergency period, which is entirely exceptional, and the burden of tasks entrusted to INPS to ensure millions of citizens the services necessary to meet essential needs in the aforementioned context through the timely provision of financial contributions, are indispensable for the purposes of concretely assessing the extent of the infringements found.

In fact, as represented by INPS, "It was an exceptional and extraordinary event in the context of the emergency due to the pandemic, not expected or foreseeable, such as to be considered as force majeure", as "we were in a situation of national health and security emergency due to Covid, also in terms of the financial support to be provided to the population. In this exceptional and extraordinary situation due to the pandemic, INPS was forced to move from an activity carried out almost exclusively in person to a total smart working for over 26,000 employees and all external consultants, which entailed an enormous transformation effort, the redesign of the paradigms of access to corporate IT resources, the preparation of new infrastructures, the learning of new ways of working while guaranteeing the same levels of efficiency and security in the processing of information and all services. In particular, in addition to managing all the new procedures imposed by the legislator with the emergency decree, the Institute had to continue to guarantee levels of services, consultancy and operations in all ordinary institutional activities by intervening on the information systems to adapt them to the satellite distribution of the different and varied staff workstations, outside the offices", also considering that "in the very short time imposed by the legislator with the emergency decree, the INPS prepared completely new IT procedures in less than fifteen days, which were not included in the ordinary processes managed by the Institute, doubling the processing capacity of the infrastructure \[...\] and addressed the emergency according to the criterion of the reasonable practicability of the measures in relation to the extraordinary and exceptional context due to the pandemic".

Furthermore, it should be noted that the Institute - which has not had any previous relevant violations - has promptly taken action to remedy the personal data violations and mitigate the damage suffered by the interested parties - also following the performance of complex identification activities - by adopting measures such as the immediate suspension of services, targeted interventions to delete data from some draft applications viewed and/or modified (in the case of the violation caused by the incorrect configuration of the authorization system of the Baby Sitting Bonus procedure), as well as the publication of notices on the website and the establishment of a specific email address to allow reports and evidence to be sent.

All this considered, in light of the circumstances of the specific case, it is believed that INPS should be warned for the violations found. .

This provision will be published on the website of the Guarantor in application of the provisions of art. 154-bis, paragraph 3, of the Code and art. 37 of the Guarantor regulation no. 1/2019.

Finally, it is noted that the conditions set out in art. 17 of the Guarantor's regulation no. 1/2019 exist.

GIVEN ALL THE ABOVE, THE GUARANTOR

having noted the unlawfulness of the conduct described in the terms set out in the reasons, pursuant to art. 58, paragraph 2, letter b), of the Regulation, warns INPS - National Social Security Institute for the violation of art. 5, paragraphs 1, letters a) and f), and 2, and of arts. 12, 25, 32 and 34 of the same Regulation;

ORDERS

pursuant to art. 154-bis, paragraph 3, of the Code, the publication of this provision on the Guarantor's website.

Pursuant to art. 78 of the Regulation, arts. 152 of the Code and 10 of Legislative Decree no. 150 of 1 September 2011, an appeal against this provision may be lodged before the ordinary judicial authority, under penalty of inadmissibility, within thirty days of the date of communication of the provision itself or within sixty days if the appellant resides abroad.

Rome, 17 July 2024

THE PRESIDENT
Stanzione

THE REPORTER
Cerrina Feroni

THE GENERAL SECRETARY
Mattei

```

Retrieved from "[https://gdprhub.eu/index.php?title=Garante\_per\_la\_protezione\_dei\_dati\_personali\_(Italy)\_-\_10057648&oldid=43921](https://gdprhub.eu/index.php?title=Garante_per_la_protezione_dei_dati_personali_\(Italy\)_-_10057648&oldid=43921)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Garante per la protezione dei dati personali (Italy)](/index.php?title=Category:Garante_per_la_protezione_dei_dati_personali_\(Italy\) "Category:Garante per la protezione dei dati personali (Italy)")
*   [Italy](/index.php?title=Category:Italy "Category:Italy")
*   [Article 5 GDPR](/index.php?title=Category:Article_5_GDPR "Category:Article 5 GDPR")
*   [Article 25 GDPR](/index.php?title=Category:Article_25_GDPR "Category:Article 25 GDPR")
*   [Article 32 GDPR](/index.php?title=Category:Article_32_GDPR "Category:Article 32 GDPR")
*   [Article 33 GDPR](/index.php?title=Category:Article_33_GDPR "Category:Article 33 GDPR")
*   [Article 34 GDPR](/index.php?title=Category:Article_34_GDPR "Category:Article 34 GDPR")
*   [2024](/index.php?title=Category:2024 "Category:2024")
*   [Italian](/index.php?title=Category:Italian "Category:Italian")

This page was last edited on 22 October 2024, at 14:26.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)