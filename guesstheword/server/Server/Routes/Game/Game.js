const express = require("express");
const { getWordOfTheDay, checkUserGuess } = require('./GameFunctions');
const gameRouter = express.Router();

gameRouter.get("/", getWordOfTheDay);
gameRouter.get("/:userWord", checkUserGuess);

module.exports = gameRouter;
