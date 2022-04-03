Array.prototype.reduce2 = function(callback) {
    let accumulator = this[0]
    for(let i = 1 ;  i < this.length ; i++) {
        accumulator = callback(accumulator, this[i] , i , this )
    }
    return accumulator
}

const sum = (full , value) => full + value
const number = [1 , 2 , 3 , 4 , 5 , 6]
console.log(number.reduce2(sum))

