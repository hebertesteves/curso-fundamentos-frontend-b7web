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

let pessoa2 = {
    nome: "Hebert",
    idade: 20
}

let pessoaString = JSON.stringify(pessoa2);
console.log(pessoaString);

// Código Sincrono
let nome = "Hebert";
let sobrenome = "Esteves";
let nomeCompleto = nome + " " + sobrenome;

// Código Assíncrono
/*
let nome = "Hebert";
let sobrenome = "Esteves";
let temparatura = Maquininha.pegarTemperatura(); // Assincrona -> Requisição Fake para buscar a requisição
let nomeCompleto = nome + " " + sobrenome;
*/

// CALLBACK
// I'm gonna call you back = Eu te ligo de volta

function alertar() {
    console.log("Opa, tudo bem?");
}

let nome1 = "Hebert";
setTimeout(alertar, 2000);
let sobrenome1 = "Esteves";
console.log("NOME COMPLETO = " + nome1 + " " + sobrenome1);
