# Aula 3

Vamos continuar explorando elementos HTML desta vez focando em formulário.

### O que vamos aprender nessa aula:

- Estrutura de um formulário
- Input text + label + for + propriedade "id"
- Os diferentes tipos de input e suas propriedades
- Diferentes engines para cada browser
- Explicação sobre as propriedade name e a submissão de formulário
- Introdução à validação em HTML (required, mensagens de erro, etc.)

## Estrutura de um formulário em HTML5

Um formulário em HTML5 é composto pelos seguintes elementos:

- `<form>`: Define o início e o fim do formulário.
- `<input>`: Utilizado para criar campos de entrada, como texto, número, e-mail, etc.
- `<textarea>`: Permite a inserção de um campo de texto de várias linhas.
- `<select>`: Cria uma lista suspensa para seleção de uma opção.
- `<option>`: Define as opções dentro de um elemento `<select>`.
- `<button>`: Cria um botão para enviar ou redefinir o formulário.
- `<label>`: Associa um rótulo a um campo de entrada.
- `<fieldset>`: Agrupa elementos relacionados em um formulário.
- `<legend>`: Define uma legenda para o `<fieldset>`.

Esses elementos são essenciais para criar um formulário funcional em HTML5.

Aqui está um exemplo de como criar um formulário básico em HTML:

```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome">

  <label for="email">E-mail:</label>
  <input type="email" id="email">

  <label for="senha">Senha:</label>
  <input type="password" id="senha">

  <input type="submit" value="Enviar">
</form>

```

## Propriedades do input - combinando `label` com `input` utilizando `for`

Para criar um campo de entrada de texto em HTML5, podemos utilizar a combinação dos elementos `<input>` e `<label>`. O elemento `<input>` é responsável por criar o campo de entrada, enquanto o elemento `<label>` associa um rótulo descritivo a esse campo. A propriedade "for" do elemento `<label>` deve ser usada para indicar qual campo de entrada ela está associada, utilizando o valor do atributo "id" desse campo.

Aqui está um exemplo de como criar um campo de entrada de texto com rótulo usando HTML:

```html
<label for="nome">Nome:</label>
<input type="text" id="nome">

```

Neste exemplo, o rótulo "Nome:" está associado ao campo de entrada de texto através da propriedade "for" do elemento `<label>`, que tem o valor "nome". O campo de entrada de texto, por sua vez, possui o atributo "id" definido como "nome", que é referenciado pelo rótulo.

Essa combinação de elementos e propriedades permite uma melhor acessibilidade e usabilidade do formulário em HTML5.

## Uso de `<fieldset>` e `<legend>` em Formulários HTML5

O elemento `<fieldset>` é usado para agrupar elementos relacionados em um formulário HTML5. Ele fornece uma forma de organizar e estruturar visualmente os campos de entrada relacionados.

Por sua vez, o elemento `<legend>` é usado para fornecer uma legenda descritiva para o grupo de elementos contidos dentro do `<fieldset>`. Essa legenda ajuda a identificar e fornecer contexto para os campos de entrada agrupados.

Aqui está um exemplo de como usar `<fieldset>` e `<legend>` em um formulário HTML5:

```html
<form>
  <fieldset>
    <legend>Informações Pessoais</legend>

    <label for="nome">Nome:</label>
    <input type="text" id="nome" name="nome">

    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email">
  </fieldset>

  <fieldset>
    <legend>Preferências</legend>

    <label for="cor">Cor Favorita:</label>
    <input type="text" id="cor" name="cor">

    <label for="comida">Comida Favorita:</label>
    <input type="text" id="comida" name="comida">
  </fieldset>

  <input type="submit" value="Enviar">
</form>

```

Neste exemplo, temos dois grupos de campos de entrada dentro do formulário. O primeiro grupo está relacionado às informações pessoais, enquanto o segundo grupo está relacionado às preferências do usuário.

O `<fieldset>` é usado para agrupar os campos de entrada relevantes. A legenda descritiva é fornecida pelo elemento `<legend>`, que identifica o grupo de campos.

Essa estrutura de `<fieldset>` e `<legend>` ajuda a melhorar a acessibilidade e a usabilidade do formulário, fornecendo um contexto claro para os campos de entrada agrupados. Além disso, fornece uma organização visualmente agradável para o formulário.

