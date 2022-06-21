const express = require("express"); // importar o express

const app = express(); // inicializar o express

const PORT = 3333; // explicar express qual é a porta/endereço que ele vai atender as requisições (cliente fazendo pedidos para o garçom)

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`)); // port seria o endereço que o garçom vai trabalhar, o que ele vai fazer quando ele executar e falar qual porta ele ta rodando