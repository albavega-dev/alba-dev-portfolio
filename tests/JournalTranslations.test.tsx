import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import { LiteraturePage, DesignPage } from '../src/components/about/JournalPages'
import { LanguageProvider } from '../src/i18n/LanguageProvider'
import { useLanguage } from '../src/i18n/useLanguage'

function Controls() {
  const { setLanguage } = useLanguage()
  return <button type="button" onClick={() => setLanguage('es')}>Español</button>
}

describe('journal translation content', () => {
  it('updates Literature and UI Design content in Spanish', async () => {
    const user = userEvent.setup()
    render(<LanguageProvider><Controls /><LiteraturePage /><DesignPage /></LanguageProvider>)
    await user.click(screen.getByRole('button', { name: 'Español' }))
    expect(screen.getByText('Me encanta leer de todo, aunque tengo especial debilidad por la ciencia ficción, la fantasía y el terror.')).toBeInTheDocument()
    expect(screen.getByText('Diseño UI y creative coding')).toBeInTheDocument()
    expect(screen.getByLabelText('Boceto de interfaz dibujado a mano')).toBeInTheDocument()
    expect(screen.getByText('Tarjeta')).toBeInTheDocument()
    expect(screen.getByText('Componente sencillo con interacciones.')).toBeInTheDocument()
    expect(screen.getByText('Colores')).toBeInTheDocument()
    expect(screen.getByText('Ideas para botones')).toBeInTheDocument()
    expect(screen.getByText('las pequeñas animaciones marcan la diferencia')).toBeInTheDocument()
  })
})
