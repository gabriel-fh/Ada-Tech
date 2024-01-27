class Contato {
  static contador = 0;

  constructor(valorDoNome, valorDoTelefone, valorDaDataNascimento) {
    if (!valorDoNome || !valorDoTelefone || !valorDaDataNascimento) {
      throw new Error("Nome, Telefone e Data de Nascimeno são obrigatórios");
    }
    this.nome = valorDoNome;
    this.telefone = valorDoTelefone;
    this.dataNascimento = valorDaDataNascimento;
    Contato.contador++;
  }
}

class Agenda {
  constructor() {
    this.contatos = [];
  }

  adicionarContato(contato) {
    // se o parametro contato for de tipo diferente de Contato, retornar mensagem de erro
    if (!(contato instanceof Contato)) {
      throw new Error("Somente contatos podem ser adicionados à agenda");
    }
    this.contatos.push(contato);
  }

  // buscarContato(nome) {
  //   const resultado = this.contatos.find(contato => contato.nome.toLowerCase() === nome.toLowerCase()); 
  //   return resultado ? resultado : "Contato não encontrado";
  // }

  buscarContato(nome) {
    for (let contato of this.contatos) {
      if (contato.nome.toLowerCase() === nome.toLowerCase()) {
        return contato;
      }
    }

    return "Contato não encontrado";
  }

  removerContato(nome) {
    // 1. Encontrar o indice do contato com este nome
    const indiceContato = this.contatos.findIndex(contato => contato.nome.toLowerCase() === nome.toLowerCase());

    // 2. Remover o contato utilizando o splice
    if (indiceContato >= 0) {
      this.contatos.splice(indiceContato, 1);
    }
  }
}

class Utils {
  static calcularIdade(dataNascimento) {
    const anoAtual = new Date().getFullYear();
    const anoContato = Number(dataNascimento.split("-")[2]);

    return anoAtual - anoContato;
  }

  static naoEVazio(valor) {
    // != null
    // != undefined
    // Se String != ""
    
    return !!valor;
  }
}