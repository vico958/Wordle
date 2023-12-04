class GameApiRequestManger {
  constructor() {
    this.wordOfTheDay = null;
    this.lastApiCallTimestamp = null;
  }

  getWordOfTheDay = async () => {
    try {
      const currentDate = new Date();
      // Check if the word is cached and the last API call was more than a day ago
      if (!this.wordOfTheDay || !this.lastApiCallTimestamp || this.isMoreThanADayAgo(currentDate, this.lastApiCallTimestamp)) {
        // Call the API to get a new word
        const newWord = await this.fetchWordFromApi();
        this.wordOfTheDay = newWord;
        this.lastApiCallTimestamp = currentDate;
      }
      return this.wordOfTheDay;
    } catch (error) {
      throw error;
    }
  };

  isMoreThanADayAgo = (currentDate, lastApiCallTimestamp) => {
    const oneDayInMillis = 24 * 60 * 60 * 1000; // One day in milliseconds
    return currentDate - lastApiCallTimestamp > oneDayInMillis;
  };

  fetchWordFromApi = async () => {
    try {
      // Make the API call to get a new word
      const response = await fetch('https://random-word-api.herokuapp.com/word?length=5',{
        method:"GET",
        headers: {
            "Content-Type": "application/json"
          },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  };
}

module.exports = GameApiRequestManger;
