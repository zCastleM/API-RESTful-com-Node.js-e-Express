const express = require('express');
const { alunos, filtrarPorNome, filtrarPorMedia } = require('./alunos');

const app = express();

app.get('/alunos', (req, res) => {
  let resultado = alunos;

  if (req.query.nome) {
    resultado = filtrarPorNome(req.query.nome);
  }

  if (req.query.media) {
    resultado = filtrarPorMedia(req.query.media);
  }

  res.json(resultado);
});

app.use(express.json());

app.post('/alunos/novo', (req, res) => {
  const { nome, matricula, media } = req.body;

  if (!nome || !matricula || !media) {
    return res.status(400).json({ mensagem: 'Dados inválidos' });
  }

  const novoAluno = { nome, matricula, media };
  alunos.push(novoAluno);

  res.status(201).json(novoAluno);
});

app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));
