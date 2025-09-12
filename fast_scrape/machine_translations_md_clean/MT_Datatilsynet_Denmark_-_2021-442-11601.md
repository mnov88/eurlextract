# Datatilsynet (Denmark) - 2021-442-11601

## Case Information

**Authority:** Datatilsynet (Denmark)

**Jurisdiction:** Denmark

**Relevant Law:** Article 32(1) GDPR

**Type:** Complaint

**Outcome:** Upheld

**Decided:** 25.11.2021

**Fine:** None

**Parties:** Silkeborg Municipality

**National Case Number/Name:** 2021-442-11601

**European Case Law Identifier:** n/a

**Appeal:** Not appealed

**Original Language(s):** Danish

**Original Source:** Datatilsynet.dk (in DA)

**Initial Contributor:** n/a

The Danish DPA reprimands a municipality for not using end-to-end encryption on sensitive content sent by email, and for still using TLS 1.1 in spite of the protocol's well known security flaws.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

Due to a human error, a Danish municipality had sent a list of information regarding 12 916 children in public school to a consulting agency without properly encrypting the content. The information included the children's national identity numbers, school names and school codes.

When the error was discovered, the municipality notified the Danish DPA of the incident. The municipality reported that the content of the email had possibly been encrypted on the transportation layer using TLS 1.1, however end-to-end encryption had not been implemented.

### Holding

The Danish DPA did not have enough evidence to conclude that TLS 1.1 had been used on the transportation layer when this specific email was sent. Moreover, the DPA held that encryption on the transportation layer is insufficient if the email contains personal data of a sensitive nature or personal data that deserve a high level of protection. In such instances, end-to-end encryption is a more adequate security measure. Furthermore, the DPA highlighted the fact that TLS 1.1 suffers from well known security issues, and that the protocol is therefore not suitable for encryption on the transportation layer.

