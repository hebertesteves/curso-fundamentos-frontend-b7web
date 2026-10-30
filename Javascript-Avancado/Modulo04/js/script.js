// O que é requisição?

let pessoa = {
    nome: "Hebert",
    idade: 20,
    caracteristicas: ["sorridente", "maravilhoso", "inteligente"],
    estetica: {
        altura: 1.70,
        peso: 70
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.caracteristicas[2]);
console.log(pessoa.estetica.altura);
console.log(pessoa.estetica.peso);

let jsonString = '{"nome": "hebert", "idade": 90}';
let pessoa1 = JSON.parse(jsonString);
console.log(pessoa1);
console.log(pessoa1.nome);
