class Parrot extends Bird {

    isFlying = true

    constructor(name:string, health:string) {
      super(name, health, true, ['plant'] );
    }
  
    repeat(target:Human) {
      console.log(`${this.name} повторяет за ${target.name}`);
    }
  }
  
  const parrot = new Parrot("Попугай Кеша", "good");
  parrot.repeat(hum);