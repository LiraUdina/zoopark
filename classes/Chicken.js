"use strict";
class Chicken extends Bird {
    constructor(name, health) {
        super(name, health, false, ['plant']);
    }
    yells(target) {
        console.log(`${this.name} кудахчет на ${target.name}`);
    }
}
const сhicken = new Chicken("Курица", "good");
const man = new Chicken("Человекa", "good");
сhicken.yells(man);
