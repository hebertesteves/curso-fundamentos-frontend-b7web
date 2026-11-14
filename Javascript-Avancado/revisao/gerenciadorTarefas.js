class GerenciadorTarefas {
    #id;
    #listaTarefas;
    #PRIORIDADES_VALIDAS = ["baixa", "media", "alta"];

    constructor() {
        this.#id = 0;
        this.#listaTarefas = [];
    }

    adicionarTarefa(titulo, prioridade = "media") {
        if (typeof titulo !== "string" || titulo.trim() === "" || !this.#PRIORIDADES_VALIDAS.includes(prioridade)) return null;

        const id = ++this.#id;
        const tituloTarefa = titulo.trim();
        const concluida = false;

        const tarefa = {
            id, 
            titulo: tituloTarefa, 
            prioridade, 
            concluida
        };

        this.#listaTarefas.push(tarefa);
        return structuredClone(tarefa);
    }

    concluirTarefa(id) {
        let tarefa = this.#listaTarefas.find(tarefa => tarefa.id === id);
        if (!tarefa) return false;

        tarefa.concluida = true;
        return true;
    }

    removerTarefa(id) {
        let indexTarefa = this.#listaTarefas.findIndex(tarefa => tarefa.id === id);
        if (indexTarefa === -1) return false;

        this.#listaTarefas.splice(indexTarefa, 1);
        return true;
    }

    listarTarefas(filtro = "todas") {
        let resultado;
        switch(filtro) {
            case "todas":
                resultado = structuredClone(this.#listaTarefas);
                break;
            case "pendentes":
                resultado = structuredClone(this.#listaTarefas.filter(tarefa => !tarefa.concluida));
                break;
            case "concluidas":
                resultado = structuredClone(this.#listaTarefas.filter(tarefa => tarefa.concluida));
                break;
            default:
                resultado = [];
                break;
        }

        return resultado;
    }

    obterResumo() {
        const concluidas = this.#listaTarefas.filter(tarefa => tarefa.concluida).length;
        const total = this.#listaTarefas.length;
        const pendentes = this.#listaTarefas.filter(tarefa => !tarefa.concluida).length;
        const percentualConclusao = total > 0 ? (concluidas / total) * 100 : 0;
        const resumo = {
            total,
            concluidas,
            pendentes,
            percentualConclusao
        };

        return structuredClone(resumo);
    }
}

const gerenciador = new GerenciadorTarefas();

console.log(
  gerenciador.adicionarTarefa(" Estudar JavaScript ", "alta")
);
// { id: 1, titulo: "Estudar JavaScript",
//   prioridade: "alta", concluida: false }
console.log("\n");

gerenciador.adicionarTarefa("Praticar Angular");
gerenciador.adicionarTarefa("Revisar POO", "baixa");

console.log(gerenciador.concluirTarefa(1));
// true
console.log("\n");

console.log(gerenciador.listarTarefas("pendentes"));
// [
//   { id: 2, titulo: "Praticar Angular",
//     prioridade: "media", concluida: false },
//   { id: 3, titulo: "Revisar POO",
//     prioridade: "baixa", concluida: false }
// ]
console.log("\n");

const resumo = gerenciador.obterResumo();
resumo.total = 1000;
console.log(gerenciador.obterResumo());

console.log("\n\n\n");
// {
//   total: 3,
//   concluidas: 1,
//   pendentes: 2,
//   percentualConclusao: 33.33333333333333
// }

const tarefa = gerenciador.adicionarTarefa(
  "Fazer exercícios",
  "alta"
);

tarefa.titulo = "ALTERADO";

const lista = gerenciador.listarTarefas();
lista[0].titulo = "MODIFICADO";
lista.push({ id: 999 });

console.log(gerenciador.listarTarefas("todas"));