"use strict";
class Carp extends Fish {
    constructor(name, health) {
        super(name, health, true, ['meat']);
    }
    feed(target) {
        console.log(`${this.name} покормил ${target.name}`);
    }
}
const worm = new Carp("Червяка", "good");
const carp = new Carp("Карп", "good");
carp.eat(worm);
