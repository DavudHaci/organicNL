# CasinoHelder.nl — NL iGaming Affiliate Saytı

Hollandiya bazarı üçün SEO-optimallaşdırılmış, holland dilində affiliate müqayisə saytı.
Yalnız KSA lisenziyalı operatorlar tanıdılır (leqal və davamlı SEO strategiyası).

## Texnologiya

- [Astro 5](https://astro.build) — statik sayt generatoru (sıfır JS, maksimum sürət, ideal Core Web Vitals)
- `@astrojs/sitemap` — avtomatik sitemap
- Schema.org: Organization, WebSite, Article, FAQPage, BreadcrumbList, ItemList

## Əmrlər

```bash
npm install      # asılılıqları qur
npm run dev      # lokal server (http://localhost:4321)
npm run build    # istehsal build-i (dist/ qovluğuna)
npm run preview  # build-i lokal önizlə
```

## Struktur

```
src/
  content/gidsen/     # SEO məqalələri (markdown) — yeni məqalə üçün yeni .md faylı əlavə et
  layouts/Base.astro  # SEO meta, OG, schema.org
  pages/              # ana səhifə, gidsen, over-ons, verantwoord-spelen, privacy
  styles/global.css   # dizayn
KEYWORD-RESEARCH.md   # keyword strategiyası, title/description cədvəli, growth planı
```

## Yeni məqalə əlavə etmək

`src/content/gidsen/` qovluğuna `.md` faylı əlavə et. Frontmatter nümunəsi mövcud
məqalələrdə var: `title`, `metaTitle`, `description`, `keyword`, `pubDate`, `category`
(`Betalen | Bonussen | Spellen | Regelgeving | Praktisch`), `readingTime`, `faq` (opsional).
Sitemap, schema və listing avtomatik yenilənir.

## Deploy-dan əvvəl

1. `astro.config.mjs`-də `site` dəyərini real domenə dəyiş.
2. Google Search Console-da saytı qeydiyyatdan keçir, sitemap təqdim et.
3. Affiliate linklərini əlavə et (hazırda düymələr daxili səhifələrə yönəlir).
4. KSA affiliate qaydalarına uyğunluğu yoxla (24+ hədəfləmə, məsuliyyətli oyun mesajları — hazırda daxil edilib).
