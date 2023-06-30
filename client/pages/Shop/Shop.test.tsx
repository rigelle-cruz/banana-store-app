//@vitest-environment jsdom
import { expect, test, vi, beforeEach } from 'vitest'

import { cleanup } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import nock from 'nock'

import Shop from './Shop'
import { ShopProduct } from '../../../models/shop'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { renderComponent } from '../../test-utils'

vi.mock('./apis/shop')

beforeEach(cleanup)

test('Shop page fetches an array of products', async () => {
  const shopProducts: ShopProduct[] = [
    {
      id: 1,
      name: 'cavendish',
      price: 1000,
      imgSrc: 'cavendish.jpg',
    },
    {
      id: 2,
      name: 'red banana',
      price: 800,
      imgSrc: 'red-banana.jpg',
    },
  ]

  // intercept http requests to respond with our mock data
  nock('http://localhost').get('/api/v1/shop').reply(200, shopProducts)

  const { getAllByRole } = renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter>
        <Routes>
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const titles = getAllByRole('heading', { level: 1 })
  console.log('LOG', titles)
  expect(titles[0].textContent).toMatch('shop.')

  // const images = getAllByRole('img')
  // console.log(images)
})
