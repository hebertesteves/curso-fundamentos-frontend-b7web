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
