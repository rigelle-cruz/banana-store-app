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
  return (await db('users').select(
    'id',
    'nickname',
    'auth0_id as auth0Id'
  )) as Users[]
}

export async function addUser(newUser: NewUser, db = connection) {
  return (await db('users').insert({
    nickname: newUser.nickname,
    auth0_id: newUser.auth0Id,
  })) as NewUser
}
