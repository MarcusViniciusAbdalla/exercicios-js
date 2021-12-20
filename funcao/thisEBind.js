const alguem = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)
    }
}

alguem.falar()

const falarDeAlguem = alguem.falar.bind(alguem)
falarDeAlguem()

const falar2 = alguem.falar
falar2()

