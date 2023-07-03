import connection from './connection'
import {Users, NewUser} from '../../models/user'

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

export async function checkIfUserExists(auth0Id: string, db = connection) {
  const result = await db('users')
    .where('auth0_id', auth0Id)
    .first()

  return !!result
  //The !! operator is used to convert the result to a boolean value.
}