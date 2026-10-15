let nome = "Hebert Esteves Leal";

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