Lembre-se de ajustar a estrutura do seu formulário de acordo com as necessidades específicas e os requisitos do seu projeto. O uso adequado de `<fieldset>` e `<legend>` pode ajudar a criar formulários mais intuitivos e amigáveis para os usuários.

## Diferentes tipos de input e suas propriedades

- `<input type="text">`: Cria um campo de entrada de texto simples.
    - Propriedades:
        - `name`: Define o nome do campo.
        - `placeholder`: Define um texto de exemplo dentro do campo.
        - `maxlength`: Limita o número máximo de caracteres que podem ser inseridos.
        - `required`: Indica que o campo é obrigatório.

Exemplo:

```html
<input type="text" name="nome" placeholder="Digite seu nome" maxlength="50" required>

```

- `<input type="password">`: Cria um campo de entrada de senha.
    - Propriedades:
        - `name`
        - `placeholder`
        - `maxlength`
        - `required`

Exemplo:

```html
<input type="password" name="senha" placeholder="Digite sua senha" maxlength="20" required>

```

- `<input type="number">`: Cria um campo de entrada de número.
    - Propriedades:
        - `name`
        - `placeholder`
        - `min`: Define o valor mínimo permitido.
        - `max`: Define o valor máximo permitido.
        - `step`: Define o intervalo de incremento/decremento.
        - `required`

Exemplo:

```html
<input type="number" name="idade" placeholder="Digite sua idade" min="18" max="100" step="1" required>

```

- `<input type="email">`: Cria um campo de entrada de e-mail.
    - Propriedades:
        - `name`
        - `placeholder`
        - `required`

Exemplo:

```html
<input type="email" name="email" placeholder="Digite seu e-mail" required>

```

- `<input type="checkbox">`: Cria uma caixa de seleção.
    - Propriedades:
        - `name`
        - `checked`: Define se a caixa de seleção está marcada por padrão.

Exemplo:

```html
<input type="checkbox" name="aceito-termos" checked>

```

- `<input type="radio">`: Cria um botão de opção.
    - Propriedades:
        - `name`
        - `value`: Define o valor da opção.
        - `checked`

Exemplo:

```html
<input type="radio" name="genero" value="masculino" checked> Masculino

<input type="radio" name="genero" value="feminino"> Feminino

```

- `<input type="submit">`: Cria um botão de envio do formulário.
    - Propriedades:
        - `value`: Define o texto exibido no botão.

Exemplo:

```html
<input type="submit" value="Enviar">

```

- `<input type="reset">`: Cria um botão para redefinir os valores do formulário.
    - Propriedades:
        - `value`

Exemplo:

```html
<input type="reset" value="Limpar">

```

- `<input type="file">`: Cria um campo de seleção de arquivo.
    - Propriedades:
        - `name`
        - `accept`: Define os tipos de arquivo permitidos.
        - `multiple`: Permite selecionar vários arquivos.

Exemplo:

```html
<input type="file" name="arquivo" accept=".jpg, .png" multiple>

```

- `<input type="date">`: Cria um campo de entrada de data.
    - Propriedades:
        - `name`
        - `min`
        - `max`
        - `required`

Exemplo:

```html
<input type="date" name="data-nascimento" min="1900-01-01" max="2022-12-31" required>

```

- `<input type="time">` é utilizado para criar um campo de entrada de hora. Ele permite que os usuários selecionem uma hora específica no formato de 24 horas.

Propriedades do `<input type="time>`:

- `name`: Define o nome do campo.
- `min`: Define o valor mínimo permitido.
- `max`: Define o valor máximo permitido.
- `required`: Indica que o campo é obrigatório.

Exemplo de uso do `<input type="time>`:

```html
<input type="time" name="hora" min="09:00" max="18:00" required>

```

Neste exemplo, um campo de entrada de hora é criado com o nome "hora". O valor mínimo permitido é definido como "09:00" e o valor máximo permitido como "18:00". O campo também é definido como obrigatório, utilizando a propriedade "required".

Este campo permitirá que os usuários selecionem uma hora entre 09:00 e 18:00.

Lembre-se de que a apresentação e a funcionalidade exatas do `<input type="time">` podem variar dependendo do navegador e do sistema operacional utilizado pelo usuário. Portanto, é importante realizar testes em diferentes dispositivos e navegadores para garantir uma experiência consistente para os usuários.

## Elemento `<select>` e `<option>` em HTML5

O elemento `<select>` é usado para criar uma lista suspensa de opções em um formulário HTML5. Ele permite que os usuários selecionem uma ou várias opções de um conjunto predefinido.

