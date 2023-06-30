//@vitest-environment jsdom

import { afterEach, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Shop from '../../pages/Shop/Shop'

import HomeBanner from './HomeBanner'
import Home from '../../pages/Home/Home'

afterEach(cleanup)
expect.extend(matchers)
const user = userEvent.setup()

test('If button is on the home page', async () => {
  render(
    <MemoryRouter>
      <HomeBanner />
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
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path="/" element={<Home />} />
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

test('If img tags and h1 element renders on the home page', async () => {
  render(
    <MemoryRouter>
      <HomeBanner />
    </MemoryRouter>
  )

  const imgElements = screen.getAllByRole('img')
  expect(imgElements).toHaveLength(2)

  const h1Element = screen.getByRole('heading', { level: 1 })
  expect(h1Element).toBeInTheDocument()
})
