class Fish extends Chordate {

    isSwimming=true

    constructor (name:string, health:string, isFlying:boolean, foodPreferings:foodPreferingsType[]) {
        super (name, health, isFlying, true, foodPreferings)
        
        this.name=name
        this.health=health
        this.isFlying=isFlying
        this.foodPreferings=foodPreferings
        
}
}
