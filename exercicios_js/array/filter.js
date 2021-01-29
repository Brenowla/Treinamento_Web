const produtos = [
    {nome:'Note', preco: 2499, fragil:true},
    {nome:'Teclado', preco: 250, fragil:true},
    {nome:'Mouse', preco: 150, fragil:false},
    {nome:'Placa Mae', preco: 249, fragil:false},
    {nome:'Processador', preco: 180, fragil:true}
]

console.log(produtos.filter(function(p){
    return p.preco>200 && p.fragil
}))