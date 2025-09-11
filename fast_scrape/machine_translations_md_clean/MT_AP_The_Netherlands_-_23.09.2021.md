# AP (The Netherlands) - 23.09.2021

## Case Information

**Authority:** AP (The Netherlands)

**Jurisdiction:** Netherlands

**Relevant Law:** Article 32(1) GDPRArticle 32(2) GDPRArticle 34 GDPR

**Type:** Investigation

**Outcome:** Violation Found

**Decided:** 23.09.2021

**Published:** 12.11.2021

**Fine:** €400,000

**Parties:** Transavia Airlines C.V.Autoriteit Persoonsgegevens

**National Case Number/Name:** Transavia Airlines C.V.

**European Case Law Identifier:** n/a

**Appeal:** Unknown

**Original Language(s):** Dutch

**Original Source:** Transavia Airlines C.V. (in NL)

**Initial Contributor:** Matthias Smet

The Dutch DPA (AP) imposed a fine of €400,000 on Transavia Airlines C.V. for not having taken appropriate technical and organisational measures, which led to a (sensitive) data breach, in violation of [Article 32(1)](/index.php?title=Article_32_GDPR#1 "Article 32 GDPR") and [Article 32(2) GDPR](/index.php?title=Article_32_GDPR#2 "Article 32 GDPR")

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

In Oktober 2019, a malicious third party gained unauthorized access to (personal data contained in) the systems of Transavia Airlines C.V., which led to a data breach. In order to limit the damage and to determine what happened, Transavia engaged an external service provider to conduct a root-cause-analysis.

Circumstances of the breach:

By using (i) an automated method in which frequently used passwords are tried in a short time _(password spray)_ and (ii) known user data from previous third-party data breaches _(credential stuffing)_, the attacker succeeded in infiltrating Transavia's systems.

The generic user account that was used to gain unauthorized access had the highest privileges on certain domains of the system and was used as a link between Transavia's HR system and the Active Directory. This allowed the attacker to explore the systems and take a targeted approach by taking the following actions:

*   On certain systems, log files were deleted to remove traces;
*   Through a penetration test, the user was able to find vulnerabilities in the IT landscape of Transavia;
*   Copying network documentation, business and other miscellaneous documents and six mailboxes

Impact of the breach:

a) Impacted data subjects: the personal data that had been compromised belongs to passengers, employees, suppliers and job applicants. The forensic report of the external service provider showed that approx. 80,000 passengers, approx. 3,000 employees, 200 suppliers and 10 job applicants were impacted by the breach

b) Sensitive data: In addition to contact details of data subjects, the attacker also had access to sensitive data of the passengers. By using SSR codes (Special Service Request), Transavia tries to adapt its services to the needs of the passenger. From these codes, sensitive personal data (health data) can be indirectly derived (i.e., wheelchair user, blindness, or deafness). The forensic report showed that the health data of 367 people was leaked.

Notification to data subjects:

Fulfilling its obligations laid down in [Article 34 GDPR](/index.php?title=Article_34_GDPR "Article 34 GDPR"), Transavia identified and notified in total 81,000 data subjects, as there may have been a high risk to the rights and freedoms of these data subjects.

### Holding

