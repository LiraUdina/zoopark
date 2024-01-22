class Human extends Mammal {
    constructor (name:string, health:string) {
        super (name, health, ['plant', 'meat'])
    }
    feed (target:Chordate) {
        console.log(`${this.name} покормила ${target.name}. ${target.name}`)
    }
}

const hum = new Human ("Человек" , "good" )
hum.feed(monster);