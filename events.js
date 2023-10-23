const allEvents = [
    {
        "day": "01.01.2023",
        "events": [
            "Dzień ustawowo wolny od pracy",
            "Remanent początkowy"
        ]
    },
    {
        "day": "06.01.2023",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "10.01.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za grudzień 2022 r"
        ]
    },
    {
        "day": "16.01.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "złożenie deklaracji na podatek leśny i podatek rolny na dany rok podatkowy - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wpłata do PPK"

        ]
    },
    {
        "day": "20.01.2023",
        "events": [
            "wpłata za grudzień 2022 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za grudzień 2022 r. pobranych zaliczek PIT 4",
            "wpłata za grudzień 2022 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za grudzień 2022 r. na PFRON oraz złożenie deklaracji",
            "wpłata za grudzień 2022 r ryczałtu od przychodów ewidencjonowanych",
            "złożenie deklaracji PIT-6 do wymiaru zaliczek podatku dochodowego od dochodów z działów specjalnych produkcji rolnej ustalanych przy zastosowaniu norm szacunkowych za 2022 r.",
            "złożenie zawiadomienia o rezygnacji z opodatkowania w formie karty podatkowej (w razie wyboru skali podatkowej), a w przypadku przejścia z karty podatkowej na inne formy opodatkowania złożenie oświadczenia o wyborze podatku liniowego lub ryczałtu ewidencjonowanego"
        ]
    },
    {
        "day": "25.01.2023",
        "events": [
            "wpłata podatku VAT za grudzień 2022 r.VAT 7",
            "przesłanie pliku JPK_V7M za grudzień 2022 r.",
            "przesłanie pliku JPK_V7K za grudzień 2022 r. (część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za grudzień 2022 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za grudzień 2022 r.",
            "wpłata podatku akcyzowego za grudzień 2022 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za grudzień 2022 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za grudzień 2022 r."
        ]
    },
    {
        "day": "31.01.2023",
        "events": [
            "przekazanie urzędowi skarbowemu informacji o przychodach z innych źródeł oraz o dochodach i pobranych zaliczkach na podatek dochodowy w 2022 r PIT 11",
            "złożenie rocznej deklaracji o zaliczkach na podatek dochodowy za 2022 r. (PIT-4R)",
            "przekazanie urzędowi skarbowemu informacji o niektórych dochodach z kapitałów pieniężnych w 2022 r. (PIT-8C)",
            "złożenie rocznej deklaracji o zryczałtowanym podatku dochodowym za 2022 r. (PIT-8AR)",
            "wpłata podatku od nieruchomości za styczeń 2023 r. i złożenie deklaracji na podatek od nieruchomości na dany rok podatkowy - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "przekazanie do ZUS informacji o danych za 2022 r. do ustalenia składki na ubezpieczenie wypadkowe (ZUS IWA)",
        ]
    },
    {
        "day": "07.02.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za styczeń 2023 r."
        ]
    },
    {
        "day": "10.02.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za styczeń 2023 r."
        ]
    },
    {
        "day": "15.02.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za luty 2023 r. - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "złożenie deklaracji na podatek od środków transportowych na dany rok podatkowy i wpłata I raty podatku od środków transportowych- osoby fizyczne i osoby prawne oraz jednostki organizacyjne nieposiadające osobowości prawnej będące właścicielami środków transportowych",
            "wpłata do PPK"
        ]
    },
    {
        "day": "20.02.2023",
        "events": [
            "wpłata za styczeń 2023 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za styczeń 2023 r. pobranych zaliczek PIT 4",
            "wpłata za styczeń 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za  styczeń 2023 r. ryczałtu od przychodów ewidencjonowanych",
            "wpłata za styczeń 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "27.02.2023",
        "events": [
            "wpłata podatku VAT za styczeń 2023 r. VAT 7",
            "przesłanie pliku JPK_V7M za styczeń 2023 r.",
            "przesłanie pliku JPK_V7K za styczeń 2023 r.(część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za styczeń 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za styczeń 2023 r.",
            "wpłata podatku akcyzowego za styczeń 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za styczeń 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za styczeń 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za styczeń 2023 r."
        ]
    },
    {
        "day": "28.02.2023",
        "events": [
            "przekazanie podatnikowi informacji o przychodach z innych źródeł oraz o dochodach i pobranych zaliczkach na podatek dochodowy w 2022 r. (PIT-11)",
            "przekazanie urzędowi skarbowemu informacji o niektórych dochodach z kapitałów pieniężnych w 2022 r. (PIT-8C)",
            "przekazanie do ZUS informacji o wysokości przychodów uzyskanych z pracy zarobkowej przez emerytów i rencistów w 2022 r",
            "przekazanie ubezpieczonemu informacji za 2022 r. o danych zawartych w imiennych raportach miesięcznych sporządzonych do ZUS, w podziale na poszczególne miesiąc"
        ]
    },
    {
        "day": "07.03.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za luty 2023 r."
        ]
    },
    {
        "day": "10.03.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za luty 2023 r."
        ]
    },
    {
        "day": "15.03.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za marzec 2023 r. i I raty podatku rolnego - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wpłata I raty podatku od nieruchomości, podatku leśnego oraz podatku rolnego - osoby fizyczne",
            "wniesienie opłaty produktowej za opakowania za 2022 r.",
            "wpłata do PPK"
        ]
    },
    {
        "day": "20.03.2023",
        "events": [
            "wpłata za luty 2023 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za luty 2023 r. pobranych zaliczek PIT 4",
            "wpłata za luty 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za  luty 2023 r. ryczałtu od przychodów ewidencjonowanych",
            "wpłata za luty 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "27.03.2023",
        "events": [
            "wpłata podatku VAT za luty 2023 r. VAT 7",
            "przesłanie pliku JPK_V7M za luty 2023 r.",
            "przesłanie pliku JPK_V7K za luty 2023 r.(część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za luty 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za luty 2023 r.",
            "wpłata podatku akcyzowego za luty 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za luty 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za luty 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za luty 2023 r."
        ]
    },
    {
        "day": "31.03.2023",
        "events": [
            "zgłoszenie do ZUS danych za 2022 r. o pracy w szczególnych warunkach lub o szczególnym charakterze (ZUS ZSWA)",
            "sporządzenie rocznego sprawozdania finansowego za 2022 r. w jednostce, której rok obrotowy jest zgodny z rokiem kalendarzowym",
            "wniesienie opłat z tytułu korzystania ze środowiska za 2022 r.",
            "przekazanie urzędowi skarbowemu zeznania za 2022 r. o wysokości osiągniętego dochodu (poniesionej straty) przez podatników podatku dochodowego od osób prawnych (CIT-8)"
        ]
    },
    {
        "day": "07.04.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za marzec 2023 r."
        ]
    },
    {
        "day": "10.04.2023",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "11.04.2023 ",
        "events": [
            "złożenie zgłoszenia INTRASTAT za marzec 2023 r."
        ]
    },
    {
        "day": "17.04.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za kwiecień 2023 r. - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wniesienie opłaty recyklingowej za torby foliowe, pobranej w I kwartale 2023 r.",
            "wpłata do PPK"
        ]
    },
    {
        "day": "20.04.2023",
        "events": [
            "wpłata za marzec 2023 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za marzec 2023 r. pobranych zaliczek PIT 4",
            "wpłata za marzec 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za  marzec 2023 r. ryczałtu od przychodów ewidencjonowanych",
            "wpłata za marzec 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "25.04.2023",
        "events": [
            "wpłata podatku VAT za marzec 2023 r. VAT 7",
            "przesłanie pliku JPK_V7M za marzec 2023 r.",
            "przesłanie pliku JPK_V7K za marzec 2023 r.(część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za marzec 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za marzec 2023 r.",
            "wpłata podatku akcyzowego za marzec 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za marzec 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za marzec 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za marzec 2023 r."
        ]
    },
    {
        "day": "01.05.2023",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "02.05.2023",
        "events": [
            "złożenie przez osoby fizyczne rocznego zeznania o wysokości osiągniętego dochodu (poniesionej straty) za 2022 r. (PIT-36, PIT-36L, PIT-37, PIT-38, PIT-39) oraz uiszczenie wynikającej z zeznania kwoty do zapłaty",
            "złożenie oświadczenia PIT-OP o przekazaniu 1% podatku na rzecz OPP przez podatników, którzy od organu rentowego otrzymali roczne obliczenie podatku PIT-40A za 2022 r.",
            "przekazanie urzędowi skarbowemu przez osoby fizyczne deklaracji o wysokości daniny solidarnościowej (DSF-1) oraz zapłata daniny wynikającej z tej deklaracji",
            "złożenie zeznania o wysokości uzyskanego przychodu, wysokości dokonanych odliczeń i należnego ryczałtu od przychodów ewidencjonowanych za 2022 r. (PIT-28)"
        ]
    },
    {
        "day": "03.05.2023",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "08.05.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za kwiecień 2023 r."
        ]
    },
    {
        "day": "10.05.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za kwiecień 2023 r."
        ]
    },
    {
        "day": "15.05.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za maj 2023 r. i II raty podatku rolnego - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wpłata II raty podatku od nieruchomości, podatku leśnego oraz podatku rolnego - osoby fizyczne",
            "wpłata do PPK"
        ]
    },
    {
        "day": "22.05.2023",
        "events": [
            "wpłata za kwiecień 2023 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za kwiecień 2023 r. pobranych zaliczek PIT 4",
            "wpłata za kwiecień 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za  kwiecień 2023 r. ryczałtu od przychodów ewidencjonowanych",
            "wpłata za kwiecień 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "25.05.2023",
        "events": [
            "wpłata podatku VAT za kwiecień 2023 r. VAT 7",
            "przesłanie pliku JPK_V7M za kwiecień 2023 r.",
            "przesłanie pliku JPK_V7K za kwiecień 2023 r.(część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za kwiecień 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za kwiecień 2023 r. ",
            "wpłata podatku akcyzowego za kwiecień 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za kwiecień 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za kwiecień 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za kwiecień 2023 r."
        ]
    },
    {
        "day": "31.05.2023",
        "events": [
            "do końca maja danego roku pracodawca tworzący obligatoryjnie ZFŚS jest zobowiązany do wpłacenia co najmniej 75% równowartości odpisów podstawowych na wyodrębniony rachunek bankowy ZFŚS."
        ]
    },
    {
        "day": "07.06.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za maj 2023 r."
        ]
    },
    {
        "day": "08.06.2023",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "12.06.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za maj 2023 r."
        ]
    },
    {
        "day": "15.06.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za czerwiec 2023 r. - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wpłata do PPK"
        ]
    },
    {
        "day": "20.06.2023",
        "events": [
            "wpłata za maj 2023 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za maj 2023 r. pobranych zaliczek PIT 4",
            "wpłata za maj 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za  maj 2023 r. ryczałtu od przychodów ewidencjonowanych",
            "wpłata za maj 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "26.06.2023",
        "events": [
            "wpłata podatku VAT za maj 2023 r. VAT 7",
            "przesłanie pliku JPK_V7M za maj 2023 r.",
            "przesłanie pliku JPK_V7K za maj 2023 r.(część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za maj 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za maj 2023 r.",
            "wpłata podatku akcyzowego za maj 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za maj 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za maj 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za maj 2023 r."
        ]
    },
    {
        "day": "07.07.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za czerwiec 2023 r."
        ]
    },
    {
        "day": "10.07.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za czerwiec 2023 r."
        ]
    },
    {
        "day": "17.07.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za lipiec 2023 r. - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wniesienie opłaty recyklingowej za torby foliowe, pobranej w II kwartale 2023 r.",
            "wpłata do PPK"
        ]
    },
    {
        "day": "20.07.2023",
        "events": [
            "wpłata za czerwiec 2023 r. i II kwartał pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za czerwiec 2023 r. pobranych zaliczek PIT 4",
            "wpłata za czerwiec 2023 r.. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za czerwiec 2023 r. i II kwartał ryczałtu od przychodów ewidencjonowanych",
            "wpłata za czerwiec 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "25.07.2023",
        "events": [
            "wpłata podatku VAT za czerwiec 2023 r. i II kwartał VAT 7",
            "przesłanie pliku JPK_V7M za czerwiec 2023 r.",
            "przesłanie pliku JPK_V7K za czerwiec 2023 r.(część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za czerwiec 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za czerwiec 2023 r.",
            "wpłata podatku akcyzowego za czerwiec 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za czerwiec 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za czerwiec 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za czerwiec 2023 r."
        ]
    },
    {
        "day": "07.08.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za lipiec 2023 r."
        ]
    },
    {
        "day": "10.08.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za lipiec 2023 r."
        ]
    },
    {
        "day": "15.08.2023",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "16.08.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za sierpień 2023 r. - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wpłata do PPK"
        ]
    },
    {
        "day": "21.08.2023",
        "events": [
            "wpłata za lipiec 2023 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za lipiec 2023 r. pobranych zaliczek PIT 4",
            "wpłata za lipiec 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za lipiec 2023 r. ryczałtu od przychodów ewidencjonowanych",
            "wpłata za lipiec 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "25.08.2023",
        "events": [
            "wpłata podatku VAT za lipiec 2023 r. VAT 7",
            "przesłanie pliku JPK_V7M za lipiec 2023 r.",
            "przesłanie pliku JPK_V7K za lipiec 2023 r. (część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za lipiec 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za lipiec 2023 r.",
            "wpłata podatku akcyzowego za lipiec 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za lipiec 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za lipiec 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za lipiec 2023 r."
        ]
    },
    {
        "day": "07.09.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za sierpień 2023 r."
        ]
    },
    {
        "day": "11.09.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za sierpień 2023 r."
        ]
    },
    {
        "day": "15.09.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za wrzesień 2023 r. oraz III raty podatku rolnego - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wpłata III raty podatku od nieruchomości, podatku leśnego oraz podatku rolnego - osoby fizyczne",
            "wpłata II raty podatku od środków transportowych",
            "wpłata do PPK"
        ]
    },
    {
        "day": "20.09.2023",
        "events": [
            "wpłata za sierpień 2023 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za sierpień 2023 r. pobranych zaliczek PIT 4",
            "wpłata za sierpień 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za sierpień 2023 r. ryczałtu od przychodów ewidencjonowanych",
            "wpłata za sierpień 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "25.09.2023",
        "events": [
            "wpłata podatku VAT sierpień 2023 r. VAT 7",
            "przesłanie pliku JPK_V7M za sierpień 2023 r.",
            "przesłanie pliku JPK_V7K za sierpień 2023 r. (część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za sierpień 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za sierpień 2023 r.",
            "wpłata podatku akcyzowego za sierpień 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za sierpień 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za sierpień 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za sierpień 2023 r."
        ]
    },
    {
        "day": "30.09.2023",
        "events": [
            "przekazanie na wyodrębniony rachunek bankowy ZFŚS pozostałej część odpisów i zwiększeń, o których mowa w art. 6 ust. 2 ustawy o zakładowym funduszu świadczeń socjalnych"
        ]
    },
    {
        "day": "09.10.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za wrzesień 2023 r."
        ]
    },
    {
        "day": "10.10.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za wrzesień 2023 r."
        ]
    },
    {
        "day": "15.10.2023",
        "events": [
            "wpłata opłaty recyklingowej za torby foliowe pobranej w III kwartale 2023 r."
        ]
    },
    {
        "day": "16.10.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za październik 2023 r. - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wpłata do PPK"
        ]
    },
    {
        "day": "20.10.2023",
        "events": [
            "wpłata za wrzesień 2023 r. oraz za III kwartał pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za wrzesień 2023 r. pobranych zaliczek PIT 4",
            "wpłata za wrzesień 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za wrzesień 2023 r. oraz za III kwartał ryczałtu od przychodów ewidencjonowanych",
            "wpłata za wrzesień 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "25.10.2023",
        "events": [
            "wpłata podatku VAT wrzesień 2023 r. oraz za III kwartał VAT 7",
            "przesłanie pliku JPK_V7M za wrzesień 2023 r.",
            "przesłanie pliku JPK_V7K za wrzesień 2023 r. (część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za wrzesień 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za wrzesień 2023 r.",
            "wpłata podatku akcyzowego za wrzesień 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za wrzesień 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za wrzesień 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za wrzesień 2023 r."
        ]
    },
    {
        "day": "01.11.2023",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "07.11.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za październik 2023 r."
        ]
    },
    {
        "day": "10.11.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za październik 2023 r."
        ]
    },
    {
        "day": "11.11.2023 ",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "15.11.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za listopad 2023 r. oraz IV raty podatku rolnego - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wpłata IV raty podatku od nieruchomości, podatku leśnego oraz podatku rolnego - osoby fizyczne",
            "wpłata do PPK"
        ]
    },
    {
        "day": "20.11.2023",
        "events": [
            "wpłata za październik 2023 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za październik 2023 r. pobranych zaliczek PIT 4",
            "wpłata za październik 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za październik 2023 r. ryczałtu od przychodów ewidencjonowanych",
            "wpłata za październik 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "27.11.2023",
        "events": [
            "wpłata podatku VAT za październik 2023 r. oraz VAT 7",
            "przesłanie pliku JPK_V7M za październik 2023 r.",
            "przesłanie pliku JPK_V7K za październik 2023 r. (część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za październik 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za październik 2023 r.",
            "wpłata podatku akcyzowego za październik 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za październik 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za październik 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za październik 2023 r."
        ]
    },
    {
        "day": "07.12.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za listopad 2023 r."
        ]
    },
    {
        "day": "11.12.2023",
        "events": [
            "złożenie zgłoszenia INTRASTAT za listopad 2023 r."
        ]
    },
    {
        "day": "15.12.2023",
        "events": [
            "ZUS (spółki akcyjne, spółki z o.o., spółdzielnie, stowarzyszenia, fundacje)",
            "wpłata podatku od nieruchomości i podatku leśnego za grudzień 2023 r. - osoby prawne, jednostki organizacyjne oraz spółki nieposiadające osobowości prawnej",
            "wpłata do PPK"
        ]
    },
    {
        "day": "20.12.2023",
        "events": [
            "wpłata za listopad 2023 r. pobranych zaliczek Podatek dochodowy lub zryczałtowanego podatku dochodowego",
            "wpłata za listopad 2023 r. pobranych zaliczek PIT 4",
            "wpłata za listopad 2023 r. pobranych zaliczek PIT 8A",
            "ZUS (jednoosobowa działalność gospodarcza, spółki: cywilne, jawne, partnerskie, kamandytowe, komandytowo-akcyjne)",
            "wpłata za listopad 2023 r. ryczałtu od przychodów ewidencjonowanych",
            "wpłata za listopad 2023 r. na PFRON oraz złożenie deklaracji"
        ]
    },
    {
        "day": "25.12.2023",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "26.12.2023",
        "events": [
            "Dzień ustawowo wolny od pracy"
        ]
    },
    {
        "day": "27.12.2023",
        "events": [
            "wpłata podatku VAT za listopad 2023 r. oraz VAT 7",
            "przesłanie pliku JPK_V7M za listopad 2023 r.",
            "przesłanie pliku JPK_V7K za listopad 2023 r. (część ewidencyjna i deklaracyjna)",
            "przesłanie informacji podsumowującej o dokonanych wewnątrzwspólnotowych transakcjach VAT-UE za listopad 2023 r.",
            "złożenie deklaracji VAT-8, VAT-9M, VAT-12 za listopad 2023 r.",
            "wpłata podatku akcyzowego za listopad 2023 r. oraz złożenie deklaracji dla podatku akcyzowego",
            "rozliczenie podatku cukrowego należnego za listopad 2023 r.",
            "rozliczenie podatku od sprzedaży detalicznej PSD-1 za listopad 2023 r.",
            "przekazanie do PFRON dokumentów dotyczących dofinansowania do wynagrodzeń niepełnosprawnych pracowników za listopad 2023 r."
        ]
    },
    {
        "day": "28.12.2023",
        "events": [
            "wpłata podatku dochodowego w formie karty podatkowej za grudzień 2023 r."
        ]
    },
    {
        "day": "31.12.2023",
        "events": [
            "Remanent końcowy"
        ]
    },
];