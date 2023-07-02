// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import { renderComponent } from '../../test-utils'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import userEvent from '@testing-library/user-event'
import { screen } from '@testing-library/react'

import Nav from './Nav'
import About from '../../pages/About/About'
import Contact from '../../pages/Contact/Contact'
import Shop from '../../pages/Shop/Shop'
import Cart from '../../pages/Cart/Cart'

describe('Footer Links', () => {
  it('footer has the correct amount of links', () => {
    const { getAllByRole } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Nav />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )

    const buttons = getAllByRole('button')
    expect(buttons).toHaveLength(6)
    expect(buttons[0]).toHaveTextContent('home')
    expect(buttons[1]).toHaveTextContent('about')
    expect(buttons[2]).toHaveTextContent('contact')
    expect(buttons[3]).toHaveTextContent('shop')
    expect(buttons[4]).toHaveTextContent('log in')
    expect(buttons[5]).toContainHTML('img')
  })

  it('If home button navigates to home', async () => {
    const { getByRole } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Nav />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )

    const button = getByRole('button', { name: 'home' })
    await userEvent.click(button)

    expect(window.location.pathname).toBe('/')
  })

  it('If about button navigates to about page', async () => {
    const { getByRole } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )

    const button = getByRole('button', { name: 'about' })
    await userEvent.click(button)

    expect(window.location.pathname).toBe('/')
    expect(screen.getByText('Company Origin')).toBeInTheDocument()
  })

  it('If about button navigates to about page', async () => {
    const { getByRole } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )

    const button = getByRole('button', { name: 'contact' })
    await userEvent.click(button)

    expect(window.location.pathname).toBe('/')
    expect(screen.getByText('Contact.')).toBeInTheDocument()
  })

  it('If shop button navigates to shop page', async () => {
    const { getByRole } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )

    const button = getByRole('button', { name: 'shop' })
    await userEvent.click(button)

    expect(window.location.pathname).toBe('/')
  })

  //add test for login button

  it('If cart button navigates to cart page', async () => {
    const { getByRole } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route path="/" element={<Nav />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )

    const button = getByRole('button', { name: '' })
    await userEvent.click(button)

    expect(window.location.pathname).toBe('/')
  })
})