The DPA therefore concluded that the controller had not fulfilled its obligation to implement appropriate technical and organisational measures to ensure a level of security appropriate to the risk under [Article 32(1) GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR").

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Danish original. Please refer to the Danish original for more details.

```
Sensitive information in unencrypted mail from Silkeborg Municipality

Date: 25-11-2021

Decision

The Danish Data Protection Agency has expressed serious criticism that Silkeborg Municipality did not have appropriate security measures when the municipality sent confidential and sensitive information in an unencrypted e-mail.

Journal number: 2021-442-11601.

On 3 February 2021, Silkeborg Municipality reported a breach of personal data security. The review has a reference number:

9e8f54e07f09548bd3da0b89ac216bcb3d34b593.

Decision

After a review of the case, the Danish Data Protection Agency finds that there are grounds for expressing serious criticism that Silkeborg Municipality's processing of personal data has not taken place in accordance with the rules in the Data Protection Regulation \[1\], Article 32, subsection. 1 and Article 5, para. Article 5 (2) 1, letter f.

Below is a more detailed review of the case and a justification for the Danish Data Protection Agency's decision.

2. Case presentation

It appears from the notification that Silkeborg Municipality on 3 February 2021 sent an e-mail to Statistics Denmark Consulting. The email contained a list of social security numbers, school name and school code for 12,915 school students. It appears from the notification that the e-mail was not sent securely and thus not encrypted from sender to recipient.

Reviewer's comments

In the notification of 3 February 2021 and the subsequent consultation response of 5 July 2021, Silkeborg Municipality stated that the municipality sent an e-mail to Statistics Denmark Consulting on 3 February 2021. The email contained a list of social security numbers, school name and school code for 12,915 school students. The email was not sent securely. It further appears that this was a human error, as an employee - who knew the guidelines for sending e-mails securely - came to send the e-mail insecurely by pressing the wrong button.

On 12 August 2021, at the request of the Danish Data Protection Agency, Silkeborg Municipality stated that at the time of sending the e-mail, TLS 1.1 encryption had been implemented in the municipality, which is why the e-mail in question could possibly have been encrypted on the transport layer with TLS 1.1.

The municipality contacted the recipient shortly after dispatch and made sure that the e-mail had reached the right recipient.

Silkeborg Municipality has - in order to strengthen all employees' level of knowledge and attention on, among other things, the use of correct e-mail sending - prepared a video course for all employees regarding. GDPR, just as the correct use of shipping methods is continuously emphasized in relevant contexts.

Furthermore, from August 2021, the municipality will introduce TLS 1.2 encryption on all e-mail shipments, which is why it is the municipality's opinion that repeated instances will not occur, as e-mails will always be sent via encrypted connection.

4. Justification for the Danish Data Protection Agency's decision

On the basis of Silkeborg Municipality's information, the Danish Data Protection Agency assumes that the municipality has not been able to document that the transmission took place using encryption, neither on the transport layer nor on the content of the e-mail.

The Danish Data Protection Agency further assumes that if the email in question had been encrypted, this was only on the transport layer and with TLS 1.1.

Article 32 (1) of the Data Protection Regulation 1, states that the data controller, taking into account the current technical level, the implementation costs and the nature, scope, coherence and purpose of the processing in question, as well as the risks of varying probability and seriousness of natural persons' rights and freedoms, implement appropriate technical and organizational measures to ensure a level of safety appropriate to these risks.

The Danish Data Protection Agency is of the opinion that encryption on the transport layer with a sufficiently strong algorithm and key should normally be regarded as a minimum level of security when confidential and / or sensitive personal information is transmitted via e-mail. In addition, the Authority is of the opinion that there will be types of processing where encryption of payload, so-called end-to-end encryption will be appropriate, if there is actually a higher risk in the processing. This may be the case, for example, if a data controller - as in this case - has to send personal data of a confidential and / or sensitive nature about a large number of data subjects, or the transmission of a plurality of confidential and / or sensitive information takes place on a fixed basis.

It is therefore the Data Inspectorate's opinion that encryption on the transport layer by means of TLS is not in all cases sufficient security when a lot of confidential and / or sensitive personal information is sent. Furthermore, the Authority is of the opinion that TLS 1.1 - which at the time was implemented in Silkeborg Municipality - on the basis of known security weaknesses can not be considered as suitable security for encryption on the transport layer.

It appears from the case that Silkeborg Municipality had internal guidelines, from which it appeared that e-mails containing the citizens' personal information should be sent securely and encrypted and that the employee in question knew about these guidelines. It further appears from the case that the employee - despite this knowledge - sent the e-mail with a very large amount of confidential personal information regarding children, without making sure that the e-mail was sent securely and encrypted.

It is the Data Inspectorate's assessment that a municipality that processes large amounts of confidential and / or sensitive personal information about citizens must ensure that large data sets are sent in a way where the information is readable even for a third party who receives the e-mail. by mistake, why the municipality must have routines that ensure that also the content of this type of shipments is encrypted, and not only encrypted on the transport layer with TLS. This obligation applies in particular when large amounts of confidential and / or sensitive personal data are processed and when the personal data relate to children who enjoy special protection in the Data Protection Regulation.

By not ensuring that the personal data in question was sent with encryption of the content, Silkeborg Municipality has violated Article 32 (1) of the Data Protection Regulation. 1.

In addition, the Danish Data Protection Agency finds that the use of TLS version 1.1 for encryption on the transport layer cannot be considered appropriate security for encryption on the transport layer.

In the specific case, Silkeborg Municipality has not been able to account for whether the e-mail was encrypted at all or not, which is why the Danish Data Protection Agency finds that the municipality has violated Article 5 (1) of the Data Protection Ordinance. Article 5 (2) 1 liter f.

The Danish Data Protection Agency emphasizes that it is important that the data controller's documentation reflects the risks the processing has for the data subjects' rights and that there is documentation for a specific processing that the selected security has actually been observed.

After a review of the case, the Danish Data Protection Agency finds that there are grounds for expressing serious criticism that Silkeborg Municipality's processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation. 1 and Article 5, para. Article 5 (2) 1, letter f.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC (General data protection regulation).

```

Retrieved from "[https://gdprhub.eu/index.php?title=Datatilsynet\_(Denmark)\_-\_2021-442-11601&oldid=25207](https://gdprhub.eu/index.php?title=Datatilsynet_\(Denmark\)_-_2021-442-11601&oldid=25207)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Datatilsynet (Denmark)](/index.php?title=Category:Datatilsynet_\(Denmark\) "Category:Datatilsynet (Denmark)")
*   [Denmark](/index.php?title=Category:Denmark "Category:Denmark")
*   [Article 32(1) GDPR](/index.php?title=Category:Article_32\(1\)_GDPR "Category:Article 32(1) GDPR")
*   [2021](/index.php?title=Category:2021 "Category:2021")
*   [Danish](/index.php?title=Category:Danish "Category:Danish")

This page was last edited on 8 April 2022, at 11:19.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)