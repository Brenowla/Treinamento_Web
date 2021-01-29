const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response=> {
    const funcionarios = response.data
    //console.log(funcionarios)

    const mulher = p=>p.genero=='F'
    const chinesa = p=>p.pais=='China'
    const menorSalario = (func,funcAtual)=>{
        return func.salario<funcAtual.salario ? func:funcAtual
    }

    let mulheres_chinesas = funcionarios.filter(mulher).filter(chinesa).reduce(menorSalario)
    console.log(mulheres_chinesas)
})


