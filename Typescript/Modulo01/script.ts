let numero1 = document.getElementById("numero1") as HTMLInputElement;
let numero2 = document.getElementById("numero2") as HTMLInputElement;
let botao = document.getElementById("calcular") as HTMLButtonElement;
let resultado = document.getElementById("resultado") as HTMLElement;

function calcular(n1: string, n2: string): number {
    // return n1 + n2; -> "5" + "5" = "55";
    if (typeof n1 === 'number' && typeof n2 === "number") {
        return n1 + n2;
    } else {
        return +n1 + +n2;
    }
}

botao.addEventListener("click", function() {
    resultado.innerHTML = String(calcular(numero1.value, numero2.value));
});
