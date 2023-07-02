//@vitest-environment jsdom
import { afterEach, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import Home from './Home'
import { MemoryRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import matchers from '@testing-library/jest-dom/matchers'

afterEach(cleanup)
expect.extend(matchers)

test('Banana Benefits heading is visible', async () => {
  const queryClient = new QueryClient()

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(screen.getByText(/Banana Benefits/i)).toBeDefined()
})

test('Banana image is visible', async () => {
  const queryClient = new QueryClient()

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(screen.getAllByRole('img')).toBeDefined()
})

test('Banana benefits subheading 1 is visible', async () => {
  const queryClient = new QueryClient()

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(screen.getByText(/Energizing Snack/i)).toBeDefined()
})

test('Banana benefits subheading 2 is visible', async () => {
  const queryClient = new QueryClient()

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(screen.getByText(/Mood Enhancement/i)).toBeDefined()
})

test('View full range button is visible', async () => {
  const queryClient = new QueryClient()

  render(
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    </QueryClientProvider>
  )

  expect(screen.getAllByRole('button')).toBeDefined()
})
