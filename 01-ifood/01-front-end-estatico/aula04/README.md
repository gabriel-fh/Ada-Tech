# Aula 4

## O que vamos aprender nessa aula:

- Method GET e POST e suas diferenças.
- Elemento `<header>`.
- Conteúdo principal e suas divisões especiais.
    - Elemento `<main>`.
    - Elemento `<section>`.
    - Elemento `<article>`.
- Elemento `<footer>`.
- Elemento `<aside>`.
- Elemento `<nav>`.
- Elementos de imagem com legenda `<figure>` e `<figcaption>`.
- Navegação automática utilizando id (link com ancora e scroll suave).

## Método GET e POST e suas diferenças para formulários

Quando se trata de enviar dados de um formulário HTML para o servidor, existem dois métodos principais: GET e POST. Ambos os métodos podem ser usados para enviar dados, mas diferem em termos de visibilidade dos dados, tamanho máximo dos dados e como os dados são enviados.

### Método GET

O método GET é o método padrão para o envio de dados de um formulário HTML. Quando um formulário é enviado usando o método GET, os dados do formulário são anexados à URL como parâmetros de consulta. Isso significa que os dados do formulário são visíveis na barra de endereços do navegador.

Por exemplo, se tivermos um formulário com um campo de entrada para o nome e um campo de entrada para o e-mail, e o usuário inserir "John Doe" como nome e "[johndoe@example.com](mailto:johndoe@example.com)" como e-mail, a URL resultante ao enviar o formulário será semelhante a:

```
<https://www.example.com/process-form?nome=John%20Doe&e-mail=johndoe%40example.com>
```

Neste exemplo, os dados do formulário (`nome=John%20Doe` e `e-mail=johndoe%40example.com`) são exibidos na própria URL.

Além disso, o método GET tem um limite de tamanho para os dados enviados. Embora o limite exato possa variar entre os navegadores e servidores, geralmente é cerca de 2048 caracteres. Portanto, o método GET é adequado para o envio de pequenas quantidades de dados.

O método GET é amplamente usado para a recuperação de informações, como a obtenção de resultados de pesquisa ou a navegação entre páginas. No entanto, como os dados são visíveis na URL, não é recomendado usá-lo para enviar informações sensíveis, como senhas.

### Método POST

O método POST é usado quando os dados do formulário precisam ser enviados de forma mais segura ou se o tamanho dos dados excede o limite do método GET. Ao contrário do método GET, os dados do formulário são enviados no corpo da solicitação HTTP, em vez de serem anexados à URL.

Por exemplo, ao enviar o mesmo formulário mencionado acima usando o método POST, os dados não seriam visíveis na URL. Em vez disso, eles seriam enviados no corpo da solicitação, tornando-os menos visíveis para os usuários.

Além disso, ao usar o método POST, não há um limite estrito para o tamanho dos dados enviados. No entanto, os servidores geralmente têm limites de tamanho configurados para evitar abusos ou ataques.

Ao contrário do método GET, as informações enviadas usando o método POST não são exibidas na barra de endereços do navegador e, portanto, são mais adequadas para o envio de informações sensíveis, como senhas, informações de cartão de crédito ou outros dados confidenciais. O método POST também é usado quando o envio de dados pode causar alterações no servidor, como a criação de uma nova entrada em um banco de dados.

Em resumo, a principal diferença entre os métodos GET e POST para formulários HTML é a visibilidade dos dados, o tamanho máximo dos dados e como os dados são enviados. O método GET é adequado para dados não sensíveis e de tamanho pequeno, enquanto o método POST é mais seguro e pode lidar com grandes quantidades de dados ou informações sensíveis.

**Exemplo de formulário usando o método GET:**

```html
<form method="GET" action="/process-form">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email">

  <input type="submit" value="Enviar">
</form>

```

**Exemplo de formulário usando o método POST:**

```html
<form method="POST" action="/process-form">
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email">

  <input type="submit" value="Enviar">
</form>

```

Nesses exemplos, o atributo `method` define o método de envio do formulário, que pode ser "GET" ou "POST". O atributo `action` define o URL para onde os dados do formulário serão enviados.

### Vamos ver mais elementos HTML

