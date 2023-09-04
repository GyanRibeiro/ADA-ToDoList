import { ListaDeTarefas } from "./Classes";

const lista1 = new ListaDeTarefas();

lista1.adicionarTarefa('Lavar a casa');
lista1.adicionarTarefa('Passear com o cachorro');
lista1.adicionarTarefa('Construir a ToDoList');

lista1.tarefas[2].marcarConcluida();
lista1.listarTarefas();