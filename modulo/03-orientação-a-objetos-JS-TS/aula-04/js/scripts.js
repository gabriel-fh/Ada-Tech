console.log("===== AULA 04 =====");

const pessoa = new Pessoa("Tião", 56);
const funcionario = new Funcionario("Tieta", 45, 123);
// const gerente = new Gerente();

console.log(pessoa);
console.log("pessoa é Pessoa: ", pessoa instanceof Pessoa);
console.log("pessoa é Funcionario: ", pessoa instanceof Funcionario);
console.log(pessoa.descricao);

console.log(funcionario);
console.log("funcionario é Pessoa: ", funcionario instanceof Pessoa);
console.log("funcionario é Funcionario: ", funcionario instanceof Funcionario);
console.log(funcionario.descricao);

// console.log("gerente é Pessoa: ", gerente instanceof Pessoa);
// console.log("gerente é Funcionario: ", gerente instanceof Funcionario);
// console.log("gerente é Gerente: ", gerente instanceof Gerente);