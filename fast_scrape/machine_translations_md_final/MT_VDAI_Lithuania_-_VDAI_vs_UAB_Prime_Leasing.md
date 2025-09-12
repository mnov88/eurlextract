Navigation
                        Navigation
                        
                        
                        
                    
                                    
                
                    
                                        

                                                    My Government
                                                BETA
                
                
                    
                                        
            lt
            Language
        
                    
                
            

            
                
                    
                    Sitemap
                
                                    
            lt
            Language
        
                    
                
                     For persons with disabilities
                
            

            
                                                                    
                                                                        
                                Prime Minister
                            
                                                                                                                                            
                                Ministries
                            
                                                                                                
                                Agencies
                            
                                                                                                
                                E. citizen
                            
                                                                                                            
                                
                
                    For the disabled
                
            

            
        
    

    
        
            
                
            
            
                State Data Protection Inspectorate
            
        
        
    

            
            
        
    
    

    

    
                
            
            
            
        
        Meniu
    
    
        

        
                        
            Close
        

        
            Į pradžią
            Newsletter subscription
            
        
        
            
                

                                                                    
                        
                            
                                News
                            
                            
                                                    
                                                                    
                        
                            
                                Structure and Contacts
                            
                            
                                                            
                                    
                                        
                                                                                                                                                                            
                                                
                                                
                                                    Administration chart
                                                
                                                
                                                                                            
                                                                                                                                                                            
                                                
                                                
                                                    Contacts
                                                
                                                
                                                                                            
                                                                                                                                                                            
                                                
                                                
                                                    How to find us?
                                                
                                                
                                                                                            
                                                                                
                                    
                                
                                                    
                                                                    
                        
                            
                                Links
                            
                            
                                                    
                                                                    
                        
                            
                                Services
                            
                            
                                                    
                                                                    
                        
                            
                                International cooperation
                            
                            
                                                    
                                                                    
                        
                            
                                SolPriPa PROJECT
                            
                            
                                                    
                                                                    
                        
                            
                                SolPriPa 2 WORK project
                            
                            
                                                    
                                                                    
                        
                            
                                Legislation
                            
                            
                                                    
                                                                    
                        
                            
                                Annual Reports
                            
                            
                                                    
                                                                    
                        
                            
                                Decisions of the Inspectorate (fines, orders, etc.)
                            
                            
                                                    
                                    
            
        
        
            
        
    

        
        
            
                
                
                
            

            

                        

    Car rental company fined for data breach under the General Data Protection Regulation

    
    Home
            
                                                            News
                                                
            
                                                            Car rental company fined for data breach under the General Data Protection Regulation
                                                
    

    
        Print
        
    

    

    
        
            
                
                    Date
                    2021 12 01
                
                                    
                        Rating
                        

    
            1
    

                    
                            
                                

        
                                                
                                    
                            

                                                
        The Personal Data Protection Supervisory Authority, the State Data Protection Inspectorate (SDPI), imposed an administrative fine of EUR 110,000 on UAB Prime Leasing, the operator of the short-term car rental platform CityBee, by its decision taken on 29 November 2021. The SDPI carried out an investigation on its own initiative following information that appeared in the public domain in February 2021 regarding a possible company’s customers personal data breach (PDB). The company was fined for breach of Article 32(1)(a), (b), (d) of the General Data Protection Regulation (GDPR), which governs the obligation to ensure the security of processing of personal data.

ORIGIN OF THE BREACH

The investigation of UAB Prime Leasing has been launched on the initiative of the SDPI following information received that the personal data of the company’s customers, including personal identification numbers, had been made public. During the investigation, the company submitted a report to the Supervisory Authority on the PDB in the company’s IT infrastructure in accordance with the procedure established by legal acts. According to the company, it became aware of the breach from another company providing cyber-security services, which informed it that the CityBee’s customer data was published in CSV files on the website RaidForums.com. The investigation revealed that the publicly disposed data was obtained from an unprotected database backup BACPAC file (DB file) with a creation date of 27 February 2018. It turned out that the exact date of suspension of the external access to the said file was 16 February 2021 11:15 am. In the absence of any factual evidence to suggest that the said file was not publicly accessible during that period, it was concluded that the PDB lasted from 27 February 2018 to 16 February 2021.

