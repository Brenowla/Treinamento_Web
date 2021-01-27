// recurso novo ES2015

const pessoa = {
    nome:'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const {nome,idade} = pessoa
console.log(nome, idade)

const {nome: n,idade: i} = pessoa
console.log(n, i)

const {sobrenome} = pessoa
console.log(sobrenome)
const {sobrenome:s = true} = pessoa
console.log(s)

//Array

const [a] = [10]
console.log(a)

const[n1, ,n3] = [1,2,3]
console.log(n1,n3)

//funcao
function rand({min=0, max=1000}){
    const valor = Math.random()*(max-min) +min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))