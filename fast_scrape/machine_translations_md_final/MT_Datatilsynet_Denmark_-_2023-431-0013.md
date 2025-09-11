Serious criticism, injunction and warning in case of mortgage app
Date: 26-09-2024
Decision
 
Private companies
 
Warning
 
Injunction
 
Serious criticism
 
Supervision / self-management case
 
Data protection through design and default settings
 
Basic principles
 
Clarification of data responsibility
The Danish Data Protection Authority has investigated Dansk Retursystem's app "Pant" and made a decision that in many cases will require action from other data controllers who have developed apps.

Journal number: 2023-431-0013

Summary
In July 2022, the Danish Data Protection Authority initiated a case of its own initiative against Dansk Retursystem, which had developed an app that can be used in connection with pledge, because the app allegedly processed information about e.g. users' accounts, balances and loans in the bank.

The investigation showed that the app has a built-in component that needs to obtain the user's account information in order to pay out money to the right account. But the component, which is made available by a third party, can also collect information about e.g. user's balances, identity information and transaction history. However, this information is not passed on to the Danish Return System.

The Danish Data Protection Authority has now made a decision in the case and has, in the process, delimited the case to concern compliance with the principles in the GDPR regarding, among other things, legality, fairness and transparency, the principle of data minimization and the provision of data protection by design. In the decision, the Danish Data Protection Authority seriously criticizes the Danish Return System for not living up to the rules in these areas.

At the same time, Dansk Retursystem has been ordered to bring their processing of personal data in line with the data protection regulation by 2 January 2025 at the latest.

In conclusion, the supervisory authority issues a warning that it will probably be in breach of the rules if more personal data can be processed than the purpose dictates through the APIs that the app uses.

The decision also addresses the issue of data responsibility in a construction where APIs and services from an external supplier are used. This is an API which is built into the app and which is purchased from a provider who is the statutory data controller for the underlying processing. However, the considerations of the decision also apply to other collections and processing of personal data that take place in other service-based architectures.   

"The Danish Data Protection Authority understands that many applications today are composed of code libraries, functional code, APIs and system integrations that do not originate from the data controller's own organisation. When you get to develop an app, it does not relieve the data controller of the basic responsibility to comply with the rules of the GDPR," says Allan Frank, IT security specialist and lawyer at the Norwegian Data Protection Authority, and continues:

"Before an app is developed and put into operation, the data controller must review all the processing of personal data that a chosen design entails, including which personal data it collects and processes. The design of the app must ensure compliance with the entire regulation, regardless of how well-known and widespread components it is built from."

"Slightly square, you can say that even if your neighbor uses a component for his purpose, firstly, it is not certain that the neighbor is using it legally, and secondly, you must always assess it concretely against your own purpose ,” Allan Frank elaborates.

However, the Danish Data Protection Authority must once again encourage the use of codes of conduct in organizations and associations of data controllers with the same types of processing and similar purposes.

The Danish Data Protection Authority will in future give weight to it when choosing sanctions if the principles in this decision have not been followed - especially in all areas where the public and institutional actors in the private sector carry out tasks where users are limited in their choice of provider. This does not only apply to the places where information of special categories such as the social and health area is processed, but to all areas where users are served by means of apps.

In conclusion, the Danish Data Protection Authority emphasizes that the information that the data controller provides to the data subjects must always meet the requirements in the rules regarding clarity and transparency in particular.

Decision
The Danish Data Protection Authority hereby returns to the matter, where on 6 July 2022 the Danish Data Protection Authority initiated an investigation into the own operation of Dansk Retursystem A/S' (hereinafter "Danish Retursystem") processing of personal data using the Dansk Retursystem's Pawn app.

In connection with the processing of the case, the Data Protection Authority has requested Dansk Retursystem for an opinion regarding the processing of personal data in the Pawn app.

