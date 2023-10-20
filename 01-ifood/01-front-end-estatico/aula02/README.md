# Aula 2

Vamos continuar a conhecer alguns elementos em HTML.

## O que vamos aprender nessa aula:

- Criação de lista não ordenada
- Criação de lista ordenada
- Criação de tabelas com CSS
- Conceito de classes em CSS.

## Lista não ordenada

A lista não ordenada em HTML é um tipo de elemento que permite exibir uma coleção de itens de forma não sequencial. Essa lista é composta por marcadores, geralmente representados por pontos ou pequenos círculos, que precedem cada item da lista. A utilização da lista não ordenada é útil quando a ordem dos itens não é importante. Para criar uma lista não ordenada em HTML, utiliza-se a tag `<ul>` (Unordered List), e cada item da lista é envolvido pela tag `<li>` (List Item):. Por exemplo:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

```

Vamos testar esse código?

### Com subníveis

```html
<ul>
  <li>Nível 1</li>
  <ul>
    <li>Subnível 1</li>
    <li>Subnível 2</li>
  </ul>
  <li>Nível 2</li>
  <ul>
    <li>Subnível 1</li>
    <li>Subnível 2</li>
  </ul>
</ul>

```

Vamos testar esse código?

## Lista ordenada

A lista ordenada em HTML é um tipo de elemento que permite exibir uma coleção de itens em uma ordem específica. Ao contrário da lista não ordenada, a lista ordenada utiliza números, letras ou outros tipos de marcadores para indicar a ordem dos itens. Para criar uma lista ordenada em HTML, utiliza-se a tag `<ol>` (Ordered List), e cada item da lista é envolvido pela tag `<li>` (List Item). Por exemplo:

```html
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

```

Vamos testar esse código?

### Com subníveis

```html
<ol>
  <li>Nível 1</li>
  <ol>
    <li>Subnível 1</li>
    <li>Subnível 2</li>
  </ol>
  <li>Nível 2</li>
  <ol>
    <li>Subnível 1</li>
    <li>Subnível 2</li>
  </ol>
</ol>

```

Vamos testar esse código?

### Exercicio → Listas

→ Criar uma página com uma lista de compras para o supermercado separando os itens por seções (hortifruti, padaria, higiene, mercearia, limpeza e etc).

→ Criar uma página com uma lista de etapas para trocar uma lampada.

## Tabelas em HTML

As tabelas em HTML permitem organizar dados em linhas e colunas. Elas são úteis quando é necessário exibir informações estruturadas e relacionadas umas às outras. Uma tabela é composta por linhas (`<tr>` - Table Row) e células (`<td>` - Table Data), onde os dados são inseridos. A primeira linha da tabela geralmente é reservada para os cabeçalhos das colunas e é definida com a tag `<th>` - (Table Header). Para criar uma tabela em HTML, utiliza-se a tag `<table>`. Por exemplo:

```html
<table>
  <tr>
    <th>Nome</th>
    <th>Idade</th>
    <th>País</th>
  </tr>
  <tr>
    <td>João</td>
    <td>25</td>
    <td>Brasil</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>30</td>
    <td>Portugal</td>
  </tr>
</table>

```

Vamos testar essa código?

## Mesclando células

As tabelas em HTML permitem organizar dados em linhas e colunas. É possível utilizar atributos como `rowspan` e `colspan` para mesclar células em uma tabela, tornando-a mais flexível e personalizada.

Exemplo com `rowspan` e `colspan`:

```html
<table>
  <tr>
    <th colspan="2">Mês</th>
    <th rowspan="2">Receitas</th>
  </tr>
  <tr>
    <th>Nome</th>
    <th>Dia</th>
  </tr>
  <tr>
    <td>Janeiro</td>
    <td>1</td>
    <td>$100</td>
  </tr>
  <tr>
    <td rowspan="2">Fevereiro</td>
    <td>1</td>
    <td>$150</td>
  </tr>
  <tr>
    <td>2</td>
    <td>$200</td>
  </tr>
</table>

```

Vamos testar esse código?

## Tabelas com CSS

Além das tabelas em HTML, é possível estilizar as tabelas utilizando CSS. Isso permite personalizar a aparência da tabela, como cores, bordas e fontes.

Exemplo de tabela estilizada com CSS:

```html
<style>
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th, td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: lightgray;
  }
</style>

<table>
  <tr>
    <th>Nome</th>
    <th>Idade</th>
    <th>País</th>
  </tr>
  <tr>
    <td>João</td>
    <td>25</td>
    <td>Brasil</td>
  </tr>
  <tr>
    <td>Maria</td>
    <td>30</td>
    <td>Portugal</td>
  </tr>
