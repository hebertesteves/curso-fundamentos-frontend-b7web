let timer;

function comecar() {
    timer = setInterval(showTime, 1000);
}

function parar() {
    clearInterval(timer);
}

function showTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let txt = `${hours}:${minutes}:${seconds}`;

    document.querySelector(".demo").innerHTML = txt;
}

