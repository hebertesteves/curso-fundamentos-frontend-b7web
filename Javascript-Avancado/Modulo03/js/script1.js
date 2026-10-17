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
