// DOM = Document Object Model

let elementosH1 = document.getElementsByTagName("h1");
console.log(elementosH1[0]); // Vai retornar <h1>Olá Javascript</h1>

let divTeste = document.getElementById("teste");
console.log(divTeste);

elementosComClasseBotao = document.getElementsByClassName("botao");
console.log(elementosComClasseBotao);

let divTeste2 = document.querySelector("#teste2");
console.log(divTeste2);

let listaLiComIdTeste = document.querySelectorAll("#teste ul li");
console.log(listaLiComIdTeste);

function clicou() {
    console.log("Clicou no botão");
}

let botao = document.querySelector(".botao");
botao.addEventListener("click", clicou);

/*
botao.addEventListener("click", () => {
    clicou();
});
*/
