import request from 'superagent'

const baseUrl = '/api/v1/products'

export async function getAllProducts() {
  const response = await request
  .get(baseUrl)

  return response.body as any
}