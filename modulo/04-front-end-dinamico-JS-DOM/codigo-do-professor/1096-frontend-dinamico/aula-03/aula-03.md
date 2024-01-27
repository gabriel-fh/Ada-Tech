---
marp: true
---

Aula 03

# Como persistir as informações criadas na página HTML?

Trabalhando com JS Vanilla, temos algumas opções para a persistência dos dados.
Enquanto não estamos utilizando a comunicação com APIs externas, podemos utilizar as APIs `localStorage` e `sessionStorage`, além do `indexedDB`.

---

## `localStorage`

A propriedade `localStorage` permite acessar um objeto do tipo Storage local. A `localStorage` é similar ao `sessionStorage`. A única diferença é que enquanto os dados armazenados no `localStorage` não expiram, os dados no `sessionStorage` tem os seus dados limpos ao expirar a sessão da página — ou seja, quando a página (aba ou janela) é fechada.

---

## `sessionStorage`

A propriedade `sessionStorage` permite acessar um objeto tipo session Storage. A `sessionStorage` é similar ao `localStorage`, a única diferença é que enquanto os dados armazenados no `localStorage` não expiram, os dados no `sessionstorage` tem os seus dados limpos ao expirar a sessão da página. A sessão da página dura enquanto o browser está aberto e se mantém no recarregamento da página. Abrir a página em uma nova aba ou nova janela irá gerar uma nova sessão, o que diferencia de como os cookies trabalham.

---

## `indexedDB`

IndexedDB é uma API de baixo nível para armazenamento no lado do cliente de quantidades significativas de dados estruturados, incluindo arquivos/blobs. Esta API usa índices para permitir pesquisas de alto desempenho desses dados. Embora o Web Storage seja útil para armazenar pequenas quantidades de dados, é menos útil para armazenar grandes quantidades de dados estruturados. IndexedDB fornece uma solução.

---

IndexedDB é um sistema de banco de dados transacional, como um sistema de gerenciamento de banco de dados relacional baseado em SQL (RDBMS). No entanto, diferentemente dos RDBMS baseados em SQL, que usam tabelas de colunas fixas, o IndexedDB é um banco de dados orientado a objetos baseado em JavaScript. IndexedDB permite armazenar e recuperar objetos indexados com uma chave; quaisquer objetos suportados pelo algoritmo de clone estruturado podem ser armazenados. Você precisa especificar o esquema do banco de dados, abrir uma conexão com seu banco de dados e, em seguida, recuperar e atualizar os dados em uma série de transações .

---

## Links úteis

- [Window.localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)

- [Window.sessionStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage)

- [IndexedDB API](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API)
