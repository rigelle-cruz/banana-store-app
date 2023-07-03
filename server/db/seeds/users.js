exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([{ id: 1, nickname: 'guest', auth0_id: 'a0' }])
}
