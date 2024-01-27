---
marp: true
---

Aula 01

# Como alterar o HTML utilizando o Javascript?

---

## O que é o DOM?

O Document Object Model (DOM) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página.

---

## Objetos `window` e `document`

O objeto `window` representa uma janela que contém um elemento DOM; a propriedade `document` aponta para o documento carregado naquela janela.

Para cada página carregada no browser, existe um objeto Document. A interface Document serve como um ponto de entrada para o conteúdo da Página ( a árvore DOM, incluindo elementos como `<body>` e `<table>`) e provê funcionalidades globais ao documento (como obter a URL da página e criar novos elementos no documento).

---

## Mas como posso alterar o HTML utilizando o Javascript?

O objeto `document` possui inúmeros atributos e métodos. Dentre eles, alguns dos mais utilizados são os métodos `document.getElementById()` e o `document.getElementsByClassname`.

---

### `document.getElementById()`

Retorna a referência do elemento através do seu ID.

**_Sintaxe_**

```js
const elemento = document.getElementById(id);
```

- _elemento_ é uma referência a um objeto Element, ou null se um elemento com o ID especificado não estiver contido neste documento.
- _id_ é uma string que diferência maiúsculas e minúsculas representando o ID único do elemento sendo procurado.

---

### `document.getElementsByClassName()`

Retorna um vetor de objetos com todos os elementos filhos que possuem o nome da classe dada. Quando invocado no objeto document, o documento é examinado por completo, incluindo o nó raiz.

**_Sintaxe_**

```js
const elementos = document.getElementsByClassName(nomes);
```

- _elementos_ é uma lista viva do HTMLCollection de elementos encontrados.
- _nomes_ é um texto que representa uma lista dos nomes das classes que são separados por espaço em branco.

---

_Detalhe:_ `getElementsByClassName()` pode ser invocado por qualquer elemento, não somente pelo nó raiz document. O elemento no qual ele é chamado será usado como a raiz para a busca.

**_Sintaxe_**

```js
const rootElement = document.getElementById("root");
const elementos = rootElement.getElementsByClassName(nomes);
```

---

### `document.getElementsByName()`

O método `getElementsByName()` do objeto Document retorna uma coleção de elementos com um dado `name` no documento.

**_Sintaxe_**

```js
const elementos = document.getElementsByName(nome);
```

- `elementos` é uma coleção ativa de elementos, significando que ele atualiza automaticamente com os novos elementos com o mesmo nome que são adicionados/removidos do documento.
- `nome` é um valor do atributo nome dos elemento(s).

---

### `document.getElementsByTagName()`

O método `getElementsByTagName` do objeto document retorna um número de elementos com o nome da tag fornecido. O documento completo é pesquisado, incluindo o nó raiz.

**_Sintaxe_**

```js
const elementos = document.getElementsByTagName(tag);
```

- `tag` é uma string que representa o nome da tag dos elementos. A string especial `*` representa todos os elementos.

---

### `document.querySelector()`

Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.

**_Sintaxe_**

```js
const element = document.querySelector(selectors);
```

- `element` é um objeto Element.

- `selectors` é uma string que contém um ou mais seletores CSS separados por vírgulas.

---

### `document.querySelectorAll()`

Retorna uma lista de elementos presentes no documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores especificado.

**_Sintaxe_**

```js
const elementList = document.querySelectorAll(selectors);
```

- `elementList` é uma lista de objetos, não-viva (alterações no DOM não refletem na lista).

- `selectors` é uma string contendo um ou mais seletores CSS separados por vírgulas.

---

## Mas, e como interagir com esses elementos?

Através dos eventos.
Eventos são ações ou ocorrências que acontecem no sistema que estamos desenvolvendo, no qual este te alerta sobre essas ações para que você possa responder de alguma forma, se desejado.

---

### `click`

O evento `click` event é disparado quando o botão de um dispositivo apontador (normalmente o botão de um mouse) é pressionado e solto logo em seguida em um mesmo elemento.
Há algumas maneiras de manipular eventos disparados através de um clique. Dentre eles, podemos utilizar o atributo `onclick`, na tag desejada, um botão, por exemplo.

```html
<button onclick="doSomething()" id="someId">Button</button>
```

```js
const doSomething = () => {
  // do something
};
```

---

Uma outra abordagem possível é acessar o método `addEventListener`, a partir de um elemento DOM.

```html
<button id="test"></button>
```

```js
document.getElementById("test").addEventListener(
  "click",
  function (event) {
    // mostra o contador de cliques dentro da div clicada
    event.target.innerHTML = "Total de cliques: " + event.detail;
  },
  false
);
```

---

## Links Úteis

- [Introdução ao DOM](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction)

- [Document](https://developer.mozilla.org/pt-BR/docs/Web/API/Document)

- [document.getElementById()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementById)

- [document.getElementsByClassName()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByClassName)

- [document.getElementsByName()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/getElementsByName)

- [document.getElementsByTagName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByTagName)

---

- [document.querySelector()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelector)

- [document.querySelectorAll()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/querySelectorAll)

- [Introdução a eventos](https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Events)

- [Click](https://developer.mozilla.org/pt-BR/docs/Web/API/Element/click_event)
