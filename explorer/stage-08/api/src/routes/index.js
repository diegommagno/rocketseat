const { Router } = require("express"); /* importa o express.Router de dentro do express */

const usersRouter = require("./users.routes"); /* importa o arquivo users.routes, então quando chamar usersRouter vai para esse arquivo de grupo de rotas, que tem as rotas de users */

const routes = Router(); /* inicializar o router - aqui é onde vão ficar as rotas */

routes.use("/users", usersRouter); /* utilizar o arquivo users.routes, então quando chamar usersRouter vai para esse arquivo de grupo de rotas, que tem as rotas de users */

module.exports = routes; /* exporta o router para quem quiser utilizar esse arquivo poder utilizar. Com isso, o server.js poder acessar as rotas da aplicação */