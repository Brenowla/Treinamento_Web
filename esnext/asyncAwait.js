const http = require('http')
const { get } = require('lodash')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve,reject)=>{
        http.get(url, res => {
            let resultado = ''
    
            res.on('data',dados=> {
                resultado += dados
            })
        
            res.on('end',() =>{
                try{
                    resolve(JSON.parse(resultado))
                }catch(e){
                    reject(e)
                }
            })
        })
    })
}

// Recurso ES8
//Simplificar uso do Promisse
let ObterAlunos = async () => {
    const ta = await getTurma('A')
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat[ta,tb,tc]
}//retorna um objeto async function

ObterAlunos()
    .then(alunos=>alunos.map(a=>a.nome))
    .then(nomes=>console.log(nomes))
    .catch(e => console.log(e))