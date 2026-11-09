async function enviar() {
    let arquivo = document.getElementById("arquivo").files[0];
    console.log(arquivo);

    let body = new FormData();
    body.append('title', 'bla bla bla');
    body.append('arquivo', arquivo);

    await fetch("https://meusite.com.br/upload", {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        body
    });
}

/*
function mostrar() {
    let imagem = document.getElementById("imagem").files[0];
    console.log(imagem);

    let img = document.createElement("img");
    img.src = URL.createObjectURL(imagem);
    img.width = 200;

    document.getElementById("area").appendChild(img);
}
*/

function mostrar() {
    let reader = new FileReader();
    let imagem = document.getElementById("imagem").files[0];

    reader.onloadend = function() {
        let img = document.createElement("img");
        img.src = reader.result;
        img.width = 200;

        document.getElementById("area").appendChild(img);
    }

    reader.readAsDataURL(imagem);
}
