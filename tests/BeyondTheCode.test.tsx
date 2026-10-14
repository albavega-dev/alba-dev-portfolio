import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'

import BeyondTheCode from '../src/components/about/BeyondTheCode'
import { LanguageProvider } from '../src/i18n/LanguageProvider'

describe('Beyond the Code journal', () => {
  it('opens and closes through the user-facing controls', async () => {
    const user = userEvent.setup()
    render(<LanguageProvider><BeyondTheCode /></LanguageProvider>)

    const cover = screen.getByRole('button', { name: 'Open Beyond the Code journal' })
    await user.click(cover)
    const closeButton = (await screen.findAllByRole('button', { name: 'Close journal' }))[0]
    expect(closeButton).toBeInTheDocument()

    await user.click(document.querySelector('.journal-phone-close') as HTMLElement)
    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Open Beyond the Code journal' })).toBeInTheDocument()
    })
  })
})
