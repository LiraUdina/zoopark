class Human extends Mammal {
    constructor (name, health) {
        super (name, health, ['plant', 'meat'])
    }
    feed (target, food) {
        console.log(`${this.name} покормила ${target.name}. ${target.name} съела ${food}`)
    }
}
const oly = new Human("Оля", "bad")
oly.feed(dog, "косточку");