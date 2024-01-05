class Bird extends Chordate {

    isSwimming=false

    constructor (name, health, isFlying, foodPreferings) {
        super (name, health, isFlying, false, foodPreferings)
        
        this.name=name
        this.health=health
        this.isFlying=isFlying
        this.foodPreferings=foodPreferings
        
}
}