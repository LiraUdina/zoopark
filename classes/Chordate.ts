type foodPreferingsType= 'plant'| 'meat'
class Chordate{

    name
    health
    isFlying
    isSwimming
    foodPreferings

    constructor (name:string, health:string, isFlying:Boolean, isSwimming:Boolean, foodPreferings:foodPreferingsType[]) {
        this.name=name
        this.health=health
        this.isFlying=isFlying
        this.isSwimming=isSwimming
        this.foodPreferings=foodPreferings

        //console.log('Chordate' , name, health, isFlying, isSwimming, foodPreferings)
    }

    eat (target:Chordate){
        console.log(`${this.name} съел ${target.name}`);
    }
}

const upir = new Chordate("Упырь" , "good" , true, false, ['meat'])
const monster = new Chordate("Монстр" , "good" , false, true, ['meat'])

monster.eat(upir)

//console.log (`monster.name`, monster.name)