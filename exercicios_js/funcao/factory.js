// Factory

function criarPessoa(nome,sobrenome){
    return{
        nome,
        sobrenome
    }
}

console.log(criarPessoa('Ana','Julia'))