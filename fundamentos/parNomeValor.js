//par nome/valor
const saudacao = "Opa"; //contexto léxico 1

function exec (){
    const saudacao = 'Falaaaa' //contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Marcus',
    idade: 39,
    peso: 90,
    endereco: {
        logradouro: ' Rua L n 06',
        bairro: ' Vila Bela'
    }
}

console.log(saudacao);
console.log(exec());
console.log(cliente);
