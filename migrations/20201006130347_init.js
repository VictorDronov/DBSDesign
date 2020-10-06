//records changes to the database schema

//the up() function describes the changes to apply to the databse when the migration runs
exports.up = function (knex) {
  //Remember to return
  return knex.schema.createTable("menu_items", (table) => {
    table.increments(); // primary key called 'id, integer, autoincrementing
    table.string("name", 512).notNullable().unique().index();
    //.index() makes searching by this column faster
    table.decimal("price", 8, 2);

    // Relational databases store booleans as 1(true) and 0(false)
    table.boolean("availavle").defaultTo(false);
  });
};

//the down()function descripbes how to undo the changes
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("menu_items");
};
