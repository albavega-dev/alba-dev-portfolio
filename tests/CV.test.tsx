import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import CV from '../src/pages/cv/CV'

describe('CV downloads', () => {
  it('exposes the English and Spanish PDF downloads', () => {
    render(<CV />)

    const english = screen.getByRole('link', { name: /Download CV \(English\)/i })
    const spanish = screen.getByRole('link', { name: /Descargar CV \(Español\)/i })
    expect(english).toHaveAttribute('href', '/Alba_Vega_CV_EN.pdf')
    expect(english).toHaveAttribute('download', 'Alba_Vega_CV_EN.pdf')
    expect(spanish).toHaveAttribute('href', '/Alba_Vega_CV_ES.pdf')
    expect(spanish).toHaveAttribute('download', 'Alba_Vega_CV_ES.pdf')
  })
})
