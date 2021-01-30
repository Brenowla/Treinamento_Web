function gerarNumerosEntre(min,max) {
    if(min > max){
        [min,max] = [max,min]
    }

    return new Promise(resolve => {
        const aleatorio = parseInt(Math.random() * (max-min+1)) + min
        resolve(aleatorio)
    })
}
gerarNumerosEntre(10,30)
    .then(num=>num*10)
    .then(num=>`O número gerado foi ${num}`)
    .then(console.log)