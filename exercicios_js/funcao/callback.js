const fabricantes = ["Mercedes","Audi","BMW"]

function imprimir(nome, indice){
    console.log(`${indice+1}. ${nome}`)
}

fabricantes.forEach(imprimir)

//Exemplo callback browser

document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('O evento ocorreu!')
}