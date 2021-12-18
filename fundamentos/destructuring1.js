//novo recurso do ES2015

const pessoa = {
    nome: 'Marcus',
    idade: 39,
    endereco:{
        logradouro:'Rua L',
        numero:06
    }
}

const {nome , idade} = pessoa;
console.log(nome , idade);

const {nome: n , idade : i} = pessoa;
console.log(n , i);

const { sobrenome , profissao = true} = pessoa;
console.log(sobrenome , profissao);

const {endereco: {logradouro , numero, cep}} = pessoa;
console.log(logradouro , numero, cep);


