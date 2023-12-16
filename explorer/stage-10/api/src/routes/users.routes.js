const { Router } = require("express"); /* importa o express.Router de dentro do express */

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated"); // Importando o middleware de autenticação.

const usersRoutes = Router(); /* inicializar o router */

const usersController = new UsersController(); /* instanciar um controller, criando ele. Necessário isso por ser uma classe */

usersRoutes.post("/", usersController.create); /* criar um route para acesso ao controller */
usersRoutes.put("/", ensureAuthenticated, usersController.update); /* criar um route para acesso ao controller */
// Não precisa mais colocar o /:id no route, pois o id do usuário vai ser pego pelo token, que está no middleware de autenticação ensureAuthenticated.

module.exports = usersRoutes; /* exporta o router para quem quiser utilizar esse arquivo, pode utilizar. Com isso, o server.js poder acessar as rotas da aplicação */