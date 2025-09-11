e-Boks is criticized for not having adequate security in e-Boks Express

Date: 03-03-2022

Decision

After becoming aware that it was possible to access another user's profile by logging in to e-Boks Express, the Danish Data Protection Agency started a case of self-operation against e-Boks. The Authority has now made a decision in the case, and the decision illustrates, among other things, that login - regardless of whether it is with NemID - does not protect data if the rights the user receives after login are not correct.

Journal number: 2021-431-0138

Summary

In March 2021, the Danish Data Protection Agency was made aware that it was possible to access another user's profile by logging in to e-Boks Express.

The Danish Data Protection Agency therefore started a case of self-operation against e-Boks in April 2021.

E-boks Express is a self-service portal where companies can send messages and documents.

An error in Nets 'setup of the user validation of NemID meant that when a user accessed e-Boks Express by logging in with NemID Erhverv / NemID employee signature with key card, access could be established to other companies' information and information about sent documents in e -Box Express.

E-Boks claimed that NemID is used in e-Boks Express to ensure that only those persons authorized by the sending company have access to e-Boks Express.

The Danish Data Protection Agency expressed criticism that e-Boks had not complied with the requirement for appropriate security measures because e-Boks had not tested all relevant usage scenarios when logging in to e-Boks Express.

In this connection, the Danish Data Protection Agency stated that a login is used to identify the user who uses the IT solution - in this case e-Boks Express.

After login, the rights that a user is derived from must ensure that access to data is exactly what this user must have access to. Thus, E-Boks should have discovered by testing that e-Boks Express provided access to other users' data, even though the user identification failed.

The decision illustrates, among other things, that login - regardless of whether it is with NemID - does not protect data if the rights the user receives after login are not correct.

Decision

After a review of the case, the Danish Data Protection Agency finds that there are grounds for expressing criticism that e-Boks' processing of personal data has not taken place in accordance with the rules in the Data Protection Regulation0F \[1\] Article 32, para. 1.

Below is a more detailed review of the case and a justification for the Danish Data Protection Agency's decision.

2. Case presentation

It appears from the inquiry of 22 March 2021 from a user of e-Boks Express that when he had to log on to e-Boks Express on 22 March 2021, he instead entered directly into another user's profile. On 9 April 2021, the user informed the Danish Data Protection Agency that the same thing happened on 9 April 2021, when he clicked on "Login on e-Boks Express".

The user contacted e-Boks Express by telephone on 22 March 2021 about the problem.

It also appears from the inquiry that it immediately appeared that the user could send messages to e-Boks from other users' profiles.

2.1. E-box's remarks

Initially, e-Boks has stated that e-Boks Express is a new online self-service portal where small and medium-sized companies can register as senders and send messages / documents securely to e-Boks 'end users' digital mailbox. It is not possible for the sending company to receive messages / documents in e-Boks Express. A sending company only has the option of sending messages / documents and subsequently see the self-selected title of sent messages / documents and the time of sending.

E-Boks has claimed that NemID Erhverv / NemID employee signature is used in e-Boks Express to ensure that only those persons authorized by the sending company have access to e-Boks Express.

E-Boks has stated that it has been unintentionally possible for the person who has contacted the Danish Data Protection Agency to access the business information of another sending company, ie. the name of the company, the name of the contact person, the company's address and cvr no. In addition, it has been possible to access the title and date of a sent document. In this connection, e-Boks has stated that it has not been possible for the sending company to access information about the recipient of the document, just as it has not been possible to access the content of the sent message.

In addition, e-Boks has stated that sending companies can only access e-Boks Express via NemID Business / NemID employee signature, ie. with key file, key card or key app. That it was possible for the mentioned sending company to access another user account was due to an error in Nets Danmark A / S '(hereinafter Nets) setup of the user validation of NemID Business / NemID employee signature. The error only related to the use of key cards. E-Boks has stated that e-Boks has been in dialogue with Nets, which has confirmed that the error in the setup has been corrected.

Finally, e-Boks has stated that e-Boks has run tests on the error correction, and thus verified that the error has been corrected, so that similar incidents cannot occur.

2.2. Nets' remarks

Initially, Nets stated that E-Ident is a brokerage solution used to identify individuals and companies.

Nets has stated that the error only included persons who used NemID key cards associated with companies and who also used e-Boks Express. It was thus not a general NemID error and affected a small number of users who used e-Boks Express during that period.

