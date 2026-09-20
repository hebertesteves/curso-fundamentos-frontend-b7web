// DOM = Document Object Model

/*
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
*/

/*
function clicou() {
    const teste = document.querySelector("#teste");
    // console.log(teste.children[0].children)

    const ul = teste.querySelector("ul");
    // ul.innerHTML += "<li>Item alterado</li>";

    // ul.children[0].innerHTML = "Primeiro item <strong>alterado</strong>!"
    // ul.children[1].innerText = "Segundo item alterado!"

    // ul.outerHTML = "<strong> Remove o ul e faz aparecer um strong</strong>";

    ul.children[0].append("(alterado)");
    // ul.append("<li>Item adicionado</li>");

    let newLi = document.createElement("li");
    newLi.innerText = "Item adicionado via appendChild";
    ul.append(newLi);
    // ul.appendChild(newLi);
    // ul.prepend(newLi); 

    let newBotao = document.createElement("button");
    newBotao.innerText = "Botão";
    // ul.after(newBotao);
    // ul.before(newBotao);

    let newUl = document.createElement("ul");
    ul.after(newUl);

    for (let i = 0; i < 5; i++) {
        let newLi = document.createElement("li");
        newLi.innerHTML = "Item add " + (i + 1);
        newUl.append(newLi);
    }
}
*/

function clicou() {
    const input = document.querySelector("input");
    const botao = document.querySelector(".botao");
    // console.log(input.getAttribute("type"));

    // if (input.hasAttribute("placeholder")) {
    //     console.log("Tem placeholder SIM");
    // } else {
    //     console.log("Não tem placeholder...");
    // }

    // input.setAttribute("placeholder", "Placeholder alterado!!!");

    if (input.getAttribute("type") === "text") {
        input.setAttribute("type", "password");
        botao.innerText = "Mostrar senha";
    } else {
        input.setAttribute("type", "text");
        botao.innerText = "Ocultar Senha";
    }
}

let botao = document.querySelector(".botao");
botao.addEventListener("click", clicou);

/*
botao.addEventListener("click", () => {
    clicou();
});
*/

function fazerAcao() {
    const li = document.querySelector("li");
    
    li.style.backgroundColor = "#00F";
    li.style.fontSize = "20px";
}
