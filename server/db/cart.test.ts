import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex, { Knex } from 'knex'

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
    const cart = await db.getCartById(1, testDb)

    expect(cart).toHaveLength(4)
  })
  it('first product has correct name', async () => {
    const cart = await db.getCartById(1, testDb)

    expect(cart[0].name).toBe('Cavendish')
  })
  it('first product has correct quantity', async () => {
    const cart = await db.getCartById(1, testDb)

    expect(cart[0].quantity).toBe(1)
  })
})
