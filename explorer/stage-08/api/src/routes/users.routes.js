const { Router } = require("express"); /* importa o express.Router de dentro do express */

const UsersController = require("../controllers/UsersController");

const usersRoutes = Router(); /* inicializar o router */

const usersController = new UsersController(); /* instanciar um controller, criando ele. Necessário isso por ser uma classe */

usersRoutes.post("/", usersController.create); /* criar um route para acesso ao controller */

module.exports = usersRoutes; /* exporta o router para quem quiser utilizar esse arquivo, pode utilizar. Com isso, o server.js poder acessar as rotas da aplicação */