The Danish Data Protection Authority has decided to limit the investigation of the Pawn app to the questions of (i) whether Dansk Retursystem's processing of personal data in connection with the use of the Pawn app has taken place in accordance with the principles for processing personal data, including the principle of legality, reasonableness and transparency in the data protection regulation\[1\] article 5, subsection 1, letter a, and the data minimization principle in the data protection regulation, article 5, subsection 1, letter c, and (ii) whether the processing has taken place in accordance with Article 25, subsection 1, as far as implementation of the data protection principles is concerned.

1. Decision
After a review of the case, the Danish Data Protection Authority finds that there are grounds for expressing serious criticism that Dansk Retursystem's processing of personal data has not taken place in accordance with Article 5, paragraph 1 of the Data Protection Regulation. 1, letter a and c, as well as the data protection regulation, article 25, subsection 1.

Pursuant to the Data Protection Regulation, Article 58, subsection 2, letter d, Danish Return System to bring the Pawn app into compliance with the data protection regulation by reviewing the processing of personal data carried out in the app and ensuring that no more information is processed than the purpose dictates, and that the processing that is carried out, is done legally, fairly and transparently. The deadline for compliance with the order is set at 2 January 2025.

In addition, the Data Protection Authority issues, pursuant to the Data Protection Regulation, Article 58, subsection 2, letter a, Dansk Retursystem a warning that for the purpose of "being able to pay out a mortgage via direct money transfer to the bank account specified by the user of the app and communicate with the user", it will probably be in violation of the data protection regulation to use a third-party solution for account information that processes personal data in addition to the necessary account information to be able to pay out the mortgage amount by a money transfer directly to the account, regardless of whether the user is given other options in the app than using the integration in question.

Below follows a closer review of the case and a rationale for the Data Protection Authority's decision.

2. Case presentation
On 6 July 2022, the Data Protection Authority initiated an investigation of its own operation against Dansk Retursystem, as the authority had been made aware that Dansk Retursystem had developed an application called "Pant" for use in the payment of mortgages, and that Dansk Retursystem in that connection processed a number of information about, among other things, the users' accounts, balances, loans, etc.

Against this background, the Data Protection Authority requested Dansk Retursystem for an opinion regarding the Pawn app.

2.2 The Danish Return System's comments
Danish return system has stated that the purpose of the Pawn app is to be able to pay out a pledge via direct money transfer to the bank account specified by the user of the app. Until now, deposit payments to users of Dansk Retursystem's deposit stations have been made using a Dankort or a so-called deposit card. With the app, Dansk Retursystem wanted a technologically more modern solution that is independent of the choice of payment card and the current requirements set by NETS.

In order to make a deposit through the app, the user must create a user, add a bank account and give the app access to the device's camera. When the app is opened for the first time, the user is asked to create a user. In this connection, the user must enter a number of basic information such as name, e-mail and telephone number. Once the user has been created, a bank account must be linked to the user so that the mortgage can be paid out to that account.

Dansk Retursystem has stated that, in order to help the user specify the correct account number, they have integrated the pawn app with the company Tink AB's (hereinafter "Tink") third-party solution, which enables the user to log into their own bank and select the account to which the user wants the mortgage app to pay out money.

When using Tink, the user initially selects which bank the desired account belongs to, after which the user must log in to the individual bank themselves. This is handled in different ways depending on the individual bank's solution. When the user is logged in to their bank, the user is forwarded to a list of the available accounts that the bank has given Tink access to display. The user then selects an account, after which the account name, registration number and account number are transferred directly to the back-end, and the account is thereby linked to the user. The Tink flow is then shut down.

The Danish return system's terms and conditions for the Pawn App include, among other things: the following:

"Dansk Retursystem uses Tink's account information service to obtain your bank account information (account number and account name). When you log into your bank using the account information service, it appears which information you consent to your bank transferring to Tink. In some cases, your consent may include the transfer of more information to Tink than just your account number and account name – this depends on the individual bank. Tink only passes on your account number and account name to Dansk Retursystem.”

Dansk Retursystem has stated that in this process Tink will be able to collect the following types of information:

