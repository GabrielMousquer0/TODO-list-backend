exports.up = function(knex) {
  return knex.schema.createTable('lists', (table) => {
    table.increments('id').primary()
    table.text('title').notNullable()
    table.text('content').notNullable()
    table.string('list_id', 255).notNullable()
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('lists')
};
