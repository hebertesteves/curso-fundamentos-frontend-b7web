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

// ============================================================== //

// Exercicio de funções #4

/*
Calcule a porcentagem entre 2 números.
Exemplo: 25% de 40 é 10
Fórmula da porcentagem (y / x) * 100
Uso da função:

let x = 40;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);
*/

function calcPct(n1, n2) {
    return (n2 / n1) * 100;
}

let x = 80;
let y = 10;
let pct = calcPct(x, y);
console.log(`${pct}% de ${x} é ${y}`);

// Exercicio de funções #5
/*
- m2 = 3.000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
Uso da função:
*/

function calcularImovel(metragem, quartos) {
    let m2 = 3000;
    let preco = 0;

    switch (quartos) {
        case 1:
        default:
            preco = metragem * m2;
        break;
        case 2:
            preco = metragem * (m2 * 1.2);
        break;
        case 3:
            preco = metragem * (m2 * 1.5);
        break;
    }

    return preco;
}

let metragem = 123;
let quartos = 3;
let preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);

// Exercicio de funções #5

/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta 123
*/

function validar(usuario, senha) {
    if (usuario == 'pedro' && senha == '123') {
        return true;
    }

    return false;
}

let usuario = 'hebert';
let senha = '1234';
let validacao = validar(usuario, senha);
if (validacao) {
    console.log("Acesso concedido.");
} else {
    console.log("Acesso NEGADO!");
}
