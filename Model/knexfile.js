// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const env = require('./env')



module.exports = {

  client: 'mysql2',
  connection: {
    host: env.local.host,
    port: 3306,
    user: env.local.user,
    password: env.local.password,
    database: env.local.database

  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: __dirname + '/migrations',
    tableName: 'knex_migrations'
  }
}

