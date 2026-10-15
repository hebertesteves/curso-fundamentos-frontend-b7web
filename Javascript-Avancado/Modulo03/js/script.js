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
