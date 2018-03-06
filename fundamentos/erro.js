function tratarErroELancar(erro) {
    throw new Error('......')
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!')
    } catch(e) {
        tratarErroELancar()
    } finally {
        console.log('final')
    }
}

const obj = {nome : 'Roberto'}
imprimirNomeGritado(obj)