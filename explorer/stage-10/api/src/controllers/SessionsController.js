const knex = require('../database/knex');
const AppError = require('../utils/AppError'); // Para lidar com exceções, por exemplo, exibir uma mensagem de erro que o usuário não é cadastrado, ou exibir uma mensagem que o e-mail ou senha estão incorretos.
const { compare } = require('bcryptjs'); // Para comparar a senha que o usuário digitou com a senha que está no banco de dados.
const authConfig = require('../configs/auth'); // Importando o arquivo de configuração do JWT.
const { sign } = require('jsonwebtoken'); // Importando o método sign do JWT.

class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    // Etapa de validacao do email e senha
    const user = await knex("users").where({ email}).first(); // Usando o Knex para acessar a tabela de users e fazer um filter, buscando pelo usuario pelo email. First para trazer o primeiro, mesmo que nao possa cadastrar com e-mail repetido. Retorna no momento dados do usuario como quando foi criado, etc.

    if (!user) {
      throw new AppError("Incorrect email or password", 401); // 401 é o status de erro de autenticação
    }

    const passwordMatched = await compare(password, user.password); // Comparando a senha que o usuário digitou com a senha que está no banco de dados.

    if (!passwordMatched) {
      throw new AppError("Incorrect email or password", 401); // 401 é o status de erro de autenticação
    }

    // Etapa de geracao do token
    const { secret, expiresIn } = authConfig.jwt; // Pegando o secret e o expiresIn do arquivo de configuração do JWT.
    // sign é o signIn do JWT. Passa um objeto vazio (onde poderia ter configurações adicionais), a chave secreta e o subject, que é o conteúdo que quero inserir dentro do token.
    // String() para converter o id para texto.
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    })

    return response.json({ user, token });
  }
}

module.exports = SessionsController;

// Creating a session for the user, that is why the create method is being used.