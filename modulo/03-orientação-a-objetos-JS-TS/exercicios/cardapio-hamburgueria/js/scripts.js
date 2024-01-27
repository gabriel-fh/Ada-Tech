console.log("===== CARDAPIO HAMBURGUERIA =====");

const cardapio = new Cardapio();

const baguncinha = new Hamburguer("Baguncinha", 11.99, [
  "Pão",
  "Alface",
  "Tomate",
  "Muçarela",
  "Presunto",
  "Hamburguer",
  "Salsicha",
  "Calabresa",
  "Ovo",
  "Milho",
  "Ervilha"
]);

const spock = new Hamburguer("Spock", 35.99, [
  "Pão",
  "Hamburguer",
  "Rúcula",
  "Tomate Seco",
  "Queijo"
]);

const agua = new Bebida("Água", 2.99, "300ml");
const guarana = new Bebida("Guaraná Tupi", 4.99, "350ml");
const cerveja = new Bebida("Cerveja Geladassa", 5.99, "370ml");
const milkShake = new Bebida("Milk Shake de Chocolate", 19.99, "500ml");

// Adicionando hamburgueres
cardapio.adicionarItem(baguncinha);
cardapio.adicionarItem(spock);

// Adicionando bebidas
cardapio.adicionarItem(agua);
cardapio.adicionarItem(guarana);
cardapio.adicionarItem(cerveja);
cardapio.adicionarItem(milkShake);

function criarHtmlDoProduto(produto) {
  const article = document.createElement("article");

  const nomePreco = document.createElement("div");

  const nome = document.createElement("em");
  nome.innerText = produto.nome;

  const separador = document.createElement("div");
  separador.classList.add("separador");

  const preco = document.createElement("em");
  preco.innerText = produto.preco;

  nomePreco.appendChild(nome);
  nomePreco.appendChild(separador);
  nomePreco.appendChild(preco);

  const descricao = document.createElement("span");
  descricao.innerText = produto.descricao;

  article.appendChild(nomePreco);
  article.appendChild(descricao);

  return article;
}

function listarHamburgueres() {
  const listaHamburgueres = document.getElementById("hamburgueres");
  for (let item of cardapio.hamburgueres) {
    const htmlItem = criarHtmlDoProduto(item);
    listaHamburgueres.appendChild(htmlItem);
  }
}

function listarBebidas() {
  const listaBebidas = document.getElementById("bebidas");
  for (let item of cardapio.bebidas) {
    const htmlItem = criarHtmlDoProduto(item);
    listaBebidas.appendChild(htmlItem);
  }
}

listarHamburgueres();
listarBebidas();