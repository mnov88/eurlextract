Notification of decision on violation fee - Notification of deviation - NORWEGIAN SPORTS ASSOCIATION AND OLYMPIC AND PARALYMPIC COMMITTEE
We refer to previous correspondence in the case, most recently by the Norwegian Sports Confederation (hereinafter «NIF») sending a report from Orange Cyberdefense on the deviation on 30 June 2020.
1. Notice of Infringement Fee
This is a prior notice, cf. the Public Administration Act § 16, that the Danish Data Protection Agency will make the following decision:
Pursuant to Article 58 (2) (2) of the Privacy Ordinance, the Norwegian Sports Confederation and the Olympic and Paralympic Committee, org. No. 947 975 072, to pay an infringement fee to the Treasury of 2 500 000 - two million five hundred thousand - kroner for violation of the Privacy Regulation Article 5 No. 1 letter a, c and f, Article 6 and Article 32.
2. Details of the facts of the case
Below, we will reproduce the facts in the case as stated in the non-conformance report, NIF's response to the requirement for a statement on 28 February 2020, Skype meeting with the Data Inspectorate on 4 May 2020, NIF's response to the requirement for a new statement on 25 May 2020 Cyber defense of June 3, 2020.
NIF's work with the transition from on-premise solution to cloud solution
An IT committee appointed by the Sports Board prepared a report in 2016 that laid down guidelines for all development and operation to the greatest possible extent through the use of standard components and based on
Postal address: Office address: Telephone: Fax: Org.nr: Website: Postboks 458 Sentrum Tollbugt 3 22 39 69 00 22 42 23 50 974 761 467 www.datatilsynet.no 0105 OSLO
 
cloud services. It was decided that NIF would build a new digital platform based on Microsoft's cloud services.
Following a tender round, a collaboration was entered into with Albatross IT Consultant AS, which had particular expertise in Microsoft's solutions. A plan was established for a gradual transition from solutions in NIF's own data center to services established using Microsoft Azure. An assessment of privacy consequences (DPIA) was not carried out as described in Article 35 of the Privacy Ordinance, as NIF did not consider that such a transfer to Azure in itself triggered an obligation to make a DPIA.
About the discrepancy
On 20 December 2019, the Norwegian Data Protection Authority received a deviation report from NIF. The non-conformance report stated that NIF received an inquiry from the National Cyber Security Center (NCSC-NO) on 18.12.19 regarding an extract from the sport's member database which was available without access control at a public IP address. By entering via a URL, it was possible to search for people in the database that contains 3.2 million entries. This was discovered as part of a routine scan of Irish IP addresses conducted by the Irish National Cyber Security Center (CSIRT-IE). CSIRT-IE notified NCSC-NO of the discovery, which in turn notified NIF.
The discrepancy arose in connection with the transfer of resources from an on-premise solution to Azure, and related to the testing of a service in Azure called Elasticsearch. Elasticsearch was used in connection with testing a possible solution for third-party suppliers of membership systems for Norwegian sports, in order to enable verification of persons against the sports' central database. Elasticsearch contains a product called Kibana, which runs on a port that is not open via NIF's network and onto the Internet.
In connection with the establishment of the test solution, it was considered that there was a need to test real personal information, and that one had to have a significant scope to get a real test of the solution. For this solution to work, it was considered important to ensure the integrity of information, and to have the most realistic communication test possible. It was also considered that it was time-critical to have the solution tested. Based on these assessments, it was concluded that the best solution was to use real data, and NIF extracted a significant part of the sport's central database.
NIF acknowledges that this assessment was not correct, and that a job was started with extraction of the sport's central database for cache without sufficient risk assessments or assessments of whether it was possible to use deidentified or a more limited selection of data. in this work. At the time of the incident, no operating routines or technical safety solutions related to the new cloud-based environment had been established, as the cloud-based environment was not in production at this time.
The application was not set up with any authentication mechanism, and an error was made which resulted in the establishment of a public IP address. Elasticsearch and Kibana were rejected shortly after, and NIF went ahead with another solution. It was decided to postpone the deletion of the content in the test environment until a later date. NIF had established
  2

 this did not include Elasticsearch and Kibana. NIF thus did not discover that the information was open
