"use strict";
class Shark extends Fish {
    constructor(name, health) {
        super(name, health, false, ['meat']);
    }
    byte(target) {
        console.log(`${this.name} укусила ${target.name}`);
    }
}
const shark = new Shark("Акула", "bad");
shark.byte(upir);
