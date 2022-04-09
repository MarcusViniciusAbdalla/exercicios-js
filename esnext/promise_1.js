let a = 1
console.log(a)

let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3)
})

console.log(typeof p)

p.then(function(valor) {
    console.log(valor)
})


let b = new Promise(function(novaPromessa) {
    novaPromessa(['Ana' , 'Bia' , 'Carlos' , 'Daniel'])
})

console.log(typeof b)

b
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))