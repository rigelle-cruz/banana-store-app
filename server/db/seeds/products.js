exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { id: 1, name: 'banana', price: 1, description: 'yellow', img_url: 'hi' },
  ])
}
