//@vitest-environment jsdom
import { render } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { describe, expect, it, vi } from 'vitest'

import FeaturedBanana from './FeaturedBanana'
import { QueryClient, QueryClientProvider } from 'react-query'
import matchers from '@testing-library/jest-dom/matchers'
import { ShopProduct } from '../../../models/shop'
import nock from 'nock'

expect.extend(matchers)
vi.mock('./apis/songs')

describe('FeaturedBanana Component', () => {
  it('should render the "Best sellers" heading', () => {
    const product: ShopProduct[] = [
      {
        id: 1,
        name: 'cavendish',
        price: 10,
        imgSrc: 'cavendish.jpg',
      },
    ]

    nock('http://localhost').get('/api/v1/product').reply(200, product)
  })

  const { getByText } = render(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<FeaturedBanana />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )
  const bestSellersHeading = getByText('Best sellers')
  expect(bestSellersHeading).toBeInTheDocument()
})
