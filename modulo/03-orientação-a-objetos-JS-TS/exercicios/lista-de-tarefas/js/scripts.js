console.log("===== LISTA DE TAREFAS =====");

const listaDeTarefas = new ListaDeTarefas();

function adicionarTarefa() {
  const inputTitulo = document.getElementsByName("titulo")[0];
  const inputDescricao = document.getElementsByName("descricao")[0];

  const novaTarefa = new Tarefa(inputTitulo.value, inputDescricao.value);
  listaDeTarefas.adicionarTarefa(novaTarefa);

  listarTarefasPendentes();

  inputTitulo.value = "";
  inputDescricao.value = "";
}

function concluirTarefa(marcado, id) {
  if (marcado) {
    listaDeTarefas.concluirTarefa(id);
  }

  listarTarefasPendentes();
  listarTarefasConcluidas();
}

function montarHtmlTarefaPendente(tarefaPendente) {
  const ul = document.getElementById("pendentes").getElementsByTagName("ul")[0];

  const li = document.createElement("li");
  
  const label = document.createElement("label");
  
  const input = document.createElement("input");
  input.type = "checkbox";
  input.onchange = (event) => concluirTarefa(event.target.checked, tarefaPendente.id);

  const em = document.createElement("em");
  em.innerText = tarefaPendente.titulo;

  label.appendChild(input);
  label.appendChild(em);

  li.appendChild(label);

  ul.appendChild(li);
}

function listarTarefasPendentes() {
  const ul = document.getElementById("pendentes").getElementsByTagName("ul")[0];
  ul.innerHTML = "";

  for (let tarefaPendente of listaDeTarefas.pendentes) {
    montarHtmlTarefaPendente(tarefaPendente);
  }
}

function montarHtmlTarefaConcluida(tarefaConcluida) {
  const ul = document.getElementById("concluidas").getElementsByTagName("ul")[0];

  const li = document.createElement("li");

  const em = document.createElement("em");
  em.innerText = tarefaConcluida.titulo;
  
  const span = document.createElement("span");
  span.innerText = tarefaConcluida.dataConclusao;

  li.appendChild(em);
  li.appendChild(span);
  
  ul.appendChild(li);
}

function listarTarefasConcluidas() {
  const ul = document.getElementById("concluidas").getElementsByTagName("ul")[0];
  ul.innerHTML = "";

  for (let tarefaConcluida of listaDeTarefas.concluidas) {
    montarHtmlTarefaConcluida(tarefaConcluida);
  }
}

// testes
const comprarLeite = new Tarefa("Comprar leite");
const comprarOvos = new Tarefa("Comprar ovos", "Ovos caipira");

listaDeTarefas.adicionarTarefa(comprarLeite);
listaDeTarefas.adicionarTarefa(comprarOvos);

listarTarefasPendentes();
listarTarefasConcluidas();