available.
NIF revealed that the access had been open for 87 days, and immediately initiated measures to stop the access. The affected are members, volunteers and other people with connections to Norwegian sports, a total of approx. 3.2 million people. Of these, 486,447 were minors, divided between the ages of 3-17 years.
The service used did not initially expose the data for download, but allowed for single searches. Kibana also offers the possibility of "fuzzy search", which means that mass search is possible. In order to be able to conduct mass searches, for example search for all members at a post office or in a club, there was still a need for special knowledge
The solution was also not covered by open indexing solutions, and one thus had to either know the IP
address or do more targeted searches to find the service.
The categories of personal information that were exposed as a result of the discrepancy were name, date of birth, gender, address, e-mail, telephone number and club affiliation. Persons with the strictly confidential address (code 6) or confidential address (code 7) were not part of the extract that was exposed.
NIF has no indication that anyone other than the Irish and Norwegian security authorities has conducted a search. However, Elastic Search and Kibana had not established access logs as this was only a trail version, and due to this it can not be ruled out that a data breach has taken place.
Based on this, NIF considers it unlikely that anyone other than the Irish and Norwegian security authorities have conducted a search.
The purpose of the Orange Cyberdefense investigation was to find out whether the personal data has been used criminally, and found no indications of this. However, the investigation had its limitations, and can only find personal information for sale that is advertised on the market or forum, but for example not what is sold through private messages between forum members. The investigation also took place between 21 May and 2 June, and does not capture personal data for sale that is advertised on the market or forum before this time, and which has left no trace.
The report from Orange Cyberdefense emphasizes that there are several types of tools that monitor database leaks, and which can automatically find cases of Elasticseach and Kibana that are exposed online. However, this does not mean that all cases of exposed databases will be
   3

found and exploited. Furthermore, an exposed database can be found and exploited without the attacker trying to sell the information.
Summary and NIF's further work with cloud solutions
NIF acknowledges that at the time of the incident you had not established good enough security solutions and routines related to the new cloud-based environment. No separate routines for test data were established in the cloud-based environment at the time of the incident. The testing of the service that exposed the data was not planned to be used in the cloud-based environment, and was therefore not covered by the security assessments made at this time.
In the time since the incident, NIF has worked extensively to revise and improve existing operating routines, as well as establish new routines where needed. NIF has tightened requirements for risk assessments to be carried out, and for these to be documented in advance of changes.
The incident has also revealed a need to improve NIF's routines for handling test data, where NIF will to a greater extent than before use synthetic test data. NIF writes that it has been difficult to make changes to the old on-premise solutions, especially due to the fact that a lot of business logic has been in the database. NIF needs to carry out thorough tests on a large volume of data due to the complexity of building up Norwegian sports, and that you have sports teams in all municipalities and towns in Norway. NIF is now working to establish new test environments where all testing is synthetic data, and with a more limited number of information categories.
3. More about the requirements of the Personal Data Act
The basic principles for the processing of personal data
The basic principles for the processing of personal data follow from Article 5 (1) of the Privacy Regulation. We refer to Article 5 (1) (a), (b), (c) and (f):
«1. Personal information must (...)
(a) be treated in a lawful, equitable and transparent manner with respect to the data subject ("legality, fairness and transparency");
b) collected for specific, expressly stated and justified purposes and not further processed in a manner incompatible with those purposes (...) ("purpose limitation");
c) be adequate, relevant and limited to what is necessary for the purposes for which they are processed ("data minimization"), (...)
f) processed in a manner that ensures adequate security of personal data, including protection against unauthorized or illegal processing
   4

(...) through the use of appropriate technical or organizational measures ("integrity and confidentiality") ".
The data controller is responsible and must be able to demonstrate that the principles are complied with, cf. Article 5 (2).
Legal basis for the processing of personal data
All processing of personal data must have a legal basis in Article 6 in order to be lawful. We refer here to the alternative legal bases in Article 6, paragraph 1, letters b) and f), as well as paragraph 4 on further processing:
«1. The treatment is only legal if and to the extent that at least one of the following conditions is met: (...)
b) the processing is necessary to fulfill an agreement to which the data subject is a party (...)
f) processing is necessary for purposes related to the legitimate interests pursued by the controller or a third party, unless the data subject's interests or fundamental rights and freedoms take precedence and require the protection of personal data, in particular if the data subject is a child. (...)
4. If the processing for a purpose other than that for which the personal data have been collected is not based on the data subject's consent or on Union law or the national law of the Member States which constitutes a necessary and proportionate measure in a democratic society to ensure the attainment of the objectives Article 23 (1), the controller shall, in order to determine whether the processing for another purpose is compatible with the purpose for which the personal data were originally collected, take into account, inter alia:
a) any connection between the purposes for which the personal data has been collected and the purposes of the intended further processing,
b) the context in which the personal data has been collected, in particular with regard to the relationship between the data subject and the data controller;
(c) the nature of the personal data, in particular whether special categories of personal data are processed, in accordance with Article 9, or whether personal data on criminal convictions and offenses are processed, in accordance with Article 10;
d) the possible consequences of the intended further processing for the data subjects,
 5

