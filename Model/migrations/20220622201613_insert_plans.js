/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {


  knex('plans').insert([{
    nome: 'Plano Vip',
    valor: 100.00
  }, {
    nome: 'Plano Top',
    valor: 150.00
  },
  {
    nome: 'Plano Master',
    valor: 200.00
  }]).then(dados => dados)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};

