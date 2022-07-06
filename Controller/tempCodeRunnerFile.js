db('usuarios').select('nome').innerJoin('plans as p', 'p.id', 'p.nome')
  .then(data => console.log(data))