exports.up = function (knex) {
  return knex.schema.createTable("clients", (table) => {
    table.string("id").primary();
    table.string("name").index().notNullable();
    table.string("email").unique().index();
  });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('clients')
};
