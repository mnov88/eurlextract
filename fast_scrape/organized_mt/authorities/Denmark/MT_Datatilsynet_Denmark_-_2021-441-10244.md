# Datatilsynet (Denmark) - 2021-441-10244

## Case Information

**Authority:** Datatilsynet (Denmark)

**Jurisdiction:** Denmark

**Relevant Law:** Article 25(1) GDPRArticle 32(1) GDPR

**Type:** Investigation

**Outcome:** Violation Found

**Decided:** 27.06.2022

**Published:** 12.07.2022

**Fine:** n/a

**Parties:** LB Forsikring A/S

**National Case Number/Name:** 2021-441-10244

**European Case Law Identifier:** n/a

**Appeal:** Unknown

**Original Language(s):** Danish

**Original Source:** datatilsynet.dk (in DA)

**Initial Contributor:** n/a

The Danish DPA reprimanded an insurance company for violating [Articles 25(1)](/index.php?title=Article_25_GDPR "Article 25 GDPR") and [32(1) GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR") by lacking sufficient security measures and not implementing privacy by design in the development stages of their customer portal.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

A car insurance company (controller) designed a customer portal that enabled customers to access all documents related to their case, even those that they should not have been authorised to see. These roughly 340 documents sent by counterparties, witnesses and repair personnel contained personal data such as contact information, witness statements, payment information and at least one incident of a social security number.

The controller had performed a number of tests before implementing the system, however the relevant authorisation setting was not discovered during these tests as it was not considered a systemic flaw.

The insurance company reported the breach to the Danish DPA which consequently opened an investigation.

### Holding

The Danish DPA first held that the lack of proper authorisation routines, as well as the lack of sufficient testing to discover the flaw, constituted a violation of [Article 32(1) GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR").

The DPA then highlighted the controller's obligation to implement privacy by design during the development stages of the software system under [Article 25(1) GDPR](/index.php?title=Article_25_GDPR "Article 25 GDPR"). Furthermore, the DPA considered that the relatively late discovery of the flaw indicated a lack of privacy by design in the controller's maintenance of the system.

The DPA thus reprimanded the controller for not having a sufficient level of security and for not correctly implementing privacy by design.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Danish original. Please refer to the Danish original for more details.

```
Serious criticism: Failure to comply with the principle of data protection through design at LB Forsikring A / S

Date: 27-06-2022

Decision Private companies Serious criticism Reporting breach of personal data security Security of processing Basic principles

The Danish Data Protection Agency expresses serious criticism in a case where customers of LB Forsikring A / S have had unauthorized access to documents and e-mails in their own claims cases from the insurance company's car claims department.

Journal number: 2021-441-10244

Summary

LB Forsikring A / S 'archiving system was designed with a setting that meant that e-mails were for a period associated with a claim with reading rights, depending on which domain it was sent from. In practice, this meant that all documentation identified with the same claim number - and which had been sent from several widespread email providers - became visible on the customer's "My page". The documents could i.a. be from counterparties, witnesses and car mechanics, and contained personal information such as contact information, witness statements, payment information - and in at least one case a social security number. LB Forsikring A / S has estimated that there were a maximum of 340 documents and that a corresponding number of registered persons may have been affected.

Prior to the implementation of the archiving system in 2019, LB Forsikring A / S had prepared an implementation plan that contained several tests. The tests were to include ensure that documents were assigned the correct document ID and placed correctly, but that option was not identified during the test process.

The Danish Data Protection Agency stated that - in addition to the use of all the recognized forms of testing - already from the development of the system's business processes and design, it is the data controller's responsibility to ensure effective implementation of data protection principles by incorporating this into the system support. of personal data and meets the requirements of the Data Protection Regulation (GDPR).

When developing a portal solution such as LB Forsikring A / S 'archiving system, where access to stored documents with personal information must be granted, it is not in accordance with the current technical level if an email domain is only given weight according to which documents are given access to. In addition, it will be part of the current technical level that the data controller incorporates follow-up controls that ensure that such an automatic process only provides the correct access.

Since LB Forsikring A / S neglected to meet this in the actual design of the solution, even before the treatment was organized, the basic principle of integrity and confidentiality was not complied with.

Against this background, the Danish Data Protection Agency expresses serious criticism of LB Forsikring A / S.

Decision

After a review of the case, the Danish Data Protection Agency finds that there are grounds for expressing serious criticism that LB Forsikring A / S 'processing of personal data has not taken place in accordance with the rules in the Data Protection Ordinance \[1\] Article 32 (1). 1 and Article 25, para. 1.

Below is a more detailed review of the case and a justification for the Danish Data Protection Agency's decision.

2. Case presentation

On 30 September 2021, LB Forsikring A / S, hereinafter (“LB”), reported a breach of personal data security. On 5 October 2021, LB sent a follow-up notification to the Danish Data Protection Agency.

It appears from the case that members of LB have had unauthorized access to documents and e-mails from the car damage department for a period from 21 February 2019 to 7 October 2021. The insurance company became aware of this when a customer stated that he had access to the department's correspondence with a counterparty in his ongoing tort case.

LB has stated in the case that their portal solution facilitates communication between the caseworkers and the members by drawing up a policy and claims handling. Members can access the page "My page" by logging in with NemID and find out more about policies, any claims, upload documents and contact the insurance company.

It appears from the case that all documentation that is visible on the member's "My page" is assigned a document ID. In the case, LB's archiving system has assigned all e-mails from the following domains - {hotmail.dk - hotmail.com - outlook.com - outlook.dk - gmail.com - gmail.dk - icloud.com - mme.com - private. dk} - a document ID that - as a starting point - has been set to make the content visible on the member page - despite the fact that these came from third parties and did not concern the member. Against this background, all documentation from the relevant email domains was classified as sent by the member.

LB has stated in the case that the error originated in the implementation of the insurance company's portal solution in 2019. LB states that the technical settings, including the setting of classification of specific e-mail domains with a specific document ID, were due to a human error.

It appears from the case that the incident only concerns the car damage department. Only e-mails from a third party identified with the claim number, which is the member's claim, have potentially been visible on "My Page". Members have not had unauthorized access to other members' claims. The personal data in the documents that could have been accessed by mistake have been names, contact details, social security numbers, payment information, IP addresses and witness statements, and the data subjects; customers, witnesses, victims and counterparties.

LB has stated in the case that the incident lasted for 959 days from 21 February 2019 to 7 October 2021, when the insurance company shut down the visibility of the document ID in question. The log shows that 3,923 documents have been opened during this period. LB has carried out a random sample of 645 of these documents, which showed that in a specific case, a member had in 56 cases had unauthorized access to other people's documents. Based on their manual review, LB has estimated that a maximum of 340 documents, and a corresponding number of data subjects, may be affected by the incident.

LB has further stated in the case that before the implementation of the portal solution in 2019, they had prepared an implementation plan. The implementation plan included several tests of the solution, including ensuring that documents were assigned the correct document ID and placed correctly. According to LB, the error in question was not identified on the grounds that it was not a systemic error. LB did not make any samples, including to review the material content as well as the sender of emails prior to implementation. LB states that it was the actual setting and assignment of document ID to the e-mail domains in question, "which was inappropriate and posed a small risk that e-mails from third parties regarding a particular member's damage case would also be visible on the member's" My page"." LB acknowledges that there is an inherent risk of members gaining unauthorized access to the personal information of others at the technical facility in question.

It appears from the case that LB continuously updates the portal solution to improve it and ensure adequate security measures, as required by the Data Protection Act. According to LB, the e-mails in question have not been discovered, as the portal contains a large amount of documents and information, of which the e-mails only make up a small fraction. LB states that it would have required a human review of "My Page" to identify the error. LB does not perform such a check.

LB has implemented prior organizational measures in the form of instructing the caseworkers to respond if they become aware of incorrectly placed information on the portal and otherwise at the request of members. LB has reportedly not had any internal reports since the security breach occurred. In addition, LB continuously assesses which documents must be visible on "My page" to ensure confidential information. LB has stated that - on the basis of this case - they will investigate the process for assigning document IDs and document types, including to ensure that the automated process for assigning document IDs does not result in a repeated security breach.

LB has stated that the data subjects are victims, counterparties, witnesses and car mechanics. The contents of the relevant documents and e-mails do not contain predominantly confidential information. In addition, the random check showed a limited amount of personal data, including information that had often already been exchanged between the parties. The manual review showed that, to a large extent, only ordinary personal information such as name and e-mail appeared. In a few cases, an injured party's account number, an invoice, a claim number and the like appeared. In one out of 56 cases, an injured party's contact form was found, of which a social security number appeared. LB has not notified the data subjects.

Justification for the Danish Data Protection Agency's decision

On the basis of what LB stated, the Danish Data Protection Agency assumes that in the period from 21 February 2019 to 7 October 2021, the injured party had unauthorized access to other parties' personal information in connection with their own car damage case. On this basis, the Danish Data Protection Agency finds that there has been a breach of personal data security, cf. Article 4, no. 12 of the Data Protection Regulation.

3.1. Article 32 of the Data Protection Regulation

It follows from Article 32 (1) of the Data Protection Regulation 1, that the data controller must take appropriate technical and organizational measures to ensure a level of security appropriate to the risks involved in the data controller's processing of personal data.

Thus, the data controller has a duty to identify the risks that the data controller's processing poses to the data subjects and to ensure that appropriate security measures are put in place to protect the data subjects against these risks.

The Danish Data Protection Agency is of the opinion that the requirement in Article 32 for appropriate security will normally mean that in systems with a large number of information about a large number of users, higher demands must be placed on the data controller's care in ensuring that unauthorized access does not occur. to personal data and that all probable error scenarios should be tested in connection with the implementation of new software where personal data is processed.

Furthermore, the Danish Data Protection Agency is of the opinion that a technical setting that automatically determines the visibility of documents with personal data and where access to them is only determined by which e-mail domain the sender uses, especially when these are domains that are frequently used by both private and businesses. is an expression of appropriate security in accordance with Article 32 (2) of the Data Protection Regulation. 1.

On the basis of the above, the Danish Data Protection Agency finds that LB - by not having implemented ongoing measures to check and correct the portal solution system's settings for document visibility - has not taken appropriate technical and organizational measures to ensure a level of security appropriate to the risks involved. in the processing of personal data by the data controller in accordance with Article 32 (1) of the Data Protection Regulation. 1.

3.2. Article 25 of the Data Protection Regulation

It follows from Article 25 (1) of the Data Protection Regulation 1, that the data controller - both at the time of determination of the means of processing and at the time of the processing itself - must take appropriate technical and organizational measures, designed for the effective implementation of data protection principles and for the integration of the necessary guarantees in processing in order to comply with the requirements of this Regulation and to protect the rights of data subjects.

In the opinion of the Danish Data Protection Agency, LB has not taken appropriate technical and organizational measures through design to meet the requirements of the Data Protection Regulation in determining the digitization of business processes, the implementation and design of their portal solution system, in which information on natural persons was to be processed.

The Danish Data Protection Agency has placed particular emphasis on the fact that for the development of portal solutions that create access to stored documents containing personal data, it cannot be said to reflect the current technical level if the mail domain suffix in isolation is given weight when allocating access. In addition, it will normally be part of the current technical level that with built-in follow-up controls, with an appropriate follow-up frequency, it is ensured that such an automated process only provides correct access.

By, already at the time of the organization of the processing, having neglected this, and by using the mail domain as a factor, in the access to personal data and as it should have been countered in designing the solution, to ensure compliance with the basic principle of Article 5 (1) . LB has not complied with Article 25 (1) (f) on integrity and confidentiality (as well as Article 32). 1.

After a review of the case, the Danish Data Protection Agency finds that there are grounds for expressing serious criticism that LB's processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation. 1 and Article 25, para. 1.

When choosing a reaction, the Danish Data Protection Agency has emphasized that LB carried out an inadequate risk assessment in the design of their system prior to the initial implementation of the portal solution in 2019. This has meant that the security breach has had a duration of 959 days and the measures previously implemented by LB were insufficient. It further appears that LB was aware of the risk of unintentional mixing of case parties and documentation visibility.

In addition, the Danish Data Protection Agency has emphasized that the scope of the processing of personal data must be regarded as significant by an insurance company and that certain data subjects should enjoy special protection and confidentiality, including e.g. witnesses in a car damage case under the compensation indemnity. Finally, the Danish Data Protection Agency has emphasized that LB has not taken a position on the risk profile as to whether some of the data subjects have address or name protection.

In a mitigating direction, the Danish Data Protection Agency has emphasized that the personal data has generally been information that was already known to the person - who was given the unauthorized access.

The Danish Data Protection Agency notes that in the future LB intends to investigate the process for assigning document IDs and document types, including to prevent a future similar security breach.

3.3. Summary

The Danish Data Protection Agency finds grounds for expressing serious criticism that LB Forsikring A / S ’processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation. 1 and Article 25, para. 1.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC (General data protection regulation).

```

Retrieved from "[https://gdprhub.eu/index.php?title=Datatilsynet\_(Denmark)\_-\_2021-441-10244&oldid=27267](https://gdprhub.eu/index.php?title=Datatilsynet_\(Denmark\)_-_2021-441-10244&oldid=27267)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Datatilsynet (Denmark)](/index.php?title=Category:Datatilsynet_\(Denmark\) "Category:Datatilsynet (Denmark)")
*   [Denmark](/index.php?title=Category:Denmark "Category:Denmark")
*   [Article 25(1) GDPR](/index.php?title=Category:Article_25\(1\)_GDPR "Category:Article 25(1) GDPR")
*   [Article 32(1) GDPR](/index.php?title=Category:Article_32\(1\)_GDPR "Category:Article 32(1) GDPR")
*   [2022](/index.php?title=Category:2022 "Category:2022")
*   [Danish](/index.php?title=Category:Danish "Category:Danish")

This page was last edited on 27 July 2022, at 14:47.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)