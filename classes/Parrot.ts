class Parrot extends Bird {

    isFlying = true

    constructor(name:string, health:string) {
      super(name, health, true, ['plant']);
    }
  
    repeat(target:Bird) {
      console.log(`${this.name} повторяет за ${target.name}`);
    }
  }
  
  const parrot = new Parrot("Попугай Кеша", ['plant']);
  const sveta = new Parrot ("Светой", "good")
  parrot.repeat(sveta);