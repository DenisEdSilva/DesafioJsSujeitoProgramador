let produtos = ['Computador', 'Telefone', 'Mouse', 'Teclado']

console.log(`Lista dos produtos: ${produtos}`)
console.log(`Tempos ${produtos.length} produtos`)
// removendo Mouse
for (i in produtos) {
  if (produtos[i] == 'Mouse') {
    produtos.splice(i, 1)
  }
}
console.log(produtos)

for (p in produtos) {
  if ( produtos[p] === 'Computador' ) {
    console.log(`Existe ${produtos[p]} na lista`)
  } else {
    console.log(`Não existe ${produtos[p]} na lista`)
  }
}
produtos.splice(1,1)
console.log(produtos)
