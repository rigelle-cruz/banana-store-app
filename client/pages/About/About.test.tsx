// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import matchers from '@testing-library/jest-dom/matchers'

import About from './About'

afterEach(cleanup)
expect.extend(matchers)

describe('About component', () => {
  it('renders founder stories section', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    const founderStoriesHeading = screen.getByRole('heading', {
      level: 2,
      name: 'Founder Stories',
    })

    expect(founderStoriesHeading).toBeInTheDocument()
  })

  it('renders company origin heading ', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    const companyOriginHeading = screen.getByRole('heading', {
      level: 2,
      name: 'Company Origin',
    })
    expect(companyOriginHeading).toBeInTheDocument()
  })

  it('renders paragraph element in company origin  ', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    const paragraphRegex = /In a peculiar twist of fate/
    const paragraphElement = screen.getByText(paragraphRegex)
    expect(paragraphElement).toBeInTheDocument()
  })
})
