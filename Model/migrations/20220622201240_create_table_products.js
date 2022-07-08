/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('produtos', (table) => {
    table.increments('id').primary().notNullable();
    table.string('nome', 150).notNullable().unique();
    table.integer('planId').notNullable().unsigned();
    table.foreign('planId')
      .references('plans.id');
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('produtos');
};
