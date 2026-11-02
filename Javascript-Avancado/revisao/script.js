class ContaBancaria {
    _saldo;

    constructor(titular) {
        this.titular = titular;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor < 0) {
            return false;
        }

        this._saldo += valor;
        return true;
    }

    sacar(valor) {
        if (valor < 0 || valor > this._saldo) {
            return false;
        }

        this._saldo -= valor;
        return true;
    }
}

let conta = new ContaBancaria("Hebert");
conta.depositar(1500);
conta.sacar(500);
console.log(`O titular ${conta.titular} tem atualmente o saldo de R$ ${conta.saldo}`);

function criarProduto(nome, preco, estoque) {
    return {
        nome,
        preco,
        estoque,
        vender: function vender(quantidade) {
            if (quantidade < 0 || quantidade > this.estoque || !Number.isInteger(quantidade))  return false;

            this.estoque -= quantidade;
            return true;
        }
    };
}

let produto1 = criarProduto("Iphone 17", 7000, 1000);
let produto2 = criarProduto("Samsung S26", 6800, 1500);
produto1.vender(900);
produto2.vender(500);

console.log(produto1);
console.log(produto2);a

class Usuario {
  constructor(nome) {
    this.nome = nome;
  }

  apresentar() {
    return `Olá, sou ${this.nome}`;
  }
}

const usuario1 = new Usuario('Ana');
const apresentar = usuario1.apresentar();
console.log(apresentar);

async function carregarPosts() {
    try {
        let resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
        let json = await resposta.json();
        console.log(json[0].title);
        return json;
    } catch(error) {
        console.log("ERRO: " + error);
        return [];
    }
}

async function criarPost(titulo, texto) {
    try {
        let resposta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {   
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                tile: titulo,
                body: texto,
                userId: 1
            }),
        });

        let json = await resposta.json();
        return json;
    } catch(error) {
        console.log("ERRO: " + error);
        return [];
    }
}

// carregarPosts();
console.log(criarPost("Titulo 1", "texto 1"));

const usuario = {
    nome: 'Ana',
    idade: 25,
    cidade: 'São Paulo'
};

const { nome, ...resto } = usuario;
console.log(resto);

function formatarCodigo(codigo) {
    if (codigo < 0 || !Number.parseInt(codigo)) return;

    return String(codigo).padStart(6, "0");
}

console.log(formatarCodigo("0"));
console.log(formatarCodigo("8"));
console.log(formatarCodigo(8));
console.log(formatarCodigo(1234567));

function analisarVendas(vendas) {
    const total = vendas.map(venda => venda.quantidade * venda.preco).reduce((total, n) => total + n, 0);
    const produtos = vendas.filter(venda => venda.quantidade > 0).map(venda => venda.produto);
    const quantidadeTotal = vendas.reduce((total, n) => total + n.quantidade, 0);

    return {
        total,
        produtos,
        quantidadeTotal
    };
}

let obj = [
    { produto: 'Mouse', quantidade: 2, preco: 50 },
    { produto: 'Teclado', quantidade: 1, preco: 100 },
    { produto: 'Mouse', quantidade: 0, preco: 50 }
]

console.log(analisarVendas(obj));

function gerarRelatorio(pessoas) {
    return pessoas
        .filter(pessoa => pessoa.idade >= 18)
        .sort((pessoa1, pessoa2) => pessoa1.idade - pessoa2.idade)
        .map(pessoa => `${pessoa.nome.trim().toUpperCase()} - ${pessoa.idade} anos - ${pessoa.cidade}`);
}

let pessoa = [
    { nome: '  Ana  ', idade: 25, cidade: 'SP' },
    { nome: 'Bruno', idade: 17, cidade: 'RJ' },
    { nome: 'Carlos', idade: 20, cidade: 'BH' }
];

console.log(gerarRelatorio(pessoa));