(e) whether there are necessary guarantees, which may include encryption or pseudonymisation »
Safety during treatment
The requirements for personal data security are further regulated in Article 32. It follows:
«1. Taking into account the technical development, the implementation costs and the nature, scope, purpose and context of the treatment, as well as the risks of varying degrees of probability and severity for natural persons' rights and freedoms, the data controller and data processor shall implement appropriate technical and organizational measures for to achieve a level of safety that is suitable with regard to the risk, including, among other things, depending on what is suitable, (...)
a) pseudonymisation and encryption of personal data,
b) ability to ensure lasting confidentiality, integrity, availability and robustness in the treatment systems and services, (...)
d) a process for regular testing, analysis and assessment of how effective the treatment's technical and organizational security measures are.
2. In assessing the appropriate level of security, special consideration shall be given to the risks associated with the processing, in particular as a result of (...) unauthorized disclosure of or access to personal data transferred, stored or otherwise processed ».
4. The Data Inspectorate's assessment
4.1.Legal basis for processing and the principles of legality and data minimization - Article 6 and Article 5 (1) (a) and (c)
The purpose of the processing of personal data
It follows from the privacy statement of NIF that you process personal information about members that is necessary for membership and activity in sports, and that registration of member information is a prerequisite for membership in Norwegian sports. The Data Inspectorate thus assumes that the necessary member administration is the purpose of NIF's processing of personal data about members of Norwegian sports, and that NIF has a legal basis in Article 6 no. 1 letter b for this processing.
It follows from Article 5 (1) (b) of the Privacy Regulation that personal data shall only be processed for specific, explicitly stated and justified purposes, and the purpose must be determined before the processing of personal data is commenced.
  6

It is not specifically and explicitly stated in the information from NIF to the data subjects that personal data will be used to test new possible solutions for member administration to investigate whether these are appropriate to use.
The Data Inspectorate first assesses whether the processing of personal data for the purpose of testing new possible cloud solutions for member administration is covered by the original purpose for which the personal data of NIF's members was processed - processing for the stated purpose of necessary member administration for participation in Norwegian sports.
The use of the personal data of members of Norwegian sports for testing new possible solutions for member administration is not in isolation necessary to facilitate the individual member's participation in sports. Testing of new cloud solutions thus differs in nature from the purpose of the necessary member administration to enable participation in Norwegian sports. This applies even if the solutions to be tested are also linked to member administration.
In light of the requirement that the purpose must be specific and explicitly stated, the Data Inspectorate considers the processing of personal data for the purpose of testing new possible cloud solutions for member administration is not covered by the original purpose of necessary member administration for participation in Norwegian sports.
Processing of the personal data of members of Norwegian sports for the purpose of testing new possible cloud solutions for member administration is thus a new purpose.
Assessment of whether there was a legal basis for the processing of personal data
For the processing of personal data for a purpose other than that for which the personal data was collected, there are two cumulative requirements in the Privacy Ordinance.
First, as with any processing of personal data, it is required that the processing has a legal basis in Article 6 (1) in order to be lawful.
In addition, it is required that the new purpose of the processing of personal data is compatible with the purpose for which the personal data was collected, cf. Article 6 no. 4. There is an exception to this condition if the new processing is based on the data subject's consent or is based on law, but it is clear that this exception does not apply in this case.
The Data Inspectorate first assesses whether NIF had a legal basis under Article 6 (1) for processing a number of categories of personal data to 3.2 million members of Norwegian sports for the purpose of testing new possible cloud solutions for member administration.
The Norwegian Data Protection Authority has asked NIF what legal basis under Article 6 you had for processing the members' personal data in connection with testing the new cloud solution in both our requirements for statements of 10 February 2020 and 24 March 2020, respectively. NIF has not referred to anything legal basis for this processing of personal data in some of their responses, and the Data Inspectorate thus assumes that it was never assessed whether there was a legal basis for the relevant processing of
 7

