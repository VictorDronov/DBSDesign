exports.up = function (knex) {
    return knex.schema.createTable("categories", (table) => {
      table.uuid("id").primary();
      table.string("name").index().notNullable();
    });
  };
  
  exports.down = function (knex) {
      return knex.schema.dropTableIfExists('categories')
  };
  