import connection from './connection'

export interface Products {
  id: number
  name: string
  price: number
  description: string
  img_src: string
  calorie_count: number
  weight: number
  taste_profile: string
  origin: string
  random_fact: string
}

export async function getAllProducts(db = connection) {
  return (await db('products').select(
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
  )) as Products[]
}
