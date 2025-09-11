PS 54/2021
Carrer Rosselló, 214, esc. A, 1st 1st
08008 Barcelona

File identification

Resolution of the sanctioning procedure no. PS 54/2021, referring to the Department of Health of

the Generalitat de Catalunya.

Background

1. On 30/06/2021, a letter was sent to the Catalan Data Protection Authority
of a person who filed a complaint against the Department of Health on the occasion of a
alleged breach of personal data protection regulations.

Specifically, the complainant stated that he had detected certain vulnerabilities in
security on the website that the Department of Health has made available to the public for

request a vaccination appointment (https://vacunacovid.catsalut.gencat.cat), as it allows access to
very easily by unauthorized third parties to vaccination data, health card, mobile,
mail, full name, appointment for vaccination, etc. All you have to do is have the number
DNI (or health card) of the victim. No extra steps are required to verify authenticity, either

receive no verification SMS (other than the initial one) ”.

The complainant detailed in his writing how information could be accessed
of third parties, and literally indicated the following steps:

“1. (...)
2. (...)
3. (...)

4. (...).
5. (...)
6. (...)

7. (...)

In short, the complainant stated that once the user was validated on the website
https://vacunacovid.catsalut.gencat.cat, making certain calls to the API (application

programming interface) of the web through the browser console, could be accessed
data from third parties.

Along with his writing, the complainant provided screenshots in which

documented each of the steps it had taken in order to access information from
third parties. The documentation provided was anonymized
third parties.

This complaint was assigned the number IP 264/2021.

                                                                                          Page 1 of 8, PS 54/2021
08008 Barcelona, 214, esc. A, 1st 1st

2. The Authority shall open a prior information phase, in accordance with the provisions of Article 7 of

Decree 278/1993, of 9 November, on the sanctioning procedure for application to the areas
of competence of the Generalitat, and article 55.2 of Law 39/2015, of 1 October, of
common administrative procedure of public administrations (hereinafter, LPAC), for
determine whether the facts were likely to motivate the initiation of disciplinary proceedings.

3. On 05/07/2021, a notification was received from the Health Department of a
breach of security of personal data, in accordance with the provisions of Article 33 of the RGPD,
consisting of a possible cyberattack on the "K2 vaccination platform" as a result

detected an unusual query volume on that platform.

4. In the prior information phase initiated following the complaint, on 09/07/2021 the
Department of Health to comply with the following:

- Report on the vulnerability detected by the complainant (antecedent 1st), the
   circumstances that would have led to it and if it had already been amended.
- Indicate whether, prior to the launch of the platform
   https://vacunacovid.catsalut.gencat.cat, a risk analysis had been prepared for the

   processing of personal data through this channel. If so, please provide one
   copy.

5. On 22/07/2021, a letter from the Department of Health entered the Authority through the

which complemented the notification of the security breach he had made on 07/05/2021.

In a written statement, the Department of Health described the security breach as "the attack consists of
when making sequential DNI requests, taking advantage of a lack in the validation of the

requests, skipping the queue and directly requesting the node ”.

6. On 22/07/2021, the Department of Health responded to the request for information
of 09/07/2021 (antecedent 4th), through a letter in which he stated the following:

- That “the vulnerability described in the file was identified on July 1 as a result of
   the security incident reported in the NVS 67/2021 file against the website
   (https://vacunacovid.catsalut.gencat.cat) ”, which consists of the return of information
   linked to a person validating only the CIP or DNI. The information he returned in a

   first moment is: DNI, CIP, name and surname, mobile phone, e-mail address, day and time of
   the appointment, place of vaccination, type of vaccine ”.
- That “the following containment, mitigation and improvement measures have been taken:
    • Extend the verification code from 6 numeric digits to 6 alpha numeric digits

    • Move the Frontal code validation to the node.
    • Application of IP ban measures per number of requests per minute (maximum 500
        requests from Spain and 50 per minute from abroad)

                                                                                    Page 2 of 8, PS 54/2021
08008 Barcelona, 214, esc. A, 1st 1st

    • Blocking by a compromise indicator identified in the User Agent of the request

        attacker.
    • Blocking known attacker IPs
    • Encryption of the answer
    • Contact the abuse service of the attacking IP providers

    • Restrict the information returned by the application when making a request, leaving only the
        information regarding the appointment (date, time and place of vaccination and type of vaccination) ”.
- That “individual cases were difficult to detect but massive requests activated the

    control and monitoring system ”.
- That with regard to risk analysis, due in part to the urgency of initiating the process of
   vaccination and on the other hand, the need to incorporate the maximum volume of population in the
   vaccination process in the shortest possible time safety tests were performed for
   no in-depth risk analysis was carried out ”.

7. On 14/07/2021, another had access to the Catalan Data Protection Authority
written complaint against the Department of Health, on the grounds of an alleged breach of
regulations on the protection of personal data.

Specifically, the complainant stated that in a digital media
(https: // www. (...)) a news item had been published stating that the
self-appointment to receive the coronavirus vaccine from the Generalitat de Catalunya, he explained

personal data of citizens who have made use of this platform to third parties not
authorized ”.

This complaint was assigned the number IP 283/2021

8. On 22/09/2021 the Department of Health was required to comply with
Next:

- Report if the security issue that was reported was the same as in the

    which referred to the security vulnerability that the Department of Health had committed
    reference in his office dated 22/07/2021, in response to the request of this Authority
    had addressed to him in the framework of the previous information initiated as a result of complaint no. IP
    264/2021. And, if not, answer the following:

- Report in detail on the security issue that the news item is referring to,
    the circumstances that would have led to it and if it has already been amended.

9. On 08/10/2021, the Department of Health responded to this second request for

means of writing through which he stated the following:

- That the security problem that was echoed in the news item is the same as the one
   referred to the security vulnerability detected in the framework of the prior information initiated
   following complaint no. IP 264/2021, to the extent that the publication dates coincide and

                                                                                   Page 3 of 8, PS 54/2021
Carrer Rosselló, 214, esc. A, 1st 1st
08008 Barcelona

   that the same news item includes the literal content of the press release made by the
   Department of Health in the sense that the safety breach had been communicated to the Authority a
   through the corresponding security breach notification that resulted in the case
   NVS 67/2021.

10. On 27/10/2021, the director of the Catalan Data Protection Authority agreed
initiate disciplinary proceedings against the Department of Health for two alleged offenses
infractions: an infraction provided for in article 83.5.a), in relation to article 5.1.f); and, another

