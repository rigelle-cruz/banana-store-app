//@vitest-environment jsdom
import { describe, expect, it, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { cleanup } from '@testing-library/react'
import matchers from '@testing-library/jest-dom/matchers'
import { MemoryRouter } from 'react-router-dom'

import Contact from './Contact'

afterEach(cleanup)
expect.extend(matchers)

describe('Contact Page', async () => {
  it('displays Contact. header', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )

    const header = screen.getByText('Contact.')

    expect(header).toBeInTheDocument()
  })

  it('displays company name Bnana.', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )

    const companyName = screen.getByText('Bnana.')

    expect(companyName).toBeInTheDocument()
  })

  it('displays the right address', () => {
    render(
      <MemoryRouter>
        <Contact />
      </MemoryRouter>
    )

    const addressLineOne = screen.getByText('Level 5/12 Morgan Street')

    expect(addressLineOne).toBeInTheDocument()

    const addressLineTwo = screen.getByText('Newmarket')

    expect(addressLineTwo).toBeInTheDocument()

    const addressLineThree = screen.getByText('Auckland 1023')

    expect(addressLineThree).toBeInTheDocument()
  })
})
