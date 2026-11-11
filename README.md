# Orma — Sito web & Interactive Demo

> Il sistema operativo di nuova generazione per la gestione della ristorazione (HoReCa).

Questo repository contiene il sito di **Orma** e di PC Software, visibile su [getorma.app](https://getorma.app).

## 🧭 Rotte

| Path | Pagina |
|---|---|
| `/` | Landing page di Orma con anteprima interattiva del gestionale |
| `/websites` | Siti web su misura per locali, sincronizzati con Orma |
| `/about` | PC Software: visione, ecosistema, contatti (`/company` reindirizza qui) |

## 🛠️ Stack Tecnologico

- **Framework:** React 18 + Vite + React Router 7
- **Styling:** Tailwind CSS + Lucide React (Icons)
- **Design System:** Dark Satin Minimalist (`#08090a`) con sfondo liquido WebGL

Testi di navigazione, CTA, contatti e SEO stanno in `src/config/site.js`; i testi delle pagine in `src/data/`.

## 🌊 Animazioni

Lo sfondo ha tre livelli, scelti in `src/hooks/useMotionTier.js`:

- `full`: shader WebGL (desktop con mouse)
- `lite`: glow CSS in lento movimento (mobile, touch, WebGL assente o dispositivo lento)
- `static`: nessuna animazione (`prefers-reduced-motion` o risparmio dati)

Per provarli aggiungi `?motion=full`, `?motion=lite` o `?motion=static` all'URL.

## 🚀 Sviluppo Locale

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Compila la build per la produzione
npm run build
```

`npm run build` esegue anche `scripts/postbuild-head.mjs`, che genera `dist/websites.html` e `dist/about.html` con title, description e Open Graph della rotta.

## 📄 Licenza

Proprietà riservata — PC Software (Valerio Cataldo & Damiano Pavia).
