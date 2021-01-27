const nota = 6
if(nota>=7){
    console.log('Aprovado')
}else{
    console.log('Reprovado')
}

if(nota>=7){
    console.log('Aprovado')
}else if(nota>=5){
    console.log('Recuperação')
}else{
    console.log('Reprovado')
}

switch(Math.floor(nota)){
    case 10:
    case 9:
    case 8:
    case 7:
        console.log('Aprovado')
        break
    case 6:
    case 5:
    case 4:
        console.log('Recuperação')
        break
    case 3:
    case 2:
    case 1:
        console.log('Reprovado')
}