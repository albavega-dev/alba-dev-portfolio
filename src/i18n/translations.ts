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
  about: {
    whoIAm: 'Who I am',
    introduction: {
      paragraph1: "I'm Alba, a full-stack developer with a strong frontend focus. I've spent most of my professional career working with Angular, JavaScript and TypeScript, alongside Java and Spring Boot on the backend.",
      paragraph2: 'I enjoy working on interfaces and turning ideas into something that actually feels good to use. I care about clean code, but I also care about how things look, how they feel and all those little details that make an interface more enjoyable.',
      paragraph3: "Most of my professional experience comes from large corporate projects and Agile teams, but I've also done my fair share of learning on my own, experimenting with new technologies and figuring things out as I go.",
    },
    profileImageAlt: 'Alba, full-stack developer',
    toolkitTitle: 'My Developer Toolkit',
    categories: {
      frontend: 'Frontend',
      backendData: 'Backend & Data',
      devopsCicd: 'DevOps & CI/CD',
      toolsEcosystem: 'Tools & Ecosystem',
      qualityTesting: 'Quality & Testing',
      aiAssistedDevelopment: 'AI-Assisted Development',
    },
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
  about: {
    whoIAm: 'Quién soy',
    introduction: {
      paragraph1: 'Soy Alba, desarrolladora full-stack especializada en Angular, JavaScript y TypeScript, con experiencia también en backend utilizando Java y Spring Boot.',
      paragraph2: 'Disfruto creando interfaces y convirtiendo ideas en experiencias que resulten agradables de usar. Creo que es importante escribir código limpio, pero también cuidar el diseño, la experiencia de usuario y esos pequeños detalles que marcan la diferencia.',
      paragraph3: 'Mi experiencia profesional se ha desarrollado principalmente en grandes proyectos empresariales y equipos ágiles, pero también me gusta aprender por mi cuenta, experimentar con nuevas tecnologías y descubrir cosas nuevas sobre la marcha.',
    },
    profileImageAlt: 'Alba, desarrolladora full-stack',
    toolkitTitle: 'Mis herramientas de desarrollo',
    categories: {
      frontend: 'Frontend',
      backendData: 'Backend y datos',
      devopsCicd: 'DevOps y CI/CD',
      toolsEcosystem: 'Herramientas y ecosistema',
      qualityTesting: 'Calidad y testing',
      aiAssistedDevelopment: 'Desarrollo asistido por IA',
    },
  },
}

export const translations: Record<Language, TranslationResources> = {
  en: english,
  es: spanish,
}
