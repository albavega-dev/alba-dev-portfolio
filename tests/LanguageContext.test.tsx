import { act, render, renderHook, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Link, MemoryRouter, Route, Routes, useLocation } from 'react-router'
import { beforeEach, describe, expect, it } from 'vitest'

import { LANGUAGE_STORAGE_KEY } from '../src/i18n/LanguageContext'
import { LanguageProvider } from '../src/i18n/LanguageProvider'
import { useLanguage } from '../src/i18n/useLanguage'

function wrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
}

function NavigationProbe() {
  const { language, setLanguage, translations } = useLanguage()
  const location = useLocation()

  return (
    <>
      <output data-testid="language">{language}</output>
      <output data-testid="pathname">{location.pathname}</output>
      <output>{translations.navbar.about}</output>
      <button type="button" onClick={() => setLanguage('es')}>Español</button>
      <Link to="/about">About</Link>
      <Link to="/cv">CV</Link>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<span>Home page</span>} />
        <Route path="/about" element={<span>About page</span>} />
        <Route path="/cv" element={<span>CV page</span>} />
      </Routes>
    </>
  )
}

describe('LanguageProvider', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.lang = 'en'
  })

  it.each([
    ['missing', null, 'en'],
    ['English', 'en', 'en'],
    ['Spanish', 'es', 'es'],
    ['unsupported', 'fr', 'en'],
  ])('resolves %s stored preference to %s', (_label, stored, expected) => {
    if (stored) localStorage.setItem(LANGUAGE_STORAGE_KEY, stored)
    const { result } = renderHook(() => useLanguage(), { wrapper })
    expect(result.current.language).toBe(expected)
    expect(document.documentElement.lang).toBe(expected)
  })

  it('persists explicit language changes and updates document language', () => {
    const { result } = renderHook(() => useLanguage(), { wrapper })

    act(() => result.current.setLanguage('es'))
    expect(result.current.language).toBe('es')
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('es')
    expect(document.documentElement.lang).toBe('es')

    act(() => result.current.setLanguage('en'))
    expect(result.current.language).toBe('en')
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('en')
    expect(document.documentElement.lang).toBe('en')
  })

  it('preserves the selected language while navigating public routes', async () => {
    const user = userEvent.setup()
    render(
      <LanguageProvider>
        <MemoryRouter initialEntries={['/']}>
          <NavigationProbe />
        </MemoryRouter>
      </LanguageProvider>,
    )

    await user.click(screen.getByRole('button', { name: 'Español' }))
    expect(screen.getByTestId('language')).toHaveTextContent('es')

    await user.click(screen.getByRole('link', { name: 'About' }))
    expect(screen.getByTestId('pathname')).toHaveTextContent('/about')
    expect(screen.getByTestId('language')).toHaveTextContent('es')

    await user.click(screen.getByRole('link', { name: 'CV' }))
    expect(screen.getByTestId('pathname')).toHaveTextContent('/cv')
    expect(screen.getByTestId('language')).toHaveTextContent('es')

    await user.click(screen.getByRole('link', { name: 'Home' }))
    expect(screen.getByTestId('pathname')).toHaveTextContent('/')
    expect(screen.getByTestId('language')).toHaveTextContent('es')
    expect(localStorage.getItem(LANGUAGE_STORAGE_KEY)).toBe('es')
    expect(document.documentElement.lang).toBe('es')
  })
})
