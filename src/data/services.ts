export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string; // krótka nazwa (menu, karty)
  h1: string;
  title: string; // <title>, do ~60 znaków
  description: string; // meta description, do ~155 znaków
  lead: string; // pierwsze zdanie – bezpośrednia odpowiedź (cytowana przez AI i Google)
  facts: { label: string; value: string }[];
  sections: { h2: string; body?: string[]; list?: string[] }[];
  faq: Faq[];
  schemaType: string; // serviceType w schema.org
};

export const services: Service[] = [
  {
    slug: 'udraznianie-kanalizacji-wuko',
    name: 'Udrażnianie kanalizacji WUKO',
    h1: 'Udrażnianie kanalizacji metodą WUKO w Kaliszu i Ostrowie Wielkopolskim',
    title: 'Udrażnianie kanalizacji WUKO Kalisz, Ostrów | 24/7',
    description:
      'Czyszczenie kanalizacji wodą pod wysokim ciśnieniem (WUKO) w Kaliszu, Ostrowie Wlkp. i okolicach. Zatory, tłuszcz, osady, korzenie. Dojazd całą dobę.',
    lead:
      'Udrażniamy i czyścimy kanalizację metodą WUKO, czyli strumieniem wody pod wysokim ciśnieniem, w Kaliszu, Ostrowie Wielkopolskim i okolicach. Przyjeżdżamy całą dobę, także w nocy i w święta.',
    facts: [
      { label: 'Na co pomaga', value: 'zatory, tłuszcz, osady, piasek, korzenie w rurach' },
      { label: 'Gdzie', value: 'domy, mieszkania, bloki, lokale gastronomiczne, firmy' },
      { label: 'Kiedy', value: '24 godziny na dobę, 7 dni w tygodniu' },
      { label: 'Teren', value: 'Kalisz, Ostrów Wielkopolski i okolice' },
    ],
    sections: [
      {
        h2: 'Na czym polega metoda WUKO',
        body: [
          'Do rury wprowadzamy wąż zakończony specjalną głowicą. Głowica wyrzuca wodę pod wysokim ciśnieniem do tyłu i na boki: sama przeciąga się w głąb przewodu, rozbija zator i zmywa osad ze ścianek rury. Rozluźnione zanieczyszczenia spływają dalej razem z wodą.',
          'Bez kucia, bez rozbierania instalacji i bez chemii. Metoda nadaje się do rur kanalizacyjnych z PVC, żeliwa i kamionki, zarówno w pionach, jak i w poziomach.',
        ],
      },
      {
        h2: 'Kiedy wezwać WUKO',
        list: [
          'woda nie schodzi z wanny, brodzika albo zlewu, mimo przepychania',
          'z odpływów lub studzienki cofa się woda albo ścieki',
          'w kilku miejscach w domu jednocześnie bulgocze i wolno spływa',
          'z kanalizacji czuć nieprzyjemny zapach',
          'w lokalu gastronomicznym rury zarastają tłuszczem i trzeba je czyścić regularnie',
          'kanalizacja przed budynkiem lub przyłącze do sieci zatkało się korzeniami',
        ],
      },
      {
        h2: 'WUKO czy spirala?',
        body: [
          'Spirala mechaniczna szybko przebija pojedynczy zator, na przykład w syfonie czy przy toalecie. WUKO czyści rurę na całym obwodzie, więc lepiej radzi sobie z tłuszczem i osadem, który narastał latami, i z długimi odcinkami. Na miejscu dobieramy metodę do problemu, a gdy przyczyna nie jest oczywista, sprawdzamy rurę kamerą.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy czyszczenie WUKO może uszkodzić rury?',
        a: 'Przy prawidłowo dobranym ciśnieniu i głowicy nie. Woda nie rysuje rur tak jak narzędzia mechaniczne, dlatego WUKO stosuje się też w starszych instalacjach. Jeżeli rura jest już pęknięta lub zapadnięta, informujemy o tym i proponujemy inspekcję kamerą.',
      },
      {
        q: 'Ile trwa udrażnianie kanalizacji metodą WUKO?',
        a: 'Typowy zator w domu lub mieszkaniu usuwamy zwykle w ciągu jednej wizyty. Czas zależy od długości przewodu, rodzaju zatoru i dostępu do rewizji.',
      },
      {
        q: 'Ile kosztuje udrażnianie WUKO w Kaliszu?',
        a: 'Cena zależy od miejsca zatoru, długości rury i pory dnia. Zadzwoń i opisz problem, a podamy orientacyjny koszt jeszcze przed przyjazdem.',
      },
      {
        q: 'Czy przyjedziecie w nocy lub w weekend?',
        a: 'Tak. Pogotowie kanalizacyjne działa całą dobę, 7 dni w tygodniu, w Kaliszu, Ostrowie Wielkopolskim i okolicach.',
      },
    ],
    schemaType: 'Czyszczenie i udrażnianie kanalizacji (WUKO)',
  },
  {
    slug: 'udraznianie-rur-spirala',
    name: 'Udrażnianie rur spiralą',
    h1: 'Mechaniczne udrażnianie rur spiralą elektryczną – Kalisz i Ostrów',
    title: 'Udrażnianie rur spiralą Kalisz, Ostrów | WC, zlew, pion',
    description:
      'Zapchana toaleta, zlew, brodzik, pion lub rynna? Udrażniamy rury spiralą elektryczną w Kaliszu, Ostrowie Wlkp. i okolicach. Przyjazd całą dobę.',
    lead:
      'Zapchane toalety, zlewy, brodziki, pisuary, piony i rynny udrażniamy spiralą elektryczną. To najszybszy sposób na pojedynczy zator blisko odpływu.',
    facts: [
      { label: 'Na co pomaga', value: 'zatory w WC, zlewach, brodzikach, pisuarach, rynnach' },
      { label: 'Zakres', value: 'piony i poziomy kanalizacyjne' },
      { label: 'Kiedy', value: 'całą dobę' },
      { label: 'Teren', value: 'Kalisz, Ostrów Wielkopolski i okolice' },
    ],
    sections: [
      {
        h2: 'Jak działa spirala elektryczna',
        body: [
          'Obracająca się stalowa spirala z końcówką roboczą wchodzi w rurę, rozdrabnia zator albo zaczepia go i wyciąga. Dobrze sprawdza się przy zatorach z papieru, włosów, resztek jedzenia czy przedmiotów, które wpadły do toalety.',
        ],
      },
      {
        h2: 'Co udrażniamy',
        list: ['toalety i pisuary', 'zlewy i zlewozmywaki', 'wanny, brodziki, umywalki', 'piony w blokach i kamienicach', 'poziomy w piwnicach', 'rynny i odpływy deszczowe'],
      },
      {
        h2: 'Zanim zadzwonisz',
        body: [
          'Nie wlewaj do zatkanego odpływu żrących środków chemicznych. Jeśli nie zadziałają, zostają w rurze i utrudniają pracę, a przy kontakcie ze skórą parzą. Zakręć wodę w urządzeniu, które się przelewa, i zadzwoń.',
        ],
      },
    ],
    faq: [
      {
        q: 'Co zrobić, gdy zapchała się toaleta?',
        a: 'Nie spuszczaj wody ponownie, bo może się przelać. Spróbuj przepychacza. Jeśli to nie pomaga albo woda cofa się też w innych odpływach, zator jest dalej w rurze i potrzebna jest spirala lub WUKO.',
      },
      {
        q: 'Czy spirala usunie tłuszcz z rur?',
        a: 'Spirala przebije zator, ale nie oczyści dokładnie ścianek rury z tłuszczu. Przy zatłuszczonych instalacjach lepszym wyborem jest metoda WUKO.',
      },
    ],
    schemaType: 'Mechaniczne udrażnianie rur',
  },
  {
    slug: 'inspekcja-kamera',
    name: 'Inspekcja kamerą',
    h1: 'Inspekcja kanalizacji kamerą – Kalisz i okolice',
    title: 'Inspekcja kamerą kanalizacji Kalisz, Ostrów Wlkp.',
    description:
      'Sprawdzamy kanalizację kamerą inspekcyjną: przyczyna nawracających zatorów, pęknięcia, korzenie, odbiór nowej instalacji. Kalisz, Ostrów Wlkp.',
    lead:
      'Kamerą inspekcyjną zaglądamy do wnętrza rury i pokazujemy, co naprawdę blokuje kanalizację: osad, korzenie, pęknięcie, przesunięte kielichy czy zapadnięty odcinek.',
    facts: [
      { label: 'Po co', value: 'diagnoza przyczyny zatorów i uszkodzeń bez kucia' },
      { label: 'Kiedy warto', value: 'nawracające zatory, zakup domu, odbiór nowej instalacji' },
      { label: 'Efekt', value: 'widzisz stan rury i wiesz, co dalej' },
      { label: 'Teren', value: 'Kalisz, Ostrów Wielkopolski i okolice' },
    ],
    sections: [
      {
        h2: 'Kiedy inspekcja ma sens',
        list: [
          'zator wraca co kilka tygodni mimo czyszczenia',
          'podejrzewasz pęknięcie lub korzenie w przyłączu',
          'kupujesz dom lub mieszkanie i chcesz znać stan kanalizacji',
          'odbierasz nową instalację w budynku',
          'po czyszczeniu WUKO chcesz sprawdzić, czy rura jest czysta na całej długości',
        ],
      },
      {
        h2: 'Co zyskujesz',
        body: [
          'Zamiast zgadywać i kuć posadzkę, wiesz dokładnie, gdzie jest problem i jaki jest. Na tej podstawie decydujesz, czy wystarczy czyszczenie, czy trzeba naprawić konkretny odcinek.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy do inspekcji kamerą trzeba rozkuwać podłogę?',
        a: 'Nie. Kamerę wprowadzamy przez rewizję, odpływ lub studzienkę.',
      },
    ],
    schemaType: 'Inspekcja kanalizacji kamerą',
  },
  {
    slug: 'pogotowie-hydrauliczne',
    name: 'Pogotowie hydrauliczne 24/7',
    h1: 'Pogotowie hydrauliczne 24/7 w Kaliszu i Ostrowie Wielkopolskim',
    title: 'Pogotowie hydrauliczne 24/7 Kalisz, Ostrów Wlkp.',
    description:
      'Zalanie, pęknięta rura, wyciek, awaria pieca lub armatury? Hydraulik w Kaliszu i Ostrowie Wlkp. całą dobę. Zadzwoń: 793 149 951.',
    lead:
      'Pogotowie hydrauliczne w Kaliszu, Ostrowie Wielkopolskim i okolicach działa całą dobę. Przyjeżdżamy do zalań, pękniętych rur, wycieków, niedziałającej armatury i awarii pieców.',
    facts: [
      { label: 'Awarie', value: 'zalanie, pęknięta rura, wyciek, cieknący zawór, awaria pieca' },
      { label: 'Kiedy', value: '24/7, także w nocy, w weekendy i święta' },
      { label: 'Telefon', value: '793 149 951' },
      { label: 'Teren', value: 'Kalisz, Ostrów Wielkopolski i okolice' },
    ],
    sections: [
      {
        h2: 'Co zrobić, zanim przyjedziemy',
        list: [
          'Zakręć główny zawór wody (zwykle przy wodomierzu).',
          'Jeśli woda leje się w pobliżu gniazdek lub urządzeń, wyłącz prąd w tym obwodzie.',
          'Czujesz gaz? Zakręć kurek gazu, otwórz okna, nie używaj ognia ani włączników, wyjdź z budynku i dzwoń pod 992 (pogotowie gazowe).',
          'Zrób kilka zdjęć – przydadzą się do ubezpieczenia.',
        ],
      },
      {
        h2: 'Z czym przyjeżdżamy',
        list: [
          'pęknięte i nieszczelne rury, także zamarznięte',
          'zalania i wycieki z instalacji, baterii, spłuczek',
          'niedziałające zawory, krany, baterie, stelaże WC',
          'awarie piecyków i kotłów',
          'odpompowanie wody z zalanych pomieszczeń',
          'zamrażanie rur, gdy trzeba naprawić odcinek bez spuszczania wody z całej instalacji',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy hydraulik przyjedzie w nocy?',
        a: 'Tak. Działamy całą dobę, 7 dni w tygodniu. Zadzwoń pod 793 149 951.',
      },
      {
        q: 'Gdzie jest główny zawór wody?',
        a: 'Najczęściej przy wodomierzu: w piwnicy, w łazience, w szafce instalacyjnej na klatce schodowej albo w studzience wodomierzowej na posesji.',
      },
      {
        q: 'Co to jest zamrażanie rur?',
        a: 'To zamrożenie wody w krótkim odcinku rury, które tworzy lodowy korek. Dzięki temu można wymienić grzejnik, zawór lub fragment rury bez spuszczania wody z całej instalacji.',
      },
    ],
    schemaType: 'Pogotowie hydrauliczne',
  },
  {
    slug: 'instalacje-wod-kan-gaz-co',
    name: 'Instalacje wodne, gazowe, CO',
    h1: 'Instalacje wodne, gazowe i centralnego ogrzewania – Kalisz i okolice',
    title: 'Hydraulik Kalisz: instalacje wodne, gazowe, CO',
    description:
      'Montaż i wymiana instalacji wodnych, gazowych i CO, przeglądy gazowe, próby szczelności, montaż armatury. Domy, mieszkania i firmy w Kaliszu i Ostrowie.',
    lead:
      'Wykonujemy, wymieniamy i serwisujemy instalacje wodno-kanalizacyjne, gazowe i centralnego ogrzewania w domach, mieszkaniach i firmach w Kaliszu, Ostrowie Wielkopolskim i okolicach.',
    facts: [
      { label: 'Instalacje', value: 'wodne, kanalizacyjne, gazowe, CO, przemysłowe' },
      { label: 'Gaz', value: 'przeglądy okresowe, próby szczelności, podłączenia' },
      { label: 'Klienci', value: 'osoby prywatne, wspólnoty, firmy' },
      { label: 'Teren', value: 'Kalisz, Ostrów Wielkopolski i okolice' },
    ],
    sections: [
      {
        h2: 'Zakres prac',
        list: [
          'nowe instalacje i wymiana starych: woda, kanalizacja, gaz, CO',
          'instalacje przemysłowe',
          'okresowe przeglądy instalacji gazowych i próby szczelności',
          'podłączenie kuchenek i płyt gazowych',
          'odbiory i kontrola instalacji w nowych budynkach',
          'montaż wodomierzy, filtrów, baterii, stelaży podtynkowych WC',
          'naprawa kranów, zaworów, nieszczelności, piecyków i kotłów',
          'ogrzewanie podłogowe',
        ],
      },
      {
        h2: 'Jak pracujemy',
        body: [
          'Przyjeżdżamy, oglądamy instalację i mówimy wprost, co trzeba zrobić i ile to będzie kosztować. Terminów pilnujemy, a po robocie zostawiamy porządek. Klienci w opiniach podkreślają, że można się z nami skontaktować także po zakończeniu prac, gdy pojawią się pytania.',
        ],
      },
    ],
    faq: [
      {
        q: 'Czy podłączacie płyty i kuchenki gazowe?',
        a: 'Tak. Podłączenie gazu przez osobę z uprawnieniami jest zwykle warunkiem gwarancji producenta urządzenia.',
      },
      {
        q: 'Jak często trzeba robić przegląd instalacji gazowej?',
        a: 'Prawo budowlane wymaga kontroli instalacji gazowej co najmniej raz w roku. Wykonujemy przeglądy i próby szczelności.',
      },
    ],
    schemaType: 'Instalacje hydrauliczne, gazowe i CO',
  },
  {
    slug: 'pompy-ciepla-klimatyzacja',
    name: 'Pompy ciepła i klimatyzacja',
    h1: 'Pompy ciepła i klimatyzacja – montaż i pomoc w dotacjach',
    title: 'Pompy ciepła, klimatyzacja Kalisz | pomoc w dotacjach',
    description:
      'Montaż pomp ciepła i klimatyzacji w Kaliszu, Ostrowie Wlkp. i okolicach. Doradzamy w sprawie dotacji, m.in. programu Czyste Powietrze.',
    lead:
      'Montujemy pompy ciepła i klimatyzację oraz pomagamy przejść przez wnioski o dofinansowanie, m.in. z programu Czyste Powietrze.',
    facts: [
      { label: 'Montaż', value: 'pompy ciepła, klimatyzacja, podłączenie do instalacji CO' },
      { label: 'Dotacje', value: 'doradztwo, m.in. Czyste Powietrze' },
      { label: 'Teren', value: 'Kalisz, Ostrów Wielkopolski i okolice' },
    ],
    sections: [
      {
        h2: 'Co robimy',
        list: [
          'dobór i montaż pomp ciepła',
          'montaż klimatyzacji',
          'podłączenie do istniejącej instalacji CO i wody użytkowej',
          'doradztwo przy programach dotacyjnych i pomoc w formalnościach',
        ],
      },
      {
        h2: 'Dotacje',
        body: [
          'Zasady programów dopłat zmieniają się co jakiś czas. Zadzwoń, a powiemy, z czego w tej chwili możesz skorzystać i jak wygląda finansowanie w Twoim przypadku.',
        ],
      },
    ],
    faq: [],
    schemaType: 'Montaż pomp ciepła i klimatyzacji',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug)!;
