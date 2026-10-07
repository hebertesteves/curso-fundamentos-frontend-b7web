// Requisições são solicitações que uma aplicação faz a um servidor para obter ou enviar dados

// O que é Sincrono e Assincrono?

// Sincrono

let nome = "hebert";
let sobrenome = "esteves";
let nomeCompleto = nome + " " + sobrenome;

/*
Como a Web funciona (Requisição e Resposta)?
Request = Requisição
-> Cabeçalhos / Headers
-> Corpo da Requisição / Body

Response = Resposta
-> Cabeçalhos / Headers
-> Corpo / Body
*/

/*
Como uma API funciona?
API = Application Programming Interface

JSON = JavaScript Object Notation
*/

/*
O que é um Callback?

call back = ligar de volta


function clickCallback() {
    alert("Clicou no botão!");
}

document.querySelector("#botao").addEventListener("click", clickCallback);
*/

// Pelo DevTools em Network/Rede é possivel as requisições feitas
function clicou() {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        alert(`Titulo do primeiro post: ${json[0].title}`);
    })
}

document.querySelector("#botao").addEventListener("click", clicou);
