"use strict";
class Shark extends Fish {
    constructor(name, health) {
        super(name, health, false, ['meat']);
    }
    bite(target) {
        console.log(`${this.name} укусила ${target.name}`);
    }
}
const shark = new Shark("Акула", "bad");
const woman = new Shark("Девушку", "good");
shark.bite(woman);
