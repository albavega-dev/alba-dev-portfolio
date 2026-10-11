import { useState, type MouseEvent } from 'react'
import { useLanguage } from '../../i18n/useLanguage'

export function UiCreativeCodingContent() {
  const { translations } = useLanguage()
  const ui = translations.journal.pages.uiDesign
  const [darkPreview, setDarkPreview] = useState(false)
  const stop = (event: MouseEvent) => event.stopPropagation()
  return (
    <div className="journal-ui-design">
      <p className="journal-ui-design-intro">{ui.intro}</p>
      <div className="journal-ui-flow">
        <div className="journal-ui-wireframe" aria-label={ui.wireframeLabel}><strong>{ui.fromSketch}</strong><span className="journal-ui-wireframe-image" /><i /><i /><i className="short" /><b /><b className="second" /><span className="journal-ui-wire-note journal-ui-wire-note--title">{ui.titleLabel}</span><span className="journal-ui-wire-note journal-ui-wire-note--copy">{ui.shortText}</span><span className="journal-ui-wire-note journal-ui-wire-note--actions">{ui.actions}</span></div>
        <span className="journal-ui-flow-arrow" aria-hidden="true">↝</span><span className="journal-ui-flow-label">{ui.toThis}</span>
        <div className={`journal-ui-card-preview ${darkPreview ? 'is-dark' : ''}`}><span className="journal-ui-card-image" aria-hidden="true" /><div><strong>{ui.smallCard}</strong><small>{ui.cardCopy}</small></div><div className="journal-ui-card-actions"><button type="button" onClick={stop}>{ui.view} <span className="journal-ui-view-arrow" aria-hidden="true">↗</span></button><button type="button" className="ghost" onClick={stop}>{ui.save}</button></div></div>
      </div>
      <div className="journal-ui-mid-row"><div className="journal-ui-palette-note"><strong>{ui.colours}</strong><div className="journal-ui-palette-swatches"><span data-color="#f3d6e5" aria-label="#f3d6e5">#f3d6e5</span><span data-color="#e5ddf4" aria-label="#e5ddf4">#e5ddf4</span><span data-color="#b9a5d6" aria-label="#b9a5d6">#b9a5d6</span><span data-color="#695477" aria-label="#695477">#695477</span></div><em>{ui.paletteNote}</em></div><div className="journal-ui-toggle-note"><span>{ui.toggleNote}</span><button type="button" className={`journal-ui-toggle ${darkPreview ? 'is-on' : ''}`} aria-pressed={darkPreview} onClick={(event) => { stop(event); setDarkPreview((value) => !value) }}><span aria-hidden="true" /></button><small>{darkPreview ? ui.darkMode : ui.lightMode}</small></div></div>
      <div className="journal-ui-bottom-row"><div className="journal-ui-button-note"><strong>{ui.buttonIdeas}</strong><div><button type="button" className="journal-ui-demo-button">{ui.defaultButton}</button><button type="button" className="journal-ui-demo-button hover-demo">{ui.hoverButton}</button><button type="button" className="journal-ui-demo-button ghost-demo">{ui.ghostButton}</button></div><em>{ui.subtleAnimations}</em></div><div className="journal-ui-css-note"><strong>{ui.cssNote}</strong><code>.button {`{`}<br />&nbsp; transition: transform .2s ease;<br />{`}`}.button:hover {`{`}<br />&nbsp; transform: translateY(-2px);<br />{`}`}</code></div></div>
      <span className="journal-ui-question">{ui.moveQuestion} ↗</span><span className="journal-ui-spacing journal-ui-spacing--one">16px</span><span className="journal-ui-spacing journal-ui-spacing--two">24px</span>
    </div>
  )
}
