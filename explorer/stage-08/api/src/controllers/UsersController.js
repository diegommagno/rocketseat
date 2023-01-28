const { hash, compare } = require("bcryptjs");
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

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection(); /* Fazer a conexão com o database */
    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]); /* Testar se encontra o usuário do id passado para o params */
    /* Aqui, caso o usuário seja encontrado, user vai receber todas as informações de cada coluna da tabela, podendo acessar com usar.id, user.name, etc */

    /* Se o usuário não existe, executar uma exceção com o AppError */
    if (!user) {
      throw new AppError("User not found."); 
    }

    if (!name || !email) {
      throw new AppError("All fields are required.");
    }

    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    /* Se o email existe && o id de quem tem esse email for diferente do id do usuário, falar que ele já está em uso */
    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Email already in use."); /* Se o email já existe, executar uma exceção com o AppError */
    }

    user.name = name;
    user.email = email;

    if (password && !old_password) {
      throw new AppError("Old password is required."); /* Se não passou a senha antiga, precisa fornecer para continuar. */
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, user.password); /* Testar se a senha antiga é igual a senha atual */
      /* Precisa utilizar o compare para comparar as senhas porque a senha antiga cadastrada (user.password) está criptografada e a digitada (old_password) não */

      if (!checkOldPassword) {
        throw new AppError("Old password is incorrect."); /* Se a senha antiga não está correta, executar uma exceção (erro) com o AppError */
      }

      user.password = await hash(password, 8); /* O user vai receber a nova senha criptografada */
    }

    await database.run(`
      UPDATE users SET 
      name = ?, email = ?, password = ?, updated_at = ?
      WHERE id = ?`,
      [user.name, user.email, user.password, new Date(), id]
    );
    
    return response.json();
  }
}

module.exports = UsersController;

