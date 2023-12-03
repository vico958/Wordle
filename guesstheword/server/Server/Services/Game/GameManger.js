const {isInputBlank} = require('../Generals/GeneralValidator');
const GameDatabaseManger = require('./GameDatabaseManger');

class GameManger {
    constructor(){
        this.gameDatabase = new GameDatabaseManger();
        this.wordOfTheDay = this.gameDatabase.getWordOfTheDay();
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