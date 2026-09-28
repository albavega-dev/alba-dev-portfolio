import { act, renderHook } from '@testing-library/react'
import { beforeEach, describe, expect, it } from 'vitest'

import { LANGUAGE_STORAGE_KEY } from '../src/i18n/LanguageContext'
import { LanguageProvider } from '../src/i18n/LanguageProvider'
import { useLanguage } from '../src/i18n/useLanguage'

function wrapper({ children }: { children: React.ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>
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
})
