//@vitest-environment jsdom

import { afterEach, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import ErrorPage from './ErrorPage'

afterEach(cleanup)
expect.extend(matchers)
const user = userEvent.setup()

test('If button is on the page', async () => {
  render(
    <MemoryRouter>
      <ErrorPage />
    </MemoryRouter>
  )

  const button = screen.getByRole('button', {
    name: 'home',
  })

  expect(button).toBeInTheDocument()
})

test('If button redirects to root route', async () => {
  render(
    <MemoryRouter initialEntries={['/some-invalid-path']}>
      <ErrorPage />
    </MemoryRouter>
  )

  const button = screen.getByRole('button', { name: 'home' })
  await user.click(button)

  expect(window.location.pathname).toBe('/')
})
