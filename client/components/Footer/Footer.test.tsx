// @vitest-environment jsdom
import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'
import { renderComponent } from '../../test-utils'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { waitFor } from '@testing-library/dom'

const user = userEvent.setup()

describe('Footer Links', () => {
  it('footer has the correct amount of links', () => {
    const { getAllByRole } = renderComponent(
      <QueryClientProvider client={new QueryClient()}>
        <MemoryRouter>
          <Routes>
            <Route path="/" element={<Footer />} />
          </Routes>
        </MemoryRouter>
      </QueryClientProvider>
    )
    const links = getAllByRole('link')
    expect(links).toHaveLength(4)
    expect(links[0]).toHaveTextContent('home')
    expect(links[1]).toHaveTextContent('about')
    expect(links[2]).toHaveTextContent('shop')
    expect(links[3]).toHaveTextContent('contact')
  })

  // it('should take the user to the correct route when clicking on a Link component', async () => {
  //   const { getByRole } = renderComponent(
  //     <QueryClientProvider client={new QueryClient()}>
  //       <MemoryRouter>
  //         <Routes>
  //           <Route path="/" element={<Footer />} />
  //         </Routes>
  //       </MemoryRouter>
  //     </QueryClientProvider>
  //   )

  //   const homeLink = getByRole('link', { name: 'home' })

  //   const aboutLink = getByRole('link', { name: 'about' })
  //   const shopLink = getByRole('link', { name: 'shop' })
  //   const contactLink = getByRole('link', { name: 'contact' })

  //   await user.click(homeLink)
  //   expect(window.location.pathname).toBe('/')

  //   await user.click(aboutLink)
  //   expect(window.location.pathname).toBe('/about')

  //   await user.click(shopLink)
  //   expect(window.location.pathname).toBe('/shop')

  //   await user.click(contactLink)
  //   expect(window.location.pathname).toBe('/contact')
  // })
})
