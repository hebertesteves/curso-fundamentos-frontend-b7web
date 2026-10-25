/*
let nome = "Hebert";
let idade = 20;

// let frase = "Meu nome é " + nome + " e eu tenho " + idade + " anos. E ano que vem farei " + (idade + 1) + " anos";
let frase = `Meu nome é ${nome} e eu tenho ${idade} anos. E ano que vem farei ${idade + 1} anos`;
console.log(frase);
*/

/*
let pessoa = {
    nome: "Hebert",
    sobrenome: "Esteves",
    idade: 20,
    social: {
        facebook: "hebert",
        instagram: {
            url: "@hebert",
            seguidores: 1000
        }
    }
};

console.log(pessoa);

// let nome = pessoa.nome;
// let sobrenome = pessoa.sobrenome;
// let idade = pessoa.idade;

//let {nome:pessoaNome, sobrenome, idade} = pessoa;
// let { nome, sobrenome, idade = 0, social: { instagram: { url:instagram, seguidores } } } = pessoa;
let { nome, sobrenome, idade = 0, social: { instagram } } = pessoa;

console.log(nome, sobrenome, idade, instagram);

let { facebook } = pessoa.social;
console.log(facebook);

function pegarNomeCompleto({nome = '', sobrenome = '', social: {instagram:{url:instagram}}}) {
    return `${nome} ${sobrenome} (Siga em ${instagram})`;
}

console.log(pegarNomeCompleto(pessoa));
*/

let info = ["Hebert Esteves", "Hebert", "Esteves", "@hebert"];

let [ nomeCompleto, nome, sobrenome, instagram] = info;
// let [ nomeCompleto, , , instagram] = info;

console.log(nomeCompleto, nome, sobrenome, instagram);

// let [nome, sobrenome, idade = 90] = ["Hebert", "Esteves"];
// console.log(nome, sobrenome, idade);

function criar() {
    let a = [1, 2, 3];
    return a;
}

let [a, b, c] = criar();
console.log(a, b, c);

/*
function somar(x, y) {
    return x + y;
}
*/

/*
let somar = function(x, y) {
    return x + y;
}
*/

/*
let somar = (x, y) => {
    return x + y;
};
*/

let somar = (x, y) => x + y;

let letrasNoNome = nome => nome.length;

console.log(somar(10, 5));
console.log(letrasNoNome("Hebert"));
