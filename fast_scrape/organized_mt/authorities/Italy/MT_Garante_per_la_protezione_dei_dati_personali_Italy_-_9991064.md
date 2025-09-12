# Garante per la protezione dei dati personali (Italy) - 9991064

## Case Information

**Authority:** Garante per la protezione dei dati personali (Italy)

**Jurisdiction:** Italy

**Relevant Law:** Article 28(2) GDPRArticle 32 GDPRArticle 33 GDPRArticle 33(2) GDPR

**Type:** Complaint

**Outcome:** Upheld

**Started:** 22.10.2018

**Decided:** 08.02.2024

**Fine:** 800,000 EUR

**Parties:** UniCredit S.p.A.NTT Data Italia S.p.A.Truel IT S.r.l.

**National Case Number/Name:** 9991064

**European Case Law Identifier:** n/a

**Appeal:** Unknown

**Original Language(s):** Italian

**Original Source:** Garante per la protezione dei dati personali (in IT)

**Initial Contributor:** im

The DPA fined a processor €800,000 for engaging a sub-processor without the prior authorization of the controller and for the belated notification of a data breach to the controller.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

On 22 October 2018, UniCredit S.p.A. ("controller") notified the Italian DPA of a personal data breach that occurred in the period between 11 October to 21 October 2018. The breach occurred due to a cyberattack on the controller’s mobile banking portal for customers. Third parties tried to access customer accounts by attempting automatically-generated simple PINs.

The mobile banking portal had two vulnerabilities that facilitated the breach. First, the portal made customers’ personal data (first name, surname, tax code, and internal bank identification code) available in HTML responses to authentication attempts, including where attempts were unsuccessful. Second, the controller did not limit the use of simple PINs, making accounts vulnerable to cyberattacks aimed at identifying customer login information (brute force attacks).

Due to the HTML response vulnerability, every login attempt gave cyber attackers access to the names, tax codes, and internal bank identification codes of 777,765 present and former customers. In the case of 6,959 of those customers, the cyber attackers also successfully identified the portal PINs. The controller subsequently blocked the identified PINs. The breach did not include the data subjects’ banking data.

The controller did not consider the breach high-risk pursuant to [Article 34 GDPR](/index.php?title=Article_34_GDPR "Article 34 GDPR"). It posted a general notice on its website and gave direct notice only to the 6,959 data subjects whose passwords were identified. The DPA disagreed, finding the breach likely to present a high risk to data subject rights after a preliminary investigation.

In a defense brief, the controller argued that the breach occurred as a result of NTT Data Italia S.p.A.’s negligence ("processor"). The processor was charged with carrying out vulnerability tests on the controller’s mobile webpage and application together with Truel IT S.r.l. ("sub-processor"). The sub-processor was engaged without prior written authorization from the controller and was the one that became aware of the mobile portal’s vulnerabilities on 10 October 2018. The sub-processor identified them as high-level, report them to the processor on 19 October 2018 which the processor subsequently did not report to the controller until 22 October 2018.

### Holding

The DPA considered that in the event of a personal data breach, although the controller retains overall responsibility for personal data protection, the processor still plays a fundamental role in enabling the controller to promptly and adequately fulfill the obligations set out in Articles 32 to 36 GDPR, including those regarding the notification of personal data breaches.

