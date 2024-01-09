
class Mammal extends Chordate {

    isFlying= false
    isSwimming=false

    constructor (name:string, health:string, foodPreferings:foodPreferingsType[]) {
        super (name, health, false, false, foodPreferings)
        
        this.name=name
        this.health=health
        this.foodPreferings=foodPreferings
        
        //console.log('Mammal' , name, health, foodPreferings)
    }
}
    const zhuk = new Mammal("Жука" , "good" ,  ["plant"])
    const lion = new Mammal("Лев" , "good" ,  ["meat"])

    lion.eat(zhuk)
    
    monster.eat(lion)
