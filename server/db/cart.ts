import connection from './connection'

export function getCartById(id: number, db = connection) {
  return db('cart')
    .join('products', 'cart.product_id', 'products.id')
    .where('user_id', id)
    .select(
      'cart.user_id as id',
      'products.name as name',
      'cart.quantity as quantity',
      'products.weight as weight'
    )
}
