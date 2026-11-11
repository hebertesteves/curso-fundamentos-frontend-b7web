// function mostrar() {
//     const arquivo = document.querySelector("#foto").files[0];

//     let img = document.createElement("img");
//     img.src = URL.createObjectURL(arquivo);
//     img.width = 200;
//     document.querySelector("#pre-visualizacao").append(img);
// }

// async function enviar() {
//     const arquivo = document.querySelector("#foto").files[0];
//     let body = new FormData();

//     body.append('titulo', 'Foto de Perfil');
//     body.append('foto', arquivo);

//     try {
//         await fetch("/api/salvar", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'multipart/formdata'
//             },
//             body,
//         });
//     } catch (error) {
//         console.log("ERROR: " + error);
//     }
// }

function verificarAcesso(idade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => idade >= 18 ? resolve('Acesso permitido') : reject('Acesso negado'), 1000);
    });
}

let resultado = verificarAcesso(17);
resultado
    .then(resposta => console.log(resposta))
    .catch(resposta => console.log(resposta));


async function enviarComentario(nome, mensagem) {
    const name = nome.trim();
    const body = mensagem.trim();

    if (name === '' || body === '') return null;

    try {
        let resposta = await fetch("https://jsonplaceholder.typicode.com/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                body
            })
        });

        let resultado = await resposta.json();
        return resultado;
    } catch {
        return null;
    }
}

enviarComentario("Titulo", "Body");

document.querySelector("#foto").addEventListener('change', mostrarPreview);
document.querySelector("#enviar").addEventListener('click', enviarFoto);

function mostrarPreview() {
    const arquivo = document.querySelector("#foto").files[0];
    if (!arquivo) return false;

    let img = document.createElement("img");
    img.src = URL.createObjectURL(arquivo);
    img.width = 200;
    document.querySelector("#preview").append(img);
}

async function enviarFoto() {
    const arquivo = document.querySelector("#foto").files[0];
    if (!arquivo) return false;
    
    let body = new FormData();

    body.append('foto', arquivo);

    try {
        await fetch("https://exemplo.com/upload", {
            method: "POST",
            body,
        });

        return true;
    } catch {
        return false;
    }
}