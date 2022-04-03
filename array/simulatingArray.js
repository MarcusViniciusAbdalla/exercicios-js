const nearArray = {0: 'Rafael' , 1: 'Ana' , 2: 'Bia'}
console.log(nearArray)
Object.defineProperty(nearArray, 'toString',{
    value: function() {return Object.values(this) },
    enumerable: false
})

console.log(nearArray[0])

const myArray = ['Rafael' , 'Ana' , 'Bia']
console.log(nearArray.toString() , myArray)

