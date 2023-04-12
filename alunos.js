const alunos = [
    { nome: 'Pedro', matricula: '0001', media: 8.5 },
    { nome: 'João', matricula: '0002', media: 7.2 },
    { nome: 'Ana', matricula: '0003', media: 9.0 },
    { nome: 'Maria', matricula: '0004', media: 6.5 },
  ];
  
  function filtrarPorNome(nome) {
    return alunos.filter(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()));
  }
  
  function filtrarPorMedia(mediaMinima) {
    return alunos.filter(aluno => aluno.media >= mediaMinima);
  }
  
  module.exports = { alunos, filtrarPorNome, filtrarPorMedia };
  