//@vitest-environment jsdom
import { afterEach, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import FounderStory from './FounderStory'
import { founderStories } from './founderStories'
import { MemoryRouter } from 'react-router-dom'
import matchers from '@testing-library/jest-dom/matchers'

afterEach(cleanup)
expect.extend(matchers)

test('Render founder stories', async () => {
  render(
    <MemoryRouter>
      <FounderStory />
    </MemoryRouter>
  )

  founderStories.forEach((founder) => {
    const image = screen.getByRole('img', { name: founder.name })
    const name = screen.getByText(founder.name)
    const title = screen.getByText(founder.title)
    const description = screen.getByText(founder.description)
    const favoriteBanana = screen.getByText(
      `Favorite Banana: ${founder.favouriteBanana}`
    )

    expect(image).toBeInTheDocument()
    expect(name).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(favoriteBanana).toBeInTheDocument()
  })
})
