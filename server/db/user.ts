import connection from './connection'

export interface Users {
  id: number
  nickname: string
  auth0Id: string
}

export interface NewUser {
  nickname: string
  auth0Id: string
}

export async function getAllUsers(db = connection) {
  return (await db('products').select(
    'id',
    'nickname',
    'auth0_id as auth0Id'
  )) as Users[]
}

export async function addUser(db = connection) {
  return (await db('products').insert(
    'nickname',
    'auth0_id as auth0Id'
  )) as NewUser
}
