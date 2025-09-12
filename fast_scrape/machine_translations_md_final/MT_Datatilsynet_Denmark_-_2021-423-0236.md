Supervision of Høje-Taastrup Municipality's access rights in file systems

Date: 02-03-2022

Decision Public authorities

The Danish Data Protection Agency criticizes Høje-Taastrup Municipality for not having complied with the rules on processing security.

Journal number: 2021-423-0236

Summary

Høje-Taastrup Municipality was among the selected municipalities that the Danish Data Protection Agency supervised in the summer of 2021 in accordance with the rules on data protection.

The audit focused on access rights in Høje-Taastrup Municipality's file systems. A file system is in this context, the path structure in which the municipality stores data on their servers. The audit looked at whether there were differentiated rights to the various folders with information, as well as whether access was allocated based on work-related needs.

In connection with the audit, the Danish Data Protection Agency selected a database where access had been granted for 12 AD groups, ie. 12 groups of users.

The Danish Data Protection Agency found that Høje-Taastrup Municipality - by not having guidelines or objective criteria for registration in the AD groups - had not complied with the rules on treatment security.

The Danish Data Protection Agency emphasized that 410 people had AD access to the selected database, and that the municipality could not document that an assessment had been made of the employees' work-related needs for access to the database in question.

Against this background, the Danish Data Protection Agency expressed criticism of Høje-Taastrup Municipality.

1. Written supervision of Høje-Taastrup Municipality's processing is personal information

Høje-Taastrup Municipality was among the authorities that the Danish Data Protection Agency had chosen in the summer of 2021 to supervise in accordance with the Data Protection Ordinance \[1\] and the Data Protection Act \[2\].

The Data Inspectorate's inspection was a written inspection, which focused on access rights in Høje-Taastrup Municipality's file systems, cf. Article 32 of the Data Protection Regulation.

By letter dated 9 June 2021, the Danish Data Protection Agency notified the Authority of Høje-Taastrup Municipality and in this connection requested a list of the municipality's file systems, in which information on natural persons is processed.

Høje-Taastrup Municipality appeared on 30 June 2021 with a statement on the matter.

By letter dated 11 August 2021, the Danish Data Protection Agency requested Høje-Taastrup Municipality to account for the municipality's access control to personally identifiable user data in GIS \[3\] in one of the municipality's drives. Against this background, Høje-Taastrup Municipality sent a supplementary statement on the matter on 1 September 2021.

On the basis of Høje-Taastrup Municipality's statement, the Danish Data Protection Agency requested on 13 October 2021 to receive a list of the users who had been granted access via 12 AD groups to a database in GIS, in order to carry out random checks of the users. The Danish Data Protection Agency also requested to receive the municipality's guidelines for registration in the relevant AD groups, including an assessment of the work-related needs for access.

Høje-Taastrup Municipality replied to the letter on 4 November 2021.

2. The Danish Data Protection Agency's decision

After a review of the case, the Danish Data Protection Agency finds that there are grounds for expressing criticism that Høje-Taastrup Municipality's processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation. 1.

Below is a more detailed review of the information that has emerged in connection with the written inspection and a justification for the Danish Data Protection Agency's decision.

3. Information of the case

Høje-Taastrup Municipality has stated that the municipality uses NTFS file system on Windows servers. Allocation of access to network drives takes place via the municipality's IT department through a form. Høje-Taastrup Municipality issues a number of shares and delimits access with NTFS rights to folders and underlying structures. NTFS permissions are assigned to AD security groups.

The IT department reports the employee's AD user to access security groups upon request.

The submitted list of user-turned-shares shows, among other things, that H: \\ is the GIS team's dedicated network drive.

About the H-drive, Høje-Taastrup Municipality has stated that data is in a shared folder 'given' on a Microsoft Windows file server. Access to the folder is restricted via NTFS permissions. Thus, only administrators and users who are members of the AD group are "given" access. When one of the municipality's employees logs on to a client PC with its AD user, the centrally controlled Group Policy for drive connection is interpreted, and only users who are part of the AD group are 'given' the connected 'given' folder as an H drive. . In this connection, Høje-Taastrup Municipality has stated that there are 26 users on the H-drive who have access, and only access to name and address data is given.

