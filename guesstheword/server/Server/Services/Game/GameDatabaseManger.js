class GameDatabaseManger{
    getWordOfTheDay = async() => {
        try{
            const wordOfTheDay = await this.getWordOfTheDay();
            return wordOfTheDay;
        } catch(error){
            throw error;
        }
    }
}