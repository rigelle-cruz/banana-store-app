import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'

import * as db from './shop'
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

describe('getAllProducts', () => {
  it('gets correct arr length', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce).toHaveLength(1)
  })
  it('gets correct product id', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce[0].id).toBe(1)
  })
  it('gets correct product name', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce[0].name).toMatch('banana')
  })
  it('gets correct product price', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce[0].price).toBe(1)
  })
  it('gets correct product description', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce[0].description).toMatch('yellow')
  })
  it('gets correct product img', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce[0].img_src).toMatch('hi')
  })
})
