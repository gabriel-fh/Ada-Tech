# Jogo da Forca

Implemente um [jogo da forca](https://pt.wikipedia.org/wiki/Jogo_da_forca) que atenda aos seguintes requisitos:

## Requisitos

1. Utilize ao menos 2 classes. A seguir está uma sugestão, que pode ser alterada como o grupo preferir caso achem necessário.
   - Classe Partida, que possui a informação da palavra a ser adivinhada, das letras que já foram recebidas e outros atributos e métodos que julgarem necessários.
   - Classe ControladorJogo, que é responsável por gerenciar partidas. Esta classe pode conter um array de possíveis palavras que serão sorteadas e atribuídas a um novo jogo.
2. O jogador poderá chutar letra por letra ou a palavra inteira de uma vez.
3. O jogador poderá ter no máximo 6 erros. Tanto os erros de chute de uma única letra quanto os de palavras inteiras contabilizam apenas 1 erro.
4. Se a letra recebida como chute de uma única letra for repetido, o sistema não poderá contabilizar o erro e deverá informar o jogador de que aquele chute já foi efetuado para aquela partida.
5. A cada chute, o valor atualizado com as letras corretas preenchidas as lacunas restantes deve ser retornado para os usuários.
6. A cada acerto em um chute de uma única letra o jogador acumula 5 pontos.
7. A cada acerto em um chute de palavras, caso haja mais de uma lacuna, o jogador acumula 7 pontos para cada lacuna restante.
8. Caso o jogador consiga adivinha a palavra, seja chutando letra por letra ou a palavra de uma vez, um bônus de 10 pontos é adiciona à sua pontuação.

## Exemplos

**1. Exemplo 1:**
   - Palavra: javascript
     - Na primeira tentativa o usuário chuta a letra "a". O software contabiliza 5 pontos e retorna: _ a _ a _ _ _ _ _ _
     - Na segunda tentativa o usuário chuta a letra "i". O software contabiliza mais 5 pontos e retorna: _ a _ a _ _ _ i _ _
     - Na terceira tentativa o usuário chuta a palavra "javascript". O software contabiliza 69 pontos e informa o usuário que ele acertou a palavra e o total de sua pontuação.

**1. Exemplo 2:**
   - Palavra: arara
     -  Na primeira tentativa o usuário chuta a letra "a". O software contabiliza 5 pontos e retorna: a _ a _ a
     -  Na segunda tentativa o usuário chuta a letra "e". O software não contabiliza pontos e retorna: a _ a _ a
     -  Na terceira tentativa o usuário chuta a letra "i". O software não contabiliza pontos e retorna: a _ a _ a
     -  Na quarta tentativa o usuário chuta a letra "o". O software não contabiliza pontos e retorna: a _ a _ a
     -  Na quinta tentativa o usuário chuta a letra "u". O software não contabiliza pontos e retorna: a _ a _ a
     -  Na sexta tentativa o usuário chuta a letra "b". O software não contabiliza pontos e retorna: a _ a _ a
     -  Na sétima tentativa o usuário chuta a letra "c". O software identifica 6 erros e encerra o jogo, informando ao usuário que ele não possui mais chutes e o total de sua pontuação.

## Referência úteis

**Separar uma palavra em um array de caracteres:**
```javascript
"palavra".split("");
```

**Gerar um número aleatório entre 1 e o número que foi recebido como parâmetro:**
```javascript
function gerarNumeroAleatorio(maximo) {
  return Math.floor(Math.random() * maximo) + 1;
}
```