const { Router } = require("express"); /* importa o express.Router de dentro do express */
const multer = require("multer"); /* importa o multer para trabalhar com upload de arquivos */
const uploadConfig = require("../configs/upload"); /* importa o arquivo de configuração do multer */

const UsersController = require("../controllers/UsersController");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated"); // Importando o middleware de autenticação.

const usersRoutes = Router(); /* inicializar o router */
const upload = multer(uploadConfig.MULTER);

const usersController = new UsersController(); /* instanciar um controller, criando ele. Necessário isso por ser uma classe */

usersRoutes.post("/", usersController.create); /* criar um route para acesso ao controller */
usersRoutes.put("/", ensureAuthenticated, usersController.update); /* criar um route para acesso ao controller */
// Não precisa mais colocar o /:id no route, pois o id do usuário vai ser pego pelo token, que está no middleware de autenticação ensureAuthenticated.
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), (request, response) => {
    console.log(request.file.filename);
    response.json();
}); /* criar um route para acesso ao controller */

module.exports = usersRoutes; /* exporta o router para quem quiser utilizar esse arquivo, pode utilizar. Com isso, o server.js poder acessar as rotas da aplicação */