Banking information, which includes account numbers, balances, account types, loans, interest and other information associated with the user's accounts.
Information about balances, including account ID, updated timestamp, posted balance, available balance, credit limit and other information associated with these balances.
Personal information, which includes email, username, social security number, country and other information available on users' profiles
Identity information, which includes access to information that can be used for identification purposes.
Transaction history, which includes deposits, purchases and refunds in users' accounts.
The Danish Return System has specified that it depends on the individual bank which specific information Tink collects. Tink has informed the Danish Return System of the following about the collection of information:

"We only ever ask for the smallest data scope that's needed to deliver the product or service that the end-user has requested. However, some bank APIs do not allow the request of one specific scope of data, e.g. the account information, balance data or transaction data separately. This results in occasions where we have to ignore data which is not needed for the service. We are actively taking measures to limit the amount of data received and we are working with regulators and raising awareness among banks in the EU to jointly ensure end-to-end data minimization.”

Dansk Retursystem has also pointed out that the data exchange between the individual bank and Tink is a process that takes place in a so-called "closed room" outside of Dansk Retursystem's domain and control. Dansk Retursystem thus – apart from a limited view in the app – does not have access to the data exchange that takes place.

Until July 18, 2022, it was only possible for users to link an account using Tink's third-party solution. Dansk Retursystem has then made it possible for users to choose whether – instead of using Tink – they want to manually associate an account with their user by entering the account name, registration number and account number directly in the Pawn app. This solution does not require the use of NemID/MitID or Tink's third-party solution. With this manual process, no validation takes place, as the creation is not done via the user's own bank. Dansk Retursystem has stated that the manual entry was added to ensure operational stability in the event of a bank failure, and to accommodate consumers who wish for a manual entry option

Dansk Retursystem has stated about the distribution of roles that Tink is the data controller for the users' personal data from the time Tink receives this and until the information is made available to Dansk Retursystem. From the time the information is made available to Dansk Retursystem, Dansk Retursystem is the data controller and Tink is the data processor.

Furthermore, Dansk Retursystem has stated that Dansk Retursystem only collects and processes the personal data which is a prerequisite for Dansk Retursystem to be able to pay deposits to users and communicate with users to the extent necessary. 

In connection with the development of the app, Dansk Retursystem has chosen a solution which means that an actual user profile is not created, which could be accessed from several devices, and which could be recreated in the event that the device were to be lost. The created user is thus linked to the specific physical device in question where the app is installed. This means that there is a minimum of information that is necessary in the use of the app, and that there is a very limited storage and exchange of information between IT systems.

Dansk Retursystem has also opted out of processing users' addresses and social security numbers, as Dansk Retursystem has assessed that these are not relevant for the use of the app or for payment of deposit amounts to users.

3. Reason for the Data Protection Authority's decision
3.1 General remarks
The Danish Data Protection Authority initially enforces that a data controller who wishes to develop an IT solution where personal data is processed must consider, assess and implement necessary technical and organizational measures, so that the principles for processing personal data, such as legality, transparency, purpose limitation and data minimization is effectively implemented in the design of the IT solution, so that the entire data protection regulation can actually be complied with when the solution is used for the processing of personal data that the chosen design entails.

This applies not only in relation to the organization of legality in the business process, but also in relation to the technological support chosen for the processing of personal data in the IT solution. It follows directly from the data protection regulation's article 25, and concerns not only ensuring the necessary security of the processing, but also that the personal data is processed legally and in accordance with all rules in the data protection regulation.

The Danish Data Protection Authority understands that the development of IT solutions takes place through the use of code libraries, functional code and data exchange integrations that do not necessarily originate from the data controller's own organisation.

However, the Danish Data Protection Authority draws attention to the fact that the purpose(s) of the processing of personal data that the IT solution is developed to fulfill are, as a starting point, the purpose(s) of the principles for the processing of personal data in Article 5, paragraph 1 of the Data Protection Regulation. 1, must be assessed against. This basically means that the original data controller cannot uncritically – and without regard to the original purpose(s) – include components that result in the processing of additional personal data beyond what is necessary for the purpose(s), or where processing activities take place in a way that is opaque to the data subjects. This also means that personal data may only be collected for the stated purposes and not further processed in a way that is incompatible with this original purpose.

