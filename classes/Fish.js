"use strict";
class Fish extends Chordate {
    constructor(name, health, isFlying, foodPreferings) {
        super(name, health, isFlying, true, foodPreferings);
        this.isSwimming = true;
        this.name = name;
        this.health = health;
        this.isFlying = isFlying;
        this.foodPreferings = foodPreferings;
    }
}
