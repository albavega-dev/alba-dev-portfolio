import { render } from '@testing-library/react'
import { useEffect } from 'react'
import { MemoryRouter, useNavigate } from 'react-router'
import { describe, expect, it, vi } from 'vitest'

import ScrollToTop from '../src/components/layout/ScrollToTop'

function NavigationTrigger() {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/cv')
  }, [navigate])
  return null
}

describe('ScrollToTop', () => {
  it('resets the scroll position when the pathname changes', () => {
    const scrollTo = vi.spyOn(window, 'scrollTo')

    render(
      <MemoryRouter initialEntries={['/about']}>
        <ScrollToTop />
        <NavigationTrigger />
      </MemoryRouter>,
    )

    expect(scrollTo).toHaveBeenCalledWith(0, 0)
  })
})
