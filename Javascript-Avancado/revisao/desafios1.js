// Desafio 1
function gerarResumoPedidos(pedidos) {
    const pedidosPagos = pedidos.filter(pedido => pedido.status === 'pago');

    const buscarMaiorPedidoPago = () => {
        let {id, cliente, valor} = pedidosPagos.sort((p1, p2) => p2.valor - p1.valor)[0];
        cliente = cliente.trim().toUpperCase();
        return {id, cliente, valor};
    }

    const totalRecebido = pedidosPagos.reduce((total, pedido) => total + pedido.valor, 0);
    const quantidadePagos = pedidosPagos.length;
    const ticketMedio = quantidadePagos > 0 ? totalRecebido / quantidadePagos : 0;
    const clientesUnicos = [...new Set(pedidosPagos.map(pedido => pedido.cliente.trim().toUpperCase()))];
    const maiorPedido = quantidadePagos > 0 ? buscarMaiorPedidoPago() : null;

    return {
        totalRecebido,
        quantidadePagos,
        ticketMedio,
        clientesUnicos,
        maiorPedido,
    }
}

const pedidos = [
  { id: 1, cliente: "  Ana Silva ", valor: 120, status: "pago" },
  { id: 2, cliente: "BRUNO", valor: 80, status: "pendente" },
  { id: 3, cliente: "ana silva", valor: 50, status: "pago" },
  { id: 4, cliente: " Carla ", valor: 200, status: "pago" },
  { id: 5, cliente: "Bruno", valor: 90, status: "cancelado" },
  { id: 6, cliente: "CARLA", valor: 30, status: "pago" }
];

console.log(gerarResumoPedidos(pedidos));

// Desafio 2

function criarEstoque() {
    let produtos = [];

    const proucurarProdutoPorNome = nome => produtos.find(produto => produto.nome === nome);
    const nomeOuQuantidadeInvalidos = (nome, quantidade) => nome === '' || quantidade <= 0 || !Number.isInteger(quantidade)

    return {
        adicionarProduto(nome, quantidade) {
            const nomeProduto = nome.trim().toUpperCase();
            if (nomeOuQuantidadeInvalidos(nomeProduto, quantidade)) return false;

            const temProdutoCadastrado = proucurarProdutoPorNome(nomeProduto);
            if (!temProdutoCadastrado) {
                produtos.push({nome: nomeProduto, quantidade});
                return true;
            }

            temProdutoCadastrado.quantidade += quantidade;
            return true;
        }, 
        removerProduto(nome, quantidade) {
            const nomeProduto = nome.trim().toUpperCase();
            if (nomeOuQuantidadeInvalidos(nomeProduto, quantidade)) return false;

            const temProdutoCadastrado = proucurarProdutoPorNome(nomeProduto);
            if (!temProdutoCadastrado) return false;

            if (quantidade > temProdutoCadastrado.quantidade) return false;
            temProdutoCadastrado.quantidade -= quantidade;
            return true;
        },
        consultarProduto(nome) {
            const temProdutoCadastrado = proucurarProdutoPorNome(nome.trim().toUpperCase());
            if (!temProdutoCadastrado) return null;

            return {...temProdutoCadastrado};
        },
        listarProdutos() {
            return structuredClone({...produtos});
        }
    }
}

const estoque = criarEstoque();

console.log(estoque.adicionarProduto("  Mouse ", 10));
// true

console.log(estoque.adicionarProduto("mouse", 5));
// true

console.log(estoque.adicionarProduto("Teclado", 3));
// true

console.log(estoque.removerProduto("MOUSE", 4));
// true

console.log(estoque.removerProduto("Mouse", 20));
// false

console.log(estoque.consultarProduto(" mouse "));
// { nome: "MOUSE", quantidade: 11 }

console.log(estoque.listarProdutos());
// [
//   { nome: "MOUSE", quantidade: 11 },
//   { nome: "TECLADO", quantidade: 3 }
// ]

console.log();
const produto = estoque.consultarProduto("Mouse");
produto.quantidade = 999;

const lista = estoque.listarProdutos();
lista[0].quantidade = 500;

console.log(estoque.consultarProduto("Mouse"));
// { nome: "MOUSE", quantidade: 11 }

console.log("\n\n");

// Desafio 3

class CarteiraDigital {
    #saldo;
    historicoPagamentos = [];

