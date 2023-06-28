exports.up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.decimal('price')
    table.string('description')
    table.string('img_src')
    table.integer('calorie_count')
    table.integer('weight')
    table.string('taste_profile')
    table.string('origin')
    table.string('random_fact')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('products')
}
