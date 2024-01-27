console.log("===== AULA 01 =====");

// Arrays
const nomes = ["Tião", "Tieta"];
const telefones = ["1111-1111", "2222-2222"];

nomes.forEach((nome, indice) => console.log(nome, telefones[indice]));

// Tipos abstratos de dados (TAD)
const contato = {
  nome: "Tião",
  telefone: "1111-1111"
};

const contato2 =  {
  nome: "Tieta",
  telefoni: "2222-2222"
};

const contatos = [contato, contato2];

contatos.forEach(contato => console.log(contato.nome, contato.telefone));

// Classes 

class Contato {
  constructor(valorDoNome, valorDoTelefone) {
    if (!valorDoNome || !valorDoTelefone) {
      throw new Error("Nome e Telefone são obrigatórios");
    }
    this.nome = valorDoNome;
    this.telefone = valorDoTelefone;
  }
}

const contatoTiao = new Contato("Tião", "1111-1111");
const contatoTieta = new Contato("Tieta", "2222-2222");

const contatosClasse = [contatoTiao, contatoTieta];

contatosClasse.forEach(contato => console.log(contato.nome, contato.telefone));

class Agenda {
  constructor() {
    this.contatos = [];
  }

  adicionarContato(contato) {
    this.contatos.push(contato);
  }
}