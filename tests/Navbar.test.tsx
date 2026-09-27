import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'

import Navbar from '../src/components/layout/Navbar'

vi.mock('rough-notation', () => ({
  annotate: vi.fn(() => ({
    isShowing: () => false,
    show: vi.fn(),
    hide: vi.fn(),
    remove: vi.fn(),
  })),
}))

describe('Navbar', () => {
  it('keeps the Home identity route-aware while preserving primary links', () => {
    const { unmount } = render(
      <MemoryRouter initialEntries={['/']}>
        <Navbar />
      </MemoryRouter>,
    )

    expect(screen.queryByRole('link', { name: 'Alba Vega' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Me' })).toHaveAttribute('href', '/about')
    expect(screen.getByRole('link', { name: 'CV' })).toHaveAttribute('href', '/cv')

    unmount()
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Navbar />
      </MemoryRouter>,
    )

    expect(screen.getByRole('link', { name: 'Alba Vega' })).toHaveAttribute('href', '/')
  })
})
