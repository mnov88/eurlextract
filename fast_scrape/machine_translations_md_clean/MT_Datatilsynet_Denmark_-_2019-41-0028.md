# Datatilsynet (Denmark) - 2019-41-0028

## Case Information

**Authority:** Datatilsynet (Denmark)

**Jurisdiction:** Denmark

**Relevant Law:** Article 32 GDPRArticle 33 GDPR

**Type:** Investigation

**Outcome:** Violation Found

**Published:** 05.11.2019

**Fine:** None

**Parties:** Christian Trade Union

**National Case Number/Name:** 2019-41-0028

**European Case Law Identifier:** n/a

**Appeal:** n/a

**Original Language(s):** Danish

**Original Source:** Datatilsynet (in DA)

**Initial Contributor:** n/a

The Datatilsynet issued a decision on Articles 32 and 33 GDPR due to unencrypted e-mails sent by the controller.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts and questions arising](#Facts_and_questions_arising)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts and questions arising

After carrying out investigations at its own initiative, the Datatilsynet found that the Union was using the social security number of an individual as password for accessing e-mails stored on the Union’s database. The DPA also found that the Union was sending unencrypted messages, creating a high risk for a data breach, without reporting it to the DPA. The DPA notified the Union that it has to comply with the GDPR provisions until the 26th of November.

### Holding

As a consequence, the Datatilsynet found that the Christian Trade Union violated Articles 32 and 33 GDPR by sending unencrypted e-mails.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the original. Please refer to the Danish original for more details.

```
Supervision of treatment safety at the trade union
Published 05-11-2019
Decision Private companies
Journal number: 
Resume
Christian Trade Union (hereafter Krifa) was among the companies selected by the Danish Data Protection Agency in 2019. The audit focused on security of processing, including in particular the encryption of e-mails, cf. Article 32 of the. The Danish
Data Protection RegulationData Protection Agency has criticized the fact that Krifa has not complied with the requirements of Articles 32 and 33.
of the Data Protection Authority's final opinion, among other things. ., that Krifa has violated Article 32 of the Data Protection Regulation by using the social security number of the person to whom the email relates as a password for reading an email stored on the company's secure e-mail web service.
In addition, the opinion states that Krifa has violated Articles 32 and 33 of the Data Protection Regulation by sending unencrypted emails between January 1, 2019 and April 9, 2019, where information on trade union affiliation could be derived and without reporting the incidents to the Data Inspectorate as a breach of personal data security.
The Data Inspectorate has found a basis for notifying Krifa of ceasing to use the social security number of the person to whom an e-mail for reading on the company's secure web service, as password for reading the e-mail. The deadline for compliance with the injunction is November 26, 2019.
You can read the Danish Data Protection Agency Guidance text on email encryption here.
Decision
Christian Association (henceforth Krifa) was among the companies selected by the Danish Data Protection Agency for supervision in spring 2019. The Danish
Data Protection Authority's planned supervision focused on processing security, including in particular the encryption of emails, cf. Article 32
of the Data Protection Regulation, Krifa has in the spring of 2019 in connection with the audit visit, filled out a questionnaire and submitted this as well as additional material for the audit. Thetook place on April 9, 2019.
oversight visitFollowing the oversight visit with Krifa, the Data Inspectorate finds a summary to conclude:
that Krifa - in accordance with Article 32 of the Data Protection Regulation - uses certificate-based end-to-end encryption to the extent that the recipient supports it when Krifa transmits emails containing confidential and sensitive personal information.
That Krifa - in accordance with Article 32 of the Data Protection Regulation - insofar as the recipient does not support certificate-based end-to-end encryption, uses a solution called Secure @ Mail, which sends end-to-end encrypted to the data processor's server, and then with opportunistic TLS sends an advisory email to the recipient, which contains a link to read the original email (after entering a password).
That Krifa - in accordance with Article 32 of the Data Protection Regulation - sends advisory emails in connection with the transmission of messages via Krifa Box and Secure @ Mail, as well as SMS with password for reading emails on Secure @ Mail server.
That Krifa has violated Article 32 of the Data Protection Regulation by using the social security number of the person to whom the email relates, as a password for reading Secure @ Mail on a web server.
That Krifa violated Articles 32 and 33 of the Data Protection Regulation by sending unencrypted e-mails between January 1, 2019 and April 9, 2019, where information on trade union affiliation could be derived, and without reporting the incidents to the Data Protection Agency as a breach of personal data security .
That Krifa - in accordance with Article 5 (1) of the Data Protection Regulation. 2, cf. Article 32 (1) (f), cf. 1 and 2 - has demonstrated that a risk assessment has been prepared which assesses the risks associated with the transmission of confidential and sensitive personal data over the Internet.
In general, the Data Inspectorate finds reason to criticize Krifa for not complying with the requirements of the Data Protection Regulation in relation to points 4 and 5.
Furthermore, the Data Inspectorate is founded to grant Krifa an injunction to cease using the social security number of the person as a Secure @ Mail for reading on a web server concerns, as password for reading the email. The order is issued pursuant to Article 58 (2) of the Data Protection Regulation. 2, point d.
The deadline for complying with the order is 26 November2019.The Danish Data Protection Agency must request confirmation by the same date that the order has been complied with. According to section 41 (1) of the Data Protection Act. Paragraph 2 (5) shall be punishable by a fine or imprisonment for up to 6 months to a person who fails to comply with an order issued by the Data Inspectorate pursuant to Article 58 (2) of the Data Protection Regulation. The
following is a detailed review of the Danish Data Protection Agency's conclusions.
1. Using encryption when transmitting confidential and sensitive personal data over the Internet
Krifa has stated prior to the visit that the union sends confidential and sensitive personal data via e-mail over the Internet.
Krifa has stated that the trade union considers membership of Christian Trade Union as a sensitive personal information, but that the trade union considers membership of Christian A-box or affiliation with Krifa (as a brand) as a general personal information.
2. About the encryption solution
Krifa has stated that when the union sends e-mails containing confidential or sensitive personal data, a solution called Secure @ Mail is used. The solution is integrated in Outlook and all Krifa employees can use it.
When an email is sent through Secure @ Mail, the email will be attempted in one of the following ways in order of priority:
It is examined whether the recipient domain is on a list of supported recipient domains (called the tunnel mailing list). If the recipient domain is on the tunnel mailing list, end-to-end encryption is performed with a certificate issued by Nets.
It is investigated whether the recipient has a published and valid Nets issued OCES II company certificate, in which case end-to-end encryption is used with that certificate.
It is investigated whether the recipient has a published and valid Nets issued OCES II employee certificate, in which case end-to-end encryption is used with that certificate.
If the recipient does not support end-to-end encryption with certificate (paragraphs 1-3 above), the email is sent to a Secure @ Mail server at the data processor where the email is stored encrypted for 30 days. Then an advisory email is sent via the opportunistic TLS to the recipient with a link to a web-based solution where the email - after entering a password - can be read and downloaded.
In addition, Krifa uses a secure web-based system called Krifa Box, which is used when the union exchanges documents with current and former members. With Krifa Box, the union can place documents locally on a server, after which the current or former member will be sent an advisory email with information that a new document exists for him or her in Krifa Box. Krifa Box can be accessed using NemID or with a combination of username and password.
Krifa has stated that the union, by end-to-end encrypted forwarding with certificate, has chosen to use the encryption algorithm 3DES, as several recipients do not support newer algorithms.
2.1. Submission of advisory
emails Krifa has stated that advisory emails - both in connection with new documents in Krifa Box and in connection with the sending of e-mail to Secure @ Mail server - are automatically sent via TLS 1.2 to Exchange Online. Thereafter, the advisory email is sent to the recipient via opportunistic TLS with the support of versions 1.0, 1.1 and 1.2. This means that from Exchange Online encryption is done on the transport layer by sending these emails to the extent that the recipient supports receiving via TLS and that the email is otherwise sent without encryption.
Krifa has stated that the content of an advisory email depends on whether it was sent in connection with a new document in the Krifa Box or in connection with a Secure @ Mail e-mail.
Krifa has submitted to the Data Inspectorate examples of advisory emails sent in connection with messages in respectively. Krifa Box and Secure @ Mail.
In the case of an advisory email about new e-mail in Secure @ Mail, the advisory email will include: include an ID number on the email, a link to read the email (after which password is required) and the subject field of the original email. In the example of an advisory email sent in connection with a Secure @ Mail, the subject field is specified "FAG006-720-946". Krifa has stated that the subject field is the journal number of a case that a member has at Krifa.
Krifa has generally stated about the allocation of journal numbers to cases in Krifa, that there are three types of initial letter combinations and that these are respectively. "FAG", "AKS" and "VIR". The combination of letters in question refers to which of Krifa's centers of competence set up the case in question in the case management system. These include "FAG" types of legal professional types and counseling established at Krifa's legal centers or specialized centers. This can be, for example, cases with legal professional content (traditional trade union work) for members of the Christian Trade Union, as well as queries with legal professional content for persons who are only members of Christian a-kasse or neither a member of Christian a-kassen or a Christian trade union. The letter combination thus has no explicit connection to the type of membership that the recipients of the mail have.
In the case of an advisory email about a new document in the Krifa Box, both the subject field of the advisory email and the body of the text will contain, among other things. information about the document name. To this end, Krifa has stated that an advisory email - via the name of the document in question - may contain information that is new in a case, but may also contain information about eg new information letter or receipt for e-mail.
Krifa has stated that advisory e-mails are also sent to non-members, and that in this case they are e-mails to union representatives, employers or other similar professional actors.
2.2. Password for opening emails stored on Secure @ Mail server
Krifa has stated that when sending emails stored on Secure @ Mail server (cf. item 4 above), it is basically the recipient's social security number used as password.
Krifa has stated that the social security number has been chosen, so that both the recipient and any person. a third party - such as a lawyer or employer - can access the email and the social security number serves as a method of recognition for both the member and the third party.
Krifa also noted that the social security number is never disclosed, but that it is stated that the social security number is the password. The system supports the use of other passwords that can be agreed on ad hoc and which can be sent via SMS to the recipient. The text in question also shows the text from the subject field of the advisory email.
2.3. Summary
In connection with Krifa Box, the Data Inspectorate must note that it is only the advisory emails that are sent in connection with new documents - and not Krifa Box itself - that have been the subject of the audit visit.
On the basis of Krifa's information, the Data Inspectorate finds that the subject field from an e-mail sent with Secure @ Mail appears in both the advisory email and in SMS with password (if one is sent). In addition, the Data Inspectorate finds that information about the document name appears in the advisory email sent by a new document in Krifa Box.
Furthermore, the Data Inspectorate can, on the basis of Krifa's stated information, find that an advisory email from Krifa Box can contain information that is new in the recipient's case and that the subject field of an e-mail sent via Secure @ Mail may contain information about a case number. .
Finally, the Data Inspectorate finds that Krifa sends advisory emails via opportunistic TLS without any guarantee that the content is encrypted and that SMS with password for reading e-mail on Secure @ Mail server is sent unencrypted.
On the basis of what Krifa stated that a journal number with the introduction "FAG" does not mean that the recipient is a member of the Christian Trade Union, the Danish Data Protection Agency assumes that, based on the journal number in the advisory email sent in connection with Secure @ Mail the email is possible to derive the recipient's union membership.
The Data Inspectorate further finds that a statement that a person is a member of Krifa is not in itself a confidential or sensitive information. In this connection, the Danish Data Protection Agency has emphasized that Krifa is a collective term for two associations, Christian A-box and Christian Trade Union, and that it is possible to be a member of Christian A-fund without being a member of Christian Trade Union. Thus, it is the Danish Data Protection Agency's assessment that a statement that a person is a member of Krifa does not mean that the person has a trade union affiliation with Christian Trade Union.
In addition, the Data Inspectorate finds that the relevant advisory emails, which have been submitted to the Danish Data Protection Agency, do not contain information from which it is possible to derive trade union affiliation or information of a sensitive or confidential nature.
The Data Inspectorate therefore assumes that it is not possible to derive sensitive and confidential information from the sent advisory emails from Krifa Box, Secure @ Mail and SMS with password for reading e-mail on Secure @ Mail server.
When Krifa uses the method of sending advisory emails via opportunistic TLS as well as SMS with password to read Secure @ Mail - which are potentially both unencrypted - the confidentiality of the Secure @ Mail email depends on two accessing information, ie. the ID number (from the advisory email) and the password (from the SMS). The Data Inspectorate finds that in this approach, Krifa has taken the necessary technical measures to ensure the confidentiality of the Secure @ Mail in question, as unintended access to this requires access to both the recipient's SMS and e-mail.
In summary, it is the Danish Data Protection Agency's assessment that Krifa's sending of advisory emails and SMSs with passwords for reading Secure @ Mail is in accordance with Article 32 (2) of the Data Protection Regulation. 1.
As Krifa uses the password for reading Secure @ Mail on the web server by default, the personal identification number of the person to whom the e-mail relates, it is the Data Protection Authority's opinion that Krifa must not base the confidentiality of personal data processed on personal data per se, including using, for example, the social security number as the accessing factor to the recorded information.
The Data Inspectorate has hereby emphasized that a date of birth is an ordinary, non-sensitive personal data, which will often be known by others but the data subject, that the assignment of a social security number follows a publicly known method by which the possible social security numbers for a given birth date can be is limited to a small number of possibilities and that a social security number is used widely across authorities, etc., which leads to a high probability - and thus an increased risk - that the confidentiality of the information that access control must secure is compromised.
Against this background, it is the opinion of the Danish Data Protection Agency that Krifa has not implemented appropriate security measures as required by Article 32 (2) of the Data Protection Regulation. 1. The
Data Inspectorate also calls on Krifa to phase out the use of the 3DES algorithm, as the algorithm does not exist at this time. In this regard, the Data Inspectorate should note that known vulnerabilities\[1\] of 3DES render the algorithm unsafe in certain applications, but that e-mail is not covered by these applications. However, the Data Inspectorate must nevertheless urge Krifa to phase out the use of 3DES, as the algorithm is not up-to-date and because more secure alternatives are freely available.
3. Cases where encryption has not been used
Krifa has stated prior to the audit visit that the union knows of four cases since January 1, 2019, where emails - from which trade union information can be derived - have been sent without the desired encryption. That is, the emails in question were sent with opportunistic TLS rather than using Krifa Box or Secure @ Mail. Krifa has stated that the e-mails concerned, after investigation, have been found to be sent with TLS 1.2 for the first hop.
Krifa has also stated that in the period January 1 to February 28, 2019 - due to an error in which the word "Trade union" instead of "Krifa" appeared in the body text - has sent 1,544 advisory emails via opportunistic TLS, of which information on trade union belonging may possibly be inferred.
Krifa has stated that the incidents have not been notified to the Data Protection Authority in accordance with Article 33 of the Data Protection Regulation. Krifa has stated that this has not been done on the basis of an assessment of whether Krifa is sure that the e-mail has been sent to the correct recipient and whether the recipient is a private person or professional actor. Furthermore, Krifa stated that the assessment takes into account that the emails in question were sent with opportunistic TLS and that the trade union statistics for March 2019 show that TLS was used for at least 99.74% of the emails sent.
3.1. Summary
On the basis of Krifa stated that the Data Inspectorate assumes that since January 1, 2019, the union has documented two categories of incidents where emails with sensitive personal data have been sent unencrypted.
Against this background, it is the Danish Data Protection Agency's assessment that Krifa has not implemented appropriate security measures as required by Article 32 of
the Data Protection Regulation. Furthermore, the Data Protection Authority's assessment that the breaches of personal data security should have been reported to the Authority, cf. Article 33 of the
Data Protection Regulation. this connection emphasized that - contrary to the prudential practice and Krifa's own guidelines and risk assessment - unencrypted e-mails with sensitive personal data have been sent, and therefore a risk to the data subjects' rights and freedoms must be expected in connection with the specific events.
4. Risk assessment The Danish
Data Protection Agency has noted that prior to the audit visit, Krifa submitted a written risk assessment to the audit dated December 20, 2018, which focuses on the transmission of confidential and sensitive personal information over the Internet.
The Data Inspectorate has noted that the risk assessment is based on 8-12 main parameters, where a specific valuation of each risk associated with the processing of personal data has been made.
4.1. Summary
It is the Danish Data Protection Agency's assessment that Krifa, in accordance with Article 5 (1) of the Data Protection Regulation. 2, cf. Article 32 (1) (f), cf. Paragraphs 1 and 2, have demonstrated that a risk assessment has been prepared in which the risk associated with the transmission of confidential and sensitive personal data over the Internet is considered.
5. Conclusion
Following the audit of Krifa, the Data Inspectorate finds a summary to conclude:
Krifa - in accordance with Article 32 of the Data Protection Regulation - uses certificate-based end-to-end encryption to the extent that the recipient supports it when Krifa sends e-mails containing confidential and sensitive personal data.
That Krifa - in accordance with Article 32 of the Data Protection Regulation - insofar as the recipient does not support certificate-based end-to-end encryption, uses a solution called Secure @ Mail, which sends end-to-end encrypted to the data processor's server, and then with opportunistic TLS sends an advisory email to the recipient, which contains a link to read the original email (after entering a password).
That Krifa - in accordance with Article 32 of the Data Protection Regulation - sends advisory emails in connection with the transmission of messages via Krifa Box and Secure @ Mail, as well as SMS with password for reading emails on Secure @ Mail server.
That Krifa has violated Article 32 of the Data Protection Regulation by using the social security number of the person to whom the email relates, as a password for reading Secure @ Mail on a web server.
That Krifa violated Articles 32 and 33 of the Data Protection Regulation by sending unencrypted e-mails between January 1, 2019 and April 9, 2019, where information on trade union affiliation could be derived, and without reporting the incidents to the Data Protection Agency as a breach of personal data security .
That Krifa - in accordance with Article 5 (1) of the Data Protection Regulation. 2, cf. Article 32 (1) (f), cf. 1 and 2 - has demonstrated that a risk assessment has been prepared which assesses the risks associated with the transmission of confidential and sensitive personal data over the Internet.
Data Protection Agency will overall rise to express criticism that Krifa not complied with data protection regulation requirements in relation to paragraphs 4 and 5.
Data Protection Agency must also inform Krifa injunction to cease using the personal identification number of the person as a Safe @ Mail for reading on the web server relates, as password for reading the email. The order is issued pursuant to Article 58 (2) of the Data Protection Regulation. Article 41 (2) (d) of the Data Protection Act. Paragraph 2 (5) shall be punishable by a fine or imprisonment for up to 6 months to a person who fails to comply with an order issued by the Data Inspectorate pursuant to Article 58 (2) of the Data Protection Regulation. 2, paragraph d.
6. Concluding remarks
Data Protection Agency notes that in relation to the breaches committed for transmission of the 1544 adviseringsmails, the Data Protection Agency ruled on the incident relating to this supervisory matter. On this basis, Krifa shall not report the security breaches to the Data Inspectorate.
The Data Inspectorate is then awaiting confirmation from Krifa that the order has been complied with. The confirmation must reach the Data Inspectorate by November 26, 2019.
 
\[1\]   See Bhargavan and Leurent On the Practical (In-) Security of 64-bit Block Ciphers (ACM CCS 2016) and NIST SP 800-57 Part 1 Revision 4 (Section 5.6.1)

```

Retrieved from "[https://gdprhub.eu/index.php?title=Datatilsynet\_(Denmark)\_-\_2019-41-0028&oldid=37168](https://gdprhub.eu/index.php?title=Datatilsynet_\(Denmark\)_-_2019-41-0028&oldid=37168)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Datatilsynet (Denmark)](/index.php?title=Category:Datatilsynet_\(Denmark\) "Category:Datatilsynet (Denmark)")
*   [Denmark](/index.php?title=Category:Denmark "Category:Denmark")
*   [Article 32 GDPR](/index.php?title=Category:Article_32_GDPR "Category:Article 32 GDPR")
*   [Article 33 GDPR](/index.php?title=Category:Article_33_GDPR "Category:Article 33 GDPR")
*   [Danish](/index.php?title=Category:Danish "Category:Danish")

This page was last edited on 6 December 2023, at 16:24.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)