In particular, pursuant to [Article 33(2) GDPR](/index.php?title=Article_33_GDPR#2 "Article 33 GDPR") in the event of a personal data breach, the processor is required to inform "the controller without undue delay after becoming aware of the breach." The DPA referred to the Guidelines 9/2022 on the notification of personal data breaches under the GDPR which recommend that the processor "notifies the controller promptly, subsequently providing any further information on the breach that comes to light"; this is "important to assist the controller in fulfilling the obligation to notify the supervisory authority within 72 hours."

The DPA added that despite the fact that the breach was discovered by the sub-processor, the obligation to inform the controller under [Article 33(2) GDPR](/index.php?title=Article_33_GDPR#2 "Article 33 GDPR"), remains with the initial processor, who is not required to assess the risk arising from the breach before notifying the controller. According to the DPA, the processor should have informed the controller as early as 11 or 12 October 2018. For reasons of not notifying the controller until 22 October 2018, the processor violated [Article 33(2) GDPR](/index.php?title=Article_33_GDPR#2 "Article 33 GDPR").

Additionally, the DPA noted that the processor engaged another processor without a prior authorization from the controller, therefore breaching the obligation set out in [Article 28(2) GDPR](/index.php?title=Article_28_GDPR#2 "Article 28 GDPR").

Based on the aforementioned considerations, the DPA levied a fine of €800,000 against the processor.

## Comment

The case related to the personal data breach against the controller, UniCredit S.p.A., may be found on the following link --> [https://gdprhub.eu/index.php?title=Garante\_per\_la\_protezione\_dei\_dati\_personali\_(Italy)\_-\_9991020](https://gdprhub.eu/index.php?title=Garante_per_la_protezione_dei_dati_personali_\(Italy\)_-_9991020)

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Italian original. Please refer to the Italian original for more details.

```
SEE ALSO Newsletter of 7 March 2024

\[doc. web no. 9991064\]
Provision of 8 February 2024
Register of measures
n. 66 of 8 February 2024
THE GUARANTOR FOR THE PROTECTION OF PERSONAL DATA
IN today's meeting, which was attended by prof. Pasquale Stanzione, president, Prof. Ginevra Cerrina Feroni, vice-president, the lawyer. Guido Scorza and Dr. Agostino Ghiglia, members, and Dr. Claudio Filippi, deputy general secretary;
HAVING REGARD to Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 (hereinafter the “Regulation”);
HAVING REGARD to the Code regarding the protection of personal data, containing provisions for the adaptation of national legislation to Regulation (EU) 2016/679 (Legislative Decree 30 June 2003, no. 196, as amended by Legislative Decree 10 August 2018, no. 101, hereinafter “Code”);
GIVEN the violation of personal data notified to the Authority on 22 October 2018, pursuant to art. 33 of the Regulation, by UniCredit S.p.a. relating to a cyber attack on the online banking system for the mobile web channel;
CONSIDERING that during the investigation against UniCredit S.p.a. profiles of responsibility emerged against NTT Data Italia S.p.a., responsible for the processing of personal data;
EXAMINED the documentation in the documents;
GIVEN the observations made by the deputy general secretary pursuant to art. 15 of the Guarantor's regulation no. 1/2000;
SPEAKER Dr. Agostino Ghiglia;
PREMISE
1. Violation of personal data and investigative activity.
1.1. The investigation against UniCredit S.p.a.
On 22 October 2018, UniCredit S.p.a. (hereinafter “UniCredit” or “the Bank”) has notified the Guarantor, pursuant to art. 33 of the Regulation, the violation of personal data occurred following a cyber attack on the online banking system for the mobile web channel (hereinafter "Mobile Banking Portal") which resulted in the illicit acquisition of some personal data of customers (in particular, name, surname, tax code and internal identification code of the bank, with the exclusion of their bank details).
In particular, the Bank represented that the first attempts at unauthorized access were carried out in the period between 11 and 20 October 2018 and that the cyber attack took place on a massive scale on 21 October 2018, the date on which the Bank, having detected a large number of login attempts to the mobile banking site, it immediately proceeded with the notification pursuant to art. 33 of the Regulation, specifying that:
“the attack was implemented through the massive use of sequential codes to identify which of them corresponded to actually existing REB codes (personal identification code for access to the online banking system)”;
the violation involved "731,519 REB codes, of which \[...\] 6,859 are those blocked by the bank because the password had been identified";
"some personal data of customers (only name, surname, tax code and bank identification code) were visible in the response code to the query, while it does not appear that there was access to the customers' banking data nor that any operations were carried out" .
With a subsequent note dated 16 November 2018, the Bank, in response to a request for information formulated by the Office on 9 November 2018, also specified that:
“the attack, coming from an anonymized network (TOR), with the aim of masking the real IP address of the attacker, had the objective of enumerating a series of customers using a fixed password”;
"an application condition allowed the return of information even in the event of failed authentication, and therefore when the REB Code entered corresponded to a customer, regardless of whether the password was the correct one, name and surname, tax code and NDG were returned, which is an internal identification code, assigned to each customer when it is entered into the \[...\] IT systems \[of UniCredit S.p.a.\]. For the 6,859 customers, who had a "weak" password used by the attackers \[...\], the "password" was also identified;
“the immediate technological response, which occurred following the identification that gave rise to the security incident, consisted of blocking individual connections coming from an anonymized network (TOR) and having the characteristics of the cyber attack”; in addition to this, a quantitative blocking of connections that exceed a critical threshold for a defined time interval has been implemented and an IT mechanism (captcha) aimed at human identification of the user who carries out the Login request, with the aim of blocking connections automatic or computer scripts". \[...\] a mechanism is being implemented to force the use of complex passwords by users, which will be available in production starting from November 23rd and which with subsequent releases will cover the entire bank's customers";
in the case in question the Bank, "not recognizing the "high risk" referred to in the art. 34 of the Regulation and in consideration of the large number of interested parties, published a press release on its website" and "instead, notified those customers whose password had been blocked because it had been identified by the attackers, and which amounted to 6,859".
In light of an overall examination of the circumstances represented by the Bank, the Authority considered that the violation of the personal data in question, unlike the assessment carried out by the Institute, was likely to present a high risk for the rights and freedoms of natural persons (condition for which communication to interested parties is required) and, therefore, with provision no. 499 of 13 December 2018 (web doc. no. 9076378) ordered UniCredit, pursuant to art. 58, par. 2, letter. e), of the Regulation, to communicate the violation of personal data to all interested parties who have not already been recipients of the communication itself, inviting them to provide adequately motivated feedback regarding the initiatives taken for this purpose as well as regarding the measures adopted to mitigate the negative effects of the violation of personal data on the interested parties.
With a note dated 25 January 2019, the Bank, in describing the methods and timing with which it implemented the provisions issued with the aforementioned provision no. 499, specified that it had prepared differentiated communications for customers and former customers (a copy of which it attached) whose content was found to comply with the provisions of the art. 34, par. 2, of the Regulation.
With the same note, UniCredit also communicated that, following further analyzes carried out in order to identify the interested parties to whom notification of the violation had occurred, it emerged that the number of subjects involved was higher than that initially identified (for a total number of 777,765 customers and former customers); the bank also specified that it had introduced an enforcement mechanism for passwords used by users, initially aimed at customers involved in the violation of personal data and progressively extended to all customers by March 2019.
Following subsequent in-depth investigations (see request for information dated 1 February and 12 April 2019), the Bank provided further clarification elements (see notes dated 26 February and 3 May 2019) based on which, also in light of of the documentation acquired in the documents, it was found that:
a) at the time of the violation of personal data, with regard to the security of processing within the mobile banking portal, the technical and organizational measures referred to in art. 32 of the Regulation consisted of:
“login protected by username and password delivered separately to the customer in the branch;
account blocking after entering three incorrect passwords;
blocking of credentials identified in online data leaks by \[…\] intelligence/anti-fraud services;
possibility for the customer to subscribe to a service via SMS (premium SMS) for notification of activities such as online accesses, changes in PIN and personal data carried out by the Bank via the internet;
protection of sensitive transactions and activities (e.g. modification of personal data) by requesting an additional One Time Password (OTP);
behavioral analysis and transaction monitoring to detect customer fraud;
execution of periodic VA/PT \[…\] on the internet/banking infrastructure and application;
web application firewall (WAF) to protect against possible web attacks (e.g. sql injection)” (see note dated 26 February 2019, pp.1-2);
b) in the period between "1 October 2018 and 22 October 2018, a Penetration Test was underway on the Mobile Site system (site and APP for mobile devices)" whose execution had been entrusted to the company NTT Data Italia S.P.A. (hereinafter “NTT Data” or “the company”) on the basis of an agreement stipulated on 5 June 2017 with UniCredit Business Integrated Solutions S.c.p.a. (now UniCredit Services S.c.p.a., hereinafter “UBIS”) having as its object the provision of “Banking Application Penetration Test & Vulnerability Assessment”. As part of this agreement, NTT Data was designated by UniCredit as data controller - pursuant to the then current art. 29 of the Code - receiving precise instructions from the same to follow, including:
the express prohibition on entrusting the partial or total execution of vulnerability assessment and penetration testing activities to third parties (see paragraph 14 of the agreement);
where, for the execution of certain activities, the use of a third party is necessary, the obligation to inform the owner so that the same can, after evaluating his experience, skills and reliability, designate him as responsible of the treatment;
the obligation, in the event of detection of vulnerabilities with a critical or high level of severity, to immediately inform the owner in order to allow the same to rapidly remove such vulnerabilities (see Annex 3 of the agreement);
c) NTT Data, in carrying out the above activities, deemed it necessary to avail itself of the collaboration of another entity, Truel IT S.r.l. (hereinafter “Truel IT”), which, with a deed of appointment dated 17 September 2018, was designated as sub-processor in the absence of prior written authorization from UniCredit;
d) on 19 October 2018 NTT Data became aware of two vulnerabilities with high level severity (“User Data disclosure” and “Lack of Reverse Bruteforce Protection”) through Truel IT – which sent it the draft report containing the results of the Vulnerability Assessment and Penetration Testing activities - and informed UniCredit only on 22 October 2018.
1.2. The investigation against NTT Data Italia S.p.a.
With a note dated 15 May 2019, the Authority formulated a request for information from NTT Data which, with communications dated 24 and 27 May 2019, specified that "the Penetration Test and Vulnerability Assessment activities were conducted from 1 to 26 October 2018 according to the following timing:
the execution of the tests \[...\] was carried out from 1 to 12 October 2018;
the analysis of the results, the removal of false positives, the assessment and classification of vulnerabilities, the drafting of the technical report and sending the same draft report to the customer from 13 to 22 October 2018;
further refinements to the technical document regarding the vulnerabilities detected from 22 to 26 October 2018, with the final report being sent to the customer on 26 October 2018".
NTT Data also provided a copy of the technical reports containing the results of the aforementioned vulnerability assessment and penetration testing activities (both in the draft and final versions) which illustrate ten vulnerabilities detected by Truel IT, including two vulnerabilities with severity of high level:
the first "User Data Disclosure" vulnerability allowed enumerating all valid User IDs (consisting of 8 decimal digits) for accessing the mobile banking portal and acquiring some personal data (such as name, surname and code tax) associated with these User IDs even without knowing the relevant PIN (consisting of 8 decimal digits);
the second vulnerability of the "Lack of Reverse Bruteforce Protection" type allowed an unlimited number of authentication attempts to be made to the mobile banking portal with always different User IDs, without being blocked; in this scenario, an attacker could try to identify valid User ID / PIN pairs, for example trying particularly "weak" PINs such as "00000000" or "12345678".
NTT Data also stated that it "became aware of the "User Data disclosure" vulnerability on 19 October 2018 with the sending of the draft report by Truel IT S.r.l." which, for its part, had identified the two vulnerabilities described respectively on 10 October 2018 (the first) and the immediately following day (the second); in the same note NTT Data also highlighted how "typically the potential vulnerabilities of a system are detected during the Penetration Test activities" and that "this detection, however, requires, for the purposes of a risk assessment of the same and, therefore, of timely communication to the customer, the execution of further analysis activities (elimination of false positives) and classification (high, medium and low) and suggested remediation". For this reason, it carried out, "as per practice, its own analysis of the data received and a further evaluation of the classifications of all 10 vulnerabilities detected" and, only upon completion, did it communicate this to UniCredit "on 22 October 2018 at 10:00 CEST".
Lastly, NTT Data specified that "the detection \[...\] of the vulnerabilities in question could not and did not determine the knowledge/detection by NTT DATA Italia of the violation of personal data".
2. The initiation of the procedure for the adoption of corrective and sanctioning measures and the deductions of NTT Data Italia S.p.a..
As a result of the in-depth investigations described above, characterized by a high complexity of the technological profiles (see technical report of 10 December 2019), the Office highlighted the critical issues encountered regarding compliance by the owner and the responsible for the processing, of the obligations regarding the protection of personal data.
In particular, from the analysis of the documentation acquired in the documents and of the declarations made by NTT Data, UniCredit's data controller, (for which it is responsible pursuant to art. 168 of the Code, "False statements to the Guarantor and interruption of 'execution of the duties or exercise of the powers of the Guarantor") it has been ascertained that:
NTT Data has entrusted the execution of the vulnerability assessment and penetration testing activities of the mobile banking portal in question to a third party company (Truel IT) in the absence of prior written authorization from the data controller, in violation of the art. 28, par. 2, of the Regulation;
NTT Data informed UniCredit late of the personal data breach and, therefore, did not comply with the obligation set out in the art. 33, par. 2, of the Regulation.
Taking the above into account, the Office, with a note dated 5 February 2020, notified NTT Data Italia S.p.A., UniCredit's data controller, of the start of the procedure for the adoption of the measures referred to in the articles. 58, par. 2 and 83 of the Regulation, in compliance with the provisions of the art. 166, paragraph 5, of the Code, in relation to the alleged violation of the provisions governing the use of another data controller and the obligation to inform the data controller in case of violation of personal data referred to in the articles. 28, par. 2, and 33, par. 2 of the Regulation.
With the same note, NTT Data was invited to produce defensive writings or documents or to request to be heard by the Authority (art. 166, paragraphs 6 and 7, of the Code; as well as art. 18, paragraph 1, law no. 689 of November 24, 1981).
On 20 March 2020, NTT Data Italia sent the defense brief, which is referred to in its entirety here, with which, in formulating a request for a hearing, it provided the evaluation elements (with related attached documentation) indicated below. In particular:
a) “the VA and PT activities subject to today's verification by the Guarantor were carried out by NTT Data, on behalf of UBIS (not UniCredit), in the period 1 October 2018 – 12 October 2018, in execution of the contract of 5 June 2017 relating to “Banking Application Penetration Test & Vulnerability Assessment” and, pursuant to which, a specific purchase order for NTT Data was issued by UBIS”. Therefore “UBIS, and only UBIS, is the UniCredit Group company with which NTT Data has had contractual relationships. Indeed:
the Contract was signed by UBIS and NTT Data;
the last designation of NTT Data as sub-processor or sub-manager (not responsible) for the processing was carried out by UBIS, in its capacity as processor or responsible for the processing, on 18 October 2018 (Data Processing Agreement or DPA);
it is expressly provided that the obligations of the DPA prevail, in the event of conflict, over those of the Contract (art. 12.1. of the DPA), with the consequence that, as of 18 October 2018, the appointment of NTT Data as data controller for UniCredit pursuant to art. 13 of the Contract must be considered superseded and replaced by the DPA;
UBIS (not UniCredit) appears, in the DPA, as the only subject to communicate any data breaches or violations of personal data (see Appendix 1 of the DPA – p. 8;
the letters of specific authorization to carry out VA and PT activities on UniCredit's mobile banking systems (Android and iOS) subject to verification by the Guarantor were signed by UBIS \[...\].
Without prejudice to the above, it is also true that Annex 1 of the Contract \[...\] provides that NTT Data carries out VA and PT activities on systems of various companies of the UniCredit Group: but it is equally true that such activities would be, and are were always carried out on behalf of UBIS, and not UniCredit";
b) “NTT Data had no obligation towards UniCredit: all its obligations were towards UBIS, with the consequence that it cannot be accused of any delay in communicating anything to UniCredit. As for the obligations assumed by NTT Data with the Contract and the DPA, we mention those that are relevant for the purposes of this proceeding:
carry out, on behalf of UBIS, VA and PT activities (articles 3.1. and 3.2. of the Contract);
immediately communicate to UBIS any critical or high level vulnerabilities (see p. 4 of Annex 3 of the Contract);
communicate to UBIS, without unjustified delay, any possible violation of personal data (art. 6.1. of the DPA);
immediately communicate to UBIS and, in any case, within 4 hours of becoming aware of it, any violation of personal data (art. 6.2. of the DPA);
request prior authorization from UBIS for the engagement of any additional sub-processors (art. 9.1. of the DPA)”;
c) “the reason why the involvement of Truel It was necessary is the same reason behind the failure to obtain prior authorization from UBIS: to cope with a sudden and unexpected peak in work. Truel It's involvement was, however, limited to just one case, that of the execution of the VA and PT today being examined by the Guarantor. The reported peak in work was not, however, such as to prejudice the position of UBIS or the interested parties \[...\]. In fact, Truel It was involved only as a supplier registered in the NTT Data register, i.e. as its professionalism and reliability had already been verified by collecting the necessary documents and the necessary self-certifications/self-declarations, including that relating to organizational security measures and techniques implemented”;
d) “the carrying out of VA and PT activities between 1 October 2018 and 12 October 2018 took place in compliance with a specific request from UBIS. The checks carried out by NTT Data (also through Truel It) consisted, specifically, in the simulation of intrusion scenarios towards the target application to verify its resistance to potential actions aimed at creating conditions of disruption and/or data theft /critical information (so-called data exfiltration). All these activities were constantly monitored by UBIS through its Security Operation Center. The scope of intervention agreed with UBIS, the very nature of the activities commissioned to NTT Data by UBIS and the tools used by NTT Data and Truel It personnel in carrying out these activities, did not allow - nor could they have allowed - in any way the detection of intrusion attempts (actual and not simulated) made by third parties. In particular, the detection of an attempted access to UBIS systems by third parties can occur through \[...\]" a series of activities "not included in the task assigned to NTT Data (and, consequently, Truel It) \[... \] the only ones \[...\] that would have allowed the detection of attempts to access the UBIS systems. \[…\]. NTT Data, also through Truel It, limited itself to the activities necessary to fulfill the assignment received: execution of VA and PT. In this context, Truel It produced (on 19 October 2018) a provisional report, which NTT Data verified according to its internal practices, as a guarantee of quality";
e) with specific reference to the objections raised by the Authority, the Company first of all highlighted two circumstances: the first is that "NTT Data had no relationship with, nor any obligation towards, UniCredit: therefore, it does not seem possible to contest that it had communicated with any delay to UniCredit; the second is that "NTT Data had no opportunity to detect (on behalf of UBIS) the attempts to access UniCredit's systems, which culminated in the data breach notified by the latter to the Guarantor. The assignment she carried out (also with Truel It) was related to something completely different, namely vulnerability assessment and penetration testing and, in that context, she did not have access to the tools that could have allowed her to do so (on behalf of UBIS) of unauthorized access attempts to UniCredit systems". Having said this, it should be highlighted that:
1. “with regards to the violation of the art. 28, paragraph 2, of the Regulation:
the same occurred in the "period of first application of the GDPR, 8 months starting from 19 September 2018 to 19 May 2019", the period of which - pursuant to "art. 22, paragraph 13 of Legislative Decree 101/2018 - the Guarantor \[...\] takes into account, for the purposes of applying administrative sanctions and within the limits in which it is compatible with the provisions of the Regulation \[...\]". Therefore "the fact that NTT Data, in good faith, due to an excusable carelessness (and certainly not due to malice or gross negligence), failed to request the prior authorization of UBIS for the hiring of Truel It must, therefore, be evaluated in this 'optics \[…\]”:
“neither UBIS, nor the interested parties, have suffered any damage from the involvement of Truel It in the execution of VA and PT”; these "were carried out (not by NTT Data, but) by Truel It, but still in a workmanlike manner and according to the specifications contractually agreed with UBIS \[...\] In essence, if NTT Data had carried out the VA activities and PT directly, would have performed them in the same way as Truel It \[…\]”; therefore “\[...\] Even from this point of view, the omission of NTT Data is a simple thoughtlessness, as such completely devoid (in every respect) of the character of offensiveness”;
“the methods of execution of VA and PT by Truel It, as described in the report delivered by Truel It to NTT Data” meant that “a large part of the tests requested by UBIS were “conducted on test credentials and current accounts ”; this has "excluded massive interaction (of NTT Data and/or Truel It) with other current accounts associated with real customers, with the consequence that the integrity and confidentiality of the latter's data has been preserved". In particular, the Authority, in deciding whether or not to impose a sanction, should also take into account the fact that in the execution of the VA and PT Truel It became aware, for an extremely limited time period (1-12 October 2018), of mere identifying data (name, surname and tax code) and that the same, "in application of the principles of minimization, purpose and limitation of conservation, where displayed by the UniCredit systems following the query - were promptly deleted from the Truel It”;
NTT Data “has never before been subject to controls and/or sanctions by the Authority; this is undoubtedly a clear indicator of the good (if not even excellent) level of compliance achieved by the company \[...\]" as demonstrated by the various "compliance measures already in place as of 22 October 2018" and those adopted after 22 October 2018 and in the process of being implemented (of which an extensive description was provided in the annex to the defense brief). “For further confirmation and comfort of the above, it must also be considered that NTT Data, often acting as a (sub)processor, is equally often subjected to audits by its customers (data controllers or processors): these audits have always positive outcome”;
“a possible sanction for violation of the art. 28, paragraph 2 GDPR (rule that regulates the relationship between manager and owner and, therefore, between NTT Data and its customers)" would have the consequence of reputational damage (i.e. "the loss of customer trust and, therefore, the loss of assignments ”) “of seriousness, frankly, disproportionate to the lightness of the alleged violation”;
2.  regarding the disputed violation of the art. 33, par. 2 of the Regulation it is reiterated once again that "NTT Data did not have, nor could it have had, any knowledge of the personal data breach suffered by UniCredit on 21 October 2018"; this is because:
“NTT Data's assignment was to conduct vulnerability assessments and penetration tests: nothing else;
today's representative was not, in particular, responsible for monitoring UniCredit's IT systems: he therefore had no way of detecting attacks and/or data breaches (a circumstance also confirmed by the Technical Report: see pp. 5 ff.) ;
furthermore, access to UniCredit systems stopped on 12 October 2018, when Truel.it concluded its activities and began drafting the vulnerability assessment and penetration test report: well before, therefore, the data breach of 21 October 2018 would occur."
The Company therefore once again highlighted that "the only thing that NTT Data could detect, and did detect, was a high-level vulnerability which it communicated to UBIS in a timely manner compared to the moment in which it became aware of it. \[…\] NTT Data did not know, and could not have known, the UniCredit data breach of 21 October 2018: the articles. 6.1. and 6.2. of the DPA have not, therefore, been violated. The only thing that NTT Data became aware of was the vulnerability exploited by third parties to whom the data breach suffered by UniCredit is attributable: something very different from the data breach itself. And NTT Data was not accused of having communicated this vulnerability late: nor could it have been, because this vulnerability was communicated promptly.
The Contract, from this point of view, provided that the communication \[was\] immediate. The concept of immediacy naturally discounts the actual knowledge that NTT Data may have had of the vulnerability: this moment is not prior to March 19, 2018, i.e. the day on which NTT Data received the preliminary report from Truel It (\[…\] attached to the Technical Report), and it doesn't even coincide. The Working Party Art. 29, in its guidelines on the notification of personal data breaches, has had the opportunity to specify that the deadline for said notification starts from the moment in which the data controller or data processor (depending on the case) acquires effective knowledge of the violation itself, and that effective knowledge necessarily follows from the necessary checks. This principle is clearly applicable also to the case of NTT Data, based on a principle of reasonableness: if a serious circumstance such as a data breach must be verified before being notified, it is not clear why a less serious circumstance, such as a vulnerability, must be communicated before having verified that it is effective.
No delay is, therefore, objectionable to NTT Data: nor in relation to the communication of the data breach by UniCredit, which it could not have known about; nor in relation to vulnerability, which he communicated as soon as it became known."
The Company therefore highlighted that, in extreme summary, from the factual elements it appears that:
“NTT Data did not have, nor could it have had, any knowledge of the data breach (and previous attempts by third parties to access the systems) of UniCredit;
NTT Data could not, nor would it have been able to, communicate the data breach to UniCredit;
the only fact of which NTT Data was aware was a vulnerability in UniCredit's systems \[...\] which was promptly communicated by NTT Data, as UBIS received news of it as soon as NTT Data concluded the checks aimed at ensuring that the Truel It report was correct";
even if NTT had sent the Truel IT report "immediately, i.e. already on 19 October 2018 without waiting to have verified it", UBIS would not have been able to avoid the violation of personal data "because a period of time elapsed between 19 October and 21 October of really short time."
On 19 January 2021, NTT Data's hearing took place, during which it, in fully reiterating what has already been stated in the defense brief, asked that the Authority, for the purposes of evaluating the case, take into particular consideration the following circumstances:
a) “no damage occurred as a result of the activity carried out by the company”;
b) “the facts occurred in a particularly challenging period which determined the need to resort to a third party, moreover in a phase of first application of the GDPR”;
c) “the company was cooperative towards the Authority, providing every useful element for the purposes of reconstructing the accident”;
d) "the possible application of a pecuniary sanction and above all the publication of the provision would be highly detrimental to the interests of the company and would nullify every effort made so far, in terms of compliance, where this aspect is an element of competition between the operating subjects in the field".
The Company also highlighted that it is committed to adopting further measures "in order to continue to raise the level of compliance, some of which are still in the implementation phase (a phase which is expected to be concluded \[...\] by 31 March 2021 ). \[…\] among others, the privacy dashboard, which allows the company (and, in particular, its privacy office) to (i) constantly monitor privacy aspects also in order to identify areas for improvement in compliance with the principle of accountability, and to (ii) prepare periodic reports on the level of privacy compliance, to be shared with top management".
3. The legislation regarding the protection of personal data.
In accordance with the art. 28, par. 2 of the Regulation "the data controller does not use another data controller without prior written authorization, specific or general, of the data controller \[...\]".
The next par. 3, of the same art. 28 of the Regulation, in providing that "processing by a data controller is governed by a contract or other legal act", specifies, in letter. f), that such contract or other legal act must provide that the data controller "assists the data controller in ensuring compliance with the obligations referred to in articles 32 to 36, taking into account the nature of the processing and the information available to the data controller data controller".
Furthermore, the art. 28, par. 4, of the Regulation provides that "when a data controller uses another data controller for the execution of specific processing activities on behalf of the owner \[...\], on this other data controller they are imposed, through a contract or an other legal act under Union or Member State law, the same data protection obligations contained in the contract or other legal act between the controller and the processor referred to in paragraph 3, providing in in particular sufficient guarantees to implement adequate technical and organizational measures so that the processing meets the requirements of the \[…\] regulation. If the other controller fails to comply with its data protection obligations, the initial controller retains full responsibility towards the controller for compliance with the other controller's obligations."
The art. 33 of the Regulation, regarding violation of personal data, in par. 2 provides that, in this case, "the data controller informs the data controller without unjustified delay after becoming aware of the violation".
4. The Authority's assessments and the outcome of the investigation.
Upon examination of the documentation produced and the declarations made by the data controller during the proceedings, given that, unless the fact constitutes a more serious crime, anyone who, in proceedings before the Guarantor, falsely declares or certifies information or circumstances or produces false deeds or documents and is liable pursuant to art. 168 of the Code, this Authority formulates the following conclusive considerations.
As regards the disputed violation of the provision of art. 28, par. 2 of the Regulation, we acknowledge that NTT Data has entrusted the company Truel IT with carrying out the vulnerability assessment and penetration testing activities without having obtained the necessary prior written authorization, specific or general, from the data controller.
Furthermore, the same act of designation of NTT Data as data controller contained the express prohibition of entrusting the partial or total execution of the vulnerability assessment and penetration testing activities to third parties.
With reference to the second aspect under dispute, taking into account what was widely represented during the investigation by UniCredit and NTT Data, it is established that:
a) the two vulnerabilities mentioned above, identified "with high level severity", are exactly those used by the attacker during the cyber attack which was conducted, on a massive scale, to identify the User IDs (REB code) valid for access the mobile banking portal and to illicitly acquire the personal data associated therewith;
b) Truel IT was "aware" of the personal data breach from the moment it detected the "User Data Disclosure" type vulnerability (i.e., as can be seen from the technical reports, from 10 October 2018), as at that moment there was reasonable certainty that a breach of the confidentiality of the personal data processed within the Mobile Banking Portal had occurred. Furthermore, the identification, by the same Company, on the immediately following day (11 October 2018), of the "Lack of Reverse Bruteforce Protection" type vulnerability highlighted the circumstance that the "User Data Disclosure" type vulnerability could be exploited massively, producing negative effects on a large number of interested parties;
c) Truel IT informed NTT Data of the aforementioned vulnerabilities only on 19 October 2018, by sending the draft report containing the results of the vulnerability assessment and penetration testing activities and only on 22 October 2018, the day following the cyber attack, NTT Data informed UniCredit (when the Bank had already independently become aware of it, as its monitoring systems had detected the cyber attack of 21 October 2018 and had consequently adopted an initial set of technical and organizational measures to remedy the personal data breach).
Considering this, in preliminarily noting how the activities that the bank has entrusted to NTT Data are attributable to those that a data controller carries out to "test, verify and regularly evaluate the effectiveness of technical and organizational measures in order to guarantee the security of the processing" (see art. 32, par. 1, letter d) of the Regulation), it follows that in the event that a personal data breach occurs, although the owner retains general responsibility for the protection of personal data , the data controller in any case plays a fundamental role in allowing the owner to promptly and adequately fulfill the obligations set out in articles 32 to 36 of the Regulation (see art. 28, par. 3, letter f)), including those, regarding notification of personal data breaches.
In particular, pursuant to art. 33, par. 2 of the Regulation, in the event of a violation of personal data, the data controller is required to inform "the data controller without unjustified delay after becoming aware of the violation".
In this regard, with reference to the expression "without undue delay", the "Guidelines 9/2022 on the notification of personal data breaches pursuant to the GDPR", adopted by the European Data Protection Board on 28 March 2023 (which have replaced the previous “Guidelines on the notification of personal data breaches pursuant to Regulation (EU) 2016/679” adopted by the Article 29 Data Protection Working Group, most recently on 6 February 2018 and endorsed by the European Committee for data protection on 25 May 2018), recommend that the data controller "notify the data controller promptly, subsequently providing any further information on the violation of which he becomes aware"; this is “important in order to help the data controller comply with the obligation to notify the supervisory authority within 72 hours”.
This is true even when, as happened in the present case, a data controller uses a sub-processor to carry out specific processing activities on behalf of a data controller; the obligation to inform the data controller provided for by the art. 33, par. 2, remains the responsibility of the initial manager, who is not required to evaluate the risk deriving from the violation, before communicating it to the data controller; the person responsible is only responsible for establishing whether a personal data breach has occurred and, in this case, promptly informing the owner; the latter is responsible for carrying out the aforementioned assessment when it becomes aware of the violation.
In the case in question, therefore, NTT Data should have informed the data controller of the personal data breach without delay, i.e. from 11 and 12 October 2018, the date on which it became aware of it through Truel IT.
This is in order to allow the owner to:
to promptly adopt the measures necessary to remove the vulnerabilities mentioned above, thus preventing them from being exploited by a possible attacker;
verify whether the vulnerabilities had already been exploited to illicitly acquire personal data and therefore limit the scope of the cyber attack;
fulfill, if necessary, the obligations of notification to the Authority and communication to interested parties provided for by the articles. 33 and 34 of the Regulation.
It is also added that the Company's choice to outsource the execution of the vulnerability assessment and penetration testing activities probably contributed to the delay in communicating the violation to the owner, a circumstance which then negatively affected the timeliness of the corrective measures adopted by the owner himself to remove the aforementioned vulnerabilities.
5. Conclusions: declaration of unlawfulness of the processing. Corrective measures pursuant to art. 58, par. 2, of the Regulation.
For the above reasons, the Authority believes that the statements made by NTT Data in the defense briefs - the truthfulness of which may be called upon to respond pursuant to the aforementioned art. 168 of the Code - although worthy of consideration, do not allow us to overcome the findings notified by the Office with the act of initiating the procedure and are insufficient to allow its dismissal, as, moreover, none of the cases provided for by the art. 11 of the Guarantor's regulation no. 1/2019, concerning the internal procedures of the Authority with external relevance.
In particular, in light of the considerations referred to in par. 4, we declare that NTT Data, in relation to the violation of personal data in question - alongside the considerations on the liability profiles of UniCredit S.p.a. as data controller which are the subject of a distinct and separate provision - has engaged in illicit conduct in violation of the articles. 28, par. 2, and 33, par. 2, of the Regulation.
Therefore, considering the nature of the violations, this Authority, in exercising the corrective powers attributed by the art. 58, par. 2 of the Regulation, believes that it is not necessary to order corrective measures pursuant to art. 58, par. 2, letter. d), and provides for a pecuniary administrative sanction pursuant to art. 83 of the Regulation, commensurate with the circumstances of the specific case (art. 58, par. 2, letter i)).
6. Injunction order.
Violation of the provisions mentioned above entails the application of the administrative sanction provided for by the art. 83, par. 4, letter. a), of the Regulation.
With reference to the elements listed in the art. 83, par. 2 of the Regulation for the purposes of applying the pecuniary administrative sanction and its quantification, taking into account that the sanction must be "effective, proportionate and dissuasive in each individual case" (art. 83, paragraph 1 of the Regulation), it is represented that, in the specific case, the circumstances reported below were taken into consideration:
a) with reference to the nature, severity and duration of the violations (art. 83, par. 2, letter a), of the Regulation), the circumstance that the Company became aware of them only following the violation of personal data and requests for elements by the data controller has occurred;
b) with reference to the intentional or negligent nature of the violations and the degree of responsibility of the owner (art. 83, par. 2, letters b) and d), of the Regulation), the negligent behavior of the Company as responsible was taken into consideration of the processing which has not complied with the regulations on the protection of personal data, both in relation to the obligations incumbent on the person responsible (art. 28, par. 2 and 33, par. 2 of the Regulation), and with reference to the legitimate instructions of the data controller (prohibition on entrusting third parties with the partial or total execution of vulnerability assessment and penetration testing activities);
c) the absence of previous measures by the Authority against the company (art. 83, par. 2, letter e), of the Regulation);
d) active collaboration with the Authority, also with regard to the reconstruction of events and relations with the data controller (art. 83, par. 2, letter f), of the Regulation);
e) with reference to the categories of personal data affected by the violation (art. 83, par. 2, letter g) of the Regulation), it was that the data subject to the violation consisted of common data of the interested parties.
In consideration of the aforementioned principles of effectiveness, proportionality and dissuasiveness (art. 83, paragraph 1, of the Regulation) which the Authority must comply with in determining the amount of the sanction, the economic conditions of the offender were taken into consideration, determined based on the revenues achieved referring to the financial statements for the year 2022.
On the basis of the aforementioned elements, evaluated as a whole, it is considered to determine the amount of the pecuniary sanction in the amount of 800,000 (eight hundred thousand) euros for the violation of the articles. 28, par. 2, and 33, par. 2, of the Regulation.
In this context, also in consideration of the type of violation ascertained, it is believed that, pursuant to art. 166, paragraph 7, of the Code and art. 16, paragraph 1, of the Guarantor's regulation no. 1/2019, this provision must be published on the Guarantor's website.
Finally, it is noted that the conditions set out in art. 17 of regulation no. 1/2019 concerning internal procedures with external relevance, aimed at carrying out the tasks and exercising the powers delegated to the Guarantor.
ALL THE WHEREAS, THE GUARANTOR
declares, pursuant to articles. 57, par. 1, letter. f), and 83 of the Regulation, the illegality of the processing carried out, within the terms set out in the motivation, for the violation of the articles. 28, par. 2, and 33, par. 2, of the Regulation.
ORDER
to NTT Data Italia S.p.a., with registered office in Milan, Via Ernesto Calindri, 4, C.F./P.I. 00513990010, pursuant to art. 58, par. 2, letter. i), of the Regulation, to pay the sum of 800,000 (eight hundred thousand) euros as a pecuniary administrative sanction for the violations indicated in this provision;
ORDERS
to the same NTT Data Italia S.p.a. to pay the sum of 800,000 (eight hundred thousand) euros according to the methods indicated in the annex, within 30 days of notification of this provision, under penalty of the adoption of the consequent executive acts in accordance with the art. 27 of law no. 689/1981.
We represent that pursuant to art. 166, paragraph 8, of the Code, the right remains for the violator to settle the dispute through the payment - always according to the methods indicated in the annex - of an amount equal to half of the sanction imposed within the deadline referred to in the art. 10, paragraph 3, of Legislative Decree no. 150 of 1 September 2011 provided for the filing of the appeal as indicated below.
HAS
pursuant to art. 166, paragraph 7, of the Code and art. 16, paragraph 1, of the Guarantor's Regulation no. 1/2019, the publication of this provision on the Guarantor's website and believes that the conditions set out in the art. 17 of regulation no. 1/2019.
Pursuant to art. 78 of the Regulation, as well as articles. 152 of the Code and 10 of Legislative Decree 1 September 2011, n. 150, it is possible to appeal against this provision before the ordinary judicial authority, under penalty of inadmissibility, within thirty days from the date of communication of the provision itself or within sixty days if the appellant resides abroad.
Rome, 8 February 2024
PRESIDENT
Stantion
THE SPEAKER
Ghiglia
THE DEPUTY SECRETARY GENERAL
Philippi

```

Retrieved from "[https://gdprhub.eu/index.php?title=Garante\_per\_la\_protezione\_dei\_dati\_personali\_(Italy)\_-\_9991064&oldid=40626](https://gdprhub.eu/index.php?title=Garante_per_la_protezione_dei_dati_personali_\(Italy\)_-_9991064&oldid=40626)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Garante per la protezione dei dati personali (Italy)](/index.php?title=Category:Garante_per_la_protezione_dei_dati_personali_\(Italy\) "Category:Garante per la protezione dei dati personali (Italy)")
*   [Italy](/index.php?title=Category:Italy "Category:Italy")
*   [Article 28(2) GDPR](/index.php?title=Category:Article_28\(2\)_GDPR "Category:Article 28(2) GDPR")
*   [Article 32 GDPR](/index.php?title=Category:Article_32_GDPR "Category:Article 32 GDPR")
*   [Article 33 GDPR](/index.php?title=Category:Article_33_GDPR "Category:Article 33 GDPR")
*   [Article 33(2) GDPR](/index.php?title=Category:Article_33\(2\)_GDPR "Category:Article 33(2) GDPR")
*   [2024](/index.php?title=Category:2024 "Category:2024")
*   [Italian](/index.php?title=Category:Italian "Category:Italian")

This page was last edited on 27 March 2024, at 15:46.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)