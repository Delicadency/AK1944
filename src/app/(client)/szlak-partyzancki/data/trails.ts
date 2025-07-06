export type TrailSlug = "first" | "second" | "third";

export type Paragraph = {
  title: string;
  content: string;
};

type TrailPoint = {
  point: string;
  description: string;
};

type MapData = {
  iframeUrl: string;
  externalUrl: string;
};

type TrailData = {
  displayName: string;
  enabled: boolean;
  paragraphs: Paragraph[];
  trailPoints: TrailPoint[];
  map: MapData;
};

export const trails: Record<TrailSlug, TrailData> = {
  first: {
    displayName: "Szlak Partyzancki I Zgrupowania Armii Krajowej Obwodu Dębica",
    enabled: true,
    paragraphs: [
      {
        title: "Trasa wiedzie malowniczym wzgórzami na terenie gmin:",
        content:
          "Sędziszów Małopolski, Ropczyce, Wielopole Skrzyńskie i Iwierzyce. Szlak rozpoczyna się w Górze Ropczyckiej w punkcie, gdzie 28 lipca 1944 r. dowództwo AK zarządziło mobilizację. Trasa zatacza pętlę nad Gnojnicą i w Zagorzycach, następnie przez las Budzisz w Nawsiu biegnie ku Bystrzycy. Stamtąd wzgórzami pomiędzy Olimpowem, Zagorzycami Górnymi, Wiercanami, Zagorzycami Dolnymi a Iwierzycami biegnie w kierunku Sielca Podlasku, Sędziszowa Młp., aby dotrzeć na Poręby I w Krzywej do miejsca, gdzie kiedyś była leśniczówka. Trasa przechodzi przez lasy Nadleśnictw Strzyżów i Głogów. Szlak wyznacza 15 punktów oznakowanych tablicami. 47-kilometrową Trasę oznakowano kolorem żółtym, kotwicą Polski Walczącej oraz tabliczkami kierunkowymi.",
      },
      {
        title:
          "O walorach Szlaku decyduje nie tylko wartość historyczna miejsc...",
        content:
          "...ale również urzekające krajobrazy ziemi ropczycko-sędziszowskiej. Nie brakuje tu otwartych przestrzeni i polnych dróg, a prawdziwe bogactwo przyrodnicze szlaku stanowią lasy wysrebrzone karpacką buczyną, urocze polany i strumienie wijące się serpentynami wśród przepastnych jarów. Wszystko to sprawia, że Szlak Partyzancki I Zgrupowania Armii Krajowej Obwodu Dębica jest opcją nie tylko dla miłośników historii, ale amatorów mocniejszych wyzwań terenowych.",
      },
    ],
    trailPoints: [
      {
        point: "Punkt Mobilizacja",
        description:
          "Rozkaz rozpoczęcia akcji „Burza”, dotarł do dowódcy Podobwodu AK Sędziszów-Ropczyce porucznika Mieczysława Stachowskiego „Sępa”, „Macieja” rano, 28 lipca 1944 r. i natychmiast został wprowadzony w życie. Koncentracja części oddziałów nastąpiła w rejonie Góry Ropczyckiej. Punktem zbornym były zabudowania Andrzeja Roga. Po częściowym uzbrojeniu oddziału, przeglądzie i sprawdzeniu gotowości bojowej błogosławieństwa udzielił ksiądz kapelan Wojciech Święs. Następnie pluton pod dowództwem Adama Misia „Zakopiańskiego” wyruszył w kierunku Gnojnicy Woli.",
      },
      {
        point: "Punkt Koncentracja",
        description:
          "28 lipca 1944 r. dom rodzinny porucznika Ludwika Kubika „Lucjana” zamieniono na kwaterę dowództwa I Zgrupowania Obwodu AK Dębica. Na budynku zawieszono biało-czerwone flagi. Koncentrujący się akowcy rozbili obóz, zaciągnęli straże, ubezpieczenia i przystąpili do realizacji działań bojowych. Ustalono najdogodniejsze miejsca do ataku na szosę Ropczyce-Sędziszów. Małymi patrolami przeprowadzano dalekie rozpoznanie. Wykonano kilka wypadów, by zdobyć broń. Nocą z 31 lipca na 1 sierpnia 1944 r. zrealizowano akcję „Lena”, wysadzając w powietrze oba tory kolejowe na odcinku Ropczyce-Brzezówka.",
      },
      {
        point: "Punkt Las Czemeczna",
        description:
          "Latem 1944 r. las w rejonie Gnojnicy Lipnicy stał się bazą żołnierzy AK I Zgrupowania Obwodu Dębica, realizujących akcję „Burza”. Po walkach stoczonych w dniu 4 sierpnia i kontrataku Niemców, akowcy musieli się wycofać. Stąd przeprowadzali wypady na samochody nieprzyjaciela, ułatwiali też działania nacierającym oddziałom Armii Czerwonej. Podczas jednej z akcji zginęli Władysław Jarząb i Czesław Mikowski. Duże zaangażowanie wykazywali zaprzysiężeni w szeregi AK leśnicy. Opiekowali się organizacyjną radiostacją i magazynowali rzeczy ewakuowane z Zakładów Przemysłowych w Sędziszowie Młp. i majątków ziemskich.",
      },
      {
        point: "Punkt Dom Kowalskich",
        description:
          "4 sierpnia 1944 r. żołnierze AK zaatakowali pozycje niemieckie w rejonie lasu Lipnica. Zaskoczony nieprzyjaciel wycofał się w popłochu. Nocą tego samego dnia w rejon Gnojnicy Woli kontratakując, dotarły pancerne oddziały niemieckie. Okupant zastosował terror, paląc domy i mordując cywilów. Spalono dom Kubików, zginął też ojciec Ludwika Kubika „Lucjana”. W konsekwencji sztab I Zgrupowania Obwodu AK Dębica zmienił miejsce kwaterowania. Przez kolejne tygodnie działań akcji „Burza” dowództwo kwaterowało w domu państwa Kowalskich w pobliżu przysiółka Poręby Chechelskie.",
      },
      {
        point: "Punkt Sztandar AK",
        description:
          "Sztandar bojowy Inspektoratu AK Rzeszów brał udział w akcji „Burza”. Szczęśliwie ocalał, wyniesiony z płonących zabudowań domu rodzinnego Ludwika Kubika „Lucjana”. Po ustaniu walk akcji „Burza” „Lucjan” przekazał sztandar księdzu Eugeniuszowi Piechowi „Szymonowi”, z poleceniem przechowania go w kościele w Zagorzycach Górnych. Ukrycia sztandaru AK w wieży kościelnej na prośbę „Szymona”, podjął się Ludwik Maciołek „Raban”. Od tej chwili sztandar został związany z osobą księdza Eugeniusza Piecha i miejscowym kościołem. Sztandar szczęśliwie ocalał, pomimo intensywnych poszukiwań przez Urząd Bezpieczeństwa Publicznego.",
      },
      {
        point: "Punkt Chmielówka",
        description:
          "Dom rodzinny Karola Chmiela „Groma”, „Katonowicza”. Tu mieszkał z rodziną podczas okupacji niemieckiej. Zaangażowany w konspirację na początku 1940 r. stał się organizatorem i dowódcą plutonu, a następnie kompanii ZWZ-AK oraz BCh. Dysponując osobnym pokojem, organizował narady i odprawy organizacyjne, w których między innymi uczestniczyli: Ludwik Kubik „Lucjan”, Józef Łotocki „Łata”, Ludwik Marszałek „Zbroja”, Kazimierz Charchut „Grzmot” czy Franciszek Mazek „Krogulec”. W tym domu powstawały raporty polityczne dotyczące okolicznej komuny. Stąd w lipcu 1944 r. „Grom” wyruszył do działań akcji „Burza”.",
      },
      {
        point: "Punkt Krzyż pod bukiem",
        description:
          "30 lipca 1944 r. w pierwszą niedzielę po rozpoczęciu akcji „Burza” ksiądz Eugeniusz Piech „Szymon”, na polanie w lesie Budzisz odprawił mszę świętą dla żołnierzy AK I Zgrupowania Obwodu AK Dębica. Na honorowym miejscu przy ołtarzu ustawiono sztandar Inspektoratu AK Rzeszów. W trakcie nabożeństwa Niemcy z czołgów ostrzelali polanę. Dowódca zgrupowania wydał rozkaz rozproszenia. Po kilku dniach I Zgrupowanie uległo podziałowi. Pluton Mieczysława Stachowskiego „Sępa” znalazł się za sowiecką linią frontu. Kwatermistrzostwo było na zapleczu Niemców. Po przejściu frontu w miejscu mszy świętej na pamiątkę tych wydarzeń żołnierz AK, leśniczy Jan Siewierski „Buk”, ustawił krzyż.",
      },
      {
        point: "Punkt Potyczka z czołgami",
        description:
          "W pierwszych dniach sierpnia 1944 r. pluton I Zgrupowania Obwodu AK Dębica dowodzony przez Mariana Stanka „Rydla” starł się z niemieckimi czołgami. Informację o jadących szosą od Strzyżowa wozach pancernych przekazała miejscowa ludność. Żołnierze AK przy pomocy leśników zatarasowali przejazd, ścinając na drogę drzewa. Gdy pojazdy zbliżyły się do barykady, akowcy obrzucili je granatami i butelkami z benzyną, nie wyrządzając większych szkód. Niemcy odpowiedzieli ogniem z działek i karabinów maszynowych. Wywiązała się ponad godzinna walka. W jej trakcie zaginął pochodzący z Borku Wielkiego Józef Feret „Piorun”. Po tej akcji pluton wycofał się do lasu Budzisz.",
      },
      {
        point: "Punkt Czerwonek",
        description:
          "2 sierpnia 1944 r. powiększony pluton I Zgrupowania Obwodu AK Dębica dowodzony przez podporucznika Mieczysława Stachowskiego „Sępa”, który wówczas  przeprowadzał dalekie wypady w kierunku Zagorzyc Dolnych i Góry Ropczyckiej, starł się z dużym oddziałem niemieckim. W trakcie potyczki w niewyjaśnionych okolicznościach zginęli dwaj żołnierze AK Czesław Motyka „Burza” i Józef Zawisza „Szczęk”, którzy jako szperacze szli w przedniej straży. Nieco później ta sama grupa uderzyła na inny oddział niemiecki, kierujący się w stronę linii frontu. Atak z zaskoczenia okazał się skuteczny i zmusił nieprzyjaciela do odwrotu.",
      },
      {
        point: "Punkt OP „Dzwon”",
        description:
          "6 sierpnia 1944 r. w rejonie Wiercan dowódca wycofującego się zza Sanu Oddziału Partyzanckiego „Dzwon” Zygmunt Pawlus „Turek” nawiązał kontakt z oficerami sztabu Armii Czerwonej. Przekazał im wówczas szczegółowe plany umocnień niemieckich w rejonie Góry Ropczyckiej, Checheł, Ropczyc oraz SS-Truppen Übungs Platz Heidelager w Pustkowie. 9 sierpnia OP „Dzwon” przekraczając linię frontu otrzymał zaświadczenie potwierdzające, że oficerowie AK Zygmunt Pawlus, Józef Szmid i Zygmunt Basara wypełniają zadanie specjalne na tyłach nieprzyjaciela. ...Po zakończeniu misji wyżej wymienieni udadzą się do miejsca postoju swojego dowództwa...",
      },
      {
        point: "Punkt Las Cichany",
        description:
          "3 sierpnia 1944 r. Niemcy ostrzelali pięcioosobowy patrol żołnierzy I Zgrupowania Obwodu AK Dębica wracający z rozpoznania w Zagorzycach Dolnych. Wywiązała się walka. Akowcy odpowiedzieli ogniem z karabinów, a następnie obrzucili stanowisko CKM granatami, doprowadzając do jego likwidacji. W ten sam sposób unieszkodliwili drugi CKM. Po tym patrol bez przeszkód dołączył do reszty oddziału Mieczysława Stachowskiego „Sępa”. Tego samego dnia Ak-owcy przechodzący przez las Cichany, w najwyższym jego punkcie obserwowali, jak Niemcy wysadzali stację kolejową w Sędziszowie Młp.",
      },
      {
        point: "Punkt Sośnina",
        description:
          "28 lipca 1944 r. przed wyruszeniem do działań akcji „Burza” na polanie leśnej w „Sośninie” Helena Eugenia Kozek „Myszka” członkini Wojskowej Służby Kobiet wręczyła żołnierzom AK opaski biało-czerwone oraz środki opatrunkowe wykonane przez nią i jej koleżanki. Komendantką WSK w Podobwodzie AK Sędziszów „Sława” była Józefa Depa Fitoł „Horpyna”, a jej zastępczynią  Apolonia Pondo „Justyna”. Dziewczęta z WSK latem 1944 r. były nieocenionym wsparciem dla akowców walczących w akcji „Burza”. Dbały o prowiant i wyżywienie. Pełniły służbę kurierską i sanitarną, niosąc doraźną pomoc rannym kolegom, wielokrotnie transportowały ich do szpitali.",
      },
      {
        point: "Punkt Krzyż Milenijny Podlasek",
        description:
          "4 sierpnia 1944 r. pluton Mieczysława Stachowskiego „Sępa” po przebiciu się za sowiecką linię frontu w celu uniknięcia dalszych strat, wycofał się. Akowcy skrajem lasu przemieszczali się przez Podlasek w kierunku Sędziszowa Młp. Wychodząca na otwarty teren szpica oddziału została zaatakowana ogniem niemieckich karabinów maszynowych i granatników. W tym samym czasie z tyłu omyłkowo ostrzelali ich Sowieci. Po wycofaniu się do lasu akowcy przemaszerowali do szkoły w Iwierzycach, gdzie umyli się i przespali. W konsekwencji ostrzału ranny został Ludwik Baran „Most”, którego koledzy zdołali bezpiecznie wynieść i opatrzyć.",
      },
      {
        point: "Punkt Dom Władysława Prokopa",
        description:
          "27 lipca 1944 r. w pobliżu domu rusznikarza Władysława Prokopa „Sprężyny” doszło do starcia plutonu dywersyjnego Tadeusza Szczurowskiego „Śmiałego” z oddziałem niemieckim. Akowcy po niezrealizowanej akcji zdobycia broni na załodze tartaku w Krzywej maszerowali na koncentrację w kierunku lasu Budzisz. W zabudowaniach „Sprężyny” żołnierze AK mieli punkt zbiorczy i spoczynku. W trakcie walki poległ Mieczysław Saj „Mściwy”, a ciężko ranny od postrzału w płuca został dowódca plutonu „Śmiały”. Oddział AK uległ rozproszeniu. Niemcy po rewizji w domu „Sprężyny” wycofali się samochodami na zachód w kierunku Dębicy.",
      },
      {
        point: "Punkt Leśniczówka „Kabla”",
        description:
          "5 sierpnia 1944 r. pluton Mieczysława Stachowskiego „Sępa” dotarł do leśniczówki Edwarda Dubiela „Kabla” w Krzywej. „Sęp” nawiązał łączność z kwaterującym tam oddziałem artylerii sowieckiej, przekazując im plany umocnień SS-Truppen Übungs Platz Heidelager w Pustkowie i poligonu artyleryjskiego w Bliźnie. Mając łączność telefoniczną z kwatermistrzostwem przebywającym w Gnojnicy Lipnicy, przy użyciu nieczynnej linii wysokiego napięcia, dostarczał aktualne rozpoznanie stanowisk niemieckich w rejonie Sędziszowa Młp. 11 sierpnia, po nakazaniu przez Sowietów wcielenia do armii Berlinga oraz obawiając się aresztowań przez NKWD, „Sęp” zamelinował broń i rozwiązał oddział.",
      },
    ],
    map: {
      iframeUrl: "https://traseo.pl/mapa/331242/m/0/hd/1/",
      externalUrl:
        "https://traseo.pl/trasa/szlak-partyzancki-i-zgrupowania-ak-obwodu-debica",
    },
  },
  second: {
    displayName:
      "Szlak Partyzancki II Zgrupowania Armii Krajowej Obwodu Dębica",
    enabled: true,
    paragraphs: [
      {
        title: "Ścieżka wiedzie malowniczym wzgórzami na terenie gmin:",
        content:
          "Dębica, Pilzno w powiecie dębickim, zataczając pętlę nad miejscowościami Gumniska i Braciejowa. Szlak wyznacza 10 punktów oznakowanych tablicami, a przez 9 z nich wiedzie oznakowana białymi lilijkami trasa marszowa długości około 16 km, przechodząca przez leśnictwa Berdech oraz Gumniska. Jest propozycją dla wszystkich rozmiłowanych w pieszych wędrówkach i historii regionu dębickiego, a także cenną pomocą dydaktyczną dla nauczycieli i rodziców w wychowaniu patriotycznym dzieci i młodzieży.",
      },
      {
        title:
          "O walorach szlaku decyduje nie tylko wartość historyczna miejsc...",
        content:
          "...ale również urzekające krajobrazy i osobowości geograficzne ziemi dębickiej. Nie brakuje tu otwartych przestrzeni i polnych dróg, a prawdziwe bogactwo przyrodnicze szlaku stanowią lasy, wysrebrzone karpacką buczyną, urocze polany i strumienie wijące się serpentynami wśród przepastnych jarów. Wszystko to sprawia, że Szlak Partyzancki jest propozycją nie tylko dla miłośników historii, ale również dla amatorów mocniejszych wyzwań terenowych.",
      },
    ],
    trailPoints: [
      {
        point: "Punkt Szkoła",
        description:
          'Wędrówkę Szlakiem Partyzanckim rozpoczynamy przed szkołą w Gumniskach. Tu w czasie II wojny światowej mieściła się siedziba komendy Obwodu ZWZ-AK Dębica krypt. "Dziekania", "Deser". Położenie oraz warunki terenowe, a zwłaszcza patriotyzm mieszkańców Gumnisk i Braciejowej, stwarzały dobre warunki do działalności konspiracyjnej. Komendantem Obwodu od 1940 r., był kierownik szkoły w Gumniskach, Adam Lazarowicz ps. "Klarma". W szkole odbywały się więc odprawy dowódcze, szkolenia, egzaminy podchorążych oraz kursy tajnego nauczania. Od kilku lat szkoła gromadzi zdjęcia oraz pamiątki związane z walkami II Zgrupowania AK Obwodu Dębica. Zbiory przechowywane są w szkolnej Izbie Pamięci.',
      },
      {
        point: "Punkt Kościół",
        description:
          'W sąsiadującym ze szkołą kościele parafialnym pw. św. Mikołaja, tętniło życie duchowe i patriotyczne mieszkańców Braciejowej i Gumnisk. W czasie wojny tutejsci księża włączali się w pracę konspiracyjną. Udostępniali plebanię i zabudowania gospodarcze do przechowywania sprzętu wojskowego, ważnych dokumentów i map. Tutejszy wikary, ks. ppor. Stanisław Bartosz "Mieczyk", był kapelanem Obwodu AK Dębica. W czasie akcji "Burza" towarzyszył żołnierzom w najcięższych momentach walk. Udzielał sakramentów i podtrzymywał morale w oddziałach. Drewniany budynek starego kościoła spłonął w czasie działań frontowych. W jego miejscu stoi dziś nowa dzwonnica, a obecna parafia pw. Wniebowzięcia NMP, troszczy się o pamięć poległych obrońców ziemi dębickiej.',
      },
      {
        point: "Punkt Cmentarz",
        description:
          'Na cmentarzu w Gumniskach podczas okupacji znajdował się ukryty magazyn broni. Dziś w tym miejscu, pośrodku cmentarza znajduje się grobowiec poległych w czasie akcji "Burza" partyzantów Armii Krajowej, których ciała ekshumowano tutaj po wojnie. Na cmentarzu warto poświęcoć czas mna chwilę zadumy przy pięknej drewnianej kapliczce katyńskiej, wykonanej przez miejscowego rzeźbiarza, Stanisława Nylca.',
      },
      {
        point: "Punkt Berdech",
        description:
          'W tym miejscu rozpoczyna się drugi etap naszego szlaku. Na terenie leśniczówki, 28 lipca 1944 r., miała miejsce koncentracja oddziałów II Zgrupowania AK Obwodu Dębica do akcji "Burza\. W tym czasie - pisał Antoni Stańko, leśnictwo zamieniło się w warowny obóz. Rozstawione posterunki i lotne patrole broniły obcym dostępu. Budynki i dziedziniec pełne były broni i oporządzenia, materiałów wojskowych, żywności... Dziś na Berdechu znajduje się nowa leśniczówka, która chętnie gości weteranów Armii Krajowej oraz młodzież.',
      },
      {
        point: "Punkt Klabachówka",
        description:
          "Po wyjściu z berdechowskiego lasu szlak wiedzie piękną polną drogą w kierunku Południka. Wokół nas roztacza się niesamowita panorama łąk i pól. Dochodzimy do miejsca w którym niegdyś mieściła się gajówka Władysława Klabachy, miejsce spotkań łączników i magazyn broni. Z uwagi na zagrożenie dekonspiracją leśniczówki na Berdechu, dowództwo zdecydowało się przenieść na krótki czas, sztab II Zgrupowania do gajówki Władysława Klabachy na Południku. Obecnie po zabudowaniach gajówki nie ma już śladu, wokół znajdują się tylko dzikie drzewa, niektóre zapewne pamiętają jeszcze tamte dni. Szlak tymczasem zanurza się w las w kierunku jaru.",
      },
      {
        point: "Punkt Jar",
        description:
          "Po bitwie na Kałużówce zgrupowanie przeniosło się do wąwozu w miejscu zwanym przez miejscowych Pieczowiskami. Tu zmarł z wycieńczenia, ranny w boju na Kałużówce strz. Bronisław Zima „Taras”. Miejsce to obrazuje dramat oraz bezsilność całego zgrupowania po bitwie na Kałużówce. Bez jedzenia, dachu nad głową oraz pod psychiczną presją niemieckiej obławy, partyzanci (często ranni i wymagający opieki medycznej) kryli się w jarze przez kilka dni, po czym wyruszyli ostrożnie w kierunku lasów Jaworza. 29 sierpnia nastąpiło pierwsze, częściowe rozwiązanie oddziałów AK, natomiast ostatni żołnierze opuścili lasy dopiero na przełomie października i listopada 1944 roku. W tym czasie II Zgrupowanie poniosło najdotkliwsze straty - blisko 50 zabitych, wielu rannych.",
      },
      {
        point: "Punkt Krzyż Jabłonowskiego",
        description:
          "Bitwa na Kałużówce zakończyła się wycofaniem oddziałów niemieckich oraz żołnierzy II Zgrupowania, którzy przez całą noc z 24/25 sierpnia próbowali wydostać się z lasu, który już wtedy był szczelnie zamknięty przez pierścień oddziałów niemieckich. Jak się okazało front niemiecko-sowiecki zatrzymał się na linii Wisłoki na okres blisko pół roku (do stycznia 1945 r.). Rano 25 sierpnia w czasie pokonywania drogi Braciejowa-Południk zgrupowanie natrafiło na niemieckie stanowisko ogniowe w skutek czego poległo dwóch żołnierzy: Andrzej Jabłonowski „Śmigło” oraz transportowany przez niego Tadeusz Ciszek „Jahura”, który jako ciężko ranny w boju na Kałużówce, nie mógł poruszać się o własnych siłach.",
      },
      {
        point: "Punkt Kałużówka",
        description:
          'Polana Kałużówka jest centralnym punktem Szlaku Partyzanckiego. Tu miała miejsce dwudniowa bitwa żołnierzy II Zgrupowania z oddziałami niemieckimi. Przez cały dzień 23 sierpnia Niemcy prowadzili silny ostrzał artylerysjki skierowany na stanowiska AK na Kałużówce. Rankiem następnego dnia przystąpili do głównego uderzenia oddziałami piechoty na wzgórze (426 m.n.p.m.), gdzie skoncentrowali się partyzanci. Żołnierze II Zgrupowania cofali się stopniowo w głąb lasu, by kilkakrotnie przejść do kontrnatarcia. Kiedy śmiertelnie ranny został dowódca niemiecki w randze majora, Niemcy rozpoczęli ewakuację z rejonu Kałużówki. Swoje obozowisko opuścili także żołnierze II Zgrupowania. Walki na Kałużówce całkowicie ustały około godziny 19. Pomnik na polanie (zbudowany w 1984 r.) upamiętnia wszystkich żołnierzy II Zgrupowania Obwodu Dębica, którzy polegli w okresie akcji "Burza".',
      },
      {
        point: "Punkt Zborżilówka",
        description:
          "Punkt ten znajduje się w Gołęczynie, poza znakowaną trasą szlaku. W czasie wojny znajdowały się tutaj zabudowania leśniczówki Stanisława Zborżila „Sosny”. Tam stacjonował sztab III Zgrupowania AK Obwodu Dębica. Rankiem, 20 sierpnia 1944 r. zabudowania Zborżilówki zostały otoczone przez duży oddział niemiecki. Wywiązała się walka w czasie której zginęło wielu żołnierzy III Zgrupowania. Śmiertelnie raniony został także kpt. Józef Lutak „Dyzma”, oficer dywersji Inspektoratu AK Rzeszów, uważany za najdzielniejszego partyzanta na Rzeszowszczyźnie. Jego pogrzeb, z honorami wojskowymi, odbył się dwa dni później na Kałużówce.",
      },
      {
        point: "Punkt Miecza",
        description:
          'Miejsce to upamiętnia najsłynniejszą akcję dywersyjną przeprowadzoną w czasie "Burzy" w Obwodzie Dębica. 12 sierpnia 1944 r. oddział niemiecki w sile batalionu przystąpił do pacyfikacji mieszkańców Braciejowej i Gumnisk. Na pomoc bezbronnej ludności wyruszyła z lasów grupa dywersyjna Władysława Strumskiego pod dowództwem kpt. Józefa Lutaka „Dyzmy”. Dynamicznie przeprowadzona akcja zakończyła się spektakularnym sukcesem. Niemcy pomimo kilkukrotnej przewagi liczebnej, musieli ratować się ucieczką. W czasie tych działań zginął żołnierz oddziału dyspozycyjnego, Stanisław Mroczka ps. „Miecz”. Krzyż w Gumniskach upamiętnia brawurową akcję żołnierzy dębickiej dywersji, a punkt ten kończy trasę Szlaku Partyzanckiego.',
      },
    ],
    map: {
      iframeUrl: "https://traseo.pl/mapa/14679/m/0/hd/1/",
      externalUrl:
        "https://traseo.pl/trasa/szlak-partyzantow-ii-zgrupowania-ak-obwodu-debica",
    },
  },
  third: {
    displayName:
      "Szlak Partyzancki III Zgrupowania Armii Krajowej Obwodu Dębica",
    enabled: false,
    paragraphs: [],
    trailPoints: [],
    map: { iframeUrl: "", externalUrl: "" },
  },
} as const;
