class Chicken extends Bird {
    constructor (name:string, health:string) {
        super(name, health, false , ['plant'])
    }

    yells (target: Chicken) {
        console.log(`${this.name} кудахчет на ${target.name}`)
    }
}

const сhicken = new Chicken ("Курица" , "good" )
const man = new Chicken ("Человекa", "good")

сhicken.yells(man)