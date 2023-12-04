const {isInputBlank} = require('../Generals/GeneralValidator');
const GameApiRequestManger = require('./GameApiRequestManger');

class GameManger {
    constructor(){
        this.gameApiRequestManger = new GameApiRequestManger();
        this.getWordOfTheDayConstructorUse().then(word => {
            this.wordOfTheDay = word[0];
        })
    }
    async getWordOfTheDayConstructorUse(){
        try {
            const wordOfTheDay = await this.gameApiRequestManger.getWordOfTheDay();
            return wordOfTheDay;
          } catch (error) {
            throw error;
          }
    }
    async getWordOfTheDay(){
        return this.wordOfTheDay;
    }
    async checkTheUserWord(userWord){
        if (isInputBlank(userWord) === true || userWord.length !== this.wordOfTheDay.length){
            throw "error";
        }
        return this.generateFeedback(userWord);
    }

    generateFeedback(userWord) {
        const feedbackArray = [];
        for (let i = 0; i < this.wordOfTheDay.length; i++) {
            if (userWord[i] === this.wordOfTheDay[i]) {
                feedbackArray.push("green");
            } else if (this.wordOfTheDay.includes(userWord[i])) {
                feedbackArray.push("yellow");
            } else {
                feedbackArray.push("gray");
            }
        }
        return feedbackArray;
    }
}

module.exports = new GameManger();