Array.prototype.map2 = function(callback) {
    const newArray = []
    for(let i = 0;i < this.length;i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"Borracha", "preco":3.4}',
    '{"nome":"`Caderno`", "preco":13}',
    '{"nome":"Kit de Lapis", "preco":41.22}',
    '{"nome":"Caderneta", "preco":7}'
]

// retornar um array apenas com os precos

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)