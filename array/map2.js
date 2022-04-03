const cart = [
    '{"nome": "Borracha" , "preco": 3.45 }',
    '{"nome": "Caderno" , "preco": 13.90 }',
    '{"nome": "Kit de Lapis" , "preco": 41.22 }',
    '{"nome": "Caneta" , "preco": 7.50 }',
]

// Retornar um array apenas com os preços

const forObjetc = json => JSON.parse(json)
const priceOnly = product => product.preco

const result = cart.map(forObjetc).map(priceOnly)
console.log(result)
