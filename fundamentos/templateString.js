const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

console.log(concatenacao);

const template = `
    Olá
    ${nome}!`

console.log(concatenacao , template);

//expressoes...
console.log(`1 + 1 = ${1 + 1 }`);

console.log(`2 + 2 = ${2 + 2 }`);

const up = texto => texto.toUpperCase();
console.log(`Ei.... ${up('cuidado')}!`);
