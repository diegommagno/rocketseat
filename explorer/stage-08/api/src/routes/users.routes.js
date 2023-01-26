const { Router } = require("express"); /* importa o express.Router de dentro do express */

const usersRoutes = Router(); /* inicializar o router */

usersRoutes.post("/", (request, response) => {
  const { name, email, password } = request.body;

  response.json({ name, email, password });

});

module.exports = usersRoutes; /* exporta o router para quem quiser utilizar esse arquivo, pode utilizar. Com isso, o server.js poder acessar as rotas da aplicação */