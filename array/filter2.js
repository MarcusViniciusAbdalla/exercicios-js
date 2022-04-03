Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i= 0 ; i < this.length ; i++) {
        if (callback(this[i] , i , this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const products = [
    {nome: 'Notebook' , price: 2499 , fragile: true},   
    {nome: 'IPad Pro' , price: 4199 , fragile: true},   
    {nome: 'Glass Cup' , price: 12.49 , fragile: true},   
    {nome: 'Plastic Cup' , price: 18.99 , fragile: false}   
]

const dear = product => product.price >= 500
const fragile = product => product.fragile

console.log(products.filter2(dear).filter2(fragile))