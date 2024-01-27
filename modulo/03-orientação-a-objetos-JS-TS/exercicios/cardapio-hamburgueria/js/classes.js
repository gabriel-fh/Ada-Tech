class Produto {
  #nome = '';
  #preco = 0.0;

  constructor(nome, preco) {
    const tipo = this.constructor;
    if (this.constructor == Produto) {
      throw new Error("Classe Produto não poder ser instanciada");
    }

    if (!nome || !preco) {
      throw new Error("Nome e preço são obrigatórios");
    }

    if (isNaN(preco) || preco <= 0) {
      throw new Error("Preço deve ser um número positivo");
    }

    this.#nome = nome;
    this.#preco = preco;
  }

  get nome() {
    return this.#nome;
  }

  get preco() {
    const locale = "pt-BR";
    const options = {
      style: "currency",
      currency: "BRL"
    };
    const formatter = new Intl.NumberFormat(locale, options);

    return formatter.format(this.#preco);
  }
}

class Hamburguer extends Produto {
  #ingredientes = [];

  constructor(nome, preco, ingredientes) {
    super(nome, preco);
    this.#ingredientes = ingredientes;
  }

  get descricao() {
    const locale = "pt-BR";
    const options = {
      style: "long",
      type: "conjunction"
    };
    const formatter = new Intl.ListFormat(locale, options);
    
    return formatter.format(this.#ingredientes);
  }
}

class Bebida extends Produto {
  #quantidade = '';

  constructor(nome, preco, quantidade) {
    super(nome, preco);
    this.#quantidade = quantidade;
  }

  get descricao() {
    return this.#quantidade;
  }
}

class Cardapio {
  #hamburgueres = [];
  #bebidas = [];

  adicionarItem(item) {
    if (!(item instanceof Produto)) {
      throw new Error("O item adicionado não é um produto");
    }

    if (item instanceof Hamburguer) {
      this.#hamburgueres.push(item);
    }

    if (item instanceof Bebida) {
      this.#bebidas.push(item);
    }
  }

  get hamburgueres() {
    return this.#hamburgueres;
  }

  get bebidas() {
    return this.#bebidas;
  }
}