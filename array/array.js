console.log(typeof Array , typeof new Array , typeof [])

let approved = new Array('Bia' , 'Carlos' , 'Ana')
console.log(approved)

approved = ['Bia' , 'Carlos' , 'Ana']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])

approved[3] = 'Paulo'
console.log(approved[3])
approved.push('Abia')
console.log(approved.length)
console.log(approved)

approved[9] = 'Rafael'
console.log(approved)
console.log(approved.length)
console.log(approved[8] === undefined)
console.log(approved[8] === null)

approved.sort()
console.log(approved)

delete approved[1]
console.log(approved)
console.log(approved[1])
console.log(approved[2])

approved = ['Bia' , 'Carlos' , 'Ana']
approved.splice(1 , 1)
console.log(approved)

approved.splice(1 , 2 , 'Elemento1' , 'Elemento2')
console.log(approved)







