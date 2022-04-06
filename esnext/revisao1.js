//let e const
{
    var a = 2
    let b = 3
}

console.log(a)
//console.log(b) // não é mostrado no console porque o let tem escopo de bloco.

{
    var a = 2
    let b = 3
    console.log(b) // para imprimir teria que estar aqui;
}

console.log(a)

//Template String
const produto = 'IPad'
console.log(`${produto} é caro!`)

// Destruturing
const [l, e, ...tras] = "Marcus"
console.log(l , e , tras)

const [x , y] = [1 , 2]
console.log(x , y)

const [m, , n] = [4 , 5 , 6]
console.log(m , n)

const {idade , nome} = {nome: 'Ana', idade: 10}
console.log(idade , nome)

