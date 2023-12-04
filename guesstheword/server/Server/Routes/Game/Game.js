const express = require("express");
const { checkUserGuess } = require('./GameFunctions');
const gameRouter = express.Router();

gameRouter.get("/:userWord", checkUserGuess);

module.exports = gameRouter;
