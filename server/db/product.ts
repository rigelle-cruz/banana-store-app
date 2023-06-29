import connection from './connection'

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
    .first()
}
