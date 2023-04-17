const alunos = [
    { nome: "Mikael", media: 8.5 },
    { nome: "Meira", media: 8 },
    { nome: "Almir", media: 7 },
    { nome: "Gabriel", media: 6 }
];


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

function deleteAlunos(index) {
    const alunosRemovido = alunos.splice(index, 1);
    return alunosRemovido.length > 0 ? alunosRemovido[0] : null;
}

const fs = require('fs');
const path = require('path');

function updateFile(index, nome, media) {
    if (index >= 0 && index < alunos.length) {
        const updateFile = alunos[index];
        updateFile.nome = nome || updateFile.nome;
        updateFile.media = media || updateFile.media;

        //Desafio 0:
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