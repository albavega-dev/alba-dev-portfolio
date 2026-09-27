import PageContainer from '../../components/layout/PageContainer'
import { IconChartLine, IconDeviceDesktopCode, IconDownload, IconWorld } from '@tabler/icons-react'
import CVExperience from './CVExperience'
import './CV.css'

function CV() {
  return (
    <PageContainer>
      <main className="cv-page">
        <section className="cv-hero">
          <header className="cv-header">
          <div className="cv-header-copy">
            <p className="cv-kicker"><span>Professional overview</span></p>
            <h1>Curriculum Vitae</h1>
            <p className="cv-intro">5+ years building and evolving enterprise applications, with a strong focus on frontend development.</p>
            <dl className="cv-meta">
              <div><dt><IconDeviceDesktopCode className="cv-meta-icon" size="1.35rem" stroke={1.5} aria-hidden="true" />Role</dt><dd>Full-Stack Developer</dd></div>
              <div><dt><IconChartLine className="cv-meta-icon" size="1.35rem" stroke={1.5} aria-hidden="true" />Experience</dt><dd>5+ years</dd></div>
              <div><dt><IconWorld className="cv-meta-icon" size="1.35rem" stroke={1.5} aria-hidden="true" />English</dt><dd>C1 <span>(Cambridge)</span></dd></div>
            </dl>
            <div className="cv-downloads" aria-label="CV downloads">
              <div className="cv-download-links">
                <a href="/Alba_Vega_CV_EN.pdf" download="Alba_Vega_CV_EN.pdf">Download CV (English) <IconDownload size={17} stroke={1.7} aria-hidden="true" /></a>
                <a href="/Alba_Vega_CV_ES.pdf" download="Alba_Vega_CV_ES.pdf">Descargar CV (Español) <IconDownload size={17} stroke={1.7} aria-hidden="true" /></a>
              </div>
            </div>
          </div>

          <div className="cv-header-right">
            <div className="cv-document-art" aria-hidden="true">
            <div className="cv-document-sheet cv-document-sheet--back" />
            <div className="cv-document-sheet cv-document-sheet--middle" />
            <div className="cv-document-sheet cv-document-sheet--front">
              <span className="cv-document-kicker">CV</span>
              <strong>FULL-STACK<br />DEVELOPER</strong>
              <span className="cv-document-rule cv-document-rule--long" />
              <span className="cv-document-rule cv-document-rule--medium" />
              <span className="cv-document-rule cv-document-rule--short" />
              <img src="/images/feather.svg" alt="" />
            </div>
          </div>
          </div>
          </header>
          <div className="cv-flight-decoration" aria-hidden="true">
            <svg className="cv-flight-path" viewBox="0 0 1000 90" preserveAspectRatio="none">
              <path d="M4 32 C84 78 142 76 196 48 C238 26 278 38 300 62 C325 88 370 76 420 48 C478 15 524 26 562 58 C606 94 660 78 710 48 C760 18 812 32 842 56 C880 86 914 75 948 54" />
            </svg>
            <img className="cv-flight-bird" src="/images/flying-bird.svg" alt="" />
          </div>
        </section>
        <CVExperience />
      </main>
    </PageContainer>
  )
}

export default CV


