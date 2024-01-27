console.log("==== AULA 02 =====");

const agenda = new Agenda();

try {
  const contato = new Contato("Tiao", "1111-1111", "31-12-1970");
  agenda.adicionarContato(contato);
} catch(error) {
  console.warn("Tratando o erro");
} finally {
  console.log(agenda);
}