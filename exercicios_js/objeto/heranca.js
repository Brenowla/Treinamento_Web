const avo = {attr1: 'A'}
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(filho.attr1, filho.attr2)

console.log(Object.keys(filho))

for(let key in filho){
    console.log(key)
    filho.hasOwnProperty(key) ? console.log("Dele") : console.log("veio por herança")
}