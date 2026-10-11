import { useEffect, useState, type MouseEvent } from 'react'
import { MusicPiano } from './MusicPiano'
import { useLanguage } from '../../i18n/useLanguage'

export function MusicContent() {
  const { translations } = useLanguage()
  const music = translations.journal.pages.music
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(32)
  const [noteActive, setNoteActive] = useState(false)
  useEffect(() => { if (!playing) return; const timer = window.setInterval(() => setProgress((value) => value >= 96 ? 8 : value + 1), 900); return () => window.clearInterval(timer) }, [playing])
  const stop = (event: MouseEvent) => event.stopPropagation()
  const animateNote = () => { setNoteActive(false); window.requestAnimationFrame(() => setNoteActive(true)); window.setTimeout(() => setNoteActive(false), 280) }
  return <div className="journal-music">
    <div className="journal-music-score" aria-hidden="true"><img src="/images/music/treble-clef-empty-staff.svg" alt="" /><img className={`journal-music-note journal-music-note--one ${noteActive ? 'is-active' : ''}`} src="/images/music/music-eighthnote.svg" alt="" /></div>
    <p className="journal-music-intro">{music.intro}</p>
    <section className="journal-music-piano"><MusicPiano onKeyPress={animateNote} /></section>
    <section className="journal-music-guitar"><img src="/images/music/acoustic-guitar.svg" alt={music.guitarAlt} /></section>
    <div className="journal-music-player"><h4>{music.currentlyPlaying}</h4><div className="journal-music-player-body"><span className="journal-music-art" aria-hidden="true"><i /><b /></span><div className="journal-music-track"><strong>{music.trackName}</strong><div className="journal-music-progress"><span style={{ width: `${progress}%` }} /><i style={{ left: `${progress}%` }} /></div></div></div><div className="journal-music-controls"><button type="button" aria-label={music.controls.previous} onClick={stop}><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4 3v10M12 4 6 8l6 4z" /></svg></button><button type="button" className="journal-music-play" aria-label={playing ? music.controls.pause : music.controls.play} onClick={(event) => { stop(event); setPlaying((value) => !value) }}><svg viewBox="0 0 16 16" aria-hidden="true">{playing ? <path d="M5 3v10M11 3v10" /> : <path d="m5 3 7 5-7 5z" />}</svg></button><button type="button" aria-label={music.controls.next} onClick={stop}><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M12 3v10M4 4l6 4-6 4z" /></svg></button></div></div>
  </div>
}
