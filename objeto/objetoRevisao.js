// Coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.nome
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo:'A4',
    valor: 89.000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 20,
            bairro: 'Barro Preto'
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    },{
        nome:'Ana',
        idade:42
    }],
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)
