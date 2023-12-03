class GameClient{
    constructor(){
        this.url = "http://localhost:3002";
    }

    async checkIfWordIsGood(userWord){
        const response = await fetch(`${this.url}/game/${userWord}`,{
            method:"GET",
            headers: {
                "Content-Type": "application/json"
              },
        });
        console.log(await response.json())
        return;
    }
}
const gameClient = new GameClient();
gameClient.checkIfWordIsGood("viko");