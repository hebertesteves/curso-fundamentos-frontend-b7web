/*
function gravidade() {
    console.log("A gravidde do planeta é:");
    console.log(9.8);
}

gravidade();
*/

function somar(n1, n2) {
    let soma = n1 + n2;
    console.log("Resultado: " + soma);
}

somar(10, 7);

function nomeCompleto(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}

let completo = nomeCompleto("Hebert", "Esteves");
console.log("Nome completo: " + completo);

// ENTRADA -> PROCESSAMENTO -> SAIDA

function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    }

    return false;
}

let idade = 65;
let verificacao = maiorDeIdade(idade);

if (verificacao) {
    console.log("É maior de idade");
} else {
    console.log("É menor de idade");
}
