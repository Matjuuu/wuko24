// Jedno miejsce na dane firmy. Wszystko, co oznaczone TODO, uzupełnij przed publikacją.
// Nazwa, adres i telefon (NAP) muszą być identyczne jak w Profilu Firmy w Google.

export const site = {
  url: 'https://wuko-hydraulik.pl',
  // TODO: wpisz dokładnie taką nazwę, jaka jest w Profilu Firmy w Google
  name: 'WUKO Hydraulik Kalisz',
  tagline: 'Pogotowie kanalizacyjne i hydrauliczne 24/7',
  // TODO: pełna nazwa działalności i NIP (stopka, polityka prywatności, schema)
  legalName: '',
  nip: '',
  // Imię fachowca pojawia się w opiniach klientów – buduje zaufanie
  owner: 'Krzysztof', // TODO: potwierdź / dopisz nazwisko, jeśli chce je pokazać

  phones: {
    main: { display: '793 149 951', tel: '+48793149951', label: 'Hydraulik i WUKO, całą dobę' },
    second: { display: '793 301 330', tel: '+48793301330', label: 'Udrażnianie WUKO' },
  },
  email: '', // TODO: adres e-mail firmy (jeśli ma być widoczny)

  address: {
    street: 'Pułaskiego 31',
    postalCode: '62-800',
    city: 'Kalisz',
    region: 'wielkopolskie',
    country: 'PL',
  },
  // TODO: współrzędne pinezki z Google Maps (prawy klik na pinezce → skopiuj liczby)
  geo: null as null | { lat: number; lng: number },

  mapsUrl: 'https://goo.gl/maps/jT5fXWRQ28MzUkF39',
  // Link do wizytówki Google (opinie). Docelowo podmień na stały link z GBP.
  googleProfileUrl: 'https://share.google/hqIdUTptdPIcCQcMo',
  // TODO: Facebook, Oferteo, Fixly itd. – każdy profil z tym samym NAP wzmacnia lokalną widoczność
  sameAs: [] as string[],

  hours: 'Całą dobę, 7 dni w tygodniu',

  areas: ['Kalisz', 'Ostrów Wielkopolski'],
  // TODO: dopisz miejscowości, do których faktycznie jeździcie (tylko prawdziwe!)
  nearbyTowns: [] as string[],

  // Zdjęcia realizacji: wrzuć pliki do public/images/realizacje/ i dopisz je tutaj.
  // Zdjęcia z obecnej strony: wp-content/uploads/2023/07 i 2023/08 na starym WordPressie.
  photos: [] as { src: string; alt: string }[],
};

export type Site = typeof site;
