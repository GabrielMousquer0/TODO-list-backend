exports.up = function(knex) {
  return knex.schema.createTable('lists', (table) => {
      table.text('id').notNullable()
      table.text('title').notNullable()
      table.text('content').notNullable()
  })
};


exports.down = function(knex) {
  return knex.schema.dropTable('lists')
};