</table>

```

Vamos testar esse código?

## Tabelas com `thead` e `tbody`

O elemento `<thead>` é utilizado em HTML para representar o cabeçalho de uma tabela. Geralmente, é aconselhável incluir o conteúdo do cabeçalho da tabela dentro deste elemento. O cabeçalho da tabela é exibido antes do corpo da tabela e normalmente contém informações sobre as colunas.

Já o elemento `<tbody>` é utilizado para agrupar o corpo de uma tabela. O conteúdo do corpo da tabela é representado dentro deste elemento. Ele contém as linhas e células que exibem os dados da tabela.

A utilização adequada desses elementos ajuda a melhorar a **semântica** das tabelas em HTML, tornando-as mais estruturadas e facilitando a manipulação dos dados por meio de scripts ou estilos.

Por exemplo:

```html
<table>
  <thead>
    <tr>
      <th>Nome</th>
      <th>Idade</th>
      <th>País</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>João</td>
      <td>25</td>
      <td>Brasil</td>
    </tr>
    <tr>
      <td>Maria</td>
      <td>30</td>
      <td>Portugal</td>
    </tr>
  </tbody>
</table>

```

Neste exemplo, o cabeçalho da tabela é definido dentro do elemento `<thead>` e o corpo da tabela é definido dentro do elemento `<tbody>`. Isso ajuda a organizar e estruturar os elementos da tabela de forma clara e legível.

### Exercício → Tabelas e CSS

→ Criar uma tabela de alunos com as nota das ultimas 4 provas(nota1, nota2, nota3, nota4) utilizando `tbody` e `thead`.

→ Utilize `colspan` e `rowspan` para criar uma tabela parecida com a seguir:

![Captura de Tela 2023-10-08 às 23.21.54.png](Aula%202%20b1c934ffb0264b0f87c9de371d2fe2e9/Captura_de_Tela_2023-10-08_as_23.21.54.png)

→ Utilize CSS para criar uma tabela parecida com a seguir:

![Captura de Tela 2023-10-08 às 23.25.31.png](Aula%202%20b1c934ffb0264b0f87c9de371d2fe2e9/Captura_de_Tela_2023-10-08_as_23.25.31.png)

## Conceito de classes em CSS

No CSS, as classes são usadas para selecionar e estilizar um ou mais elementos HTML de forma específica. As classes permitem agrupar elementos que compartilham características semelhantes e aplicar estilos a todos eles simultaneamente.

Para criar uma classe em CSS, utiliza-se o seletor de classe, representado pelo ponto (.). Por exemplo, para definir uma classe chamada "destaque" que altera a cor do texto para vermelho, podemos escrever:

```css
.destaque {
  color: red;
}

```

Em seguida, para aplicar essa classe a um elemento HTML, adicionamos o atributo `class` ao elemento e definimos seu valor como o nome da classe desejada:

```html
<p class="destaque">Este é um texto destacado em vermelho.</p>

```

Dessa forma, todos os elementos com a classe "destaque" terão o estilo definido na classe aplicado a eles.

O uso de classes em CSS é vantajoso porque permite reutilizar estilos em diferentes elementos, facilitando a manutenção e a organização do código. Além disso, é possível aplicar várias classes a um único elemento, separando-as por espaço, e combinar diferentes classes para criar estilos mais complexos.

```html
<p class="destaque texto-grande">Este é um texto destacado e com tamanho grande.</p>

```

Nesse exemplo, o elemento terá as propriedades de estilo definidas tanto pela classe "destaque" como pela classe "texto-grande".

Utilizar classes em CSS é uma prática fundamental para criar estilos consistentes e modularizar o código, tornando-o mais legível e fácil de atualizar.

Vamos testar as classes CSS na prática?

### Exercício → Classes em CSS

→ Criar uma classe que altera o tamanho da fonte para `16px` . 

→ Criar uma classe que altere a cor de fundo para `#ccc` . 

→ Criar uma classe que altera a cor da font para `#555` .

→ Utilize essas classes para estilizar os exercicíos anteriores.

### Exercício extra → Desafio

→ Criar uma tabela com no mínimo 4 filmes ou séries famosos, essa tabela deve ter as colunas:

- Nome
- Nota
- Imagem
- Lista com pelo menos 2 atores

→ O Nome deve ter um link que direciona para a pagina do filme no site imdb.com

→ A Imagem deve ter um width de 100px no máximo

Obrigado pessoal. Até a próxima!