The Norwegian Data Protection Authority does not rule out that a solution can serve multiple purposes, let alone that these purposes can be attributed to other data controllers, both as an independent or as a joint data responsibility. However, the Danish Data Protection Authority must tighten up that in such cases significant requirements are placed on the information that must be given to the data subject, so that it is always reasonable and appears transparent to the data subject by whom, how and for what purpose personal data is collected and processed.

The Danish Data Protection Authority is of the opinion that the processing of personal data in the overall application – regardless of code libraries, APIs or other data integrations used – must be limited to the personal data that can be considered sufficient, relevant and necessary, in relation to the purposes for which they are processed. This applies regardless of whether these code libraries, APIs or other data integrations are internal and developed in the data controller's own organization or are made available by – or purchased from – others, either data processors, other data controllers or third parties. As a data controller, you cannot fail to comply with the requirements of the data protection regulation - including, among other things, article 25 – simply by referring to the fact that you use a third-party solution in your solution design. This is regardless of how standardized and widespread such a solution may be on the market. If the data controller wishes to use a third-party solution as part of its solution, the data controller must therefore ensure that the processing of personal data using the third-party solution complies with the data protection regulation, including article 25, and can document this, see also articles 5, subsection 2 and 24.

3.2 Data responsibility
In Article 4, No. 7 of the Data Protection Regulation, a data controller is defined as:

"a natural or legal person, a public authority, an institution or another body which, alone or together with others, decides for which purposes and with which aids the processing of personal data may be carried out."

A data controller is therefore the natural or legal person, etc., who determines the purposes for which the personal data may be processed (the purpose) and how the personal data may be processed (the means), including by whom the personal data may be processed.

The Danish Data Protection Authority has – in accordance with what has been stated by Dansk Retursystem – assumed that Dansk Retursystem's purpose with the Pawn app is to be able to pay out a pledge via direct money transfer to the bank account specified by the user of the app, and to communicate with the user.

It is also assumed that the processing of personal data that takes place in the developed Pant app is only indicated to be done for this purpose.

It is against this background that the Danish Data Protection Authority's assessment is that the Danish Return System itself could decide with which aids the processing of information must take place. It has only been the Danish Return System that could decide that the API from Tink should be included in the app, whether another API should be used, or whether the functionality should be organized in a completely different way, e.g. by the user manually entering the account number.

The Danish Data Protection Authority assumes that the bank account API from Tink is exclusively included in the Pawn app because the Danish Return System has decided so.

It is the Danish Data Protection Authority's assessment that Tink is a legally determined data controller as an account information service, cf. the definition in § 7 no. 21, in Act no. 652 of 8 June 2017 on payments in relation to the interaction and the processing of personal data that takes place with the user's account manager provider (bank/financial institution).

It is the Danish Data Protection Authority's assessment that Dansk Retursystem as sole responsible for including Tink's API in the Pawn app, as determining the purpose for the processing of personal data in the app and in accordance with the practice of the EU Court\[2\] - to ensure effective and complete protection of the rights of the data subjects – must be considered as joint data controller cf. the data protection regulation article 26 and therefore as the subject of responsibility for compliance with the principles in article 5, paragraph 1, and for the design according to article 25, at least for the purpose for which the processing is carried out using the Pant app.

The Danish Data Protection Authority notes that the fact that the Danish Return System does not get to know all the personal data cannot in itself be given weight in relation to the assessment of shared data responsibility - especially when the processing of personal data is solely as a result of a choice in the design made by Dansk Return system, cf. also the EU Court's comments on this in case C-25/17, Jehovah's Witnesses\[3\].

It also follows from the EU Court's judgment in case C-40/17, Fashion ID, that the fact that Dansk Retursystem does not itself have access to the personal data that has been collected and transferred to Tink, with whom Dansk Retursystem jointly determines, for which purposes and with which aids the processing of personal data may be carried out, does not prevent Dansk Retursystem from being the data controller.\[4\]

