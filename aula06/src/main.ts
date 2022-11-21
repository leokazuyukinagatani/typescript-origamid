import { CountList } from "./countBy";
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
  fillStatistics(transactions);
}

function fillList(lista: CountList, containerId: string): void {
  const containerElement = document.getElementById(containerId);
  if (containerElement) {
    Object.keys(lista).forEach((key) => {
      containerElement.innerHTML += `<p>${key}: ${lista[key]} </p>`;
    });
  }
}

function fillStatistics(transactions: ITransaction[]): void {
  const data = new Statistics(transactions);

  fillList(data.pagamento, "pagamento");
  fillList(data.status, "status");

  const totalElement = document.querySelector<HTMLElement>("#total span");
  if (!totalElement) return;
  totalElement.innerText += data.total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  const diaElement = document.querySelector<HTMLElement>("#dia span");
  if (!diaElement) return;
  diaElement.innerText = data.melhorDia[0]

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
}

handleData();
