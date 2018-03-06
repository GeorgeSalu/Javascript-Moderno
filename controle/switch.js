const imprimirResultado = function(nota) {
    switch (Math.floor(nota)) {
        case 10: 
            console.log('Quadro de Honra')
        case 9:
            console.log('Quadro de Honra')
        default:
            console.log('Nota Invalida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(2.3)
imprimirResultado(11)