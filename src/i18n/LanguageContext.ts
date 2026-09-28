import { createContext } from 'react'
import type { Language } from './types'
import { translations } from './translations'

export const LANGUAGE_STORAGE_KEY = 'alba-dev-language'

export type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  translations: typeof translations[Language]
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
