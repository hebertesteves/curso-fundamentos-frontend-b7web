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
