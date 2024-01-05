class Chicken extends Bird {
    constructor (name, health) {
        super(name, health, ['plant'])
    }

    yells (target, food) {
        console.log(`${this.name} кудахчет на ${target.name}`)
    }
}

const сhicken = new Chicken ("Курица" , ['plant'] )
const man = new Chicken ("Человекa", "good")
сhicken.yells(man)