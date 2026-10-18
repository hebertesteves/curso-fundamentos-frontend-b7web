/*
let lista = ["Ovo", "Farinha", "Corante", "Massa"];

let resultado1 = lista.toString();
let resultado2 = lista.join("-");
let resultado3 = lista.indexOf("Corante"); // 2

console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

let resultado4 = lista;

resultado4.pop();
console.log(resultado4);

resultado4.shift();
console.log(resultado4);

lista.push("Prato");
// lista[lista.length] = "Prato";
console.log(lista);

// delete lista[1];
lista.splice(1, 1);
console.log(lista);

let lista2 = ["Forno", "Fogão", "Liquidificador"];
let resultado5 = lista.concat(lista2);
console.log(resultado5);

lista.sort();
lista.reverse();
console.log(lista);
*/

let numeros = [45, 4, 9, 16, 15];
let numerosDobrados = [];

numerosDobrados = numeros.map(num => num * 2);
console.log(numerosDobrados);

let numerosPares = numeros.filter(n => n % 2 === 0);
console.log(numerosPares);

let resultadoTodosOsNumerosMaioresQueVinte = numeros.every(num => num > 20);
console.log(resultadoTodosOsNumerosMaioresQueVinte 
    ? "Sim, todos os numeros são maiores que 20" 
    : "Não, existem numeros que não são maiores que 20"
);

let resultadoAlgumNumeroMaiorQueVinte = numeros.some(num => num > 20);
console.log(resultadoAlgumNumeroMaiorQueVinte 
    ? "Sim, tem algum numero maior que 20" 
    : "Não, nenhum numero é maior que 20"
);
