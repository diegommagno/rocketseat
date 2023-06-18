const config = require("../../../knexfile");
const knex = require("knex");

const connection = knex(config.development); /* Passar as configurações de desenvolvimento */

module.exports = connection;