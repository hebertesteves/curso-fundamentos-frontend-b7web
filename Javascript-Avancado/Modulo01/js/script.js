// OO = Orientação a Objetos

// Programação Orientada a Objetos (POO - OOP)
// Programação Procedural
// Programação Funcional (PF - FP) (Functional Programming Paradigm)

// CLASSES
// FUNÇÕES/OBJETOS

class Person {
    age = 0;

    constructor(name) {
        this.name = name;
    }
}

let p1 = new Person("Hebert");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.age = 21;

console.log(`P1 = ${p1.name} tem ${p1.age} anos.`);
console.log(`P2 = ${p2.name} tem ${p2.age} anos.`);
console.log(`P2 = ${p3.name} tem ${p3.age} anos.`);
