import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
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
    const controls = screen.getByRole('group', { name: 'Language' }).parentElement
    expect(controls).toHaveClass('ml-auto')
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
    fireEvent.animationEnd(screen.getByRole('group', { name: 'Language' }).querySelector('#navbar-language-options') as HTMLElement)
    expect(screen.queryByRole('button', { name: 'Spanish' })).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it('toggles the language selector and removes options after selection', async () => {
    const user = userEvent.setup()
    renderNavbar('/about')

    const trigger = screen.getByRole('button', { name: 'Change language. Current language: English' })
    await user.click(trigger)
    expect(screen.getByRole('button', { name: 'Spanish' })).toBeInTheDocument()

    await user.click(trigger)
    fireEvent.animationEnd(screen.getByRole('group', { name: 'Language' }).querySelector('#navbar-language-options') as HTMLElement)
    expect(screen.queryByRole('button', { name: 'Spanish' })).not.toBeInTheDocument()

    await user.click(trigger)
    await user.click(screen.getByRole('button', { name: 'Spanish' }))
    fireEvent.animationEnd(screen.getByRole('group', { name: 'Idioma' }).querySelector('#navbar-language-options') as HTMLElement)
    expect(screen.queryByRole('button', { name: 'Inglés' })).not.toBeInTheDocument()
  })

  it('toggles the mobile menu and closes it after navigation or Escape', async () => {
    const user = userEvent.setup()
    renderNavbar('/about')

    const trigger = screen.getByRole('button', { name: 'Open navigation menu' })
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: 'Navigation menu' })).not.toBeInTheDocument()

    await user.click(trigger)
    expect(trigger).toHaveAttribute('aria-expanded', 'true')
    const menu = screen.getByRole('navigation', { name: 'Navigation menu' })
    expect(menu).toBeInTheDocument()
    expect(menu).toHaveClass('absolute', 'top-full', 'z-40')
    expect(within(menu).getByRole('link', { name: 'About Me' })).toHaveAttribute('aria-current', 'page')
    expect(within(menu).getByRole('link', { name: 'CV' })).not.toHaveAttribute('aria-current', 'page')

    await user.keyboard('{Escape}')
    fireEvent.animationEnd(document.getElementById('navbar-mobile-menu') as HTMLElement)
    expect(trigger).toHaveAttribute('aria-expanded', 'false')
    expect(trigger).toHaveFocus()

    await user.click(trigger)
    expect(screen.getByRole('navigation', { name: 'Navigation menu' })).toBeInTheDocument()
    await user.click(within(screen.getByRole('navigation', { name: 'Navigation menu' })).getByRole('link', { name: 'CV' }))
    fireEvent.animationEnd(document.getElementById('navbar-mobile-menu') as HTMLElement)
    expect(screen.queryByRole('navigation', { name: 'Navigation menu' })).not.toBeInTheDocument()
  })

  it('keeps the mobile menu open while changing language', async () => {
    const user = userEvent.setup()
    renderNavbar('/about')

    await user.click(screen.getByRole('button', { name: 'Open navigation menu' }))
    await user.click(screen.getByRole('button', { name: 'Change language. Current language: English' }))
    await user.click(screen.getByRole('button', { name: 'Spanish' }))

    expect(screen.getByRole('button', { name: 'Cerrar menú de navegación' })).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: 'Menú de navegación' })).toBeInTheDocument()
    expect(within(screen.getByRole('navigation', { name: 'Menú de navegación' })).getByRole('link', { name: 'Sobre mí' })).toBeInTheDocument()
  })
})
