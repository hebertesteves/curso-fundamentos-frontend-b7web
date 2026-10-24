/*
let nome = "Hebert";
let idade = 20;

// let frase = "Meu nome é " + nome + " e eu tenho " + idade + " anos. E ano que vem farei " + (idade + 1) + " anos";
let frase = `Meu nome é ${nome} e eu tenho ${idade} anos. E ano que vem farei ${idade + 1} anos`;
console.log(frase);
*/

let pessoa = {
    nome: "Hebert",
    sobrenome: "Esteves",
    idade: 20,
    social: {
        facebook: "hebert",
        instagram: "hebert"
    },
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`;
    }
};

console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;

//let {nome:pessoaNome, sobrenome, idade} = pessoa;
let {nome, sobrenome, idade = 0} = pessoa;

console.log(nome, sobrenome, idade);
