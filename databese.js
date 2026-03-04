const sequelize = require('sequelize'); // solicito o sql

const connection = new sequelize('guia_perguntas','root','#####',{ // faço a conexão com o banco de dados sql dou o nome a rota e a senha
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection; // exporto para usar em outras paginas