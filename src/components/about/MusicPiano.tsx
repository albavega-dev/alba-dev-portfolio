import { useState, type KeyboardEvent, type PointerEvent } from 'react'
import { useLanguage } from '../../i18n/useLanguage'

const whiteKeys = Array.from({ length: 10 }, (_, index) => index)
const blackPositions = [0, 1, 3, 4, 5, 7, 8]

type MusicPianoProps = { onKeyPress?: () => void }

export function MusicPiano({ onKeyPress }: MusicPianoProps) {
  const { translations } = useLanguage()
  const labels = translations.journal.pages.music
  const [pressed, setPressed] = useState<number | null>(null)
  const pressKey = (key: number) => { setPressed(key); onKeyPress?.() }
  return <div className="journal-music-keyboard" aria-label={labels.pianoLabel}>
    <div className="journal-music-white-keys">{whiteKeys.map((key) => <button key={key} type="button" className={`journal-music-white-key ${pressed === key ? 'is-pressed' : ''}`} aria-label={labels.pianoKeyLabel} onPointerDown={(event: PointerEvent<HTMLButtonElement>) => { event.stopPropagation(); pressKey(key) }} onPointerUp={(event) => { event.stopPropagation(); setPressed(null) }} onPointerLeave={() => setPressed(null)} onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => { if (event.key === 'Enter' || event.key === ' ') { event.stopPropagation(); pressKey(key) } }} onKeyUp={() => setPressed(null)} />)}</div>
    <div className="journal-music-black-keys" aria-hidden="true">{blackPositions.map((position) => <span key={position} style={{ left: `${(position + 1) * 9.09 - 2.7}%` }} />)}</div>
  </div>
}