Høje-Taastrup Municipality has identified two databases that contain personal information, including LOIS, which contains social security numbers and is used to search for consultation lists, etc. For the LOIS database, there are e.g. granted access to 12 AD groups.

Høje-Taastrup Municipality has stated that no guidelines have been written down which describe enrollment in the AD groups. Registration therefore takes place through the general user creation via an IT case management system.

In this connection, Høje-Taastrup Municipality has stated that as there are no guidelines for registration, the municipality can not document an assessment of the work-related need. However, the municipality can document which users have used their access to the LOIS database.

Furthermore, Høje-Taastrup Municipality has stated that the LOIS database will not be exhibited to the users who have access to it. Users need to know it exists, know its name and know what software they need to use to access it.

It therefore requires relatively high technical competencies to be able to use the access. Therefore, only 35 users have accessed the database in the last six months. It is also Høje-Taastrup Municipality's assessment that all 35 employees have had a work-related need for access.

Høje-Taastrup Municipality has stated that the municipality will, on the basis of the supervision, prepare guidelines for allocating access to the database.

Høje-Taastrup Municipality has sent a list of users who have AD access to LOIS. The list includes 410 people.

Høje-Taastrup Municipality has stated that the municipality does not have a procedure for password protection that directly addresses file structures. The municipality has therefore submitted a section from the security handbook on the municipality's general procedures for passwords. It appears from this:

\[Excluded from publication\].

4. The Danish Data Protection Agency's assessment

It follows from Article 32 (1) of the Data Protection Regulation 1, that the data controller must take appropriate technical and organizational measures to ensure a level of security that is appropriate to the risks involved in the data controller's processing of personal data.

Thus, the data controller has a duty to identify the risks that the data controller's processing poses to the data subjects and to ensure that appropriate security measures are put in place to protect the data subjects against these risks.

The Danish Data Protection Agency is of the opinion that the requirement for adequate security will normally mean that user access to systems is limited to the personal data that is necessary for the user's work-related needs, and that measures have been implemented to grant and deprive access rights so that only users who have a work-related need to access the information are authorized to do so.

The Danish Data Protection Agency finds that Høje-Taastrup Municipality - by not having guidelines or objective criteria for registration in the AD groups - has not taken appropriate technical or organizational measures to ensure a level of security that matches the risks involved in the municipality's processing of personal data. , in accordance with Article 32 (2) of the Data Protection Regulation. 1.

The Danish Data Protection Agency has emphasized that 410 people have AD access to the LOIS database, and that the municipality cannot document that an assessment has been made of the employees' work-related needs for access to the LOIS database.

The Danish Data Protection Agency then finds grounds for expressing criticism that Høje-Taastrup Municipality's processing of personal data has not taken place in accordance with the rules in Article 32 (1) of the Data Protection Regulation. 1.

The Danish Data Protection Agency notes that it cannot lead to a different result that it requires relatively high technical competencies to use the access.

The Danish Data Protection Agency has noted that Høje-Taastrup Municipality intends to prepare guidelines for allocating access to the database.

In this connection, the Danish Data Protection Agency must encourage the municipality to objectively describe which function or work task must be present to gain access, and that a manager for this function verifies that the specific employee has this need to perform the task.

The Danish Data Protection Agency also finds no basis for expressing criticism of Høje-Taastrup Municipality's general procedures for passwords.

\[1\] Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of individuals with regard to the processing of personal data and on the free movement of such data and repealing Directive 95/46 / EC (General data protection regulation).

\[2\] Act No. 502 of 23 May 2018 on supplementary provisions to the Regulation on the protection of individuals with regard to the processing of personal data and on the free movement of such data (the Data Protection Act).

\[3\] Geographical information system
