const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.3, bolsista: true},
    {nome: 'Pedro', nota: 5.1, bolsista: true},
    {nome: 'Ana', nota: 4.6, bolsista: false}
]

const resultados = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
})

console.log(resultados)