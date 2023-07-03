//@vitest-environment jsdom

import { afterEach, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Home from '../../pages/Home/Home'

afterEach(cleanup)
expect.extend(matchers)
const user = userEvent.setup()

test('First featured banana image present', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const images = screen.getAllByRole('img')

  expect(images[0]).toBeInTheDocument()
})

test('Second featured banana image present', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const images = screen.getAllByRole('img')

  expect(images[1]).toBeInTheDocument()
})

test('First featured banana price present', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const prices = screen.getAllByText(/$/i)

  expect(prices[0]).toBeInTheDocument()
})

test('Second featured banana price present', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const prices = screen.getAllByText(/$/i)

  expect(prices[1]).toBeInTheDocument()
})
