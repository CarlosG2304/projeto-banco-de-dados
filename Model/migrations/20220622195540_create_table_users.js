/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('usuarios', (table) => {
    table.increments('id').primary().notNullable();
    table.string('nome', 150).notNullable().unique();
    table.string('email', 255).notNullable().unique();
    table.string('senha');
    table.string('cpf').notNullable();
    table.string('genero', 50).notNullable();
    table.date('dataNascimento');
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
  return knex.schema.dropTable('usuarios');
};