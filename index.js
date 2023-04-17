const express = require("express");
const alunos = require("./alunos");

const app = express();

const morgan = require('morgan');
app.use(express.json());

app.get("/alunos", (req, res) => {
    const { nome, media } = req.query;
    const list = alunos.listaAlunos(nome, media);
    res.json(list);
});


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


app.post("/alunos/delete/:index", (req, res) => {
    const index = req.params.index;
    const deleteAlunos = alunos.deleteAlunos(index);

    if (deleteAlunos) {
        res.json(deleteAlunos);
    } else {
        res.status(404).json({ mensagem: "Aluno não encontrado no sistema" });
    }
});


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

app.delete("/alunos/:index", morgan('tiny'), (req, res) => {
    const index = Number(req.params.index);
    const deleteAlunos = alunos.deleteAlunos(index);

    if(deleteAlunos) {
        res.json(deleteAlunos);
    } else {
        res.status(404).json({mensagem: "Aluno não encontrado no sistema"})
    }
});

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/")
});
