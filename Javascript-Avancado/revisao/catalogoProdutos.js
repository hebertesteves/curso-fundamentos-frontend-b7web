class CatalogoProdutos {
    #listaProdutos;
    #carregando;
    #erro;
    #carregado;

    constructor() {
        this.#listaProdutos = [];
        this.#carregando = false;
        this.#erro = null;
        this.#carregado = false;
    }

    async carregarProdutos() {
        try {
            this.#carregando = true;
            this.#erro = null;
            this.#carregado = false;
            this.#listaProdutos = [];

            const req = await fetch("https://api.exemplo.com/produtos");
            if (!req.ok) {
                this.#erro = "Erro HTTP ao carregar produtos";
                return false;
            } 

            const resultado = await req.json();
            if (!Array.isArray(resultado.produtos)) {
                this.#erro = "Formato de resposta inválido";
                return false;
            }

            this.#listaProdutos = resultado;
            this.#carregado = true;
            return true;
        } catch {
            this.#erro = "Falha na comunicação com a API";
            this.#carregado = false;
            return false;
        } finally {
            this.#carregando = false;
        }
    }

    buscarProdutos(termo = "") {
        if (typeof termo !== "string" || this.#carregado || !Array.isArray(this.#listaProdutos.produtos)) return [];

        if (termo.toLowerCase().trim() === "") return structuredClone(this.#listaProdutos);
        return structuredClone(this.#listaProdutos.produtos.filter(produto => produto.nome.toLowerCase().trim().includes(termo.toLowerCase().trim())));
    }

    filtrarPorCategoria(categoria) {
        if (typeof categoria !== "string" || this.#carregado || !Array.isArray(this.#listaProdutos.produtos)) return [];

        const listaProdutosFiltrados = this.#listaProdutos.produtos.filter(produto => produto.categoria.toLowerCase().trim() === categoria.toLowerCase().trim());
        if (listaProdutosFiltrados.length === 0) return [];

        return structuredClone(listaProdutosFiltrados);
    }

    ordenarPorPreco(ordem = "crescente") {
        if (typeof ordem !== "string" || this.#carregado || !Array.isArray(this.#listaProdutos.produtos)) return [];

        const ordemNormalizada = ordem.toLowerCase().trim();
        const ordensValidas = ["crescente", "decrescente"];

        if (!ordensValidas.includes(ordemNormalizada)) return [];

        const listaProduto = structuredClone(this.#listaProdutos);

        return ordemNormalizada === ordensValidas[0] 
            ? listaProduto.produtos.sort((p1, p2) => p1.preco - p2.preco) 
            : listaProduto.produtos.sort((p1, p2) => p2.preco - p1.preco);
    }

    obterResumo() {
        const totalProdutos = this.#listaProdutos.produtos.length;
        const produtosDisponiveis = this.#listaProdutos.produtos.filter(produto => produto.estoque > 0).length;
        const produtosIndisponiveis = this.#listaProdutos.produtos.filter(produto => produto.estoque === 0).length;
        const valorTotalEstoque = this.#listaProdutos.produtos.reduce((total, produto) => total + (produto.preco * produto.estoque), 0);
        const resumo = {
            totalProdutos,
            produtosDisponiveis,
            produtosIndisponiveis,
            valorTotalEstoque
        };

        return structuredClone(resumo);
    }

    consultarEstado() {
        const carregando = this.#carregando;
        const erro = this.#erro;
        const carregado = this.#carregado;
        const produtos = structuredClone(this.#listaProdutos);
        const estadoAtual = {
            carregando,
            erro,
            carregado,
            produtos
        };

        return structuredClone(estadoAtual);
    }
}

const catalogo = new CatalogoProdutos();

console.log(catalogo.consultarEstado());
// {
//   carregando: false,
//   erro: null,
//   carregado: false,
//   produtos: []
// }

const sucesso = await catalogo.carregarProdutos();

console.log(sucesso);
// true, se a API retornar dados válidos

console.log(catalogo.buscarProdutos("mouse"));
// Mouse Gamer e Mouse Sem Fio

console.log(catalogo.filtrarPorCategoria(" PERIFERICOS "));
// Mouse Gamer, Teclado Mecânico e Mouse Sem Fio

console.log(catalogo.ordenarPorPreco("crescente"));
// Mouse Sem Fio, Mouse Gamer, Teclado Mecânico,
// Monitor LG e Notebook Dell