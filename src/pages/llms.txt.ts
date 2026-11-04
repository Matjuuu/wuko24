import type { APIRoute } from 'astro';
import { site } from '../config/site';
import { services } from '../data/services';
import { areas } from '../data/areas';
import { posts } from '../data/posts';
import { homeFaq } from '../data/content';

// llms.txt – zwięzłe podsumowanie firmy w Markdownie dla modeli językowych (llmstxt.org)
export const GET: APIRoute = () => {
  const u = (p: string) => `${site.url}${p}`;
  const body = `# ${site.name}

> Pogotowie kanalizacyjne i hydrauliczne działające całą dobę (24/7) w Kaliszu, Ostrowie Wielkopolskim i okolicach (województwo wielkopolskie). Udrażnianie kanalizacji metodą WUKO (woda pod wysokim ciśnieniem) i spiralą elektryczną, inspekcja kamerą, awarie hydrauliczne, instalacje wodne, gazowe i CO, pompy ciepła i klimatyzacja.

## Dane kontaktowe

- Telefon (hydraulik i WUKO, 24/7): ${site.phones.main.display}
- Telefon (udrażnianie WUKO): ${site.phones.second.display}
- Adres: ul. ${site.address.street}, ${site.address.postalCode} ${site.address.city}
- Godziny: ${site.hours}
- Obszar: ${[...site.areas, ...site.nearbyTowns].join(', ')} i okolice
${site.email ? `- E-mail: ${site.email}\n` : ''}
## Usługi

${services.map((s) => `- [${s.name}](${u(`/uslugi/${s.slug}/`)}): ${s.lead}`).join('\n')}

## Obszar działania

${areas.map((a) => `- [${a.city}](${u(`/obszar/${a.slug}/`)})`).join('\n')}

## Najczęstsze pytania

${homeFaq.map((f) => `### ${f.q}\n${f.a}`).join('\n\n')}

## Poradnik

${posts.map((p) => `- [${p.title}](${u(`/blog/${p.slug}/`)}): ${p.description}`).join('\n')}

## Opcjonalne

- [Kontakt](${u('/kontakt/')})
- [Opinie w Google](${site.googleProfileUrl})
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
