//@vitest-environment jsdom

import { afterEach, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import userEvent from '@testing-library/user-event'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import Shop from '../../pages/Shop/Shop'

import Home from '../../pages/Home/Home'
import Cart from '../../pages/Cart/Cart'

afterEach(cleanup)
expect.extend(matchers)
const user = userEvent.setup()

test('Add order notes button present', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const button = screen.getByRole('button', {
    name: 'Add order notes +',
  })

  expect(button).toBeInTheDocument()
})

test('View shipping details button present', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const button = screen.getByRole('button', {
    name: 'View shipping details',
  })

  expect(button).toBeInTheDocument()
})

test('Checkout button present', async () => {
  render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const button = screen.getByRole('button', {
    name: 'CHECKOUT',
  })

  expect(button).toBeInTheDocument()
})
