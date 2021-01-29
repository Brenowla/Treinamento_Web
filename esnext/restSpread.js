// rest(juntar)  e spread (espalhar)

//spread objeto
const funcionario = {
    nome: 'Maria',
    salario: 12348.99
}

const clone = {
    ativo: true, 
    ...funcionario
}
console.log(clone)

//spread array

const grupoA = ['João','Pedro','Gloria']
const grupoFinal = ['Maria',...grupoA,'Rafaela']

console.log(grupoFinal)