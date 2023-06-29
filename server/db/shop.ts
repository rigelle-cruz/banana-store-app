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
  return (await db('products').select()) as Products[]
}
