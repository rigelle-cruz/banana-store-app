exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, first_name: 'quinn', last_name: 'gibson', auth0_id: 'a0' },
  ])
}
