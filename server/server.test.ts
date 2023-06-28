import { vi, describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'

import server from './server'
import * as db from './db/shop'

vi.mock('./db/shop')

beforeEach(() => {
  vi.clearAllMocks()
})

//SHOP GET ROUTE
describe('GET /api/v1/shop', () => {
  const mockedProduct = [
    {
      id: 1,
      name: 'cavandish',
      price: 10,
      description: 'wow its yellow',
      img_src: 'cavandish.png',
    },
  ] as unknown as db.Product[]

  it('responds with correct data structure and values', async () => {
    vi.mocked(db.getAllProducts).mockResolvedValue(mockedProduct)

    const response = await request(server).get('/api/v1/shop')
    const products = response.body.products

    expect(products[0].id).toBe(1)
    expect(products[0].name).toBe('cavandish')
    expect(products[0].price).toBe(10)
    expect(products[0].description).toBe('wow its yellow')
    expect(products[0].img_src).toBe('cavandish.png')
  })
})
