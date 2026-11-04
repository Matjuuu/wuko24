import type { Faq } from './services';

// Opinie przeniesione z obecnej strony. Nie oznaczamy ich schema Review –
// Google nie pokazuje gwiazdek dla opinii publikowanych przez firmę na własnej stronie.
// Gwiazdki i opinie budujemy w Profilu Firmy w Google.
export const reviews = [
  { name: 'Edyta', job: 'Udrażnianie rur', text: 'Polecam, firma godna zaufania. Praca wykonana fachowo. Super, bo Panowie przyjechali w godzinach wieczornych, ktoś inny nawet by nie odebrał telefonu.' },
  { name: 'Magda', job: 'Instalacja wodna, gazowa', text: 'Sumienny, porządny i dokładny fachowiec. Wszystko wykonane bardzo dokładnie i w umówionym terminie. Dodatkowo zawsze można liczyć na jego pomoc lub radę w razie pytań związanych z wykonywanym zleceniem. Wszystko u jednej osoby łącznie z podłączeniem płyty gazowej (uprawnienia ma, co jest istotne dla gwarancji na sprzęt).' },
  { name: 'Darek', job: 'Instalacja centralnego ogrzewania', text: 'Usługa zamrażania rur i demontaż grzejnika przebiegł szybko i sprawnie, w umówionym terminie. Polecam!' },
  { name: 'Monika', job: 'Ogrzewanie podłogowe elektryczne', text: 'Pan Krzysztof, profesjonalista w tej dziedzinie, pomoże i doradzi w każdej kwestii. Wszystko sprawnie, tanio i porządnie, jesteśmy mega zadowoleni z instalacji.' },
  { name: 'Katarzyna', job: 'Instalacja wodna', text: 'Starannie wykonana praca, szeroki zakres prac, wszystko na dobrym poziomie. Super kontakt, polecam!' },
];

export const homeFaq: Faq[] = [
  {
    q: 'Czy pogotowie kanalizacyjne w Kaliszu działa w nocy?',
    a: 'Tak. Udrażnianie kanalizacji i pogotowie hydrauliczne działają całą dobę, 7 dni w tygodniu, także w weekendy i święta. Telefon: 793 149 951.',
  },
  {
    q: 'Jaki teren obsługujecie?',
    a: 'Kalisz z okolicami oraz Ostrów Wielkopolski z okolicami. Jeśli nie wiesz, czy dojedziemy do Twojej miejscowości, zadzwoń i zapytaj.',
  },
  {
    q: 'Co to jest WUKO?',
    a: 'WUKO to potoczna nazwa czyszczenia kanalizacji wodą pod wysokim ciśnieniem. Specjalna głowica na końcu węża rozbija zator i zmywa osad ze ścianek rury, bez kucia i bez chemii.',
  },
  {
    q: 'Ile kosztuje udrażnianie kanalizacji?',
    a: 'Koszt zależy od miejsca i rodzaju zatoru, długości rury i pory dnia. Opisz problem przez telefon, a podamy orientacyjną cenę przed przyjazdem.',
  },
  {
    q: 'Czy robicie też zwykłe prace hydrauliczne?',
    a: 'Tak. Poza kanalizacją wykonujemy instalacje wodne, gazowe i CO, przeglądy gazowe, montaż armatury, pomp ciepła i klimatyzacji.',
  },
];
