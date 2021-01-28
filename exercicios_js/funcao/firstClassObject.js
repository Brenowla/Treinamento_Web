//literal
function fun1(){}
//armazenar numa variável
const fun2 = function(){}
//armazenar em array
const array = [function(a,b){return a+b},fun2,fun2]
console.log(array[0](2,3))

//atributo de um objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log(obj.falar())

//Passar função como parametro
function run(fun){
    fun()
}

run(function(){console.log('Executando')})

//Retornar e conter outra
function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)

//parametro variaveis

function som(){
    let soma = 0
    for (i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(som(1,2,3,4,5,6))

//Parâmetro padrao
function soma1(a,b=1,c=1){
    return a+b+c
}

console.log(soma1(0))