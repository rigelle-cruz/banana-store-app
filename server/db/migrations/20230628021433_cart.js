exports.up = (knex) => {
  return knex.schema.createTable('cart', (table) => {
    table.increments('id').primary()
    table.string('user_id')
    table.integer('product_id')
    table.integer('quantity')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('cart')
}