In addition, NemID has stated that in E-Ident it is registered in logs how many people have logged in to e-Boks Express with a key card. The number of logins with key cards was 227 in March 2021 and 28 in April 2021. It is a proportion of these who have potentially had the opportunity to take advantage of the error.

Nets has stated that the company can not get closer to the number than that 304 people could potentially have exploited the error, as Nets can not distinguish between whether a person has logged on to e-Boks Express with a NemID key card as an employee or as a private person. The error only affected people with NemID key cards who logged in as an employee, which is an unknown proportion of the 304 people logged on.

Nets has also stated that the error was in a so-called "sub" field, which contains the name of the ID type - in this case NemID with key card - and the unique CVR and RID values, where the RID number indicates an employee's unique identification. For NemID key cards, the reading of CVR and RID numbers from the user's NemID in relation to e-Boks Express failed, and the value was therefore set to zero, for those persons who during the period of the incident used a physical NemID key card associated with a company, and who in the same period used e-Boks Express.

It appears from Net's statement that the error correction consisted of the code being updated so that reading of CVR and RID values worked correctly, and these values could be entered correctly in the "sub" field in relation to e-Boks Express.

Regarding the duration of the security breach, Nets has stated that the error first occurred on 4 March 2021, when e-Boks, as data controller, contacted Nets. Nets was then in ongoing dialogue with e-Boks about the first error identification and later how the error could be corrected. The bug was fixed in production at Nets on April 27, 2021.

Justification for the Danish Data Protection Agency's decision

On the basis of what was stated in the case, the Danish Data Protection Agency assumes that an error in Net's setup of the user validation of NemID meant that when a user accessed e-Boks Express by logging in with NemID Business / NemID employee signature with key card, it could be established access to the business information of other sending companies and the title of the documents sent and the time of sending.

On that basis, the Danish Data Protection Agency assumes that there has been unauthorized access to personal data, which is why the Authority finds that there has been a breach of personal data security, cf. Article 4, no. 12 of the Data Protection Regulation.

It follows from Article 32 (1) of the Data Protection Regulation 1, that the data controller must take appropriate technical and organizational measures to ensure a level of security appropriate to the risks involved in the data controller's processing of personal data.

Thus, the data controller has a duty to identify the risks that the data controller's processing poses to the data subjects and to ensure that appropriate security measures are put in place to protect the data subjects against these risks.

The Danish Data Protection Agency is of the opinion that the requirement pursuant to Article 32 for appropriate security will normally mean that changes to existing IT solutions and development of new solutions should only take place with a proper focus on processing security - both in connection with development and testing of the solution.

On the basis of the above, the Danish Data Protection Agency finds that E-Boks - by not having carried out tests of all relevant usage scenarios when logging in to E-Boks Express with NemID Business / NemID employee signature with key card - has not taken appropriate organizational and technical measures to ensure a level of security appropriate to the risks involved in the processing of personal data by E-Boks, in accordance with Article 32 (1) of the Data Protection Regulation. 1.

The Danish Data Protection Agency has hereby emphasized that E-Boks is seen to have based the security on the fact that a login was established with NemID, even though it did not protect against unauthorized access to data. In particular, the Authority has emphasized that testing must also uncover the possible error scenarios in, the selected log-on component, in the specific case, the possibilities that existed for having different implementations of NemID with the users.

In this connection, the Danish Data Protection Agency notes that a login is used to identify the user who uses the IT solution. After login, the rights a user derives from must ensure that access to data is exactly what this user must have access to. Thus, E-Boks should have discovered by testing that e-Boks Express provided access to other users' data, even though the user identification failed.

Following a review of the case, the Danish Data Protection Agency finds that there are grounds for expressing criticism that E-Boks' processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation. 1.

When choosing a response in a mediating direction, the Danish Data Protection Agency has emphasized that the breach did not provide an opportunity to see information other than the contact person, company name, the self-chosen title of sent messages and documents and the time of sending.

In addition, the Danish Data Protection Agency has emphasized that the error could only be exploited after logging in with NemID Business / NemID employee signature with a key card, which - although it could not prevent the possibility of abuse - would give users the impression that they might be revealed , if they exploited the vulnerability and that this could possibly deter them from doing so. In addition, only customers who used e-Boks Express could take advantage of the error, which limited the number of people who could detect and misuse it.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC (General data protection regulation).
