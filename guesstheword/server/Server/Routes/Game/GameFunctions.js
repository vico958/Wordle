const GameManger = require("../../Services/Game/GameManger");
  
  async function checkUserGuess(req, res){
      try {
        const { userWord } = req.params;
        const feedbackGuess = await GameManger.checkTheUserWord(userWord);
          res.status(200).send(JSON.stringify(feedbackGuess)); 
          res.end();
        } catch (error) {
        //   errorHandler(error, res);
        throw error;
        }
  }

  module.exports = {
    checkUserGuess
};