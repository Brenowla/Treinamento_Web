let dobro = function(a){
    return 2*a
}

dobro = (a)=>{
    return 2*a
}

dobro = a => 2*a //return implicito

console.log(dobro(2.3))

ola = () => 'Olá'
console.log(ola())

// this é fixo

function Pessoa(){
    this.idade = 0

    setInterval(()=>{
        this.idade++
        console.log(this.idade)
    },1000)
}

new Pessoa

