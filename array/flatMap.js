const escola = [{
    nome: 'Turma m1',
    alunos : [{
        nome: 'gustavo',
        nota: 8.1
    },{
        nome: 'Ana',
        nota: 9.3
    }]
},{
    nome: 'Turma m2',
    alunos: [{
        nome: 'rebeca',
        nota: 9.8
    },{
        nome: 'roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotaDaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotaDaTurma)
console.log(notas2)