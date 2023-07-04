exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('nickname')
    table.string('auth0_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
