const pilots = ['Vettel' , 'Alonso' , 'Raikkonen' , 'Massa']
pilots.pop() // Removes the last element
console.log(pilots)

pilots.push('Versappen') // Adds an element at the last position
console.log(pilots)

pilots.shift() //Removes the first element
console.log(pilots)

pilots.unshift('Hamilton') // Adds an element at the first position
console.log(pilots)

// Splice can add and remove elements

//add
pilots.splice(2, 0 , 'Bottas' , 'Massa')
console.log(pilots)

// removes
pilots.splice(3, 1) // Removes Massa again
console.log(pilots)

const pilots1 = pilots.slice(2) //Returns a new array from the given index
console.log(pilots1)

const pilots2 = pilots.slice(1 , 4) 
console.log(pilots2)







