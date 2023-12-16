const { verify } = require('jsonwebtoken'); // Importando o método verify do JWT.
const AppError = require('../utils/AppError'); // Para lidar com exceções, por exemplo, exibir uma mensagem de erro que o usuário não é cadastrado, ou exibir uma mensagem que o e-mail ou senha estão incorretos.
const authConfig = require('../configs/auth'); // Importando o arquivo de configuração do JWT.

function ensureAuthenticated(request, response, next) {
    const authHeader = request.headers.authorization; // O token vai estar aqui dentro, dentro do request realizado.

    if(!authHeader) {
        throw new AppError('JWT token is missing', 401); // Porque o token é criado junto com o request.
    }

    const [, token] = authHeader.split(' '); // Desestruturando o array, pegando apenas a primeira posição, que é o token. O split separa o token do Bearer.
    // , token significa que a primeira posição do array não vai ser usada, pois o token está na segunda posição e quero somente o que está na segunda posição sendo armazenado na variável.

    try {
        const { sub: user_id } = verify(token, authConfig.jwt.secret); // Verificando se o token é válido. Se não for válido, o verify vai retornar um erro, então o try catch vai capturar esse erro.
        // Se for válido o token, ele vai devolver a propriedade sub, nesse caso pego o sub e passo a chamar ele de user_id.

        request.user = {
            id: Number(user_id),
        };

        return next(); // Se o token for válido, ele vai continuar o fluxo da aplicação, visto que aqui o middleware entrou no caminho para identificar o usuário autenticado.
    } catch (error) {
        throw new AppError('Invalid JWT token', 401);
    }
}

module.exports = ensureAuthenticated;