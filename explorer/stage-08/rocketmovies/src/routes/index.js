const { Router } = require("express");

const usersRouter = require("./users.routes");
const movieNotesRouter = require("./movieNotes.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/movieNotes", movieNotesRouter);

module.exports = routes;