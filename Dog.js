class Dog extends Mammal {
    constructor (name, health) {
        super(name, health, ['meat', 'plant'])
    }

    byte (target) {
        console.log(`${this.name} укусила ${target.name}`)
    }
}

const dog = new Dog ("Собака" , "bad" )

dog.byte(lion)