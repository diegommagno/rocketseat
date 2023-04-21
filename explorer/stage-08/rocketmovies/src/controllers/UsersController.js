const { hash, compare } = require("bcryptjs");
const AppError = require("../utils/AppError");

const sqliteConnection = require("../database/sqlite");

class UsersController {

  async create(request, response) {
    const { name, email, password } = request.body;

    const database = await sqliteConnection();

    const checkUserExists = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if (checkUserExists) {
      throw new AppError("Email already in use, please log in.");
    }    

    const hashedPassword = await hash(password, 8);

    await database.run("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, hashedPassword]); 

    return response.status(201).json();
  }

  async update(request, response) {
    const { name, email, password, old_password } = request.body;
    const { id } = request.params;

    const database = await sqliteConnection();

    const user = await database.get("SELECT * FROM users WHERE id = (?)", [id]);

    if (!user) {
      throw new AppError("User not found.");
    }

    const userWithUpdatedEmail = await database.get("SELECT * FROM users WHERE email = (?)", [email]);

    if (userWithUpdatedEmail && userWithUpdatedEmail.id !== user.id) {
      throw new AppError("Email already in use, please log in.");
    }

    user.name = name ?? user.name; 
    user.email = email ?? user.email;

    if (password && !old_password) {
      throw new AppError("Please, inform the old password to continue."); /* Se não passou a senha antiga, precisa fornecer para continuar. */
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
      name = ?, email = ?, password = ?, updated_at = DATETIME('now')
      WHERE id = ?`,
      [user.name, user.email, user.password, id]
    );

    return response.json();
  }

}

module.exports = UsersController;