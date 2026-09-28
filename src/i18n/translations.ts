import type { Language, TranslationResources } from './types'

const english: TranslationResources = {
  navbar: {
    about: 'About Me',
    cv: 'CV',
    languageLabel: 'Language',
    english: 'English',
    spanish: 'Spanish',
    changeLanguage: 'Change language',
    currentLanguage: 'Current language',
  },
}

const spanish: TranslationResources = {
  navbar: {
    about: 'Sobre mí',
    cv: 'CV',
    languageLabel: 'Idioma',
    english: 'Inglés',
    spanish: 'Español',
    changeLanguage: 'Cambiar idioma',
    currentLanguage: 'Idioma actual',
  },
}

export const translations: Record<Language, TranslationResources> = {
  en: english,
  es: spanish,
}
