import request from 'superagent'
import { fakeProductsForShopPage } from './fakeData'
import { IndividualProduct } from '../../models/product'

const baseUrl = '/api/v1/shop'

export async function getAllProductsApi() {
  // const response = await request.get(baseUrl)
  // return response.body as any

  //MOCKED RESPONSE
  return Promise.resolve(fakeProductsForShopPage)
}

export async function getProductByIdApi(id: number) {
  const response = await request.get(`${baseUrl}/${id}`)
  console.log("IN THE API", response.body)
  return response.body as IndividualProduct
  //MOCKED RESPONSE
  //return Promise.resolve(fakeProductsForShopPage.find(product => product.id === id))
}
