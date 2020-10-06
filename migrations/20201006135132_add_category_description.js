exports.up = function (knex) {
  return knex.schema.table("categories", (table) => {
    table.text("description");
  });
};

// run the down using knex migrate:rollback
exports.down = function (knex) {
  return knex.schema.table("categories", (table) => {
    table.dropColumn("description");
  });
};
