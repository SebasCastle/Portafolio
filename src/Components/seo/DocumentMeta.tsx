import { useEffect } from "react"
import { siteConfig } from "@/data/site"
import { useI18n } from "@/i18n"

interface DocumentMetaProps {
  title?: string
  description?: string
  path?: string
  image?: string
  type?: "website" | "article"
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

export function DocumentMeta({
  title,
  description,
  path = "/",
  image = "/og.png",
  type = "website",
}: DocumentMetaProps) {
  const { t, locale } = useI18n()
  const resolvedDescription = description ?? t.meta.homeDescription

  useEffect(() => {
    const fullTitle = title
      ? `${title} · ${siteConfig.shortName}`
      : t.meta.homeTitle
    const url = `${siteConfig.url}${path}`
    const absoluteImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`

    document.title = fullTitle
    document.documentElement.lang = locale
    upsertMeta("name", "description", resolvedDescription)
    upsertMeta("name", "theme-color", siteConfig.themeColor)
    upsertMeta("property", "og:title", fullTitle)
    upsertMeta("property", "og:description", resolvedDescription)
    upsertMeta("property", "og:type", type)
    upsertMeta("property", "og:url", url)
    upsertMeta("property", "og:image", absoluteImage)
    upsertMeta("property", "og:locale", locale === "es" ? "es_ES" : "en_US")
    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", fullTitle)
    upsertMeta("name", "twitter:description", resolvedDescription)
    upsertMeta("name", "twitter:image", absoluteImage)
    upsertLink("canonical", url)
  }, [title, resolvedDescription, path, image, type, t.meta.homeTitle, locale])

  return null
}
