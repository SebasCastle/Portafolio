import { useEffect } from "react"
import { siteConfig } from "@/data/site"

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
  description = siteConfig.description,
  path = "/",
  image = "/og.png",
  type = "website",
}: DocumentMetaProps) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} · ${siteConfig.shortName}`
      : `${siteConfig.shortName} | Creando soluciones digitales`
    const url = `${siteConfig.url}${path}`
    const absoluteImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`

    document.title = fullTitle
    upsertMeta("name", "description", description)
    upsertMeta("name", "theme-color", siteConfig.themeColor)
    upsertMeta("property", "og:title", fullTitle)
    upsertMeta("property", "og:description", description)
    upsertMeta("property", "og:type", type)
    upsertMeta("property", "og:url", url)
    upsertMeta("property", "og:image", absoluteImage)
    upsertMeta("name", "twitter:card", "summary_large_image")
    upsertMeta("name", "twitter:title", fullTitle)
    upsertMeta("name", "twitter:description", description)
    upsertMeta("name", "twitter:image", absoluteImage)
    upsertLink("canonical", url)
  }, [title, description, path, image, type])

  return null
}
