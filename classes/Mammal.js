"use strict";
class Mammal extends Chordate {
    constructor(name, health, foodPreferings) {
        super(name, health, false, false, foodPreferings);
        this.isFlying = false;
        this.isSwimming = false;
        this.name = name;
        this.health = health;
        this.foodPreferings = foodPreferings;
        //console.log('Mammal' , name, health, foodPreferings)
    }
}
const zhuk = new Mammal("Жука", "good", ["plant"]);
const lion = new Mammal("Лев", "good", ["meat"]);
lion.eat(zhuk);
monster.eat(lion);
