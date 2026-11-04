# wuko-hydraulik.pl – Astro

Statyczna strona (zero JS po stronie klienta, zero cookies, czcionka hostowana lokalnie).

## Uruchomienie

```bash
npm install
npm run dev      # podgląd: http://localhost:4321
npm run build    # gotowa strona w dist/
```

## Gdzie co jest

| Co zmieniasz | Plik |
|---|---|
| Nazwa, telefony, adres, NIP, geo, miejscowości, zdjęcia | `src/config/site.ts` |
| Treść usług + FAQ każdej usługi | `src/data/services.ts` |
| Strony miast | `src/data/areas.ts` |
| Opinie, FAQ strony głównej | `src/data/content.ts` |
| Poradnik | `src/data/posts.ts` + `src/pages/blog/*.astro` |
| Schema.org (Plumber, Service, FAQPage, Breadcrumb) | `src/lib/schema.ts` |
| robots.txt (wpuszcza boty AI), llms.txt | `src/pages/robots.txt.ts`, `src/pages/llms.txt.ts` |
| Przekierowania 301 ze starego WP, nagłówki | `public/_redirects`, `public/_headers` |

Nowa usługa = nowy obiekt w `services.ts` – strona, menu w stopce, schema, llms.txt i sitemap generują się same.

## Wdrożenie – Cloudflare Pages

Ustawienia projektu (Workers & Pages → Create → Pages → Connect to Git):

| Pole | Wartość |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node | 22 (z pliku `.node-version`) |

Bez repozytorium: `npm run build`, potem Pages → Upload assets → przeciągnij folder `dist`
albo `npx wrangler pages deploy dist` (nazwa projektu jest w `wrangler.toml`).

### Przepięcie domeny z WordPressa
1. **Zanim zmienisz DNS:** sprawdź, czy firma ma pocztę na obecnym hostingu (rekordy MX). Przy dodawaniu strefy do Cloudflare skopiuj MX, SPF i inne rekordy, inaczej poczta przestanie działać.
2. Pages → projekt → Custom domains → dodaj `wuko-hydraulik.pl` i `www.wuko-hydraulik.pl`.
3. Rules → Redirect Rules → szablon „Redirect from WWW to root” (301, zachowaj ścieżkę).
4. Sprawdź: `/nasze-uslugi/` → `/uslugi/`, stary wpis bloga → `/blog/...`, `/robots.txt`, `/llms.txt`, `/sitemap-index.xml`.
5. Google Search Console: wyślij `sitemap-index.xml`, sprawdź stronę główną w „Sprawdzanie adresu URL”.
6. Rich Results Test (https://search.google.com/test/rich-results): strona główna i jedna usługa.
7. Stary WordPress: zostaw kopię (pliki + baza) na kilka tygodni, potem wyłącz.

Szczegółowa lista rzeczy do uzupełnienia: `TODO.md`.
