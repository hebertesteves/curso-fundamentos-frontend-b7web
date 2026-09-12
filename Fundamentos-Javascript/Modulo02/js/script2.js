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
