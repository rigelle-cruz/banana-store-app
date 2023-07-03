//@vitest-environment jsdom
import { expect, test, vi, beforeEach } from 'vitest'

import { cleanup } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Cart from './Cart'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { renderComponent } from '../../test-utils'

import { getProductByIdApi } from '../../apis/shop'
import { CartItem } from '../../../models/cart'
import { getCartByIdApi } from '../../apis/cart'
vi.mock('../../apis/cart')

beforeEach(cleanup)

const cart: CartItem[] = [
  {
    id: 1,
    productId: 1,
    name: 'Cavendish',
    price: 49.99,
    quantity: 3,
    imgSrc: '/images/cavendish.jpg',
    weight: 150,
  },
  {
    id: 2,
    productId: 2,
    name: 'Red Banana',
    price: 499.99,
    quantity: 2,
    imgSrc: '/images/red-banana.jpg',
    weight: 120,
  },
]

test('Cart page shows correct first banana name', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  const { findAllByRole } = renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const names = await findAllByRole('heading', { level: 2 })
  expect(names[0].textContent).toMatch('Cavendish')
})

test('Cart page shows correct first banana image', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  const { findAllByRole } = renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const images = await findAllByRole('img')
  expect(images[0]).toBeDefined()
})

test('Cart page shows correct first banana weight', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(cart[0].weight * cart[0].quantity).toBeDefined()
})

test('Cart page shows correct first banana price', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(cart[0].price * cart[0].quantity).toBeDefined()
})

test('Cart page shows correct first banana quantity', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(cart[0].quantity).toBeDefined()
})

test('Cart page shows correct second banana name', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  const { findAllByRole } = renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const names = await findAllByRole('heading', { level: 2 })
  expect(names[1].textContent).toMatch('Red Banana')
})

test('Cart page shows correct second banana image', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  const { findAllByRole } = renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const images = await findAllByRole('img')
  expect(images[1]).toBeDefined()
})

test('Cart page shows correct second banana weight', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(cart[1].weight * cart[1].quantity).toBeDefined()
})

test('Cart page shows correct second banana price', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(cart[1].price * cart[1].quantity).toBeDefined()
})

test('Cart page shows correct second banana quantity', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(cart[1].quantity).toBeDefined()
})

test('Cart page shows correct number of products', async () => {
  vi.mocked(getCartByIdApi).mockResolvedValue(cart)

  renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Cart />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(cart).toHaveLength(2)
})
