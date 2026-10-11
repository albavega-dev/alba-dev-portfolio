export type Language = 'en' | 'es'

export type TranslationResources = {
  navbar: {
    about: string
    cv: string
    languageLabel: string
    english: string
    spanish: string
    changeLanguage: string
    currentLanguage: string
  }
  home: {
    name: string
    description: string
    roleDescriptors: string
    editorialLabel: string
  }
  footer: {
    contactLinks: string
    linkedinProfile: string
    email: string
  }
}
