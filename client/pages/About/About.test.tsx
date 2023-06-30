//@vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import matchers from '@testing-library/jest-dom/matchers'

import About from './About'

afterEach(cleanup)
expect.extend(matchers)

describe('About component', () => {
  // it('renders AboutBanner component', () => {
  //   render(
  //     <MemoryRouter>
  //       <About />
  //     </MemoryRouter>
  //   )
  //   const AboutBanner = screen.
  // })

  // make test to check that the AboutBanner component exists

  it('renders company origin heading & Sub-heading', () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    )
    const companyOriginHeading = screen.getByRole('heading', {
      level: 1,
      name: 'Company Origin',
    })
    const companyOriginText = screen.getByText("We're all a bit bananas!")
    expect(companyOriginHeading).toBeInTheDocument()
    expect(companyOriginText).toBeInTheDocument()
  })

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

    //create a test that checks if the FounderStory component exists
  })
})
