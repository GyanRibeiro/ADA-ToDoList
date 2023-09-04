export default class Tarefa {
    
    descricao: string;
    concluida: boolean;
    // prioridade?: string;

    constructor(descricao: string, concluida: boolean = false) { // , prioridade?: string
        this.descricao = descricao;
        this.concluida = concluida;
        // this.prioridade = prioridade;
    }

    marcarConcluida(): void {
        this.concluida = true;
    }

    toString(): string {
        return `${this.descricao} (${this.concluida ? 'Concluída' : 'Pendente'})`;
    }
}

export class ListaDeTarefas {
    tarefas: Tarefa[] = []
    
    adicionarTarefa(descricao: string) {
        const novaTarefa1 = new Tarefa(descricao);
        this.tarefas.push(novaTarefa1)
    }

    listarTarefas(): void {
        console.log("\nTarefas: ")
        for (const tarefa of this.tarefas) {
            console.log(`${tarefa.toString()}`);
        }
    }
}


