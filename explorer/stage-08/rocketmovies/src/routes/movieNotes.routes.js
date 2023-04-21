const { Router } = require("express");

const MovieNotesController = require("../controllers/MovieNotesController");

const movieNotesRoutes = Router();

const movieNotesController = new MovieNotesController();

// Não precisa passar o user_id aqui em index como parâmetro, pois ele já está sendo passado na query.
movieNotesRoutes.get("/", movieNotesController.index);
movieNotesRoutes.post("/:user_id", movieNotesController.create);
movieNotesRoutes.get("/:id", movieNotesController.show);
movieNotesRoutes.delete("/:id", movieNotesController.delete);

module.exports = movieNotesRoutes;