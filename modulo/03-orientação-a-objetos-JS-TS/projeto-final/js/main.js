class Partida {

    static MAX_TENTATIVAS = 6;
    #palavra;
    #palavraExibida;
    #letrasUsadas;
    #qtdTentativasAtuais;
    #pontuacao;
    constructor(palavra) {
        this.#palavra = palavra;
        this.#palavraExibida = "_".repeat(this.#palavra.length);
        this.#letrasUsadas = [];
        this.#qtdTentativasAtuais = 0
        this.#pontuacao = 0;
    }

    tentativa(chute) {
        chute.length === 1 ? this.tentativaLetra(chute) : this.tentativaPalavra(chute);
    }

    tentativaLetra(letra) {
        const char = letra.toLowerCase();
        if (this.#letrasUsadas.includes(char)) {
            console.log('Letra repetida!')
            return;
        }
        if (this.#palavra.includes(char)) {
            this.#pontuacao += 5;
            console.log(`Letra correta! Pontuação: ${this.#pontuacao}`);
        } else {
            this.#qtdTentativasAtuais++;
            console.log(`Letra incorreta! Pontuação: ${this.#pontuacao}. Tentativas: ${this.#qtdTentativasAtuais}`);
        }
        this.atualizarPalvraExibida(char)
        this.#letrasUsadas.push(char);
    }

    tentativaPalavra(palavra) {
        if (this.#palavra === palavra.toLowerCase()) {
            this.#pontuacao += 10 + (this.#palavraExibida.split("_").length === 2 ? 5 : 7 * (this.#palavraExibida.split("_").length - 1));
            this.#palavraExibida = palavra;
            console.log(this.#palavraExibida)
            console.log(`Acertou a palavra! Pontuação: ${this.#pontuacao}`);
            return;
        } else {
            this.#qtdTentativasAtuais++;
            console.log(`Palavra incorreta! Pontuação: ${this.#pontuacao}. Tentativas: ${this.#qtdTentativasAtuais}`)
        }
    }

    atualizarPalvraExibida(char) {
        for (let i = 0; i < this.#palavra.length; i++) {
            if (this.#palavra[i] === char) {
                this.#palavraExibida =
                    this.#palavraExibida.substring(0, i) +
                    char +
                    this.#palavraExibida.substring(i + 1);
            }
        }
        console.log(this.#palavraExibida);
    }

    #statusDaPartida() {

    }
}


class Controller {
    #palavrasPossiveis;

    constructor() {
        this.#palavrasPossiveis = ['arroz', 'feijão', 'batata', 'canela', 'alface', 'paralelepípedo'];    
    }

    iniciarPartida() {
        const palavraEscolhida = this.#obterPalavraAleatoria();
        const partida = new Partida(palavraEscolhida);
        console.log(palavraEscolhida)
        while(true) {
            const chute = prompt('Digita algo: ')
            partida.tentativa(chute);
        }
    }

    #obterPalavraAleatoria() {
        const index = Math.floor(Math.random() * this.#palavrasPossiveis.length);
        return this.#palavrasPossiveis[index];
    }
}

const controller = new Controller();
controller.iniciarPartida()