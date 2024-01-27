# Lista de tarefas

Nos últimos anos acompanhamos um aumento pelo interesse no tema produtividade. Canais no YouTube, blogs, livros, filmes e diversos outras referências foram impactadas pela crescente produção de conteúdos relacionados a este tema.

Percebendo este movimento do mercado, sua empresa de tecnologia decidiu investir no desenvolvimento de um software para auxiliar as pessoas a gerenciarem suas tarefas, ajudando-as assim a serem mais produtivas.

No entanto, para garantir que o seu time conseguisse entregar uma solução em tempo razoável, os analistas do projeto decidiram restringir bastante o escopo do software, selecionando as funcionalidades que não poderiam faltar no MVP (Minimum Viable Product). A ideia seria disponibilizar uma solução simples o mais rápido possível e evoluir gradativamente a partir dos feedbacks dos usuários.

Do trabalho dos analistas, pudemos extrair os seguintes requisitos iniciais.

## Requisitos do MVP:

- Toda tarefa deverá possuir um título, obrigatório, de no máximo 50 caracteres.
- Cada tarefa poderá possuir uma descrição, opcional, de no máximo 100 caracteres.
- A lista deve possuir uma forma de executar as seguintes operações:
  - Adicionar uma tarefa.
  - Marcar uma tarefa como completa.
  - Excluir uma tarefa.
  - Editar uma tarefa.
  - Listar todas as tarefas pendentes.
  - Listar todas as tarefas completas.
- Ao marcar uma tarefa como completa ela deverá ser removida da lista de tarefas pendentes e adicionada à lista de tarefas completas.
- Ao marcar uma tarefa como completa o sistema deverá registrar a data e hora desta ação.