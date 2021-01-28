//Fução sem retorno
function imprimirSoma(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)
imprimirSoma(2,3,2,4,75,8)

//Funcao com retorno
function soma(a,b=0){
    return a+b
}

console.log(soma(2,3))
console.log(soma(2))

// Armazenando função variável

const ImpSoma = function(a,b){
    console.log(a+b)
}

ImpSoma(2,3)

//Armazenando uma funcao arrow em uma variavel
const som = (a,b) => {
    return a+b
}

console.log(som(2,3))

//retorno implicito
const sub = (a,b) => a-b

console.log(sub(2,3))