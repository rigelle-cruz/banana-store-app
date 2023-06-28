exports.seed = async function (knex) {
  await knex('cart').del()
  await knex('cart').insert([{ id: 1, user_id: 1, product_id: 1, quantity: 1 }])
}
