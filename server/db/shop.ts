import connection from './connection'

export interface Products {
  id: number
  name: string
  price: number
  img_src: string
}

export async function getAllProducts(db = connection) {
  return (await db('products').select(
    'id',
    'name',
    'price',
    'img_src as imgSrc',
  )) as Products[]
}
