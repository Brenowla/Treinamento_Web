//Escopo criado quando a função é declarada.
//Permite a função acessar e manipular variáveis externas.

const x = 'Global'

function fora(){
    const x = 'Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())