import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

import Footer from '../src/components/layout/Footer'
import Hero from '../src/components/home/Hero'
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

describe('Home and Footer translations', () => {
  afterEach(cleanup)
  beforeEach(() => localStorage.clear())

  it('renders the approved English Home copy by default', () => {
    render(<LanguageProvider><Hero /></LanguageProvider>)

    expect(screen.getByText('I build thoughtful web experiences where clean engineering meets expressive design.')).toBeInTheDocument()
    expect(screen.getByText('CREATIVE')).toBeInTheDocument()
    expect(screen.getByText('frontend · full-stack ·')).toBeInTheDocument()
  })

  it('updates Home and Footer copy in Spanish without navigation', async () => {
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <LanguageTestControl />
        <Hero />
        <Footer />
      </LanguageProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Español' }))

    expect(screen.getByText('Experiencias web con un desarrollo cuidado y un diseño lleno de personalidad.')).toBeInTheDocument()
    expect(screen.getByText('CREATIVA')).toBeInTheDocument()
    expect(screen.getByText('frontend · full-stack ·')).toBeInTheDocument()
    expect(screen.getByRole('group', { name: 'Enlaces de contacto' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Perfil de LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/alba-vega-calzado-7b976611a/')
    expect(screen.getByRole('link', { name: 'Envíame un correo electrónico' })).toHaveAttribute('href', 'mailto:avegac14@gmail.com')
  })
})
