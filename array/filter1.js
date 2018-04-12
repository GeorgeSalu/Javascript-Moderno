const produtos = [
    { nome: 'Notebook', preco: 224, fragil: true},
    { nome: 'IPad Pro', preco: 1224, fragil: true},
    { nome: 'Copo de vidro', preco: 12.24, fragil: true},
    { nome: 'Copo de plastico', preco: 18.24, fragil: false}
]

console.log(produtos.filter(function(p) {
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))