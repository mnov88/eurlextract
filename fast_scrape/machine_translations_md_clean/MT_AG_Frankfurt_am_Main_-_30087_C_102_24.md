# AG Frankfurt am Main - 30087 C 102/24

## Case Information

**Court:** AG Frankfurt am Main (Germany)

**Jurisdiction:** Germany

**Relevant Law:** Article 15 GDPR

**Decided:** 08.05.2025

**Published:** 05.08.2025

**National Case Number/Name:** 30087 C 102/24

**European Case Law Identifier:** ECLI:DE:AGFFM:2025:0508.30087C102.24.00

**Appeal to:** Unknown

**Original Language(s):** German

**Original Source:** Hessenrecht (in German)

**Initial Contributor:** n/a

A court rejected a data subject's access request for train ticket inspection data, holding that pseudonymised data were not personal data in the absence of actual linkage to the individual.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

The data subject booked a train ticket from the controller for travel on 16 October 2022. During the journey, their ticket was scanned during routine inspection.

On 19 October 2022, the data subject filed an access request under [Article 15 GDPR](/index.php?title=Article_15_GDPR "Article 15 GDPR"), seeking a full copy of all personal data related to the ticket, including how, when, and on which trains the ticket was used, and whether it had been validated. The controller responded by providing booking data but did not include details from the ticket inspection ("inspection data").

According to the controller, inspection data are generated when staff scan tickets. These records contain the ticket order number, time of inspection, train number, and scanner ID. They are used in a background system for plausibility checks (e.g. reuse or use of cancelled tickets) but are not linked to a name or passenger by default. Only in case of anomalies are inspection data connected to booking records (which include names).

No such anomalies occurred in the data subject's case, and therefore no linkage between the inspection and booking datasets was established. The datasets are deliberately stored separately for privacy reasons.

Despite this, the data subject insisted that the information about the ticket inspection and any validation constituted personal data, and filed a lawsuit seeking full access, including any data revealing actual ticket usage. They also demanded a sworn statement of completeness and proposed referring questions about the German Civil Code to the CJEU.

### Holding

The court held that the access right under [Article 15 GDPR](/index.php?title=Article_15_GDPR "Article 15 GDPR") did not extend to the inspection data in this case. These records could not be considered personal data of the data subject because no identifiable linkage to them had actually occurred. Although the order number can technically be used to identify a person, such linkage only happens in case of anomalies (e.g. suspected fraud). Since none were present, the data remained unlinked and, in the court’s view, not personal data under the GDPR.

The court emphasised that the GDPR does not oblige controllers to retrospectively merge separate datasets just to fulfil access requests. Specifically, the controller was not required to combine the inspection and booking datasets to identify the individual and disclose additional data. Such merging would expand the scope of access beyond what is legally required, and the existing separation serves privacy protection.

## Comment

The court’s decision is deeply flawed – both legally and conceptually – and represents a dangerous precedent for undermining the right of access under [Article 15 GDPR](/index.php?title=Article_15_GDPR "Article 15 GDPR").

