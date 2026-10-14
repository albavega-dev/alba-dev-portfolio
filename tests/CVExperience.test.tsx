import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import CVExperience from '../src/pages/cv/CVExperience'
import { LanguageProvider } from '../src/i18n/LanguageProvider'
import { useLanguage } from '../src/i18n/useLanguage'

function LanguageControls() {
  const { setLanguage } = useLanguage()

  return (
    <>
      <button type="button" onClick={() => setLanguage('es')}>Español</button>
      <button type="button" onClick={() => setLanguage('en')}>English</button>
    </>
  )
}

describe('CV Experience translations', () => {
  it('renders Spanish education and personal-project content and restores English', async () => {
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <LanguageControls />
        <CVExperience />
      </LanguageProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Español' }))

    expect(screen.getByText('Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)')).toBeInTheDocument()
    expect(screen.getByText('Desarrolladora Java para Android')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Donde empezó todo' })).toBeInTheDocument()
    expect(screen.getByText('Creé este blog para el pequeño negocio familiar de mis padres allá por 2015 y a día de hoy sigue en pie. Mi madre lo mantiene vivo y ha rechazado todos y cada uno de mis intentos de renovarlo o hacerle una web nueva.')).toBeInTheDocument()
    expect(screen.getByText('Supongo que las páginas web también cuentan como manualidades infantiles cuando tu hija resulta ser desarrolladora.')).toBeInTheDocument()
    expect(screen.getByText('Empezó cuando apenas era una adolescente, como un pequeño espacio personal dedicado a los libros y la escritura. Con los años se convirtió en un blog con reseñas, relatos escritos por mí y colaboraciones con editoriales de libros y manga.')).toBeInTheDocument()
    expect(screen.getByText('285K+ visitas')).toBeInTheDocument()
    expect(screen.getByText('Finalista de Queestasleyendo')).toBeInTheDocument()
    expect(screen.getByText('Colaboraciones con editoriales')).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Visitar el blog original ↗' })).toHaveLength(2)

    await user.click(screen.getByRole('button', { name: 'English' }))

    expect(screen.getByText('Higher Technician in Multiplatform Application Development (DAM)')).toBeInTheDocument()
    expect(screen.getByText('Java Developer for Android')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Where It All Started' })).toBeInTheDocument()
    expect(screen.getByText("I made this blog for my parents' small business back in 2015 and somehow it's still going strong. My mum is the one keeping it alive these days and she has turned down every single one of my attempts to revamp it or build her something new.")).toBeInTheDocument()
  })
})
