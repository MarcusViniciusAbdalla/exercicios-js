function somar () {
    let somar = 0
    for (i in arguments) {
        somar += arguments [i]
    } 
    return somar
}

console.log(somar());
console.log(somar(1));
console.log(somar(1.5 , 2.5 , 3.5));
console.log(somar(1.5 , 2.5 , 'Teste'));
console.log(somar('a' , 'b' , 'c'));

