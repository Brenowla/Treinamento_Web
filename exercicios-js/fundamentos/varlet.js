// Var tem escopo global e de função
var numero = 1
{
    var numero = 2
    console.log('Dentro: ',numero)
}
console.log('Fora: ',numero)

//let tem escopo global, de função e ainda tem de bloco
let numero1 = 1
{
    let numero1 = 2
    console.log('Dentro: ',numero1)
}
console.log('Fora: ',numero1)