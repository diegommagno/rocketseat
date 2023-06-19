const { Router } = require("express"); /* importa o express.Router de dentro do express */

const usersRouter = require("./users.routes"); /* importa o arquivo users.routes, então quando chamar usersRouter vai para esse arquivo de grupo de rotas, que tem as rotas de users */
const notesRouter = require("./notes.routes"); /* importa o arquivo notes.routes, então quando chamar notesRouter vai para esse arquivo de grupo de rotas, que tem as rotas de notes */
const tagsRouter = require("./tags.routes"); /* importa o arquivo tags.routes, então quando chamar tagsRouter vai para esse arquivo de grupo de rotas, que tem as rotas de tags */
const sessionsRouter = require("./sessions.routes"); /* importa o arquivo tags.routes, então quando chamar tagsRouter vai para esse arquivo de grupo de rotas, que tem as rotas de tags */

const routes = Router(); /* inicializar o router - aqui é onde vão ficar as rotas */

routes.use("/users", usersRouter); /* utilizar o arquivo users.routes, então quando chamar usersRouter vai para esse arquivo de grupo de rotas, que tem as rotas de users */
routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRouter); 
routes.use("/tags", tagsRouter);

module.exports = routes; /* exporta o router para quem quiser utilizar esse arquivo poder utilizar. Com isso, o server.js poder acessar as rotas da aplicação */