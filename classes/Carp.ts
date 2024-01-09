class Carp extends Fish {
    constructor(name: string, health: string) {
      super(name, health, true,  ['meat']);
    }
  
    feed(target: Fish) {
      console.log(`${this.name} покормил ${target.name}`);
    }
  }
  
  const worm = new Carp("Червяка", "good");
  const carp = new Carp("Карп", "good");
  
  carp.eat(worm);
