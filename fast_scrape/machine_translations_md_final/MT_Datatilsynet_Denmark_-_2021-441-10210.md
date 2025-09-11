Serious criticism of Sports Connection for lack of treatment safety

Date: 04-07-2022

Decision Private companies Serious criticism Reported breach of personal data security Report of breach of personal data security Password Processing security Hacking o.l. Unauthorized access

The Danish Data Protection Agency expresses serious criticism of Sports Connection for not having implemented appropriate security measures in connection with a hacker attack, where unauthorized persons collected customers' payment information.

Journal number: 2021-441-10210

Summary

The Danish Data Protection Agency has made a decision in a case where Sports Connection ApS has reported a breach of personal data security.

Sports Connection was the victim of a hacker attack, in which unauthorized persons injected malicious code into the Sports Connections webshop to collect their customers' payment information.

Prior to the incident, the company had not security patched the e-commerce program to the latest version.

On that basis, the Danish Data Protection Agency found grounds for expressing serious criticism of Sports Connection.

Decision

After a review of the case, the Danish Data Protection Agency finds that there are grounds for expressing serious criticism that Sports Connection ApS 'processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation \[1\]. Article 32 (1) and Article 24 (1) 1.

Below is a more detailed review of the case and a justification for the Danish Data Protection Agency's decision.

2. Case presentation

On 28 September 2021, the Danish Data Protection Agency received a notification from Sports Connection ApS that there had been unauthorized access to Sports Connection ApS 'webshop, which had resulted in a breach of personal data security, whereby there had been access to customers' payment information. Sports Connection ApS became aware of the unauthorized access when the company discovered that a field had been added to the shopping basket on the webshop, which had not previously been there.

It appears from the case that Sports Connection ApS 'webshop is based on the e-commerce program Magento. On September 26, 2021, via a security hole in Magento, a malicious program code was injected, which made it possible to upload a file to the webshop, which meant that the webshop's check-out page could be tampered with. The actual access from the outside lasted for 17 seconds, with the external file being uploaded to the company's webshop.

It further appears from the case that the webshop was immediately shut down at the time of the incident, after which Sports Connection ApS found out about the security flaw and closed it. The company then determined the extent of the incident, and contacted the affected customers the same day.

Sports Connection ApS has in connection with the processing of the case stated that Magento version 1.9.3.8 was discontinued on the website at the time of the breach. The company has stated that Magento could have been updated to a newer version, but that the newer version had not resulted in additional security updates that could have prevented the attack.

It also appears from the case that the attack happened via a module in Magento, which was hacked. This is done via the separate module called "slider file manager", which works independently of Magento, with its own login. Sports Connection ApS was not familiar with the separate module, including that the module could be accessed by outsiders.

Sports Connection ApS has stated in the case that unauthorized persons gained access by becoming aware of the login for the slider functionality in "Slider\_filemanager", whereby it was possible to upload a file to the check-out page, where credit card information could be entered. The unauthorized access to the module lasted for 17 seconds, during which customers' credit card information was accessed. The security hole was subsequently closed and the module in question was removed from Magento.

Sports Connection ApS has finally stated that the company changed development partner in the first quarter of 2021. In this connection, the company has stated that it has not been possible to obtain a log file of updates to Magento, as the log file has either been deleted or as a result of updated outside the log file of a previous development collaboration.

Justification for the Danish Data Protection Agency's decision

Based on the information provided by Sports Connection ApS, the Danish Data Protection Agency assumes that the company - at the time the webshop was hacked - ran Magento version 1.9.3.8. and that a newer patch version 1.9.3.9 was released at this time. In addition, the Danish Data Protection Agency assumes that this patch - in the patch history - indicates removing general vulnerabilities in the product.

3.1. Article 32 of the Data Protection Regulation

Article 32 (1) of the Data Protection Regulation 1, states that the data controller, taking into account the current technical level, the implementation costs and the nature, scope, coherence and purpose of the processing in question, as well as the risks of varying probability and seriousness of natural persons' rights and freedoms, implement appropriate technical and organizational measures to ensure a level of safety appropriate to these risks.

