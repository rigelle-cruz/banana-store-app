import { beforeEach, beforeAll, afterAll, describe, it, expect } from 'vitest'
import knex from 'knex'

import * as db from './home'
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

describe('getFeaturedById', () => {
  const testArr = [4, 2, 7]
  it('has the correct length', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured).toHaveLength(3)
  })
  it('first product has correct name', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured[0].name).toBe('Red Banana')
  })
  it('first product has correct price', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured[0].price).toBe(1)
  })
  it('first product has correct image source', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured[0].imgSrc).toBe('h1')
  })

  it('second product has correct name', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured[1].name).toBe('Lady Finger')
  })
  it('second product has correct price', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured[1].price).toBe(1)
  })
  it('second product has correct image source', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured[1].imgSrc).toBe('hi')
  })

  it('third product has correct name', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured[2].name).toBe('Goldfinger')
  })
  it('third product has correct price', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured[2].price).toBe(1)
  })
  it('third product has correct image source', async () => {
    const featured = await db.getFeaturedById(testArr, testDb)

    expect(featured[2].imgSrc).toBe('hi')
  })
})
