exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('first_name')
    table.string('last_name')
    table.string('auth0_id')
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('users')
}
