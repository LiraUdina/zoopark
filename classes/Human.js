"use strict";
class Human extends Mammal {
    constructor(name, health) {
        super(name, health, ['plant', 'meat']);
    }
    feed(target) {
        console.log(`${this.name} покормила ${target.name}. ${target.name}`);
    }
}
const hum = new Human("Человек", "good");
hum.feed(monster);