Dentro do elemento `<select>`, usamos o elemento `<option>` para definir cada opção na lista suspensa. Cada `<option>` pode ter um valor atribuído usando o atributo "value", e também pode ter um texto descritivo entre as tags de abertura e fechamento.

Aqui está um exemplo de como usar o elemento `<select>` e `<option>` em um formulário HTML5:

```html
<label for="pais">País:</label>
<select id="pais" name="pais">
  <option value="brasil">Brasil</option>
  <option value="eua">Estados Unidos</option>
  <option value="japao">Japão</option>
  <option value="franca">França</option>
</select>

```

Neste exemplo, temos um campo de seleção de país. O elemento `<select>` possui o atributo "name" definido como "pais", para identificar o campo quando o formulário for submetido. Cada opção é definida por um elemento `<option>`, com um valor atribuído ao atributo "value" e um texto descritivo entre as tags.

Essa estrutura permite que os usuários selecionem uma opção da lista suspensa durante a interação com o formulário.

Lembre-se de que o elemento `<select>` também suporta o atributo "multiple", que permite que os usuários selecionem várias opções simultaneamente. Nesse caso, cada opção selecionada será enviada como um valor separado quando o formulário for submetido.

## Exemplo de uso combinado de `<select>` e `<option>`

Aqui está um exemplo de como usar o elemento `<select>` e `<option>` para criar uma lista suspensa de seleção de cor:

```html
<label for="cor">Cor favorita:</label>
<select id="cor" name="cor">
  <option value="vermelho">Vermelho</option>
  <option value="azul">Azul</option>
  <option value="amarelo">Amarelo</option>
  <option value="verde">Verde</option>
</select>

```

Neste exemplo, temos um campo de seleção de cor. O elemento `<select>` possui o atributo "name" definido como "cor", para identificar o campo quando o formulário for submetido. Cada opção é definida por um elemento `<option>`, com um valor atribuído ao atributo "value" e um texto descritivo entre as tags.

O usuário pode selecionar uma cor da lista suspensa durante a interação com o formulário.

Lembre-se de que o valor selecionado será enviado como parte dos dados do formulário quando ele for submetido ao servidor.

## Uso de atributos adicionais em `<option>`

Além do atributo "value", o elemento `<option>` também suporta outros atributos que podem ser úteis em determinadas situações.

- O atributo "selected" pode ser usado para marcar uma opção como selecionada por padrão. Isso é útil quando você deseja que uma opção seja selecionada automaticamente ao carregar o formulário. Por exemplo:

```html
<select>
  <option value="1">Opção 1</option>
  <option value="2" selected>Opção 2</option>
  <option value="3">Opção 3</option>
</select>

```

### Validação utilizando `pattern`

O atributo `pattern` é usado em formulários HTML para especificar um padrão que o valor inserido em um campo de entrada deve seguir. Ele pode ser usado para impor restrições de formato, como um número de telefone válido, um endereço de email válido, ou qualquer outro padrão específico que você deseje.

Aqui está um exemplo de como usar o atributo `pattern` em um campo de entrada de telefone:

```html
<label for="telefone">Telefone:</label>
<input 
	type="text" 
	id="telefone" 
	name="telefone" 
	pattern="[0-9]{2}-[0-9]{4}-[0-9]{4}" 
	placeholder="Ex: 11-9999-9999" 
	required
>

```

Neste exemplo, o atributo `pattern` está definido como `[0-9]{3}-[0-9]{3}-[0-9]{4}`, o que significa que o valor inserido no campo de telefone deve seguir o formato "123-456-7890", onde cada grupo de números é composto por três dígitos.

Ao usar o atributo `pattern`, você pode personalizar o padrão de acordo com suas necessidades específicas. Certifique-se de fornecer uma mensagem de erro adequada para indicar aos usuários o formato correto que eles devem seguir.

## Diferentes engines dos browsers e a diferença para formulários

Os navegadores da web são alimentados por diferentes engines de renderização, que são responsáveis por interpretar e exibir o código HTML, CSS e JavaScript de um site. Cada engine tem suas próprias características e implementações, resultando em diferenças no comportamento e no suporte a recursos.

A diferença entre os engines de renderização dos browsers pode afetar a forma como os formulários são exibidos e funcionam. Alguns browsers podem ter um suporte mais avançado para certos recursos de formulário, enquanto outros podem ter limitações ou comportamentos diferentes.

