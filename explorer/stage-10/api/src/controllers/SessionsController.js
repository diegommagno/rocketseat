const knex = require('../database/knex');
const AppError = require('../utils/AppError'); // Para lidar com exceções, por exemplo, exibir uma mensagem de erro que o usuário não é cadastrado, ou exibir uma mensagem que o e-mail ou senha estão incorretos.
const { compare } = require('bcryptjs'); // Para comparar a senha que o usuário digitou com a senha que está no banco de dados.

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email}).first(); // Usando o Knex para acessar a tabela de users e fazer um filter, buscando pelo usuario pelo email. First para trazer o primeiro, mesmo que nao possa cadastrar com e-mail repetido. Retorna no momento dados do usuario como quando foi criado, etc.

    if (!user) {
      throw new AppError("Incorrect email or password", 401); // 401 é o status de erro de autenticação
    }

    const passwordMatched = await compare(password, user.password); // Comparando a senha que o usuário digitou com a senha que está no banco de dados.

    if (!passwordMatched) {
      throw new AppError("Incorrect email or password", 401); // 401 é o status de erro de autenticação
    }

    return response.json({ user });
  }
}

module.exports = SessionsController;

// Creating a session for the user, that is why the create method is being used.