let nome = "Hebert";
console.log(nome);

nome = "Esteves";
console.log(nome);

/* Erro ao tenmtar alterar o valor de uma constante
const nome = "Hebert";
console.log(nome);

nome = "Esteves";
console.log(nome);
*/

var idade = 90;
console.log(idade);

idade = 99;
console.log(idade);

// ============================================================ //

let x = 0;

x = x + 10;

console.log(x);

let nome1 = "Hebert";
let sobrenome1 = "Esteves";

// let nomeCompleto = nome1 + " " + sobrenome1;
let nomeCompleto = `${nome1} ${sobrenome1} da Silva`;
console.log("Nome completo: " + nomeCompleto);

let idade1 = 20;
let idadeString = `Idade: ${idade1 + 2} anos`;
console.log(idadeString);

let n1 = 15;
let n2 = 20;
let n3 = 10;

let soma = (n1 + n2) - n3;

console.log(soma);
