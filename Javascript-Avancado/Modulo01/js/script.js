// OO = Orientação a Objetos

// Programação Orientada a Objetos (POO - OOP)
// Programação Procedural
// Programação Funcional (PF - FP) (Functional Programming Paradigm)

// CLASSES
// FUNÇÕES/OBJETOS

class Person {
    age = 0;
    steps = 0;

    constructor(name) {
        this.name = name;
    }

    takeAStep() {
        this.steps++;
    }

    setAge(newAge) {
        if (typeof newAge == 'number') {   
            this.age = newAge;
        } else {
            console.log("Idade não aceita. (Só números)");
        } 
    }
}

let p1 = new Person("Hebert");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.setAge(21);

console.log(`P1 = ${p1.name} tem ${p1.age} anos.`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos.`);
console.log(`P2 = ${p3.name} tem ${p3.age} anos.`);

p1.takeAStep();
p1.takeAStep();
p2.takeAStep();

console.log(`Passos P1: ${p1.name}: ${p1.steps}`);
console.log(`Passos P2: ${p2.name}: ${p2.steps}`);
console.log(`Passos P3: ${p3.name}: ${p3.steps}`);
