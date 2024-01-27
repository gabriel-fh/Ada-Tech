// Pessoa
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  get descricao() {
    return `${this.nome} possui ${this.idade} anos de idade.`;
  }
}

// Funcionario
class Funcionario extends Pessoa {
  constructor(nome, idade, matricula) {
    super(nome, idade);
    this.matricula = matricula;
  }

  // sobrescrita:
  get descricao() {
    return `${this.nome} possui ${this.idade} anos de idade e matricula ${this.matricula}.`;
  }
}

// Gerente
class Gerente extends Funcionario {

}