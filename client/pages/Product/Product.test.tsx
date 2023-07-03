//@vitest-environment jsdom
import { expect, test, vi, beforeEach } from 'vitest'

import { cleanup } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Product from './Product'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { renderComponent } from '../../test-utils'

import { getProductByIdApi } from '../../apis/shop'
import { IndividualProduct } from '../../../models/product'
vi.mock('../../apis/shop')

beforeEach(cleanup)

test.only('Product page fetches a product', async () => {
  const banana: IndividualProduct = {
    id: 1,
    name: 'Cavendish',
    price: 1,
    description:
      'The Cavendish banana is a widely recognized and cultivated variety known for its elongated shape, bright yellow skin, and creamy, sweet flavor. It is a popular choice for both fresh consumption and culinary applications due to its appealing taste and texture.',
    imgSrc: '/images/cavendish.jpg',
    calorieCount: '110',
    weight: 150,
    tasteProfile:
      'The Cavendish banana offers a delightful taste profile that is both sweet and slightly tangy. Its flavor is often described as a balance between sugariness and subtle acidity. The creamy and smooth texture of the fruit enhances the overall eating experience. When fully ripe, the Cavendish banana develops a rich, tropical sweetness with hints of vanilla and caramel notes. Its mild and approachable flavor makes it a favorite choice for banana lovers of all ages.',
    origin: 'Selective Breeding',
    randomFact:
      'The Cavendish banana is the most commonly exported and consumed banana variety worldwide, accounting for approximately 47% of global banana production.',
  }

  vi.mocked(getProductByIdApi).mockResolvedValue(banana)

  const { findAllByRole } = renderComponent(
    <QueryClientProvider client={new QueryClient()}>
      <MemoryRouter initialEntries={['/1']} initialIndex={0}>
        <Routes>
          <Route path="/:id" element={<Product />} />
        </Routes>
      </MemoryRouter>
    </QueryClientProvider>
  )

  const title = await findAllByRole('heading', { level: 1 })
  expect(title[0].textContent).toMatch('Cavendish')
})