Given the established ongoing nature of the PDB, and taking into account the start of the application of the GDPR, the Supervisory Authority assessed during the investigation the obligations of the company under the GDPR, both with regard to the PDB and the requirements for ensuring the security of personal data.  

MAIN RESULTS OF THE INVESTIGATION

The investigation revealed the following:

	The date of creation of the DB file containing the personal data based on which the company’s customer personal data set in the CSV file was created and made public was 27 February 2018.
	The data of 110,302 CityBee users were disclosed and made public.
	433 users who had provided their residential address in other countries of the European Union and/or the European Economic Area were identified. 
	The following sensitive personal data were stored in plain text in a DB file: name, address, telephone number, e-mail address, personal identification number, driving licence number, type of payment card and the last four digits of the card number, the date of expiration of the payment card and the user identifier (token) in Braintree.
	The company failed to ensure adequate personal data management and control:
	
		did not appoint a person with appropriate competence to be responsible for security and risk management;
		did not separate the duties and responsibilities in the field of IT development and maintenance from the duties and responsibilities in the field of cyber security;
		did not ensure access to the DB file logs to record and store entries, and did not ensure that actions performed on DB files were recorded, monitored and evaluated;
		the DB file was stored unencrypted, so that a person with technical knowledge could get full access to the data contained in the file after downloading it. The personal identification numbers in the DB file were also stored in plain text and unprotected by hashing or encryption algorithms;
		the passwords in the DB file were encrypted with the weak and relatively insecure hashing algorithm SHA-1 . It was easy for persons with technical knowledge to find out the real (unmasked by means of hash) values of some (or all) of the passwords stored in the file by using publicly available tools and/or specialised tools on the Internet;
		users were able to use a password that did not comply the requirements for the creation of passwords set out in the Company’s IT security policy.
	
	
	The company did not assess, manage and could not manage the risks associated with the loss of confidentiality of personal data contained in this DB file (with appropriate organisational and technical security measures) as, according to the company, it was not aware of the existence of this DB file in the IT infrastructure it managed. This has led directly to the personal data breach and created the conditions for it to occur (sooner or later).

According to the SDPI, the confidentiality of personal data stored in the DB file would have been protected by the proper use of at least one of the following basic security measures: authenticated access to the DB file only for the staff members of the company; connecting to the storage only from the company’s internal computer network; storage of the DB file with encryption (entrusting the encryption keys only to the authorized staff members of the company); proper monitoring of information resources.

It should be noted that the company has taken the necessary measures to eliminate of, or mitigate, the effects of the PDB and has duly complied with the requirements of Article 33(3) of the GDPR.

 

DECISION

According to Article 83 (4) (a) of the GDPR, the administrative fine imposed on UAB Prime Leasing was based on the company’s total annual worldwide turnover for the preceding financial year (2020) and taking into account the circumstances of the case. The administrative fine of EUR 110,000 imposed under the decision of the SDPI for the established infringement of Article 32 (1) (a), (b), (d) of the GDPR, will achieve the objectives of the GDPR and will be dissuasive and proportionate. 

