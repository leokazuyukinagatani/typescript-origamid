import { fetchTransactions } from "./fetchData";
import { normalizarTransacao } from "./normalizarTransacao";

async function handleData() {
  const data = await fetchTransactions<ITransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );

  if (!data) return;
  const transactions = data.map(normalizarTransacao);
  fillTable(transactions)
  return transactions;
}

const transactions = await handleData();
console.log(transactions);


function fillTable(transactions: ITransaction[]): void {
  const tabela = document.querySelector('#transactions tbody')
  if(!tabela) return
  
  transactions.forEach((transaction) => {
    tabela.innerHTML += `
    <tr>
      <td>${transaction.nome}</td>
      <td>${transaction.email}</td>
      <td>${transaction.data}</td>
      <td>R$ ${transaction.moeda}</td>
      <td>${transaction.pagamento}</td>
      <td>${transaction.status}</td>
    </tr>`
  })
  // transactions.forEach()
}