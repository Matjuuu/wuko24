import { site } from '../config/site';
import { services, type Faq, type Service } from '../data/services';

export const BUSINESS_ID = `${site.url}/#firma`;
export const WEBSITE_ID = `${site.url}/#strona`;

const abs = (path: string) => new URL(path, site.url).toString();

export function businessSchema() {
  const b: Record<string, unknown> = {
    '@type': 'Plumber',
    '@id': BUSINESS_ID,
    name: site.name,
    description:
      'Pogotowie kanalizacyjne i hydrauliczne 24/7: udrażnianie kanalizacji metodą WUKO, spiralą, inspekcja kamerą, instalacje wodne, gazowe i CO w Kaliszu, Ostrowie Wielkopolskim i okolicach.',
    url: site.url + '/',
    telephone: site.phones.main.tel,
    image: abs('/og.png'),
    logo: abs('/favicon.svg'),
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    hasMap: site.mapsUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    contactPoint: [
      { '@type': 'ContactPoint', telephone: site.phones.main.tel, contactType: 'emergency', areaServed: 'PL', availableLanguage: 'pl', hoursAvailable: 'Mo-Su 00:00-23:59' },
      { '@type': 'ContactPoint', telephone: site.phones.second.tel, contactType: 'customer service', areaServed: 'PL', availableLanguage: 'pl' },
    ],
    areaServed: [...site.areas, ...site.nearbyTowns].map((name) => ({ '@type': 'City', name })),
    knowsAbout: ['WUKO', 'udrażnianie kanalizacji', 'czyszczenie kanalizacji', 'inspekcja kamerą', 'instalacje gazowe', 'centralne ogrzewanie', 'pompy ciepła'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Usługi',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', '@id': `${abs(`/uslugi/${s.slug}/`)}#usluga`, name: s.name },
      })),
    },
  };
  if (site.geo) b.geo = { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng };
  if (site.legalName) b.legalName = site.legalName;
  if (site.nip) b.taxID = site.nip;
  if (site.email) b.email = site.email;
  const sameAs = [site.googleProfileUrl, ...site.sameAs].filter(Boolean);
  if (sameAs.length) b.sameAs = sameAs;
  return b;
}

export function websiteSchema() {
  return { '@type': 'WebSite', '@id': WEBSITE_ID, url: site.url + '/', name: site.name, inLanguage: 'pl-PL', publisher: { '@id': BUSINESS_ID } };
}

export function serviceSchema(s: Service) {
  return {
    '@type': 'Service',
    '@id': `${abs(`/uslugi/${s.slug}/`)}#usluga`,
    name: s.name,
    serviceType: s.schemaType,
    description: s.lead,
    url: abs(`/uslugi/${s.slug}/`),
    provider: { '@id': BUSINESS_ID },
    areaServed: site.areas.map((name) => ({ '@type': 'City', name })),
    hoursAvailable: { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' },
  };
}

export function faqSchema(items: Faq[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: abs(it.href) })),
  };
}

export function graph(...nodes: unknown[]) {
  return { '@context': 'https://schema.org', '@graph': nodes };
}
