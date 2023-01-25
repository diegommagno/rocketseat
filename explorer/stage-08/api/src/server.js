const express = require('express'); /* import express */

const app = express(); /* inicializar o express, iniciar a API. O app é a nossa API, então app.get é buscar informações na API. */

app.get("/message/:id/:users", (request, response) => {
  const { id, users} = request.params;

  response.send(`
    Message: ${id}.
    User: ${users}.
  `);

});

app.get("/user", (request, response) => {
  const { page, limit } = request.query;

  response.send(`
    Page: ${page}.
    Mostrar: ${limit}.
    `)

});

const PORT = 3333; /* porta padrão onde ele vai trabalhar. Diz para o express em qual endereço ele vai trabalhar (qual restaurante o garçom vai trabalhar e ouvir pedidos) */
app.listen(PORT, () => {console.log(`Server is running on Port ${PORT}`)}); /* chamando o servidor na porta 3333, garçom, fique ouvindo por mudanças aqui. */