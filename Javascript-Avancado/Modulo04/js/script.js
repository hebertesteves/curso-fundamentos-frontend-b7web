// O que é requisição?

let pessoa = {
    nome: "Hebert",
    idade: 20,
    caracteristicas: ["sorridente", "maravilhoso", "inteligente"],
    estetica: {
        altura: 1.70,
        peso: 70
    }
};

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.caracteristicas[2]);
console.log(pessoa.estetica.altura);
console.log(pessoa.estetica.peso);

let jsonString = '{"nome": "hebert", "idade": 90}';
let pessoa1 = JSON.parse(jsonString);
console.log(pessoa1);
console.log(pessoa1.nome);

let pessoa2 = {
    nome: "Hebert",
    idade: 20
}

let pessoaString = JSON.stringify(pessoa2);
console.log(pessoaString);

// Código Sincrono
let nome = "Hebert";
let sobrenome = "Esteves";
let nomeCompleto = nome + " " + sobrenome;

// Código Assíncrono
/*
let nome = "Hebert";
let sobrenome = "Esteves";
let temparatura = Maquininha.pegarTemperatura(); // Assincrona -> Requisição Fake para buscar a requisição
let nomeCompleto = nome + " " + sobrenome;
*/

// CALLBACK
// I'm gonna call you back = Eu te ligo de volta

function alertar() {
    console.log("Opa, tudo bem?");
}

let nome1 = "Hebert";
setTimeout(alertar, 2000);
let sobrenome1 = "Esteves";
console.log("NOME COMPLETO = " + nome1 + " " + sobrenome1);

function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log("pegando temparatura...");

        setTimeout(function() {
            resolve("40 na sombra")
        }, 2000);
    });
}

// Usando a Promise
console.log("código antes!");

let temp = pegarTemperatura();

console.log("código durante!");

temp.then(function(resultado) {
    console.log("TEMPARATURA: " + resultado);
});
temp.catch(function(error) {
    console.log("DEU ERRO: " + error);
});

console.log("código depois!");

/*
function loadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando...';
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(resultado => resultado.json())
        .then(json => {
            montarBlog(json);
        })
        .catch(error => console.log("Deu problema: " + error));
}
*/

// Usando Async e Await
async function loadPosts() {
    document.getElementById("posts").innerHTML = 'Carregando...';
    
    try {
        let req = await fetch("https://jsonplaceholder.typicode.com/posts");
        let json = await req.json();
        montarBlog(json);
    } catch (error) {
        console.log("Deu problema: " + error)
    }
}

function montarBlog(lista) {
    let html = '';

    for (let i in lista) {
        html += '<h3>'+lista[i].title+'</h3>';
        html += lista[i].body+'<br/>';
        html += '<hr/>'
    }

    document.getElementById("posts").innerHTML = html;
}

async function insertPosts() {
    document.getElementById("posts").innerHTML = 'Carregando...';

    let req = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "Titulo de Teste",
            body: "Corpo de teste",
            userId: 4
        })
    });

    let json = await req.json();

    console.log(json);
}
