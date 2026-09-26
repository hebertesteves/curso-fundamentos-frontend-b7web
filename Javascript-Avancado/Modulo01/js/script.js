// OO = Orientação a Objetos

// Programação Orientada a Objetos (POO - OOP)
// Programação Procedural
// Programação Funcional (PF - FP) (Functional Programming Paradigm)

// CLASSES
// FUNÇÕES/OBJETOS

class Person {
    _age = 0;
    steps = 0;

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    takeAStep() {
        this.steps++;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    get age() {
        return this._age;
    }

    set age(newAge) {
        if (typeof newAge == 'number') {   
            this._age = newAge;
        }
    }
}

let p1 = new Person("Hebert", "Esteves");
let p2 = new Person("Maria", "Leite");
let p3 = new Person("Pedro", "Duarte");

p1.age = 20;

console.log(`P1 = ${p1.fullName} tem ${p1.age} anos.`);
console.log(`P2 = ${p2.fullName} tem ${p2.age} anos.`);
console.log(`P3 = ${p3.fullName} tem ${p3.age} anos.`);

p1.takeAStep();
p1.takeAStep();
p2.takeAStep();

console.log(`Passos P1: ${p1.fullName}: ${p1.steps}`);
console.log(`Passos P2: ${p2.fullName}: ${p2.steps}`);
console.log(`Passos P3: ${p3.fullName}: ${p3.steps}`);
