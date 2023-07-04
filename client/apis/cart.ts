import request from 'superagent'
import { UpdatedCartItemQuantity, RemovedItem } from '../../models/cart'

const baseUrl = '/api/v1/cart'

export async function getCartByIdApi(userId: string) {
  const response = await request.get(`${baseUrl}/${userId}`)
  return response.body as any
}

export async function updateCartItemQuantityByProductIdApi(
  updatedItem: UpdatedCartItemQuantity
) {
  await request
    .patch(`${baseUrl}`)
    .send(updatedItem)
    .set('Content-Type', 'application/json')
}

export async function clearCartApi(userId: string) {
  await request
    .delete(`${baseUrl}/all`)
    .send({ userId })
    .set('Content-Type', 'application/json')
}


export async function removeCartItemApi(removedItem : RemovedItem) {
  await request
  .delete(`${baseUrl}/single`)
  .send(removedItem)
  .set('Content-Type', 'application/json')
}


export async function addToCartByIdApi(newItem : UpdatedCartItemQuantity) {
  await request
  .post(`${baseUrl}`)
  .send(newItem)
  .set('Content-Type', 'application/json')
}