personal information. The Norwegian Data Protection Authority will nevertheless make an independent assessment of the basis for processing.
The Data Inspectorate first assesses whether NIF has a legal basis in accordance with Article 6, No. 1, letter b, for the relevant processing of personal data, as this is the legal basis that is apparently assumed in NIF's privacy statement. For the sake of order, the Data Inspectorate points out that the Privacy Ordinance, Article 13, paragraph 1, letter c, requires that information be provided about the legal basis for the processing.
It follows from Article 6 (1) (b) that the processing must be "necessary" to fulfill an agreement to which the data subject is a party. It must therefore be considered whether it was necessary to fulfill a number of categories in order to fulfill the agreement between the members and NIF. of personal data to 3.2 million members of Norwegian sports for testing new possible cloud solutions for member administration.
The data controller must make specific assessments of which personal data it is necessary to process in connection with each individual purpose. With the support of the rulings of the European Court of Justice, the Privacy Council (EDPB) has in its guidelines for Article 6 no. 1 letter b related to online services, pointed out that in the assessment of necessity it must be considered whether
1 purpose can be achieved by minimizing privacy interventions. This corresponds to that
follows from advocacy clause 39 in the Privacy Ordinance. If there are realistic, less invasive alternatives, the treatment is not "necessary".
Furthermore, the Privacy Council states that the data controller may only use "necessary to fulfill an agreement to which the data subject is a party" if the relevant processing of personal data is objectively and genuinely necessary for the fulfillment of the specific agreement. Article 6 (1) (b) thus does not cover treatment which is useful to it
2
In connection with the testing of the cloud solution, NIF decided to use a number of categories of personal data of 3.2 million people from their central database. NIF acknowledges that insufficient assessments were made of whether it was possible to use deidentified or a more limited sample of data in this work, and that this decision that was made was not correct. NIF has since worked to improve their routines for handling test data, and is now working to establish new test environments
synthetic data, and with a more limited number of information categories.
The processing of personal data of members of Norwegian sports for testing new possible cloud solutions for member administration is not in isolation necessary to facilitate that the individual member can participate in sports. Thus, it is not relevant either
1 Guidelines 2/2019 on the processing of personal data under Article 6 (1) (b) GDPR in the context of the provision of online services to data subjects, section 25
2 Guidelines 2/2019 sections 25-28
responsible for processing, but which is not objectively necessary to fulfill the agreement.
In some cases, the data controller must consider other treatment bases. The Norwegian Data Protection Authority assumes that these interpretations also apply to the assessment of necessity pursuant to Article 6, paragraph 1, letter b, on a general basis - and not only to online services.
In such
  8

the processing of personal data objectively and genuinely necessary to fulfill the membership agreement with the members of Norwegian sports. For the record, the Data Inspectorate finds it clear that the purpose of testing new possible solutions for member administration could be achieved in less privacy-intrusive ways, including by processing synthetic data - or at least by processing far less personal data.
The Data Inspectorate thus considers that it was not necessary to fulfill the agreement between the members and NIF to process a number of categories of personal data to 3.2 million members of Norwegian sports for testing new cloud solutions for member administration. As the condition of necessity is not met, NIF did not have a legal basis under Article 6 (1) (b) for this relevant processing of personal data.
NIF has not itself stated that Article 6 No. 1 letter f was a relevant legal basis in the case, nor has information been provided about this legal basis to the registered persons pursuant to Article 13 No. 1 letter c, or what legitimate interests may be involved. pursued in accordance with Article 13, No. 1, letter d. The Norwegian Data Protection Authority nevertheless makes an independent assessment of the legal basis under this alternative.
The Data Inspectorate thus assesses whether the processing of a number of categories of personal data to 3.2 million members of Norwegian sports for testing new possible cloud solutions for member administration was necessary for a purpose related to NIF's legitimate interest, and whether this interest took precedence over the data subjects' interests and basic rights and freedoms, cf. the Privacy Ordinance Article 6 No. 1 letter f.
The Data Inspectorate assumes that the purpose of testing new cloud solutions for member administration to assess whether these are appropriate to use is a purpose related to NIF's legitimate interest.
It must then be considered whether the processing of a number of categories of personal data to 3.2 million members of Norwegian sports was "necessary" for the purpose of testing new possible cloud solutions for member administration.
As we have explained in connection with the condition of necessity pursuant to 6 no. 1 letter b, it will also have to be considered for the condition of necessity in Article 6 no. 1 letter f whether the purpose can be achieved in less invasive ways. If there are realistic, less invasive alternatives, treatment is not necessary.
As mentioned above in the assessment of the necessity condition according to 6 no. 1 letter b, the Data Inspectorate finds it clear that the purpose of testing new possible solutions for member administration could be achieved in less privacy-intrusive ways than processing a number of categories of personal data to 3.2 million members of Norwegian sports. The purpose could be achieved by processing synthetic data - or at least through the processing of far less personal data.
The Data Inspectorate does not find it necessary for the case to go specifically into the assessment of whether it was possibly necessary for the purpose to process a much smaller proportion of the relevant
9

