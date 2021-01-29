const escola = [{
    nome: 'Turma 1',
    alunos: [{
        nome: 'Gustavo',
        nota:8.0
    },{
        nome: 'Ana',
        nota: 9.3
    }]},
    {nome: 'Turma 2',
    alunos: [{
        nome: 'José',
        nota:7.0
    },{
        nome: 'Pedro',
        nota: 6.3
    }]
}]

const getNota = a=>a.nota
const getNotaTurma = t=>t.alunos.map(getNota)

const notas1 = escola.map(getNotaTurma)
console.log(notas1)

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))
}

const notas2 = escola.flatMap(getNotaTurma)
console.log(notas2)