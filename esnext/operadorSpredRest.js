// usando spread com objeto
const funcionario = { nome: 'maria', salario: 12222 };
const clone = { ativo: true, ...funcionario }
console.log(clone)

//usando spread com array
const grupoA = ['joao', 'pedro', 'gloria']
const grupoFinal = ['maria', ...grupoA, 'rafaela']
console.log(grupoFinal)
