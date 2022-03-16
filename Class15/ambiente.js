let num = [5, 8 , 2, 9, 3]
num[3] = 6 // adiciona item a posição 2 (0 1 2 ) sobrepondo
num.push(7)  // adiciona item ao final da array
num.sort() // organiza os itens em ordem crescente
let tam = num.length // retorna o tamanho da array

console.log(`Nossa Array é o  ${num} com o tamanho ${tam}`)
console.log("---------------------")
console.log('Valores do Vetor em linhas:')

for (let pos = 0; pos < tam; pos++) {
    console.log(`Posição ${pos} - Valor -> ${num[pos]}`)
}
console.log("---------------------")

//"for let in" para as ultimas versões do ecmascript, funciona em Array
for (let pos in num) { //para cada posição no array num, faz:
    console.log(`${pos} -> ${num[pos]}`)
}