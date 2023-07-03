import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'

import * as db from './cart'
import config from './knexfile'
const testDb = knex(config.test)

beforeAll(async () => {
  await testDb.migrate.latest()
})

beforeEach(async () => {
  await testDb.seed.run()
})

afterAll(async () => {
  await testDb.destroy()
})

describe('getCartById', () => {
  it('has the correct length', async () => {
    const cart = await db.getCartById('a0', testDb)

    expect(cart).toHaveLength(4)
  })
  it('first product has correct name', async () => {
    const cart = await db.getCartById('a0', testDb)

    expect(cart[0].name).toBe('Cavendish')
  })
  it('first product has correct quantity', async () => {
    const cart = await db.getCartById('a0', testDb)

    expect(cart[0].quantity).toBe(1)
  })
})

describe('addToCartById', () => {
  it('adds an item to cart', async () => {
    const test = {
      userId: 'a0',
      productId: 6,
      quantity: 2,
    }
    await db.addToCartById(test, testDb)
    const [cartItems] = await testDb('cart').where({
      user_id: test.userId,
      product_id: test.productId,
      quantity: test.quantity,
    })

    expect(cartItems.user_id).toBe(test.userId)
    expect(cartItems.product_id).toBe(test.productId)
    expect(cartItems.quantity).toBe(test.quantity)
  })
})

describe('updateCartItemQuantityByProductId', () => {
  it('updates quantity for an item in cart', async () => {
    const test = {
      userId: 'a0',
      productId: 3,
      quantity: 4,
    }
    await db.updateCartItemQuantityByProductId(test, testDb)
    const [updateItem] = await testDb('cart').where({
      user_id: test.userId,
      product_id: test.productId,
      quantity: test.quantity,
    })

    expect(updateItem.user_id).toBe(test.userId)
    expect(updateItem.product_id).toBe(test.productId)
    expect(updateItem.quantity).toBe(test.quantity)
  })
})

describe('clearCart', () => {
  it('clears the cart for a given user', async () => {
    const test = 'a0'

    await db.clearCart(test, testDb)
    const clearedCart = await testDb('cart').where('user_id', test)

    expect(clearedCart).toHaveLength(0)
  })
})

describe('removeCartItemByProductId', () => {
  it("clears a given item from a user's cart", async () => {
    const test = { userId: 'a0', productId: 3 }

    await db.removeCartItemByProductId(test, testDb)
    const clearedItem = await testDb('cart')
      .where('user_id', test.userId)
      .andWhere('product_id', test.productId)

    expect(clearedItem).toHaveLength(0)
  })
})