As a result of the notification of the data breach, the DPA decided to investigate whether sufficient appropriate technical and organizational measures were in place at the time of the data breach. This investigation showed that Transavia did not respect [Article 32(1)](/index.php?title=Article_32_GDPR#1 "Article 32 GDPR") and [Article 32(2) GDPR](/index.php?title=Article_32_GDPR#2 "Article 32 GDPR") by not taking the appropriate technical and organizational measures.

First, the DPA considered that the passwords used, were considered as 'weak'. The DPA was informed that there is a password policy in which the requirements are stated per user profile. However, the DPA determined that the passwords used by the (generic accounts) in the attack did not meet these prescribed requirements. The reason for this was an incorrect risk assessment by Transavia (Transavia expected that the chance of a successful password spray attack or credential stuffing attack was greater with user accounts than generic accounts). Second, there was no well-implemented multi-factor-authentication (MFA). It was possible to access the CITRIX environment without MFA. Based on the above-mentioned risk assessment, Transavia decided to go for a phased roll-out of the MFA implementation, since the company asserted that these accounts had the highest priority. This means that, at first, MFA was merely to be implemented at user accounts, and later at the generic accounts. As a result, the multi factor authentication was not yet implemented for generic accounts at the time the data breach occurred

Third, the DPA considered the absence of network segmentation. This is the division of the network into functional segments. With network segmentation, only the systems that need to communicate with each other are placed together in separate segments, and users only get access to the segments they need. Taking this basic preventive measure lowers the chance of unauthorized access drastically. Fourth, the DPA considered the fact that certain log-files were removed, which made it considerably harder to have a complete image of the data breach, after it occurred. Although Transavia worked together with an external company, specialised in IT-security, which could track suspicious behaviour, _inter alia,_ because activity was being logged, certain critical logging was not undertaken and it was also possible to remove certain log-files. Besides the fact that above-mentioned security measures were already the norm, the implementation costs were also not considered to be that high.

Then, the DPA considered that, the more widely the data is processed and the more sensitive it is, the greater the demands placed on data security. Now, Transavia engages in large-scale processing: the attacker had access to systems containing data of approx. 25 million passengers. Moreover, a part of this is also sensitive, since it is health data. Lastly, the DPA considered the risk of varying likelihood and severity for the rights and freedoms of natural persons. It concluded that this risk is particularly high since the malicious use of the personal data could have led to material and immaterial damage of affected data subjects.

In view of the lack of appropriate technical safeguards which were already the norm, the low implementation costs, the large-scale processing, and the fact that also sensitive data was exposed in the breach, the DPA imposed an administrative fine of €400,000 on Transavia Airlines for violation of [Article 32(1)](/index.php?title=Article_32_GDPR#1 "Article 32 GDPR") and [Article 32(2) GDPR](/index.php?title=Article_32_GDPR#2 "Article 32 GDPR").

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Dutch original. Please refer to the Dutch original for more details.

```
                                                       AuthorityPersonal Data
                                                       PO Box93374,2509AJ The Hague

                                                       Bezuidenhoutseweg30,2594AV The Hague
                                                       T0708888500-F0708888501
                                                       authority data.nl

Confidential/Registered
TransaviaAirlinesC.V.
with regard to the management
PietGuilonardweg15
1117EESchiphol

Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

                          Contact
                          \[CONFIDENTIAL\]

Subject

Decisiontoimposeafine

Dear Sir / Madam,

The Data Protection Authority (AP) has decided to impose an administrative fine on TransaviaAirlinesC.V
of €400,000. The AP has come to the conclusion that Transavia is not an appropriate
has taken measures to ensure a security level appropriate to the risk
Transavia has acted contrary to article 32, first stone, second paragraph, of the General Ordinance

data protection.

The AP explains the decision in more detail. Chapter 1 concerns an introduction chapter 2 contains the facts.
TheAPassessesinchapter3oferreferencetoprocessingofpersonaldata,the
controller of the violation. Chapter 4 discusses the (height of) administrative

fine elaborated and chapter 5 contains the operative part and the remedies clause.

                                                                                           1Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

1 Introduction

1.1Involved organization

This decision relates to TransaviaAirlines CV (hereinafter: Transavia), with its registered office at the Piet
Guilonardweg15,1117EEteSchiphol.The company is registered in the trade register under
number:34069081. As anairlineprovidesTransaviaflightsforbusinesstravellers
consumers within Europe.

On 24 October 2019, the AP received a report from Transavia about a security breach
of personal data as referred to in article 33 of the AVG.In this notification is indicated by Transavia
that a malicious party has had unauthorized access to Transavia systems. To
As a result of this, the AP officially investigated whether the technical measures at Transavia met
with regard to access to personal data, which are appropriate as referred to in article 5, paragraph 1, sub f jo.
article32oftheGDPR.Specifically,thisresearchfocusesonaccesstocertainuseraccounts

at Transavia, as well as the rights and possibilities that these user accounts had within the
systems of Transavia.

1.2Process flow

On 28 November 2019, the AP contacted Transavia by telephone about the data leak report
of 24 October 2019 and subsequent notifications. AP supervisors then have
requested information several times from Transavia on which Transavia has supplied this information.

By letter dated 12May2021, the AP has sent Transavia an intention to enforcement and it

report with findings based on this. Transavia has written this on 28 June 2021
point of view.

1See File 26, Registration Trade RegisterTransaviaAirlinesC.V.

                                                                                         2/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

2.Facts

2.1 The infringement at Transavia

In the data leak report of October 24, 2019, Transavia has indicated that an evil will end the parti2
(hereinafter also: 'attacker') has had unauthorized access to Transavia systems. transaviais
according to the report found here on 21 October 2019. Transavia then has an external

service provider enabled and together with this service provider is the attacker of the systems of
Transavia was excluded. Furthermore, the external service provider has analyzed which systems were affected
and which data were involved.

It is described in the report prepared by the external service provider (hereinafter also: 'forensic report')
that an attacker has used \[CONFIDENTIAL\] email addresses. These addresses are
                                  3
possible to find on the 4 internet. The attacker tried to gain access to the
\[CONFIDENTIAL\]

The attacker used a “password spray” or “credential stuffing” attack.
spray”attackusesan attackeroftenusedpasswordsomanautomatedway
gain unauthorized access.In “credentialstuffing” attack, an attacker uses known

user data (from other third-party data leaks) to try to access
a system.

On September 12, 2019 at 9:52 am, a successful login attempt was made by the attacker.
usedusernamewas\[CONFIDENTIAL\]andpasswordwas\[CONFIDENTIAL\].With
this login could be used by the attacker of the \[CONFIDENTIAL\] user. This is a user who
                                        6
was used for \[CONFIDENTIAL\].

With the \[CONFIDENTIAL\] user it is possible to access a Citrix environment of

Transavia.Citrixis software that makes it possible to work from home. Then it is possible to 7
possible\[CONFIDENTIAL\] users in the \[CONFIDENTIAL\] domain.

The attacker then succeeded in getting the authentication data from the user
\[CONFIDENTIAL\]byusingthepassword\[CONFIDENTIAL\].Thisuser

2
 TransaviaFranceS.A.S.(sister company of Transavia) has reported separately to the French regulator according to the
data leakreportof24october2019becausesmokingpersonaldatawouldbeinvolvedwhereTransaviaFranceS.A.S
is responsible for. See File 1, notification of 24 October 2019.
3See File 11, report of 5 December 2019, page 21.
4ActiveDirectoryFederationServicesWebserviceisMicrosoftsoftwarethatenablesorganizationsSingleSignOnServices
achievements in an organization.
5See File 11, report of 5 December 2019, page 21.
6See File 25, Transavia's answers, date 26 May 2020.
7
 SeeFile 11, report from December 5, 2019, page 21. A network domain is a group of computers (systems) within a
computernetworkmetalstargetthesystemscentralizedmanage.

                                                                                                   3/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

had, according to Transavia, “the highest-level privileges in the \[CONFIDENTIAL\]”. Basically this means that the
accounts\[CONFIDENTIAL\]and\[CONFIDENTIAL\]jointly provided access to a large part of
                                       9
the computer network of Transavia. The role of the account was intended to serve as a link
between Transavia's HR system and Active Directory (to determine which employees
                                            10
rights to systems). ActiveDirectory is a service from Microsoft which (among others)
is used to manage user rights.

Then the attacker explored the systems of Transavia that are part of the domain
exploration phase,iser (probably automated) logged into \[CONFIDENTIAL\] systems. at 11

totaliseractivityobservedconcerning\[CONFIDENTIAL\]systems.Theexternalserviceprovider
has been able to determine on \[CONFIDENTIAL\] systems that there are data that are
            12
copied. The attacker might have been interested in accessing \[CONFIDENTIAL\]. Access here
obtain,however failed. This is also confirmed by Transavia. 14

The attacker has at least \[CONFIDENTIAL\]systems\[CONFIDENTIAL\]logs
deleted. 15

The attacker has continued to use \[CONFIDENTIAL\] software.This Penetration Test

software that is intended to find vulnerabilities in an IT landscape. The external service provider
at least \[CONFIDENTIAL\] systems found clues to this. On 21 October 2019 is
This type of attack was noticed by the administrator, the administrator has investigated.After October 21
                                                                        16
In 2019, no more activities have been observed from the attacker.

Based on this alert, Transavia on October 22, 2019 is an external service provider
enabled (not the administrator). The external service provider has performed a forensic analysis. Off

the analysis showed that the majority of the attacker's activities were aimed at
reconnaissance activities.However, the following data has been copied: Network documentation,
business and various other documents as well as six mailboxes. 17

Transavia \[CONFIDENTIAL\] systems have been labeled critical

fortheexchangeofdatawith\[CONFIDENTIAL\].Also,here\[CONFIDENTIAL\]convened
\[CONFIDENTIAL\]. On one of the critical systems, the \[CONFIDENTIAL\], are certain

log files removed. This made less evidence about water happening to this system on this system
system. 18

8See File 38, Replies from Transavia date September 24, 2020.
9
 See File 11, report of 5 December 2019, page 21.
10See File 25, Transavia's answers, date 26 May 2020.
1See File 11, report of 5 December 2019, page 21.
12See File 11, report of 5 December 2019, page 26.
13See File 11, report of 5 December 2019, page 25.
14
  See File 25, Transavia Answers, date 26 May 2020.
15See File 11, report of 5 December 2019, page 23.
16See File 11, report of 5 December 2019, page 25.
17See File 11, report of 5 December 2019, page 4.
18See File 11, report of 5 December 2019, page 17.

                                                                                                           4/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

On November 22, 2019, Transavia instructed the external service provider to check the mailboxes

investigations copied by the attacker in this breach to a remote location
the study concerned data in six mailboxes: five employee mailboxes and one of
                                                                                                  19
an ex-employee. In the mailboxes, 49 files with personal data were present. This
According to Transavia(name), mailboxes were in use by \[CONFIDENTIAL\] employees. 20

These files were then analyzed and based on this it was decided to make a statement to

81,000 data subjects, as required in article 34 of the GDPR, the submitter may imply a high
risk. This group of stakeholders consisted of Transavia employees and Transavia customers
employees whose mailboxes had been copied had already been informed verbally according to

transavia. 22

Transavia indicates that since November 25, 2019, the attacker definitively no longer had access to the IT
landscape of Transavia. This is also confirmed by the external service provider. 24

In summary, an unauthorized third party has had access to Transavia systems

access was possible to use a user with many rights, giving the attacker a lot of
had capabilities within these systems

personal data copied to a remote location.

2.2 Type of data

There are two groups to distinguish personal data in this breach: (1) personal data that the

attacker copied to a remote location and (2) data value attacker access to
had.

2.2.1Personal datacopiedtoaremotelocation

The following data, which were in the mailboxes, were copied by the attacker
                                25
(excluding the file names):

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]
\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

19See File 25, Replies from Transavia, date May 26, 2020–Appendix 2: Research report mailboxes.
20See File 25, Replies from Transavia, date May 26, 2020.
21File piece13,Press releaseTransavia.
22
23File piece2, Follow-up from November 22, 2019.
  See File 25, Transavia Answers, date 26 May 2020.
24See File 11, report of 5 December 2019, page 4.
25File document25,RepliesfromTransavia,dateMay 26,2020 –Appendix3:Explanationtoappendix2.

                                                                                                          5/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]
\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]
                                                                     \[CONFIDENTIAL\]
\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

The table above shows that passenger, supplier and (potential) employee data
                                                                                                26
have been copied. Transavia has stated that this concerns about 80,000 passengers. were also in
multiple files, the data of up to 3000 employees and up to 200 suppliers. 27

Passengers are involved: first and last name, date of birth, flight information and SSR code. From

one passenger is concerned with an address and telephone number

data:firstandlastname,businessemailaddresses,address,telephonenumber.Andofsuppliers

Involved: business e-mail addresses, first and last name, address, e-mail address, telephone number.

26See File 25, Transavia's answers, date May 26, 2020.

27See File 25, Transavia's answers, date May 26, 2020 – Appendix 3: Explanation of Appendix 2.

                                                                                                                  6/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

It also appears that up to 10 CV files of potential employees are involved.
and last name, address, e-mail address, telephone number and date of birth.

In the notification to the concerned passengers (80,000) that Transavia has sent, Transaviade reports

following data involved: first name, last name, date of birth, flight details, booking number
and the extra booked service such as luggage, but also wheelchair use. Furthermore, Transavia indicates that the
concerned employees are also informed. 29

The associated services were described as SSR code. SSR code stands for “SpecialServiceRequest”

code.Transavia uses a 4-character string in their booking system for additional requests, such as
a bicycle as luggage. The SSR code is then “BIKE”. These codes can be found on the internet through which the
                                                                  31
meaning is known, if not already clear from the code.

The AP asked Transavia which SSR codes Transavia used in what numbers

Transavia's used codes indicate, among other things, when a wheelchair is needed, or when a passenger
for example, used an electric wheelchair
                                                      32
blessing meals are provided during the flights.

In the files that were copied to a remote location came codes that indicate wheelchair use
358 times. A code indicating blindness also occurred five times. Deafness occurred four times. 33

According to Transavia, the passenger data were collected in the period from 21 to 31 January
2015. The data was located in a mailbox on “manageddevicesofemployees”. These are managed 35

devices, mostly mobile devices such as telephones or laptops. The employees involved were
\[CONFIDENTIAL\].

2.2.2Personal data to which access was possible

Below is an overview of the systems value users \[CONFIDENTIAL\] and
\[CONFIDENTIAL\] shared access. The title 'host' in this case means the name of the

system.The column“Datafromseen/Exfiltrated”indicatesifafterlogintothesystemstill
otheractions have been observed.SubmitterbyTransavia“no”isdisplayedisonlylogged in
                    37
according to Transavia.

28See File 38, Replies from Transavia date September 24, 2020.
29
  See File 12, Follow-up notification of February 18, 2020.
30See File 38, Replies from Transavia date September 24, 2020.
31See for example: https://wheelchairtravel.org/air-travel/special-service-request-codes/,or
https://guides.developer.iata.org/docs/en/list-of-service-ssrs.
32See File 38, Replies from Transavia date September 24, 2020.
33
  File38,RepliesfromTransaviadate24September2020-Appendix5:OverviewnumbersSSR codes.
34See File 13, Transavia press release.
35See File 25, Replies from Transavia, date May 26, 2020.
36File piece25,Transavia Answers,dateMay 26,2020 –Appendix 4:HostenPersonal data.
37See File 25, Transavia answers, date 26 May 2020.

                                                                                                            7/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]. \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

                                                                                                              8/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

\[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\] \[CONFIDENTIAL\]

                                                                                                                9/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

It appears from the above tables that the following data is processed for passengers: the front and

surname, date of birth, gender, e-mail address and telephone number, flight and
booking data and (business) e-mail correspondence.

Employees are first and last name, gender, date of birth, employee number,

the home address, the telephone number, the qualifications/training, social security number, the attendance records and
login data is processed. Furthermore, it is mentioned in the overview that a system reports about
safety incidents were found on board. This may also contain employee data

and passenger involved.

In total, for passengers, up to 25,000,000 persons involved are mentioned in the supplied overview
employees are named up to 3000 data subjects. This means that the attacker's personal data

has seen or could have seen of 25 million people.

The amount of activity of the attacker is split into the following by the external service provider
categories:38

 \[CONFIDENTIAL\]
 \[CONFIDENTIAL\]

 \[CONFIDENTIAL\]
 \[CONFIDENTIAL\]
 \[CONFIDENTIAL\]

 \[CONFIDENTIAL\]

                                                              39
All the systems mentioned are \[CONFIDENTIAL\]. On\[CONFIDENTIAL\]systems
actual evidence found for copying personal data. System \[CONFIDENTIAL\] is
marked as critical by Transavia because of the amount of data. On this system there was
both talk of \[CONFIDENTIAL\].

On the system \[CONFIDENTIAL\], evidence for the attacker's activities was more limited than with
other systems, because log files were missing for the relevant period of the breach. Further is 40

the system \[CONFIDENTIAL\] marked as critical because of the amount of data on this
system. On this system there was talk of \[CONFIDENTIAL\].

In the notification to the AP, Transavia has indicated that the persons involved come from several

countries, namely all of Europe. The AP has requested Transavia to have an overview from which country the
those involved.Transavia has replied that 90% of customers come from the Netherlands,
based on the PointofSale. Only a limited number of sister company data
                                                                                43
TransaviaFranceS.A.S.were present on the systems of TransaviaAirlinesC.V.

38
39ieFile piece11, report of 5 December 2019, page 19.
40ieDossierstuk11,reportof5December2019,page32.
  See File 11, report of 5 December 2019, page 17.
4See File 11, report of 5 December 2019, page 4.
4See File 25, Transavia's answers, date 26 May 2020.
4See File 38, Replies from Transavia date September 24, 2020.

                                                                                               10/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

The AP concludes that Transavian processed more than data at the time of the infringement
25millionpersons.Of these,personaldatafromupto83,000personsand
health data of 367 persons.

2.3 Security at the time of the infringement

2.3.1 Accesstothe\[CONFIDENTIAL\]domain

Transavia's password policy indicates which requirements apply per user, per possible
risk level. Transavia's password policy lists 3 levels:
           “Minimal Baseline”, the default level;

           “MediumAdditions”, additional measures for users with more privileges;
           “MediumandHighadditions”,extrameasuresforcertainhigh-riskusers.

According to Transavia, the users used by the attacker had the following levels: 45

             \[CONFIDENTIAL\]hadallevel:minimalbaseline
             \[CONFIDENTIAL\]hadlevel: MediumandHighsecurityadditions

The third-party service provider has indicated that the \[CONFIDENTIAL\] users “contained the highest
possible privileges”.

A user with a minimum baseline has the following password requirements according to the password policy: 46

             \[CONFIDENTIAL\]
             \[CONFIDENTIAL\]

             \[CONFIDENTIAL\]
             \[CONFIDENTIAL\]
             \[CONFIDENTIAL\]

                                                                        47
For High Security Additions, the following additional requirements apply:
             \[CONFIDENTIAL\]

             \[CONFIDENTIAL\]
             \[CONFIDENTIAL\]
             \[CONFIDENTIAL\]

             \[CONFIDENTIAL\]
             \[CONFIDENTIAL\]
             \[CONFIDENTIAL\]

             \[CONFIDENTIAL\]
             \[CONFIDENTIAL\]

4File piece25,RepliesfromTransavia,dateMay 26,2020 –Appendix1: Personnel&AccessControlStandard.
4See File 25, Transavia's answers, date 26 May 2020.
4See File 25, Replies from Transavia, date May 26, 2020 – Appendix 1: Personnel&AccessControlStandard.
4See File 25, Replies from Transavia, date May 26, 2020 – Appendix 1: Personnel&AccessControlStandard.

                                                                                           11/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

Transavia distinguishes two types of user accounts: “user accounts” and “generic accounts”. The“user
accounts”relate toindividualpersons.The“genericaccounts”areformultiplepersonsor

systems, including for links between systems. Logging in to these users often finds
automatic place according to Transavia. 48

The AP asked Transavia why the accounts involved in the infringement did not comply
to Transavia's own standards. In its reply, Transavia indicates that the focus was on “user

accounts” when it comes to password policy compliance. These are proportionally more accounts and more
it was considered that the master risks would arise from this. Transavia has also indicated that these

approaching “awareness” would increase within the organization. Because of this focus, the 49 shortcomings
for the generic accounts involved in the breach have not been noticed.

                                                                                                    50
The password policy also states that “remote access” requires more factor authentication. from
the report shows that this was not the case for the users that the attacker can access
Accessing a Citrix environment without multi-factor authentication

service provider gives as one of the recommendations to Transavia the implementation of
multi-factor authentication for users whose accounts are accessible from the internet or from anyone
                                        51
case for users with many rights. Citrix itself also recommends multi-factor authentication for it
use of their application. 52

The AP asked Transavia why access was possible to a teleworking environment without
using multi-factor authentication on the accounts involved in the breach. 53

In response, Transavia indicated that the “user accounts” first started the roll-out of
thesemeasures.Theimplementationofthesemeasuresatthe“useraccounts”takeslongerthan

expected.In their work, flight crews use applications that are necessary for
a safe flight. If a measure such as multi-factor authentication would cause a delay,
this could cause major flight delays. “Generic Accounts” had lower priority with

Transavia.Because the implementation by the flight crew was delayed, the implementation was at the
“generic accounts” also delayed. 54

48See File 38, Replies from Transavia date September 24, 2020.
49SeeDossierstuk38, RepliesvanTransaviadate24September2020.
50See File 25, Replies from Transavia, date May 26, 2020 – Appendix 1: Personnel&AccessControlStandard.
5See File 11, report of 5 December 2019, page 21.
52SeeFile document40, Citrixbestpractices,9April2019.
53
54File piece30,LetterAPtoTransaviafrom4September2020.
  See File 38, Reply from Transavia date September 24, 2020.

                                                                                                       12/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

The AP asked Transavia whether periodic checks were made of the security policy and
actual implementation of this. Transavia has indicated that several periodic checks
              55
take place:
         \[CONFIDENTIAL\] 56

         \[CONFIDENTIAL\]
         \[CONFIDENTIAL\]

The \[CONFIDENTIAL\] check also specifies that for privileged accounts (accounts with
many access rights) there must be a check whether the passwords comply with the policy of
transavia. Transavia has provided the results of a \[CONFIDENTIAL\] as an example of this

audit of 2019, quarter 3. The findings refer to the period of 12 months prior to the survey.
This indicates positive and negative results. For multiple systems, it indicates that
the passwords did not comply with Transavia's policy. 58

The AP determines that the passwords used in the attack did not meet the requirements of the

password policy of Transavia. Also for these users no more factor authentication was available,
while these users were accessible via the internet or via telework software.

2.3.2 Accesswithinthe\[CONFIDENTIAL\]domain

During the breach, the attacker had access to virtually the entire \[CONFIDENTIAL\] domain.Transavia
                                                                   59
has implemented more network segmentation as a follow-up measure. According to the National Cyber Security
Center (NCSC) network segmentation is the “dividing network into functional segments”. With
network segmentation only the systems that need to communicate with each other become together and separate
                                                                                       60
segments posted. “Users only get access to the segments they need.”.

The AP has asked Transavia if the attacker has access to the systems that have automatic access
                                                                                                      61
obtained could also have done other things, such as copying, viewing or editing data on the other hand.
Transavia indicated that the attacker had this opportunity.

In its written response, Transavia mentions a number of security measures in force on the

moment of the infringement:“At the moment of the infringement, Transavia had taken several measures in the
under its security policy to prevent the consequences of an unauthorized login attempt, including monitoring.

For example, it was equipped for Transavia by its IT supplier Security Operations Center computer and
network activities of Transavia monitored and checked for abnormal activities.Viathis system

55See File 38, Replies from Transavia date September 24, 2020.
56File document38,RepliesfromTransaviadate24September2020-Appendix6:\[CONFIDENTIAL\].
57File document38,RepliesfromTransaviadate24September2020-Appendix6:\[CONFIDENTIAL\].
58File document38,RepliesfromTransaviadateSeptember24,2020-Appendix7:Results\[CONFIDENTIAL\]2019–Q3.
59See File 25, Transavia answers, date 26 May 2020.
60
  See File 41, NCSC, Ransomware, measures to prevent, mitigate, and recover from a ransomware attack, June
2020.
61File piece30,LetterAPtoTransaviafrom4September2020.

                                                                                                     13/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

On October 21, 2019, Transavia received the security notice from its IT supplier that indicates unauthorized
access to the IT landscape of Transavia.” 62

The forensic report indicated that the administrator had set up logging capabilities, which means that

the external service provider has been able to largely reconstruct the events
external service provider has been able to use the \[CONFIDENTIAL\] environment of 63
transavia. 64

Research showed that it was possible to delete certain log files
for a week at least \[CONFIDENTIAL\]systemslogsaredeleted.Also is

described that certain logging was not kept in the centralized environment, including
Citrixesofcertaincriticalsystems.Arecommendationfromthethirdpartyserviceprovideristhe
to expand control panel logging to monitor its integrity. Also, it would also improve response
               65
incidents.

The forensic report also states that several systems have obsolete operating systems
were installed.It also states that theimplementedmultifactorauthenticationoncertain
systems so was arranged that a user could fill in a phone number himself to a

to receive the second factor message. Certain systems had uncontrolled access to the
internet. This allowed the attacker to communicate with external systems from .'s network
transavia. Finally, there was insufficient network intrusion detection
                                                            67
of a limited view of the attacker's network activity.

2.4 Infringement measures

After Transavia found out on 21 October 2019 that an attacker has unauthorized access

had up to its systems, Transavia has had a forensic analysis directly by an external service provider
After the infringement was established, Transavia took various measures.

Transavia has introduced two-factor authentication for all end users and devices, among other things.
In addition, the passwords of all users and generic accounts have been reset

password requirements have been technically implemented. Finally, Transavia has divided its network into
multiple segments. 68

62See File 25, Transavia answers, date 26 May 2020.
63
  \[CONFIDENTIAL\]allows you to transfer data from a large amount of different sources (automated)
analyze and receive alerts on this. A centralized environment where a system logging from different
collects, analyzes and reports resources is also known as SecurityInformationandEventManagement(SIEM).See
also: File 42, NCSC, Guide to Implementation of Detection Solutions, October 2015.
64See File 11, report of 5 December 2019, page 4.
65See File 11, report of 5 December 2019, pages 23 and 29.
66See File 11, report of 5 December 2019, pages 27 and 28.
67
68See File 11, report of 5 December 2019, page 29.
  Written opinionTransavia, June 28, 2021, page 7 and 8.

                                                                                                      14/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

2.5Transavia's view on the established facts and response AP

In its view, Transavia has asked the AP to add some nuances to these points
to suit. To the extent relevant to this decision, the AP will briefly mention this view, provided with a
response from the AP.

Transavia would first of all like to emphasize that the accounts \[CONFIDENTIAL\] only together (and not everyone
for themselves) gave access to a large part of the computer network of Transavia. And that the overviews
look at the data that the account had joint access to. The AP does not dispute this fact

reportfromtheAPdescribedthatthroughaccesstothefirstaccounteraccessedtothe
second account.Nevertheless, the AP has included more nuances about this in the decision.

Secondly, Transavia mentions that the exfiltrated data does not include contact details

existed. This is in contrast to the files that were only seen or could have been seen by the attacker
view.The file with historical passenger data contains no contact details, only for-and
last name, date of birth, flight information and SSR code. The other exfiltrated files contain

yes, business contact details of employees and business contacts, but proportionally concerning
this, according to Transavia, less data. The AP agrees with this position of Transavia and has adjusted it.

Finally, Transavia indicates that from a passage of the report prepared by the external service provider

not so much read that systems had unnecessary access to the internet, but that these systems
due to the lack of hostbasedfirewall had uncontrolled or unguaranteed access to the
internet. In response to this, the AP has replaced the word 'unnecessary' with 'uncontrolled'.

69
 Written opinionTransavia, June 28, 2021.

                                                                                         15/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

3.Rating

3.1Personal data and cross-border processing

Transavia processes data from passengers, employees and suppliers. Data such as names and
dates of birth are data with which Transavia can identify natural persons

directlyorindirectlybycombiningdata.Because Transaviaprocessesdatawithwhicha
person can be identified directly or indirectly, processes Transavia personal data such as
mentioned in article 4, part 1, of the GDPR.

Transavia further processes data relating to wheelchair use, deafness and blindness.
Because this information, along with other linked information, says something about the health of a
customer of Transavia, Transavia also processes special categories of personal data as indicated
inArticle 9, paragraph 1, of the AVG.

Transavia offers services to several European countries. It also flies to and from several
European countries. Transavia's passenger data relates to this through data from those involved from
several European countries. Transavia has indicated that personal data that Transavia processes
                                                                            71
90% are likely to come from the Netherlands, based on “point of sale”. Giventhenumber
personal data that Transavia processes from Europeans, the AP10 still considers substantial
number.

Because the processing of Transavia involves at least one branch and several
Member States will experience, or are likely to experience, substantial impact according to the
AP refers to a cross-border processing as referred to in article 4, part 23, of the GDPR.

3.2 Controller

TransaviaAirlinesC.V.'s privacy policy states that Transavia is responsible for the

personal data that Transavia processes. Furthermore, Transavia has indicated that the French company
is responsible for the data that the branch collects. 72

TransaviaAirlinesC.V.has made agreements with sister companyTransaviaFranceS.A.S if

TransaviaFranceS.A.SusesthesystemsofTransaviaAirlinesC.V.througha
ServiceLevelAgreement. These agreements state that the management of the ICT systems
responsibility of TransaviaAirlinesC.V. 73

7See File 44, Print website company profiles www.transavia.com.
7See File 25, Transavia answers, date 26 May 2020.
7See File39,Privacy policyTransavia.
7See File38, RepliesfromTransaviadate24September2020andappendix2:Excerpt fromSLATransaviaAirlinesC.V.–
TransaviaFranceS.A.Senappendix3:MailTransaviaAirlinesC.V.toTransaviaFranceS.A.S.

                                                                                               16/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

With regard to the employee data, Transavia has indicated that this data is segregated
         74
incorporated. This means that both the French and Dutch organizations are independently responsible
are for this data of their own employees. Transavia has supplied documentation from which
it appears that employee data is also located on systems of TransaviaAirlinesC.V.. 75

Furthermore, Transavia has indicated that at the time of the infringement, only a limited number of systems
personal data were present of Transavia France S.A.S. 76

TransaviaAirlinesC.V. was also the client for the research by the external
service provider.TransaviaAirlinesC.V.isalsothepartyinformedbytheadministratorsanda
                                                                77
has reported the infringement to the AP and the persons involved.

In view of the above, TransaviaAirlinesC.V.determines the targets and means of (a large part)

of the data on the systems as mentioned earlier in chapter 2. The AP establishes that
TransaviaAirlinesC.V.the controller is as referred to in article 4, part 7 of the
GDPR.

                                                                                       78
The head office of TransaviaAirlines CV is furthermore located in Schiphol, the Netherlands. Considering the
fact that it has been established above that TransaviaAirlinesC.V.canbecome a controller

designated, the AP is the lead supervisor. According to article 56 of the GDPR, the AP in the
European cooperation systemIMIconsulted with the other supervisors about the fact that the AP
sees itself as the lead supervisor. No contradiction has arisen from this procedure from
other European supervisors.

3.3 Appropriate Security Measures

3.3.1 Introduction

Article32 of the AVG are the requirements concerning the security of the processing of personal data
included. The controller must provide appropriate technical and organizational

to take measures to ensure a security level appropriate to the risk. When determining
appropriatemeasures should take into account the risk to rights and freedoms

of persons.

The AP tests in the following or the technical measures at Transavia with regard to access

until personal data were appropriate as referred to in article 32 of the GDPR.

74
75SeeFile document38,ReplyofTransaviadate24September2020.
 File 25, Transavia Answers, date May 26, 2020 – Appendix 3: Explanation of Appendix 2.
76See File 38, Replies from Transavia date 24 September 2020.
7See File 11, report of 5 December 2019, page 4 and file 1 and 13.
78See File26, Registration Trade RegisterTransaviaAirlinesC.V.

                                                                                                  17/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

3.3.2Assessment

In order to determine what is appropriate, a trade-off must be made between the state of the technology, the
execution costs, as well as the nature, scope, context and processing purposes and qua
probabilityandseriousriskstotherightsandfreedomsofpersons. oneon

risk-adjusted level of security includes, among other things, the ability to stand on the basis of the
confidentiality, integrity, availability and resilience of the processing systems and services
guarantee (article 32, paragraph 1, subb of the AVG).

State of the art implementation costs

As determined in Chapter 2, the attacker used a “password spray” or “credential stuffing” attack
where a hacker applies commonly used or previously leaked passwords
can be taken depends, among other things, with the type of application and possibilities
infringement, however, the cause of the infringement turned out to be a simple and commonly used password at two
users who were easy (automated) to guess. Thestrengthandlevelofthepassword
was not in accordance with Transavia's own authentication policy.

It is established that Transavia has a policy for the authentication of users. It is also certain that Transavia
perform periodic checks and continuously work on its own security policy
However, transavia-supplied periodic security checks show that in many applications there is not
Transavia's own password policy was complied with.

Transavia has indicated that the generic accounts used during the breach are not the focus
hadduringinternalchecks.Soisnotcheckedifthepasswordstrappericalaccounts
were used according to their own policy. According to Transavia, the risk is with other types of accounts,
namely, the user accounts linked to individual users. Because of this, the bad
passwords not detected in time according to Transavia. Furthermore, it is stated that multi-factor authentication

implement for “generic accounts” had not yet been realized at the time of the breach, because
the implementation had been delayed by other users.

After the first successful authentication, a Citrix environment was used. This environment is
then used by the attacker to gain further access to Transavia's systems.
For these kind of environments it is recommended to use more factor authentication to access

As mentioned, this is a common measure that is also used at the time of the infringement
was recommended by the provider of the telecommuting software Citrix.

After the attacker gained further access, he/she had a lot of liberties on .'s systems
Transavia.Ultimately, this resulted in the copying of data from mailboxes of

employees. This could have been prevented by dividing the network into several segments.
Furthermore, users' rights can be adjusted to determine whether it is necessary for them to
usershavetheserights(authorisations).Transaviahasthismeasureaftertheinfringement
implemented.

It also turned out to be possible to use log files on systems marked as critical by Transavia

This meant that no full picture of water had occurred on these systems after the breach.

                                                                                       18/25Date Unidentified

September 23, 2021 \[CONFIDENTIAL\]

Commonly used information security standards that were valid at the time of the

breaching password management, network segmentation, and user rights
various recommendations. This is what is called a management measure ensuring strong
passwords.Also,groupsofinformationsystemsinnetworksmustbeseparated.Next
isindicatedthataccessrightsmustberestrictedandcontrolledmustaccess
                            79
information to be limited.

The measures that Transavia could have taken at the time of the infringement were already a standard according to
Transavia itself, according to suppliers and according to international standards

measures that were partly implemented by Transavia.

Based on the above, the AP is of the opinion that, in view of the state of the art at the time of the

breach, it was certainly possible to implement security measures for the risk that
has realized in the infringement. The introduction of the abovementioned essential precautions
would have made it possible to maintain the confidentiality of the processed data
in accordance with article 32, paragraph 1, subb of the GDPR to guarantee and the risk of the occurrence of the

to substantially reduce data leakage.

The information supplied by Transavia further shows that the infringement is a multiple of

measures have been taken including changing passwords, implementing
network segmentation and adjusting user rights. The AP considers the implementation costs for this
security measures not so high that these measures could not have been implemented earlier
turn into.

The nature, the scope, the context and processing purposes
For example, as the data is processed on a large scale and becomes more sensitive,
stricter requirements are imposed on data security.

The AP has established that Transavia processes a large amount of data, including
special data such as health data. The attacker had access to systems where
there are data on about 25 million passengers. Given this large-scale processing of
personal data, the AP does not consider the security of Transavia to be adequate at the time of the breach.

Probabilityandseriousriskstopersons'rightsandfreedom
If the infringer has been involved in unauthorized access and provision of personal data.

Furthermore, the attacker could not only have had access to much more data, it was
possible to copy or process this data. The data that Transavia processes,
such as contact details, can be misused for
                                                            80
purposes that may lead to material or immaterial damage. Transavia also processes in addition

7See file document43:NEN-norm\_ISO\_27001\_2017\_nl,page23,24and29.
80For example, contact information can be used by a malicious person for phishing. Phishing is aimed at obtaining
(sensitive) information, to commit fraud. See also: https://www.ncsc.nl/onderwerpen/phishing.

                                                                                           19/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

special data of passengers and social security numbers of employees
confidentiality of this can lead to property damage, such as discrimination fraud.81

Appropriatetechnicalmeasures
In view of the above, the AP is of the opinion that the technical measures were not 'appropriate' at the time

of the infringement, as referred to in article 32 of the GDPR. Considering the amount and type
personal data that Transavia processes must be taken to a high level
Violatingtheconfidentialityofthisdatacanbecauseformanypersonsmaterialof
result in immaterial damage.

The measures that Transavia could have taken were possible and appropriate in view of the state of the
techniques and the costs of implementation. The lack of these measures, at several levels, has led to
a (realized) risk to the rights and freedoms of those involved.

3.3.3OpinionTransaviaandreactionAP

Below, the AP briefly summarizes Transavia's view on the assessment of the AP, provided
from a response from the AP.

ViewTransavia

In its view, Transavia indicates that it has embedded a continuous improvement process in a cyclical way
itsorganizationaccordingtotheendsectorgenerallyappliedstandardsPlan-Do-Check-Actcycle
(PDCA). Against this background, Transavia has a policy for user authentication (the

‘Authentication Policy’) adopted in December 2017 with a three-year policy horizon (phase ‘Plan’).
Transavia realizes that the passwords of the compromised accounts in 2019 did not meet the
ownAuthentication Policy.Although theAuthentication Policy was appropriate according to Transavia,as
referred to in article 32 AVG, the implementation of that policy was not complete

compromisedaccountsdidn'tcomplywithownpolicyandwereinappropriate in that sense
intended level of security.

Transavia, however, wants the image of the AP in the research report on multi-factor authentication
nuance.Based on the information available at the time, Transavia expected that the chance of a
successful"passwordspray"attackor"credentialstuffingattack"wasgreateratuseraccountsthanat

genericaccounts.User account data is generally much easier to find
on the internet (think person's name in combination with the organization, data on Linkedin), then
data about generic accounts that are not linked to any person
considerationforTransaviaanimportantrolethatthenumberofuseraccountsinproportionatemanytimes

was greater than the number of generic accounts. Transavia wants to emphasize that side choice to prioritize
give to user accounts has taken care of, taking into account the at the time

81
 See also: https://autoriteitpersoonsgegevens.nl/nl/onderwerpen/veiligheid/meldpleister-dataleks#when-levert-een-datalek-
a-high-risk-on-7331.

                                                                                          20/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

foreseeable risks. Finally, Transavia would like to note that, with regard to the introduction of multi-
factor authentication between 2017 and 2019, in step with the rest of the industry.

ReactionAP
The AP has determined that the security measures at several levels are not sufficiently appropriate
were.The combination of weak passwords and the lack of two-factor authentication
according to the AP made it foreseeable that there was a great risk of unauthorized access to the
personal data of Transavia. Two-factor authentication has been common for years

security measures quite easy to implement. The AP sees the nuances of
Transavia about multi-factor authentication no reason to adjust the assessment about this.

3.4Conclusion

The AP concludes that Transavia did not take appropriate measures at the time of the infringement
hastoguaranteealevelofsecuritymatched to the risk
acted with article 32, first stone, second paragraph, of the AVG.

                                                                                     21/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

4.Penance

4.1 Introduction

Transavia has acted in conflict with article 32, first stone and second paragraph, of the AVG.

established violation using its powers to impose a fine on Transavia. Considering
the seriousness of the violation and the extent to which it can be blamed on Transavia, the AP considers the
imposition of a fine due. The AP motivates this in the following.

4.2 Fine policy rules of the Dutch Data Protection Authority 2019

Pursuant to article 58, second paragraph, opening words and article 83, fourth paragraph, of the AVG, read in
in connection with article 14, third paragraph, of the UAVG, the AP is authorized to handle Transavia in the event of a
violation of article 32 of the GDPR Not to impose an administrative fine up to €10,000,000 or, for one

company, up to 2% of total worldwide annual sales in the previous financial year, if this figure
higher.

The AP has established Penalty Policy Rules regarding the fulfillment of the above-mentioned authority to the
                                                                        82
imposing an administrative fine, including determining the amount thereof. In the
Penalty policy rules has been chosen for a category classifications bandwidth system.
Violationofarticle32oftheAVGisingpartincategoryII.CategoryIIhasa
fine bandwidth between €120,000 and €500,000 and a basic fine of €310,000.

4.3 Fine amount

The amount of the fine adjusts the AP to the factors mentioned in article 7 of the
Fine policy rules, by decreasing or increasing the base amount. It is about an assessment of the

seriousness of the violation in the specific case, the extent to which the violation can affect the offender
be blamed and, if there is reason to do so, other circumstances.

4.3.1Seriousnessoftheviolation

TheAP has come to the conclusion that Transavia has not applied an appropriate level of security for
the processing of personal data in its network. Transavia processes many types of personal data,
such as contact details of passengers and social security number, the attendance records and login details of
its employees.Transavia also processes health data, such as wheelchair use,
deafness and blindness of passengers.

In addition, it is important that Transavia, during the time of the infringement, processed data of more than 25
million persons. Transavia has at the time the data of this large group of those involved

8Stcrt.2019,14586,March 14,2019.

                                                                                      22/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

insufficiently secured. This huge group of citizens have unnecessarily run extra risk on, among other things

unauthorized access to their personal data. A risk which is otherwise realized by the breach
from 2019 where data of up to 83,000 persons were leaked and health data of 367
persons.

Due to the extensive data processing involved in this violation, a large number of
data subjects are also processed special personal data does the AP qualify these

infringement of the AVG as very serious.

In view of the above, the AP sees, on the basis of the degree of seriousness of the violation, reason to
impose a fine on Transavia and increase the (basic) amount of the fine to €400,000.

4.3.2 Liability, negligence and damage mitigation measures

Pursuant to article 5:46, second paragraph, of the Awb, the AP reserves the right to impose an administrative fine
take into account the extent to which they can be blamed on the offender
violation, is not required for the imposition of an administrative fine in accordance with established case law that

it is shown that intent may presuppose the AP culpability if it
offense has been established. In addition, the AP also takes into account the negligent nature of the infringements
damage mitigation measures by Transavia.

Transavia is required by article 32 of the GDPR to introduce security measures that

are appropriate for the nature and scope of the processing and which Transavia carries out.
the large extent of the processing, the AP considers that Transavian every case is special
has been negligent in sufficiently taking such measures. Transavia may be
expects she to be aware of the standards that apply to her and to act accordingly. The AP considers this
culpable.

In addition, the AP has established that from the periodic security checks provided by Transavia
it turned out that many applications did not comply with Transavia's own password policy.
The AP deems it very negligent that Transaviana did not take action with these checks for such a

to ensure an appropriate level of security. On the other hand, Transaviana has knowledge of the
data leakimmediately many measures taken to protect personal data more appropriately and to
prevent the attacker from entering the systems of Transavia any longer
Transavia indicated that in general it has also taken several measures to improve the
increase security level in the company.

In view of the above consideration, the AP therefore sees a reason to adjust the fine on the basis of the
negligent nature of the infringement by €25,000.But also to increase the amount of the fine under the
damage-limiting measures taken are again reduced by €25,000.

                                                                                      23/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

4.3.3Other circumstances

In its view, Transavia states that those involved with certainty are limited by the probability of no

have been adversely affected by the data breach. The leaked passenger data does not contain any
contact details and were not or not very sensitive. Transavia has not had any
had a report about abuse of the data. Transavia also reported the data leak to the AP in good time
and informed those involved. Finally, Transavia cooperated as best as possible in the investigation

of the AP and did not make any profits or avoid losses with the infringement.

The AP is of the opinion that the cooperation of Transavia did not go beyond its legal obligation

to comply with article 31 of the AVG. Transavia has not cooperated with anyone in any special way
with the AP. Also the circumstance that Transavia only meets its statutory reporting obligation to the AP
and the persons involved, in view of the seriousness of this violation, the fulfillment of this obligation cannot be regarded as a
relieving or mitigating factor are considered. Finally, the AP notes that the right of

protection of data of various data subjects and is equally damaged, because
for example, health data of passengers and contact data of employees are in hand
came from a malicious party. These parties involved are prevented from retaining the
control of their personal data.

In view of the seriousness of the violations and the degree of culpability, the AP does not give
reason not to see the fine or the fine on the grounds mentioned by Transavia
moderate.

4.3.4Proportionality

Finally, pursuant to Articles 3:4 and 5:46 of the Awb, the AP assesses the application of its policy for

determining the amount of the fine in view of the circumstances of the specific case, not until
disproportionate outcome.

The AP is of the opinion that (the amount of) the fine is proportional. In this judgment, the AP has taken the seriousness of the

violation, the extent to which it can be blamed on Transavia, the damage-limiting measures
and other circumstances taken into account. Due to the large volume of data processing, the fact
that a large number of data subjects were also processed with regard to special personal data
the AP qualifies this infringement of the AVG as very serious.

In view of all the circumstances of this case, the AP sees no reason for the amount of the fine based on
theproportionateandendFinancepolicyrules,ifapplicablein
the present case, further increase or decrease.

4.4 Conclusion
The AP sets the total fine at €400,000.

8For the justification, see paragraphs 4.3.1 and 4.3.2.

                                                                                        24/25Date Unidentified
September 23, 2021 \[CONFIDENTIAL\]

5.Dictum

The AP explains to TransaviaAirlines CV for violation of article 32, first stone, second paragraph, of the AVG
an administrative fine in the amount of:
€400,000 (in words four hundred thousand euros).84

Yours faithfully,
AuthorityPersonal Data,

w.g.

drs.C.E.Mur
board member

Remedies Clause
If you do not agree with this decision, you can within six weeks of the date of shipment of the
decide to submit an objection digitally or on paper to the Data Protection Authority. Submit it
of an objection suspends the effect of this decision. To submit a digital objection, see
www.autoriteitpersoonsgegevens.nl, under the heading 'Objection', at the bottom of the page under the heading

'ContactwiththePersonal Authority'.Theaddressforsubmissiononpaperis:Authority
Personal data, P.O. Box93374,2509AJDenHaag. Mention on the envelope 'Awb-objection' and put in the
title of your letter 'objection'. Write your objection at least:
     Your name and address

     The date of your notice of objection
     The reference (case number) mentioned in this letter; you can also receive a copy of this decision
       attach
     The reason(s) why you do not agree with this decision

     Your signature
For more information, see: https://autoriteitpersoonsgegevens.nl/nl/bezwaar-maken

8The AP will hand over the aforementioned claim to the Central Judicial Collection Agency (CJIB).

                                                                                       25/25

```

Retrieved from "[https://gdprhub.eu/index.php?title=AP\_(The\_Netherlands)\_-\_23.09.2021&oldid=37641](https://gdprhub.eu/index.php?title=AP_\(The_Netherlands\)_-_23.09.2021&oldid=37641)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [AP (The Netherlands)](/index.php?title=Category:AP_\(The_Netherlands\) "Category:AP (The Netherlands)")
*   [Netherlands](/index.php?title=Category:Netherlands "Category:Netherlands")
*   [Article 32(1) GDPR](/index.php?title=Category:Article_32\(1\)_GDPR "Category:Article 32(1) GDPR")
*   [Article 32(2) GDPR](/index.php?title=Category:Article_32\(2\)_GDPR "Category:Article 32(2) GDPR")
*   [Article 34 GDPR](/index.php?title=Category:Article_34_GDPR "Category:Article 34 GDPR")
*   [2021](/index.php?title=Category:2021 "Category:2021")
*   [Dutch](/index.php?title=Category:Dutch "Category:Dutch")

This page was last edited on 12 December 2023, at 17:08.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)