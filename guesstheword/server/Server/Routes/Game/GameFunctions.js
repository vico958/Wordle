const GameManger = require("../../Services/Game/GameManger");

// async function getWordOfTheDay(req, res) {
//     try {
//       const { officeId } = req.params;
//       const returnedStatistics = await StatisticsManager.mostBookedPlace(
//         officeId
//       );
//       res.status(200).send(JSON.stringify(returnedStatistics));
//       res.end();
//     } catch (error) {
//       errorHandler(error, res);
//     }
//   }
  
  async function checkUserGuess(req, res){
      try {
        const { userWord } = req.params;
        const feedbackGuess = await GameManger.checkTheUserWord(userWord);
          res.status(200).send(JSON.stringify(feedbackGuess));
          res.end();
        } catch (error) {
          errorHandler(error, res);
        }
  }

  module.exports = {
    getWordOfTheDay,
    checkUserGuess
};