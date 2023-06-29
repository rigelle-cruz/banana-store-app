// @vitest-environment jsdom
import { describe, expect, it } from 'vitest'
import Nav from './Nav'
import { renderComponent } from '../../test-utils'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

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
    expect(buttons[4]).toContainHTML('img')

    //NEED TO TEST FOR LOGIN / LOGOUT BUTTON

    //NEED TO COMPLETE TEST TO CHECK IF BUTTONS ARE TAKING USER TO CORRECT PAGE
  })
})
