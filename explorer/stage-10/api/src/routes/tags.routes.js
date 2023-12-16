const { Router } = require("express"); /* importa o express.Router de dentro do express */

const TagsController = require("../controllers/TagsController"); /* importa o arquivo tags.routes.js, então quando chamar notesRouter vai para esse arquivo de grupo de rotas, que tem as rotas de notes */
const ensureAuthenticated = require("../middlewares/ensureAuthenticated"); // Importando o middleware de autenticação.

const tagsRoutes = Router(); /* inicializar o router - aqui é onde vão ficar as rotas */

const tagsController = new TagsController(); /* instanciar o controller, a class tagsController */

tagsRoutes.get("/", ensureAuthenticated, tagsController.index); /* visto que esse é passado através de uma query e não parâmetro, não coloca nada */


module.exports = tagsRoutes; /* exporta o router para quem quiser utilizar esse arquivo poder utilizar. Com isso, o server.js poder acessar as rotas da aplicação */