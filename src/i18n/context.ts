import { createContext } from "react"
import type { Dictionary } from "./dictionaries"
import type { Locale } from "./types"

export type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
  cvUrl: string
}

export const I18nContext = createContext<I18nContextValue | null>(null)
