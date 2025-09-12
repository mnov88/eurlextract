# Court of Appeal of Brussels - 2019/AR/1006

## Case Information

**Court:** Court of Appeal of Brussels (Belgium)

**Jurisdiction:** Belgium

**Relevant Law:** Article 16 GDPR

**Decided:** 09.10.2019

**National Case Number/Name:** 2019/AR/1006

**Appeal from:** APD/GBA (Belgium)

**Original Language(s):** Dutch

**Original Source:** gegevensbeschermingsautoriteit.be (in Dutch)

**Initial Contributor:** Martijn Staal

The Court of Appeal of Brussels held that data subjects have the right under [Article 16 GDPR](/index.php?title=Article_16_GDPR "Article 16 GDPR") for their name to be spelled correctly when processed by a bank's computer systems.

## Contents

*   [1 English Summary](#English_Summary)
    *   [1.1 Facts](#Facts)
    *   [1.2 Holding](#Holding)
*   [2 Comment](#Comment)
*   [3 Further Resources](#Further_Resources)
*   [4 English Machine Translation of the Decision](#English_Machine_Translation_of_the_Decision)

## English Summary

### Facts

Client Y of Bank X requested the bank on the basis of [Article 16 GDPR](/index.php?title=Article_16_GDPR "Article 16 GDPR") to write their name with the appropriate diacritics. The Bank argued that this was not possible with their current computer systems and could thus not fulfil the request. In response, the client lodged a complaint with the [Belgian DPA](/index.php?title=APD/GBA_\(Belgium\) "APD/GBA (Belgium)").

The Litigation chamber (Geschillenkamer) of the DPA ruled on the 15th of May 2019 that the argument of the Bank concerning the technical impossibility was not sufficient. The Litigation chamber ruled that the Bank should comply with the request of Client Y. The Bank decided to appeal the decision, because - inter alia - it was already working on upgrading their computer systems and the problem should be fixed within several months.

In the appeal procedure, the Bank argues that there is no obligation to use correct diacritics in capital letters, and that this is not "personal data". The DPA disagrees and argues that Article 16 GDPR unreservedly grants the right to the data subject to request the rectification of incorrect personal data without delay. Correct spelling of one's name is personal data in accordance with [Article 4(1) GDPR](/index.php?title=Article_4_GDPR "Article 4 GDPR"), according to the DPA.

### Holding

The Court of Appeal of Brussels held that, in accordance with [Article 16 GDPR](/index.php?title=Article_16_GDPR "Article 16 GDPR"), the data subject has the right for their name to be correctly spelled when processed by the computer systems of the Bank. To claim in 2019 that adapting a computer system to correctly handle diacritics would cost several months of work and/or constitute additional costs for the Bank, does not allow the Bank to disregard the rights of the data subject. A correctly functioning banking institution may be expected to have computing systems that meet current standards, including the right to correct spelling of people's names.

## Comment

_Share your comments here!_

The machine translation of the Dutch original says:

Bank X also explained to the GBA:

```
    The current customer data management application of De Bank X was launched in 1995
    used and still running on a mainframe system from US
    make. This system only supported EBCDIC ("extended binary-coded decimal
    interchange code"). This 8-bit standard to store letters and punctuation marks was developed
    in 1963-1964 doIBM for their mainframes and AS/400 computers. The code comes from
    of the use of punch cards and knew the following characters :

```

\[large empty space where the original had an image of an EBCDIC code table\]

```
    It is for this reason that all names of our customers are stored in capital letters and there
    no letters with accents are present because the latter were not recognized by the
    system. Letters with accents were added to EBCDIC in the meantime, but this became
    not included in customer data application updates.
    In the near future stepthe Bank X from the current application, as well as from the mainframe system and this new one
    environment will certainly be able to handle letters with accents.

```

If I carefully feed the equivalent passages to Google Translate (in pieces, as Google Translate has some issues if I hand it the entire text of those passages - "De Bank X" seems to especially confuse it), and attempt to manually fix up some things (with what infinitesimal understanding of Dutch that I have :-(), I get, instead:

```
   Bank X also provided an explanation to the GBA:
   Bank X's current customer data management application was launched in 1995 and still runs on
   an American-made mainframe system. This system only supported EBCDIC ("extended binary-coded
   decimal interchange code"). This is an 8-bit standard for storing letters and punctuation marks,
   developed in 1963-1964 by IBM for their mainframes and AS/400 computers. The code stems from
   the use of punch cards and had the following characters:

```

\[EBCDIC code table\]

```
   It is for this reason that all our customer names are stored in capital letters and there are
   no accented letters because the latter were not recognized by the system. Accented letters have
   since been added to EBCDIC, but this was not included in updates to the customer data application.
   In the near future, Bank X will abandon the current application, as well as the mainframe system
   and this new one environment will certainly be able to deal with letters with accents.

```

The latter makes it a bit clearer that this is not an _inherent_ problem with EBCDIC, it was a problem with the _version_ of EBCDIC that the bank's application used - a version from before IBM added "code pages" that supported accented letters. (The version of EBCDIC in the code table also had support for lower-case letters, but that's a separate issue - that may have been an issue with the card punches or with the punched card code that prevented the customer name from being easily put on a punched card.)

A Web search ofr "EBCDIC is incompatible with the GDPR" will find a bunch of pages that appear to make that bold assertion, rather than a more nuanced assertion that, because it supported only the original US version of EBCDIC, and no changes were made to support EBCDIC code pages that would support names with accented characters, the customer's name couldn't be entered with a correct spelling. [Gharris](/index.php?title=User:Gharris&action=edit&redlink=1 "User:Gharris (page does not exist)") ([talk](/index.php?title=User_talk:Gharris&action=edit&redlink=1 "User talk:Gharris (page does not exist)")) 09:10, 5 May 2024 (UTC)

## Further Resources

_Share blogs or news articles here!_

## English Machine Translation of the Decision

The decision below is a machine translation of the Dutch original. Please refer to the Dutch original for more details.

```
Court of Appeal Brussels - 2019/AR/1006 -p. 2

ON:

1. The Bank X. \[...\] applicant ,

represented \[...\]

against the decision of the Disputes Chamber of the Data Protection Authority of 15 May

2019,

IN RETURN FOR:

1. The DATA PROTECTION AUTHORITY, independent public institution - supervisory authority
authority, with company number 0694.679.950, with registered office at 1000 BRUSSELS,
Drukpersstraat 35, hereinafter referred to as "GBA"

first defendant,

represented by mr. ROETS Joos, lawyer, with office in 2018 ANTWERP,

Oostenstraat 38/201

2. Y. \[...\], second defendant,

who does not appear or was legally represented;

1. Jurisdiction of the Court.

The Court of Appeal derives its jurisdiction from a petition for appeal lodged by De Bank X on
24 June 2019 was deposited with the registry of the Court of Appeal and whereby a

recourse in accordance with article 108 § 1 of the law of December 3, 2017 establishing
of the Data Protection Authority (hereinafter "DPA Act") is instituted against the decision
of 15 May 2019 by the dispute chamber of the Data Protection Authority (hereinafter referred to as
"GBA").

            rPAGE 01-00001493070-0002-0022-01-01- � 

            L \_JCourt of appeal Brussels -2019/AR/1006 - p. 3 136

2. The contested decisions the facts.

The contested decision orders that Y's request be complied with and that until
correction would be made. In a very extreme way, the question boils down to this: Y
wishes the accent "é" to be added to his name.

He wishes his name to be listed as:
      Y
      Y
      or failing that Y

Bank X maintains that its IT system dating from 1995 is not in a position to
mention accents in a name.

Bank X also explained to the GBA:
     The current customer data management application of De Bank X was launched in 1995
     used and still running on a mainframe system from US
     make. This system only supported EBCDIC ("extended binary-coded decimal
     interchange code"). This 8-bit standard to store letters and punctuation marks was developed
     in 1963-1964 doIBM for their mainframes and AS/400 computers. The code comes from
     of the use of punch cards and knew the following characters :

     It is for this reason that all names of our customers are stored in capital letters and there
     no letters with accents are present because the latter were not recognized by the
     system. Letters with accents were added to EBCDIC in the meantime, but this became
     not included in customer data application updates. In the near future step

           1 PAGE □1-□□□□149307□-□□□3-□□22- □1-□1-� 

           L \_J'
Court of Appeal Brussels -2019/AR/1006 -p. 4 13-1

      the Bank X from the current application, as well as from the mainframe system and this new one
      environment will certainly be able to handle letters with accents.

The dispute chamber of the GBA has regarded this explanation as insufficient. That a banking institution
in 2018 would not be able to correctly write a customer's name, explaining that
it still uses a 1995 IT system was considered insufficient.

3. The claims before the court,

3.1.
By summary statement lodged at the registry of the Court of Appeal on 14 August 2019, Bank X claims:

        Declare the appeal admissible and well founded.
       According to the decision of 15 May 2019 of the Disputes Chamber of
       to destroy the data protection authority and the original request of the
       to declare Mr Y unfounded in the exercise of his right to rectification.
       Subordinate order, before doing justice, direct the following question for a preliminary ruling to
       the Court of Justice of the European Union:
               1. Blocks the right to an effective remedy

               a supervisory authority within the meaning of Art. 78 GDPR means that this provision in
               court can only be brought against the supervisory authority,
               without the natural person whose right to rectification within the meaning of Art. 16AVG
               is at stake in the debate can be involved as respondent?
       Order the defendants to pay the costs of the proceedings for the concludant estimated at:
       - Roll right: p.m.

       - Court fee: 1,440.00 EUR"

3.2.
The GBA concludes as follows by statement filed on September 6, 2019:
        "In principal order, annul the appeal of the appellant because of its lateness;
               In subordinate order, the appeal of the appellant is void, at least inadmissible,
       declare in so far as it is directed against Mr. Y as the respondent, or for at least

       mr. Y to set aside the case;
        For the rest, declare the application unfounded;
               In further subordinate order, before doing justice, the following preliminary ruling:
       questions to the Court of Justice of the European Union:
               "1. Includes the right to rectification within the meaning of Art. 16 of the GDPR, also read in
               the light of art. 8 of the EU Charter, including the data subject's right to,
               when his personal data has been processed in Latin script, a spelling of

               request his personal data that takes into account the applicable diacritics
               characters that appear in the official spelling of his name ?
               2. And if so, does art. 16 of the GDPR the possibility to the national
               supervisory authority and the national court to make an assessment

              r PAGE 01-00001493070-0004-0022-01-01-� 

                                                                  \_JCourt of appeal Brussels - 2019/AR/1006 -p. 5

              regarding the reasonableness of this request (including the financial and/or technical impact
              thereof, also taking into account the financial capacity of the
              controller), also in view of the fact that certain diacritics
              characters are common or not in all European languages ? On whom rests in such a
              case the burden of proof with regard to the unreasonableness of the request for rectification ?
              3. En·zoneen, the absence of such right of rectification in respect of
              diacritics an obstacle to the free movement of persons and/or

              services, since it prejudices persons exercising their right to free movement
              and thus come into contact with those responsible for processing/gauges who operate
              in an other language ?"
              In any event, order the appellant to pay the costs of the proceedings, including the
       basic amount of the RPV, estimated at 1,440 euros."

3.3.
All conclusions have been filed in accordance with the conclusion calendar.

4. With regard to the facts,
Bank X provides the following statement of facts:
       "Mr Y is a client of the client. In a letter dated February 6, 2018, he complains about this"
       about that in a large number of documents based on concluding parties such as cheques,
       transfer forms, home banking access card, gold card, etc. in his name
       capitalization is spelled so that "the é turns into a dull e" {piece 1).

       He demands that his name be written in one of the following ways:

              Y

              Y
              or failing that Y

       Concluante replies by email of 15 May 2018 that she understands Mr Y's question, but
       that its computer systems are not adapted for this, so that special characters such as
       é are not included. She also apologized for the late reply {part 2).

       Mr Y replied by letter dated 31 May 2018 that he was not satisfied with this explanation
       and that he demands the correction {piece 3).

       On June 15, 2018, Mr. Y filed a complaint against the conclente with the
       Data Protection Authority {hereinafter: GBA) {document 2 GBA).

       Conclusive- who was not yet aware of the submitted k-answers Mr
       Y by letter dated 2 July 2018 that it is taking all necessary technical measures to ensure the correct
       identification of her clite, but that her database registry systems do not
       do not allow the use of an e with an accent {piece 4). It assures, however, that with the
       notification of Mr Y will take into account future technological
       developments {piece 4).

             f PAGE □1-00001493070- □□□ 5-□022- 1-□ 1-� 

                      .
             L il \_JCourt of appeal Brussels/AR/1006 -p. 6 733

      Following the complaint lodged by Mr Y, the
      inspection service of the Data Protection Authority conc/uante per b7February
      2019 to provide her with further information and documents (document 6 GBA).

      Conc/uante informs the Data Protection Authority by email of 21 March 2019:
      following explanation (piece5):

            Il\[,.,\]

            The current BankX customer data management application was
            Commissioned in 1995 and still running on a mainframe system from
            American made. This system only supported EBCDIC ("extended binary
            coded decimal interchange code"). This is an 8-bit standard to convert letters and punctuation marks
            store, developed in 1963-1964 by IBM for their mainframes and AS/400-
            computers. The code stems from the use of punched cards and knew the following
            characters:

                 1-n!.l·l:"iGlr� 
                 -=�--�----------���-��-.-�-�-----------��-...;..=... ......\_

           It is for this reason that all names of our customers are stored in capital letters
           no letters with accents are present because the latter are not recognized
           were provided by the system. Letters with accents have meanwhile been added to
           EBCDIC, but this was not included in customer data application updates.
           In the near future, the BankX will move away from the current application, as well as from the
           mainframe system and this new environment will be able to handle

           letters with accents.

            rPAGE □1- □□□□149307 □-□□□6- □□22-□1-□ 1-� 

            L \_JCourt of appeal Brussels-2019/AR/1006 -p. 7

            2. The DPO's specific advice on the matter

            Due to the technical impossibility, in 1995, to manage letters with accents
            it was the best solution to only work with capital letters because there the
            accents are not shown. This has no impact on the correct identification of
            the customer because other data is also used for this."

       By decision of 15 May 2019 of the Disputes Chamber of the
       Data protection authority, the claimant's argument that there is no consequence
       could be given to Mr Y's request because of the technical
       impossibility to do so within the current IT application, if not sufficient
       considered (piece 6).

       The Dispute Chamber of the Data Protection Authority subsequently ordered the conclute
       to comply with Mr Y's requests to exercise his rights, more
       determines the right to rectification (Art. 16 GDPR). She also decided that her decision would
       be published on its website (document 6).

       Finally,thedecisiondeterminedthefollowing(piece6):

            "Considering Art. 12.3 GDPR, the controller shall provide within one month
            after receipt of this decision to the Disputes Chamber, information about the consequence
            date the decision has been made.

            Against this decision, pursuant to art. 108, §1 of the law of December 3, 2017,
            appeal shall be lodged within a period of thirty days, from the date of service
            of the notification, at the Marktenhof."

       This decision was communicated to the concluding party by registered letter dated 21 May 2019.
       (piece6).

       Concluante informs the Data Protection Authority by letter dated 21 June 2019:
       result in that she gives to this decision(piece7):

            "On the basis of Art. 108, § 1, of the Law of December 3, 2017, the Bank has decided
            to appeal against the decision of the Disputes Chamber to the
            Market Court. Attached you will find our appeal before the Marktenhof
            along with our legal argument.

            \[.\].

            As part of a very broad and ongoing IT program within X, the Bank
            in the course of the year 2020, IT applications and database systems will be thoroughly
            To adjust. At that point, the Bank X will be able with this comment
            take into account and therefore allow lowercase letters with accents. Seen
            the imminent implementation of the above-mentioned program, it is available today

            largely for

             rPAGE □1- □□□□ 1493□7 □-□0□7- □□22-01-01-;i

             L \_J '135
Court of Appeal Brussels - 2019/AR/1006 -p. 8

              to adapt the current IT applications and database of the Bank, in view of this
              these applications will only work for a few more months.

              We hereby confirm to you that the protection of personal data is one of our
              mainprioritiesatBank Xremains.,,

s. discussion,

5.1. Legal framework:

Articles 12.3, 16 and 58.2.c of Regulation (EU) 2016/679 of 27 April 2016 of the European
Parliament and the Council on the protection of individuals with regard to the
processing of personal data and on the free movement of such data and to
repealing Directive 95/46/EC (General Data Protection Regulation) (hereinafter "GDPR")
read as follows:

12.3.
        "The controller shall provide the data subject without undue delay and in any case
        within one month of receipt of the request pursuant to Articles 15 to 22
        information on the follow-up to the request. Depending on the complexity

        of the requests and of the number of requests, that period may be extended by a further if necessary
        be extended by two months. The controller informs the data subject
        within one month of receipt of the request of such extension.
        When the data subject submits his request electronically, the information will be

        provided electronically, unless the data subject requests otherwise."
16.
        "The data subject has the right to obtain from the controller without undue delay
        rectification of incorrect personal data concerning him. Taking into account

        of the purposes of the processing, the data subject has the right to complete
        obtain incomplete personal data, including by submitting a supplementary statement
        provide".
58.2.c.

        "Each supervisory authority shall have all of the following powers to take
        correcting measures:
        ..\]
        (c) order the controller or processor to respond to the data subject's requests

        to exercise its rights under this Regulation;"

Articles 95 § 1.5 and 8 and 108 § 1 of the GBA Act read as follows:
95 1.5 and 8 :

        The dispute chamber decides on the follow-up it gives to the file and is authorized:
        1° to. decide that the file is ready for treatment on the merits;
       2 °propose a settlement;
       3 dismiss the complaint;
         °
       4 ° to formulate warnings;
       5 order compliance with the data subject's requests to exercise his/her rights
       to practice;
        6° order that the data subject is informed of the security problem;

              IPAGE 01-00001493070-0008-0022-01-01- � 

              L \_JCourt of appeal Brussels - 2019/AR/1006 - p. 9

         °
       7 to hand over the file to the public prosecutor's office in Brussels, who
       informs you of the follow-up given to the file;
       8 ° decide on a case-by-case basis to publish its decisions on the website of the
        Data Protection Authority."

108 1:
       § 1. The litigation chamber shall notify the parties of its decision and of the
       possibility to lodge an appeal within a period of thirty days, from \[...\]
       notification, at the Marktenhof
       Subject to the exceptions provided for by law or unless the dispute chamber

       special reasoned decision orders otherwise, the decision is enforceable by
       stock, notwithstanding appeal.
       The decision to delete data in accordance with Article 100, § 1, 10 is not
       executable from stock."

5.2. The admissibility ratione tempori:

5.2.1.
The term to lodge an appeal with the Market Court is "thirty days" from the date of the appeal. date of

the notification of the decision to the data subject. The notice is on the date on which
the recipient became aware of the decision (or could at least become aware of the decision).

5.2.2.
The Bank X pleads that the GBA provides an incorrect statement of the term for

story.
The decision indeed states:
       "against this decision pursuant to art. 108, § 1 of the law of December 3, 2017,
       appeal within a period of thirty days, from the service of
       the notification, to the Marktenhof" (the Court underlined).

The circumstance that strictly interpreted the term (according to the letter from the GBA) would start
before the Bank X could become aware of it (from the service or dispatch of the letter)
has no influence on the calculation of the term.
Article 57 of the Internal Rules of the Data Protection Authority, which states:
"with regard to the calculation of the installments, the provisions of "Chapter VIII - Time limits"

of the Judicial Code, applicable mutatis mutandis" relates to the deadlines
for the handling of the cases before the Disputes Chamber (it concerns "section 3 - planning of the
activities of the dispute chamber and time limits". This article from the Internal Regulations
order can never conflict with the legal provision (of Article 108 § 1 GBA Act) that determines the duration
and the method of calculation of the term for the recourse is determined by the Marktenhof (i.e. a

term that only starts to run "after" the proceedings before the Disputes Chamber have completely ended
is because a decision of the Disputes Chamber has intervened.

              rPAGE □1- □□□□ 149307 □-□□□ 9-□□ 22-□ 1-□ 1-� 

              L \_JCourt of appeal Brussels - 2019/AR/1006 - p. 10

5.2.3.

The term of Article 108, § 1 GBA Act is elexspecialis. The term differs from the appeal term
of common law. After all, the 'appeal' that can be brought before the Market Court is not
"ordinary" appeal.

A period of thirty days does not equate to a period of one month.

The circumstance that an appeal can be lodged within a period of thirty days
means that an appeal lodged after this period is late.

The proposition that the term is a term of order, in such a way that non-compliance with it does not
would entail any sanction is incorrect.

The story/appeal before the Marktenhof is a story that deviates from common law (in one
single instance and directed to annul an administrative decision and therefore not to
reform of a judicial decision).

When the legislator has determined that against certain administrative decisions a
appeal/redress is available to the Market Court within a specified period that the legislator

has determined for each lex speciali separately, then this period must be regarded as a
expiry period (comparable to the period as stipulated in Article 4 Decree of the Regent of 23
August 1948 regulating the administration of justice for the Administrative Jurisdiction Division of the Council
of State).

Filing a recourse against an administrative decision requires that the legal

uncertainty is kept to a minimum. This legal uncertainty can - in the
public interest - do not last longer than the period set by the legislator. For the sake of
for this reason, the term is an expiry period of public order.

The lex specialiGBA law does not contain any rules regarding the administration of justice, so that
assumed that it was the legislature's intention to apply the rules of common law

to be declared applicable.
                          °
Pursuant to article 53bis2 Ger. W. the term runs from the third working day following the date
of presenting the letter to the postal services (unless the addressee proves that he only
later learned).

Article 4 § 2 of the Regent's Decree of 23 August 1948 (see above) also provides:
       "When the notification referred to in paragraph 1 is made by registered letter with
       acknowledgment of receipt, is the first day of the deadline for submitting the petition
       the one following receipt of the letters is included in the term.
       \[..\].
       When the notification referred to in paragraph 1 is made by ordinary registered

       letter, the first day of the deadline for submitting the application is the third
       working day following the dispatch of the letter, unless the contrary is proved by the
       consignee, and is included in the term that day.

              r PAGE 01-00001493070-0010-0022-01-01-� 

              L \_JCourt of appeal Brussels - 2019/AR/1006 - p. 11

       The postmark serves as proof, both for the dispatch and for the receipt or the
       refusal."

5.2.4.
It does not appear from the documents submitted by the parties that the registered letter on account of the

GBA notifying the decision was a registered letter with acknowledgment of receipt.
For this purpose, the notification (i.e. the sending of the decision) dates at the earliest (there is
wrongly failed to provide any evidence by the parties when the letter actually
was offered by the GBA to BPost - reference is only made to the date of the letter itself)
of 21 May 2019, a Tuesday.

The third working day afterwards is May 24, 2019. Since 30 days later is a Sunday, the first working day is
(24 June 2019) the last useful day (see article 53Ger. W.).
The story set on June 24, 2019 has therefore (just) been set in time.

5.3. The admissibility of the appeal to the extent directed against Y.

5.3.1.

Article 118 of the GBA Act reads as follows:
        § 1. The dispute chamber shall inform the parties of its decision and of the
       possibility to lodge an appeal within a period of thirty days, from \[...\]
       notification, at the Marktenhof.
       Subject to the exceptions provided for by law or unless the dispute chamber

       special reasoned decision orders otherwise, the decision is enforceable by
       stock, notwithstanding appeal. °
       The decision to delete data in accordance with Article 100, § 1, 10 is not
       available from stock.
       §2

       Against the decisions of the Disputes Chamber under Articles 71 and 90
       appeal to the Market Court, which will handle the case as in summary proceedings in accordance with the
       Articles 1035 to 1038, 1040 and 1041 of the Judicial Code."

5.3.2.

Bank X argues that it can "appeal" "as appellant" against Y in the capacity of
"respondent".
Contrary to what the Bank X suggests, there is no story at the Marktenhof
comparable with a "normal" appeal.

By "ordinary appeal" the Market Court means the appeal brought before every jurisdiction that

designated by the Judicial Code to adjudicate the case on the basis of a
story that against a decision of a judge of the judicial order rendered in the first instance
is submitted and this on the basis of the jurisdiction of this appellate judge (which makes use of
the devolutive character) with a view to reviewing the case in fact and in court and with the
with a view to "re-assessment", i.e. to reassess the dispute in fact and in law

provided that new pleas and arguments are taken into account, if necessary, as well as, where appropriate,

              1 PAGE - 01-00001493070-0011-0022-01-01-� 

              L \_JCourt of appeal Brussels -2019/AR/1006 - p. 12

new or other pieces of evidence, all in function of the evolution that the dispute in fact and in law
undergoes (if necessary, even as a result of the entry into force of new legislation since the

initiation of proceedings).

The Marktenhof exercises judicial control in a single instance) over the decisions of
certain administrative authorities, but before being able to consider making a decision
where appropriate (within the scope of its full jurisdiction) to be replaced by its own
decision, it is necessary that the contested decision is either irregular or illegal
/ato is.

5.3.3.
The (only) "appeal" that can be brought under the aforementioned Article 108 § 1 of the GBA Act
to be brought before the Market Court is an appeal/redress against the (administrative) decision itself. It
Bank X or the complainant himself is of course always free to appeal to the 'ordinary' civil court

(for example with regard to compensation).

A redress/appeal against a decision can of course only be lodged against the administrative authorities
government sensu /ato that made the (contested) decision.

It follows clearly from the text of the aforementioned Article 108 § 1 that the administrative authority
has made a decision, namely the GBA, the defendant is in respect of such

story/profession.

It is the administrative authority sensu /ato, i.e. the government, which in one of the fees special
granting jurisdiction to the Market Court, has taken the contested decision, which
the defendant is in proceedings that seek the destruction (at least reform) of the
administrative decision.

The authority that has taken the contested decision may, in a contradictory manner,
defend the validity and validity of the decision taken before the Market Court.

5.3.4.
The claim brought against the complainant (on which the GBA takes a decision) is not
admissible (ratione personae) to the extent that this claim is made against this complainant.

Bank X does not demand any measure against Y, it merely asks that the
decision taken would be quashed and that the Marktenhof would invoke its own decision
place.

5.3.5.
There is no reason to ask a question for a preliminary ruling as the answer to it is not of a nature

may be to settle the dispute.
The question of whether or not the GBA can be involved in the case is not relevant for the assessment
whether or not the claim brought by Bank X solely against Y against Y is
may be admissible.

             r PAGE 01-00001493070-0012-0022-01-01- � 

             L \_J 0
Court of Appeal Brussels -2019/AR/1006 - p. 13 7'-1

Against Y, the Bank X has no interest whatsoever in hearing the decision quashed. Y is one
of the (possibly numerous} customers of the bank whose name contains an accent and whose name is
the bank is allegedly misspelled.

5.3.6.
Bank X wrongly asserts:
       "Art. 78 GDPR provides that the Member States of the European Union must ensure that every
       natural person or legal person may lodge an effective remedy
       against a legally binding decision of a supervisory authority concerning him. This
       article states the following:
              1. Without prejudice to other administrative or extrajudicial options.

              appeal, any natural or legal person has the right to
              a legally binding decision of a supervisory authority concerning him
              effective remedy.
              ...\]
              3. Proceedings against a supervisory authority shall be initiated at the
              courts of the Member State where the supervisory authority is located.
              4. When proceedings are instituted against a decision of a

              supervisory authority to which an opinion or a decision of the Committee in the
              framework of the coherence mechanism, does the supervisory
              authority to forward that advice or decision to the courts.
       This provision is clarified in recital 143 of the GDPR:
              "\[...\] Without prejudice to this right under Article 263 TFEU, any natural
              or legal person have the right to appeal against a decision of a supervisory
              authority which produces legal effects in respect of that person, before the competent
              national court to bring an effective remedy. Such a

              decision relates in particular to the exercise of investigation, correction
              and authorization related powers by the supervisory
              authority, or on the rejection of complaints. The right to an effective remedy
              legal action does not, however, apply to supervisory authorities
              measures that are not legally binding, such as advice. A claim
              should be brought against a supervisory authority in the courts of
              the Member State where the supervisory authority is located, and submit
              comply with the procedural law of that Member State. Those dishes serve

              exercise unlimited jurisdiction, including jurisdiction over all factual and
             legal issues in connection with the dispute pending before them
              to investigate. If a complaint is rejected by a supervisory authority, then
              the complainant may appeal to the courts in the same Member State. \[...\]"

Bank X's references to Articles 78 GDPR and 143 GDPR and to a VEBIC judgment of
December 7, 2010 in the case C-439/08 of the Court of Justice are not relevant. The

the articles mentioned do not state anywhere that the complainant could be involved in the proceedings, it
the judgment quoted concerns a competition problem which is not applicable here.

None of these articles states that a legal entity (here Bank X } must be against a customer (here Y)
be able to act against a decision taken by an administrative authority (here GBA}
to see destroy and reform.

             f PAGE 01-00001493070-0013-0022-01-01- � 

             L \_J Court of Appeal Brussels - 2019/AR/1006 - p. 14

 These provisions merely state that he in respect of whom an administrative decision has been taken
must have a recourse before an independent judge. This judge is the one
 Market Court.

Accordingly, by the aforementioned Article 108 § 1 of the GBA Act, the European
to demand.

5.3.7.

To the extent that Bank X directs its claim - only against Y - it is manifest
 inadmissible rational personae.

5.4. The merits of the appeal to the extent directed against the GBA - the violation of

Article 16 GDPR.

5.4.1.
The general framework of the GDPR is built around transparency, lawful processing and the
correctness of the processed data. Within this framework, the right of access must be placed, at least
in order to give the data subject the opportunity to check whether his personal data is correct and
be processed lawfully.

Article 16 GDPR states:
        "The data subject has the right to obtain from the controller without undue delay
       rectification of incorrect personal data concerning him. Taking into account
       of the purposes of the processing, the data subject has the right to complete
       obtain incomplete personal data, including by submitting a supplementary statement
       provide."

5.4.2.
Bank X states that there is no obligation to state accents in capital letters, that there are
there is no question of "personal data" so no ground for the application of a right to
rectification, that the right to privacy and the exercise of the right of rectification are not absolute
rights and that Y is abusing its rights by judicial rectification
actually want to enforce.

5.4.3.
The GBA states that Article 16 GDPR grants the right to the
legal subjects to obtain a rectification of incorrect personal data without delay. Proper
spelling of the name belongs to this personal data.

5.4.4.
The GBA rightly states that in accordance with Article 4.1) of the GDPR "personal data" "all information

\[include\] about an identified or identifiable natural person ("the data subject"); if
identifiable is considered a natural person who can be directly or indirectly identified
identified, in particular by means of an identifier such as a name, an identification number,
location data, an online identifier or of one or more elements characteristic of the

             r PAGE 01-00001493070-0014-0022-01-01-� 

             L \_JCourt of appeal Brussels - 2019/AR/1006 - p. 15
           - -\_ ---- --� �- -----------

physical, physiological, genetic, psychological, economic, cultural or social identity of that
                    ,
natural person.,

She rightly states:

        "29. The standard for determining the correct spelling of a (family) name is
        of course the official spelling of this name, as registered in the database
        with population data of the Member State concerned (in the case of Belgium, the national register). ter
        Zake contains the official spelling of Mr. Y an accent aigu on the "e"
        (é)-witness the identity card of mr. Y {PART4, Appendix A).

        30. After it has been established that Bank X has processed his surname without an account
        keeping with this diacritical mark, Mr. Y is therefore entitled to an immediate
        to request rectification of this misspelling of his surname, in accordance with Article
        16 of the AVG. The Disputes Chamber of the Data Protection Authority subsequently
        rightly found a breach of Article 16 of the GDPR when Bank X refused to do so
        to comply with a request for recitation.

The assertion that the data subject has no right to have his name processed correctly,
fails right. What linguistic rules may say in this regard is irrelevant. A name is
not a 'word' that belongs to subject matter regulated by language rules.

The circumstance that Y himself would not have an accent on the last letter of his name in an email address
posting does not give the Bank X any right to do so.

It is the duty of a properly functioning banking institution to correctly and correctly identify the names of its customers
to properly mention and process, the statement that an old-fashioned computer program

fails is not appropriate.

The circumstance that the name "Y" is correctly stated on the identity card of the person concerned by
the administrative authorities that issued this identity card sufficiently demonstrate that
it is technically perfectly possible to write the name correctly.

The fact that it would technically require an 'effort' to use a computer program that
putting accents on capital letters is not serious and irrelevant.

Now (in 2019!) to state that adjusting a computer program takes a number of months
would require work and/or constitute additional financial costs for the banking institution, the Bank will allow X

not allow to misunderstand the rights of the data subject.
The rights granted to the person can be equated with obligations of results
on behalf of the processor of the personal data.

A properly functioning banking institution can be expected that - when it has a

uses a computer program - she has a computer program that complies with the
current standards, which include the aforementioned right to the correct spelling of the name.
The right to rectification is a fundamental right.
The GBA rightly refers to Article 5.1), which states:

1
 See document 4 A in the file of the GBA.

                           01-00001493070-0015-0022-01-01-� 
              IPAGE

              L \_JCourt of appeal Brussels - 2019/AR/1006 -p. 16

        "Art. 5.1. Personal data must: \[...\] d) be correct and updated if necessary; all
        reasonable measures must be taken to protect the personal data that, in view of the

       purposes for which they are processed are incorrect, erase or rectify without undue delay
        ("Accuracy")".

This provision was also reproduced as follows in article 170 of the law of 30 July 2018 on
the protection of natural persons with regard to the processing of personal data

(Privacy Framework Act): °
        "Art. 170. Personal data: \[...\] Accurate and, if necessary, updated. All
       reasonable measures are taken to protect the personal data that, based on the
       purposes for which they are obtained or for which they are further processed,
        inaccurate or incomplete, erase or correct.,,

5.4.5.
References to positions or decisions in other EU Member States are not relevant and are binding
not the Marktenhof.
For the sake of completeness, it must be established that in any event there is no question of

abuse of rights on the part of Mr. Y and/or the Dispute Chamber of the
Data Protection Authority.

Y has his rectification request and subsequently his right to lodge a complaint with a
supervisory authority (as guaranteed by Article 77.1 of the GDPR and Article 58 et seq.

the GBA law) exercised in a normal manner.
If the Bank X would have suffered any damage, this is only due to the fact that it
in 2019 still not able to correctly and properly identify the names of its customers
mention it in all its computer programs.

The normal exercise of a right of rectification and complaint granted to a data subject,
cannot in itself constitute an abuse of rights. According to the GDPR, the data subject must
on the contrary, be able to exercise its right of rectification and complaint at all times. However, this means
does not automatically mean that the controller and/or the supervisory authority always
must comply with the requests of the data subject, made in the context of the exercise of

his right. Such approval will depend on whether or not the relevant
applicable conditions.

The question of whether Y would suffer damage as a result of the wrong mention of his surname,
is irrelevant. Such a condition is neither covered by the GDPR nor by the Framework Act

privacy, nor imposed by the GBA law, and would contradict Article 8(3) of the Charter
EU, which explicitly mentions the right to rectification as part of the core of the
fundamental right of everyone to the protection of their personal data.

The alleged (potential) 'damage' of Bank X does not arise from the exercise of a

subjective right under the GBA, but from the exercise of a government power on
based on objective law. The question of whether this government power was exercised correctly is
the subject matter of the present appeal, and goes to the substance of the case.

              rPAGE 01-00001493070-0016-0022-01-01-� 

              L \_JCourt of appeal Brussels - 2019/AR/1006 - p. 17

The wording of Article 16, first sentence, GDPR leaves no room for the 'reasonableness' of a
to assess a rectification request, and at least (in subordinate order) could be accepted by the GBA
determined that the motives stated/stated by Bank X for Y .'s rectification request

to refuse is insufficient.

5.5. The merits of the appeal to the extent directed against the GBA - the violation of
article 12.3 GDPR.

5.5.1.

                                 The Bank X further states: "no violation of art. 12.3 GDPR

   The Disputes Chamber of the Data Protection Authority also considers an infringement of art. 12.3
   GDPR proven.

   This decision fails by law.

   Art. 12.3 GDPR provides:

         "The controller shall provide the data subject without undue delay and in any case
        within one month of receipt of the request pursuant to Articles 15 to 22
        information on the follow-up to the request. Depending on the complexity

        of the requests and of the number of requests, that period may be extended by a further if necessary
        be extended by two months. The controller informs the data subject
        within one month of receipt of the request of such extension.
         When the data subject submits his request electronically, the information is submitted
        may be provided electronically, unless otherwise requested by the data subject.

   The concluding party points out that the respondent asked his question in a letter dated 6 February 2018 and that

   the 'Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016
   on the protection of natural persons with regard to the processing of
   personal data and concerning the free movement of such data and repealing Directive
   95/46/EC (General Data Protection Regulation) will not come into effect until May 25, 2018
   (Art. 99.2 GDPR).

   Art. 282 of the law of 30 July 2018 on the protection of natural persons with
   with regard to the processing of personal data provides:

         "The legal obligations as laid down in the Regulation and in this Act do not
        affect the legality of the personal data processing operations carried out by the
        controller or processor has performed before the entry into force of
        aforementioned obligations.,

   In addition, with regard to the letter of May 31, 2018 from Mr Y, in which
   Concludant replied on July 2, 2018, no violation of art. 12.3 GDPR for.

             r PAGE 01-00001493070-0017-0022-01-01-� 

             L \_JCourt of appeal Brussels -2019/AR/1006 -p. 18

   After all, the Data Protection Authority provides the following explanation on its website:
   with art. 12AVG:

         "In principle, you should not pay for the information you have requested. But if it
         it is obvious that your requests are unfounded or excessive, for example because you
         request the same again, the person processing your data may:
         •
             or charge a reasonable fee to cover its administrative costs
             he had to make to provide you with the requested information or to
             to take measures that you have requested;
         • either refuse the request.

         In that case, the person who processes your personal data must demonstrate that your request
         is clearly unfounded or excessive."
         (own underlining)

   In conclusion, Mr Y had already demonstrated by email of 15 May 2018 that his question
   was unfounded (part 2), as a result of which the concludant was allowed to refuse his request."

5.5.2.
The GBA responds to this:
       "32. Bank X wrongly believes that the contested decision is (in part) an incorrect

       applies Article 12.3 of the AVG. However, this is not correct.
       33. Article 12.3 of the GDPR reads (in its relevant parts):
       ''Art. 12.3 The controller shall provide the data subject without delay and in any

       case within one month of receipt of the request under Articles 15 to 22
       information on the follow-up to the request."
       34. Well, on February 6, 2018, Mr. Y a willing request to bank X in order to
       to obtain rectification of the incorrect processing of his surname. This request

       was answered negatively by the Bank X, by an email dated May 2018 (of which
       the exact date and time was not communicated to the
       Data Protection Authority).

       35. After the entry into force of the GDPR on May 25, 2018 (Art. 99.2 of the GDPR), Mr.
       Y subsequently submitted a request for rectification within the meaning of Article 16 of the GDPR on 31 May 2018
       de Bank X, with explicit reference to "the European regulations that give me the right
       to view and correct my personal data that you have" {STUK

       2, Annex A). This rectification request was not answered (negative) until 2 July 2018 by the
       Bank X Belgium {STUK7, Annex A). As a result, the BankX did not
       "promptly and in any case within one month" information about the consequence

       given to the request.
       36. The fact that Article 282 of the Privacy Framework Act provides that "the legal
       obligations as laid down in the Regulation and in this law\[...\] do not affect

       the legality of the personal data processing operations carried out by the
       controller or processor has performed before the entry into force of
       the aforementioned obligations" is not relevant in this respect. Mr. Y van .'s request for rectification
       May 31, 2018, which was based on the (at that time) GDPR, intended

       after all, the rectification of his personal data as it is at that time (and present)
       are processed by the Bank X. The contested decision of the
       Data Protection Authority applies for the future, and asserts the legal validity of the

       personal data processing by Bank X before 25 May 2018 as such is not in question."

             1 PAGE 01-00001493070-0018-0022-01-01-� 

             L \_J Court of Appeal Brussels -2019/AR/1006 -p. 19

 5.5.3.
 Exceeding the term of Article 12.3 GDPR is not in itself a legal rule
 sanctioned.
Notifying the complainant by letter dated 15 May 2018 (before the GBA law comes into force

 trad) that the processor will not or cannot accede to its request is a response. this answer
 should not be repeated every time Y would repeat the same question.

 Because the Bank X has provided a timely reply, it has complied with the rule of the aforementioned article
 12.3 GDPR has been adequately complied with.

 5.6. Compliance with the obligation to state reasons by the Disputes Chamber of the GBA.

 5.6.1.
 In the contested decision, the decision-making is motivated as follows:

  From the investigation requested by the Disputes Chamber from the inspectorate on the basis of art.°94, 1

  of the law of December 3, 2017, it follows that an infringement of the aforementioned provisions is proven
  must be considered. The reasoning given by the controller,

  namely that the complainant's request could not be complied with because of the
  technical impossibility to do so within the current IT application is not considered sufficient
                                  , 1
  considered.
 The inspection by the inspection service is not attached to the decision itself. The decision is not

 sufficiently formally motivated.
       2
 5.6.2.
 Articles 2 and 3 of the law of 29 July 1991 on the express motivation of the
 administrative acts oblige the administrative authority in the deed to state the legal and factual

 include considerations underlying the decision in an "adequate" manner.
 The sufficient character of the motivation means that the motivation must be pertinent,
 say that she must be clearly involved in the decision, and that she must be able to bear it,
 this means that the reasons cited must suffice to support the decision.

 The main raison d'être of the obligation to state reasons, as imposed by the
 the aforementioned law of 29 July 1991, consists in the fact that the person concerned in the decision concerning him
 must be able to find motives on the basis of which it was taken, so that the person concerned
 informed of the facts whether it is appropriate to contest the decision.
 The substantive obligation to state reasons means that every administrative legal act must be based on
 motives whose actual existence has been duly proven and which can be justified in court

 of that act can be taken into account.

 2Compare with: RvS (14th k.) no. 239.322, 9 October 2017, http://www.raadvst-consetat.be;

 TBP 2018, 106, note -;TGR-TWVR 2017, 344; T.Gem. 2018, 63.

               IPAGE 01-00001493070-0019-0022-01-01-� 

               L \_JCourt of appeal Brussels - 2019/AR/1006 -p. 20

In assessing compliance with the substantive obligation to state reasons, the court is
Market Court, not authorized to substitute its opinion on the facts for the opinion
of the administrative authority, which in the present case enjoys a discretionary power.
The Marktenhof is only authorized to verify, if requested, whether the administrative authority is

based on the correct factual data, whether it has correctly assessed it and whether it has
it has been able to reach its decision within the bounds of reasonableness.
Furthermore, only the formally expressed motives may be taken into account.
It suffices that it is clearly stated, if necessary succinctly, in the decision itself on what grounds
she rests. The formal justification should therefore not contain any digressions about data that

concerned litigant already knows. If reference is made to opinions or reports, it is sufficient
briefly mention the object and content of those documents, without it being necessary to include them in
extenso or add them as an attachment to the decision

5.6.3.

The affirmation "from an investigation it follows that the infringement must be regarded as proven"
does not meet the legal requirement.
The inspection report is filed by the GBAs as document 8 from its file. This is a report
from March 28, 2019.
On page 3 only the following motivation is stated:

   Establish2: Upright rectification(article16
         The I of the GDPR)
             inspection service establishes that the Bank X
  article in this file the obligation imposed by
         16, first sentence has not complied with the GDPR.
  In the answer
                  van d e Bank XNV at et shrijvenmet
  07/02/20 19 (c. file 13) w ordtim questions from the Inspected enst of
                                          mers mention that the right to rectification
  be applied because the Bank X cannot
                                             used iforma tca� not that
 allow, while that
                     no legal reason for the non-application
 GDPR to be responsible. of a� I16 of the

To the extent that this (summary) motivation (as it appears in the inspection report) prima facie
could suffice to sufficiently substantiate the decision, the Market Court notes, however, that
in this regard, this (summary) statement of reasons does not appear in the contested decision and the GBA does not
demonstrates that this reasoning was known toY before the decision was taken such that
the decision consequently does not comply with Articles 2 and 3 of the aforementioned Act.

5.6.4.
Bank X does not plead that the decision would be null and void because it was affected by a
lack of motivation.

The motive check does not affect public order, so that the Marktenhof can compensate for the lack of proper
cannot state motives ex officio 4.

3R.v.St., June 29, 1993, e.g. Vedesca, no. 43,526.
4 MAREEN, D., The motives of the administrative legal act, TBP 2000, 20-38. See
also: R.v.St., Droeshout aforementioned; P. DE WOLF, "The official supply of
remedies by the Council of State ruling on cancellation appeals against a

              1 PAGE 01-00001493070-0020-00022-01-01-� 

             L \_JCourt of appeal Brussels - 2019/AR/1006 - p. 21

A plea is considered to be of public policy if its importance overrides the interests of the person concerned

transcends the litigant, so that it does not belong to the latter - who is only allowed for his own interests
come up5- may depend on whether or not the product will be considered as a ground for cancellation
turn into  •

The Marktenhof therefore only finds that the contested besprimafacies without that
there has been a contradictory debate about this - does not seem to comply with the aforementioned law

of 29 July 1991, but the Marktenhof is not allowed to ex officio this decision, of which the
legal validity and conformity to the general principles of good administration, is not
contested, to sanction.

To the extent that the lack of motivation raised by the Marktenhof has no influence on the

settlement of the present dispute, there is also no reason for the Market Court to
would reopen the debates in order to hear the parties.

6. Decision.

The appeal is admissible but unfounded.

7. The costs,

In accordance with the law of April 21, 2007 and the Royal Decree of October 26, 2007, the
court fee estimated at the basic fee of €1,440.00.

For these reasons,
The court, right to contradiction

Having regard to article 24 of the law of 15 June 1935 on the use of languages in court cases,

Declares the appeal admissible but unfounded.

administrative legal act", T.B.P. 1986, 22; J. SALMON, Conseil d'Etat, Brussels,
Bruylant, 1987, 266.
5B. KORNPROBST, La notion de partie et le recours pour excès de pouvoir, published by La

Pensee University, 338.

             1 PAGE 01-00001493070-0021-0022-01-01-� 

             L \_JCourt of appeal Brussels -2019/AR/1006 - p. 22 7'f!I

Orders the Bank X to pay the costs of the appeal, settled at 1,560.00 euros (400.00
right of appeal + 20.00 euro contribution to the Budgetary Fund + 1440.00 administration of justice
compensation in favor of the first defendant).

Condemns Bank X, the applicant party, in accordance with Article 269/2 of the Code of
registration, mortgage and court fees to be paid to the Belgian State, FPS Finance, of the
right of appeal in the amount of 400.00 euros, and until the final payment of the
contribution of € 20.00 Budgetary Fund;

This judgment was pronounced in the public session of 09 October 2019 by
M.BOSMANS Councilor dd.chairman
A-M.WITTERS Councilor

O.DUGARDYN Deputy Counselor
B. VANDERGUCHT Registrar

B.VANDERGUCHT

           1 PAGE 01-00001493070-0022-0022-01-01-

           L \_J

```

Retrieved from "[https://gdprhub.eu/index.php?title=Court\_of\_Appeal\_of\_Brussels\_-\_2019/AR/1006&oldid=41152](https://gdprhub.eu/index.php?title=Court_of_Appeal_of_Brussels_-_2019/AR/1006&oldid=41152)"

[Categories](/index.php?title=Special:Categories "Special:Categories"):

*   [Court of Appeal of Brussels (Belgium)](/index.php?title=Category:Court_of_Appeal_of_Brussels_\(Belgium\) "Category:Court of Appeal of Brussels (Belgium)")
*   [Belgium](/index.php?title=Category:Belgium "Category:Belgium")
*   [Article 16 GDPR](/index.php?title=Category:Article_16_GDPR "Category:Article 16 GDPR")
*   [2019](/index.php?title=Category:2019 "Category:2019")
*   [Dutch](/index.php?title=Category:Dutch "Category:Dutch")

This page was last edited on 5 May 2024, at 09:10.

Content is available under [Creative Commons Attribution-NonCommercial-ShareAlike](https://creativecommons.org/licenses/by-nc-sa/4.0/) unless otherwise noted.

[Privacy policy](/index.php?title=GDPRhub:Privacy_policy)

[About GDPRhub](/index.php?title=GDPRhub:About)

[Disclaimers](/index.php?title=GDPRhub:General_disclaimer)

[![Creative Commons Attribution-NonCommercial-ShareAlike](/resources/assets/licenses/cc-by-nc-sa.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

[![Powered by MediaWiki](/resources/assets/poweredby_mediawiki_88x31.png)](https://www.mediawiki.org/)