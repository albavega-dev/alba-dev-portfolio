import type { ReactNode } from 'react'

import {
  AboutPage,
  InterestsIntroPage,
  GamingPage,
  LiteraturePage,
  DesignPage,
  MusicPage,
} from './JournalPages'

export type JournalPageDefinition = {
  id: 'dear-diary' | 'my-interests' | 'gaming' | 'literature' | 'ui-design' | 'music'
  render: () => ReactNode
}

export const journalPages: JournalPageDefinition[] = [
  { id: 'dear-diary', render: () => <AboutPage /> },
  { id: 'my-interests', render: () => <InterestsIntroPage /> },
  { id: 'gaming', render: () => <GamingPage /> },
  { id: 'literature', render: () => <LiteraturePage /> },
  { id: 'ui-design', render: () => <DesignPage /> },
  { id: 'music', render: () => <MusicPage /> },
]

export function spreadForPage(pageIndex: number) {
  return Math.floor(pageIndex / 2)
}

export function pagesForSpread(spreadIndex: number) {
  return [spreadIndex * 2, spreadIndex * 2 + 1] as const
}
