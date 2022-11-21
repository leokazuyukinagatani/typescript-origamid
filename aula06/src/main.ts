import { fetchTransactions } from "./fetchData";
import { normalizarTransacao } from "./normalizarTransacao";

async function handleData() {
  const data = await fetchTransactions<ITransactionAPI[]>(
    "https://api.origamid.dev/json/transacoes.json?"
  );
  
  if(!data) return

  const transactions = data.map(normalizarTransacao)
  
  transactions.forEach(item => console.log(item.data.getHours()))
  return transactions;
}

const transactions = await handleData();

console.log(transactions)
