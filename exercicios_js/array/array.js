let aprovados = new Array('Bia','Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
console.log(aprovados)
console.log(aprovados[0])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados)

aprovados = ['Bia','Carlos','Ana']
aprovados.splice(1,2,'Camilo','Magno')
console.log(aprovados)

const pilotos = ['Vettel','Alonso','Raikkonen','Massa']
pilotos.pop() //Tira último elemento
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Hammilton')
console.log(pilotos)

pilotos.splice(2,0,'Bottas','Massa')
console.log(pilotos)

pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2,4)
console.log(algunsPilotos1)