infringement provided for in Article 83.4.a), in relation to Article 35; all of them of the Regulation (EU)
2016/679 of the European Parliament and of the Council of 27 April on the protection of
natural persons with regard to the processing of personal data and the free movement of such data
(hereinafter, RGPD. This initiation agreement was notified to the imputed entity on

10/27/2021

In the initiation agreement, the imputed entity was granted a period of 10 working days to formulate
allegations and propose the practice of evidence that he deems appropriate to defend his

interests. This deadline was far exceeded without the Department of Health
make allegations.

11. On 12/21/2021, the instructor of this procedure made a proposal to

resolution, in which it proposed the modification of the legal qualification of the imputed facts that
had been made in the initiation agreement and this in accordance with the provisions of Article 89.3 of
the LPAC. The instructor, once the documentation incorporated in the
actions, he considered that the two imputed facts constituted, each of them, a violation of the

data security. In view of the above, the instructor in the motion for a resolution
proposed that the director of the Catalan Data Protection Authority warn the
Department of Health as responsible for the violation provided for in Article 83.4.a) in relation
with Article 32 of the RGPD.

This motion for a resolution was notified on 21/12/2021 and a deadline of 10 was granted
days to make allegations.

12. The deadline has been exceeded and no allegations have been made.

Proven facts

1. From an indefinite date, but in any case until 30/06/2021, the systems
information from the Department of Health allowed that, once the user was validated on the website
https://vacunacovid.catsalut.gencat.cat (website that the Department had made available to the

in order to request a vaccination appointment), by calling the web API
access data from other health system users (such as ID, CIP, first and last name,
mobile phone, email address, date and time of appointment, place of vaccination and type of vaccine).

                                                                                      Page 4 of 8, PS 54/2021
08008 Barcelona, 214, esc. A, 1st 1st

2. In relation to the processing of data linked to the launch of the website
https://vacunacovid.catsalut.gencat.cat, the Department of Health did not perform an analysis of
risks to determine the appropriate technical and organizational measures to ensure the

data security.

Fundamentals of law

1. The provisions of the LPAC and Article 15 of the Decree apply to this procedure.
278/1993, in accordance with the provisions of DT 2a of Law 32/2010, of 1 October, of the Authority
Catalan Data Protection. In accordance with Articles 5 and 8 of Law 32/2010, the
resolution of the sanctioning procedure corresponds to the director of the Catalan Authority of

Data Protection.

2. In relation to the facts described in points 1 and 2 of the section on proven facts, relating to the
data security, reference should be made to Article 32 of the RGPD, which provides that:

        “1. Taking into account the state of the art, the costs of application, and the
        nature, scope, context and purposes of treatment, as well as risks
        of variable probability and severity for the rights and freedoms of the

        natural persons, the controller and the controller shall apply
        appropriate technical and organizational measures to ensure a level of
        risk-appropriate security, which may include, inter alia:
        a) pseudonymization and encryption of personal data;
        (b) the ability to ensure confidentiality, integrity, availability and

        permanent resilience of treatment systems and services;
        c) the ability to restore availability and access to data
        personnel quickly in the event of a physical or technical incident;
        (d) a process of regular verification, evaluation and assessment of the

        effectiveness of technical and organizational measures to ensure the security of the
        treatment.
        2. When assessing the adequacy of the level of security they will have
        particularly taking into account the risks posed by data processing, in

        particular as a result of accidental destruction, loss or alteration
        or unlawful transmission of personal data transmitted, stored or otherwise processed,
        or unauthorized communication or access to such data.
        (...) ”

As mentioned, with respect to the conduct described in points 1 and 2 of the section on proven facts, es
considers that in the course of this procedure it has been proven that the Department of Health has
violated the security measures listed below separately, by appointment
of the precepts that regulate them:

                                                                                    Page 5 of 8, PS 54/2021