Por exemplo, a validação de formulários em HTML5, como o uso dos atributos `required` e `pattern`, pode ser suportada de forma consistente em alguns browsers, enquanto em outros pode haver diferenças sutis de comportamento ou suporte limitado. Da mesma forma, os estilos e a aparência dos elementos de formulário podem variar entre os browsers, afetando a consistência visual do seu site.

Ao desenvolver formulários para a web, é importante considerar essas diferenças de engine dos browsers. É recomendável testar e validar os formulários em diferentes navegadores populares para garantir que eles funcionem corretamente e proporcionem uma experiência consistente para os usuários.

## Principais engines de navegadores

- **Blink** (usado pelo Google Chrome e pelo Opera): O Blink é um fork do WebKit, desenvolvido pelo Google. Ele é conhecido por sua velocidade e eficiência, além de ser altamente compatível com os padrões da web.
- **Gecko** (usado pelo Mozilla Firefox): O Gecko é um engine de renderização desenvolvido pela Mozilla. Ele é conhecido por sua flexibilidade e suporte a tecnologias web avançadas, como CSS personalizado e animações complexas.
- **WebKit** (usado pelo Safari e por muitos outros navegadores): O WebKit é um engine de código aberto desenvolvido pela Apple. Ele é conhecido por sua velocidade e desempenho, além de ser altamente compatível com os padrões da web.
- **Trident** (usado pelo Internet Explorer): O Trident é um engine desenvolvido pela Microsoft. Embora o Internet Explorer tenha sido substituído pelo Microsoft Edge, o Trident ainda é usado para fornecer compatibilidade com sites mais antigos.
- **EdgeHTML** (usado pelo antigo Microsoft Edge): O EdgeHTML era o engine de renderização usado pelo antigo Microsoft Edge. No entanto, o EdgeHTML foi substituído pelo Chromium no novo Microsoft Edge.

Esses engines diferem na forma como interpretam e exibem o conteúdo da web, o que pode levar a diferenças de renderização entre os navegadores. É importante que os desenvolvedores de sites considerem essas diferenças ao criar e testar seus sites para garantir uma experiência consistente em diferentes navegadores.

## Propriedade "name" e a submissão de formulário

A propriedade "name" é um atributo importante ao lidar com formulários em HTML. Ela é usada para identificar os campos de entrada e enviar os dados correspondentes ao servidor quando o formulário é submetido.

Ao definir a propriedade "name" em um elemento de entrada, como `<input>`, `<select>` ou `<textarea>`, você está atribuindo um nome único a esse campo. Esse nome será usado para identificar o campo e seus dados associados quando o formulário for processado.

Quando o formulário é submetido, seja por meio de um botão de envio ou por meio de JavaScript, os dados de todos os campos dentro do formulário são enviados para o servidor. Cada campo é representado por um par "nome-valor", em que o "nome" é o valor definido na propriedade "name" e o "valor" é o conteúdo inserido pelo usuário.

Por exemplo, suponha que você tenha um formulário com um campo de texto para o nome e um campo de e-mail. Aqui está como os campos podem ser definidos:

```html
<form>
  <label for="nome">Nome:</label>
  <input type="text" id="nome" name="nome">

  <label for="email">E-mail:</label>
  <input type="email" id="email" name="email">

  <input type="submit" value="Enviar">
</form>

```

Quando o formulário for submetido, o servidor receberá os dados com os pares "nome-valor" correspondentes:

```
nome=John+Doe
email=johndoe@example.com

```

Esses dados podem ser processados pelo servidor, armazenados em um banco de dados ou usados para outros fins, dependendo das necessidades do seu projeto.

A propriedade "name" é fundamental para identificar e organizar os dados de um formulário. Certifique-se de atribuir nomes claros e significativos a cada campo para facilitar o processamento e a manipulação dos dados do formulário.

### Exercício:

Crie um formulário de agendamento no dentista, o formulário deve contem.

- Nome (campo obrigatório)
- Idade
- Telefone (campo obrigatório)
- Gênero (Masculino ou Feminino)
- Data de nascimento (campo obrigatório)
- Horário de atendimento (campo obrigatório)
- Lista de Hobbies (minimo 7, pode selecionar mais de um)
- Botão Enviar
- Botão Limpar

Utilize `label`, `setfield` e `legend` para uma melhor experiência do usuário.