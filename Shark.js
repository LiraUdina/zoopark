class Shark extends Fish {
    constructor(name, health) {
      super(name, health, ['meat']);
    }
  
    bite(target) {
      console.log(`${this.name} укусила ${target.name}`);
    }
  }
  
  const shark = new Shark("Акула", "bad");
  shark.bite(monster);