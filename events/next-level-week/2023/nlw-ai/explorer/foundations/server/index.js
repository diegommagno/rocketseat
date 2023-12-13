import cors from "cors"; // Import these libraries to the project.
import express from "express";

import { convert } from "./convert.js";
import { download } from "./download.js"; // Import the function from the download.js file.
import { transcribe } from "./transcribe.js";
import { summarize } from "./summarize.js";

const app = express(); // Initiate the application. Store express() inside the const to use it.
app.use(express.json()); // Use the JSON library, otherwise it can't understand it will also receive content in the JSON format.
app.use(cors()); // Use the cors library.

app.get("/summary/:id", async (request, response) => {
    try {
        await download(request.params.id); // Provide the download function with the video id.
        const audioConverted = await convert()
        const result = await transcribe(audioConverted)
    
        return response.json({ result }); // Return a JSON response.
    } catch (error) {
        console.log(error)
        return response.json({ error: error.message })
    }

}); // Request has all the information from the request that was made to the server. Response will be used to return a response for who made the request.

app.post("/summary/", async (request, response) => {
    try {
        const result = await summarize(request.body.text)
        return response.json({ result }); // Return a JSON response
    } catch (error) {
        console.log(error)
        return response.json({ error: error.message })
    }
})

app.listen(3333, () => console.log("Server is running on port 3333.")); // Listen to the port 3333. Express is the doorman. He will receive the requests and return the responses. Node is the engine that will process the requests and responses. 
// Type node --watch server/index.js to start the server, --watch is to always update the server once something is changed in the code.