3.3 Principles for processing personal data
Processing of personal data must – in addition to taking place on the basis of a relevant processing basis – always take place in accordance with a number of basic principles of data protection law.

The Danish Data Protection Authority is of the opinion that the principles for processing personal data and the rules in the data protection regulation should generally be seen as an expression of the rights and freedoms granted to the individual, viewed against the interests that may be in processing the personal data, cf. the principle in the data protection regulation preamble consideration 4.

Against this background, the Danish Data Protection Authority is of the opinion that a deviation from the protection expressed in the processing principles can only take place to the extent that the regulation itself or equivalent legislation enables this.

It is the opinion of the Danish Data Protection Authority that the principle of legality, reasonableness and transparency in the data protection regulation's article 5, subsection 1, letter a, means that, among other things, it must be clear and unambiguous for the data subject which personal data is processed, for which purposes and by whom, and that this is conveyed in clear language and in a way that makes it easy for it registered already early in the treatment to assess the scope of the treatments and the role of the actors involved.

The Danish Data Protection Authority notes that it appears from the terms of use for the Pawn app that in some cases of use more personal data will be collected and processed than that which Dansk-Retursystem uses for the purpose of the processing, and it also appears that this is done on the basis of a consent when using the Tink API.

It is the opinion of the Danish Data Protection Authority that, as a data controller, you cannot encourage or base your own processing on usage scenarios where you are aware that personal data will be processed beyond what is necessary for the purpose.

By doing this in the Pawn app anyway, Dansk Retursystem has not complied with Article 5, paragraph 1 of the Data Protection Regulation. 1, letter a.

The data minimization principle in the data protection regulation, article 5, subsection 1, letter c, states that personal data must always be sufficient, relevant and limited to what is necessary in relation to the purposes for which they are processed. It must therefore always be assessed how the purpose(s) pursued can reasonably be fulfilled by processing as little information as possible, and if possible completely without personal data.

The Danish Data Protection Authority assumes that the Danish Return System processes information about the individual user's name, telephone number, e-mail, registration number and account number for the stated purpose.

Finally, the Danish Data Protection Authority assumes that the Danish Return System, as data controller, by having included the API from Tink in the Pawn app, also in certain usage scenarios processes (i) bank information, which includes account numbers, balances, account types, loans, interest and other information associated with the user's accounts, (ii) information about balances, which includes account ID, updated time stamp, posted balance, available balance, credit limit and other information associated with these balances, (iii) personal information, which includes email, username , social security number, country and other information available in the users' user profile, (iv) identity information, which includes access to information that can be used for identification purposes and (v) transaction history, which includes deposits, purchases and refunds in the users' accounts.

It is the Danish Data Protection Authority's assessment that Dansk Retursystem's processing of personal data in connection with the use of the Pawn app has not taken place in accordance with the data minimization principle in Article 5, paragraph 1 of the Data Protection Regulation. 1, letter c.

The Danish Data Protection Authority has particularly emphasized that Dansk Retursystem's processing of personal data is not limited to what is necessary in relation to the purposes for which the data is processed. It is in particular Dansk Retursystem's processing of the information mentioned in points (i) to (v) above about i.a. other accounts, outstanding balances, account type, loans, interest, credit limits and transaction history, which, in the Danish Data Protection Authority's assessment, clearly go beyond what is necessary in relation to the purpose.

3.4 Data protection through design
This follows from the data protection regulation's article 25, subsection 1, that the data controller - both at the time of determining the means for the processing and at the time of the processing itself - must take appropriate technical and organizational measures, which are designed with a view to the effective implementation of data protection principles and with a view to securing the necessary guarantees in the processing to meet the requirements of the data protection regulation and protect the rights of the data subjects.

In this case, the Danish Data Protection Authority has decided to limit the investigation of Dansk Retursystem's compliance with Article 25, subsection 1, to the part that relates to appropriate technical and organizational measures designed for the effective implementation of the data protection principles.

