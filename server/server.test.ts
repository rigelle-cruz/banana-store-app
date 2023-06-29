import { vi, describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'

import server from './server'
import * as shop from './db/shop'
import * as product from './db/product'

vi.mock('./db/shop')

beforeEach(() => {
  vi.clearAllMocks()
})

//SHOP GET ROUTE
describe('GET /api/v1/shop', () => {
  const mockedProduct = [
    {
      id: 1,
      name: 'cavendish',
      price: 10,
      description: 'wow its yellow',
      img_src: 'cavendish.png',
    },
  ] as unknown as shop.Products[]

  it('responds with correct data structure and values', async () => {
    vi.mocked(shop.getAllProducts).mockResolvedValue(mockedProduct)

    const response = await request(server).get('/api/v1/shop')
    const products = response.body.products

    expect(products).toHaveLength(1)
    expect(products[0].id).toBe(1)
    expect(products[0].name).toBe('cavendish')
    expect(products[0].price).toBe(10)
    expect(products[0].description).toBe('wow its yellow')
    expect(products[0].img_src).toBe('cavendish.png')
  })
})

//PRODUCT GET ROUTE
