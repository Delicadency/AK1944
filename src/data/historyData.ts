import { Routes } from "@/routes";

export const historyData = {
  history: {
    title: "Historia",
    description1:
      "Wybierz zakładkę z wykresu lub przejdź do jednej z sekcji poniżej, by zanurzyć się w bogate dzieje naszej przeszłości. Każdy fragment opowieści skrywa bohaterskie czyny i niezłomną wolę walki o wolność.",
    description2:
      "Dowiesz się tu o losach 5. Pułku Strzelców Konnych, który zapisał się złotymi zgłoskami na kartach historii, poznasz szczegóły Akcji „Burza”, symbolu odwagi i determinacji Armii Krajowej, a także odkryjesz historię członków Obwodu Dębica SZP-ZWZ-AK, walczących z honorem i poświęceniem w czasie największej próby.",
    description3:
      "Znajdziesz tu także przejście do sekcji mieszczącej bibliografię oraz biogramy bohaterów, gdzie zgłębisz osobiste historie oddanych obrońców ojczyzny o wielkich sercach.",
    description4:
      "Zapraszamy do podróży w czasie, ożywienia wspomnień i refleksji nad siłą ducha polskiego żołnierza i patrioty.",
    list: {
      regiment: {
        id: "1",
        title: "5. Pułk Strzelców Konnych",
        description:
          "Prześledź historię jednego z najważniejszych oddziałów Armii Krajowej, odtworzonego w czasie Akcji „Burza” na ziemi dębickiej. Poznaj strukturę pułku, życie dowódców i zadania realizowane podczas walk z okupantem. To nie tylko podział organizacji na rejony czy wykaz najważniejszych działań bojowych i dywersyjnych. Przed Tobą opowieść o odwadze, zgraniu, a przede wszystkim o niezłomnym duchu żołnierzy oddanych walce za wolną Polskę. Oto historia jednostki, której nic nie nie wymaże z kart dziejów.",
        image: {
          path: "/images/history/main/regiment.jpg",
          alt: "Defilada 5. Pułku Strzelców Konnych z okazji święta pułku w Dębicy. Pluton ckm na jukach, 9 czerwca 1938 r.",
        },
        route: Routes.REGIMENT,
      },

      burza: {
        id: "2",
        title: "Akcja „Burza”",
        description:
          "To opowieść o największej mobilizacji Armii Krajowej podczas II wojny światowej. Przenieś się w czasy dramatycznych walk w rejonie Dębicy, poznaj bohaterów w nierównej walce z okupantem i dowiedz się, jak przebiegała bitwa na polanie Kałużówka. Zobacz, jak żołnierze AK nie tylko walczyli z wrogiem, ale także chronili ludność cywilną przed represjami i pacyfikacją. Przed Tobą świadectwo niezwykłego patriotyzmu, odwagi i poświęcenia.",
        image: {
          path: "/images/history/main/burza.jpg",
          alt: "Pogrzeb kpt. Józefa Lutaka ps. Dyzma. Trumnę niosą żołnierze oddziału dyspozycyjnego komendy Obwodu AK Dębica. Kałużówka, 21 sierpnia 1944 r.",
        },
        route: Routes.OPERATION,
      },
      debica: {
        id: "3",
        title: "Obwód Dębica SZP-ZWZ-AK",
        description:
          "Lokalne struktury konspiracyjne odegrały kluczową rolę w walce z okupantem na ziemi dębickiej. Poznaj rozwój organizacji od początków Służby Zwycięstwu Polski, przez Związek Walki Zbrojnej, aż po przekształcenie jej w Armię Krajową. Sprawdź, jak wyglądała działalność wywiadowcza, dywersyjna i szkoleniowa, a także jak Obwód przygotowywał się do operacji „Burza”. Żołnierze AK Dębica, mimo ogromnego ryzyka, stawili opór okupantom.",
        image: {
          path: "/images/history/main/debica.jpg",
          alt: "Pokazy musztry w koszarach 5. Pułku Strzelców Konnych w Dębicy. Na czele plutonu ppor. Mieczysław Rakoczy.",
        },
        route: Routes.DEBICA_DISTRICT,
      },
    },
    literature: {
      title: "Literatura",
      content:
        "Chcesz zgłębić wiedzę o Armii Krajowej i jej działalności? Odkryj polecaną literaturę, która przybliża historię największej organizacji podziemnej w okupowanej Europie. Znajdziesz tu książki i wspomnienia, które pozwolą lepiej zrozumieć heroizm i poświęcenie żołnierzy AK. To doskonałe źródło wiedzy dla pasjonatów historii oraz tych, którzy chcą poznać kulisy walk o niepodległość. Poznaj opowieści, które na zawsze zapisały się w dziejach Polski.",
    },
    biograms: {
      title: "Biogramy",
      content:
        "Poznaj sylwetki bohaterów Armii Krajowej – ich życiorysy, daty urodzenia i śmierci, stopnie wojskowe oraz niezwykłe historie walki o wolną Polskę. Biogramy żołnierzy przybliżą Ci losy ludzi, którzy swoją odwagą i determinacją zapisali się na kartach historii. Odkryj, kim byli i jak wyglądała ich droga w szeregach AK. Dowiedz się, jakie wartości ich inspirowały i jak wpływali na losy lokalnej społeczności. Wejdź, by oddać hołd ich pamięci i poznać ich niezwykłe losy.",
    },
  },
  regiment: {
    title: "5. Pułk Strzelców Konnych",
    genesisTitle: "Geneza powstania",
    genesis1:
      "Historia powstania 5. Pułku Strzelców Konnych wiąże się z okresem napoleońskim, kiedy to w Kościanie na przełomie 1806 i 1807 r. Franciszek Garczyński sformował pułk, który w czerwcu 1807 r. otrzymał nazwę 5. PSK. Dowódcą tegoż pułku został płk Kazimierz Turno. Po burzliwych perypetiach okresu napoleońskiego, udziale w wojnie z Austrią w 1809 r. i zdziesiątkowaniu pułku w wielkiej wyprawie Napoleona na Moskwę w 1812 r. pułk uległ naturalnemu rozwiązaniu. Warto dodać, że w wyprawie w roku 1812 w szeregach pułku walczył Aleksander Fredro, który okres ten opisał w pamiętniku ”Trzy po trzy”.",
    genesis2:
      "Ponowna organizacja 5. PSK nastąpiła w okresie powstania listopadowego. 19 stycznia 1930 r. Pułk Strzelców Gwardii został przemianowany na 5. Pułk Strzelców Konnych. Dowódcą tegoż pułku został mianowany płk Benedykt Zielonka. Odtwarzany w tym okresie 5. PSK brał udział m.in. w bitwach pod Wawrem, Grochowem, Nurem, Ostrołęką i Raciążem. Po klęsce powstania część żołnierzy opuściła tereny Królestwa Polskiego szukając schronienia w Prusach, do Kongresówki powrócili po uzyskaniu amnestii u cara Mikołaja I.",
    genesis3:
      "Trzecie z kolei odtwarzanie jednostki, miało miejsce w latach 1919-1921. Wówczas pułk powstawał z mniejszych oddziałów (szwadronów i dywizjonów), przejmując ich historię i tradycje. We wrześniu 1919 r. 3. Pułk Dragonów został przemianowany na 3. Pułk Strzelców Konnych, zaś ten, rozkazem z 6 października 1920 r. został przemianowany na 5. Pułk Strzelców Konnych. Nazewnictwo związane z numerem jednostki, wiąże się z faktem, iż pułk stacjonując w Tarnowie, przynależał administracyjnie pod Okręg Korpusu nr V w Krakowie. Początkowo 5. PSK wchodził w skład V Brygady Jazdy, która została przemianowana kolejno na 5. Samodzielną Brygadę Kawalerii (w 1924 r.) i Krakowską Brygadę Kawalerii (w 1937 r.).",
    commanders: {
      title: "Dowódcy Pułku w okresie międzywojennym",
      persons: [
        { name: "ppłk Aleksander Ehrbar", date: "(19.06.1919 - 22.02.1924)" },
        { name: "płk Adam Rozwadowski", date: "(22.02.1924 - 22.02.1927)" },
        { name: "ppłk Jan Kanty Olszewski", date: "(22.02.1927-28.01.1928)" },
        {
          name: "płk dypl. Juliusz Kleeberg",
          date: "(28.01.1928 - 31.01.1930)",
        },
        { name: "ppłk Ignacy Kowalczewski", date: "(31.01.1930 - 04.1938)" },
        { name: "płk Kazimierz Kosiarski", date: "(04.1938 - 20.09.1939)" },
      ],
    },
    regimentTitle: "5. Pułk Strzelców Konnych w Dębicy",
    regiment1:
      "15 grudnia 1934 r. Tarnowianie pożegnali uroczyście 5. PSK, który został przeniesiony do koszar przy ulicy Kościuszki w Dębicy. Zresztą na ten temat istniało kilka kawaleryjskich żurawiejek, m.in. ”Brakło rowów w okolicy, przenieśli ich do Dębicy” lub ”Tak się błąkał w okolicy, aż go wzięli do Dębicy”. Jak się okazało Dębica była ostatnim miejscem postoju pułku, który stąd wyruszył na wojnę obronną we wrześniu 1939 r.",
    cracowBrigadeTitle:
      "Teren obrony i struktura Krakowskiej Brygady Kawalerii",
    cracowBrigade1:
      "Zgodnie z planami podjętymi przez dowództwo Armii „Kraków” podczas narad i ćwiczeń sztabowych wiosną 1938 r., Krakowska Brygada Kawalerii (która wchodziła w skład Armii „Kraków” gen. Antoniego Szyllinga) miała, na wypadek wybuchu wojny, bronić rejonu Kalety - Koszęcin oraz Woźniki - Ligota Woźnicka. Dla szerszego zobrazowania jest to teren szerokości około 15 km, między Tarnowskimi Górami a Częstochową.",
    cracowBrigade2:
      "Warto dodać że poza 5. PSK w skład Krakowskiej BK we wrześniu 1939 r. wchodził: 3. Pułk Ułanów Śląskich z Tarnowskich Gór, 8. Pułk Ułanów Księcia Poniatowskiego z Krakowa, 3. Dywizjon Artylerii Konnej z Oświęcimia, a także własne jednostki wspierające (szwadron kolarzy, szwadron pionierów, szwadron łączności) oraz jednostki przydzielone: batalion Obrony Narodowej „Lubliniec” i 51. Dywizjon Pancerny.",
    cracowBrigade3:
      "W lecie 1939 r. nie było możliwości zorganizowania tzw. letniej koncentracji całej KBK, dlatego poszczególne jednostki wchodzące w skład brygady samodzielnie przeprowadziły ćwiczenia terenowe. Przez cały miesiąc - od 15 lipca pułk prowadził manewry ćwiczebne w okolicach Rzemienia i Tuszymy, a następnie od 15 sierpnia manewry ruchome, zachowując promień działania 20 km od Dębicy. 24 sierpnia 1939 r. nastąpiła koncentracja pułku, a w niedzielę 27 sierpnia 5. PSK wyruszył pociągiem z Dębicy do Zawiercia. Po dotarciu na miejsce, dębickich strzelców przywitali licznie zgromadzeni mieszkańcy Zawiercia i okolic. Żołnierze ustawieni w szyku bojowym ruszyli ze śpiewem piosenki „Wojenko, wojenko cóż żeś ty za pani, że za tobą idą chłopcy malowani…”. Miejscowa ludność ze łzami w oczach patrzyła na żołnierzy zmierzających na wojnę by powstrzymać niemieckiego agresora. Panowała atmosfera wzruszenia i wiary w pogodne jutro.",
    separationTitle: "Podział Pułku na dwa dywizjony",
    separation1:
      "Z Zawiercia pułk wyruszył w rejon miejscowości Ogrodzieniec, a następnie do miejscowości Podzamcze i docelowo do Woźnik. Tam pułk został podzielony na dwie części - na dwa dywizjony, co było sprzeczne z wcześniejszymi ustaleniami, które mówiły że pułk całością sił będzie bronił rejonu Woźnik. Zgodnie z nowymi wytycznymi pierwszy dywizjon pozostał w Woźnikach zaś drugi został skierowany do miejscowości Rudnik Mały. Według dowódcy, płk. Kazimierza Kosiarskiego, podział ten nie dawał szans na skuteczną realizację działań na głównej pozycji obronnej w Woźnikach. Zresztą Kosiarski swoje spostrzeżenia przedstawił dowódcy brygady gen. Zygmuntowi Piaseckiemu. Słowa Kosiarskiego okazały się prorocze w skutkach, gdyż trudno dostępny Rudnik Mały, którego bronił dywizjon mjr. Franciszka Rekuckiego (1. i 2. Szwadron), został niejako pominięty w niemieckim planie uderzeniowym.",
    woznikiTitle: "Bitwa pod Woźnikami i Ligotą Woźnicką - wrzesień 1939",
    wozniki1:
      "1 września o godzinie 4:50 sześć niemieckich dywizji przekroczyło polsko-niemiecką granicę i uderzyło równocześnie na 7. Dywizję Piechoty i Krakowską BK. Batalion „Lubliniec” bronił się w okolicach Koszęcina trzema kompaniami. Opór batalionu, którym dowodził mjr Franciszek Żak był niezwykle zacięty, niemniej oddziały niemieckie zaczęły okrążać pozycje batalionu, który będąc w bardzo ciężkim położeniu, musiał się wycofać w godzinach południowych. Podczas wycofywania wysuniętych jednostek, powstały szerokie luki między Krakowską BK, 7. DP, a GO „Śląsk”. Rankiem 2 września pancerno-motorowe jednostki nieprzyjaciela skoncentrowały swoje uderzenie na główną pozycję obronną brygady w rejonie Woźnik (gdzie obronę zapewniał 5. Pułk Strzelców Konnych i 3. Pułk Ułanów) oraz na rejon Ligoty Woźnickiej (broniony przez 8. Pułk Ułanów).",
    wozniki2:
      "W czasie ponad pięciogodzinnej walki 2 września, dwie niemieckie dywizje (2. i 3. Dywizja Lekka) przełamały linię obronną Woźniki - Ligota, robiąc tym samym pierwszy wyłom w głównym froncie obronnym Armii „Kraków”.",
    wozniki3:
      "Trzeba w tym miejscu nadmienić, że w końcowej fazie walk 2 września, szwadrony 5. PSK broniące Woźnik zostały niejako osamotnione, bowiem jako pierwszy ze swych pozycji został wyparty pułk ułanów z Krakowa, zaś ułani z Tarnowskich Gór po kilku przeprowadzonych kontratakach, jako pierwsi w Woźnikach przystąpili do wycofania. Teren nie został utrzymany nawet mimo wprowadzenia do walki sił odwodowych (3. DAK i szwadronów odwodowych 3. P. Uł.).",
    wozniki4:
      "Bohaterska, a czasem wręcz heroiczna, była obrona Woźnik przez strzelców 5. Pułku, którzy kilkukrotnie podczas tych zaciętych walk odpierali niemieckie natarcie. Pomimo beznadziejnego położenia oraz dysproporcji sił i posiadanego sprzętu, nie brakowało ofiarnych prób powstrzymania Niemców. Strzelec nazwiskiem Rosa z 5. Pułku zdołał unieruchomić w rejonie Woźnik trzy niemieckie czołgi, co w tych warunkach było nie lada wyczynem.",
    wozniki5:
      "Około godziny 11 ostatni pluton 5. PSK opuścił rejon Woźnik. W godzinach wieczornych nastąpiło połączenie I i II dywizjonu 5. PSK. Wskutek niekorzystnej sytuacji w nocy z 2 na 3 września, brygada została skierowana w rejon miejscowości Pradła, gdzie następnego dnia 5. PSK z powodzeniem odpierał niemieckie natarcie ze wzgórza Góry Berkowej, utrzymując broniony teren do godzin popołudniowych 3 września.",
    wozniki6:
      "W dalszej kolejności pułk został przerzucony w rejon Rokitna, gdzie zapewniał ubezpieczenie ataku brygady celem opanowania miejscowości Szczekocin. Po całodniowych, ciężkich zmaganiach z przeważającymi siłami niemieckimi, przy braku współdziałania ze strony 7. DP, Krakowska BK została odrzucona na wschodni brzeg Pilicy.",
    wozniki7:
      "4 września pułk przeszedł do Sędziszowa, gdzie otrzymał zadanie obrony miejscowości i osłony zgrupowania brygady. Nieprzyjaciel tego dnia nie wykazywał większej aktywności na lądzie, co pomogło dębickim strzelcom należycie wykonać powierzone im zadanie. Wieczorem do sztabu brygady powrócił oficer łącznikowy wysłany uprzednio do dowództwa armii, który przedstawił świeże informacje o położeniu i nowe wytyczne względem Krakowskiej BK. Brygada wobec nowego zadania miała nie dopuścić nieprzyjaciela do przekroczenia Nidy na kierunku Sędziszów - Pińczów - Busko i utrzymać za wszelką cenę Pińczów.",
    wozniki8:
      "Wczesnym świtem 5 września pułk wyruszył z Mstyczowa i przed południem dotarł do Pińczowa, gdzie do godzin wieczornych podzielony na szwadrony, bronił miejscowości z kierunku północnego i zachodniego, skutecznie powstrzymując nieprzyjaciela w rejonie Brześcia.",
    wozniki9:
      "W wyniku dużej aktywności wojsk niemieckich Krakowska BK otrzymała zadanie wycofania się w rejon Bogucic (między Pińczowem a Buskiem). Po nocnym, ciężkim marszu, brygada dotarła wczesnym świtem w rejon Bogucic. Tego dnia pułk otrzymał zadanie dozorowania drogi Chmielnik - Busko.",
    wozniki10:
      "Około południa elementy rozpoznawcze nieprzyjaciela podeszły pod Busko od strony północnej, jednak przytomne zachowanie żołnierzy 5. Pułku doprowadziło do odrzucenia tych oddziałów.  Wskutek niekorzystnego położenia całej armii, Krakowska BK zmuszona została do wycofania się w kierunku Nowego Korczyna. 5. Pułk zatrzymał się w rejonie miejscowości Pasek Wielki, gdzie na strzelców z Dębicy czekało zadanie osłony przegrupowania Grupy Operacyjnej „Jagmin” („Śląsk”) dowodzonej przez gen. Jana Jagmina-Sadowskiego.",
    escapeTitle: "Obrona Baranowa Sandomierskiego i ewakuacja Krakowskiej BK",
    escape1:
      "W związku z faktem, iż oddziały Armii „Kraków” nie dotarły 7 września do Nowego Korczyna, przedłużono zadanie dla oddziałów KBK, które stojąc na dotychczasowych stanowiskach, miały zapewnić osłonę Korczyna oraz zgrupowania Armii „Kraków” od strony północy.",
    escape2:
      "Nocą z 7 na 8 września pułk został zluzowany i zwolniony z dotychczasowego zadania, a w godzinach popołudniowych 8 września, wyruszył wzdłuż prawego brzegu Wisły w kierunku Szczucina. Miejscowość tą osiągnięto około 20. Niedługo jednak pułk przebywał w Szczucinie,  bowiem już w nocy płk Kazimierz Kosiarski otrzymał rozkaz kontynuowania marszu wzdłuż Wisły i przechwycenia mostu na Wiśle w Baranowie Sandomierskim, czego, pomimo wyczerpującego marszu, nie udało się osiągnąć. Tuż przed przybyciem oddziałów brygady, saperzy z grupy „Sandomierz” wysadzili most na rozkaz swojego dowódcy w obawie przed nagłym wtargnięciem niemieckich sił pancerno-motorowych do Baranowa. Warto dodać, że z braku łączności nie mieli oni informacji o działaniach Krakowskiej BK i o jej marszu w celu przechwycenia mostu.",
    escape3:
      "Po osiągnięciu rejonu Baranowa, brygada otrzymała kolejny rozkaz. Tym razem miała ułatwić wycofanie i przejście oddziałów Armii „Kraków” przez  Wisłę w rejonie Baranowa. W tym celu 5. Pułk wraz z baterią dywizjonu artylerii konnej miał zabezpieczyć i dozorować brzeg Wisły w okolicach zniszczonego mostu, a także zapewnić ubezpieczenie od południa (z kierunku Mielca).",
    escape4:
      "W tym czasie do pułku dołączyły oddziały uzupełniające z Ośrodka Zapasowego Krakowskiej Brygady Kawalerii, który po ogłoszonej przez prezydenta Mościckiego powszechnej mobilizacji organizował się w Dębicy pod dowództwem mjr. Jana Sroczyńskiego. Do tego ośrodka przybywali żołnierze rezerwiści, którzy otrzymali przydział służbowy do Krakowskiej BK. Przy ośrodku zorganizowano także izbę chorych, w której opatrywano zarówno żołnierzy, jak również osoby cywilne (głównie mieszkańców Dębicy i okolic), które ucierpiały w wyniku działań Luftwaffe.",
    escape5:
      "Sam Ośrodek Zapasowy został ewakuowany z Dębicy w dniu 7 września i w dalszym marszu dotarł do Brodów, gdzie schronienie znalazły rodzinny żołnierzy 5. Pułku.  Wraz z ewakuacją, wywiezione zostało archiwum dokumentacyjne oraz sztandary 5. PSK i 3. P. Uł. Po wkroczeniu Sowietów, ze sztandarami próbował przedostać się do Rumunii mjr Tadeusz Plackowski, jednak przepadł bez wieści. Prawdopodobnie dotarł do miejscowości Uhrynów na Podolu, gdzie został zamordowany przez bandy ukraińskich nacjonalistów. Nieznane są więc losy sztandaru pułkowego. Istnieją dwie hipotezy. Pierwsza, że sztandar został ukryty lub spalony przez mjr. Plackowskiego zanim dostał się on w ręce ukraińskie. Druga wersja, sugerowałaby, że sztandar wpadł w ręce ukraińskie i był widziany w kijowskich muzeach już po zakończeniu wojny.",
    escape6:
      "16 września po uprzednim „rekonesansie” nieprzyjaciel uderzył od północy na Biłgoraj. Napór niemieckich sił pancerno - motorowych każdorazowo spotykał się z silnym oporem ze strony walecznych strzelców 5. Pułku i działającego na tym odcinku obrony, szwadronu kolarzy Krakowskiej BK pod dowództwem rtm. Antoniego Starnawskiego. Nieprzyjaciel zdołał przełamać obronę miejscowości, jednak gdy od północy niespodziewanie zjawiły się oddziały GO „Jagmin”, niemieckie dowództwo podjęło decyzję o wycofaniu.",
    escape7:
      "Tego dnia doszło także do połączenia Armii „Kraków” gen. Antoniego Szyllinga z Armią „Lublin” gen. Tadeusza Piskora, który objął teraz dowództwo nad całością sił nowo powstałej Armii „Południe”. Ostatnie zmagania obu połączonych armii, a tym samym ostatnie zmagania 5. Pułku, miały miejsce w rejonie Tomaszowa Lubelskiego. Podczas tych zmagań brygada miała osłaniać od północy atak Warszawskiej Brygady Pancerno-Motorowej dowodzonej przez płk. Stefana Roweckiego na Tomaszów Lubelski, w celu dalszego przebijania się całej armii w kierunku granicy z Węgrami. Jednak kilkukrotne odkładanie tego ataku doprowadziło do sytuacji, w której żołnierze byli już całkowicie otoczeni przez nieprzyjaciela.",
    escape8:
      "Dramatyczna stała się sytuacja Krakowskiej Brygady Kawalerii, która doznała poważnych strat. Rankiem 19 września, 3. Pułk Ułanów Śląskich w potyczce w okolicach Rogóźna nieopodal Tomaszowa, stracił ponad 70% swojego stanu co oznaczało, że 5. PSK pozostał jedynym pułkiem w całej brygadzie zdolnym do prowadzenia dalszych działań.",
    escape9:
      "W związku z informacjami o wykrwawieniu się 3. Pułku Ułanów, płk Kosiarski uznał, że pułk samodzielnie nie zdoła opanować rejonu Tarnawatki, co najwyżej może spróbować opóźnić nieprzyjaciela atakując jego ariergardę wzdłuż szosy Zamość - Tomaszów na wysokości Tarnawatki. Do wykonania tego zadanie skierowano 2. Szwadron 5. PSK, pod dowództwem rtm. Jarosława Chodania. Szwadron ten kilkukrotnie uderzył na poruszające się po drodze Zamość - Tomaszów oddziały nieprzyjaciela. Podczas jednego ze śmiałych ataków udało się nawet zabrać kilku jeńców, jednakże kiedy z rejonu Zamościa nadjechała większa kolumna niemieckich wojsk, szwadron rtm. Chodania został zepchnięty ze wzgórza nad Tarnawatką. Na pomoc szwadronowi rtm. Chodania ruszył 3. Szwadron Pułku pod dowództwem rtm. Wojciecha Łopuskiego, jednak został on unieruchomiony na wskutek silnej nawały niemieckiego ognia artyleryjskiego.",
    escape10:
      "W tym czasie nastąpiło gwałtowne uderzenie nieprzyjaciela na oddziały 2. Szwadronu dowodzonego przez rtm. Chodania. W efekcie szwadron został zepchnięty ze wzgórza, ponosząc jednocześnie duże straty w zabitych i rannych. Na placu boju zmarł rtm. Jarosław Chodań, który został ciężko raniony w pachwinę i zmarł z upływu krwi nieopodal mostku nad Wieprzem w Tarnawatce.",
    escape11:
      "Do wsparcia oddziałów został także skierowany 4. Szwadron rtm. Bronisława Piotrowskiego, jednak w wyniku silnego ostrzału artyleryjskiego, 4. Szwadron także poniósł duże straty. Śmiertelnie raniony został m.in. dowódca II plutonu 4. Szwadronu 5. PSK ppor. Piotr Baran. Bezskutecznie próbowano go uratować, ale przy wyrwanym boku, bez profesjonalnej interwencji chirurgicznej, ranny dowódca nie zdołał przeżyć. Trzeba dodać, że ppor. Piotr Baran wraz ze swoim II plutonem, jeszcze przed śmiertelnym zranieniem, bohatersko odparł niemieckie natarcie od strony zabudowań położonych nad stawami.",
    escape12:
      "Jeszcze przed wieczorem nieprzyjaciel próbował przeprowadzić rozpoznanie w rejonie Pańkowa, jednak został skutecznie odrzucony na drugi brzeg Wieprza przez Pierwszy Szwadron 5. PSK skierowany z odwodu dla osłony odcinka północnego.",
    escape13:
      "Po zakończonej walce, pod osłoną nocy, pułk wycofał się z rejonu Pańków - Tarnawatka.",
    finalClashTitle: "Końcowe Starcie i Kapitulacja Armii „Południe”",
    finalClash1:
      "Rankiem następnego dnia, tzn. 20 września, zapadła decyzja o kapitulacji Armii „Południe”. Kiedy płk Kazimierz Kosiarski oraz pozostali dowódcy Krakowskiej Brygady pojechali na ostatnią naradę w sztabie armii, pod obóz 5. Pułku we wsi Ulów podeszły oddziały nieprzyjaciela, które zostały odrzucone przez błyskawicznie zorganizowany oddział konny 5. Pułku dowodzony przez rtm. Antoniego Dębskiego i por. Tadeusz Gawrzyckiego. Była to ostatnia walka pułku w wojnie obronnej we wrześniu 1939 roku, a zarazem ostatnia potyczka oddziałów Armii „Południe” w kampanii wrześniowej.",
    finalClash2:
      "Kiedy pułkownik Kosiarski informował żołnierzy o kapitulacji armii, ze łzami w oczach zaapelował do nich, aby próbowali przedostać się na własną rękę w kierunku zachodnim, gdyż po wkroczeniu Sowietów marsz na wschód według Kosiarskiego był bezzasadny. O tym jak cenne i prorocze okazały się słowa dowódcy świadczy fakt, iż na tzw. liście katyńskiej znalazło się niewielu strzelców 5. Pułku.",
    finalClash3:
      "Ci żołnierze, którzy zdołali uniknąć niewoli, powrócili w większości za radą Kazimierza Kosiarskiego na zachód, w swoje rodzinne strony, gdzie wielu z nich już wkrótce przystąpiło do działalności w strukturach tworzącego się Polskiego Państwa Podziemnego. Dowództwo zaś dostało się do niemieckiej niewoli, skąd powrócili dopiero po wyzwoleniu.",
    finalClash4:
      "Zrozumienie obowiązku, odwaga, wytrzymałość, zdawałoby się, że ponadludzka, wspaniałe koleżeństwo - bez oglądania się na stopnie i starszeństwo, jak też i wierność oddziałowi, dawały stałą zdolność bojową Krakowskiej Brygady Kawalerii na długiej drodze: od zachodniej granica Śląska, po las Pańków pod Tomaszowem Lubelskim.",
    finalClash5:
      "Sukcesy oddziałów i pododdziałów KBK, nie tylko obronne, ale i wielokrotnie zaczepne - niestety, z powodu ogólnej sytuacji wojennej niewykorzystane - to dumna karta wkładu żołnierzy 5. Pułku strzelców konnych w historię Września 1939 roku, karta pisana w rozpaczliwej obronie przez cały Naród Polski.",
    author: "Autor: Maciej Małozięć",
  },
  burza: {
    title: "Akcja „Burza”",
    districtTitle: "Obwód AK Dębica w Operacji „Burza” - Struktura i Działania",
    district1:
      "Obwód AK Dębica, wchodzący w skład 24. Dywizji Piechoty, odtwarzał w okresie „Burzy” - 5. Pułk Strzelców Konnych Armii Krajowej. Dowództwo nad całością objął zastępca inspektora rejonowego w Rzeszowie, kpt. Adam Lazarowicz „Klamra”, natomiast komendant Obwodu Dębica, kpt. Ludwik Marszałek „Zbroja”, został na czas „Burzy” - zastępcą „Klamry”. Teren Obwodu podzielono na trzy rejony walki zwane także zgrupowaniami [1].",
    district2:
      "Rozkaz o rozpoczęciu „Burzy” przywiózł z Rzeszowa do Gumnisk k. Dębicy Ludwik Marszałek „Zbroja” i dostarczył go Adamowi Lazarowiczowi „Klamrze” o świcie 28 lipca 1944 roku. Dowódca pułku niezwłocznie zaalarmował całość Obwodu i zarządził koncentracje oddziałów w ramach zgrupowań w trzech rejonach. Miejsce postoju dowództwa pułku oraz dowodzenia całością sił znajdowało się w leśniczówce Berdech (na wzgórzu otaczającym wieś Braciejowa, w parafii Gumniska), gdzie zarządzono także koncentrację oddziałów II Zgrupowania [2].",
    district3:
      "W skład II Rejonu wchodziło pięć placówek Obwodu „Deser”: Brzeziny „Bomba”, Dębica „Działo”, Korzeniew „Kartacz”, Łączki Kucharskie „Ławka”, Ropczyce I „Rakieta”. Terytorialnie zasięg działania Zgrupowania był największy i rozciągał się od Ropczyc po Podgrodzie. Przez teren ten wiodła linia kolejowa Rzeszów - Kraków (od Ropczyc po Grabiny) oraz drogi Rzeszów - Kraków, Dębica - Wielopole.",
    district4:
      "Po ogłoszonym alarmie, o świcie 28 lipca, oddziały II Zgrupowania przed  godziną 10 skoncentrowały się w leśnictwie Berdech, gdzie po zameldowaniu żołnierze otrzymywali uzbrojenie. W pierwszym dniu koncentracji na Berdech dotarły kompanie z trzech placówek: „Bomba” pod dowództwem Stanisława Lachmana „Wielkiego”, „Działo” pod dowództwem Leona Kloca „Jasnego” i kompania z placówki „Ławka” dowodzona przez Franciszka Szarę „Pęka”. Ponadto na Berdechu znajdował się oddział dyspozycyjny dowodzony przez Władysława Strumskiego „Brutusa” i pluton „Gumniska” pod dowództwem Zbigniewa Lazarowicza „Bratka”.",
    firstDaysTitle:
      "Działania oddziałów II Zgrupowania w pierwszych dniach „Burzy”",
    firstDays1:
      "Początkowy okres „wzmożonej działalności dywersyjnej” we wszystkich zgrupowaniach 5. PSK AK, cechowała duża aktywność bojowo-dywersyjna poszczególnych plutonów i kompanii, charakteryzująca się przeprowadzeniem licznych akcji zaczepnych na drogach, rozbijaniem mniejszych patroli nieprzyjacielskich oraz rozbrajaniem posterunków policji i dozbrajaniem plutonów w zdobyczną broń.",
    firstDays2:
      "Tymczasem w pierwszych dniach sierpnia „Klamra” wraz ze swym sztabem zmienił dotychczasowe miejsce postoju przenosząc się z Berdechu w rejon Południka (do gajówki Władysława Klabachy). Decyzja ta była podyktowana faktem, iż Berdech znajdował się w bliskim sąsiedzkie drogi Niedźwiada - Mała, która stwarzała niebezpieczeństwo dekonspiracji.",
    firstDays3:
      "Wśród wielu akcji wykonanych przez oddziały II Rejonu należy wymienić kilka o większym znaczeniu. W nocy z 30 na 31 lipca dywersja Obwodu (pluton dywersyjny Władysława Strumskiego „Brutusa” [3] oraz pluton dywersyjny „Cebuli”) pod dowództwem Jerzego Wosia „Farysa” wysadziły tory kolejowe w miejscowości Głowaczowa, efektem czego było przerwanie łączności kolejowej na linii Dębica - Tarnów, na okres 10 godzin [4].",
    firstDays4:
      "Pluton Wilhelma Jakiego „Koraba” z kompani „Pęka” w dniu 30 sierpnia zorganizował zasadzkę na 3 samochody niemieckie na drodze Dębica - Wielopole w rejonie gajówki Sewerówka w rejonie Kamieńca. Zupełnie zaskoczony oddział niemiecki, pomimo prób obrony, był bezradny wobec atakujących. W wyniku akcji zginęło 32 Niemców, zdobyto broń, samochody oraz duże zapasy żywności [5].",
    heroicDefenceTitle:
      "Heroiczna Obrona Ludności Cywilnej w Gumniskach - Akcja 12 sierpnia 1944 r.",
    heroicDefence1:
      "Drużyna dyspozycyjna Władysława Strumskiego „Brutusa” skutecznie przeprowadziła (w pierwszych dniach sierpnia), dwie akcje na kolumny samochodów nieprzyjaciela w miejscowości Podgrodzie. W akcjach tych brał udział kpt. Józef Lutak „Dyzma”, dowódca dywersji w Inspektoracie AK Rzeszów. Istotnym elementem działań prowadzonych przez Armię Krajową w ramach „Burzy” była ochrona ludności przed represjami i pacyfikacjami. Na terenie II Rejonu nieprzyjaciel planował przeprowadzenie kilku tego rodzaju akcji, jednak każdorazowa próba pacyfikacji kończyła się fiaskiem. Doskonale zorganizowane patrole II Zgrupowania uniemożliwiły okupantowi przeprowadzenie pacyfikacji w miejscowościach: Mała, Niedźwiada i Gumniska.",
    heroicDefence2:
      "Najbardziej spektakularną akcję odbicia ludności w dniu 12 sierpnia, przeprowadziła bojówka dyspozycyjna Władysława Strumskiego „Brutusa” dowodzona przez Józefa Lutaka „Dyzmę” oraz wspomagana przez kilku żołnierzy z drużyny Jana Murgrabiego „Pieca” z kompanii Dębica „Działo”. Planowana przez Niemców pacyfikacja wsi była pokłosiem zlikwidowania sześciu hitlerowców grasujących po Gumniskach i Braciejowej dwa dni wcześniej.",
    heroicDefence3:
      "Rankiem 12 sierpnia do Gumnisk ściągnął batalion niemiecki. Zaczęło się spędzanie mieszkańców wsi (starców i dzieci) na drogę prowadzącą w kierunku Dębicy.",
    heroicDefence4:
      "Informacja o poczynaniach nieprzyjaciela dotarła do sztabu II Zgrupowania. Dowódca 5. PSK AK, Adam Lazarowicz „Klamra” posłał Józefa Lutaka „Dyzmę”, który miał ocenić zagrożenie, jednakże dowódca pułku wyraźnie apelował o nie podejmowanie pochopnych działań. Po przybyciu na miejsce „Dyzma” mając do dyspozycji drużynę dyspozycyjną i drużynę z plutonu „Gumniska” postanowił uderzyć na nieprzyjaciela, który prowadził już około trzystuosobową grupę bezbronnych mieszkańców w kierunku Dębicy.",
    heroicDefence5:
      "Całość (łącznie 23 + 1) „Dyzma” podzielił  na trzy grupy: grupa główna 17+1 zajęła stanowiska na wzgórzu za rzeką Ostrą, w odległości około 40 metrów od drogi; grupa Władysława Strumskiego „Brutusa” w trzyosobowym składzie rozlokowała się na górze po prawej stronie; grupa Kazimierza Strumskiego „Tyrana” - trzy osoby, rozlokowała się na lewym skrzydle. W ten sposób „Dyzma” chciał osiągnąć przewagę optyczną i wzbudzić wśród Niemców przekonanie o znacznej liczebności atakujących. Zamysł ten powiódł się i kiedy na rozkaz „Dyzmy” dywersanci otworzyli ogień do prowadzących ludność Niemców, ci w panice zaczęli kryć się w rowach. W tym czasie ludność rzuciła się do ucieczki. Kiedy jednak Niemcy spostrzegli liczebność atakujących, przystąpili do kontruderzenia. „Dyzma” dał wówczas rozkaz wycofania. Gdy oddział śmiałków wycofywał się pod górę, w kierunku lasu (miejsca zgrupowania), z lizjery lasu odezwały się karabiny oddziałów II Zgrupowania, które na wniosek „Klamry” wyruszyły wesprzeć atakujących [6].",
    commandTransferTitle:
      "Akcja w Gumniskach i Przeniesienie Dowództwa na Polanę Kałużówka",
    commandTransfer1:
      "Brawurowa akcja zakończyła się sukcesem. Na placu boju poległo około 20 Niemców, a kilkunastu zostało rannych. Podczas wycofywania poległ jeden żołnierz z oddziału dyspozycyjnego. Był nim Stanisław Mroczka „Miecz”. Niemcy zdołali zabrać około 20 cywilów (głównie starców oraz miejscowego proboszcza), którzy zostali w większości wypuszczeni w Dębicy, natomiast reszta została zagarnięta do prac przyfrontowych, skąd po kilku dniach powróciła do domów [7].",
    commandTransfer2:
      "Tymczasem „Klamra” jeszcze przed pacyfikacją Gumnisk (na przełomie pierwszej i drugiej dekady sierpnia), zarządził po raz drugi przeniesienie dowództwa pułku i sztabu II Zgrupowania.",
    commandTransfer3:
      "Nowe miejsce postoju znajdowało się w rejonie leśnej polany Kałużówka, położonej pośrodku rozległego kompleksu leśnego Braciejowa - Gumniska - Gołęczyna. Tutaj „Klamra” postanowił ściągnąć oddziały pozostające w terenie, tzn. kompanie i plutony wchodzące w skład II Zgrupowania, które walczyły dotąd w rejonach swoich placówek. Kontrowersje wśród dowództwa wzbudził projekt Romana Kani „Rygla” i Franciszka Ciszka „Cisa”, aby uczynić z Kałużówki partyzancki obóz [8]. „Klamra” przewidywał jednak, że front szybko przejdzie przez powiat dębicki, a ewentualny opór niemiecki zostanie postawiony dopiero na linii rzeki Wisłoki, a więc kilka kilometrów na zachód od samej Kałużówki [9].",
    battlesTitle: "Walki na Kałużówce",
    battles1:
      "Na leśnej polanie nastąpiła reorganizacja oddziałów II Rejonu, które następnie wykonały umocnione szałasy i okopy. Na Kałużówkę przybył także pluton zwiadowczy Armii Czerwonej, z której dowództwem nawiązano współpracę. Bieg wypadków i założenia szybkiego przejścia frontu nie sprawdziły się. Już 21 sierpnia front zaczął w błyskawicznym tempie przesuwać się spod Ropczyc w kierunku Dębicy. Naprzeciw wojskom radzieckim wyruszył pluton Józefa Naroga „Strzały” (wchodzący uprzednio w skład I Zgrupowania). Pluton ten po złożeniu deklaracji o chęci współpracy AK z oddziałami Armii Czerwonej został przez Sowietów rozbrojony. „Strzała” zdołał jedynie wysłać gońca, który poinformował „Klamrę” o zdarzeniu. Sam musiał rozwiązać oddział i pod eskortą Rosjan został przeprowadzony do lasu w okolicy miejscowości Stasiówka, gdzie wszystkich wypuszczono [10].",
    battles2:
      "Następnego dnia pluton Karola Kubika z kompanii „Pęka” przeprowadził atak na kolumnę czterech samochodów niemieckich w rejonie Południka. Jeden samochód został spalony a jego trzyosobowa załoga zlikwidowana. Pozostałe wozy (w których znajdowali się prawdopodobnie wyżsi wojskowi niemieccy), zdołały uciec. W „uchwyconym” samochodzie oddział „Wichra” zdołał odnaleźć m.in. teczkę z cennymi dokumentami wojskowymi, w której (poza innymi materiałami) znalazły się tajne rozkazy dowództwa niemieckiego. Z samochodu zabrano także dowody osobiste zabitych oraz ich broń [11].",
    battles3:
      "Zbigniew Lazarowicz, dowódca plutonu „Gumniska” a zarazem syn dowódcy pułku, ze szczegółami opisał moment ukształtowania się frontu w rejonie Braciejowej i Gumnisk: „Sowieci wkroczyli do Gumnisk i Braciejowej 22 sierpnia i zajęli stanowiska po wschodniej stronie kotliny. Niemcy początkowo nie zaciągnęli linii, mieli widocznie wycofać się dalej na zachód, ale gdy Sowieci stanęli, nie posuwając się dalej, rozciągnęli i oni linię obronną na lizjerze lasu, w którym myśmy się kryli. W ten sposób znaleźliśmy się w bezpośrednim zapleczu frontu niemieckiego, pomiędzy pierwszą linią, a stanowiskami artylerii. W tej sytuacji musieliśmy zamknąć ściśle naszą bazę i wzmocnić czujność i ubezpieczenie. Przygotowaliśmy się do obrony w okrążeniu. Stanowiska ogniowe umocniliśmy dołami strzeleckimi. Wysunięto placówki na przedpolu w kierunku frontu. Oddziały zajmowały następujące stanowiska: od południa pluton »Cebuli« [Jan Dec] na jego prawym skrzydle kompania »Pęka« [Franciszek Szara], a dalej drużyna sowiecka. Od zachodu pluton »Bratka«, czyli mój, w sile dwóch drużyn, bo trzecia drużyna pod dowództwem kpr. »Sokoła« [Michał Jędrzejczyk] została skierowana na wzmocnienie wschodniego odcinka od strony Gumnisk. Od północy kompania »Jasnego« [Leon Kloc], a od wschodu oddział dyspozycyjny »Klamry«, saperzy, sekcja Piata, pluton łączności oraz wspomniana drużyna »Sokoła«. Na tym też odcinku wysunięta została w kierunku frontu silna placówka. Drogi dojazdowe zabezpieczono dodatkowymi zawałami” [12].",
    partisanTitle:
      "Obóz Partyzancki w Okrążeniu i Dylematy Strategiczne Dowództwa II Rejonu",
    partisan1:
      "Linia frontu ukształtowała się na linii Wiewiórka - Straszęcin - Grabiny - Latoszyn, a następnie wzdłuż doliny rzeki Ostrej, przez Gumniska i Braciejową. Na wzgórzach po wschodniej stronie rzeki Ostrej znalazły się oddziały sowieckie, natomiast po przeciwległej stronie, na wzgórzach od zachodu, formacje niemieckie. Bezpośrednio za pasem wzniesień między linią Latoszyn - Gumniska - Braciejowa, w Dolinie Dolnej Wisłoki, w rejonie Jaworza Dolnego znalazły się oddziały niemieckiej artylerii. W tej sytuacji obóz partyzancki II Rejonu znalazł się w okrążeniu, mając po stronie zachodniej niemiecką artylerię, zaś po stronie wschodniej - linię frontu.",
    partisan2:
      "Tymczasem dowództwo pułku i II Zgrupowania, przystąpiło do opracowania koncepcji wycofania się z terenu objętego działaniami wojennymi. W ustnej rozmowie z Ludwikiem Marszałkiem „Zbroją” (przebywającym w III Rejonie) - „Klamra” wydał rozkaz rozwiązania III Zgrupowania, dowodzonego przez Edmunda Mateckiego „Lisa”. Rozmowa telefoniczna obu dowódców została jednak przerwana. Do dowództwa napłynęły nowe meldunki o zajęciu drogi Południk - Gołęczyna (na skraju miejscowości Gołęczyna), gdzie znajdowało się dowództwo III Zgrupowania. W tej sytuacji pojawiły się dwie koncepcje rozwiązania II Rejonu: pierwsza mówiła o próbie przebicia się na stronę sowiecką, druga zaś dotyczyła przejścia na zachód w rejon lasów Gołęczyny lub ewentualnie Jaworza, gdzie miało nastąpić rozwiązanie oddziałów. Mówiło się także o próbie przejścia w rejon Jodłowej (za Wisłoką), jeśli zaszłaby taka konieczność.",
    partisan3:
      "Wobec wiadomości które dostarczył goniec posłany przez Józefa Naroga „Strzałę” oraz z uwagi na inne okoliczności mówiące o zdradzieckim postępowaniu Rosjan, zwyciężyła koncepcja przebijania się na zachód [13].",
    evacuationTitle:
      "Bitwa na Polanie Kałużówka - Heroiczny Opór i Ewakuacja II Zgrupowania",
    evacuation1:
      "Jednak rankiem 23 sierpnia Niemcy skierowali silny ogień dwóch baterii artylerii na stanowiska II Zgrupowania w rejonie Kałużówki. Następnie od strony Południka wyszło rozpoznanie patroli bojowych skutecznie odpartych przez kompanię „Pęka”. Przez cały dzień i noc z 23 na 24 sierpnia Niemcy kładli silny ogień artylerii na niewielki stosunkowo teren na którym znajdowało się II Zgrupowanie [14]. Pod wpływem tego ognia pojawiły się pierwsze straty w szeregach II Zgrupowania 5. PSK AK. W tej sytuacji „Klamra”, celem uniknięcia dalszych strat, podjął ryzykowną decyzję próby przebicia się na stronę radziecką. W tym celu nawiązał przez radiostację kontakt z dowództwem radzieckim, aby Sowieci położyli ogień na wskazany skraj lasu, celem upozorowania natarcia na stanowiska niemieckie, co pomogłoby oddziałom II Rejonu opuścić las i wydostać się z okrążenia. Rosjanie wyrazili zgodę, jednakże w oznaczonym czasie położyli ogień, który został skierowany nie na wyznaczony przez „Klamrę” odcinek, lecz wprost na stanowiska II Zgrupowania. Wprawdzie Sowieci przepraszali później za tę pomyłkę, jednakże „Klamra” nie zdecydował się na powtórzenie manewru [15].",
    evacuation2:
      "Około godziny 5 rano, w czwartek 24 sierpnia od wschodu tzn. od strony drogi Braciejowa - Południk oraz od południowego-wschodu, tzn. od strony miejscowości Południk wyszło główne natarcie batalionu piechoty niemieckiej. Atak wspierał silny ogień artylerii i moździerzy, skierowany na polskie stanowiska. Jako pierwszy wycofał się oddział „rozwiedki”, której brakło amunicji. Pod silnym naporem nieprzyjaciela na skrzydło kompanii Franciszka Szary „Pęka”, stanowiącej pierwszą linię obrony od strony Południka, dowódca kompanii wydał rozkaz cofnięcia na zapasowe stanowiska. Skuteczny opór w tym rejonie stawiła drużyna saperów Zdzisława Chodackiego „Migdała”, drużyna dyspozycyjna „Brutusa” oraz pluton Artura Cwena „Rena”. Jednakże i te oddziały musiały się wycofać w głąb polany na wzgórze oznakowane na mapie: 426 m. n.p.m. [16].",
    evacuation3:
      "Teren w rejonie Kałużówki jest mocno górzysty, a w 1944 roku porośnięty był gęstym lasem (głównie bukowym), poszczególne wzniesienia przecinały strome jary, w których płynęły potoki biorące swe źródła w rejonie okalających wzgórz. Warunki terenowe przemawiały na korzyść atakujących, którzy po wycofaniu się oddziałów II Zgrupowania w rejon wzgórza 426, mogli wejść na samą polanę.",
    evacuation4:
      "W godzinach popołudniowych, kiedy oddziały niemieckie zaczęły się wdzierać na otwartą przestrzeń polany, grupa przeciwuderzeniowa pod dowództwem samego dowódcy 5. PSK AK kpt. Lazarowicza „Klamry” zepchnęła nieprzyjaciela z Kałużówki. W czasie ataku ranny został dowódca niemiecki w randze majora, który zmarł następnego dnia. Po tym odparciu, około godziny 19.30, Niemcy wycofali się z rejonu Kałużówki w kierunku północno-wschodnim[17]. W walce na Kałużówce poległo jedenastu żołnierzy II Zgrupowania, natomiast sześciu zostało ciężko rannych. Niemcy stracili swojego dowódcę, około dwudziestu żołnierzy (w tym oficerów) i mieli około trzydziestu rannych [18].",
    evacuation5:
      "„Jak zacięte i uporczywe były walki na polanie Kałużówka świadczy fakt, że na posunięcie się w głąb o około 1,5 km Niemcy potrzebowali przeszło 14 godzin (od godziny 5 rano do godziny 19.30 wieczorem). Mając kolosalną przewagę broni i ognia zmusili partyzantów do stałego cofania się, ale kontrnatarcia partyzantów już nie byli w stanie powstrzymać i zaprzestali dalszej walki” [19].",
    evacuation6:
      "Pod wieczór dowódca całości zarządził zbiórkę i ewakuację Zgrupowania. „Klamra” planował przeprowadzenie przebicia przez linię frontu w rejonie Południka. Kłopotliwą okazała się kwestia transportu rannych, których umieszczono na prowizorycznych noszach. Przed nocą Zgrupowanie wycofało się z polany w kierunku północno-wschodnim w promieniu około kilometra od Kałużówki.",
    epilogTitle: "Rozwiązanie oddziałów i tragiczny epilog",
    epilog1:
      "W dniu 25 sierpnia Zgrupowanie przeszło w rejon spalonej przez Niemców leśniczówki Władysława Klabachy [20]. Przejście przez front okazało się niemożliwe. Teren był już mocno obsadzony przez oddziały niemieckie, a na przedpolu Niemcy zastawili sidła w postaci pola minowego. Sytuacja oddziałów II Rejonu stawała się coraz bardziej dramatyczna. Żołnierze od kilku dni nie mieli w ustach żadnego pożywienia. Kontrowersyjna stała się kwestia związana z transportem rannych.",
    epilog2:
      "Po trzech dniach pobytu w jarze na Południku  dowództwo podjęło decyzję wymarszu w kierunku zachodnim, a więc w rejon gdzie uprzednio znajdowały się oddziały III Zgrupowania (rozwiązanego 23 sierpnia). Późnym wieczorem 28 sierpnia, gdy zapadł już całkowity zmrok Zgrupowanie wyruszyło w rejon lasów Gołęczyny [21].",
    epilog3:
      "Po dotarciu w rejon Gołęczyny, 29 sierpnia nastąpiło częściowe rozwiązanie oddziałów II Zgrupowania. Jako pierwsza odeszła kompania „Pęka” (bez plutonu dowódcy kompanii, który pozostał z pozostałymi oddziałami), część kompanii „Jasnego” oraz pluton Ludwika Wolaka „Orlika”.",
    epilog4:
      "Następnego dnia pozostałe oddziały przeszły w rejon Jaworza, gdzie zwolniono kolejną grupę żołnierzy. Rozwiązywane oddziały składały broń, którą owinięto w koce i zakopano w lesie z dokładnym oznaczeniem miejsca zakopania [22].",
    epilog5:
      "We wrześniu grupa, która pozostała z „Klamrą” liczyła około sześćdziesiąt osób. Oddział ten krążył po lasach celem uniknięcia zorganizowanej na niego obławy. Z tym oddziałem „Klamra” powrócił na Kałużówkę, a następnie z powrotem w rejon lasów Gołęczyna - Jaworze.",
    epilog6:
      "W dniu 12 września oddział uniknął zorganizowanej obławy niemieckiej przygotowanej przez Rzeszowską Dywizję Opóźniającą - Reichschofspeerdywizion i tego samego dnia w rejonie Jaworza „Klamra” rozwiązał oddział, nakazując żołnierzom aby na własną rękę podjęli próbę rozejścia się do domów [23].",
    epilog7:
      "Wśród żołnierzy, którzy pozostali w lesie nie wszyscy mieli szczęście przeżyć. Wielu zginęło z rąk niemieckich oddziałów „czyszczących” teren z pozostałych w lesie partyzantów, byli także tacy, którzy dostali się do niemieckiej niewoli i zostali osadzeni w obozach w Gross-Rosen i Ravensbrűck. Grupa około czterdziestu partyzantów wyszła z lasów dopiero w trzeciej dekadzie października. W grupie tej był m.in. kapelan Obwodu ZWZ - AK Dębica i II Zgrupowania, ks. Stanisław Bartosz „Mieczyk”. Bez dachu nad głową, oddział ten w okresie jesieni przetrwał posilając się w desperacji nawet zabłąkanym w lesie psem [24].",
    epilog8:
      "W okresie września i października zginęło ponad czterdziestu żołnierzy II Zgrupowania, zaś piętnastu dostało się do niemieckiej niewoli [25].",
    footnotesTitle: "Przypisy",
    footnotes: [
      "[1] Przygotowany był także czwarty, zapasowy rejon walki pod dowództwem ppor. Stanisława Lachmana „Zan”. Rejon ten stanowiła jedna kompania placówki Brzeziny wchodząca de facto w skład Zgrupowania II, dowodzonego przez Romana Kanię ps. „Rygiel”. IV Rejon pozostał przez cały okres „Burzy” w odwodzie pułku i wykonywał ograniczone działania. Por.: J. Niedziela, F. Sagan, Inspektorat Rejonowy ZWZ- AK Rzeszów, Rzeszów 2005, s. 200-201; Sam „Klamra” omawiając „Burzę” (Rys historyczny oddziałów AK w rejonie Dębicy- akcja „Burza”; spisany przez „Szyszkę”, Maszynopis w zbiorach autora), wymienia tylko trzy rejony (zgrupowania) walki.",
      "[2] Leśnictwo Berdech położone było na skraju kompleksu leśnego, dokąd prowadziła kiepska leśna droga dochodząca do traktu leśnego łączącego wsie Mała - Niedźwiada (na drodze prowadzącej z Dębicy do Wielopola Skrzyńskiego).",
      "[3] „Burzowe” dzieje drużyny dyspozycyjnej Komendy Obwodu, zostały opisane barwnym językiem w zbeletryzowanej powieści, przez dowódcę tej drużyny zwanej także „bojówką” - „Brutusa”. Zob.: W. Strumski, Dziesiątka w akcji, wyd. II, Dębica 2004.",
      "[4] Meldunek sytuacyjny z 31 lipca 1944 r. dowódcy II Rejonu Walki Romana Kani „Rygla” 31 lipca 1944 r. [w:] G. Ostasz, A. Zagórski, Akcja „Burza” w Inspektoracie AK Rzeszów, Kraków 2003, s. 380-381.",
      "[5] A. Stańko, Gdzie Karpat progi, wyd. III, Tuchów 1997, s. 270.",
      "[6] W. Strumski, dz. cyt., s. 61-70.",
      "[7] Z. Lazarowicz, „Klamra” - mój Ojciec, „Zeszyty Historyczne WiN-u” nr 4, 1993, s. 95.",
      "[8] Władysław Strumski (Dziesiątka…, dz. cyt., s. 45) pisze: „Plutony strzeleckie kopią stanowiska bojowe, tak jakbyśmy mieli rozpocząć wojnę pozycyjną. Ponieważ wszystkie instrukcje traktujące o partyzantce kategorycznie zabraniają zakładanie warownych obozów, więc te poczynania dziwią mnie bardzo i w końcu idę do »Dyzmy« i pytam, kto wpadł na ten głupi pomysł. Odpowiedź »Dyzmy« była tak nieparlamentarna, że nie można jej powtórzyć drukiem. Dopiero »Szyszka« wyjaśnił mi, że rozkaz okopywania się wyszedł od kapitana »Rygla«, którego poparł porucznik »Cis« - de facto stary partyzant. Próżno »Dyzma«, urodzony i przygotowany wszechstronnie oficer partyzancki, przeciwstawiał się temu pomysłowi tłumacząc, że partyzantom nie wolno przyjmować walki pozycyjnej, jeżeli nie chcą się narażać na całkowite zniszczenia. Oddział partyzancki musi być ruchomy, musi zmieniać miejsce pobytu, być nieuchwytnym dla wroga. Oficerowie zawodowi wzięli górę nad nim, gdy ich sugestiom uległ »Klamra«”.",
      "[9] Por.: A. Stańko, Gdzie Karpat…, dz. cyt., s. 279; Z. Lazarowicz, „Klamra”…, dz. cyt., „ZHW” nr 4, s. 89; Tenże, Akcja „Burza” w powiecie dębickim 1944-1994, msp., s. 12.",
      "[10] A. Stańko, Gdzie Karpat…, dz. cyt., s. 289-290.",
      "[11] Tamże, s. 290-291.",
      "[12] Z. Lazarowicz, „Klamra”…, dz. cyt., „ZHW” nr 4, s. 99.",
      "[13] A. Stańko, Gdzie Karpat…, dz. cyt., s. 295.",
      "[14] Rys historyczny oddziałów AK…, dz. cyt., s. 14. Omawiając tę sytuację, „Klamra” (tamże, s. 14-15) pisze: „Ogień ten spowodował straty w oddziale w zabitych i rannych. Żołnierz konspiracyjny pod pierwszym ogniem artylerii zaczął się denerwować, a nawet kilkunastu zbiegło ze stanowisk. Co gorsze niektórzy dowódcy zamiast pozostać wówczas przy żołnierzu, zwłaszcza, że spodziewane było natarcie piechoty nieprzyjaciela, szukali miejsca w schronach i nie umieli ukryć swego zastraszenia. Zastępca dowódcy kompanii rej. por. służby stałej „Cis” oddalił się ze swojego odcinka na tyły oddziału zaraz po rozpoczęciu ostrzeliwania przez artylerię, w następnym dniu zbiegł”.",
      "[15] A. Stańko, Gdzie Karpat…, dz. cyt., s. 296.",
      "[16] Walki na Kałużówce wg relacji Cwena [w:] Zbiory autora - Kolekcja archiwalna Antoniego Stańki [dalej KS] 37-II, s. 5-7.",
      "[17] Tamże, s. 7-8; Rys historyczny oddziałów AK…, dz. cyt., s. 15.",
      "[18] Antoni Stańko (Gdzie Karpat…, dz. cyt., s. 302), posiłkując się tekstem sporządzonym przez „Szyszkę” w imieniu „Klamry” w 1944 roku, podaje: „straty nieprzyjaciela: zabitych 4 oficerów, 22 żołnierzy i 4 agentów Gestapo, rannych około 30 żołnierzy, wziętych do niewoli - 12 żołnierzy. Straty nieprzyjaciela spowodowane przez artylerię radziecką, której ogniem kierowali partyzanci: zabitych - 20, rannych około 30, zniszczono 5 dział, a uszkodzono 4 oraz uszkodzono bądź zniszczono kilkanaście samochodów ciężarowych”. Do tego opisu należy dodać, że nie jest to bilans samej bitwy na Kałużówce, albowiem podając te dane „Klamra” miał na myśli cały okres tzw. 2 fazy walk, a więc od zajęcia Dębicy i rozwiązania I i III Zgrupowania w dniu 23 sierpnia, do rozwiązania II Zgrupowania w ostatnim dniu sierpnia 1944 roku.",
      "[19] Tamże, s. 301.",
      "[20] W czasie porannego marszu (podczas pokonywania drogi Braciejowa- Południk) poległ od serii z karabinu maszynowego Andrzej Jabłonowski „Śmigło” oraz ciężko ranny na Kałużówce Tadeusz Ciszek „Jahura”.",
      "[21] Z. Lazarowicz, „Klamra”…, dz. cyt., „ZHW” nr 4, s. 109-110",
      "[22] Wg relacji Tadeusza Kubicy (Relacje naocznych świadków AK [w:] KS sygn. 121-IV, t. I, s. 133), Niemcy torturując małoletniego chłopca aresztowanego prawdopodobnie w rejonie lasów Gołęczyny na przełomie września i października 1944 roku, uzyskali informacje o zakopanej broni. Tadeusz Kubica wspomina: „Wiem że tego chłopca Niemcy wozili trzykrotnie do lasów Południka i prawdopodobnie odkopali całą naszą broń”. Zdanie Tadeusza Kubicy potwierdza Antoni Stańko (Gdzie Karpat…, dz. cyt., s. 331), który na podstawie relacji mieszkańców okolicznych miejscowości pisze, że „Niemcy wywieźli broń na chłopskiej furmance”.",
      "[23] A. Stańko, Gdzie Karpat…, dz. cyt., s. 308; Zbrodnie niemieckie w powiecie dębickim [w:] KS sygn. 131-IV.",
      "[24] Losy żołnierzy, którzy po rozwiązaniu oddziałów pozostali w lesie, szerzej opisuje A. Stańko (tamże, s. 309-340).",
      "[25] Tamże, s. 339-340",
    ],
  },
  debica: {
    title: "Obwód Dębica SZP-ZWZ-AK",
    fortressTitle: "Obwód SZP-ZWZ-AK Dębica - Twierdza Polskiego Podziemia",
    fortress1:
      "Na tle Polskiego Podziemia szczególną rolę odegrał Obwod SZP - ZWZ - AK Dębica krypt. „Dziekania”, „Deser”, odnosząc sukcesy m.in. na płaszczyźnie sabotażowo-dywersyjnej oraz wywiadowczej. Kiedy trwały jeszcze walki polskich armii z Niemcami m.in. pod Kockiem, w twierdzy Modlin oraz w Warszawie, 27 września 1939 roku powstała w stolicy tajna organizacja pn. Służba Zwycięstwu Polski (SZP), na czele której stanął gen. Michał Karaszewicz-Tokarzewski. Jej zadaniem było „prowadzenie dalszej walki o utrzymanie niepodległości i całości granic”.",
    fortress2:
      "Pod koniec września i z początkiem października w rodzinne strony zaczęli powracać żołnierze polskich formacji walczących z Niemcami, którym udało się uniknąć niemieckiej bądź sowieckiej niewoli. To oni mieli stanowić elitę tworzącego się polskiego podziemia niepodległościowego.",
    beginningsTitle:
      "Kształtowanie się Obwodu ZWZ Dębica - Bohaterstwo i Determinacja",
    beginnings1:
      "Powstający Obwód ZWZ Dębica, w kwietniu 1940 roku, został dotknięty falą aresztowań. W wyniku rozpracowania struktur rzeszowskich ZWZ aresztowano członków Komendy Obwodu Dębica: Jana Artura Towarnickiego „Tura”, Mariana Skwiruta „Szpaka” oraz Piotra Klamuta „Pietrzaka”. Wszystkich przewieziono do Rzeszowa, gdzie przeszli ciężkie śledztwo nie ujawniając przed okupantem żadnych kontaktów oraz zachowując bohaterską postawę. W więzieniu zastrzelony został Towarnicki.",
    beginnings2:
      "Wobec zaistniałej sytuacji Komenda Okręgu, nie znając bliżej realiów lokalnych, poleciła organizację obwodu kpt. Dąbrowskiemu z Krakowa, mianując go następcą Towarnickiego na stanowisku komendanta. Z uwagi na brak kontaktów w lokalnym środowisku, bliżej nieznany w Dębicy kpt. Dąbrowski musiał zrezygnować z pełnienia funkcji. Wówczas z rekomendacji Mieczysława Rakoczego „Soplicy” komendantem został Antoni Cwen „Maszynowski”.",
    placesTitle:
      "Od 1941 do 1943 roku w ramach obwodu funkcjonowało 8 placówek:",
    places: [
      {
        id: "1",
        name: "Placówka Dębica",
        description:
          "(„Działo”, „62”), którą dowodzili kolejno: Adam Lazarowicz, ppor. Antoni Szlachta „Kornicz” oraz ppor. Leon Kloc „Jasny” (od grudnia 1941 roku);",
      },
      {
        id: "2",
        name: "Placówka Korzeniów",
        description:
          "(„Kartacz”, „68”), została zorganizowana w połowie 1941 roku. Jej komendantem był pchor. Franciszek Podraza „Nałęcz”;",
      },
      {
        id: "3",
        name: "Placówka Brzeziny",
        description:
          "(„Bomba”, „69”, „74”), której organizatorem i pierwszym komendantem był por. Ludwik Marszałek „Wilk”. W maju 1941 roku „Wilka” zastąpił Stanisław Lachman „Wielki”, „Zan”;",
      },
      {
        id: "4",
        name: "Placówka Sędziszów",
        description:
          "(„Sława”, „72”), którą wpierw dowodził ppor. Mieczysław Szczurowski „Bączek”, a od 1941 roku por. Mieczysław Stachowski „Sęp”, „Maciej”;",
      },
      {
        id: "5",
        name: "Placówka Ropczyce",
        description:
          " („Rakieta”, „76”), zorganizowana wpierw przez ppor. Wojciecha Passowicza „Karpa”, a następnie od 1940 roku dowodzona przez por. Władysława Grzegorskiego „Grzmota”;",
      },
      {
        id: "6",
        name: "Placówka Łączki Kucharskie ",
        description:
          "(„Ławka”, „Ładunek”, „78”), została zorganizowana w 1941 roku. Jej komendantem był pchor. Piotr Passowicz „Klon”, „Olcha”, a od stycznia 1943 roku pchor. Franciszek Szara „Pęk”;",
      },
      {
        id: "7",
        name: "Placówka Pilzno",
        description:
          "(„Pocisk”, „Piwonia”, „64”), której organizatorem i komendantem do lipca 1940 roku był sierż. Walenty Kula „Gater”. Po nim prowadzeniem placówki zajął się ppor. Zygmunt Pawlus „Turek”, a w lipcu 1942 roku zastąpił go ppor. Edmund Matecki „Lis”;",
      },
      {
        id: "8",
        name: "Placówka Zassów",
        description:
          "(„Zapalnik”, Zawilec”, „66”), została zorganizowana przez harcmistrza Pawła Barana „Wytrwał”, który kierował nią do grudnia 1941 roku. Po nim funkcję komendanta objął pchor. Alfred Łubieński „Iwo”.",
      },
    ],
    places1:
      "14 lutego 1942 roku rozkazem gen. Władysława Sikorskiego zniesiono nazwę ZWZ. Odtąd wszyscy żołnierze w czynnej służbie wojskowej stanowili Armię Krajową (AK).",
    readinessTitle: "Siła i Gotowość do Walki",
    readiness1:
      "Obwód ZWZ-AK Dębica, funkcjonujący w granicach przedwojennego powiatu dębickiego, wyrósł do rangi najsilniejszego i najlepiej przygotowanego do akcji „Burza” spośród wszystkich obwodów w rzeszowskim Inspektoracie AK. W dowód uznania 1 stycznia 1944 roku otrzymał z rąk inspektora rejonowego Łukasza Cieplińskiego „Pługa” przechodni sztandar inspektoratu. Złożyło się na to wiele czynników. Najważniejsze z nich to: patriotyczna postawa mieszkańców regionu, właściwy dobór kadry na poszczególnych szczeblach organizacyjnych oraz zaangażowanie i zapał do pracy konspiracyjnej widoczny szczególnie wśród najmłodszych członków organizacji. W okresie bezpośrednio poprzedzającym „Burzę” obwód odebrał dwa zrzuty broni.",
    readiness2:
      "Pierwszy, w nocy z 31 maja na 1 czerwca 1944 roku na placówce „Raszka I” w rejonie Niedźwiady i Małej oraz drugi, w nocy z 30 na 31 lipca 1944 (już w czasie „Burzy”) na placówce „Papuga II” w rejonie Starej Jastrząbki. Jak podaje Antoni Stańko, ogółem w chwili przystąpienia do „Burzy” (licząc broń zrzutową z placówki „Papuga II”), obwód dysponował liczbą około 1500 sztuk broni, 4650 sztuk granatów oraz około 160 000 sztuk amunicji różnego kalibru. W 1943 roku przystąpiono do finalizacji akcji scaleniowej. W sierpniu 1943 r. do Armii Krajowej wstąpiły oddziały Narodowej Organizacji Wojskowej w liczbie blisko 150 osób. Jeden pluton włączony został do Obwodu AK Tarnów i brał udział w akcji „Burza” w I Batalionie 16. PP AK „Barbara” na ziemi tarnowskiej.",
    expansionTitle:
      "Rozbudowa struktur AK i przygotowania do akcji „Burza” w Obwodzie Dębica",
    expansion1:
      "W styczniu 1944 roku z AK scaliły się oddziały Batalionów Chłopskich. W ten sposób obwód wzmocnił się batalionem 500 żołnierzy BCh. Zgodnie z postanowieniami akcji scaleniowej Karol Chmiel „Grom” z Zagorzyc został zastępcą komendanta obwodu.",
    expansion2:
      "Ponadto, wiosną 1944 roku doszło do zmian personalnych w Inspektoracie Rzeszów, których następstwem były zmiany w Obwodzie Dębica. Pierwszym zastępcą inspektora Łukasza Cieplińskiego „Pługa” został dotychczasowy komendant obwodu Dębica Adam Lazarowicz „Klamra”. Na stanowisku komendanta w Dębicy zastąpił go Ludwik Marszałek „Zbroja”.",
    expansion3:
      "Lazarowicz obejmując funkcję w inspektoracie prosił, aby na czas powstania lub „Burzy” mógł powrócić do Gumnisk by dowodzić oddziałami obwodu „Deser”, co stało się faktem latem 1944 roku. W wyniku wspomnianej akcji scaleniowej obwodowi przybyło 6 nowych plutonów, 644 żołnierzy, w tym 12 oficerów rezerwy, 3 podchorążych, 52 podoficerów i 577 szeregowych.",
    expansion4:
      "Aby ułatwić dowodzenie na obszarze rozległego obwodu, komendant zdecydował się podzielić cały obszar początkowo na dwa, a następnie na trzy podobwody. W pierwszym rzucie utworzono Podobwód Sędziszów „70”, a w maju 1944 roku z terenu Podobwodu Dębica wyodrębniono Podobwód Pilzno „Płoza”. W rozkazie z 15 lutego 1944 roku „Pług” wnioskuje o utworzenie Podobwodu „Sława” w skład którego miałyby wejść placówki: Sędziszów, Ropczyce oraz „dwie placówki wielopolskie. Razem 22 plutony bojowe”. Podział na podobwody - rejony walki, znalazł praktyczne zastosowanie dopiero w okresie akcji „Burza”.",
    expansion5:
      "W skład I rejonu walki - I Zgrupowania dowodzonego przez por. Mieczysława Stachowskiego „Sępa” weszły placówki „Sława”, Strzała” i „Ropa”.",
    expansion6:
      "W skład II rejonu walki - II Zgrupowania dowodzonego przez kpt. Romana Kanię „Rygla” weszły placówki: „Działo”, „Kartacz”, „Ławka”, „Bomba” oraz „Rakieta”.",
    expansion7:
      "W skład III rejonu walki - III Zgrupowania dowodzonego przez ppor. Edmunda Mateckiego „Lisa” weszły placówki: „Pocisk” i „Zapalnik”.",
  },
} as const;
