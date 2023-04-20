const { Router } = require("express");

const usersRouter = require("./users.routes");

const routes = Router(); // Contém todas as rotas da aplicação.

routes.use("/users", usersRouter); // Quando chegar o request de /users, chama o grupo de rotas de users.

module.exports = routes;