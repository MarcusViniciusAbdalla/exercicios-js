const students = [
    {nome: 'João' , note: 7.3 , scholarshipHolder: false },
    {nome: 'Maria' , note: 9.2 , scholarshipHolder: true },
    {nome: 'Pedro' , note: 9.8 , scholarshipHolder: false },
    {nome: 'Ana' , note: 8.7 , scholarshipHolder: true }
]

// Todos os alunes são bolsistas?

const allScholarshipHolders = (result , scholarshipHolder) => result && scholarshipHolder
console.log(students.map(a => a.scholarshipHolder).reduce(allScholarshipHolders))


// Algum dos alunos é bolsista?
const someScholarshipHolders = (result , scholarshipHolder) => result || scholarshipHolder
console.log(students.map(a => a.scholarshipHolder).reduce(someScholarshipHolders))