import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import Navbar from '../src/components/layout/Navbar'
import { LanguageProvider } from '../src/i18n/LanguageProvider'

vi.mock('rough-notation', () => ({
  annotate: vi.fn(() => ({
    isShowing: () => false,
    show: vi.fn(),
    hide: vi.fn(),
    remove: vi.fn(),
  })),
}))

describe('Navbar', () => {
  afterEach(cleanup)

  beforeEach(() => {
    localStorage.clear()
  })

  function renderNavbar(initialEntry: string) {
    return render(
      <LanguageProvider>
        <MemoryRouter initialEntries={[initialEntry]}>
          <Navbar />
        </MemoryRouter>
      </LanguageProvider>,
    )
  }

  it('keeps the Home identity route-aware while preserving primary links', () => {
    const { unmount } = renderNavbar('/')

    expect(screen.queryByRole('link', { name: 'Alba Vega' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Me' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute('href', '/cv')

    unmount()
    renderNavbar('/about')

    expect(screen.getByRole('link', { name: 'Alba Vega' })).toHaveAttribute('href', '/')
  })

  it('switches navbar language accessibly without changing the current route', async () => {
    const user = userEvent.setup()
    renderNavbar('/about')

    const english = screen.getByRole('button', { name: 'Change language. Current language: English' })
    expect(english).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByRole('link', { name: 'About Me' })).toHaveAttribute('href', '/about')

    await user.click(english)
    expect(screen.getByRole('button', { name: 'Spanish' })).toHaveAttribute('aria-pressed', 'false')
    await user.click(screen.getByRole('button', { name: 'Spanish' }))
    expect(screen.getByRole('link', { name: 'Sobre mí' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('button', { name: 'Cambiar idioma. Idioma actual: Español' })).toHaveAttribute('aria-expanded', 'false')
    expect(localStorage.getItem('alba-dev-language')).toBe('es')

    const spanishTrigger = screen.getByRole('button', { name: 'Cambiar idioma. Idioma actual: Español' })
    await user.click(spanishTrigger)
    expect(screen.getByRole('button', { name: 'Inglés' })).toHaveAttribute('aria-pressed', 'false')
    await user.click(screen.getByRole('button', { name: 'Inglés' }))
    expect(screen.getByRole('link', { name: 'About Me' })).toBeInTheDocument()
    expect(localStorage.getItem('alba-dev-language')).toBe('en')
  })

  it('closes the open selector with Escape and returns focus to the trigger', async () => {
    const user = userEvent.setup()
    renderNavbar('/about')
    const trigger = screen.getByRole('button', { name: 'Change language. Current language: English' })
    await user.click(trigger)
    expect(screen.getByRole('button', { name: 'Spanish' })).toBeInTheDocument()
    await user.keyboard('{Escape}')
    expect(screen.queryByRole('button', { name: 'Spanish' })).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })
})