the personal data for the purpose of testing new possible cloud solutions for member administration.
As the condition of necessity has not been met, NIF also had no legal basis in Article 6 no. 1 letter f for the processing of a number of categories of personal data to 3.2 million members of Norwegian sports for testing new possible cloud solutions for member administration.
Thus, the processing of personal data in question did not have a legal basis in Article 6 (1), and the processing was illegal.
As the requirement of a legal basis has not been met, the Data Inspectorate does not find it necessary to address the assessment of whether this new purpose was compatible with the purpose for which the personal data of the members of Norwegian sports was collected, cf. Article 6 no. 4 of the Privacy Ordinance.
Assessment of the principle of legality
The principle that a treatment must be lawful pursuant to Article 5 (1) (a) means that it must have a legal basis in the Privacy Regulation. A processing of personal data without a legal basis will automatically be illegal, and thus be contrary to the basic requirement in principle in Article 5, paragraph 1, letter a. As shown above, we find that there was no legal basis for the processing of a number of categories of personal data to 3.2 million members of Norwegian sports for testing new possible cloud solutions for member administration, and the processing is thus contrary to the principle of legality, article 5 no. 1 letter a.
Assessment of the principle of data minimization
The principle of data minimization in Article 5 (1) (c) implies that personal data must be adequate, relevant and limited to what is necessary for the purposes for which they are processed. According to the principle of data minimization, it is not sufficient that it is practical or desirable to process personal data; the treatment must be necessary for the purpose to be achieved. The data controller must make specific assessments of which personal data it is necessary to process in connection with each individual purpose.
As follows from the assessment of the legal basis and the condition of necessity pursuant to Article 6 (1) above, the Data Inspectorate finds that the processing of a number of categories of personal data of 3.2 million persons from the sport's central database is not limited to what is necessary for the purpose of testing of new possible cloud solutions for member administration. The purpose of the relevant processing of personal data could be achieved by using synthetic data, or at least by processing far fewer personal data. The processing was thus also contrary to the principle of data minimization in Article 5, paragraph 1, letter c.
4.2. Security of personal data processing - Article 5 (1) (f) and Article 32
  10

As stated in paragraph 3, Article 5 (f) of the Privacy Regulation requires that personal data be processed in a way that ensures adequate security of personal data, including protection against unauthorized or illegal processing, using appropriate technical or organizational measures. Article 32 requires the controller to take appropriate technical and organizational measures to achieve a level of safety appropriate to the risk.
As is clear from the wording of both provisions, any breach of personal data security does not constitute a breach of Article 5 (1) (f) or Article 32 of the Privacy Regulation. The question is whether the data controller has complied with the obligation to take appropriate technical and organizational measures. to achieve a level of safety appropriate to the risks associated with the treatment.
The appropriate measures and safety level must be based on the assessment made of the risks associated with the treatment, in addition to the technical development, implementation costs and the nature, scope, purpose and context in which the treatment is carried out, cf. Article 32 no. 1 and No. 2.
The Data Inspectorate thus assesses whether NIF implemented appropriate technical and organizational measures to achieve a level of security that was suitable with regard to the risk associated with processing a number of categories of personal data to 3.2 million members of Norwegian sports for testing new cloud solutions for member administration, cf. Article 32 (1).
In this case, it is largely a matter of processing contact information, in addition to information about date of birth and club affiliation. In principle, these are not the categories of personal data with the greatest risks associated with them. However, the scope of processing is enormous, as it involves personal data of approximately 3.2 million
3
Children's personal data also have a special protection under the Privacy Ordinance, cf. the Privacy Ordinance's proposition point 38. When testing the cloud solution, personal data on 486,447 minors were processed, divided between the ages of 3-17 years.
The number of data subjects and the extent of personal data processed, in addition to the extent of personal data on minors registered, suggest that the personal data had a great need for protection, and that the risks associated with any unauthorized disclosure or access to personal data were significant.
It is acknowledged in the statements to NIF that no sufficient or specific risk assessments were made prior to NIF extracting personal data of 3.2 million people from the sport's central database to the cloud-based test environment. The relevant testing was not covered by the risk assessments that had been made in connection with work on cloud solutions at this time. In a document that NIF has submitted from 2018, it is on
people - about 60% of Norway's population.
 3 https://www.ssb.no/befolkning/statistikker/folkemengde/aar-per-1-januar
 11