It is the Danish Data Protection Authority's assessment that Dansk Retursystem's processing of personal data in connection with the use of the Pant app has not taken place in accordance with Article 25, paragraph 2 of the Data Protection Regulation. 1, as far as implementation of the data protection legal principles is concerned.

The Data Protection Authority has placed particular emphasis on the fact that Dansk Retursystem, as the data controller for the processing of personal data that occurs in connection with the use of the Pant app, has not implemented the necessary technical and organizational measures, so that the principle of the data minimization principle is effectively implemented in the design of the IT the solution.  

During the development of the Pawn app, including in relation to the technological support and the organization of the app's functions, Dansk Retursystem should have reviewed all the processing of personal data that would take place, such as the Pawn app would look like with the choices of API' are and integrations that were contained. Dansk Retursystem should then have checked, ensured and documented that all the processing met the processing principles and that the entire data protection regulation could be complied with with the chosen design. This obligation applies even if an API used is developed and made available by someone other than the data controller himself. Regardless of which code libraries, APIs or other data integrations you choose to use in an app or in another form of technological support, the processing of personal data – in the overall application – must be limited to the personal data that can be considered sufficient, relevant and necessary in relation to the purposes for which they are processed, just as the data controller cannot encourage the data subject to process more personal data than what the purpose dictates.

In this case, it does not change this assessment that the processing of personal data is limited in such a way that the transfer from the banks to Tink takes place in isolation and outside the domain and control of Dansk Retursystems. Nor does it change this assessment that Dansk Retursystem itself does not have access to all the information. When Dansk Retursystem chooses to integrate a third-party solution into the Pawn app, Dansk Retursystem, as the data controller for the processing of information that takes place in connection with the use of the app, will be responsible for the processing of personal data in the third-party solution, which takes place in order to fulfill the purpose of the Danish Return System, complies with Article 25 of the regulation.

As a data controller, you must design and choose a solution that only processes the personal data that is strictly necessary to fulfill the purpose. When using third-party software, the data controller must carry out a risk assessment and ensure that functions that are not compatible with e.g. the basic principles of the Data Protection Regulation, are not included or disabled. If the third-party solution does not offer an option to adapt and limit the processing of personal data to what is necessary to fulfill the purpose, the solution will not be legally usable. A legal use will in that case require a redesign of the solution.

On this basis, the Danish Data Protection Authority finds that Dansk Retursystem's processing of personal data has not taken place in accordance with the rules in the data protection regulation, article 5, subsection 1, letter a and c, as well as the data protection regulation, article 25, subsection 1, which the supervisory authority finds that there are grounds for expressing serious criticism of.

Pursuant to the Data Protection Regulation, Article 58, subsection 2, letter d, Danish Return System to bring the Pant app into compliance with the data protection regulation by reviewing the processing of personal data carried out in the app, and ensuring that no more information is processed than the purpose dictates, and that the processing that is carried out, is done legally, fairly and transparently. The deadline for compliance with the order is set at 2 January 2025.

Failure to comply with the order can, according to Section 41, subsection of the Data Protection Act. 2, no. 5 cf. section 41, subsection 1, shall be punished by a fine or imprisonment of up to 6 months.

According to the Data Protection Regulation, Article 58, subsection 2, letter a, in addition, give Dansk Retursystem a warning that, for the stated purpose, it will probably be in violation of the data protection regulation to use a third-party solution for account information that processes personal data in addition to the necessary account information in order to be able to pay out the deposit amount by direct money transfer to the account, and that this applies regardless of whether the user is given other options in the app than using the integration in question.

In addition, the Danish Data Protection Authority must enforce that the technological design of the business support must be done in a way where the user, whose personal data is processed, is effectively enabled to exercise his rights according to the data protection regulation. It must therefore i.a. could be described transparently to the user both for which purposes, but also by which data controller information is collected and processed, cf. articles 12, 13 and 14 of the data protection regulation.

For the sake of order, the Danish Data Protection Authority must draw the attention of the Danish Return System to the fact that the entire Pawn app - including the processing that is not included in this decision - must be assessed according to the criteria that the Data Protection Authority has stated in this decision.