- Header: O elemento `<header>` é usado para representar a seção de cabeçalho de uma página HTML. Ele geralmente contém informações de identificação do site, como o logotipo, o título principal e a navegação. O `<header>` fornece uma estrutura organizada para o conteúdo inicial da página e ajuda na compreensão e na navegação do usuário.
- **Main**: O elemento `<main>` é usado para envolver o conteúdo principal de uma página HTML. Ele representa a parte central e mais importante do conteúdo, excluindo cabeçalhos, rodapés, barras laterais e outros elementos que não são considerados conteúdo principal.
- **Footer**: O elemento `<footer>` é usado para representar o rodapé de uma página HTML ou a seção final de um elemento de seção. É comumente usado para incluir informações de direitos autorais, links de contato e outros elementos relacionados ao final do conteúdo.
- **Aside**: O elemento `<aside>` é usado para envolver conteúdo relacionado, mas que é considerado separado do conteúdo principal da página. Pode conter informações adicionais, como notas de rodapé, citações, anúncios, barras laterais ou outras seções relacionadas.
- **Nav**: O elemento `<nav>` é usado para definir uma seção de navegação em uma página HTML. Geralmente contém links para outras páginas ou seções do site.
- **Figure e Figcaption**: Os elementos `<figure>` e `<figcaption>` são usados em conjunto para adicionar imagens com legendas a uma página HTML. O elemento `<figure>` envolve a imagem, enquanto o elemento `<figcaption>` é usado para fornecer uma descrição ou legenda para a imagem.
- Section: O elemento `<section>` é usado para agrupar conteúdo relacionado em uma página HTML. Ele ajuda a organizar e estruturar o conteúdo, tornando-o mais compreensível para os usuários e os mecanismos de busca. Uma seção pode conter vários elementos, como títulos, parágrafos, imagens ou outros elementos HTML. É uma ótima ferramenta para dividir o conteúdo da página em partes distintas e significativas.
- Article: O elemento `<article>` é usado para representar um conteúdo independente e autossuficiente em uma página HTML. Ele deve ser usado quando um determinado conteúdo pode ser distribuído separadamente do restante da página ou quando é considerado um item completo em si mesmo. O elemento `<article>` é altamente relevante para SEO, pois ajuda os mecanismos de busca a entender a estrutura e a importância do conteúdo.

Sites para pesquisar mais sobre elementos HTML:

- [MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [W3 Schools](https://www.w3schools.com/html/default.asp)

Esses elementos HTML são fundamentais para estruturar e organizar o conteúdo de uma página web de forma semântica e acessível.

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Exemplo de Página HTML</title>
</head>
<body>
  <header>
    <h1>Meu Site</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section>
      <h2>Bem-vindo ao meu site</h2>
      <p>Este é um exemplo de página HTML que utiliza os elementos mencionados anteriormente.</p>
      <figure>
        <img src="imagem.jpg" alt="Imagem de exemplo">
        <figcaption>Legenda da imagem de exemplo</figcaption>
      </figure>
    </section>

    <aside>
      <h3>Informações adicionais</h3>
      <p>Este é um texto relacionado ao conteúdo principal da página.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2022 Meu Site. Todos os direitos reservados.</p>
    <p>Contato: exemplo@email.com</p>
  </footer>
</body>
</html>

```

Neste exemplo, criamos uma página HTML que utiliza os elementos mencionados. O `<header>` contém o título do site e a navegação. O `<main>` envolve o conteúdo principal da página, que inclui uma seção de boas-vindas, uma imagem com legenda e uma seção lateral com informações adicionais. O `<footer>` representa o rodapé da página, onde incluímos informações de direitos autorais e contato.

## Técnicas e Dicas de SEO e Acessibilidade para HTML5

Ao desenvolver páginas HTML5, é importante considerar técnicas de SEO (Search Engine Optimization) e acessibilidade para garantir que seu conteúdo seja facilmente encontrado pelos mecanismos de busca e acessível para todos os usuários. Aqui estão algumas dicas e práticas recomendadas:

- **Uso adequado das tags semânticas**: Utilize as tags semânticas do HTML5, como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`, entre outras, para estruturar corretamente o conteúdo da página. Isso ajudará os mecanismos de busca a entender a hierarquia e o contexto do seu conteúdo.
- **Utilize títulos apropriados**: Utilize as tags de cabeçalho (`<h1>` a `<h6>`) de forma adequada, organizando o conteúdo em uma hierarquia clara. Os cabeçalhos ajudam os mecanismos de busca a entender a estrutura do seu conteúdo e também facilitam a navegação para usuários com deficiências visuais que utilizam leitores de tela.
- **Atributo `alt` para imagens**: Sempre forneça um texto alternativo descritivo usando o atributo `alt` para todas as imagens. Isso é importante tanto para acessibilidade, permitindo que usuários com deficiência visual entendam o conteúdo da imagem, quanto para SEO, pois os mecanismos de busca utilizam o texto alternativo para indexar e classificar as imagens.
- **Utilize texto âncora descritivo**: Ao criar links, utilize um texto âncora descritivo que seja relevante para o conteúdo do link. Evite utilizar apenas termos genéricos como "clique aqui". Isso ajuda na acessibilidade, permitindo que usuários com deficiência visual entendam o destino do link, e também é considerado relevante para SEO.
- **URLs amigáveis**: Utilize URLs amigáveis e descritivas, que incluam palavras-chave relevantes para o conteúdo da página. Isso ajuda os mecanismos de busca a entender do que se trata a página e melhora a experiência do usuário ao visualizar e compartilhar links.
- **Meta tags**: Utilize as meta tags apropriadas, como a meta tag `<title>` para definir o título da página, a meta tag `<description>` para fornecer uma descrição concisa do conteúdo da página e a meta tag `<keywords>` para especificar as palavras-chave relevantes. Essas meta tags ajudam os mecanismos de busca a entender e indexar melhor o seu conteúdo.
- **Conteúdo relevante e de qualidade**: Produza conteúdo relevante, original e de qualidade. Os mecanismos de busca valorizam o conteúdo útil e de valor para os usuários. Além disso, torne o conteúdo da página fácil de ser lido e compreendido, utilizando parágrafos curtos, marcadores e títulos claros.

Lembre-se de que SEO e acessibilidade são práticas contínuas e que é importante acompanhar as atualizações e diretrizes dos mecanismos de busca e dos padrões de acessibilidade para garantir que seu conteúdo esteja otimizado e acessível.

## Como criar links âncora em HTML

Para criar um link âncora em HTML, você pode usar a tag `<a>` e o atributo `href` para definir o destino do link. Em seguida, você precisa adicionar um identificador único ao elemento de destino usando o atributo `id`.

Aqui está um exemplo de como criar um link âncora para uma seção específica em uma página:

```html
<a href="#secao-id">Ir para a Seção</a>

...

<h2 id="secao-id">Seção</h2>
<p>Conteúdo da seção.</p>

```

Neste exemplo, o atributo `href` do link âncora é definido como `#secao-id`, onde `secao-id` é o identificador único atribuído à seção que você deseja linkar. Quando o link âncora é clicado, o navegador irá rolar a página até a seção identificada por `secao-id`.

## Como fazer efeito scroll suave com CSS

Para criar um efeito de scroll suave em uma página HTML usando apenas CSS, você pode usar a propriedade `scroll-behavior`. Essa propriedade permite controlar o comportamento de rolagem de um elemento ou da página inteira.

Aqui está um exemplo de como adicionar um efeito de scroll suave a todos os links âncora em uma página:

```css
html {
  scroll-behavior: smooth;
}

```

Com essa regra CSS aplicada, quando um link âncora é clicado, a página irá rolar suavemente até o destino do link.

Lembre-se de adicionar esse código CSS em uma seção `<style>` no cabeçalho da página ou em um arquivo CSS externo para que seja aplicado corretamente.

É importante mencionar que a propriedade `scroll-behavior` é amplamente suportada pelos navegadores modernos, mas pode não funcionar em navegadores mais antigos. Portanto, é uma boa prática fornecer uma solução alternativa para navegadores que não suportam essa propriedade, como JavaScript.

## Exercício

Vamo construir uma página semântica e super acessível utilizando os conceitos aprendidos na aula.

Primeiro escolha um tipo de pagina: (as cores são sugestão)

- Loja de doces → [Cores](https://colorhunt.co/palette/ffc7c7ffe2e2f6f6f68785a2)
- Fabrica de software → [Cores](https://colorhunt.co/palette/f9f7f7dbe2ef3f72af112d4e)
- Loja de roupa infantil → [Cores](https://colorhunt.co/palette/f38181fce38aeaffd095e1d3)
- Blog de Jeepeiros -> [Cores](https://colorhunt.co/palette/7d5a50b4846ce5b299fcdec0)

Requisitos:

Cada página deve ter um menu com 3 itens: (cada um sera um arquivo html separado)

- Home
- Sobre
- Catálogo (produtos, posts, etc…)

Utilize os layouts a seguir para construir as páginas:

![Captura de Tela 2023-10-16 às 18.01.58.png](Aula%204%2039862ecda2b7490d8759fbdf38c9f3c4/Captura_de_Tela_2023-10-16_as_18.01.58.png)

![Captura de Tela 2023-10-16 às 18.02.05.png](Aula%204%2039862ecda2b7490d8759fbdf38c9f3c4/Captura_de_Tela_2023-10-16_as_18.02.05.png)

![Captura de Tela 2023-10-16 às 18.08.13.png](Aula%204%2039862ecda2b7490d8759fbdf38c9f3c4/Captura_de_Tela_2023-10-16_as_18.08.13.png)

[Link dos wireframes](https://wireframe.cc/1cBFP2)

Obs: 

- Para texto pode usar o `Lorem ipsum`
- Para imagem pode usar algum gerador de imagem. ([LINK](https://source.unsplash.com/400x200/?bolos))
- Tente não utilizar `flexbox` e `grid` (vamos ver nas próximas aulas)
- Pode tentar criar o layout utilizando `table`
- Não é obrigatório o uso de `table`
