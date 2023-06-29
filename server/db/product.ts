import connection from './connection'
import { Products } from './shop'

export function getProductById(id: number, db = connection) {
  return db('products')
    .where('id', id)
    .select(
      'id',
      'name',
      'price',
      'description',
      'img_src as imgSrc',
      'calorie_count as calorieCount',
      'weight',
      'taste_profile as tasteProfile',
      'origin',
      'random_fact as randomFact'
    )
    .first() as Promise<Products>
}
export function getCartById(arg0: number, testDb: Knex<any, unknown[]>) {
  throw new Error('Function not implemented.')
}
