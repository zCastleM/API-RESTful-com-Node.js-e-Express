const alunos = [
    { nome: "Mikael", media: 8.5 },
    { nome: "Meira", media: 8 },
    { nome: "Almir", media: 7 },
    { nome: "Gabriel", media: 6 }
];

const fs = require('fs');
const path = require('path');

// listaAlunos: recebe dois parâmetros opcionais, "nome" e "media", e retorna uma lista de alunos que correspondem aos critérios de filtro. Se "nome" for fornecido, a função filtra a lista para incluir apenas alunos cujos nomes incluam o valor de "nome" (ignorando maiúsculas e minúsculas). Se "media" for fornecida, a função filtra a lista para incluir apenas alunos cujas médias sejam maiores ou iguais à "media" fornecida.
function listaAlunos(nome, media) {
    let listaFiltro = alunos;
    if (nome) {
        listaFiltro = listaFiltro.filter(s => s.nome.toLowerCase().includes(nome.toLowerCase()));
    }
    else if (media) {
        listaFiltro = listaFiltro.filter(s => s.media >= media);
    }
    return listaFiltro;
}
// deleteAlunos: recebe um parâmetro "index" que representa a posição do aluno na lista de alunos a ser removido e retorna o objeto de aluno removido. Se o índice fornecido for inválido, retorna null.
function deleteAlunos(index) {
    const alunosRemovido = alunos.splice(index, 1);
    return alunosRemovido.length > 0 ? alunosRemovido[0] : null;
}
// updateFile: recebe três parâmetros: "index", "nome" e "media". Atualiza os dados do aluno na posição "index" da lista de alunos com os valores fornecidos para "nome" e/ou "media". Em seguida, grava os dados atualizados em um arquivo JSON usando o módulo "fs" e o caminho relativo "./db.json". Se o índice fornecido for inválido, retorna null.
function updateFile(index, nome, media) {
    if (index >= 0 && index < alunos.length) {
        const updateFile = alunos[index];
        updateFile.nome = nome || updateFile.nome;
        updateFile.media = media || updateFile.media;

        fs.writeFile(
            path.join(__dirname, 'db.json'),
            JSON.stringify(alunos),
            err => {
                if (err) {
                    console.error(err);
                } else {
                    console.log('Dados atualizados!');
                }
            }
        );

        return updateFile;
    } else {
        return null
    }
};





module.exports = { alunos, listaAlunos, deleteAlunos, updateFile};
