for(let letra of "codr") {
    console.log(letra)
}

const assuntoEcma = ['map', 'set', 'promise']

for(let i in assuntoEcma) {
    console.log(i)
}

for(let assunto of assuntoEcma) {
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promisse', { abordado: false }]
])

for(let assunto of assuntoMap) {
    console.log(assunto)
}

for(let chave of assuntoMap.keys()) {
    console.log(chave)
}

for(let valor of assuntoMap.values()) {
    console.log(valor)
}