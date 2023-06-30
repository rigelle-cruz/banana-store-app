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

    expect(produce).toHaveLength(12)
  })
  it('gets correct product id', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce[0].id).toBe(1)
  })
  it('gets correct product name', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce[0].name).toMatch('Cavendish')
  })
  it('gets correct product price', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce[0].price).toBe(1)
  })
  it('gets correct image source', async () => {
    const produce = await db.getAllProducts(testDb)

    expect(produce[0].imgSrc).toBe('hi')
  })
 
})
