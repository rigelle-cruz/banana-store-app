import request from 'superagent'

const baseUrl = '/api/v1/shop'

export async function getAllProductsApi() {
  const response = await request.get(baseUrl)

  return response.body as any
}
