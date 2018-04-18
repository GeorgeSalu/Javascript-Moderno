const fs = require('fs')

const produto = {
    nome: 'celular',
    preco: 12222,
    desconto: 0.16
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo')
})