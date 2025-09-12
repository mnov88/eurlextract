# Datatilsynet (Norway) - 20/03771

## Case Information

**Authority:** Datatilsynet (Norway)

**Jurisdiction:** Norway

**Relevant Law:** Article 4(16)(a) GDPRArticle 4(23)(b) GDPRArticle 44 GDPRArticle 46(2)(c) GDPRArticle 56(1) GDPRArticle 56(1) GDPRArticle 58(2)(b) GDPRArticle 60(3) GDPRArticle 80(1) GDPR

**Type:** Investigation

**Outcome:** Violation Found

**Started:** 18.12.2020

**Decided:** 28.02.2023

**Published:** 01.03.2023

**Fine:** n/a

**Parties:** n/a

**National Case Number/Name:** 20/03771

**European Case Law Identifier:** n/a

**Appeal:** n/a

**Original Language(s):** Norwegian

**Original Source:** Datatilsynet (in NO)

**Initial Contributor:** Rie Aleksandra Walle

Following one of noyb's [_101 US transfer complaints_](https://noyb.eu/en/101-complaints-eu-us-transfers-filed), the Norwegian DPA has notified a controller of their intent to reprimand their former use of Google Analytics and consequent transfer of personal data to the US in violation of [Article 44 GDPR](/index.php?title=Article_44_GDPR "Article 44 GDPR"), as they did not have sufficient supplementary measures in place.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
        *   [1.2.1 The first question](#The_first_question)
        *   [1.2.2 The second question](#The_second_question)
        *   [1.2.3 The third question](#The_third_question)
        *   [1.2.4 Conclusion](#Conclusion)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

Following the Schrems II ruling of 16 July 2020 ([CJEU case C-311/18)](https://gdprhub.eu/index.php?title=CJEU_-_C-311/18_-_Schrems_II) the European Center for Digital Rights (_noyb_) lodged 101 complaints to several data protection authorities in the European Economic Area (EEA). All complaints concerned the use of Google Analytics or Facebook Connect on websites in the EEA.

In accordance with [Article 80(1) GDPR](/index.php?title=Article_80_GDPR#1 "Article 80 GDPR"), noyb lodged a complaint on 17 August 2020 with the Austrian DPA against Telenor ASA (the controller) for their use of Google Analytics on their website and alleged transfer of a data subject's personal data to the US in violation of [Article 44 GDPR](/index.php?title=Article_44_GDPR "Article 44 GDPR"). The data subject provided the DPA with a HTTP Archive format (HAR) data of the website, i.e., a JSON-formatted archive file format for logging a web browser’s interaction with a website, as proof of US-transfers being made.

As per [Article 4(16)(a) GDPR](/index.php?title=Article_4_GDPR#16a "Article 4 GDPR"), Telenor’s main establishment is in Norway. Consequently, the Austrian DPA transferred the complaint to the Norwegian DPA in accordance with Article 56(1), who proceeded to investigate the case.

The controller informed the DPA that they in late August 2020 initiated a review project to assess relevant agreements in light of the Schrems II ruling. They found this to apply to their use of Google Analytics since the agreement was with Google as a US processor of their. With the Privacy Shield now invalidated, the controller entered into standard contractual clauses (SCCs) Module Two with Google on 12 August 2020 for data transfers to the US.

However, the controller did not carry out a thorough review of potential third country legislation (a "transfer impact assessment"), as it, according to information from Google, was not possible to determine the exact location of processing. The decision, however, refers to a statement by Google informing that Google Analytics data is stored in the US.

The parties still agreed supplementary measures. First, Google has established policies and procedures and a team of qualified lawyers for handling authority requests for user data. Second, Google offers and the controller implemented the Anonymize IP feature and, finally, the controller had applied a redaction script on the website to prevent personal data unintentionally being shared with Google.

Google Analytics was implemented on the website until 15 January 2021 and collected, until then, online identifiers, including cookie identifiers, IP addresses, device identifiers and client identifiers. The controller had enabled the IP anonymization feature and therefore argued that the identifiers listed above could not be regarded as personal data as this feature had "severed any link to an invididual". Google had also informed them that it would not be possible to extract such data following a potential legally binding authority request. In conclusion, the controller thus argued that the only personal data collected by Google Analytics and subsequently processed by them were IP addresses.

### Holding

The DPA investigated three main legal questions:

1.  Whether or not personal data was processed in the context of Google Analytics.
2.  Provided that personal data was processed, whether or not this personal data was transferred to the US.
3.  Provided that the personal data was processed and transferred to the US, whether or not this transfer infringed Chapter V GDPR, also considering the Schrems II judgment.

The investigation was limited to the time period from the CJEU’s Schrems II ruling to the controller's discontinuation of Google Analytics, i.e., between 16 July 2020 and 15 January 2021.

#### The first question

The DPA's assessed the HAR file submitted by the data subject and found that the following data was processed when visiting the controller's website:

*   Unique identifier(s) that identifies the browser/device used to visit the website, as well as a unique identifier that identifies the website operator, in other words the Google Analytics account ID of the website operator,
*   Address and HTML title of the website,
*   Information on browser, operating system, screen resolution, language settings, as well as the date and time the website was accessed by the data subject,
*   The data subject’s IP address. Here, the DPA notes that the anonymization process is carried out on Google’s servers. In other words, the IP address was transferred to Google before it was anonymized.

The DPA notes that as these unique identifiers were set with the specific purpose to differentiate individuals, where differentiation was not possible before, they contribute to making the individual identifiable. They also refer to the findings of the Austrian DPA in a similar case, also referring to a decision by the European Data Protection Supervisor, that these Google Analytics identifiers in principle qualify as personal data.

The IP address and cookie identifiers were combined with, inter alia, the address of the specific website the data subject visited, the time and date of the website visit, as well as metadata about the browser and operating system, and the combination of settings and parameters of the browser and the operating system may sometimes be sufficiently unique to lead to so-called device fingerprinting.

Consequently, the DPA found that both the controller and Google had several elements that combined could enable them to single out visitors on the website where Google Analytics was implemented. Taking all of this into account, the DPA held that the data in question was to be regarded as personal data within the meaning of [Article 4(1) GDPR](/index.php?title=Article_4_GDPR#1 "Article 4 GDPR").

#### The second question

The DPA held that the controller was not able to demonstrate whether the personal data of the data subject had been transferred to the US or not, as this appeared to depend on factors such as their location and, presumably, internet traffic conditions at the time. The controller's statements suggested that at least for some website visitors in the EEA, their personal data was transferred to a Google server outside the EEA, including in the US. Furthermore, Google’s statements suggested that regardless of which Google server the Google Analytics data was sent to from the website, Google acting as the processor would transfer Google Analytics data to the US or make the data available from the US in the context of their processing on the controller's behalf.

As a result, the DPA found that the controller had _most likely_, in the context of their implementation of Google Analytics on the website, transferred personal data to the US.

#### The third question

The DPA referred to the CJEU explicitly finding that a transfer based on SCCs to companies that fall under FISA 702 violate Chapter V if appropriate supplementary measures are not in place. Although the controller claiming that supplementary measures were in place, the DPA notes that it is clear that those measures do not prevent Google from having clear text access to the personal data in question. The DPA further notes that this presumption can of course be rebutted if it is shown that there is no reason to believe that FISA 702 applies to those personal data in practice. In this regard, the controller argued that it would not be possible for Google to provide US intelligence services with access to the IP addresses of visitors to the website prior to anonymization.

However, the DPA referred to their assessment showing that the scope of the personal data processed was wider than just the IP addresses. Even if it indeed should be the case that FISA 702 did not apply to the IP address in practice, the remaining information about visitors to the website, which constitutes personal data, would presumably still be in scope of FISA 702 in practice. Therefore, the DPA found that the controller's transfer of personal data undermined the level of protection that is guaranteed pursuant to [Article 44 GDPR](/index.php?title=Article_44_GDPR "Article 44 GDPR").

#### Conclusion

Based on the above, the DPA found that personal data of visitors to the controller's website was processed in the context of Google Analytics, that those personal data were transferred to the US, and that this transfer infringed Chapter V GDPR.

## Comment

_Share your comments here!_

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Norwegian original. Please refer to the Norwegian original for more details.

```
Notice of decision in the Google Analytics case

The Norwegian Data Protection Authority's preliminary conclusion is that the use of Google Analytics is not in line with the Personal Data Protection Regulation. The parties in the cases are given the opportunity to comment on the case before we make a formal decision.

The organization noyb has lodged a complaint against a number of European websites to the data supervisory authorities in the EEA. The background is that noyb believes the websites transfer personal data out of the EEA in violation of the Personal Data Protection Regulation (GDPR) by using the American analysis tool Google Analytics.

One of the complained websites, telenor.com, is Norwegian and previously used Google Analytics. The Norwegian Data Protection Authority has therefore investigated this matter. Our preliminary conclusion is that the use of Google Analytics was in breach of the GDPR's transfer rules. We have now sent an advance notice to the parties in the case, so that they have the opportunity to comment on the findings before we make a decision.

European coordination

Since there have been so many complaints about the use of Google Analytics at the European level, the European Data Protection Board (EDPB) has set up a separate working group to coordinate the handling of complaints. The data supervisory authorities have a duty to interpret the GDPR in the same way throughout the EEA.

- The EDPB does a good job in ensuring that the supervisory authorities apply the law in a harmonized way. When it comes to the use of Google Analytics, a clear European consensus has emerged, says section manager Tobias Judin in the Norwegian Data Protection Authority.

The data supervisory authorities in Austria, France and Italy, as well as the data supervisory authority for the EU bodies (EDPS), have already decided that the use of Google Analytics is in breach of the privacy rules. Moreover, the Danish Data Protection Authority draws the same conclusion in a guide on the topic, and the data supervisory authority in Liechtenstein has also commented critically on the tool.

Further process

The next step in the case is that the parties are given three weeks to comment on our preliminary conclusions. The Norwegian Data Protection Authority must then decide on any input we receive.

This case is so-called cross-border. This means that before we can make a decision, we must send a draft decision to other affected data supervisory authorities in the EEA. They then have the right to raise objections within one month if they disagree with our assessments.

It is only after this that the Norwegian Data Protection Authority will make a decision on the matter.

What about Google Analytics now?

If the Norwegian Data Protection Authority makes a decision that the website's use of Google Analytics was in breach of the GDPR, this could also have consequences for other Norwegian websites. Therefore, we reiterate our recommendation to explore alternatives to Google Analytics. We will provide more detailed information about what applies and what our expectations are for Norwegian websites when a decision has been made. This may not come until the end of April at the earliest.

Google Analytics 3 or 4?

At the time of the complaint, the website in question was using Google Analytics 3, and we have therefore taken this as a starting point for the assessment. We have received several questions about whether, hypothetically speaking, we would move towards a different conclusion with Google Analytics 4. The Norwegian Data Protection Authority has not taken a position on this in the specific case, but as far as we can see, Google Analytics 4 will not necessarily correct those problems we have so far identified. In this context, it may be useful to refer to the Danish Data Protection Authority's guidance, which states exactly this (datatilsynet.dk).

Contact person

Tobias Judin

Tobias Judin

section manager, international section

Office: E-mail:

Published: 01/03/2023

Last modified: 02.03.2023

```

Retrieved from "[https://gdprhub.eu/index.php?title=Datatilsynet\_(Norway)\_-\_20/03771&oldid=31524](https://gdprhub.eu/index.php?title=Datatilsynet_\(Norway\)_-_20/03771&oldid=31524)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Datatilsynet (Norway)](/index.php?title=Category:Datatilsynet_\(Norway\) "Category:Datatilsynet (Norway)")
*   [Norway](/index.php?title=Category:Norway "Category:Norway")
*   [Article 4(16)(a) GDPR](/index.php?title=Category:Article_4\(16\)\(a\)_GDPR "Category:Article 4(16)(a) GDPR")
*   [Article 4(23)(b) GDPR](/index.php?title=Category:Article_4\(23\)\(b\)_GDPR "Category:Article 4(23)(b) GDPR")
*   [Article 44 GDPR](/index.php?title=Category:Article_44_GDPR "Category:Article 44 GDPR")
*   [Article 46(2)(c) GDPR](/index.php?title=Category:Article_46\(2\)\(c\)_GDPR "Category:Article 46(2)(c) GDPR")
*   [Article 56(1) GDPR](/index.php?title=Category:Article_56\(1\)_GDPR "Category:Article 56(1) GDPR")
*   [Article 58(2)(b) GDPR](/index.php?title=Category:Article_58\(2\)\(b\)_GDPR "Category:Article 58(2)(b) GDPR")
*   [Article 60(3) GDPR](/index.php?title=Category:Article_60\(3\)_GDPR "Category:Article 60(3) GDPR")
*   [Article 80(1) GDPR](/index.php?title=Category:Article_80\(1\)_GDPR "Category:Article 80(1) GDPR")
*   [2023](/index.php?title=Category:2023 "Category:2023")
*   [Norwegian](/index.php?title=Category:Norwegian "Category:Norwegian")

This page was last edited on 7 March 2023, at 18:58.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)