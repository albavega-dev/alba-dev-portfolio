import { useState, type MouseEvent } from 'react'

export function UiCreativeCodingContent() {
  const [darkPreview, setDarkPreview] = useState(false)
  const stop = (event: MouseEvent) => event.stopPropagation()
  return (
    <div className="journal-ui-design">
      <p className="journal-ui-design-intro">I like experimenting with interfaces just to see what I can make them do. Give me an idea and I'll probably start wondering how I could make it look a little more interesting.</p>
      <div className="journal-ui-flow">
        <div className="journal-ui-wireframe" aria-label="Hand-drawn interface wireframe"><strong>From sketch...</strong><span className="journal-ui-wireframe-image" /><i /><i /><i className="short" /><b /><b className="second" /><span className="journal-ui-wire-note journal-ui-wire-note--title">title</span><span className="journal-ui-wire-note journal-ui-wire-note--copy">short text</span><span className="journal-ui-wire-note journal-ui-wire-note--actions">actions?</span></div>
        <span className="journal-ui-flow-arrow" aria-hidden="true">↝</span><span className="journal-ui-flow-label">...to this!</span>
        <div className={`journal-ui-card-preview ${darkPreview ? 'is-dark' : ''}`}><span className="journal-ui-card-image" aria-hidden="true" /><div><strong>Small card</strong><small>A simple component<br />with a few interactions.</small></div><div className="journal-ui-card-actions"><button type="button" onClick={stop}>View <span className="journal-ui-view-arrow" aria-hidden="true">↗</span></button><button type="button" className="ghost" onClick={stop}>Save ♡</button></div></div>
      </div>
      <div className="journal-ui-mid-row"><div className="journal-ui-palette-note"><strong>Colours</strong><div className="journal-ui-palette-swatches"><span data-color="#f3d6e5" aria-label="#f3d6e5">#f3d6e5</span><span data-color="#e5ddf4" aria-label="#e5ddf4">#e5ddf4</span><span data-color="#b9a5d6" aria-label="#b9a5d6">#b9a5d6</span><span data-color="#695477" aria-label="#695477">#695477</span></div><em>main palette<br />for the journal</em></div><div className="journal-ui-toggle-note"><span>Toggle with a little effect</span><button type="button" className={`journal-ui-toggle ${darkPreview ? 'is-on' : ''}`} aria-pressed={darkPreview} onClick={(event) => { stop(event); setDarkPreview((value) => !value) }}><span aria-hidden="true" /></button><small>{darkPreview ? 'dark mode' : 'light mode'}</small></div></div>
      <div className="journal-ui-bottom-row"><div className="journal-ui-button-note"><strong>Button ideas</strong><div><button type="button" className="journal-ui-demo-button">Default</button><button type="button" className="journal-ui-demo-button hover-demo">Hover</button><button type="button" className="journal-ui-demo-button ghost-demo">Ghost</button></div><em>subtle animations<br />make a big difference</em></div><div className="journal-ui-css-note"><strong>a bit of CSS...</strong><code>.button {`{`}<br />&nbsp; transition: transform .2s ease;<br />{`}`}.button:hover {`{`}<br />&nbsp; transform: translateY(-2px);<br />{`}`}</code></div></div>
      <span className="journal-ui-question">what if I make it move? ↗</span><span className="journal-ui-spacing journal-ui-spacing--one">16px</span><span className="journal-ui-spacing journal-ui-spacing--two">24px</span>
    </div>
  )
}
