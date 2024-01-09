
class Dog extends Mammal {
    constructor (name:string, health:string,) {
        super(name, health, ['meat', 'plant'])
    }

    byte (target:Mammal) {
        console.log(`${this.name} укусила ${target.name}`)
    }
}

const dog = new Dog ("Собака" , "bad" )

dog.byte(lion)