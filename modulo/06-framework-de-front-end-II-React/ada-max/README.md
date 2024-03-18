# Ada Max

Criando a aplicação usando o Vite.

```bash
npm create vite@latest ada-max -- --template react-ts
```

Colocando React Router

```bash
npm i react-router-dom
```

## 1. Iniciando a aplicação

```bash
npm run dev
```

## 1. Criando o Form

28/02/2024

- state para email;
- isSubmitted;
- mostrar erro de email inválido;
- state para senha;
- mostrar erro de senha inválida;
- mostrar senha em texto;
- submit do form;
- loading no submit;
- adicionar o fakeApi
- mostrar erro (Alert) de credenciais inválidas
- mostrar console.log() de sucesso

01/03/2024

- Comunicar com a API;
- Salvar o token no LocalStorage;
- Redirecionar para HOME
- Criar um hook para pegar os dados do usuário; (`npm i jose` para decodificar o token)
- Criar um hooke para proteger a HOME;
- Fazer Logout;
- Criar um rota protegida para proteger a HOME e as demais páginas;

Atividade em Grupo

- Login com adamax -> id para BACKSTAGE
- Login com user -> ir para PROFILE

- [plus]: usar @rehooks/local-storage

04/03/2024

- Dúvidas sobre useCallback ?
- Entrar em /profile;
- Buscar os profiles em `/api/profile`;
- Buscar os avatares em `/api/avatar`;

06/03/2024

- Editar Profile em `/edit-profile/:id`
- Deletar Profile em `/delete-profile/:id`
- Usando lib de classes css `clsx`

08/03/2024

Aqui temos uma refatoração usando algumas libs.

- [React Query](https://tanstack.com/query/v3/docs/framework/react/overview) `data-fetching library`: para lidar com requisições de dados e cache;
- [React Hook Form](https://react-hook-form.com/) `Performant, flexible and extensible forms with easy-to-use validation`: para lidar com forms;
- [Zod](https://zod.dev/) `TypeScript-first schema validation with static type inference`: para criação de schemas de validação de dados;
- [React i18next](https://react.i18next.com/guides/quick-start) Internacionalização

```bash
npm i @tanstack/react-query
npm i react-hook-form @hookform/resolvers
npm i zod
npm i styled-components
npm i --save-dev babel-plugin-styled-components
npm i react-i18next i18next
```

Pra não esquecer:

- A meta de vocês é matar o css global `main.css` criando todo componente com seu escopo;
- Criar um provider para trocar a lang, ou pegar do navegador, ou no setting do usuário
