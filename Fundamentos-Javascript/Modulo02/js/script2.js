let colors = ["blue", "red", "green"];
let idades = [10, 20, 30];

console.log(colors);
console.log(colors[1]);
console.log(idades[2]);

let lista = [
    "algo", 
    30, 
    "blabla", 
    true, 
    ["xx", "yy"]
];

console.log(lista[4][0]);

let ingredientes = [
    "agua",
    "farinha",
    "ovo",
    "corante",
    "sal"
];

console.log(`Total de ingredientes:  ${ingredientes.length}`);
ingredientes.push("fermento");

console.log(ingredientes);
console.log(`Total de ingredientes:  ${ingredientes.length}`);

ingredientes.pop();
ingredientes.shift();

// pop = remove o ultimo
// shift = remove o primeiro

// ========================================================================= //

// Exercicio de array #7
console.log("\n");

// 1. No array abaixo, qual o número que pega a Ferrari?
let carros = ['BMW', 'Ferrari', 'Mercedes'];
let x = 1;
console.log("1. " + carros[x]);

// 2. Troque a Ferrari por Audi
console.log("2. Lista com Audi:");
carros[x] = "Audi";
console.log(carros);

// 3. Adicione o Volvo a lista
console.log("3. Lista com Volvo:");
carros.push("Volvo");
console.log(carros);

// 4. Exiba quantos itens tem no array
console.log("4. Itens no array:");
console.log(carros.length);
