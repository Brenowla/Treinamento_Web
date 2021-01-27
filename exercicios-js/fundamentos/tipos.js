//Number
console.log('Number')
const peso1 = 1.0
const peso2 = Number('2.5')

console.log(peso1,peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1=9.871
const avaliacao2=6.871

const total = avaliacao1*peso1+avaliacao2*peso2

console.log(total.toFixed(2))
console.log(total.toString())
console.log(total.toString(2)) //em binário

console.log(7/0)
console.log("10"/2)
console.log(0.1+0.7)
console.log((10).toString())

//Math
console.log('\nMath')
const raio = 5.6
const area = Math.PI*Math.pow(raio,2)

console.log(area)

//String
console.log('\nString')
const escola = "UFOP"
console.log(escola.charAt(2))
console.log(escola.charCodeAt(2))
console.log(escola.indexOf('U'))
console.log(escola.substring(1,3))

console.log(escola.concat(" - Universidade Federal de Ouro Preto"))
console.log(escola.replace('O','e'))
console.log('Ana,Maria,Pedro'.split(','))

//Template String
console.log('\nTemplate String')
const nome = 'Rebeca'
const concatenacao = 'Ola '+nome+'!'
const template = `
                  Olá
                  ${nome}!`
console.log(concatenacao,template)

console.log(`1+1 = ${1+1}`)

const up = s => s.toUpperCase()

console.log(`Ei...${up('cuidado')}!`)

//Boolean
console.log('\nBoolean')
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo)

let name = 'Lucas'
console.log(name || 'Desconhecido')
name = ""
console.log(name || 'Desconhecido')

//Array
console.log('\nArray')
const valores = [7.7,8.8,6.3,6.8]
console.log(valores[0],valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)

valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push('Array','Array2')
console.log(valores)

valores.pop()
console.log(valores)

delete valores[0]
console.log(valores)