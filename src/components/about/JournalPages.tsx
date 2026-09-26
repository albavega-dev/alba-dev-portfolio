
import type { ReactNode } from 'react'
import { UiCreativeCodingContent } from './UiCreativeCodingContent'
import { MusicContent } from './MusicContent'

/* =========================================
   JOURNAL PAGE TYPES
========================================= */

type JournalPageProps = {
  title: ReactNode
  children: ReactNode
  variant?: 'standard' | 'intro'
}

/* =========================================
   JOURNAL PAGE COMPONENT
========================================= */

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

/* =========================================
   ABOUT ME
========================================= */

export function AboutPage() {
  return (
    <JournalPage title="Dear diary...">
      <div className="journal-writing">
        <p>
          When I'm not working, I'm usually playing video games,
          reading, writing reviews or getting caught up in
          whatever has sparked my interest lately. I've always
          loved stories, whether I'm experiencing them through
          a game, reading a book or writing about them myself.
        </p>

        <p>
          I also have a background in music and a keen interest
          in art and visual design. I enjoy experimenting with
          different creative ideas and I can spend an unreasonable
          amount of time tweaking a layout until it looks
          exactly how I imagined it.
        </p>
      </div>
    </JournalPage>
  )
}

/* =========================================
   THINGS I LOVE - INTRODUCTION
========================================= */

export function InterestsIntroPage() {
  return (
    <JournalPage
        title="My interests"
        variant="intro"
    >
      <div className="journal-intro-divider" />

      <p className="journal-intro-description">
        There's more to life than debugging.
        Apparently.
      </p>

      {/* Scrapbook note */}

      <div className="journal-intro-scrapbook">
        <span
            className="journal-intro-tape"
            aria-hidden="true"
        />

        <span className="journal-intro-note-label">
            PERSONAL ARCHIVES
        </span>

        <p className="journal-intro-note">
            A few things that didn't make it into the README.
        </p>
    </div>
    </JournalPage>
  )
}

/* =========================================
   INDIVIDUAL INTEREST PAGE
========================================= */

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

/* =========================================
   GAMING - CHARACTER SHEET
========================================= */

export function GamingPage() {
  return (
    <JournalPage
      title={
        <span className="journal-gaming-title">
          <span>Gaming</span>

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

          {/* Washi tape */}

          <span
            className="journal-gaming-tape"
            aria-hidden="true"
          />

          {/* Character identity */}

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
                    {/* Character silhouette */}

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
                CHARACTER NAME
              </span>

              <span className="journal-gaming-name" aria-label="Alba">
                <span aria-hidden="true">A</span>
                <span aria-hidden="true">l</span>
                <span aria-hidden="true">b</span>
                <span aria-hidden="true">a</span>
              </span>

              <div className="journal-gaming-class">
                <span className="journal-gaming-label">
                    CLASS:
                </span>

                <span className="journal-gaming-class-value">
                    Healer
                </span>
                </div>
            </div>
          </div>

          {/* Favourite genres */}

            <div className="journal-gaming-section">
            <span className="journal-gaming-label">
                FAVOURITE GENRES
            </span>

            <ul className="journal-gaming-genres">
                <li>RPGs</li>
                <li>Visual novels</li>
                <li>MMOs</li>
            </ul>
            </div>

          {/* Character backstory */}

          <div className="journal-gaming-section">
            <span className="journal-gaming-label">
              CHARACTER BACKSTORY
            </span>

            <p className="journal-gaming-description">
              I've been playing video games for as long as
              I can remember. I particularly enjoy
              story-driven games, RPGs and visual novels,
              but I also love the challenge of high-end
              content in MMOs.
            </p>
          </div>

        </div>
      </div>
    </JournalPage>
  )
}

/* =========================================
   LITERATURE & READING
========================================= */

export function LiteraturePage() {
  return (
    <JournalPage title="Literature">
      <div className="journal-literature-bookmark" aria-hidden="true">
        <span />
      </div>
      <div className="journal-literature">
        <p className="journal-literature-intro">
          Reading is one of my favourite hobbies. My taste in books is pretty varied, although I have a particular soft spot for science fiction, fantasy and horror.
        </p>
        <div className="journal-literature-journal" aria-label="Reading journal notes">
          <div className="journal-literature-paper">
            <p>I don't need every story to have a happy ending. I just need the ending to make sense.</p>
          </div>

          <div className="journal-literature-sticky-outer">
            <div className="journal-literature-sticky">
              <span>Apparently, I have a thing for fictional worlds where everything goes wrong.</span>
            </div>
          </div>

        </div>
        <ReviewComment />
      </div>
    </JournalPage>
  )
}

function ReviewComment() {
  const text = 'I also enjoy writing reviews and sharing my thoughts on the stories I experience, from books to video games.'

  return (
    <div className="journal-literature-comment" aria-label="Writing reviews note">
      <div className="journal-literature-comment-meta">
        <span className="journal-literature-comment-avatar" aria-hidden="true">A</span>
        <span>Alba · now</span>
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
      <button type="button">Send</button>
    </div>
  )
}

/* =========================================
   WRITING & REVIEWS
========================================= */

export function WritingPage() {
  return (
    <InterestPage
      title="Writing & Reviews"
      icon="✎"
      description="I enjoy putting my thoughts into words, sharing my impressions and writing about the stories and experiences that catch my attention."
    />
  )
}

/* =========================================
   UI DESIGN & CREATIVE CODING
========================================= */

export function DesignPage() {
  return (
    <JournalPage title="UI Design & Creative Coding">
      <UiCreativeCodingContent />
    </JournalPage>
  )
  /*
  return (
    <InterestPage
      title="UI Design & Creative Coding"
      icon="✧"
      description="I love experimenting with layouts, colours, animations and small creative projects where design and code come together."
    />
  ) */
}

/* =========================================
   MUSIC
========================================= */

export function MusicPage() {
  return (
    <JournalPage title="Music">
      <MusicContent />
    </JournalPage>
  )
  /*
  return (
    <InterestPage
      title="Music"
      icon="♫"
      description="Music is one of those little things that can make an ordinary day feel completely different."
    />
  )
  */
}

/* =========================================
   ART & ILLUSTRATION
========================================= */

export function ArtPage() {
  return (
    <InterestPage
      title="Art & Illustration"
      icon="🎨"
      description="I love exploring different artistic styles, discovering beautiful illustrations and finding inspiration in visual creativity."
    />
  )
}
