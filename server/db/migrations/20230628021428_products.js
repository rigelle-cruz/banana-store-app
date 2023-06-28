exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.decimal('price')
    table.string('description')
    table.string('img_url')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('products')
}