overall level described a number of risks where the risk level is described as "high" at the transition to the cloud solution, but neither the risk assessments nor the measures outlined in this document were followed up at the time of the incident.
As NIF had not sufficiently or specifically assessed the risk of the treatments in question, you also did not have the prerequisite to identify the specific risks involved in the treatment. Thus, you also did not have the prerequisite to assess which level of safety was suitable with regard to the risk, or which technical and organizational measures were suitable to achieve this level of safety.
Article 32 no. 1 highlights examples of categories of measures that are potentially suitable depending on the processing, and the Data Inspectorate considers that three of these categories of measures could have been suitable in the present case:
a) pseudonymisation and encryption of personal data,
b) ability to ensure lasting confidentiality, integrity, availability and robustness in the treatment systems and services, (...)
d) a process for regular testing, analysis and assessment of how effective the treatment's technical and organizational security measures are.
When it comes to more specific guidelines on technical and organizational measures that can
carried out for such processes, the Norwegian Data Protection Authority refers to the National Security Authority (NSM)
4
«Basic principles for ICT security 2.0», and in particular section 2.1 «Ensure security in
procurement and development processes »5 and the point on« Use of outsourcing and
6
cloud services »in the introduction. NSM's basic principles are rooted in the global
7
At the time of the incident, however, NIF had not established operating routines or technical security solutions related to the new cloud-based environment, as at that time it had not been put into production. There were also no separate routines for test data in the cloud-based environment. NIF has a general norm for the processing of personal data and information security in sports, but the points in this on risk assessment and measures to ensure confidentiality and integrity were not followed up for the relevant processing of personal data. The points about measures in the overall document NIF has submitted from 2018 were also not followed up.
4 https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet-2-0/beskytte-og- opprettholde / ivareta-safety-in-procurement-and-development-processes /
5 https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet-2-0/beskytte-og- opprettholde / ivareta-safety-in-procurement-and-development-processes /
6 https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet-2-0/introduksjon- 1 / bruk-av -jenesterutsetting-og-skytjenester /
7 https://nsm.no/regelverk-og-hjelp/rad-og-anbefalinger/grunnprinsipper-for-ikt-sikkerhet-2-0/stotteprodukter/
the ISO 27002 (Information Security) framework.
        12

In light of this, the Data Inspectorate considers that there have been fundamental shortcomings in the follow-up of the internal management system and information security in the relevant processing of personal data related to testing of cloud solutions for member administration. NIF did not implement appropriate technical and organizational measures to achieve a level of security that is appropriate with regard to the risk associated with the relevant processing of personal data, and there is a breach of the obligations in Article 32 of the Privacy Regulation.
As the assessment of Article 32 above shows, NIF has also not processed personal data in a way that ensured adequate security of the personal data, including protection against unauthorized or illegal processing using appropriate technical or organizational measures. The treatment was thus also in conflict with the principle of confidentiality, cf. Article 5 no. 1 letter f.
5. Infringement fee
5.1. Assessment of whether an infringement fee is to be imposed
Infringement fees are a tool to ensure effective compliance and enforcement of personal data regulations. We believe it is necessary to respond to the infringements, and hereby give notice of the imposition of an infringement fee (cf. Article 83 of the Privacy Ordinance).
In accordance with the Supreme Court's practice (cf. Rt. 2012 page 1556), we assume that infringement fines are to be regarded as punishment under the European Convention on Human Rights, Article 6. A clear balance of probabilities is therefore required for offenses in order to be able to impose a fee.
When assessing whether a fee should be charged and when measuring, the Data Inspectorate shall take into account the elements in the Privacy Ordinance, Article 83, paragraph 2, letters a) to k). The Data Inspectorate may impose a violation fee after a discretionary overall assessment, but the listed factors place guidelines on the exercise of discretion by highlighting factors that are to be given special weight.
Here we will assess the relevant aspects on an ongoing basis.
a) the nature, severity and duration of the infringement, taking into account the nature, scope or purpose of the treatment concerned and the number of data subjects affected, and the extent of the damage they have suffered;
The violation involves a breach of several of the basic principles of the processing of personal data, the basic requirement that all processing of personal data must have a legal basis to be legal, in addition to clear breaches of the requirements for security of processing. The infringement in question involves the processing of a number of categories of personal data of 3.2 million persons without a legal basis, far beyond the processing necessary for the purpose, without adequate risk assessments and in a way that did not safeguard the security of the processing. This must be characterized as a clear deviation from the obligations that follow from the Privacy Ordinance, and these conditions are considered by the Data Inspectorate to be very aggravating circumstances.
13

