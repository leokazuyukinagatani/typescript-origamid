import { fetchTransactions } from "./fetchData";
import { normalizarTransacao } from "./normalizarTransacao";
import { Statistics } from "./Statistics";

async function handleData() {
  const data = await fetchTransactions<ITransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );

  if (!data) return;
  const transactions = data.map(normalizarTransacao);
  fillTable(transactions);
  return transactions;
}

function fillStatistics(transactions: ITransaction[]): void {
  const data = new Statistics(transactions);
  console.log(data.total);
  const tabela = document.querySelector("#statistics tbody");

  if (!tabela) return;
  tabela.innerHTML += `
  <tr>
    <td>${data.total.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}
    </td>
    <td>
      
    </td>
  </tr>
  `;
}

function fillTable(transactions: ITransaction[]): void {
  const tabela = document.querySelector("#transactions tbody");
  if (!tabela) return;

  transactions.forEach((transaction) => {
    tabela.innerHTML += `
    <tr>
      <td>${transaction.nome}</td>
      <td>${transaction.email}</td>
      <td>${transaction.data}</td>
      <td>R$ ${transaction.moeda}</td>
      <td>${transaction.pagamento}</td>
      <td>${transaction.status}</td>
    </tr>`;
  });
  // transactions.forEach()
}

const transactions = await handleData();
console.log(transactions);
if (transactions) fillStatistics(transactions);
