"use strict";
class Parrot extends Bird {
    constructor(name, health) {
        super(name, health, true, ['plant']);
        this.isFlying = true;
    }
    repeat(target) {
        console.log(`${this.name} повторяет за ${target.name}`);
    }
}
const parrot = new Parrot("Попугай Кеша", "good");
parrot.repeat(hum);
