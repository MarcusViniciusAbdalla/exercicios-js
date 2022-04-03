const students = [
    {nome: 'João' , note: 7.3 , scholarshipHolder: false },
    {nome: 'Maria' , note: 9.2 , scholarshipHolder: true },
    {nome: 'Pedro' , note: 9.8 , scholarshipHolder: false },
    {nome: 'Ana' , note: 8.7 , scholarshipHolder: true }
]
console.log(students.map(a => a.note))


const result = students.map(a => a.note).reduce(function(accumulator, current ) {
    console.log(accumulator , current)
    return accumulator + current
})

console.log (result)

