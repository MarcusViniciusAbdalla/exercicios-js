const number = [1, 2, 3, 4, 5]

// map is a for with purpose

let result = number.map(function(e) {
    return e * 2
})

console.log(result)

const sum10 = e => e + 10
const triple = e => e * 3
const forMoney = e => `R$ ${parseFloat(e).toFixed(2).replace('.' , ',') }` 

result = number.map(sum10).map(triple).map(forMoney)
console.log(result)