import Tarefa, { ListaDeTarefas, ListaPrioritaria } from "./Classes";

const lista1 = new ListaDeTarefas();
const lista2 = new ListaPrioritaria();
// const lista2 = new ListaPrioritaria();

lista1.adicionarTarefa('Lavar a casa');
lista1.adicionarTarefa('Passear com o cachorro');
lista1.adicionarTarefa('Construir a ToDoList');
lista1.adicionarTarefa('Entrar na aula')

lista1.tarefas[2].marcarConcluida();
lista1.tarefas[3].marcarConcluida();

lista2.adicionarTarefaPrioritaria('Lavar a casa', 'sim');
lista2.adicionarTarefaPrioritaria('Passar Roupa', 'sim');
lista2.adicionarTarefaPrioritaria('Jogar Futebol', 'sim');

lista2.tarefas[2]. marcarConcluida();

lista1.listarTarefas();
lista2.listarTarefas();

// const minhaTarefa = new Tarefa('Lavar a casa');
// console.log(minhaTarefa.toString()); 