    constructor(titular, saldoInicial = 0) {
        if (titular.trim() === '' 
            || typeof titular !== "string" 
            || !Number.isFinite(saldoInicial) 
            || saldoInicial < 0
        ) throw new Error();

        this.titular = titular.trim();
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (!Number.isFinite(valor) || valor <= 0) return false;

        this.#saldo += valor;
        this.historicoPagamentos.push({tipo: "DEPOSITO", valor});
        return true;
    }

    pagar(valor, descricao) {
        const descricaoPagamento = descricao.trim();
        if (!Number.isFinite(valor) 
            || valor <= 0 
            || descricaoPagamento === '' 
            || typeof descricaoPagamento !== 'string' 
            || valor > this.#saldo
        ) return false;

        this.#saldo -= valor;
        this.historicoPagamentos.push({tipo: "PAGAMENTO", valor, descricao: descricaoPagamento});
        return true;
    }

    transferir(destino, valor) {
        if (destino.titular === this.titular 
            || !Number.isFinite(valor) 
            || valor <= 0
            || valor > this.#saldo
        ) return false;

        destino.depositar(valor);
        this.#saldo -= valor;
        
        this.historicoPagamentos.push({tipo: "TRANSFERENCIA_ENVIADA", valor, destino: destino.titular});
        destino.historicoPagamentos.push({tipo: "TRANSFERENCIA_RECEBIDA", valor, origem: this.titular});
        return true;
    }

    consultarSaldo() {
        return this.#saldo;
    }

    consultarHistorico() {
        return structuredClone([...this.historicoPagamentos]);
    }
}

const ana = new CarteiraDigital(" Ana ", 200);
const bruno = new CarteiraDigital("Bruno", 50);

console.log(ana.depositar(100));       // true
console.log(ana.pagar(40, " Mercado ")); // true
console.log(ana.transferir(bruno, 80)); // true
console.log(ana.transferir(ana, 10));   // false
console.log(ana.consultarSaldo());      // 180
console.log(bruno.consultarSaldo());    // 130
console.log(ana.consultarHistorico());
console.log("\n")

const historico = ana.consultarHistorico();
historico[0].valor = 9999;
historico.push({ tipo: "DEPOSITO", valor: 5000 });

console.log(ana.consultarHistorico()[0].valor);
// 100
console.log(ana.consultarHistorico().length);
//3

console.log("\n\n");

// Desafio 4

function verificarEstoque(produtoId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (produtoId === 999) {
                reject(new Error("Serviço indisponível"));
                return;
            }

            const produtos = {
                1: { nome: "Notebook", quantidade: 5 },
                2: { nome: "Mouse", quantidade: 0 },
                3: { nome: "Teclado", quantidade: 10 }
            };

            resolve(produtos[produtoId] ?? null);
        }, 500);
    });
}

async function processarPedido(produtoId, quantidade) {
    const ehInteiroPositivo = (valor) => Number.isInteger(valor) && valor > 0;
    if (!ehInteiroPositivo(produtoId) || !ehInteiroPositivo(quantidade)) return {sucesso: false, mensagem: "Parâmetros inválidos"};

    const resultado = await verificarEstoque(produtoId)
        .then(produto => {
            if (produto === null) return {sucesso: false, mensagem: "Produto não encontrado"};

            if (quantidade > produto.quantidade) return {sucesso: false, mensagem: "Estoque insuficiente"};
            
            return {
                sucesso: true,
                mensagem: "Pedido aprovado",
                produto: produto.nome,
                quantidade: produto.quantidade,
            }
        })
        .catch(() => {
            return {sucesso: false, mensagem: "Erro ao consultar estoque"};
        });

    return resultado;
}

async function executar() {
    await processarPedido(1, 2).then(response => console.log(response)).catch(response => console.log(response));
    await processarPedido(2, 1).then(response => console.log(response)).catch(response => console.log(response));
    await processarPedido(3, 15).then(response => console.log(response)).catch(response => console.log(response));
    await processarPedido(50, 1).then(response => console.log(response)).catch(response => console.log(response));
    await processarPedido(999, 1).then(response => console.log(response)).catch(response => console.log(response));
    await processarPedido("1", 2).then(response => console.log(response)).catch(response => console.log(response));
    await processarPedido(1, 1.5).then(response => console.log(response)).catch(response => console.log(response));
}

executar();
