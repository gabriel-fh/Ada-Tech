class Retangulo {
  #altura;
  #base;

  constructor(altura, base) {
    this.altura = altura;
    this.base = base;
  }

  // Getter & Setter - Acessores e Modificadores
  get altura() {
    return this.#altura;
  }

  get base() {
    return this.#base;
  }

  set altura(valor) {
    this.#validarNumero(valor);
    this.#altura = valor;
  }

  set base(valor) {
    this.#validarNumero(valor);
    this.#base = valor;
  }

  #validarNumero(valor) {
    if (isNaN(valor) || valor <= 0) {
      throw new Error("Os valores precisam ser números positivos");
    }
  }
}