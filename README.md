### Esse código cria um servidor web usando o framework Express.js e define rotas para manipular dados de alunos armazenados em um arquivo externo através do módulo ./alunos. O módulo morgan é usado para fazer log de solicitações HTTP.

As rotas definidas são:

*GET /alunos*: **rota que retorna uma lista de alunos, podendo ser filtrada por nome e/ou média, dependendo dos parâmetros de consulta da URL.**\

*POST /alunos/novo:* **rota que adiciona um novo aluno, com nome e média, à lista de alunos.**\

*POST /alunos/delete/0* **rota que remove um aluno da lista, com base no índice fornecido na URL.**\

*POST /alunos/atualizar/0* **rota que atualiza os dados de um aluno existente na lista, com base no índice fornecido na URL, com um novo nome e/ou média.**\

*PUT /alunos/0* **rota que atualiza os dados de um aluno existente na lista, com base no índice fornecido na URL, com um novo nome e/ou média.**\

*DELETE /alunos/0* **rota que remove um aluno da lista, com base no índice fornecido na URL.**\

Por fim, o servidor é iniciado e começa a escutar as solicitações na porta 3000.\

### Objetos definidos e Funções

*"alunos.js"*, **cada objeto representa um aluno e tem um nome e uma média associados. Em seguida, são definidas três funções:**\

*listaAlunos*: **recebe dois parâmetros opcionais, "nome" e "media", e retorna uma lista de alunos que correspondem aos critérios de filtro. Se "nome" for fornecido, a função filtra a lista para incluir apenas alunos cujos nomes incluam o valor de "nome" (ignorando maiúsculas e minúsculas). Se "media" for fornecida, a função filtra a lista para incluir apenas alunos cujas médias sejam maiores ou iguais à "media" fornecida.**

*deleteAlunos*: **recebe um parâmetro "index" que representa a posição do aluno na lista de alunos a ser removido e retorna o objeto de aluno removido. Se o índice fornecido for inválido, retorna null.**

*updateFile*: **recebe três parâmetros: "index", "nome" e "media". Atualiza os dados do aluno na posição "index" da lista de alunos com os valores fornecidos para "nome" e/ou "media". Em seguida, grava os dados atualizados em um arquivo JSON usando o módulo "fs" e o caminho relativo "./db.json". Se o índice fornecido for inválido, retorna null.**


### Documentação no postamn - https://documenter.getpostman.com/view/26827095/2s93XzvhBv