When deciding on the amount of the fine, the SDPI took into account the following aggravating and mitigating factors:

	Aggravating factor. The security of the DB file was not ensured since its creation resulted in a breach of confidentiality of personal data of a large number of data subjects (Article 83(2)(a) of the GDPR). Although the extent of the damage to the data subjects was not clear at the time of the proceedings, this does not mean that such damage will not occur in the future, especially since, due to the company’s own failure to ensure adequate data security, it is not clear how many persons have had unauthorised access to the DB file and to what extent the data have already been disseminated, but not yet exploited, and it is not yet clear where and to what extent they have been exploited, and such uses  are not yet known.   
	Aggravating factor. The confidentiality of a person’s unique identifier (personal identification number), which is not subject to change and which is prohibited from being made public (Article 3 (2) of the Law on Legal Protection of Personal Data) and according to which various types of information are interconnected in many registers and information systems of the Republic of Lithuania, has been breached due to inadequate data security. In addition, the totality of the personal data stored in the DB file in question directly and unambiguously identifies a specific natural person. It should be noted that these personal data were stored without any additional technical protection and were not encrypted (Article 83 (2) (g) of the GDPR).   
	The company did not apply a risk assessment to the personal data migration process and relied solely on the belief that its performance and the way it was performed was secure. The company, as data controller, had a duty to ensure the security of personal data not only during the data migration process but also during the further processing of the DB file. Such conduct of the company was considered as negligence (Article 83(2)(b) of the GDPR). The fact that the company's actions were found to be negligent rather than intentional provides a ground for mitigating the company’s liability. 

Circumstances taken into account but not considered as mitigating or aggravating factors:

 

	Following the occurrence of the PDB, the company took measures to eliminate or mitigate the PDB, or mitigate its consequences, and duly complied with the requirements of Article 33(3) of the GDPR following the occurrence of the PDB (Article 83(2)(c) of the GDPR). 
	The Company, as data controller, is directly responsible for the inadequate failure to comply with the requirements of Article 32 of the GDPR in respect of the referenced file (Article 83(2)(d) of the GDPR). 
	No sanctions were imposed on the company prior to the present case for infringement of Article 24 and/or Article 32 of the GDPR (Article 83(2)(e) of the GDPR). 
	The company cooperated with the SDPI during the inspection, however the cooperation was not related to the aim to remedy the infringement or to reduce the degree of its potential negative impact.  
	Although the SDPI initiated an investigation of the company on its own initiative based on information it received, the company informed the public about the PDB in respect of which the company’s security was examined. Moreover, the company informed the SDPI about the data breach within the time limits set out in Article 34 of the GDPR (Article 83(2)(h) of the GDPR). In view of the above, it is not considered that the company sought to conceal the personal data breach from the SDPI.  

The SDPI examined the case concerning the imposition of an administrative fine by oral procedure in a closed session and in the presence of representatives of the SDPI and of UAB Prime Leasing. Given that the personal data breach also concerned personal data of citizens of other Member States of the European Union, the decision taken in accordance with the GDPR was also agreed with the personal data protection supervisory authorities of those States. The supervisory authorities of the following countries considered themselves to be the concerned supervisory authorities: Ireland, Germany, Austria, Italy, Portugal, Estonia, Belgium, Denmark, the Netherlands, Spain, Latvia, Sweden, Luxembourg, France, Norway, Finland, Slovakia and Slovenia.

This decision may be appealed against to the Vilnius Regional Administrative Court within one month from the date of its service in a manner established by the Law on Administrative Proceedings of the Republic of Lithuania.
        

                                                    
                    Share
        
        
                            
                    
                
                                                    
                    
                
                                
    

    

    

                
        
        

        

    
    
    

            

            
                Back
                
                
            
        

        
            
                
                    
                        State Data Protection Inspectorate

Data about the Inspectorate is collected and stored in the Legal Person's Register. Registration code 188607912

L. Sapiegos str. 17, LT-10312 Vilnius, Phones: +370 5 271 2804 / 279 1445, Fax +370 5 261 9494, E-mail ada@ada.lt

Consultations by phone +370 5 212 7532
Monday–Thursday 9–11 AM and 1–3 PM

                        © Government of the Republic of Lithuania
                    

                    

                    
                        
                            
                            
                                
                                                                        
                                        
                                    
                                
                                
                                    
                                        
                                    
                                
                            
                        
                    
                
                            
            
        
    

        
            
                
                    Date
                    2021 12 01
                
                                    
                        Rating
                        

    
            1
    

                    
                            
                                

        
                                                
                                    
                            

                                                
        The Personal Data Protection Supervisory Authority, the State Data Protection Inspectorate (SDPI), imposed an administrative fine of EUR 110,000 on UAB Prime Leasing, the operator of the short-term car rental platform CityBee, by its decision taken on 29 November 2021. The SDPI carried out an investigation on its own initiative following information that appeared in the public domain in February 2021 regarding a possible company’s customers personal data breach (PDB). The company was fined for breach of Article 32(1)(a), (b), (d) of the General Data Protection Regulation (GDPR), which governs the obligation to ensure the security of processing of personal data.

