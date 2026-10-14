export type Language = 'en' | 'es';

type CVHeroTranslations = {
  kicker: string;
  title: string;
  intro: string;
  roleLabel: string;
  roleValue: string;
  experienceLabel: string;
  experienceValue: string;
  languageLabel: string;
  languageValue: string;
  institution: string;
  downloadsLabel: string;
};

type CVBankingTranslations = {
  date: string;
  title: string;
  role: string;
  description?: string;
  highlights: string[];
};

type CVEnergyTranslations = {
  date: string;
  title: string;
  role: string;
  description: string;
  highlights?: string[];
};

type CVEducationEntryTranslations = {
  date: string;
  title: string;
  institution: string;
};

type CVPersonalProjectTranslations = {
  date: string;
  title: string;
  context: string;
  description: string;
  note?: string;
  highlights?: string[];
};

type CVTimelineTranslations = {
  title: string;
  employerLabel: string;
  employerDate: string;
  studiesLabel: string;
  educationTitle: string;
  earlyLabel: string;
  earlyTitle: string;
  linkLabel: string;
  banking: CVBankingTranslations;
  energy: CVEnergyTranslations;
  education: {
    dam: CVEducationEntryTranslations;
    android: CVEducationEntryTranslations;
  };
  jamones: CVPersonalProjectTranslations & {
    note: string;
  };
  tinta: CVPersonalProjectTranslations & {
    highlights: string[];
  };
};

export type TranslationResources = {
  navbar: {
    about: string;
    cv: string;
    languageLabel: string;
    english: string;
    spanish: string;
    changeLanguage: string;
    currentLanguage: string;
  };
  home: {
    name: string;
    description: string;
    roleDescriptors: string;
    editorialLabel: string;
  };
  footer: {
    contactLinks: string;
    linkedinProfile: string;
    email: string;
  };
  about: {
    whoIAm: string;
    introduction: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
    profileImageAlt: string;
    toolkitTitle: string;
    categories: {
      frontend: string;
      backendData: string;
      devopsCicd: string;
      toolsEcosystem: string;
      qualityTesting: string;
      aiAssistedDevelopment: string;
    };
  };
  journal: {
    sectionTitle: string;
    cover: {
      title: string;
      openLabel: string;
    };
    navigation: {
      closeLabel: string;
      previousLabel: string;
      nextLabel: string;
      closedHint: string;
      firstPageHint: string;
      pageIndicator: string;
    };
    pages: {
      dearDiary: {
        title: string;
        paragraph1: string;
        paragraph2: string;
      };
      interests: {
        title: string;
        description: string;
        noteLabel: string;
        note: string;
      };
      gaming: {
        title: string;
        labels: {
          characterName: string;
          class: string;
          favouriteGenres: string;
          backstory: string;
        };
        classValue: string;
        genres: string[];
        backstory: string;
      };
      literature: {
        title: string;
        notesLabel: string;
        intro: string;
        endingsNote: string;
        stickyNote: string;
        reviewsNoteLabel: string;
        metadataNow: string;
        reviewText: string;
        send: string;
      };
      uiDesign: {
        title: string;
        intro: string;
        wireframeLabel: string;
        fromSketch: string;
        titleLabel: string;
        shortText: string;
        actions: string;
        toThis: string;
        smallCard: string;
        cardCopy: string;
        view: string;
        save: string;
        colours: string;
        paletteNote: string;
        toggleNote: string;
        darkMode: string;
        lightMode: string;
        buttonIdeas: string;
        defaultButton: string;
        hoverButton: string;
        ghostButton: string;
        subtleAnimations: string;
        cssNote: string;
        moveQuestion: string;
      };
      music: {
        title: string;
        intro: string;
        currentlyPlaying: string;
        trackName: string;
        guitarAlt: string;
        controls: {
          previous: string;
          play: string;
          pause: string;
          next: string;
        };
        pianoLabel: string;
        pianoKeyLabel: string;
      };
    };
  };
  cv: {
    hero: CVHeroTranslations;
    timeline: CVTimelineTranslations;
  };
};
