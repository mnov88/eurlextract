    Forside | DMI                  /\*<!\[CDATA\[\*/ /\*TS\_inlineJS\*/ const vgtchfKmm = " Meteorologens kommentar: Lørdag med lidt af hvert – sol, byger og tåge i spil";const remarkPageId = 993;const remarkPage = "/meteorologens-kommentar"; /\*\]\]>\*/ 

[![DMI](/fileadmin/templates/img/logo.svg)DMI](/)

[Menu](#)

[Luk](#)

*   [Varsling](/varsler)

    *   [Varsler for Danmark](/varsler)

    *   [Varsler for Grønland](/varsler-gronland)

    *   [Pollen](/pollen)

    *   [UV-indeks](/uv-indeks)

*   [Vejr](/danmark)

    *   [Danmark](/danmark)

    *   [Grønland](/gronland)

    *   [Færøerne](/faeroeerne/farvandsudsigter-frn)

    *   [Forecasts in English](/products-in-english)

    *   [Vejrkort](/vejrkort)

    *   [Frontkort](/vejret/frontkort)

    *   [Radar](/radar)

    *   [Satellitbilleder](/satellitbilleder)

    *   [Tørke](/toerke)

    *   [Temaer om vejr og atmosfære](/vejr-og-atmosfare)

    *   [Om DMI's vejrprodukter](/dmis-vejrprodukter)

    *   [Vejrlommeregner](/vejrlommeregner)

    *   [Vejrleksikon](/wiki)

*   [Vejrdata](/vejrdata/maalinger)

    *   [Målinger](/vejrdata/maalinger)

    *   [Vejrarkiv](/vejrarkiv)

    *   [Frie data](/frie-data)

    *   [Publikationer og rapporter](/publikationer)

*   [Hav](/vind)

    *   [Vind](/vind)

    *   [Bølger](/bolger)

    *   [Strøm](/strom)

    *   [Havtemperatur](/havtemperatur)

    *   [Vandstand](/vandstand)

    *   [Badevandstemperatur](/badevandstemperatur)

    *   [Farvandsudsigter](/farvandsudsigter)

    *   [Tidevand](/hav-og-is/temaforside-tidevand)

    *   [Temaer om hav og is](/hav-og-is)

*   [Klima](/klimaatlas)

    *   [Klimaatlas](/klimaatlas)

    *   [Nationalt Center for Klimaforskning](/nationalt-center-for-klimaforskning)

    *   [Vejledning i udledningsscenarier](/vejledning-i-udledningsscenarier)

    *   [Klimanormaler og vejrekstremer](/klimanormaler)

    *   [Klimastøtte til arktis](/klimasider/klimastoette-til-arktis)

    *   [Temaer om klima](/klima)

*   [Kontakt](/kontakt)

    *   [Kontakt](/kontakt)

    *   [Videnskabsetisk rådgiver](/videnskabsetiskraadgiver)

### Find dit lokale vejr

[Radar

+/- 1½ time

![radarbillede](/dmidk_byvejrWS/rest/image/gif/Radar/) ![Åbn radarkort](/fileadmin/templates/Images/Icons/play-icon.png)](#radar) 

[Vejrkort

2 døgn frem

![vejrkort](/dmidk_byvejrWS/rest/image/png/Lufttryk) ![åbn vejrkort](/fileadmin/templates/Images/Icons/play-icon.png)](#precip) 

[Satellit

12 timer tilbage

![satellitbillede](/dmidk_byvejrWS/rest/image/png/polarsat) ![Åbn satellitkort](/fileadmin/templates/Images/Icons/play-icon.png)](/satellitbilleder/) 

## Landsudsigt

fetch('/dmidk\_byvejrWS/rest/json/Danmark/DK/land') .then(response => response.json()) .then(data => { var txt = "<p><b>" + data.date + "</b></p>" + "<p>" + data.valid + "</p>" + "<p>" + data.weatherForecast + "</p>" + "<p>" + (data.slipperyWarning ?? '') + "</p>" + "<p>Udsendt af vagthavende meteorolog</p>"; data.sections?.map(sec => { txt += "<p><b>" + sec.headline + "</b></p><p>" + sec.weatherForecast + "</p>"; }); $("#weather-news-block").append(txt); });

[Læs om vejret de kommende dage](/danmark/7doegnsudsigt-dk "Læs om vejret de kommende dage på danmarkssiden")

Hjælp

*   [Kontakt](/kontakt/)
*   [Søg](/sog/)
*   Guide
*   [Leksikon](/da/wiki/)

![DMI logo](/fileadmin/templates/img/logo.svg)

### Velkommen til et nyt og forbedret dmi.dk

Vi har bygget om på dmi.dk.

Vi har blandt andet ændret forsiden og den lokale vejrvisning. Ændringerne er lavet med hjælp fra vores brugerpanel.

Vi håber, at I tager godt imod det forbedrede dmi.dk.

Bemærk, at hvis funktionelle cookies er slået til, vil denne guide ikke blive vist igen - den kan altid startes ved at bruge hjælpknappen i hjørnet

Luk Start guide   ▶

// Get the modal var modal = document.getElementById('idEventIntroDMI'); window.onpageshow = function() { document.getElementById("helpMenu-toggle").checked = false; } // Show it /\*window.onpageshow = function() { document.getElementById("helpMenu-toggle").checked = false; \*/ // Check om brugeren allerede har set intro, og undlad at afspille den hvis ja - (cookie). /\*var doneTour = localStorage.getItem('EventDMI-Tour') === 'Completed'; if (doneTour) { return; } else { document.getElementById('idEventIntroDMI').style.display='block'; \*/ //Check cookie tilladelse /\* if (CookieInformation.getConsentGivenFor('cookie\_cat\_functional')) { localStorage.setItem('EventDMI-Tour', 'Completed'); } else{ return; } } }; \*/ // When the user clicks anywhere outside of the modal, close it window.onclick = function(event) { if (event.target == modal) { modal.style.display = "none"; } } //Close if ESC pressed (WAS) document.addEventListener('keyup', function(e) { if (e.keyCode == 27) { document.getElementById("helpMenu-toggle").checked = false; } }); //Open help on pressing ? (WAS) document.addEventListener('keyup', function(e) { if (e.keyCode == 171) { document.getElementById("helpMenu-toggle").checked = true; } }); $(".IntroPopButton, .startGuideButton").click(function () { //Function "omdøbt" var introGuide = introJs(); document.getElementById("helpMenu-toggle").checked = false; document.getElementById('idEventIntroDMI').style.display='none'; introGuide.setOptions({ showButtons: true, showBullets: false, hidePrev: true, skipLabel: 'X', prevLabel: 'Tilbage', nextLabel: 'Næste', doneLabel: 'Afslut', showProgress: true, disableInteraction: true, steps: \[ { element: document.querySelector('.search-bar'), title: 'Find dit lokale vejr', intro: 'Vælg den by eller farvand, som du er interesseret i. Så får du en detaljeret vejrudsigt for den valgte lokalitet.' }, { element: document.querySelector("#favourites-list"), title: 'Favoritter', intro: 'Her kan du få hurtig adgang til dine favoritter eller tre forvalgte byer i rigsfællesskabet - hvis lokation er slået til i din browserindstilling, vises denne øverst.' }, { element: document.querySelector(".weather-three-block-wrapper"), title: 'Radar, vejrkort og satellit', intro: 'Her finder du alle vores forskellige vejrkort med radar, satellit og prognoser for nedbør, lufttryk, vind, temperatur, strøm og bølger 48 timer frem i tiden. Klik for at se kortene i fuldskærmsvisning.', scrollTo: 'tooltip' }, { element: document.querySelector('#c18113'), title: 'Landsudsigten', intro: 'Her får du meteorologens skrevne vejrudsigt for hele landet. Du kan herfra klikke dig videre til flere skrevne vejrudsigter, nemlig: syvdøgnsudsigten, regionaludsigter, farvandsudsigter samt måneds- og sæsonprognosen.', scrollTo: 'tooltip' } \] }).start() }); /\*.toolControl { position: relative; } #tooltip { position: absolute; display: inline; cursor: pointer; border: none; background: none; bottom: -45px; left: 80px; } #tooltip img { margin: 0px; padding: 0px; position: relative; height: 20px; width: 20px; max-width: 20px; } #tooltipText { background-color: #fff; position: absolute; bottom: 90%; padding: 10px 15px; border-radius: 5px; font-size: 14px; display: none; text-align: center; transition: all .5s; width: 200px; box-shadow: 0 5px 15px rgba(12,43,130,.0784313725); } #tooltipText.visible { opacity: 1; transform: translateY(-10px); display: block; } \*/ /\* var div = document.getElementById('tooltipText'); document.getElementById('tooltip').addEventListener('click', showhide); function showhide() { div.classList.toggle('visible'); } \*/

### Viden om vejr og klima

[Se alle](/nyheder/)

[

![](/fileadmin/user_upload/Bruger_upload/Nyhed/2025/8/Front-DSC04452.jpg)

### Satellitbaserede solprognoser giver bedre og billigere elforsyning

_28\. august 2025._ DMI og Energinet har netop indgået en samarbejdsaftale, som vil give os alle en lavere elregning og højere...

](/nyheder/2025/satellitbaserede-solprognoser-giver-bedre-og-billigere-el)

[

![](/fileadmin/user_upload/Bruger_upload/Nyhed/2025/7/pingu.jpg)

### Den antarktiske fødekæde slår revner i bunden

_25\. juli 2025._ Ændringer i det marine fytoplankton omkring Antarktis kan få store konsekvenser, ikke kun for pingviner og hvaler,...

](/nyheder/2025/den-antarktiske-foedekaede-slaar-revner-i-bunden)

[

![](/fileadmin/user_upload/Bruger_upload/Nyhed/2025/7/flooding.jpg)

### Ekstrem juli-regn

23. juli 2025. Mødet mellem sydlandsk sommervarme og den kolde atlanterhavsluft fik prognoserne op i usete mængder nedbør i store dele af...

](/nyheder/2025/ekstrem-juli-regn)

[

![](/fileadmin/user_upload/Bruger_upload/Nyhed/2025/7/Badevejr_Inger_Nielsen_Aalbae.jpg)

### Tjek badeforholdene på DMI.dk

_17\. juli 2025._ Sommeren ser ud til at træde i karakter i løbet af denne uge, og flere kan blive fristet af et svalende dyp. På DMI.dk kan...

](/nyheder/2024/tid-til-en-dukkert-tjek-badeforholdene-paa-dmidk-1)

[

![](/fileadmin/user_upload/Bruger_upload/Nyhed/2025/7/InternalView_archive_ECMWF.jpg)

### Europa leder efter nye superkræfter til at forudsige farligt vejr

_8\. juli 2025._ Supercomputeren skal levere mere præcise vejrudsigter i Europa og Arktis, så vi bedre kan forberede os, når farligt...

](/nyheder/2025/europa-leder-efter-nye-superkraefter-til-at-forudsige-farl)

[

![](/fileadmin/user_upload/Bruger_upload/Nyhed/2025/7/IMG_2493.jpg)

### Meteorologer fra Tanzania på fransk visit

_8\. juli 2025._ DMI samarbejder med Tanzanias Meteorologiske Institut om at få landets meteorologiske observationsnetværk til at leve...

](/nyheder/2025/meteorologer-fra-tanzania-paa-fransk-visit)

Hent vores app [![Nu i App store](/fileadmin/templates/img/download_app_apple_store.svg) ](https://itunes.apple.com/dk/app/dmi-vejr/id533069944)[![Nu på Google Play](/fileadmin/templates/img/download_app_google_play.png)](https://play.google.com/store/apps/details?id=dk.dmi.byvejret)

[![Gå til forsiden af DMI](/fileadmin/templates/img/logo.png)](/)

*   [Nyheder](/nyheder)
*   [Presse og medier](/presse-og-medier)
*   [Job og karriere](/job-og-karriere)
*   [Om DMI](/om-dmi)
*   [150-års jubilæum](/om-dmi/150-ars-jubilaum)
*   [Kontakt](/kontakt)

© 2025 DMI

*   [Om hjemmesiden](/om-hjemmesiden)
*   [Privatliv](/om-hjemmesiden/privatliv)
*   [Tilgængelighedserklæring](https://www.was.digst.dk/dmi-dk)