Of the 3.2 million people exposed, 486,447 minors were aged 3-17. Children are a vulnerable group, and we refer here to the Privacy Ordinance's advocacy point 38, where it is pointed out that children's personal data have a special right to protection. The fact that the violation includes personal information about minors on such a large scale is also considered by the Data Inspectorate to be a very aggravating circumstance.
The personal data was exposed for 87 days, which the Data Inspectorate considers to be a significant period. The fact that NIF had not implemented measures that enabled you to discover that the database was exposed, and that it is unclear whether or when you would have discovered this yourself, is also an aggravating factor.
Although it cannot be ruled out that the personal data has gone astray, the Data Inspectorate considers that there is no clear overriding probability for this. There is thus no clear overriding probability of material or non-material damage slightly beyond the data subjects' sense of losing control of their personal data. The fact that no such specific damage can be proven is a mitigating circumstance in the case. However, the Norwegian Data Protection Authority points out that this may be due to coincidences. As it cannot be ruled out that the personal data has gone astray, the extent of any damage is nevertheless unknown.
b) whether the infringement was committed intentionally or negligently
The relevant processing of personal data was carried out without an assessment of the legal basis for the processing, sufficient risk assessments or the implementation of specific appropriate technical or organizational measures. This must be characterized as clearly negligent.
c) any measures taken by the data controller or data processor to limit the damage suffered by the data subjects;
NIF ensured that access to the personal information was closed when you were made aware of it. NIF then used Orange Cyberdefense to conduct an investigation into whether the personal data has been used criminally, which the Data Inspectorate considers to be a mitigating circumstance in the case.
(d) the degree of responsibility of the controller or processor, taking into account the technical and organizational measures they have implemented in accordance with Articles 25 and 32;
NIF has a general norm for the processing of personal data and information security in sports, but the points in this on risk assessment and measures to ensure confidentiality and integrity were not followed up in this case. The fact that the relevant processing of personal data was carried out without an assessment of the legal basis for the processing, adequate risk assessments or the implementation of any specific appropriate technical or organizational measures, indicates shortcomings in the internal management system.
14

e) any previous violations committed by the data controller or data processor
The Norwegian Data Protection Authority has not emphasized any previous violations in this case.
(f) the degree of cooperation with the supervisory authority in order to remedy the infringement and reduce the possible negative effects of it;
NIF has answered the questions from the Norwegian Data Protection Authority as required. This therefore pulls neither in an aggravating nor mitigating direction.
g) the categories of personal data affected by the infringement
The personal information concerned in this case is to a large extent contact information, in addition to information about date of birth and club affiliation, to which, as a starting point, the greatest risks are not associated. This is based on a mitigating bill, but as mentioned above, the Data Inspectorate has also emphasized that minors' personal data is affected by the violation, which is an aggravating factor.
The Data Inspectorate considers that health information can be deduced through club affiliation in clubs called "disability sports teams" or similar, and thus special categories of personal information covered by Article 9 no. are members or support staff in disability sports teams, however, it will not be possible to draw clear conclusions about functional ability in many cases. The Norwegian Data Protection Authority has therefore placed limited emphasis on this aspect.
h) the manner in which the supervisory authority became aware of the infringement, in particular whether and, if so, to what extent the data controller or data processor has notified of the infringement
NIF itself reported the deviation to the Norwegian Data Protection Authority.
(i) if the measures referred to in Article 58 (2) have previously been taken against the data controller or data controller concerned in respect of the same subject matter, that such measures are complied with;
No measures have previously been taken against NIF with regard to the same subject matter.
(j) compliance with approved standards of conduct in accordance with Article 40 or approved certification mechanisms in accordance with Article 42;
The Norwegian Data Protection Authority does not find this aspect relevant in the case.
k) and any other aggravating or mitigating factor in the case, e.g. financial benefits obtained, or losses avoided, directly or indirectly, as a result of the infringement
15

