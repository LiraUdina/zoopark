class Fish extends Chordate {

    isSwimming=true

    constructor (name, health, isFlying, foodPreferings) {
        super (name, health, isFlying, true, foodPreferings)
        
        this.name=name
        this.health=health
        this.isFlying=isFlying
        this.foodPreferings=foodPreferings
        
}
}
