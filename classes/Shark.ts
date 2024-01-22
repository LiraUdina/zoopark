class Shark extends Fish {
    constructor(name:string, health:string) {
      super(name, health, false, ['meat']);
    }
  
    byte(target:Chordate) {
      console.log(`${this.name} укусила ${target.name}`);
    }
  }
  
  const shark = new Shark("Акула", "bad");
  shark.byte(upir);