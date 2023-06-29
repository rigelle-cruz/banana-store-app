import request from 'superagent'
import { fakeCart } from './fakeData'

const baseUrl = '/api/v1/cart'


export async function getCart(userId : number) {
  // const response = await request.get(`${baseUrl}/${id}`)
  // return response.body as any

  //MOCKED RESPONSE
  return Promise.resolve(fakeCart.filter(cartItem => cartItem.userId === userId))
}
