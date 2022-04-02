//Object.preventExtensions

const product = Object.preventExtensions({
    nome: 'Celular Samsung' , price: 1999.00 , tag: 'promotion'
})

console.log('Extensible:' , Object.isExtensible(product))

product.nome = 'Rubber'
product.description = 'White school eraser'
delete product.tag
console.log(product)


//Object.seal

const people = {nome: 'Larissa', age: 11 }
Object.seal(people)
console.log('Selado:' , Object.isSealed(people))

people.surname = 'Silva'
delete people.nome
people.age = 35
console.log(people)


//Object.freeze = selado + valores constantes



