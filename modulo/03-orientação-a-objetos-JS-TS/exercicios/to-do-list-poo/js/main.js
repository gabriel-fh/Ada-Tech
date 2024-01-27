class Lista {
     // Atributos
     #listaConcluida = [];
     #listaPendente = [];
 
     // Getters
     get getListaPendente() {
         return this.#listaPendente;
     }
     get getListaConcluida() {
         return this.#listaConcluida;
     }

    // Métodos
    criarTarefa(tarefa) {
        this.#listaPendente.push(tarefa);
    }    

    adicionarTarefaConcluida(tarefa) {
        if (tarefa.getDataHora) {
            const index = this.#listaPendente.findIndex(t => t.getId === tarefa.getId);
            if (index !== -1) {
                this.#listaPendente.splice(index, 1);
            }
            this.#listaConcluida.push(tarefa);
        }
    }

    adicionarTarefaPendente(tarefa) {
        tarefa.setDataHora = '';
        if (!tarefa.getDataHora) {
            const index = this.#listaConcluida.findIndex(t => t.getId === tarefa.getId);
            if (index !== -1) {
                this.#listaConcluida.splice(index, 1);
            }
            this.#listaPendente.push(tarefa);
        }
    }

    editarTarefa(tarefa, titulo, descricao) {
        if (!tarefa.dataHora) {
            tarefa.setTitulo = titulo;
            tarefa.setDescricao = descricao;
        }
    }

    excluirTarefa(tarefa) {
        if (tarefa.getDataHora) {
            const index = this.#listaConcluida.findIndex(t => t.getId === tarefa.getId);
            if (index !== -1) {
                this.#listaConcluida.splice(index, 1);
            }
        } else {
            const index = this.#listaPendente.findIndex(t => t.getId === tarefa.getId);
            if (index !== -1) {
                this.#listaPendente.splice(index, 1);
            }
        }
    }
}


class Tarefa {
    // Atributos
    static #taskId = 0;

    #id;
    #titulo;
    #descricao;
    #dataHora;

    constructor(titulo, descricao) {
        this.validarTitulo(titulo);
        this.validarDescricao(descricao);

        this.#id = ++Tarefa.#taskId;
        this.#titulo = titulo;
        this.#descricao = descricao;
        this.#dataHora = '';
    }

    // Getters
    get getId() {
        return this.#id;
    }
    get getTitulo() {
        return this.#titulo;
    }
    get getDescricao() {
        return this.#descricao;
    }
    get getDataHora() {
        return this.#dataHora;
    }

    // Setters
    set setTitulo(titulo) {
        this.validarTitulo(titulo);
        this.#titulo = titulo;
    }
    set setDescricao(descricao) {
        this.validarDescricao(descricao);
        this.#descricao = descricao;
    }
    set setDataHora(dataHora) {
        this.#dataHora = dataHora;
    }

    // Métodos de Validação
    validarTitulo(titulo) {
        if (!titulo || titulo.trim() === '') {
            throw new Error("É necessário incluir um título para a tarefa!");
        }

        if (titulo.length > 50) {
            throw new Error("O título precisa ter no máximo 50 caracteres");
        }
    }

    validarDescricao(descricao) {
        if (descricao.trim() && descricao.length > 100) {
            throw new Error("A descrição deve ter no máximo 100 caracteres");
        }
    }

    // Método para verificar a tarefa
    checkTarefa() {
        if (!this.#dataHora) {
            this.#dataHora = this.obterDataFormatada();
        }
    }

    obterDataFormatada() {
        const options = {
            weekday: 'short',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };

        const formatter = new Intl.DateTimeFormat('pt-BR', options);
        const formattedDate = formatter.format(new Date());
        const auxDate = formattedDate.split('.').join('');
        return auxDate.charAt(0).toUpperCase() + auxDate.slice(1);
    }

    // Método toString para retornar os dados da tarefa
    toString() {
        return `\nID: ${this.#id}, \nTítulo: ${this.#titulo}${this.#descricao ? `, \nDescrição: ${this.#descricao}` : ''}${this.#dataHora ? `, \nConcluída em: ${this.#dataHora}` : ''}`
    }
}

// try {
//     const lista = new Lista();

//     const tarefa = new Tarefa("Teste 1", "Desc teste 1");
//     const tarefa2 = new Tarefa("Teste 2", "");
//     const tarefa3 = new Tarefa("Teste 3", "");
//     const tarefa4 = new Tarefa("Teste 4", "");
//     lista.criarTarefa(tarefa)
//     lista.criarTarefa(tarefa2)
//     lista.criarTarefa(tarefa3)
//     lista.criarTarefa(tarefa4)

//     console.log('\n------Tarefas Criadas------')
//     lista.getListaPendente.forEach(tarefa => console.log(tarefa.toString()));

//     console.log("\n------Tarefas Pendentes------");
//     lista.getListaPendente.forEach(tarefa => console.log(tarefa.toString()));
//     console.log("\n------Tarefas Concluídas------");
//     lista.getListaConcluida.forEach(tarefa => console.log(tarefa.toString()))


//     console.log("\n------Tarefas Editadas------")
//     lista.editarTarefa(tarefa2, '1230', '456')
//     console.log(console.log(tarefa2.toString()));

//     console.log("\n------Tarefas Marcadas como Concluídas------")
//     tarefa.checkTarefa()
//     lista.adicionarTarefaConcluida(tarefa)
//     tarefa3.checkTarefa()
//     lista.adicionarTarefaConcluida(tarefa3)
//     lista.getListaConcluida.forEach(tarefa => console.log(tarefa.toString()))

//     console.log("\n------Tarefas Marcadas como Pendente------")
//     lista.adicionarTarefaPendente(tarefa)
//     lista.getListaPendente.forEach(tarefa => console.log(tarefa.toString()));

//     console.log("\n------Exluir Tarefa------")
//     lista.excluirTarefa(tarefa4)
//     lista.excluirTarefa(tarefa3)

//     console.log("\nTarefas Pendentes depois da exclusão")
//     lista.getListaPendente.forEach(tarefa => console.log(tarefa.toString()));
//     console.log("\nTarefas Concluídas depois da exclusão")
//     lista.getListaConcluida.forEach(tarefa => console.log(tarefa.toString()))

// } catch (err) {
//     console.log(err.message);
// }
