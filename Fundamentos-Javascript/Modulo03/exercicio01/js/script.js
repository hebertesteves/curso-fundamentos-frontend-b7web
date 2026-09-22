const input = document.querySelector("input");
const ul = document.querySelector("ul");

function salvar(event) {
    if (event.key === "Enter" && input.value !== "") {
        let newLi = document.createElement("li");
        newLi.innerText = input.value;
        ul.appendChild(newLi);
        
        input.value = "";
    }
}

input.addEventListener("keyup", salvar);
