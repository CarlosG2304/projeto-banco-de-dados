/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

produtos = [
  {
    nome: 'Drone For Premiun',
    planId: 1
  },
  {
    nome: 'Filmage 778 Fly',
    planId: 1
  },
  {
    nome: 'Dark Photografic Power',
    planId: 1
  },
  {
    nome: 'Flip Show Cloud',
    planId: 1
  }, {
    nome: 'Drone DJI Mini 1',
    planId: 1
  },
  {
    nome: 'Sarah Duo Full Magic',
    planId: 1
  },
  {
    nome: 'R3 Falcon HD',
    planId: 1
  },
  {
    nome: 'Quadrocopter One Flip',
    planId: 1
  },
  {
    nome: 'DJI agricola 20L',
    planId: 2
  },
  {
    nome: 'TL inteligent 30L',
    planId: 2
  },
  {
    nome: 'Hay Say 2022 - 30L',
    planId: 2
  },
  {
    nome: 'Quadrocopter TS 20L',
    planId: 2
  },
  {
    nome: 'Drone DJI Mini 2',
    planId: 3
  },
  {
    nome: 'Sarah Duo Full Magic 2',
    planId: 3
  },
  {
    nome: 'R3 Falcon HD 2',
    planId: 3
  },
  {
    nome: 'Quadrocopter One',
    planId: 3
  },
]

exports.up = function (knex) {

  knex('produtos').insert(produtos).then(dados => dados)
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
