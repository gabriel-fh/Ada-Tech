class FormatacaoUtil {

  /**
   * Formata uma data para o padrão brasileiro dd/MM/yyyy, HH:mm
   * @param {Date} data - data que será formatada
   * @returns {string} data formatada
   */
  static formatarData(data) {
    if (!(data instanceof Date)) {
      throw new Error("O valor informado deve ser do tipo Date");
    }

    const formatter = Intl.DateTimeFormat("pt-BR", {
      dateStyle: "short",
      timeStyle: "short"
    });

    return formatter.format(data);
  }
}

class Tarefa {
  static contador = 1;

  #id;
  #titulo;
  #descricao;
  #dataConclusao;

  constructor(titulo, descricao) {
    this.titulo = titulo;
    this.descricao = descricao;
    this.#id = Tarefa.contador++;
  }

  get id() {
    return this.#id;
  }

  get titulo() {
    return this.#titulo;
  }

  set titulo(titulo) {
    if (!titulo) {
      throw new Error("Titulo é obrigatório");
    }

    if (titulo.length > 50) {
      throw new Error("Titulo pode ter no máximo 50 caracteres");
    }

    this.#titulo = titulo;
  }

  get descricao() {
    return this.#descricao;
  }

  set descricao(descricao) {
    if (descricao?.length > 100) {
      throw new Error("Descrição pode ter no máximo 100 caracteres");
    }

    this.#descricao = descricao;
  }

  get dataConclusao() {
    return this.#dataConclusao;
  }

  concluir() {
    this.#dataConclusao = FormatacaoUtil.formatarData(new Date());
  }
}

class ListaDeTarefas {
  #pendentes = [];
  #concluidas = [];

  get pendentes() {
    return this.#pendentes;
  }

  get concluidas() {
    return this.#concluidas;
  }

  adicionarTarefa(tarefa) {
    if (!(tarefa instanceof Tarefa)) {
      throw new Error("Só é permitido adicionar tarefas à lista de tarefas");
    }

    this.#pendentes.push(tarefa);
  }

  #buscarTarefa(id) {
    const indice = this.#pendentes.findIndex((item) => item.id === id);

    if (indice < 0) {
      throw new Error("Tarefa não encontrada");
    }

    return indice;
  }

  concluirTarefa(id) {
    const indice = this.#buscarTarefa(id);
    const tarefa = this.#pendentes.splice(indice, 1)[0];
    tarefa.concluir();
    this.#concluidas.push(tarefa);
  }

  excluirTarefa(id) {
    const indice = this.#buscarTarefa(id);
    this.#pendentes.splice(indice, 1);
  }

  editarTarefa(id, titulo, descricao) {
    this.#pendentes.map((item) => {
      if (item.id === id) {
        item.titulo = titulo;
        item.descricao = descricao;
      }
      return item;
    });
  }
}