class Form {
    constructor(){
        this.input = createInput("name")
        this.button = createButton('Play')
        this.greeting = createElement('h3')
    }
    hide(){
        this.greeting.hide()
        this.input.hide()
        this.button.hide()
    }
    display(){
        var title = createElement('h2')
        title.html("Multiplayer Racing Game!")
        title.position(width/2-100, 0)

        var subTitle = createElement('h4')
        subTitle.html("Developed by Narein Mohan")
        subTitle.position(width/2-100, 30)



        this.input.position(width/2-40, height/2-80)
        this.button.position(width/2+30, height/2)

        this.button.mousePressed(()=>{
           this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount+=1
            player.index = playerCount
            player.update()
            player.updateCount(playerCount)

            this.greeting.html("Hello "+player.name)
            this.greeting.position(width/2-70, height/4)
        })

    }
}