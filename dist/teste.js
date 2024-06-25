"use strict";

var alunos = [{
  nome: 'Ana',
  nota: 7.5
}, {
  nome: 'Bruno',
  nota: 5.0
}, {
  nome: 'Carlos',
  nota: 6.0
}, {
  nome: 'Daniela',
  nota: 8.0
}, {
  nome: 'Eduardo',
  nota: 4.5
}, {
  nome: 'Fernanda',
  nota: 9.0
}];
function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);