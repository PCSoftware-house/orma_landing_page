// Dopo `vite build`: scrive un HTML per ogni rotta di SEO con title, description,
// canonical e Open Graph corretti, così anteprime social e crawler senza JS li leggono.
// Cloudflare serve dist/websites.html per /websites; il resto resta in fallback SPA.
import { readFile, writeFile } from 'node:fs/promises'
import { SEO, SITE } from '../src/config/site.js'

const DIST = new URL('../dist/', import.meta.url)

function escapeAttr(value) {
  return value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
}

function replaceOnce(html, pattern, replacement, label) {
  if (!pattern.test(html)) throw new Error(`postbuild-head: tag non trovato in index.html (${label})`)
  return html.replace(pattern, replacement)
}

function setMeta(html, attribute, key, value) {
  const pattern = new RegExp(`(<meta ${attribute}="${key}" content=")[^"]*(")`)
  return replaceOnce(html, pattern, (_, start, end) => start + escapeAttr(value) + end, key)
}

const template = await readFile(new URL('index.html', DIST), 'utf8')

for (const [path, entry] of Object.entries(SEO)) {
  const url = path === '/' ? `${SITE.origin}/` : `${SITE.origin}${path}`
  let html = template
  html = replaceOnce(html, /<title>[^<]*<\/title>/, () => `<title>${escapeAttr(entry.title)}</title>`, 'title')
  html = setMeta(html, 'name', 'description', entry.description)
  html = replaceOnce(
    html,
    /(<link rel="canonical" href=")[^"]*(")/,
    (_, start, end) => start + url + end,
    'canonical',
  )
  html = setMeta(html, 'property', 'og:title', entry.title)
  html = setMeta(html, 'property', 'og:description', entry.description)
  html = setMeta(html, 'property', 'og:url', url)

  const file = path === '/' ? 'index.html' : `${path.slice(1)}.html`
  await writeFile(new URL(file, DIST), html)
  console.log(`postbuild-head: dist/${file}`)
}
