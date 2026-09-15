// let cores = ["preto", "branco", "azul", "vermelho"];
let cores = [
    { nome: "Preto", qt: 10 },
    { nome: "Azul", qt: 5 },
    { nome: "Vermelho", qt: 15 }
]

/*
for (let n = 0; n < cores.length; n++) {
    console.log(cores[n])
}
    */

/*
for (let i in cores) {
    console.log(cores[i]);
}
*/

/*
for (let cor of cores) {
    console.log(cor);
}
*/

for (let cor of cores) {
    cor.nome = cor.nome.toUpperCase();
    console.log(`Nome: ${cor.nome} - ${cor.qt}`);
}

let numero = 0;

while (numero <= 10) {
    console.log(`O número da vez é ${numero}`);
    numero++;
}

// ====================================================================== //

// Exercicio de loops #8

// 1. Faça um loop que mostre que todas as frutas
let fruits = ["Maça", "Uva", "Banana"];
for (let fruit of fruits) {
    console.log(fruit);
}

// 2. Conte de 1 até 100 através de um WHILE
let n = 1;

while (n <= 100) {
    console.log(n);
    n++;
}
