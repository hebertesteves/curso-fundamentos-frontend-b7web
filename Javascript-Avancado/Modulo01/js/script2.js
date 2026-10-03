// Programação Funcional: É um paradigma onde o codigo é estruturado como uma serie de funções que se comunicam entre si.

function createPerson(name, lastName, age) {
    return {
        name,
        lastName,
        age,
        getFullName() {
            return `${this.name} ${this.lastName}`
        },
        start() {
            console.log("Deu start na pessoa");
        }
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
person1.start();
let person2 = createPerson("Junior", "Fulano", 20);

console.log(person1.name);
console.log(person2.age);
console.log(person1.getFullName());

const defaultUser = {
    name: '',
    email: '',
    level: 1
}

let user1 = {
    ...defaultUser,
    name: "Hebert",
    email: "hebert@gmail.com"
}

let admin1 = {
    ...defaultUser,
    name: "Admin Um",
    email: "admin1@gmail.com",
    level: 2
}

console.log(user1)
console.log(admin1)
