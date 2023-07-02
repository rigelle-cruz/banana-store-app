import connection from './connection'

export interface Cart {
  id: number
  name: string
  price: number
  quantity: number
  weight: number
}

export interface newItem {
  userId: number
  productId: number
  quantity: number
}

export interface deleteItem {
  userId: number
  productId: number
}

export async function getCartById(id: number, db = connection) {
  return db('cart')
    .join('products', 'cart.product_id', 'products.id')
    .where('cart.user_id', id)
    .select(
      'cart.user_id as id',
      'products.name as name',
      'products.price as price',
      'cart.quantity as quantity',
      'products.weight as weight'
    ) as unknown as Cart[]
}

export async function addToCartById(newItem: newItem, db = connection) {
  return db('cart').insert({
    user_id: newItem.userId,
    product_id: newItem.productId,
    quantity: newItem.quantity,
  }) as unknown as newItem
}

export async function updateCartItemQuantityByProductId(
  newItem: newItem,
  db = connection
) {
  return db('cart')
    .where('user_id', newItem.userId)
    .andWhere('product_id', newItem.productId)
    .update('quantity', newItem.quantity) as unknown as newItem
}

export async function clearCart(userId: number, db = connection) {
  return db('cart').where('user_id', userId).del()
}

export async function removeCartItemByProductId(
  deleteItem: deleteItem,
  db = connection
) {
  return db('cart')
    .where('user_id', deleteItem.userId)
    .andWhere('product_id', deleteItem.productId)
    .del()
}
