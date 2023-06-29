import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'

import * as db from './product'
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

describe('getProductById', () => {
  it('object has id property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('id')
  })
  it('object has name property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('name')
  })
  it('object has price property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('price')
  })
  it('object has description property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('description')
  })
  it('object has img property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('imgSrc')
  })
  it('object has calorie property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('calorieCount')
  })
  it('object has weight property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('weight')
  })
  it('object has taste profile property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('tasteProfile')
  })
  it('object has origin property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('origin')
  })
  it('object has random fact property', async () => {
    const product = await db.getProductById(1, testDb)

    expect(product).toHaveProperty('randomFact')
  })
})
