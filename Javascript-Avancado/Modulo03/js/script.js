let nome = "Hebert Esteves Leal";

/*
console.log(nome.length); // 19
console.log(nome.indexOf("Esteves")); // 7
console.log(nome.indexOf(" ")); // -1

let resultado = "";
if (nome.indexOf("Silva") > -1) {
    resultado = "Achou";
} else {
    resultado = "Não achou";
}

console.log(resultado);

console.log(nome.slice(7, 14));
console.log(nome.slice(-12,-4));
console.log(nome.substring(0, 2));
console.log(nome.substr(0, 10));

let nomeComEspaco = "    Hebert     ";

console.log(nome.replace("Esteves", "Silva"));
console.log(nome.toUpperCase());
console.log(nome.toLowerCase());
console.log(nome.concat(" ", "Silva"));
console.log(nomeComEspaco.trim());
console.log(nomeComEspaco.trim().length);
console.log(nome.charAt(2));
console.log(nome[0]);

let array = nome.split(" ");
console.log(array);]
*/

let n = 10.6532432;

let resultado1 = n.toString();  
console.log(resultado1);

let resultado2 = n.toFixed(2);
console.log("R$ " + resultado2);

let numeroString = "25";
let resultado3 = parseInt(numeroString);
console.log(resultado3 + 5);

let numeroDecimalString = "25.9";
let resultado4 = parseFloat(numeroDecimalString);
console.log(resultado4 + 4.1);
