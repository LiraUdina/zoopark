class Carp extends Fish {
    constructor (name, health, ) {
    super (name, health,  ['meat']) 
}
 
 feed (target) {
    console.log(`${this.name}`)
}
}

const worm = new Carp ("Червяка")
const carp =new Carp ("Карп", ["meat"] )
carp.eat(worm)
