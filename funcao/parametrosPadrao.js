//Algumas estratégias de gerar valores padrões

function somar (a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log(somar(), somar(3), somar(1 , 2 , 3), somar(0))

// Outras estratégias para gerar valores padrões

function somar1(a, b , c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b :1
    c = isNaN(c) ? 1 : c
    return a + b + c 
}

console.log(somar1(), somar1(3), somar1(1 , 2 , 3), somar1(0 ,0 , 0))

// Valor padrão ES2015

function somar2( a = 1 , b = 2, c = 3){
    return a + b + c
}

console.log(somar1(), somar1(3), somar1(1 , 2 , 3), somar1(0 ,0 , 0))
