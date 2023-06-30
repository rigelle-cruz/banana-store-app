import connection from './connection'

export interface Products {
  id: number
  name: string
  price: number
  description: string
  imgSrc: string
  calorieCount: number
  weight: number
  tasteProfile: string
  origin: string
  randomFact: string
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
