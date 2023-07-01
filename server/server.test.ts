import { vi, describe, it, expect, beforeEach } from 'vitest'
import request from 'supertest'

import server from './server'
import * as shop from './db/shop'
import * as product from './db/product'
import * as cart from './db/cart'
import * as home from './db/home'

vi.mock('./db/shop')
vi.mock('./db/product')
vi.mock('./db/cart')
vi.mock('./db/home')

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
      imgSrc: 'cavendish.png',
    },
  ] as unknown as shop.Products[]

  it('responds with correct data structure and values', async () => {
    vi.mocked(shop.getAllProducts).mockResolvedValue(mockedProduct)

    const response = await request(server).get('/api/v1/shop')
    const products = response.body

    expect(products[0].id).toBe(1)
    expect(products[0].name).toBe('cavendish')
    expect(products[0].price).toBe(10)
    expect(products[0].imgSrc).toBe('cavendish.png')
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

//PRODUCT GET ROUTE SUCCESS
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
    }) as unknown as shop.Products[]

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

//CART GET ROUTE SUCCESS
describe('GET /api/v1/cart/:id', () => {
  const mockedCart = [
    {
      id: 1,
      name: 'cavendish',
      price: 10,
      quantity: 1,
      weight: 150,
    },
    {
      id: 1,
      name: 'red banana',
      price: 5,
      quantity: 5,
      weight: 120,
    },
  ] as unknown as cart.Cart[]

  it('responds with correct data structure and values', async () => {
    vi.mocked(cart.getCartById).mockResolvedValue(mockedCart)

    const response = await request(server).get('/api/v1/cart/1')
    const products = response.body

    expect(products[0].id).toBe(1)
    expect(products[0].name).toBe('cavendish')
    expect(products[0].price).toBe(10)
    expect(products[0].quantity).toBe(1)
    expect(products[0].weight).toBe(150)
  })
})

//CART GET ROUTE FAIL
describe('GET /api/v1/cart/:id', () => {
  const mockedError = new Error('Internal Server Error')

  it('responds with status 500 and error message on failure', async () => {
    vi.mocked(cart.getCartById).mockRejectedValue(mockedError)

    const response = await request(server).get('/api/v1/cart/1')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Internal Server Error')
  })
})

//HOME POST ROUTE SUCCESS
describe('POST /api/v1/home', () => {
  const mockedFeatured = [
    {
      id: 2,
      name: 'Red Banana',
      price: 1,
      imgSrc: 'h1',
    },
    {
      id: 4,
      name: 'Lady Finger',
      price: 1,
      imgSrc: 'hi',
    },
    {
      id: 7,
      name: 'Goldfinger',
      price: 1,
      imgSrc: 'hi',
    },
  ] as unknown as home.Featured[]

  it('responds with correct data structure and values', async () => {
    vi.mocked(home.getFeaturedById).mockResolvedValue(mockedFeatured)

    const response = await request(server).post('/api/v1/home')
    const featuredArr = response.body

    expect(featuredArr[0].id).toBe(2)
    expect(featuredArr[0].name).toBe('Red Banana')
    expect(featuredArr[0].price).toBe(1)
    expect(featuredArr[0].imgSrc).toBe('h1')
  })
})

//HOME POST ROUTE FAIL
describe('POST /api/v1/home', () => {
  const mockedError = new Error('Internal Server Error')

  it('responds with status 500 and error message on failure', async () => {
    vi.mocked(home.getFeaturedById).mockRejectedValue(mockedError)

    const response = await request(server).post('/api/v1/home')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Internal Server Error')
  })
})

//CART POST ROUTE SUCCESS
describe('POST /api/v1/cart', () => {
  const mockedFeatured = [
    {
      userId: 2,
      productId: 5,
      quantity: 2,
    },
  ] as unknown as cart.newItem

  it('responds with status 200', async () => {
    vi.mocked(cart.addToCartById).mockResolvedValue(mockedFeatured)

    const response = await request(server).post('/api/v1/cart')

    expect(response.status).toBe(200)
  })
})

//CART POST ROUTE FAIL
describe('POST /api/v1/cart', () => {
  const mockedError = new Error('Internal Server Error')

  it('responds with status 500 and error message on failure', async () => {
    vi.mocked(cart.addToCartById).mockRejectedValue(mockedError)

    const response = await request(server).post('/api/v1/cart')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Internal Server Error')
  })
})

//CART PATCH ROUTE SUCCESS
describe('POST /api/v1/cart', () => {
  const mockedFeatured = [
    {
      userId: 1,
      productId: 2,
      quantity: 5,
    },
  ] as unknown as cart.newItem

  it('responds with status 200', async () => {
    vi.mocked(cart.updateCartItemQuantityByProductId).mockResolvedValue(
      mockedFeatured
    )

    const response = await request(server).patch('/api/v1/cart')

    expect(response.status).toBe(200)
  })
})

//CART PATCH ROUTE FAIL
describe('POST /api/v1/cart', () => {
  const mockedError = new Error('Internal Server Error')

  it('responds with status 500 and error message on failure', async () => {
    vi.mocked(cart.updateCartItemQuantityByProductId).mockRejectedValue(
      mockedError
    )

    const response = await request(server).patch('/api/v1/cart')

    expect(response.status).toBe(500)
    expect(response.body.error).toBe('Internal Server Error')
  })
})
