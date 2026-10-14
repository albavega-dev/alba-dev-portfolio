import { useEffect, useMemo, useState, type ReactNode } from 'react'
import { LANGUAGE_STORAGE_KEY, LanguageContext } from './LanguageContext'
import { translations } from './translations'
import type { Language } from './types'

function readStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return stored === 'es' ? 'es' : 'en'
  } catch {
    return 'en'
  }
}

type LanguageProviderProps = {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(readStoredLanguage)

  const setLanguage = (nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
    } catch {
      // Storage can be unavailable; the in-memory selection still applies.
    }
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(() => ({
    language,
    setLanguage,
    translations: translations[language],
  }), [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