By holding that inspection data are not personal data simply because the controller chose not to link them to booking records in a specific case, the court misunderstands the basic definition of personal data under [Article 4(1) GDPR](/index.php?title=Article_4_GDPR#1 "Article 4 GDPR") and contradicts settled case law. The ticket order number is a pseudonym, and as the controller itself admitted, it can be easily linked to an identifiable person in individual cases. That this linkage did not happen in this particular case does not negate the fact that the data are personal data.

The court essentially ruled that the scope of the access right depends on the technical architecture chosen by the controller – a view that rewards opaque system design and undermines data subject rights. In effect, it says: “If you separate your systems cleverly, you don’t have to provide access.”

This is fundamentally incompatible with the purpose of the GDPR, which is to protect individuals, not to accommodate corporate data structures.

The judgment also conflicts with the case law of the German Federal Court of Justice (BGH), which has held that data are personal if the controller has the means to identify the person – even if they haven't yet done so (e.g. BGH, [VI ZR 576/19](/index.php?title=BGH_-_VI_ZR_576/19 "BGH - VI ZR 576/19")). It likewise ignores the CJEU’s [Rijkeboer](/index.php?title=CJEU_-_C%E2%80%91553/07_-_Rijkeboer "CJEU - C‑553/07 - Rijkeboer") ruling, which confirms that access must allow individuals to verify the existence and lawfulness of processing, not just processing that has already been individually identified.

Moreover, Recital 26 GDPR is explicit: pseudonymised data remain personal data as long as the controller holds the “means reasonably likely to be used” for identification – which is clearly the case here. The fact that the controller stores booking and inspection data separately, and only links them when anomalies occur, does not alter the legal nature of the data.

The court’s reasoning opens the door to strategic data fragmentation by controllers – intentionally designing systems that frustrate transparency and bypass accountability. This is not data protection; it is data denial.

## Further Resources

*   [Opinion by _Stiftung Datenschutz_ (in DE)](https://stiftungdatenschutz.org/veroeffentlichungen/datenschutz-im-fokus/datenschutz-im-fokus-detailansicht?tx_news_pi1%5Bnews%5D=606)

## English Machine Translation of the Decision

The decision below is a machine translation of the German original. Please refer to the German original for more details.

```
Tenor

The action is dismissed.

The plaintiff shall bear the costs of the legal action.

The judgment is provisionally enforceable. The plaintiff may avert enforcement by providing security in the amount of 120 percent of the amount enforceable under the judgment, unless the defendant provides security in the amount of 120 percent of the respective amount to be enforced prior to enforcement.

Facts

The plaintiff holds a degree in computer science and is an external data protection officer and is interested in the accuracy and lawfulness of the processing of his personal data. The plaintiff, who has a press card, works as a freelance journalist and reports on IT security topics in various specialist media, including on his own website.

The plaintiff booked an online ticket for a train journey on the defendant's trains for October 16, 2022, under order number ... on September 21, 2022. During the journey, there were "train disruptions." The plaintiff was routinely checked during the journey. According to an email dated October 19, 2022, the plaintiff requested information from the defendant about all personal data stored concerning him. Reference is made to the email, page 13 of the file. The defendant provided the plaintiff with information in accordance with Exhibit K 4, the email dated October 20, 2022, and the email dated November 29, 2022. Reference is made to the emails, pages 14 to 21 of the file, and pages 24 to 26 of the file.

The defendant generates control data records during ticket inspection on the train when the train attendant scans the ticket. The scanning process results in the ticket data being compared with a server, a so-called "background system" of the defendant. The ticket data, the so-called control data, consists of the order number, time of inspection, train number, and ticket counter number. Using this data, plausibility checks are performed in the background system to detect, for example, multiple use or the use of a ticket canceled before the start of the journey. Corresponding anomaly analyses are run in the background system. The name of the person being checked is not recorded in the control data record. Only the order number is stored there. No anomalies of this kind were found during the plaintiff's ticket checks.

The booking records and the control data records are separated in the defendant's databases for data protection reasons. Only in cases where discrepancies are apparent, such as the use of a previously canceled ticket, is a check performed, during which the affected data record is directly and automatically assigned to a person in the specific case using the order number.

The plaintiff believes that the defendant's information is incomplete, particularly due to the lack of information regarding the validation of his tickets. The plaintiff believes that Sections 259 and 260 of the German Civil Code (BGB) are applicable.

The plaintiff requests that

1. the defendant be ordered to send him a copy of all his personal data, insofar as this data contains information about how, when, and on which trains the plaintiff used his train ticket with order number ..., as well as all other tickets according to Appendix K4, pp. 6 to 8 (please make the appendix the subject of the judgment), according to the defendant's train controls, and whether, when, and how the respective ticket was validated.

2. the defendant be ordered to certify under oath the completeness and accuracy of the data information provided to the plaintiff.

The defendant requests that

the action be dismissed.

The plaintiff has requested a stay of proceedings and a referral to the ECJ regarding the applicability of Sections 259 and 260 of the German Civil Code (BGB).

For further details of the facts and issues in dispute, reference is made to the parties' written submissions and attachments.

Grounds for the Decision

The admissible action is unfounded.

The plaintiff has no claim against the defendant for information pursuant to claim 1, in particular not pursuant to Art. 15 (1) and (2) GDPR, Section 2 of the International Travel Act (IFG), and Art. 10 of the European Convention on Human Rights.

The control data in dispute here are not covered by the right to information pursuant to Art. 15 (1) and (3) GDPR in this specific case.

The control data records only need to be included in the information pursuant to Art. 15 GDPR if, in the individual case, the control data record was compared with the booking data record due to certain anomalies during the ticket inspection. Only in these cases are the data assigned to a specific person. If no anomalies were found, the respective control data record is not assigned to a specific person.

The name of the person checked is not visible in the control data record. The control data consists of the order number, time of the inspection, train number, and ticket counter number. The order number stored in the control data record represents a date that can be used to assign the data to a specific person. However, this assignment is only possible if there is a reference to the booking data records, which also contain the names. In the plaintiff's case, there were no anomalies during the ticket inspection that would trigger this assignment, so the control data records were not assigned to the booking data records.

It can remain open for the resolution of the legal dispute whether the defendant would be able to subsequently combine the control data records and the booking data records without undue difficulty. The right to information under Article 15 of the GDPR does not result in an obligation for the defendant to combine the separately stored control data records with the booking data records and thus expand the plaintiff's right to information. The separate storage of the control and booking data records serves precisely the purpose of data protection.

The plaintiff's claim against the defendant for the requested information does not arise from Section 2 of the International Travel and Tourism Act (IFG), since this provision is not a basis for a claim. Nothing different follows from Article 10 of the ECHR. There is simply no administrative intervention within the meaning of the provision.

Because the plaintiff has no claim against the defendant for the requested information, the plaintiff also has no claim against the defendant to make an affirmation in lieu of an oath in this regard, as claimed in claim 2.

For this reason alone, there was no need to request a preliminary ruling from the ECJ and thus no need to stay the proceedings pursuant to Article 267 TFEU, since the question of the applicability of Sections 259 and 260 of the German Civil Code (BGB) is irrelevant to the resolution of the dispute, as is clear from the above explanations.

The decision on costs is based on Section 91 of the Code of Civil Procedure (ZPO).

The decisions on provisional enforceability and the power to avoid enforcement are based on Sections 708 No. 11 and 711 of the Code of Civil Procedure (ZPO).

```

Retrieved from "[https://gdprhub.eu/index.php?title=AG\_Frankfurt\_am\_Main\_-\_30087\_C\_102/24&oldid=48639](https://gdprhub.eu/index.php?title=AG_Frankfurt_am_Main_-_30087_C_102/24&oldid=48639)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [AG Frankfurt am Main (Germany)](/index.php?title=Category:AG_Frankfurt_am_Main_\(Germany\) "Category:AG Frankfurt am Main (Germany)")
*   [Germany](/index.php?title=Category:Germany "Category:Germany")
*   [Article 15 GDPR](/index.php?title=Category:Article_15_GDPR "Category:Article 15 GDPR")
*   [2025](/index.php?title=Category:2025 "Category:2025")
*   [German](/index.php?title=Category:German "Category:German")

This page was last edited on 5 August 2025, at 18:19.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)