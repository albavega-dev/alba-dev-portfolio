
import type { ReactNode } from 'react'

type JournalPageProps = {
  number: string
  title: string
  children: ReactNode
  variant?: 'standard' | 'intro'
}

function JournalPage({
  number,
  title,
  children,
  variant = 'standard',
}: JournalPageProps) {
  return (
    <div
      className={`journal-page-content journal-page-content--${variant}`}
    >
      <span className="journal-page-number">
        {number}
      </span>

      <h3 className="journal-page-title">
        {title}
      </h3>

      {children}
    </div>
  )
}

export function AboutPage() {
  return (
    <JournalPage
      number="01 / ABOUT ME"
      title="Dear diary... ♡"
    >
      <div className="journal-writing">
        <p>
          Away from work, I'm usually playing something,
          getting lost in a good book, writing reviews or
          working on a new creative idea. I've always been
          drawn to storytelling, art and visual design,
          and I love finding little ways to bring those
          interests into the things I create.
        </p>

        <p>
          Whether I'm building an interface, experimenting
          with a new design or writing about something I
          enjoyed, I like paying attention to the little
          details that make something feel personal.
        </p>
      </div>

      <span className="journal-signature" aria-hidden="true">
        ✧ ♡
      </span>
    </JournalPage>
  )
}

export function InterestsIntroPage() {
  return (
    <JournalPage
      number="02 / A LITTLE MORE ABOUT ME"
      title="Things I Love"
      variant="intro"
    >
      <div className="journal-intro-decoration" aria-hidden="true">
        <span>✧</span>
        <span>♡</span>
        <span>✧</span>
      </div>

      <p className="journal-intro-description">
        A collection of little things that make me, me.
      </p>

      <span className="journal-intro-footer">
        Turn the page →
      </span>
    </JournalPage>
  )
}

type InterestPageProps = {
  number: string
  title: string
  icon: string
  description: string
}

function InterestPage({
  number,
  title,
  icon,
  description,
}: InterestPageProps) {
  return (
    <JournalPage number={number} title={title}>
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

        <span className="journal-interest-decoration" aria-hidden="true">
          ✧ · ♡ · ✧
        </span>
      </div>
    </JournalPage>
  )
}

export function GamingPage() {
  return (
    <InterestPage
      number="03 / MY FAVOURITES"
      title="Gaming"
      icon="🎮"
      description="Getting lost in new worlds, discovering stories and finding games that stay with me long after I've finished playing."
    />
  )
}

export function ReadingPage() {
  return (
    <InterestPage
      number="04 / MY FAVOURITES"
      title="Literature & Reading"
      icon="📖"
      description="There's something special about getting completely absorbed in a good book and discovering new worlds through words."
    />
  )
}

export function WritingPage() {
  return (
    <InterestPage
      number="05 / MY FAVOURITES"
      title="Writing & Reviews"
      icon="✎"
      description="I enjoy putting my thoughts into words, sharing my impressions and writing about the stories and experiences that catch my attention."
    />
  )
}

export function DesignPage() {
  return (
    <InterestPage
      number="06 / MY FAVOURITES"
      title="UI Design & Creative Coding"
      icon="✧"
      description="I love experimenting with layouts, colours, animations and small creative projects where design and code come together."
    />
  )
}

export function MusicPage() {
  return (
    <InterestPage
      number="07 / MY FAVOURITES"
      title="Music"
      icon="♫"
      description="Music is one of those little things that can make an ordinary day feel completely different."
    />
  )
}

export function ArtPage() {
  return (
    <InterestPage
      number="08 / MY FAVOURITES"
      title="Art & Illustration"
      icon="🎨"
      description="I love exploring different artistic styles, discovering beautiful illustrations and finding inspiration in visual creativity."
    />
  )
}