ORIGIN OF THE BREACH

The investigation of UAB Prime Leasing has been launched on the initiative of the SDPI following information received that the personal data of the company’s customers, including personal identification numbers, had been made public. During the investigation, the company submitted a report to the Supervisory Authority on the PDB in the company’s IT infrastructure in accordance with the procedure established by legal acts. According to the company, it became aware of the breach from another company providing cyber-security services, which informed it that the CityBee’s customer data was published in CSV files on the website RaidForums.com. The investigation revealed that the publicly disposed data was obtained from an unprotected database backup BACPAC file (DB file) with a creation date of 27 February 2018. It turned out that the exact date of suspension of the external access to the said file was 16 February 2021 11:15 am. In the absence of any factual evidence to suggest that the said file was not publicly accessible during that period, it was concluded that the PDB lasted from 27 February 2018 to 16 February 2021.

Given the established ongoing nature of the PDB, and taking into account the start of the application of the GDPR, the Supervisory Authority assessed during the investigation the obligations of the company under the GDPR, both with regard to the PDB and the requirements for ensuring the security of personal data.  

MAIN RESULTS OF THE INVESTIGATION

The investigation revealed the following:

	The date of creation of the DB file containing the personal data based on which the company’s customer personal data set in the CSV file was created and made public was 27 February 2018.
	The data of 110,302 CityBee users were disclosed and made public.
	433 users who had provided their residential address in other countries of the European Union and/or the European Economic Area were identified. 
	The following sensitive personal data were stored in plain text in a DB file: name, address, telephone number, e-mail address, personal identification number, driving licence number, type of payment card and the last four digits of the card number, the date of expiration of the payment card and the user identifier (token) in Braintree.
	The company failed to ensure adequate personal data management and control:
	
		did not appoint a person with appropriate competence to be responsible for security and risk management;
		did not separate the duties and responsibilities in the field of IT development and maintenance from the duties and responsibilities in the field of cyber security;
		did not ensure access to the DB file logs to record and store entries, and did not ensure that actions performed on DB files were recorded, monitored and evaluated;
		the DB file was stored unencrypted, so that a person with technical knowledge could get full access to the data contained in the file after downloading it. The personal identification numbers in the DB file were also stored in plain text and unprotected by hashing or encryption algorithms;
		the passwords in the DB file were encrypted with the weak and relatively insecure hashing algorithm SHA-1 . It was easy for persons with technical knowledge to find out the real (unmasked by means of hash) values of some (or all) of the passwords stored in the file by using publicly available tools and/or specialised tools on the Internet;
		users were able to use a password that did not comply the requirements for the creation of passwords set out in the Company’s IT security policy.
	
	
	The company did not assess, manage and could not manage the risks associated with the loss of confidentiality of personal data contained in this DB file (with appropriate organisational and technical security measures) as, according to the company, it was not aware of the existence of this DB file in the IT infrastructure it managed. This has led directly to the personal data breach and created the conditions for it to occur (sooner or later).

According to the SDPI, the confidentiality of personal data stored in the DB file would have been protected by the proper use of at least one of the following basic security measures: authenticated access to the DB file only for the staff members of the company; connecting to the storage only from the company’s internal computer network; storage of the DB file with encryption (entrusting the encryption keys only to the authorized staff members of the company); proper monitoring of information resources.

It should be noted that the company has taken the necessary measures to eliminate of, or mitigate, the effects of the PDB and has duly complied with the requirements of Article 33(3) of the GDPR.

 

DECISION

