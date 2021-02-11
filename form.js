class Form{
    constructor(){
        
    }

    display(){
        //DOM library
        var title = createElement("h1")
        title.html("CAR RACING")
        title.position(135,0)
        var input = createInput("Enter your name here")
        input.position(145,160)
        var button = createButton("PLAY")
        button.position(200,190)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount++
            player.setName(name)   
            player.setCount(playerCount)  
        var greeting = createElement("h2")  
        greeting.html("Welcome " + name)
        greeting.position(145,160)
        })
    }
}