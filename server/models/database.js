const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'banco',
  },
 
});

module.exports = knex

//Conexão com o banco de dados;