It is important for society that everyone has the opportunity to practice sports based on their wishes and needs, and participation in sports can contribute to joy, socialization, better physical and mental health, integration and cohesion and unity with other people - both for children and adults. As follows from the privacy statement of NIF, registration of member information is a prerequisite for membership in Norwegian sports. As a gatekeeper for an important public good, NIF has a special responsibility to manage this member information in a legal and responsible manner - something that has not been done in this case. The Norwegian Data Protection Authority considers this to be an aggravating circumstance.
The Data Inspectorate assumes that NIF has not achieved any financial benefits as a result of the violation, beyond any savings by not implementing appropriate technical and organizational measures to achieve a level of security that is suitable with regard to the risk.
It can also be seen in the company's financial situation. NIF receives most of its income through grants from the public sector and other agencies. According to their accounts from 2019, NIF had operating revenues of NOK 1,948,935,000 and an operating profit of NOK 7,607,000. The Norwegian Data Protection Authority finds that NIF has the finances to bear an infringement fee.
The Norwegian Data Protection Authority is not aware of any other aggravating or mitigating factors in the case that will affect the outcome of the assessment.
Based on the assessments above, the Data Inspectorate concludes that an infringement fee should be imposed.
5.2. Assessment of the size of the fee
In accordance with Article 83 (1), the infringement charge must be effective, proportionate and dissuasive. This means that the supervisory authority must make a concrete, discretionary assessment in each individual case.
When measuring the size of the fee, emphasis shall be placed on the same assessment factors that have been reviewed in section 5.1 of the decision. The Data Inspectorate therefore refers to the assessments made above, and that these together speak in favor of a fee of a certain size.
In an aggravating direction, we place particular emphasis on NIF's clear deviations from the key obligations set out in Article 5 no. 1, letters a, c and f of the Privacy Ordinance, Article 6 and Article 32. We also place particular emphasis on the scope of personal data affected by the infringement, and in particular the scope of personal data on minors registered.
In the mediating direction, we emphasize that the breach largely concerns categories of personal data to which the greatest risks are not associated, and that there is no known or clear overriding probability that the breach has led to material or non-material damage to the data subjects. is affected.
The business's financial capacity will also be important, although it is not relevant to utilize the range in the size of the infringement fee that follows from Article 83. no. 5. The Privacy Ordinance, Article 83 no. 5, sets a higher maximum amount for fees when the case
16

deals with violations of the fundamental principles of the processing of personal data in accordance with Articles 5 and 6 of the Privacy Regulation.
As mentioned, NIF receives most of its income through grants from the public sector and other agencies. According to their accounts from 2019, NIF had operating revenues of NOK 1,948,935,000 and an operating profit of NOK 7,607,000. NIF's significant financial figures suggest that the decision must be of a certain size in order for the preventive considerations behind the infringement fee to be taken into account as a form of reaction.
After an overall assessment of the elements in the case that we have reviewed above and the seriousness of the violation, we have come to the conclusion that a violation fee of NOK 2,500,000 is considered correct.
If NIF, due to the social situation with covid-19, experiences conditions that are relevant to the notified decision on infringement fines, we ask that you provide us with feedback with relevant documentation.
Information on further progress
This is a prior notice (cf. the Public Administration Act § 16). If you have any comments on this notice, you must send us feedback on this as soon as possible and no later than 4 January 2021.
Transparency and publicity
You have the right to access the case documents (cf. the Public Administration Act § 18). We will also inform you that all the documents are in principle public (cf. the Public Access to Information Act § 3.)
If you believe that there is a basis for exempting all or part of the document from public access, we ask you to justify this.
If you have any questions, you can contact Anders Obrestad on telephone 22 39 69 71.
With best regards
Bjørn Erik Thon director
The document is electronically approved and therefore has no handwritten signatures
Anders Sæve Obrestad legal senior adviser
17
