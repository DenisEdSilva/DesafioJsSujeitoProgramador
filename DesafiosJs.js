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
produtos.splice(1,1);
console.log(produtos);

let num = [1,3,5,7,0,9];

console.log(num.sort());
num.shift();
console.log(num);
console.log(num.reverse());

let hoje = '29/03/2022';

const [novoDia, novoMes, novoAno] = hoje.split('/')

console.log(`Estamos no dia: ${novoDia}`)
console.log(`No mês: ${novoMes}`)
console.log(`Do ano: ${novoAno}`)


// Bonus pois interpretei errado a parte da data, achei q era pra fazer isso :p
let data = new Date();
console.log(data)

const dia = data.getDate();
console.log(`hoje é dia ${dia}`)

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
const mes = data.getMonth();

for (m in meses) {
  if (m == mes)
  var nomeMes = meses[m]
}

console.log(`Nós estamos no mês de ${nomeMes}`)

const ano = data.getFullYear();
console.log(`E estamos no ano de ${ano}`)
