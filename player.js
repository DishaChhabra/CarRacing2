class Player{
    constructor(){
        
    }

    // read the player count from database
    getCount(){
        database.ref("playerCount").on("value", function(data){
            playerCount = data.val()
        })  
    }

    // write the player count in database
    setCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    setName(name){
        database.ref("player" + playerCount).update({
            name: name
        })
    }
    
}