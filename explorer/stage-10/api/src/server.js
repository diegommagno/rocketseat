require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations");
const AppError = require("./utils/AppError");
const uploadConfig = require("./configs/upload");

const express = require('express'); /* import express */
const routes = require("./routes"); /* importa o arquivo index.js, então quando chamar routes vai para esse arquivo de grupo de rotas, que tem os arquivos de grupo de rotas */

migrationsRun();

const app = express(); /* inicializar o express, iniciar a API. O app é a nossa API, então app.get é buscar informações na API. */
app.use(express.json()); /* utilizar o express.json() para receber dados JSON */

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER));

app.use(routes); /* utilizar o routes, então quando chamar routes vai para esse arquivo de grupo de rotas, que tem todas os arquivos dos grupos de rotas (que dentro tem as rotas)  */

app.use(( error, request, response,next ) => {
  if(error instanceof AppError){
    return response.status(error.statusCode).json({
      status: "error",
      message: error.message
    });
  }

  console.log(error);

  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  })

});

const PORT = 3333; /* porta padrão onde ele vai trabalhar. Diz para o express em qual endereço ele vai trabalhar (qual restaurante o garçom vai trabalhar e ouvir pedidos, fica aguardando mudanças) */
app.listen(PORT, () => {console.log(`Server is running on Port ${PORT}`)}); /* chamando o servidor na porta 3333, garçom, fique ouvindo por mudanças aqui. */