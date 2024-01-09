"use strict";
class Bird extends Chordate {
    constructor(name, health, isFlying, foodPreferings) {
        super(name, health, isFlying, false, foodPreferings);
        this.isSwimming = false;
        this.name = name;
        this.health = health;
        this.isFlying = isFlying;
        this.foodPreferings = foodPreferings;
    }
}
