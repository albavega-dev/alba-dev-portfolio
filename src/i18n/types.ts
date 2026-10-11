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
  about: {
    whoIAm: string
    introduction: {
      paragraph1: string
      paragraph2: string
      paragraph3: string
    }
    profileImageAlt: string
    toolkitTitle: string
    categories: {
      frontend: string
      backendData: string
      devopsCicd: string
      toolsEcosystem: string
      qualityTesting: string
      aiAssistedDevelopment: string
    }
  }
}
