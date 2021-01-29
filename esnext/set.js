// não aceita repetição e não indexado

const { set } = require("lodash");

const times = new Set()
times.add('Vasco')
times.add('São Paulo')
times.add('Vasco')
times.add('Flamengo')

console.log(times)