const approved = ['Agatha' , 'Aldo' , 'Daniel' , 'Raquel' ]

approved.forEach(function(nome , indice){
    console.log(`${indice + 1} ${nome}`)
})

approved.forEach(nome => console.log(nome))

const showApproved = approveds => console.log(approveds)
approved.forEach(showApproved)


// the foreach callback function receives three parameters which are:
//name
//index
//array

