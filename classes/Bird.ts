class Bird extends Chordate {

    isSwimming=false

    constructor (name:string, health:string, isFlying:boolean, foodPreferings:foodPreferingsType[]) {
        super (name, health, isFlying, false, foodPreferings)
        
        this.name=name
        this.health=health
        this.isFlying=isFlying
        this.foodPreferings=foodPreferings
        
}
}