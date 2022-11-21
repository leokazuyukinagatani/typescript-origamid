import { countBy } from "./countBy";

type TransactionValue = ITransaction & { valor: number };
function filterValue(
  transaction: ITransaction
): transaction is TransactionValue {
  return transaction.valor !== null;
}

export class Statistics {
  total: number;
  pagamento;
  status;
  private transactions: ITransaction[];

  constructor(transactions: ITransaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
  }

  private setTotal() {
    return this.transactions.filter(filterValue).reduce((acc, item) => {
      return acc + item.valor;
    }, 0);
  }
  private setPagamento() {
    return countBy(this.transactions.map(({ pagamento }) => pagamento));
  }

  private setStatus() {
    return countBy(this.transactions.map(({ status }) => status));
  }
}
