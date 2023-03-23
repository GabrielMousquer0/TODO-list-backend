const {
  resolve
} = require("path")

module.exports = {
  client: 'pg',
  connection: {
      database: 'postgres',
      user: 'postgres',
      password: 'example'
  },
  pool: {
      min: 2,
      max: 10
  },
  migrations: {
      tableName: 'knex_migrations',
      directory: resolve(__dirname, 'migrations')
  }
}