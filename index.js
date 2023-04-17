const express = require("express");
const alunos = require("./alunos");

const app = express();

const morgan = require('morgan');
app.use(express.json());

// GET /alunos: rota que retorna uma lista de alunos, podendo ser filtrada por nome e/ou média, dependendo dos parâmetros de consulta da URL.
app.get("/alunos", (req, res) => {
    const { nome, media } = req.query;
    const list = alunos.listaAlunos(nome, media);
    res.json(list);
});

// PUT /alunos/:index: rota que atualiza os dados de um aluno existente na lista, com base no índice fornecido na URL, com um novo nome e/ou média.
app.put("/alunos/:index", morgan('tiny'), (req, res) => {
    const index = Number(req.params.index);
    const { nome, media } = req.body;
    const updateFile = alunos.updateFile(index, nome, media);

    if(updateFile) {
        res.json(updateFile);
    } else {
        res.status(404).json({mensagem: "Aluno não encontrado no sistema"})
    }
});

// POST /alunos/novo: rota que adiciona um novo aluno, com nome e média, à lista de alunos.
app.post("/alunos/novo", (req, res) => {
    const { nome, media } = req.body;
    if (!nome || !media) {
        res.status(400).json({ error: "Informações incompletas" });
    } else {
        const novoAluno = { nome: nome, media: media };
        alunos.alunos.push(novoAluno);
        res.status(201).json({ message: `Usuário ${nome} adicionado com sucesso` });
    }
});

// POST /alunos/delete/:index: rota que remove um aluno da lista, com base no índice fornecido na URL.
app.post("/alunos/delete/:index", (req, res) => {
    const index = req.params.index;
    const deleteAlunos = alunos.deleteAlunos(index);

    if (deleteAlunos) {
        res.json(deleteAlunos);
    } else {
        res.status(404).json({ mensagem: "Aluno não encontrado no sistema" });
    }
});

// DELETE /alunos/:index: rota que remove um aluno da lista, com base no índice fornecido na URL.
app.delete("/alunos/:index", morgan('tiny'), (req, res) => {
    const index = Number(req.params.index);
    const deleteAlunos = alunos.deleteAlunos(index);

    if(deleteAlunos) {
        res.json(deleteAlunos);
    } else {
        res.status(404).json({mensagem: "Aluno não encontrado no sistema"})
    }
});

// POST /alunos/atualizar/:index: rota que atualiza os dados de um aluno existente na lista, com base no índice fornecido na URL, com um novo nome e/ou média.
app.post("/alunos/atualizar/:index", (req, res) => {
    const index = parseInt(req.params.index);
    const { nome, media } = req.body;
    const updateFile = alunos.updateFile(index, nome, media);

    if (updateFile) {
        res.json(updateFile);
    } else {
        res.status(404).send('Aluno não encontrado no sistema!');
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/")
});
