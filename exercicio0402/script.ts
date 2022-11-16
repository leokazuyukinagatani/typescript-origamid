async function fetchVendas() {
  const response = await fetch("https://api.origamid.dev/json/vendas.json");
  const data = await response.json();
  somarVendas(data);
}

fetchVendas();

interface IProdutoDetalhes {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, IProdutoDetalhes];

function somarVendas(vendas: Venda[]) {
  // let total = 0;
  // for (let i = 0; i < vendas.length; i++) {
  //   total += vendas[i][1];
  // }
  const total2 = vendas.reduce((anterior,atual) => {
    return anterior + atual[1]
  },0)

  document.body.innerHTML += `
  <p>Total: ${total2}</p>
  `;

 

}

const arr = [3, 10, 8, 15, 20];

const somar = arr.reduce((anterior, atual) => {
  return anterior + atual
}, 0)

console.log(somar)