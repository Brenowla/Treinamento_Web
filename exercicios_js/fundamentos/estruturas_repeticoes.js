function getInteiroAleatorio(min,max){
    const valor = Math.random() * (max-min) + min
    return Math.floor(valor)
}

let opcao = 0

while(opcao != -1){
    opcao = getInteiroAleatorio(-1,10)
    console.log('Escolhido ',opcao)
}
console.log('saiu')

// for

for(let i=1; i<=10;i++){
    console.log('i',i)
}

// for/in

const notas = [6.7,7.4,9.8,8.1,7.7]

for (i in notas){
    if(notas[i]==7.4){
        continue
    }
    console.log(i, notas[i])
}