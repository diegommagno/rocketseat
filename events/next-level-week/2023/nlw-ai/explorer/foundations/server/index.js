import cors from "cors"; // Import these libraries to the project.
import express from "express";

import { download } from "./download.js"; // Import the function from the download.js file.

const app = express(); // Initiate the application. Pega o express e coloca ele dentro da constant app para poder usar ela.
app.use(cors()); // Use the cors library.

app.get("/summary/:id", (request, response) => {
    download(request.params.id); // Provide the download function with the video id.
    response.json({ message: "Download started." }); // Return a JSON response.
}); // Request tem todas as informações da requisição que foi feita para o servidor. Response vai ser usado para devolver uma resposta para quem fez a requisição.

app.listen(3333, () => console.log("Server is running on port 3333.")); // Listen to the port 3333. Express é o porteiro. Ele que vai receber as requisições e devolver as respostas. O node é o motor que vai fazer o processamento das requisições e respostas. Digitar node --watch server/index.js para rodar o servidor, --watch é para que sempre que haja uma alteração no código, ele reiniciar o servidor para usar o novo código do projeto.