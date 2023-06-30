exports.seed = async function (knex) {
  await knex('cart').del()
  await knex('cart').insert([
    { id: 1, user_id: 1, product_id: 1, quantity: 1 },
    { id: 2, user_id: 1, product_id: 3, quantity: 2 },
    { id: 3, user_id: 1, product_id: 2, quantity: 8 },
    { id: 4, user_id: 1, product_id: 4, quantity: 16 },
  ])
}
