export type Area = {
  slug: string;
  city: string;
  locative: string; // "w Kaliszu"
  title: string;
  description: string;
  intro: string[];
};

// Strony lokalne. Treść ma być konkretna dla miasta – nie kopiuj jednej strony
// z podmienioną nazwą, bo Google traktuje to jako doorway pages.
export const areas: Area[] = [
  {
    slug: 'kalisz',
    city: 'Kalisz',
    locative: 'w Kaliszu',
    title: 'Hydraulik i udrażnianie kanalizacji Kalisz 24/7 | WUKO',
    description:
      'Pogotowie kanalizacyjne i hydrauliczne w Kaliszu: WUKO, spirala, kamera, zalania, instalacje. Baza przy ul. Pułaskiego 31. Całą dobę: 793 149 951.',
    intro: [
      'Nasza baza jest w Kaliszu, przy ul. Pułaskiego 31, więc do większości adresów w mieście dojeżdżamy szybko, także w nocy.',
      'Pracujemy zarówno w domach jednorodzinnych, jak i w blokach i kamienicach, gdzie najczęściej zatyka się pion albo poziom w piwnicy. Obsługujemy też lokale gastronomiczne i firmy, w których kanalizację trzeba regularnie czyścić z tłuszczu.',
    ],
  },
  {
    slug: 'ostrow-wielkopolski',
    city: 'Ostrów Wielkopolski',
    locative: 'w Ostrowie Wielkopolskim',
    title: 'Udrażnianie kanalizacji Ostrów Wielkopolski 24/7 | WUKO',
    description:
      'Udrażnianie kanalizacji WUKO i pogotowie hydrauliczne w Ostrowie Wlkp. i okolicach. Zatory, zalania, instalacje. Całą dobę: 793 149 951.',
    intro: [
      'Do Ostrowa Wielkopolskiego i okolicznych miejscowości przyjeżdżamy z Kalisza, całą dobę. Przez telefon od razu powiemy, kiedy możemy być na miejscu.',
      'Najczęściej wzywają nas do zatkanych odpływów w domach jednorodzinnych, zatorów w przyłączach do sieci i do zalań po pękniętych rurach.',
    ],
  },
];
