const { hash } = require("bcryptjs");
const AppError = require("../utils/AppError"); 
const sqliteConnection = require("../database/sqlite"); /* Importar a conexão com o database */

class UsersController {
  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection(); /* Fazer a conexão com o database */

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]); /* Fazer a consulta para ver se o usuário já existe. GET porque quero buscar informações. O interrogação é para substituir depois por uma variável, colocada em ordem assim [name, email, password] */

    if (checkUserExists) {
      throw new AppError("Email already in use, please log in."); /* Se o usuário já existe, executar uma exceção com o AppError */
    }    

    const hashedPassword = await hash(password, 8);

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]); /* .run é quando quero executar a inserção no database. (name, email, password) são as colunas que quero inserir dados e [name, email, password] são as informações recebidas do usuário quando ele envia o request */

    return response.status(201).json(); /* Se o usuário não existe, criar um novo usuário e retornar o status 201 de criado */
  }
}

module.exports = UsersController;