Thus, the data controller has a duty to identify the risks that the data controller's processing poses to the data subjects and to ensure that appropriate security measures are put in place to protect the data subjects against these risks.

In Article 32, para. 1, as examples of security measures is specifically mentioned the ability to ensure lasting confidentiality, integrity and robustness of treatment systems and a procedure for regular testing, assessment and evaluation of the effectiveness of the technical and organizational measures to ensure treatment security.

The Danish Data Protection Agency is of the opinion that the requirement pursuant to Article 32 for appropriate security will normally mean that the data controller has a duty to ensure that the personal data processed by the data controller does not come to the knowledge of unauthorized persons. In the opinion of the Danish Data Protection Agency, this means, among other things, that the data controller must ensure that customers do not inadvertently pass on information to unauthorized persons when using the data controller's webshop, e.g. by ensuring that customers are not redirected to a payment site where customers' payment information is intercepted by unauthorized persons. The Danish Data Protection Agency generally believes that in webshops and payment solutions made available via open accessible websites, there must be procedures for and controls that ensure that administrative user accounts are kept separate from single-user accounts, that these must generally be secured using multifactor authentication. In addition, as far as possible, different usernames and passwords must be used for the modules and parts the solution consists of. It is a known risk scenario that the frequently used e-commerce platforms and their add-on products are tried to be compromised, by built-in weaknesses, it is therefore essential that patches are issued as soon as the supplier releases a security patch, both those that address specific threats, but also those who merely state to rectify general vulnerabilities.

In this connection, the Danish Data Protection Agency is of the opinion that the data controller, as part of the development and adaptation of IT solutions for the processing of personal data, must ensure that IT systems are continuously updated and checked in order to identify conditions that may lead to accidental or unlawful destruction, loss, alteration of unauthorized disclosure or access to personal data.

On the basis of the above, the Danish Data Protection Agency finds that Sports Connection ApS - by not updating the e-commerce program Magento to the latest version at the time of the attack - has not taken appropriate organizational and technical measures to ensure a level of security appropriate to the risks is involved in the processing of personal data by the undertaking in accordance with Article 32 (1) of the Data Protection Regulation. 1.

3.2. Article 24 of the Data Protection Regulation

Sports Connection ApS has stated that it has not been possible to obtain a log file of patches for the e-commerce program Magento, as the log file has either been deleted, or as a result of an update outside the log file in a previous development collaboration.

It follows from Article 24 (1) of the Data Protection Regulation 1, that the data controller, taking into account the nature, scope, coherence and purpose of the processing in question and the risks of varying probability and seriousness of the rights and freedoms of natural persons, shall implement appropriate technical and organizational measures to ensure and to be able to: to demonstrate that treatment complies with this Regulation.

On this basis, the Danish Data Protection Agency finds that Sports Connection ApS has generally not been able to demonstrate compliance with the regulation by not being able to document when the system has been patched, as it has not been possible to obtain a log file of ongoing updates in Magento. By not being able to do this, Sports Connection ApS has not complied with the requirement that the data controller must be able to demonstrate appropriate security in the processing of personal data, cf. Article 24 (1) of the Data Protection Regulation. Article 32 (1) 1.

3.3. Summary

On the basis of the above, the Danish Data Protection Agency finds that there are grounds for expressing serious criticism that Sports Connection ApS 'processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation. Article 32 (1) and Article 24 (1) 1.

When choosing a response, the Danish Data Protection Agency has emphasized that it is a known risk scenario that frequently used e-commerce platforms are attempted to be compromised by built-in weaknesses. In addition, the Danish Data Protection Agency has emphasized that this is the customers' payment information.

The Danish Data Protection Agency has also emphasized that Sports Connection ApS has not secured the necessary documentation, and thus has not been able to document that the e-commerce program Magento has been continuously adequately updated with security.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC (General data protection regulation).
