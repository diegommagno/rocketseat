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
    const { name, email } = request.body;
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

    await database.run(`UPDATE users SET name = (?), email = (?), updated_at = (?) WHERE id = (?)`, [user.name, user.email, new Date(), user.id]);

    return response.json();
  }

}

module.exports = UsersController;