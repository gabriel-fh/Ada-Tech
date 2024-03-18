# TRABALHO FINAL - Sistema mini Max.com (antiga hbomax.com)

## Funcionalidades

### Login

- [ ] Tela de login com `email` e `password`;
- [ ] Fazer validação dos campos;
- [ ] Fazer chamada POST `/api/signIn`;
- [ ] Quando BackEnd retornar 401: Mostrar mensagem de erro ex:`Credencias inválidas`
- [ ] Quando BackEnd retornar 200: Redirecionar para tela conforme o role do usuário;
      Se for `user` para tela `Profile` se `admin` para Backstage;

### Logout

- [ ] Criar algum ponto no sistema para fazer logout, limpando o token e redirecionando para o login;

### Profile

- [ ] Listar os profiles;
- [ ] Criar um novo profile;
- [ ] Alterar um profile;
- [ ] Remover um profile;
- [ ] Apos selecionado um profile, redirecionar para `/home`

### Home

- [ ] Mostrar os banners. Pegando de GET `/api/banners`;
- [ ] (plus) Criar um carousel com os banners;
- [ ] Mostrar os trilhos de ofertas. Pegando em GET `/api/trail-offers`;
- [ ] No momento que o elmento da oferta entrar no viewport, chamamos o GET `/api/trail-offer/:id` então mostramos data um dos thumbs das ofertas

### Funcionalidades gerais

- [ ] Use Internacionalização para os textos;
- [ ] Use os hooks, especialmente criando custom hooks;
- [ ] Componentize os elementos para que fiquem reaproveitáveis;
- [ ] Use Context API;
- [ ] Valide sempre os formulários para que o mesmo não seja submetido sem os dados estarem ok;
- [ ] Coloque `Loading` onde precisa;
- [ ] Trate erros inesperados usando Error Boundaries; (para não dar a famosa tela branca)

### Entrega

Cada grupo deve subir o projeto na nuvem (ex: vercel.com) e enviar para meu e-mail `expalmer@gmail.com` o link do github do projeto até dia 17/03/2024 as 23:59h.

Informe no README.md o nome dos integrantes e seus respectivos e-mails;
