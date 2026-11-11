import { useEffect } from 'react'
import { SEO, SITE } from '../config/site'

function setAttr(selector, attribute, value) {
  const element = document.head.querySelector(selector)
  if (element) element.setAttribute(attribute, value)
}

export function canonicalUrl(path) {
  return path === '/' ? `${SITE.origin}/` : `${SITE.origin}${path}`
}

export function useSeo(path) {
  useEffect(() => {
    const entry = SEO[path]
    if (!entry) return
    const url = canonicalUrl(path)
    document.title = entry.title
    setAttr('meta[name="description"]', 'content', entry.description)
    setAttr('link[rel="canonical"]', 'href', url)
    setAttr('meta[property="og:title"]', 'content', entry.title)
    setAttr('meta[property="og:description"]', 'content', entry.description)
    setAttr('meta[property="og:url"]', 'content', url)
  }, [path])
}

export function useNoIndex(title) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex'
    document.head.appendChild(meta)
    return () => {
      meta.remove()
      document.title = previousTitle
    }
  }, [title])
}
