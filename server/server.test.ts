import { vi, describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'

import server from './server'
import * as shop from './db/shop'
import * as product from './db/product'
import connection from './db/connection'

vi.mock('./db/shop')
vi.mock('./db/product')

beforeEach(() => {
  vi.clearAllMocks()
})

//SHOP GET ROUTE SUCCESS
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

//SHOP GET ROUTE FAIL
describe('GET /api/v1/shop', () => {
  const mockedError = new Error('Internal Server Error')

  it('responds with status 500 and error message on failure', async () => {
    vi.mocked(shop.getAllProducts).mockRejectedValue(mockedError)

    const response = await request(server).get('/api/v1/shop')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Internal Server Error')
  })
})

//PRODUCT GET ROUTE
describe('GET /api/v1/shop/:id', () => {
  it('responds with the correct banana', async () => {
    vi.mocked(product.getProductById).mockImplementation(() => {
      return Promise.resolve({
        id: 1,
        name: 'banana',
        price: 1,
        description: 'yellow',
        img_src: 'hi',
        calorie_count: 1,
        weight: 1,
        taste_profile: 'yum',
        origin: 'nz',
        random_fact: 'tree',
      })
    })

    const res = await request(server).get('/api/v1/shop/1')

    expect(res.body.id).toBe(1)
    expect(res.body.name).toBe('banana')
    expect(res.body.price).toBe(1)
  })
})

//PRODUCT GET ROUTE FAIL
describe('GET /api/v1/shop/:id', () => {
  const mockedError = new Error('Internal Server Error')

  it('responds with status 500 and error message on failure', async () => {
    vi.mocked(product.getProductById).mockRejectedValue(mockedError)

    const response = await request(server).get('/api/v1/shop/1')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Internal Server Error')
  })
})
