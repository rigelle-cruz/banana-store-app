//@vitest-environment jsdom

import { afterEach, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import ThankYouPage from './ThankYouPage'

afterEach(cleanup)
expect.extend(matchers)
const user = userEvent.setup()

test('If thank you message renders on the page', async () => {
  render(
    <MemoryRouter initialEntries={['/thankyoupage']}>
      <ThankYouPage />
    </MemoryRouter>
  )

  const message = screen.getByText('Thank You For Your Purchase!')

  expect(message).toBeInTheDocument()
})

test('If button is on the page', async () => {
  render(
    <MemoryRouter>
      <ThankYouPage />
    </MemoryRouter>
  )

  const button = screen.getByRole('button', {
    name: 'home',
  })

  expect(button).toBeInTheDocument()
})

test('If button redirects to home page', async () => {
  render(
    <MemoryRouter initialEntries={['/thankyoupage']}>
      <ThankYouPage />
    </MemoryRouter>
  )

  const button = screen.getByRole('button', { name: 'home' })
  await user.click(button)

  expect(window.location.pathname).toBe('/')
})
