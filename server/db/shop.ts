import connection from './connection'

interface Product {
  id: number
  name: string
  price: number
  description: string
  img_src: string
}

export async function getAllProducts(db = connection) {
  return (await db('products').select()) as Product[]
}
