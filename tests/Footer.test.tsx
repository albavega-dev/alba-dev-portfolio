import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Footer from '../src/components/layout/Footer'
import { LanguageProvider } from '../src/i18n/LanguageProvider'

describe('Footer contact links', () => {
  it('exposes the approved public contact destinations', () => {
    render(<LanguageProvider><Footer /></LanguageProvider>)

    expect(screen.getByRole('link', { name: 'LinkedIn profile' })).toHaveAttribute('href', 'https://www.linkedin.com/in/alba-vega-calzado-7b976611a/')
    expect(screen.getByRole('link', { name: 'Send me an email' })).toHaveAttribute('href', 'mailto:avegac14@gmail.com')
  })
})
