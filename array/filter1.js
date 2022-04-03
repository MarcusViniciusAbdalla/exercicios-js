const products = [
    {nome: 'Notebook' , price: 2499 , fragile: true},   
    {nome: 'IPad Pro' , price: 4199 , fragile: true},   
    {nome: 'Glass Cup' , price: 12.49 , fragile: true},   
    {nome: 'Plastic Cup' , price: 18.99 , fragile: false}   
]

console.log(products.filter(function(p) {
    return false
}))

const dear = product => product.price >= 500
const fragile = product => product.fragile

console.log(products.filter(dear).filter(fragile))

