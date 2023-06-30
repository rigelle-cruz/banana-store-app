import request from 'superagent'
import { fakeProducts } from './fakeData'

const baseUrl = '/api/v1/shop'

export async function getAllProductsApi() {
  // const response = await request.get(baseUrl)
  // return response.body as any

  //MOCKED RESPONSE
  return Promise.resolve(fakeProducts)
}

export async function getProductByIdApi(id : number) {
  // const response = await request.get(`${baseUrl}/${id}`)
  // return response.body as any
  //MOCKED RESPONSE
  return Promise.resolve(fakeProducts.find(product => product.id === id))
}



