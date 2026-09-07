let idade = 20;

// Condicional composta (else if)
if (idade < 18) {
    console.log("Você é uma criança.");
} else if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
} else if (idade >= 60) {
    console.log("Você é um idoso.");
}

/*
if (idade >= 18) {
    if (idade < 60) {
        console.log("Você é um adulto.");
    }
}
*/

/* AND
if (idade >= 18 && idade < 60) {
    console.log("Você é um adulto.");
}
    */

/* OR 
if (idade >= 18 || idade < 60) {
    console.log("Você é um adulto.");
}
*/

// if (idade === 20) {
//     idade = idade + 15;
//     console.log("Idade adicionada com suceso!");
//     console.log(idade);
// }

let adulto = idade >= 18 && idade < 60;

if (adulto) {
    console.log("É adulto");
} else {
    console.log("Não é adulto");
}

// ================================================== //

// Exercicio Condicional #2

// Substituia o @ pela condicional correta para que o resultado seja TRUE
let x = 10;
let y = 5;
console.log(y < x);

// Substituia o @ pela condicional correta para que o resultado seja FALSE
let w = "10";
let z = 10;
console.log (w === z);

// Substituia o @ pela condicional correta para que o resultado seja TRUE
let a = 10;
let b = 5;
console.log (a != b);

// Crie uma condicional para verificar se o preço da
// carne está barato ou caro. PS: Até 45 está barato
let preco = 40.3;
let estaBarato = preco <= 45;

if (estaBarato) {
    console.log("O preço da carne está barato!!");
} else {
    console.log("O preço da carne não está barato!!");
}
