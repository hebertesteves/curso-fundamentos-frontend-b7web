class CarrinhoCompras {
    #processando;
    #erro;
    #pedidoFinalizado;
    #carrinho;

    constructor() {
        this.#processando = false;
        this.#erro = null;
        this.#pedidoFinalizado = false;
        this.#carrinho = [];
    }

    adicionarProduto(produto, quantidade = 1) {
        if (this.#processando || produto === null || Array.isArray(produto)) return false;

        const ehNumeroInteiroPositivo = (numero) => Number.isInteger(numero) && numero > 0;
        const ehNumeroInfinitoPositivo = (numero) => Number.isFinite(numero) && numero > 0;
        
        if (!ehNumeroInteiroPositivo(produto.id)
            || produto.nome.trim() === '' 
            || !ehNumeroInfinitoPositivo(produto.preco) 
            || !ehNumeroInteiroPositivo(produto.estoque)
            || !ehNumeroInteiroPositivo(quantidade)
            || quantidade > produto.estoque) {
                return false;
            }

        let produtoEncontrado = this.#carrinho.find(p => p.id === produto.id);
        if (!produtoEncontrado) {
            this.#carrinho.push(structuredClone({...produto, quantidade}));
            return true;
        }

        if ((produtoEncontrado.quantidade + quantidade) > produtoEncontrado.estoque) return false;

        produtoEncontrado.quantidade += quantidade;
        return true;
    }

    alterarQuantidade(produtoId, quantidade) {
        if (this.#processando || !Number.isInteger(quantidade) || quantidade <= 0 || !Number.isInteger(produtoId) || produtoId <= 0) return false;

         let produtoEncontrado = this.#carrinho.find(p => p.id === produtoId);
         if (!produtoEncontrado || quantidade > produtoEncontrado.estoque) return false;

         produtoEncontrado.quantidade = quantidade;
         return true;
    }

    removerProduto(produtoId) {
        if (this.#processando || !Number.isInteger(produtoId) || produtoId <= 0) return false;

        let indexProdutoEncontrado = this.#carrinho.findIndex(p => p.id === produtoId);
        if (indexProdutoEncontrado === -1) return false;
        
        this.#carrinho.splice(indexProdutoEncontrado, 1);
        return true;
    }

    listarItens() {
       return structuredClone(this.#carrinho);
    }

    obterResumo() {
        const carrinhoEstaVazio = this.#carrinho.length === 0;
        const quantidadeItens = !carrinhoEstaVazio ? this.#carrinho.reduce((total, produto) => total + produto.quantidade, 0) : 0;
        const quantidadeProdutosDiferentes = !carrinhoEstaVazio ? [...new Set(this.#carrinho.map(produto => produto.id))].length : 0;
        const valorTotal = !carrinhoEstaVazio ? this.#carrinho.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0) : 0;
        const resumo = {
            quantidadeItens,
            quantidadeProdutosDiferentes,
            valorTotal
        };

        return structuredClone(resumo);
    }

    consultarEstado() {
        const processando = this.#processando;
        const erro = this.#erro;
        const pedidoFinalizado = this.#pedidoFinalizado;
        const itens = structuredClone(this.#carrinho);
        const estado = {
            processando,
            erro,
            pedidoFinalizado,
            itens
        };

        return structuredClone(estado);
    }

    async finalizarCompra() {
        const validacoesIniciais = [
            { validacao: this.#processando, mensagem: "Checkout em andamento" },
            { validacao: this.#pedidoFinalizado, mensagem: "Pedido já finalizado" },
            { validacao: this.#carrinho.length === 0, mensagem: "Carrinho vazio" }
        ];

        for (const {validacao, mensagem} of validacoesIniciais) {
            if (validacao) return this.#retornarErro(mensagem);
        }

        try {
            const itens = this.#carrinho.map(produto => {
                return {
                    produtoId: produto.id,
                    quantidade: produto.quantidade
                }
            });

            const valorTotal = this.#carrinho.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);

            const dados = {
                itens,
                valorTotal
            };

            this.#processando = true;
            this.#erro = null;

            const req = await fetch("https://api.exemplo.com/pedidos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dados)
            });

            if (!req.ok) return this.#retornarErro("Erro HTTP ao finalizar compra");

            const resultado = await req.json();

            if (!Number.isInteger(resultado.pedidoId) || resultado.pedidoId <= 0 || resultado.status !== "confirmado") return this.#retornarErro("Resposta de checkout inválida");

            this.#pedidoFinalizado = true;
            this.#carrinho = [];
            this.#erro = null;
            return {sucesso: true, mensagem: "Compra finalizada", pedidoId: resultado.pedidoId};
        } catch {
            return this.#retornarErro("Falha na comunicação com a API");
        } finally {
            this.#processando = false;
        }
    }

    #retornarErro(mensagem) {
        this.#erro = mensagem;
        return {sucesso: false, mensagem: this.#erro};
    }
}

const carrinho = new CarrinhoCompras();

const notebook = {
    id: 10,
    nome: "Notebook",
    preco: 3500,
    estoque: 5
};

const mouse = {
    id: 20,
    nome: "Mouse",
    preco: 150,
    estoque: 10
};

console.log(carrinho.adicionarProduto(notebook, 2));
// true

console.log(carrinho.adicionarProduto(mouse));
// true

console.log(carrinho.adicionarProduto(notebook, 4));
// false: ultrapassaria o estoque

console.log(carrinho.obterResumo());
// {
//   quantidadeItens: 3,
//   quantidadeProdutosDiferentes: 2,
//   valorTotal: 7150
// }

console.log(carrinho.alterarQuantidade(20, 2));
// true

console.log(carrinho.obterResumo().valorTotal);
// 7300

console.log("\n\n");

const primeira = carrinho.finalizarCompra();

console.log(carrinho.consultarEstado().processando);
// true, enquanto a requisição estiver pendente

console.log(carrinho.adicionarProduto(mouse));
// false

const segunda = await carrinho.finalizarCompra();

console.log(segunda);
// {
//   sucesso: false,
//   mensagem: "Checkout em andamento"
// }

const resultado = await primeira;

console.log(resultado);
// Depende da resposta simulada da API