Carrer Rosselló, 214, esc. A, 1st 1st
08008 Barcelona

2.1.- In relation to the proven fact 1st:

In accordance with the provisions of the first additional provision of Organic Law 3/2018, of 5 of
December, on the protection of personal data and the guarantee of digital rights (hereinafter
LOPDGDD), it is necessary to mention the provisions of Royal Decree 3/2010, of 8 January, which
regulates the National Security Scheme (ENS) in the field of e-government, and

specifically its section 4.2.2 “Access requirements” of Annex II (Measures of
Security ”):

        “The access requirements will be met as follows:

        a) The resources of the system will be protected by some mechanism that prevents their
        use, except for entities that enjoy access rights
        enough. ”

2.2.- In relation to the 2nd proven fact:

At this point it is necessary to make express reference to the provisions of section 2 of Article 32 of

the RGPD already transcribed, which obliges the data controller to carry out a risk analysis
of those treatments that you plan to do, in order to determine the security measures that
must be implemented.

In accordance with the above, the facts set out in points 1 and 2 of the facts section
proved to be the infringement provided for in Article 83.4.a) of the RGPD, which classifies as such the
violation of “the obligations of the manager and the manager in accordance with Articles 8, 11,
25 to 39, 42 and 43 ”, including the one provided for in Article 32.

These conducts have been listed as a serious infraction in article 73.f) of the LOPDGDD, in the
as follows:

        “F) Failure to adopt any technical and organizational measures
        appropriate to ensure a level of safety appropriate to the risk of treatment, in
        the terms required by Article 32.1 of Regulation (EU) 2016/679. "

3. Article 77.2 LOPDGDD provides that in the case of offenses committed by those responsible or
in charge listed in art. 77.1 LOPDGDD, the competent data protection authority:

        "(...) he must issue a resolution sanctioning them with a reprimand. The
        resolution shall also set out the measures to be taken to end it
        conduct or correct the effects of the offense that has been committed.
        The decision must be notified to the controller or controller, a

        the body on which it depends hierarchically, where applicable, and those affected who have the
        interested party, if any. "

                                                                                       Page 6 of 8, PS 54/2021
Carrer Rosselló, 214, esc. A, 1st 1st
08008 Barcelona

In terms similar to the LOPDGDD, article 21.2 of Law 32/2010, determines the following:

        “2. In the case of infringements committed in relation to publicly owned files, the
        director of the Catalan Data Protection Authority must issue
        a resolution declaring the infringement and setting out the measures to be taken for
        correct its effects (...) ”.

By virtue of this faculty, and with regard to the proven fact 2nd, it is appropriate to require the Department of Health
because as soon as possible and in any case within a maximum period of 1 month from
the day after the notification of this resolution, certify to this Authority that it has carried out

a risk analysis in accordance with Article 32 of the RGPD, in order to determine the
appropriate technical and organizational measures to ensure the security of the data processed a
through the platform https://vacunacovid.catsalut.gencat.cat.

With regard to the 1st proven fact, it is not appropriate to require the adoption of any corrective measures, as the
The Department of Health accredited this Authority, within the framework of NVS 67/2021, to have
take the appropriate steps to resolve the security incident detected on the platform

https://vacunacovid.catsalut.gencat.cat.

For all this, I resolve:

1. To reprimand the Department of Health as responsible for the infraction provided for in the article
83.4.a) in relation to Article 32, both of the RGPD.

2. Require the Department of Health to prove to this Authority that it has been carried out
the action indicated in the 3rd legal basis, within the indicated period.

3. Notify this resolution to the Department of Health.

4. Communicate the resolution to the Catalan Ombudsman, in accordance with the provisions of article 77.5
of the LOPDGDD.

5. Order that this resolution be published on the Authority’s website (apdcat.gencat.cat), of
in accordance with Article 17 of Law 32/2010, of 1 October.

Against this resolution, which terminates the administrative procedure in accordance with articles 26.2 of the
Law 32/2010, of 1 October, of the Catalan Data Protection Authority, and 14.3 of the Decree
48/2003, of 20 February, approving the Statute of the Catalan Agency for the Protection of
In this case, the accused entity may, on an optional basis, lodge an appeal for reversal

the director of the Catalan Data Protection Authority, within one month from
the day after its notification, in accordance with the provisions of Article 123 et seq

                                                                                        Page 7 of 8, PS 54/2021
Carrer Rosselló, 214, esc. A, 1st 1st
08008 Barcelona

the LPAC. You can also lodge an administrative appeal directly with the courts

administrative disputes, within two months from the day after its
notification, in accordance with articles 8, 14 and 46 of Law 29/1998, of 13 July, regulating
administrative contentious jurisdiction.

If the accused entity declares to the Authority its intention to lodge a contentious appeal
administrative against the firm resolution in administrative way, the resolution will be suspended

precautionarily in the terms provided for in Article 90.3 of the LPAC.

Likewise, the imputed entity may file any other appeal that it deems appropriate for
defend their interests.

                                                                                              Page 8 of 8
