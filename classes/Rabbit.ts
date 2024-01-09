class Rabbit extends Mammal {
    constructor(name:string, health:string) {
      super(name, health, ['plant'])
    }
  
    jump() {
      console.log(`${this.name} подпрыгнул высоко`)
    }
  }
  
  const rab = new Rabbit("Заяц", "good")
  rab.jump()