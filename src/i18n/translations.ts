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
  home: {
    name: 'Alba Vega',
    description: 'I build thoughtful web experiences where clean engineering meets expressive design.',
    roleDescriptors: 'frontend · full-stack ·',
    editorialLabel: 'CREATIVE',
  },
  footer: {
    contactLinks: 'Contact links',
    linkedinProfile: 'LinkedIn profile',
    email: 'Send me an email',
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
  home: {
    name: 'Alba Vega',
    description: 'Experiencias web con un desarrollo cuidado y un diseño lleno de personalidad.',
    roleDescriptors: 'frontend · full-stack ·',
    editorialLabel: 'CREATIVA',
  },
  footer: {
    contactLinks: 'Enlaces de contacto',
    linkedinProfile: 'Perfil de LinkedIn',
    email: 'Envíame un correo electrónico',
  },
}

export const translations: Record<Language, TranslationResources> = {
  en: english,
  es: spanish,
}
