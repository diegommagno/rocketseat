const sqliteConnection = require("../../sqlite"); /* Importar a conexão */

const createUsers = require("./createUsers"); /* Importar o createUsers */

/* Função para rodar as migrations */
async function migrationsRun() {
  const schemas = [
    createUsers
  ].join(''); /* join('') pegar todas as migrations e juntar elas usando como parâmetro para juntar nada, pode usar uma vírgula para quebrar, por exemplo. */

  sqliteConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.error('Error:', error.message));
}

module.exports = migrationsRun;