/* Desafio 01 - Relatório de pedidos
Uma loja precisa processar pedidos para gerar um resumo diário.
Requisitos
1. Crie uma função gerarResumo(pedidos).
2. Cada pedido tem id, cliente, valor e status ('pago', 'pendente' ou 'cancelado').
3. Retorne um objeto com faturamento (soma dos valores dos pedidos pagos), clientes (nomes dos clientes com pedidos pagos, sem duplicatas, na ordem da primeira ocorrência) e quantidadePendentes (número de pedidos pendentes).
4. Não modifique o array de entrada. Considere valores e dados válidos.
EXEMPLO E RESULTADO ESPERADO

const pedidos = [
  { id: 1, cliente: 'Ana', valor: 120, status: 'pago' },
  { id: 2, cliente: 'Bruno', valor: 80, status: 'pendente' },
  { id: 3, cliente: 'Ana', valor: 50, status: 'pago' },
  { id: 4, cliente: 'Carlos', valor: 40, status: 'cancelado' }
];

// Resultado esperado:
// {
//   faturamento: 170,
//   clientes: ['Ana'],
//   quantidadePendentes: 1
// }

Critérios: Cálculos corretos, remoção de duplicatas, retorno no formato solicitado e preservação dos dados.
*/

function gerarResumo(pedidos) {
    const faturamento = pedidos.filter(pedido => pedido.status.toLowerCase() === 'pago').reduce((total, pedido) => total + pedido.valor, 0);
    const clientesComPedidosPagos = new Set(pedidos.filter(pedido => pedido.status.toLowerCase() === 'pago').map(pedido => pedido.cliente));
    const quantidadePendentes = pedidos.filter(pedido => pedido.status.toLowerCase() === 'pendente').length;

    return {
        faturamento,
        clientes: [...clientesComPedidosPagos],
        quantidadePendentes
    }
}

const pedidos = [
  { id: 1, cliente: 'Ana', valor: 120, status: 'pago' },
  { id: 2, cliente: 'Bruno', valor: 80, status: 'pendente' },
  { id: 3, cliente: 'Ana', valor: 50, status: 'pago' },
  { id: 4, cliente: 'Carlos', valor: 40, status: 'cancelado' }
];

let resumo = gerarResumo(pedidos);
console.log(resumo);
console.log("\n\n");

/* Desafio 02 - Sistema de conta bancária
Classes · Constructor · this · Getters · Métodos

Implemente a lógica de uma conta bancária com registro de operações.
Requisitos
1. Crie uma classe Conta com constructor(titular, saldoInicial = 0).
2. Implemente depositar(valor) e sacar(valor). Ambos retornam true quando a operação é válida e false caso contrário.
3. Não permita valores menores ou iguais a zero; não permita saques acima do saldo.
4. Implemente um getter saldo e um método extrato() que retorne um novo array de registros das operações bem-sucedidas.
5. Cada registro deve ter tipo ('deposito' ou 'saque') e valor. O saldo inicial não entra no extrato.
6. Demonstre duas contas independentes. Considere que o saldo inicial é válido.
EXEMPLO E RESULTADO ESPERADO

const conta = new Conta('Ana', 100);
conta.depositar(50); // true
conta.sacar(30);     // true
conta.sacar(500);    // false

console.log(conta.saldo); // 120
console.log(conta.extrato());
// [
//   { tipo: 'deposito', valor: 50 },
//   { tipo: 'saque', valor: 30 }
// ]

Critérios: Encapsulamento básico, validações, independência entre instâncias e registro correto das operações.
*/

class Conta {
    _saldo;

    constructor(titular, saldoInicial = 0) {
        this.titular = titular;
        if (saldoInicial <= 0 || !Number.isInteger(saldoInicial)) saldoInicial = 0;
        this._saldo = saldoInicial;
        this.regristroEstrato = [];
    }

    get saldo() {
        return this._saldo;
    }

    depositar(valor) {
        if (valor <= 0 || !Number.isInteger(valor)) return false;

        this._saldo += valor;
        this.adicionarExtrato('deposito', valor);
        return true;
    }

    sacar(valor) {
        if (valor <= 0 || valor > this._saldo) return false;

        this._saldo -= valor;
        this.adicionarExtrato('saque', valor);
        return true;
    }

    extrato() {
        return this.regristroEstrato;
    }

    adicionarExtrato(tipo, valor) {
        this.regristroEstrato.push({tipo, valor});
    }
}

const conta1 = new Conta('Ana', 100);
conta1.depositar(50); 
conta1.sacar(30);     
conta1.sacar(500);   

console.log(conta1.saldo); 
console.log(conta1.extrato());

const conta2 = new Conta('Pedro');
conta2.depositar(100); 
conta2.depositar(-100); 
conta2.sacar(50);     
conta2.sacar(500);    

console.log(conta2.saldo); 
console.log(conta2.extrato());
console.log("\n\n");

