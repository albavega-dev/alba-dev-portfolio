import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import About from '../src/pages/about/About'
import { LanguageProvider } from '../src/i18n/LanguageProvider'
import { useLanguage } from '../src/i18n/useLanguage'

function LanguageTestControl() {
  const { setLanguage } = useLanguage()
  return (
    <div>
      <button type="button" onClick={() => setLanguage('en')}>English</button>
      <button type="button" onClick={() => setLanguage('es')}>Español</button>
    </div>
  )
}

describe('About translations', () => {
  afterEach(cleanup)
  beforeEach(() => localStorage.clear())

  it('renders the approved English introduction and toolkit by default', () => {
    render(<LanguageProvider><About /></LanguageProvider>)

    expect(screen.getByText('Who I am')).toBeInTheDocument()
    expect(screen.getByText(/working with Angular, JavaScript and TypeScript/)).toBeInTheDocument()
    expect(screen.getByText('My Developer Toolkit')).toBeInTheDocument()
    expect(screen.getByText('Backend & Data')).toBeInTheDocument()
    expect(screen.getByAltText('Alba, full-stack developer')).toBeInTheDocument()
    expect(screen.getByText('Angular')).toBeInTheDocument()
  })

  it('updates the introduction, toolkit labels and profile alt text in Spanish', async () => {
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <LanguageTestControl />
        <About />
      </LanguageProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Español' }))

    expect(screen.getByText('Quién soy')).toBeInTheDocument()
    expect(screen.getByText('Soy Alba, desarrolladora full-stack especializada en Angular, JavaScript y TypeScript, con experiencia también en backend utilizando Java y Spring Boot.')).toBeInTheDocument()
    expect(screen.getByText('Disfruto creando interfaces y convirtiendo ideas en experiencias que resulten agradables de usar. Creo que es importante escribir código limpio, pero también cuidar el diseño, la experiencia de usuario y esos pequeños detalles que marcan la diferencia.')).toBeInTheDocument()
    expect(screen.getByText('Mi experiencia profesional se ha desarrollado principalmente en grandes proyectos empresariales y equipos ágiles, pero también me gusta aprender por mi cuenta, experimentar con nuevas tecnologías y descubrir cosas nuevas sobre la marcha.')).toBeInTheDocument()
    expect(screen.getByText('Mis herramientas de desarrollo')).toBeInTheDocument()
    expect(screen.getByText('Herramientas y ecosistema')).toBeInTheDocument()
    expect(screen.getByAltText('Alba, desarrolladora full-stack')).toBeInTheDocument()
    expect(screen.getByText('Angular')).toBeInTheDocument()
  })
})
