class GameDatabaseManger{
    getWordOfTheDay = async() => {
        try{
            const wordOfTheDay = "x"; //await this.getWordOfTheDay(); // need to make it database work
            return wordOfTheDay;
        } catch(error){
            throw error;
        }
    }
}

module.exports = GameDatabaseManger;