const prod1 = {}
prod1.nome = "Celular Ultra Mega"
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40 //evitar esse uso

console.log(prod1)

const prod2 = {
    nome: "camisa Polo",
    preco: 79.90,
    obj:{
        id: 123
    }
}
console.log(prod2)

//Json
//'{"nome": "camisa Polo","preco": 79.90}'