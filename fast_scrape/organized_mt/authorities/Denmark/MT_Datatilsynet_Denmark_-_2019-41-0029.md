# Datatilsynet (Denmark) - 2019-41-0029

## Case Information

**Authority:** Datatilsynet (Denmark)

**Jurisdiction:** Denmark

**Relevant Law:** Article 5(2) GDPRArticle 32 GDPR

**Type:** Investigation

**Outcome:** Violation Found

**Published:** 05.11.2019

**Fine:** None

**Parties:** Unknown law firms

**National Case Number/Name:** 2019-41-0029

**European Case Law Identifier:** n/a

**Appeal:** n/a

**Original Language(s):** Danish

**Original Source:** Datatilsynet (in DA)

**Initial Contributor:** n/a

The Datatilsynet found that the investigated group of law firms violated Articles 5(2) and 32 GDPR.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts and questions arising](#Facts_and_questions_arising)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts and questions arising

After carrying out investigations at its own initiative, the Datatilsynet found that the investigated group of law firms had been transmitting confidential and sensitive personal data to clients via the Internet without using encryption mechanisms. Also, the group had not carried out a risk assessment.

### Holding

Therefore the Datatilsynet found that the investigated group of law fimrs violated Articles 5(2) and 32 GDPR. After the Datatilsynet’s visit the group initiated procedures that would ensure better data security.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the original. Please refer to the Danish original for more details.

```
Supervision of treatment security at the office community of law firms
Published 05-11-2019
Decision Private companies
Journal number: 2019-41-0029Agency
Summary
In 2019, the Danish Data Protectioncarried out a planned audit at an office community of law firms. The audit focused on processing security, including in particular the encryption of e-mails, cf. Article 32 of the. The Danish
Data Protection RegulationData Protection Agency has criticized the fact that the office community has not complied with the requirements of Article 32 (2) of the Data Protection Regulation. 1 and Article 5 (1). 2, cf. Article 32 (1) (f), cf. 1 and 2. It
is clear, among other things, from the Danish Data Protection Authority's opinion that, prior to the audit visit, the office community had not instituted procedures to ensure that encryption is used on the transport layer via TLS for the transmission of confidential and sensitive personal data to clients, etc. over the Internet. After the audit visit and before the Danish Data Protection Agency's opinion, the office community has stated that the office community has now instituted procedures which, in case of doubt, ensure that the recipient domain's support for TLS is examined prior to sending an e-mail containing confidential or sensitive personal information.
In addition, the opinion states that the office community has not demonstrated that it has prepared a risk assessment that assesses the risks associated with the transmission of confidential and sensitive personal data over the Internet prior to the audit visit.
You can read the Danish Data Protection Agency Guidance text on email encryption here.
Decision
An office community consisting of law firms was among the companies that the Data Protection Authority selected for supervision in the spring of 2019. The
Data Protection Authority's planned supervision focused on processing security, including in particular the encryption of emails, cf. Article 32
of the Data Protection Regulation, at the request of the Data Protection Authority for the 2019 in connection with the audit visit completed a questionnaire and submitted this as well as additional material to the audit. The audit took place on March 21, 2019.
Following the supervision of the office community, the Data Inspectorate finds a summary to conclude:
That the office community - in accordance with Article 32 of the Data Protection Regulation - uses end-to-end encryption when exchanging the S / MIME certificate over the tunnel mail community (hereafter referred to as tunnel mail) for the transmission of confidential and sensitive personal data over the Internet to the police, courts and other recipients on the public tunnel list.
That the office community had not instituted procedures prior to the audit visit to ensure that encryption is used on the transport layer via TLS to transmit confidential and sensitive personal data to clients, etc. over the Internet.
That the office community does not - in accordance with Article 5 (1) of the Data Protection Regulation. 2, cf. Article 32 (1) (f), cf. 1 and 2 - have demonstrated that a risk assessment has been prepared that assesses the risks associated with the transmission of confidential and sensitive personal data over the Internet, prior to the audit visit.
That the office community is not aware of cases where confidential or sensitive personal data has been sent unencrypted over the Internet since 1 January 2019. The Danish
Data Protection Agency finds, overall, a criticism that the office community has not complied with the requirements of the Data Protection Regulation in relation to points 2 and 3.
A more detailed review of the Danish Data Protection Agency's conclusions follows below.
1. Use of encryption when transmitting confidential and sensitive personal data over the Internet
During the audit visit, the office community confirmed that the covered law offices use the same technical solution for sending encrypted e-mail.
Furthermore, prior to the audit visit, the office community has stated that the office community sends confidential and sensitive personal information via email over the Internet. After the audit visit, the office community has clarified that it is only extremely rare for the office community to send sensitive personal information via email.
2. About the encryption solution
The office community has stated that all e-mail traffic is sent over a TLS 1.2 connection to the data processor's server, from where the actual encryption is done. Here are three possible solutions that are used in order of priority:
Send the secure solution, which uses S / MIME with Nets OCES certificates to send end-to-end encrypted to the recipient.
Tunnelmail, which also uses S / MIME with Nets OCES certificates to send the encrypted between main mailboxes, but which supports sending from / delivery to the end users' own mailboxes at both ends. The data processor has stated that the tunnel mail solution is supported by over 1,500 recipient domains.
Delivery of e-mail with encryption on the transport layer via opportunistic TLS, if no Nets OCES certificate can be found for the recipient's e-mail address.
With S / MIME encryption, automatic searches are made against Nets' database of OCES certificates. The S / MIME encryption uses the AES-256 algorithm, and all private and public keys have a length of 2048 bits.
The office community has further stated that the Send Safe solution and tunnel mail (points 1 and 2 above) for the sender are integrated in Outlook with another button for sending e-mail with the text "Send secure". Pressing this button examines whether the specified recipient address can receive encrypted email either via the Send Secure solution or via the tunnel email solution. If the recipient supports one of the two solutions mentioned, the field will be highlighted in green and otherwise in red. If the recipient does not support one of the solutions, the sender can choose to send the email anyway. In that case, sending with opportunistic TLS is done without any guarantee that the email will be sent encrypted.
3. E-mails to the courts, police districts, prosecutors, boards and boards
Prior to the audit visit, the office community has stated that the law offices send e-mails containing confidential or sensitive personal information to the courts, police districts, prosecutors, boards and boards. These emails are sent either to a main mailbox or directly to an employee's email address.
The office community has stated that when such emails are sent, either the Send Secure solution or the tunnel email solution (paragraphs 1 and 2 of Section 2), which uses S / MIME certificates to conduct end-to-end encryption, is used.
For this purpose, the office community has stated that the emails in question are sent in professional contexts where the office community represents a client. These may include communication with the courts in a specific criminal case, etc., cases involving the search of a telephone, agreements with the police about hearings, and when the office community complains to the Prison Service on behalf of clients, etc.
3.1. Summary The Danish
Data Protection Agency assumes, on the basis of the information provided by the office community, that the office community uses end-to-end encryption with S / MIME certificates to the extent that confidential and sensitive personal data is transmitted over the internet to professional actors, including the police, courts and others. recipients on the public tunnel list. Thus, the Data Inspectorate finds that the office community uses adequate processing security when sending such emails.
4. Emails to clients, etc.
The office community has stated that the office community communicates in different ways with clients depending on the individual client.
In relation to arrests, the office community has stated that the office community does not communicate with this group of clients via email, and that communication with them typically takes place by telephone.
In relation to homeless clients and other clients who are exempt from using email or who do not use email as a form of communication, the office community has stated that communication with this group of clients is by telephone or physical attendance.
In relation to clients freely, the office community has stated that communication with these takes place via e-mail, SMS, physical letter, telephone and physical attendance.
During the audit visit, the office community stated that when sending emails to clients that do not support the end-to-end encryption solution used by the office community, opportunistic TLS is used in the transmission.
4.1. Cases where encryption has not been used
Prior to the audit visit, the office community reported that after January 1, 2019, the office community had mistakenly sent emails containing sensitive and confidential information unencrypted over the Internet.
During the audit, the Data Inspectorate asked how often since January 1, 2019, it had happened that the law offices had mistakenly sent emails containing confidential or sensitive information unencrypted over the Internet.
To this end, the proprietor of one of the law offices stated that the person concerned approx. once a week since January 1, 2019, has responded to an email from a client - typically by using the reply button so that the initial inquiry appears in the reply. At the same time, the person stated that the person was not aware of how many of the inquiries contained confidential or sensitive information, but that this was probably the case for some of them.
The holder of one of the other law offices stated that this had been the case less than 10 times, and the holder of the last law office stated that it had a maximum of a handful of times.
When asked during the supervisory visit, the law offices stated that the recipient of the emails in question was the client or relative of the client and that the emails in question contained information about the client. 
However, following the audit visit, the office community has stated that it is incorrect to send emails unencrypted over the Internet with confidential or sensitive personal information. The office community has stated that the e-mails in question were sent securely via an opportunistic TLS connection, and that the e-mails in question have only in very few cases contained confidential personal information and that they did not contain sensitive information. The office community has, by extension, submitted a list of the 16 recipient domains to which the emails in question have been sent, all of which are seen to support TLS.
4.2. Summary
Based on the information provided by the office community, the Data Inspectorate assumes that the office community uses opportunistic TLS to the extent that the office community sends e-mails over the internet to clients and relatives etc., where these recipients do not support the office community solution used for end-to-end. than encryption.
Based on the list of recipient domains submitted by the Office, the Data Inspectorate assumes that the Office community is not aware of cases where confidential and sensitive personal data has been sent unencrypted over the Internet since 1 January 2019.
5. Risk assessment
Prior to the audit visit, the office community had submitted a risk assessment for processing personal data. However, the risk assessment submitted did not include considerations regarding the transmission of emails containing personal data. The office community stated at the inspection visit that no such risk assessment had been prepared.
After the audit visit, the office community informed the Danish Data Protection Agency that new procedures have been introduced for the use of opportunistic TLS for dispatch to clients, etc. According to the new procedures, the sender - based on an assessment of the recipient's email domain and the content of the email - will assess whether the email can be sent using opportunistic TLS. The office community has also stated that in case of doubt, either the recipient domain's support for TLS is being investigated or a blank email is sent with a request for receipt, after which the email header's email header is examined for use of TLS.
After the audit, the office community also confirmed that no written risk assessment had been prepared and stated that the office community's procedures for the specific assessment of email contact with the office community's clients, cf. the above section, are now incorporated into the existing office community's risk assessment.
5.1. Summary
It is the Authority's assessment that the office community has violated Article 5 (1) of the Data Protection Regulation. 2, cf. Article 32 (1) (f), cf. 1 and 2 by failing to present at the audit visit a written risk assessment identifying the risks involved in the treatment of the data subjects' rights, and an assessment of the appropriate technical and organizational measures to ensure a suitable level of security to such risks, or otherwise demonstrate such a risk assessment.
The Data Inspectorate assumes that prior to the audit visit, the office community was not aware of whether the recipient domain supports TLS when sending emails containing confidential or sensitive personal information to clients, etc.
In addition, the Data Inspectorate assumes that, following the audit visit, the office community has instituted procedures that, in case of doubt, ensure that the recipient domain's support for TLS is examined prior to sending an e-mail containing confidential or sensitive personal information.
In the opinion of the Data Inspectorate, the failure of the office community to assess the risk of sending e-mails containing personal data has resulted in inadequate security measures in relation to e-mails to clients and relatives.
It is in the aftermath of the Danish Data Protection Authority's assessment that, prior to the audit visit, the office community failed to institute procedures to ensure that emails containing confidential or sensitive personal data are sent using TLS encryption on the transport layer, in violation of Article 32 of the
Data Protection Regulation. should also note that the procedures that the office community has instituted after the audit visit are considered to be in accordance with Article 32 of the Data Protection Regulation, as the guidelines do not send emails containing confidential or sensitive personal data to clients, etc. without ensuring that TLS encryption is used on the transport layer.
6. Conclusion
Following the supervision of the office community, the Data Inspectorate finds a summary to conclude:
That the office community - in accordance with Article 32 of the Data Protection Regulation - uses end-to-end encryption when exchanging S / MIME certificate over the tunnel mail community (hereinafter referred to as tunnel mail) for transmission. of confidential and sensitive personal information over the Internet to the police, courts and other recipients on the public tunnel list.
That the office community had not instituted procedures prior to the visit to ensure that encryption was used on the transport layer via TLS to transmit confidential and sensitive personal data to clients, etc. over the Internet.
That the office community does not - in accordance with Article 5 (1) of the Data Protection Regulation. 2, cf. Article 32 (1) (f), cf. 1 and 2 - have demonstrated that a risk assessment has been prepared that assesses the risks associated with the transmission of confidential and sensitive personal data over the Internet, prior to the audit visit.
The fact that the office community is not aware of cases where confidential or sensitive personal data has been sent unencrypted on the Internet since 1 January 2019. The Danish
Data Protection Agency finds, overall, a criticism that the office community has not complied with the requirements of the Data Protection Regulation in relation to points 2 and 3.

```

Retrieved from "[https://gdprhub.eu/index.php?title=Datatilsynet\_(Denmark)\_-\_2019-41-0029&oldid=37170](https://gdprhub.eu/index.php?title=Datatilsynet_\(Denmark\)_-_2019-41-0029&oldid=37170)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Datatilsynet (Denmark)](/index.php?title=Category:Datatilsynet_\(Denmark\) "Category:Datatilsynet (Denmark)")
*   [Denmark](/index.php?title=Category:Denmark "Category:Denmark")
*   [Article 5(2) GDPR](/index.php?title=Category:Article_5\(2\)_GDPR "Category:Article 5(2) GDPR")
*   [Article 32 GDPR](/index.php?title=Category:Article_32_GDPR "Category:Article 32 GDPR")
*   [Danish](/index.php?title=Category:Danish "Category:Danish")

This page was last edited on 6 December 2023, at 16:25.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)