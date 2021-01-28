const pessoa ={
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()

const falarPessoa = pessoa.falar.bind(pessoa)
falarPessoa()

function Pessoa(){
    this.idade = 0
    //const self = this
    setInterval(function(){
        //self.idade++
        this.idade++
        console.log(this.idade)
    }.bind(this),1000)
}

new Pessoa