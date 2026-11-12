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