According to Article 83 (4) (a) of the GDPR, the administrative fine imposed on UAB Prime Leasing was based on the company’s total annual worldwide turnover for the preceding financial year (2020) and taking into account the circumstances of the case. The administrative fine of EUR 110,000 imposed under the decision of the SDPI for the established infringement of Article 32 (1) (a), (b), (d) of the GDPR, will achieve the objectives of the GDPR and will be dissuasive and proportionate. 

When deciding on the amount of the fine, the SDPI took into account the following aggravating and mitigating factors:

	Aggravating factor. The security of the DB file was not ensured since its creation resulted in a breach of confidentiality of personal data of a large number of data subjects (Article 83(2)(a) of the GDPR). Although the extent of the damage to the data subjects was not clear at the time of the proceedings, this does not mean that such damage will not occur in the future, especially since, due to the company’s own failure to ensure adequate data security, it is not clear how many persons have had unauthorised access to the DB file and to what extent the data have already been disseminated, but not yet exploited, and it is not yet clear where and to what extent they have been exploited, and such uses  are not yet known.   
	Aggravating factor. The confidentiality of a person’s unique identifier (personal identification number), which is not subject to change and which is prohibited from being made public (Article 3 (2) of the Law on Legal Protection of Personal Data) and according to which various types of information are interconnected in many registers and information systems of the Republic of Lithuania, has been breached due to inadequate data security. In addition, the totality of the personal data stored in the DB file in question directly and unambiguously identifies a specific natural person. It should be noted that these personal data were stored without any additional technical protection and were not encrypted (Article 83 (2) (g) of the GDPR).   
	The company did not apply a risk assessment to the personal data migration process and relied solely on the belief that its performance and the way it was performed was secure. The company, as data controller, had a duty to ensure the security of personal data not only during the data migration process but also during the further processing of the DB file. Such conduct of the company was considered as negligence (Article 83(2)(b) of the GDPR). The fact that the company's actions were found to be negligent rather than intentional provides a ground for mitigating the company’s liability. 

Circumstances taken into account but not considered as mitigating or aggravating factors:

 

	Following the occurrence of the PDB, the company took measures to eliminate or mitigate the PDB, or mitigate its consequences, and duly complied with the requirements of Article 33(3) of the GDPR following the occurrence of the PDB (Article 83(2)(c) of the GDPR). 
	The Company, as data controller, is directly responsible for the inadequate failure to comply with the requirements of Article 32 of the GDPR in respect of the referenced file (Article 83(2)(d) of the GDPR). 
	No sanctions were imposed on the company prior to the present case for infringement of Article 24 and/or Article 32 of the GDPR (Article 83(2)(e) of the GDPR). 
	The company cooperated with the SDPI during the inspection, however the cooperation was not related to the aim to remedy the infringement or to reduce the degree of its potential negative impact.  
	Although the SDPI initiated an investigation of the company on its own initiative based on information it received, the company informed the public about the PDB in respect of which the company’s security was examined. Moreover, the company informed the SDPI about the data breach within the time limits set out in Article 34 of the GDPR (Article 83(2)(h) of the GDPR). In view of the above, it is not considered that the company sought to conceal the personal data breach from the SDPI.  

The SDPI examined the case concerning the imposition of an administrative fine by oral procedure in a closed session and in the presence of representatives of the SDPI and of UAB Prime Leasing. Given that the personal data breach also concerned personal data of citizens of other Member States of the European Union, the decision taken in accordance with the GDPR was also agreed with the personal data protection supervisory authorities of those States. The supervisory authorities of the following countries considered themselves to be the concerned supervisory authorities: Ireland, Germany, Austria, Italy, Portugal, Estonia, Belgium, Denmark, the Netherlands, Spain, Latvia, Sweden, Luxembourg, France, Norway, Finland, Slovakia and Slovenia.

This decision may be appealed against to the Vilnius Regional Administrative Court within one month from the date of its service in a manner established by the Law on Administrative Proceedings of the Republic of Lithuania.
        

                                                    
                    Share
