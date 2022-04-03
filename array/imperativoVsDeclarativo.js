const students = [
    {nome: 'João' , note: 7.9 },
    {nome: 'Maria' , note: 9.2 }
]

// Imperativo
let total1 = 0
for (let i = 0 ; i < students.length; i++ ) {
    total1 += students[i].note
}
console.log(total1 / students.length)

//Declarativo
const getNote = student => student.note
const sum = (total , atual ) => total + atual
const total2 = students.map(getNote).reduce(sum)
console.log (total2 / students.length)