import request from 'superagent'
import { Users, NewUser } from '../../models/user'

const baseUrl = '/api/v1/user'

export async function getAllUsersApi() {
  const response = await request.get(baseUrl)
  return response.body as Users[]
}

export async function addUserApi(newUser: NewUser) {
  await request
    .post(`${baseUrl}`)
    .send(newUser)
    .set('Content-Type', 'application/json')
}
