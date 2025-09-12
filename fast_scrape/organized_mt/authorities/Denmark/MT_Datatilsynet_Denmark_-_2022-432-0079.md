# Datatilsynet (Denmark) - 2022-432-0079

## Case Information

**Authority:** Datatilsynet (Denmark)

**Jurisdiction:** Denmark

**Relevant Law:** Article 32(1) GDPR

**Type:** Investigation

**Outcome:** Violation Found

**Decided:** 23.06.2023

**Fine:** n/a

**Parties:** Digitaliseringsstyrelsen (Agency for Digital Government)

**National Case Number/Name:** 2022-432-0079

**European Case Law Identifier:** n/a

**Appeal:** Unknown

**Original Language(s):** Danish

**Original Source:** Datatilsynet (Denmark) (in DA)

**Initial Contributor:** n/a

Due to an error within a digital identity solution used nationwide, several citizens accidentally gained access to bank accounts of another person. The Danish DPA held that only recommending and not requiring a mandatory validation of tokens for the safe use, which would eliminate the error, the solution violated [Article 32 GDPR.](/index.php?title=Article_32_GDPR "Article 32 GDPR")

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

Several Danish citizens had discovered that by logging into their online bank via [MitID](https://en.digst.dk/systems/mitid/) - a digital identity solution - they gained access to other citizens' accounts. Three different banks that were using the MitID solution within their online banking services each reported a data security breach to the Danish DPA.

Following the reports from the banks, the Danish DPA initiated an investigation on the matter.

The MitID solution is owned in a joint partnership between the financial sector and the public sector, specifically the Digitalisation Agency. The Digitalisation Agency is the data controller for the processing of personal data in MitID.

When the 'MitID' solution is used and it has verified that the user who wants to log in to a service is who they claim to be, an authentication response is generated which is then sent to a broker (the company that conveys the authentication response - in this case the Signaturgruppen, the data controller for the broker solution). The broker forwards the information to the service provider whose service the user wishes to access (which in this case were the banks in question).

According to the Digitalisation Agency, the error was found to be due to the fact that login requests to the same online bank within milliseconds could in special cause MitID to issue a token for another session. This error could have been avoided if the broker (Signaturgruppen) had validated the citizens' login with a technology called ”Broker Security Context”. The Digitalisation Agency had recommended to the brokers implementing the solution to perform the Broker Security Context, but had not made it a requirement.

Signaturgruppen were recommended by the The Digital Agency to perform validation of the tokens that are generated in connection to the log in requests which the brokers receive from MitID. Nevertheless, Signaturgruppen had used the Broker Security Context in a different way than what was described in the recommendation.

### Holding

It follows from [Article 32(1) GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR") that controller must take appropriate technical and organisational measures to ensure a level of security appropriate to the risks involved in the controller's processing of personal data.

In this particular case the DPA found that there is a significant risk to the rights of the data subjects when the solution is used as a nationwide authentication service. The DPA further emphasised that the primary purpose of which is to validate the identification of individuals with a view to providing access to only information to which the person is entitled to access, including personal data, and which is used as a digital ID for a number of central private and public self-service solutions.

According to the DPA [Article 32 GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR") will normally mean that a provider for a technical log in solution (here MitID) which suppliers of such solution (here brokers) must integrate with, must ensure that the necessary instructions for the implementation of measures for a safe use of the solution, are communicated to the respective suppliers.

Furthermore, Article 32 GDPR will normally mean that as controller and the broker for a technical log in solution (here MitID) the controller must ensure correct implementation of the recommended security measures in order to avoid accidental access to personal data by unauthorised persons.

Consequently, the DPA held that because The Digital Agency had not made the validation of the tokens a **mandatory** requirement for the brokers for safe use of the solution, it had not taken appropriate organisational and technical measures pursuant to [Article 32(1) GDPR](/index.php?title=Article_32_GDPR "Article 32 GDPR") to ensure a level of security suitable for the risks that is for the controller's processing.

Furthermore, regarding Signaturegruppen the DPA found that they violated Article 32 GDPR as Signaturegruppen had not implemented the security measure (Broker Security Context) recommended to it with a sufficiently high entropy.

Against this background, the DPA expressed serious criticism of both the Digitalization Agency and the Signaturgruppen.

## Comment

In Denmark, GDPR fines are imposed by the courts. The Danish DPA can recommend to impose fines on both private actors and public authorities. Before notifying the case to the police, the DPA assesses the amount of the fine, and it is then up to the police and the prosecution to bring charges and conduct the criminal case court. In this case, the DPA did not propose a fine on the controller.

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Danish original. Please refer to the Danish original for more details.

```
Serious criticism of the Digital Agency for insufficient security at MitID

Date: 23-06-2023

Decision Public authorities Serious criticism Reported breach of personal data security Supervision / proprietary case Processing security Unauthorized access Risk assessment and impact analysis

The Danish Data Protection Authority expresses serious criticism of both the Digitalization Agency and the Signaturgruppen in a case where both parties were jointly responsible for insufficient security in connection with logging in with MitID.

Journal number: 2022-432-0079

Summary

In January 2022, several citizens discovered that by logging into their online bank via MitID, they gained access to other citizens' accounts. This was reported to the Danish Data Protection Authority as a breach of personal data security by three financial institutions. This led the Danish Data Protection Authority to take up a case on its own initiative to investigate the underlying problem.

The error was found to be due to the fact that login requests to the same online bank within milliseconds could in special cases cause MitID to issue a so-called token for another session. This error could have been avoided if the broker (the company that conveys the authentication response - in this case the Signature Group) had validated the citizens' login with a technology called Broker Security Context. The Digital Agency, which is the data controller for MitID, had recommended this, but not made it a requirement.

But it should have been a requirement, the Danish Data Protection Authority assesses in the decision - and concludes that the Digital Agency has not had sufficient measures to achieve a level of security that suits the risks to citizens. At the same time, the Danish Data Protection Authority is of the opinion that the Signaturgruppen, as the data controller for the broker solution, also did not have appropriate security measures, because they used the Broker Security Context in a different way than described in the recommendation.

Against this background, the Danish Data Protection Authority expresses serious criticism of both the Digitalization Agency (below) and the Signaturgruppen.

Decision

On 6 January 2022, the Danish Data Protection Authority received notifications from three financial institutions about identical breaches of personal data security.

From the reports, it appears that the banks have been informed by their data processor BEC that a number of customers have gained access to other customers' accounts when the customers have logged on to their online bank with MitID. The reports also show that BEC has stated that there is a concurrency error regarding the token issued by MitID in connection with the customers' access to the online banks.

On 14 January 2022, the Danish Data Protection Authority requested the Danish Agency for Digitalisation for further information about the incident, including to answer a number of questions. On 10 February 2022, the Danish Digital Agency forwarded further information to the Danish Data Protection Authority.

On 25 April 2022, the Norwegian Data Protection Authority sent a request for additional information to the Digital Agency. On 30 May 2022, the Digital Agency came forward with such additional information.

1. Decision

After a review of the case, the Danish Data Protection Authority finds that there are grounds for expressing serious criticism that the Digital Agency's processing of personal data has not taken place in accordance with the rules in the data protection regulation\[1\] article 32, subsection 1.

Below follows a closer review of the case and a rationale for the Data Protection Authority's decision.

It is noted that the inspection also d.d. has made a decision vis-à-vis the Signature Group. The Danish Data Protection Authority found grounds for expressing serious criticism that the Signature Group's processing of personal data had not taken place in accordance with the rules in the Data Protection Regulation, Article 32, subsection 1, as the Danish Data Protection Authority found that the Signature Group had not implemented a security measure recommended by MitID in NeB Broker with a sufficiently high entropy. The Danish Data Protection Authority is of the opinion that the requirement cf. Article 32 for adequate security will normally mean that as data controller and broker for a technical logon solution where personal data is processed, here MitID, you ensure correct implementation of recommended security measures in order to avoid accidental access to personal data by unauthorized persons. The Danish Data Protection Authority finds that there is a heightened risk profile when the logon solution provides access to an online banking solution.

2. Case presentation

It appears from the case that MitID is a digital identity solution and replaces NemID. The MitID solution is owned in a joint partnership between the financial sector (FR1) and the public sector (Digitalisation Agency). FR1 and the Digital Agency have together established a joint operating organization called MitID DFO consisting of employees from both the public sector (the Digital Agency) and the financial sector (e-net). E-netnett represents the financial sector as the financial sector's joint IT development and operating company, and is owned by all money and mortgage credit institutions in Denmark. It also appears that the Digital Agency is the data controller for the processing of personal data in MitID.

The Digital Agency has stated that in order for a service provider to receive authentications from MitID, the service provider must have entered into an agreement with a broker. When the MitID core has verified that the user who wants to log in to a service is who the user pretends to be, an authentication response is created that contains information about e.g. name, date of birth and risk data. The authentication response is sent to the broker of the service provider whose service the user wishes to access. The broker becomes the independent data controller for the response received. The broker forwards the received response to its service provider, possibly enriched with data that the broker himself possesses. Upon receipt of the authentication response, the service provider becomes the independent data controller for the data received. It is the broker who has the technical connection to the MitID solution. The service providers in this case are the three banks, which are thus independently responsible for data when they receive the authentication response from their broker and allow access to their respective online banks. It is against this background that the three banks have made the reports to the Danish Data Protection Authority.

According to the Danish Agency for Digitalisation, MitID DFO became aware on 3 January 2022 of the incident that a bank customer had gained access to another bank customer's online banking on 3 January 2022, which is due to two identical JWT tokens being issued. MitID DFO immediately followed up with the supplier Nets, and a hotfix was initiated, which was implemented the same evening, which solved the problem. The following day, MitID DFO was informed that three other incidents had been found where a bank customer had unauthorized access to another bank customer's online banking. MitID DFO then followed up again with Nets, and on 10 January 2022 an update of the description regarding the implementation and validation of MitID authentication, which the brokers carry out on behalf of the service providers, was issued. In the update, validation of the context around the returned JWT token was made mandatory, where before this validation was only a recommendation to the brokers.

The Danish Digital Agency has stated about the cause of the error that an error in the MitID core, which generates a JWT token in response to a logon request, had a race condition, where the token was generated in exceptional cases based on data related to another session, if the login requests for the same online bank hit the same microservice/pod in the MitID infrastructure within a few milliseconds. A JWT token filled with data related to another session could be returned to the MitID broker.

For the brokers, it has been a recommendation that they should perform validation of the JWT tokens that the brokers received from the MitID core (Broker Security Context). However, according to the Danish Agency for Digitalisation, the validation was a recommendation and not a definite requirement. BEC and Nets themselves had not performed the validation. BEC uses the Signature Group as an eID broker, and the Signature Group is owned by Nets and is Nets' own eID broker.

After the incident, on January 10, 2022, material was sent out to the brokers with information that it is being made a requirement that the brokers implement and perform validation based on the Broker Security Context, as well as guidance on how to do this. Requirements for the use of high-entropy Broker Security Contexts were also introduced. The requirement for a forced implementation of the high-entropy Broker Security Context was identified and recommended by the vendor as an additional measure to ensure that brokers can detect any errors in base software from the MitID solution for which the vendor is not responsible, as well as any errors in the brokers' own implementations. The Digital Agency has stated that the agency chose to follow the supplier's recommendation to make the requirement for implementation of Broker Security Context (with high entropy) mandatory for all brokers, after which a so-called security advisory was issued to all connected brokers.

According to the Danish Agency for Digitalisation, the MitID core has been exposed to extensive test procedures covering e.g. load/performance/stresstests, but these test runs did not explicitly validate the returned JWT tokens to a sufficient extent, which has now been fixed.

3. Reason for the Data Protection Authority's decision

On the basis of the information in the case, the Danish Data Protection Authority assumes that the Digital Agency, as the data controller for MitID, instructs brokers on how they implement services up to MitID. It is further assumed that the Digital Agency had not made the use of Broker Security Context mandatory, but only recommended this.

3.1. Article 32 of the Data Protection Regulation

It follows from the data protection regulation article 32, subsection 1, that the data controller must take appropriate technical and organizational measures to ensure a level of security appropriate to the risks involved in the data controller's processing of personal data.

The data controller thus has a duty to identify the risks that the data controller's processing poses to the data subjects and to ensure that appropriate security measures are introduced to protect the data subjects against these risks.

The Danish Data Protection Authority is of the opinion that the requirement cf. Article 32 for adequate security will normally mean that as the data controller for a technical logon solution, here MitID, which suppliers must integrate with, ensures that the necessary instructions for the implementation of measures with a view to on safe use of the solution, is communicated to the respective suppliers and reflects the risk scenarios involved in the treatments.

Furthermore, the Danish Data Protection Authority is of the opinion that there is a significant risk to the rights of the data subjects when the solution at national level is used as an authentication service for a large number of personal data about the data subject, and provides access to carry out transactions with legal force and to unambiguous, irrefutable identification in a plurality of systems.

Against this background, the Danish Data Protection Authority finds that the Danish Digital Agency - by not having made the Broker Security Context validation mandatory for the brokers until after 10 January 2022 - has not taken appropriate organizational and technical measures to ensure a level of security suitable for the risks that is for the Digitalization Agency's processing of personal data, cf. the data protection regulation, article 32, subsection 1.

After a review of the case, the Danish Data Protection Authority finds that there are grounds for expressing serious criticism that the Digital Agency's processing of personal data has not taken place in accordance with the rules in the Data Protection Regulation, Article 32, subsection 1.

When choosing a response, the Danish Data Protection Authority has emphasized that the breach has resulted in accidental access to personal data, at least regarding financial matters, and that this access has probably entailed a not inconsiderable risk to the rights or freedoms of the data subjects. The supervisory authority has further emphasized that this is a nationwide solution, the primary purpose of which is to validate the identification of individuals with a view to providing access to only the information to which the person is entitled to access, including personal data, and which is used as a digital ID for a number of central private and public self-service solutions, etc. In addition, the Danish Data Protection Authority has attached importance to the fact that, after the incident, the Digital Agency has made the security measures in the Broker Security Context, which prevent identical tokens from giving unauthorized access to services, mandatory for all brokers.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons in connection with the processing of personal data and on the free exchange of such data and on the repeal of Directive 95/46/EC (general regulation on data protection).

```

Retrieved from "[https://gdprhub.eu/index.php?title=Datatilsynet\_(Denmark)\_-\_2022-432-0079&oldid=33895](https://gdprhub.eu/index.php?title=Datatilsynet_\(Denmark\)_-_2022-432-0079&oldid=33895)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Datatilsynet (Denmark)](/index.php?title=Category:Datatilsynet_\(Denmark\) "Category:Datatilsynet (Denmark)")
*   [Denmark](/index.php?title=Category:Denmark "Category:Denmark")
*   [Article 32(1) GDPR](/index.php?title=Category:Article_32\(1\)_GDPR "Category:Article 32(1) GDPR")
*   [2023](/index.php?title=Category:2023 "Category:2023")
*   [Danish](/index.php?title=Category:Danish "Category:Danish")

This page was last edited on 5 July 2023, at 22:52.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)