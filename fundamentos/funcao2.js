// Armazenando a função em uma váriavel
const imprimirSoma = function (a , b) {
    console.log(a + b);
}

imprimirSoma(2 , 3);

// Armazenando uma função Arrow em uma variável
const soma = (a , b) => {
    return(a + b);
}

console.log(soma(2 , 3));

//retorno implícito
const sub = (a , b) => a - b;
console.log(sub(2 , 3));

const imprimir2 = (a) => console.log(a);
console.log("Muito Legal!");




