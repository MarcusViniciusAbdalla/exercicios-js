function quadrado(largura, altura){
    const quadrado = largura * altura
    if (quadrado > 20){
        console.log(`Valor Acima do Permitido: ${quadrado}m2.`)
    } else{
        return quadrado
    }
}

console.log(quadrado(4,4))
console.log(quadrado(5,5))
console.log(quadrado(5))
console.log(quadrado(5, 3 , 22 ,14 ))
console.log(quadrado())



