class GameClient{
    constructor(){
        this.url = "http://localhost:3002";
    }

    async checkIfWordIsGood(userWord ){
        try{
            const response = await fetch(`${this.url}/game/${userWord}`,{
                method:"GET",
                headers: {
                    "Content-Type": "application/json"
                  },
            });
            const responseJson = await response.json();
            console.log(responseJson);
            return responseJson;
        }catch(error){
            console.log(error.message);
        }
    }
}
const gameClient = new GameClient();
gameClient.checkIfWordIsGood("vikoo");