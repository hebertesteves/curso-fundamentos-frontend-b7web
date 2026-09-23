const input = document.querySelector("input");
const botao = document.querySelector("button");
const ul = document.querySelector("ul");

botao.addEventListener("click", adicionar);

function adicionar() {
    if (input.value.trim() !== "") {
        let newLi = document.createElement("li");
        newLi.innerText = input.value;
        ul.appendChild(newLi);

        input.value = '';
    }
}

// ================================================================ //

const produtos = [
    { nome: "Teclado", preco: 150, estoque: 5 },
    { nome: "Mouse", preco: 80, estoque: 0 },
    { nome: "Monitor", preco: 900, estoque: 3 },
    { nome: "Cabo USB", preco: 30, estoque: 10 }
];

function analisarProdutos(produtos) {
    let quantidadeDisponiveis = 0;
    let valorTotalEstoque = 0;
    let produtoMaisCaro = produtos[0];

    for (const produto of produtos) {
        if (produto.preco > produtoMaisCaro.preco) produtoMaisCaro = produto;

        if (produto.estoque > 0) {
            quantidadeDisponiveis++;
            valorTotalEstoque += (produto.estoque * produto.preco);
        }
    }

    return {
        quantidadeDisponiveis,
        valorTotalEstoque,
        produtoMaisCaro: produtoMaisCaro.nome,
    }
}

console.log(analisarProdutos(produtos));
