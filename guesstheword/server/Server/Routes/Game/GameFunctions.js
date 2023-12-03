const GameManger = require("../../Services/Game/GameManger");

async function getWordOfTheDay(req, res) {
  res.status(200).send(JSON.stringify(req.params));
  res.end();
    // try {
    //   const { officeId } = req.params;
    //   const returnedStatistics = await StatisticsManager.mostBookedPlace(
    //     officeId
    //   );
    //   res.status(200).send(JSON.stringify(returnedStatistics));
    //   res.end();
    // } catch (error) {sss
    //   errorHandler(error, res);
    // }
  }
  
  async function checkUserGuess(req, res){
      try {
        console.log("user world is : ", req.params);
        const { userWord } = req.params;
        res.status(200).send(JSON.stringify(userWord)); 
        res.end();
        // const feedbackGuess = await GameManger.checkTheUserWord(userWord);
        //   res.status(200).send(JSON.stringify(feedbackGuess)); 
        //   res.end();
        } catch (error) {
        //   errorHandler(error, res);
        throw error;
        }
  }

  module.exports = {
    getWordOfTheDay,
    checkUserGuess
};