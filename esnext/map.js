const { set } = require("lodash")

const tecnologias = new Map()
tecnologias.set('react',{framework: false})
tecnologias,set('angular',{framework: true})

console.log(tecnologias.get('react'))

const chavesVariadas = new Map