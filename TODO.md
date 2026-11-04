# Do uzupełnienia przed publikacją

## Dane (src/config/site.ts) – ważne dla SEO lokalnego
- [ ] `name` – dokładnie jak w Profilu Firmy w Google (NAP musi się zgadzać 1:1)
- [ ] `legalName` i `nip` – stopka, polityka prywatności, schema
- [ ] `geo` – współrzędne pinezki z Map Google
- [ ] `googleProfileUrl` – stały link do wizytówki (share.google działa, ale lepszy pełny link Maps/CID)
- [ ] `sameAs` – Facebook, Fixly, Oferteo, Panorama Firm itd. (wszędzie identyczny NAP)
- [ ] `nearbyTowns` – tylko miejscowości, do których naprawdę jeździcie (Opatówek, Nowe Skalmierzyce? – potwierdzić)
- [ ] `email` – jeśli ma być widoczny

## Do potwierdzenia z klientem (w treściach)
- [ ] uprawnienia gazowe – w treści jest „podłączenie przez osobę z uprawnieniami”
- [ ] inspekcja kamerą – czy klient dostaje nagranie / raport? Jeśli tak, dopisać w services.ts
- [ ] pompy ciepła / dotacje – czy nadal aktualne i w jakim zakresie (prefinansowanie?)
- [ ] orientacyjne ceny („od X zł”) – podanie choćby widełek mocno pomaga i w Google, i w odpowiedziach AI

## Zdjęcia
Serwer starej strony blokował pobieranie, więc zdjęć nie ma w projekcie.
- [ ] Pobierz z WordPressa `wp-content/uploads/2023/07` i `2023/08` (auto WUKO, realizacje)
- [ ] Zmniejsz do ~1600 px, zapisz jako .webp w `public/images/realizacje/`
- [ ] Dopisz do `photos` w site.ts z konkretnym alt, np. „Czyszczenie kanalizacji WUKO w bloku w Kaliszu”
- [ ] Najlepiej nowe zdjęcia: auto z oznakowaniem, Krzysztof przy pracy – twarz fachowca sprzedaje

## Poza stroną (największy wpływ na lokalne wyniki)
- [ ] Profil Firmy w Google: kategoria główna „Hydraulik”, dodatkowe „Usługi kanalizacyjne”, „Usługa udrażniania rur”; wszystkie usługi z opisami; godziny 24h; zdjęcia co miesiąc
- [ ] Prosić każdego klienta o opinię w Google (SMS z linkiem po zleceniu) i odpowiadać na każdą
- [ ] Wpisy w katalogach z tym samym NAP
- [ ] Poradnik: 1 tekst miesięcznie odpowiadający na realne pytanie („cofa się woda w zlewie”, „kto płaci za zator w bloku”)
