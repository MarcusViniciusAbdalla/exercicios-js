//Função em Javascript é muito dinâmico
//Existem muitas possibilidades

//criar de forma literal
function qualquer(){};

//Armazenar em uma varável
const qualquer1 = function (){};

//Armazenar em um array
const array = [function(c,d) {return c + d }, qualquer , qualquer1];
console.log(array[0](10,10));

//Armazenar em um atributo de objeto
const objeto = {}
objeto.dizer = function () { return 'Olá'} 
console.log(objeto.dizer());

//Passar função como parâmetro
function param (qualquer) {
    qualquer()
}

param(function () {console.log('Executando....')})


//Uma função pode retornar ou conter outra função
function somar (a,b) {
    return function (c) {
        console.log(a + b + c)
    }
}

somar(10 , 10) (5)
const vinteMais = somar(10,10)
vinteMais(5)






