import request from 'superagent'
import { UpdatedCartItemQuantity } from '../../models/cart'

const baseUrl = '/api/v1/cart'

export async function getCartByIdApi(userId: number) {
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

export async function clearCartApi(userId: number) {
  await request
    .delete(`${baseUrl}/all`)
    .send({ userId })
    .set('Content-Type', 'application/json')
}
