const school = [{
    nome: 'Turma M1',
    students: [{
        nome: 'Gustavo',
        note: 8.1
    },{
        nome: 'Ana',
        note: 9.3
    }]
}, {
    nome: 'Turma M2',
    students: [{
        nome: 'Rebeca',
        note:8.9
    }, {
        nome: 'Roberto',
        note: 7.3
    }]
}]

const getNoteStudent = student => student.note
const getNoteTurma = turma => turma.students.map(getNoteStudent)

const notes1 = school.map(getNoteTurma)
console.log(notes1)