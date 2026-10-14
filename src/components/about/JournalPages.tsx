
import type { ReactNode } from 'react'
import { UiCreativeCodingContent } from './UiCreativeCodingContent'
import { MusicContent } from './MusicContent'
import { useLanguage } from '../../i18n/useLanguage'


type JournalPageProps = {
  title: ReactNode
  children: ReactNode
  variant?: 'standard' | 'intro'
}


function JournalPage({
  title,
  children,
  variant = 'standard',
}: JournalPageProps) {
  return (
    <div
      className={`journal-page-content journal-page-content--${variant}`}
    >
      <h3 className="journal-page-title">
        {title}
      </h3>

      {children}
    </div>
  )
}


export function AboutPage() {
  const { translations } = useLanguage()
  return (
    <JournalPage title={translations.journal.pages.dearDiary.title}>
      <div className="journal-writing">
        <p>
          {translations.journal.pages.dearDiary.paragraph1}
        </p>

        <p>
          {translations.journal.pages.dearDiary.paragraph2}
        </p>
      </div>
    </JournalPage>
  )
}


export function InterestsIntroPage() {
  const { translations } = useLanguage()
  return (
    <JournalPage
        title={translations.journal.pages.interests.title}
        variant="intro"
    >
      <div className="journal-intro-divider" />

      <p className="journal-intro-description">
        {translations.journal.pages.interests.description}
      </p>

      <div className="journal-intro-scrapbook">
        <span
            className="journal-intro-tape"
            aria-hidden="true"
        />

        <span className="journal-intro-note-label">
            {translations.journal.pages.interests.noteLabel}
        </span>

        <p className="journal-intro-note">
            {translations.journal.pages.interests.note}
        </p>
    </div>
    </JournalPage>
  )
}


type InterestPageProps = {
  title: string
  icon: string
  description: string
}

function InterestPage({
  title,
  icon,
  description,
}: InterestPageProps) {
  return (
    <JournalPage title={title}>
      <div className="journal-interest">
        <div
          className="journal-interest-illustration"
          aria-hidden="true"
        >
          {icon}
        </div>

        <p className="journal-interest-description">
          {description}
        </p>

        <span
          className="journal-interest-decoration"
          aria-hidden="true"
        >
          ✧ · ♡ · ✧
        </span>
      </div>
    </JournalPage>
  )
}


export function GamingPage() {
  const { translations } = useLanguage()
  const gaming = translations.journal.pages.gaming
  return (
    <JournalPage
      title={
        <span className="journal-gaming-title">
          <span>{gaming.title}</span>

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path
              d="M12 5h3.5a5 5 0 0 1 0 10H10l-4.015 4.227a2.3 2.3 0 0 1-3.923-2.035l1.634-8.173A5 5 0 0 1 8.6 5H12"
            />
            <path d="m14 15 4.07 4.284a2.3 2.3 0 0 0 3.925-2.023l-1.6-8.232" />
            <path d="M8 9v2" />
            <path d="M7 10h2" />
            <path d="M14 10h2" />
          </svg>

        </span>
      }
    >
      <div className="journal-gaming">
        <div className="journal-gaming-sheet">

          <span
            className="journal-gaming-tape"
            aria-hidden="true"
          />

          <div className="journal-gaming-header">
            <div
                className="journal-gaming-avatar"
                aria-hidden="true"
                >
                <svg
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >

                    <path
                    d="
                        M32 8
                        C22 8 18 16 18 25
                        C18 32 22 37 26 40
                        L26 44
                        C23 46 17 47 12 51
                        C9 53 8 57 8 60
                        H56
                        C56 57 55 53 52 51
                        C47 47 41 46 38 44
                        L38 40
                        C42 37 46 32 46 25
                        C46 16 42 8 32 8
                        Z
                    "
                    fill="currentColor"
                    />
                </svg>
            </div>

            <div className="journal-gaming-identity">
              <span className="journal-gaming-label">
                {gaming.labels.characterName}
              </span>

              <span className="journal-gaming-name" aria-label="Alba">
                <span aria-hidden="true">A</span>
                <span aria-hidden="true">l</span>
                <span aria-hidden="true">b</span>
                <span aria-hidden="true">a</span>
              </span>

              <div className="journal-gaming-class">
                <span className="journal-gaming-label">
                    {gaming.labels.class}
                </span>

                <span className="journal-gaming-class-value">
                    {gaming.classValue}
                </span>
                </div>
            </div>
          </div>

            <div className="journal-gaming-section">
            <span className="journal-gaming-label">
                {gaming.labels.favouriteGenres}
            </span>

            <ul className="journal-gaming-genres">
                {gaming.genres.map((genre) => <li key={genre}>{genre}</li>)}
            </ul>
            </div>

          <div className="journal-gaming-section">
            <span className="journal-gaming-label">
              {gaming.labels.backstory}
            </span>

            <p className="journal-gaming-description">
              {gaming.backstory}
            </p>
          </div>

        </div>
      </div>
    </JournalPage>
  )
}


export function LiteraturePage() {
  const { translations } = useLanguage()
  const literature = translations.journal.pages.literature
  return (
    <JournalPage title={literature.title}>
      <div className="journal-literature-bookmark" aria-hidden="true">
        <span />
      </div>
      <div className="journal-literature">
        <p className="journal-literature-intro">
          {literature.intro}
        </p>
        <div className="journal-literature-journal" aria-label={literature.notesLabel}>
          <div className="journal-literature-paper">
            <p>{literature.endingsNote}</p>
          </div>

          <div className="journal-literature-sticky-outer">
            <div className="journal-literature-sticky">
              <span>{literature.stickyNote}</span>
            </div>
          </div>

        </div>
        <ReviewComment />
      </div>
    </JournalPage>
  )
}

function ReviewComment() {
  const { translations } = useLanguage()
  const literature = translations.journal.pages.literature
  const text = literature.reviewText

  return (
    <div className="journal-literature-comment" aria-label={literature.reviewsNoteLabel}>
      <div className="journal-literature-comment-meta">
        <span className="journal-literature-comment-avatar" aria-hidden="true">A</span>
        <span>Alba · {literature.metadataNow}</span>
      </div>
      <p className="journal-literature-comment-typing" aria-label={text}>
        {text.split('').map((character, index) => (
          <span
            key={`${character}-${index}`}
            aria-hidden="true"
            style={{ animationDelay: `${800 + index * 12}ms` }}
          >
            {character}
          </span>
        ))}
      </p>
      <button type="button">{literature.send}</button>
    </div>
  )
}


export function WritingPage() {
  return (
    <InterestPage
      title="Writing & Reviews"
      icon="✎"
      description="I enjoy putting my thoughts into words, sharing my impressions and writing about the stories and experiences that catch my attention."
    />
  )
}


export function DesignPage() {
  const { translations } = useLanguage()
  return (
    <JournalPage title={translations.journal.pages.uiDesign.title}>
      <UiCreativeCodingContent />
    </JournalPage>
  )
}


export function MusicPage() {
  const { translations } = useLanguage()
  return (
    <JournalPage title={translations.journal.pages.music.title}>
      <MusicContent />
    </JournalPage>
  )
}


export function ArtPage() {
  return (
    <InterestPage
      title="Art & Illustration"
      icon="🎨"
      description="I love exploring different artistic styles, discovering beautiful illustrations and finding inspiration in visual creativity."
    />
  )
}