/* Desafio 3 - Factory de carrinho de compras
Factory functions · Estado · Arrays · Métodos

Crie uma factory que gerencie os produtos de um carrinho de compras.
Requisitos
1. Crie criarCarrinho() que retorne um objeto com os métodos adicionar(produto, quantidade), remover(nome) e calcularTotal().
2. Cada produto recebido tem nome e preco. Quantidade deve ser um inteiro positivo.
3. adicionar() retorna false para quantidades inválidas e true para operações válidas.
4. Se um produto com o mesmo nome já estiver no carrinho, aumente sua quantidade, em vez de criar outra entrada.
5. remover(nome) remove todas as unidades do produto e retorna true se o encontrou, ou false se não encontrou.
6. calcularTotal() retorna a soma de preco * quantidade dos itens presentes.
7. Cada carrinho deve manter seu próprio estado. Demonstre dois carrinhos independentes.
EXEMPLO E RESULTADO ESPERADO

const c = criarCarrinho();
c.adicionar({ nome: 'Mouse', preco: 50 }, 2);
c.adicionar({ nome: 'Mouse', preco: 50 }, 1);
c.adicionar({ nome: 'Teclado', preco: 100 }, 1);
console.log(c.calcularTotal()); // 250
c.remover('Mouse');
console.log(c.calcularTotal()); // 100

Critérios: Estado independente, agrupamento de produtos, validação de quantidade, remoção e totalização.
*/

function criarCarrinho() {
    return {
        produtos: [],
        adicionar: function adicionar({nome, preco}, quantidade) {
            if (quantidade <= 0 || !Number.isInteger(quantidade)) return false;

            let temProdutoComEsseNome = this.produtos.find((produto) => produto.nome === nome);
            if (temProdutoComEsseNome) {
                temProdutoComEsseNome.quantidade += quantidade;
                return true;
            }

            this.produtos.push({nome, preco, quantidade});
            return true;
        },
        remover: function remover(nome) {
            let indexTemProdutoComEsseNome = this.produtos.findIndex((produto) => produto.nome === nome);
            if (indexTemProdutoComEsseNome === -1) return false;

            this.produtos.splice(indexTemProdutoComEsseNome, 1);
            return true;
        },
        calcularTotal: function calcularTotal() {
            return this.produtos.map(produto => produto.preco * produto.quantidade).reduce((total, n) => total + n, 0);
        }
    }
}

const c = criarCarrinho();
c.adicionar({ nome: 'Mouse', preco: 50 }, 2);
c.adicionar({ nome: 'Mouse', preco: 50 }, 1);
c.adicionar({ nome: 'Teclado', preco: 100 }, 1);
console.log(c.calcularTotal()); // 250
c.remover('Mouse');
console.log(c.calcularTotal()); // 100
console.log("\n");

const c1 = criarCarrinho();
c1.adicionar({ nome: 'Mouse', preco: 50 }, 5);
c1.adicionar({ nome: 'Teclado', preco: 100 }, 1);
c1.adicionar({ nome: 'Teclado', preco: 100 }, 9);
console.log(c1.calcularTotal());
c1.remover('Teclado');
console.log(c1.calcularTotal()); 

console.log("\n\n");

/* Desafio 4 - Consulta e filtragem de usuários
fetch · async/await · JSON · Arrays · try/catch

Uma aplicação precisa consultar usuários de uma API e apresentar uma lista filtrada.
Requisitos
1. Crie uma função async buscarUsuarios(cidade).
2. Faça GET em https://jsonplaceholder.typicode.com/users.
3. Converta a resposta para JSON.
4. Retorne um array com apenas os usuários cuja address.city seja igual à cidade informada, ignorando diferenças entre maiúsculas e minúsculas.
5. Cada elemento retornado deve conter somente nome e email, com as chaves nome e email.
6. Ordene o resultado alfabeticamente pelo nome, sem modificar os dados originais.
7. Use try/catch. Em caso de falha, exiba o erro e retorne []. Não é necessário verificar response.ok.
EXEMPLO E RESULTADO ESPERADO

const usuarios = await buscarUsuarios('Gwenborough');
// Exemplo de formato do retorno:
// [
//   { nome: 'Leanne Graham', email: 'Sincere@april.biz' }
// ]

Critérios: Requisição e conversão corretas, filtro, transformação, ordenação e tratamento de falhas.
*/

async function buscarUsuarios(cidade) {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let json = await response.json();

        let usuarios = json
                .filter(usuario => usuario.address.city.toLowerCase() === cidade.toLowerCase())
                .map(usuario => {
                    return {
                        nome: usuario.name,
                        email: usuario.email
                    }
                })
                .sort((usuario1, usuario2) => usuario1.nome - usuario2.nome);

        return usuarios;
    } catch(error) {
        console.log("ERROR: " + error);
        return [];
    }
}

buscarUsuarios('Gwenborough');