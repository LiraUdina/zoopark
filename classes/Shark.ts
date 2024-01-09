class Shark extends Fish {
    constructor(name:string, health:string) {
      super(name, health, false, ['meat']);
    }
  
    bite(target:Fish) {
      console.log(`${this.name} укусила ${target.name}`);
    }
  }
  
  const shark = new Shark("Акула", "bad");
  const woman = new Shark("Девушку", "good");
  shark.bite(woman);