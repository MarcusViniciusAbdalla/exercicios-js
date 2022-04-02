class launch {
    constructor(nome = 'Generic' , value = 0 ) {
        this.nome = nome
        this.value = value
    }
}

class financialCycle {
    constructor(month , year) {
        this.month = month
        this.year = year
        this.launches = []
    }

    addLaunches(...launches) {
        launches.forEach(l => this.launches.push(l))
    }

    summary() {
        let consolidatedValue = 0
        this.launches.forEach(l =>{
            consolidatedValue += l.value
        })
        return consolidatedValue
    }
}

const salary = new launch('Salary' , 45000 )
const lightAccount = new launch('Light' , -220)

const accounts = new financialCycle(6 , 2018)
accounts.addLaunches(salary,lightAccount)
console.log(accounts.summary())

