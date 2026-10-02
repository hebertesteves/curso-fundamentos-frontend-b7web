// Programação Funcional: É um paradigma onde o codigo é estruturado como uma serie de funções que se comunicam entre si.

function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age
    };
}

/*
let person1 = {
    name: "Hebert",
    lastName: "Esteves",
    age: 90
};
*/

/*
let person2 = {
    name: "Junior",
    lastName: "Fulano",
    age: 21
};
*/

let person1 = createPerson("Hebert", "Esteves", 90);
let person2 = createPerson("Junior", "Fulano", 20);

console.log(person1.name);
console.log(person2.age);
