export type Locale = "en" | "es"

export const LOCALES: readonly Locale[] = ["en", "es"] as const

export const DEFAULT_LOCALE: Locale = "en"

export const LOCALE_STORAGE_KEY = "portfolio-locale"

export const CV_URLS: Record<Locale, string> = {
  en: "/cv/Sebastian_Castillo_Zamudio_CV_EN.pdf",
  es: "/cv/Sebastian_Castillo_Zamudio_CV_ES.pdf",
}

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "es"
}
