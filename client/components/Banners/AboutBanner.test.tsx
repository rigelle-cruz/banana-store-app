//@vitest-environment jsdom

import { afterEach, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'

import AboutBanner from './AboutBanner'
import Shop from '../../pages/Shop/Shop'
import About from '../../pages/About/About'
import { QueryClient, QueryClientProvider } from 'react-query'

afterEach(cleanup)
expect.extend(matchers)
const user = userEvent.setup()

test('If button is on the page', async () => {
  render(
    <MemoryRouter>
      <AboutBanner />
    </MemoryRouter>
  )

  const button = screen.getByRole('button', {
    name: 'view full range',
  })

  expect(button).toBeInTheDocument()
})

test('If button redirects to shop', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/about']}>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const button = screen.getByRole('button', {
    name: 'view full range',
  })
  await user.click(button)

  expect(window.location.pathname).toBe('/')
})
