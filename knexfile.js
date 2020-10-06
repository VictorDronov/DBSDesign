// Update with your config settings.

module.exports = {

  development: {
    //configuration for the dev environment
    client: 'sqlite3',
    connection: {
      filename: './database/food.db3'
    },
    useNullAsDefault: true//required for sqlite only
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
