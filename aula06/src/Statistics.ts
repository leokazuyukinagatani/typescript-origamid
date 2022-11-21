import { countBy } from "./countBy";

type TransactionValue = ITransaction & { valor: number };
function filterValue(
  transaction: ITransaction
): transaction is TransactionValue {
  return transaction.valor !== null;
}

export class Statistics {
  total;
  pagamento;
  status;
  semana;
  melhorDia
  private transactions;

  constructor(transactions: ITransaction[]) {
    this.transactions = transactions;
    this.total = this.setTotal();
    this.pagamento = this.setPagamento();
    this.status = this.setStatus();
    this.semana = this.setSemana();
    this.melhorDia = this.setMelhorDia();
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

  private setSemana() {
    const semana = {
      ['Domingo']: 0,
      ['Segunda']: 0,
      ['Terça']: 0,
      ['Quarta']: 0,
      ['Quinta']: 0,
      ['Sexta']: 0,
      ['Sábado']: 0,
    };
    for (let index = 0; index < this.transactions.length; index++) {
      const day = this.transactions[index].data.getDay();
      if (day === 0) semana['Domingo']++;
      else if (day === 1) semana['Segunda']++;
      else if (day === 2) semana['Terça']++;
      else if (day === 3) semana['Quarta']++;
      else if (day === 4) semana['Quinta']++;
      else if (day === 5) semana['Sexta']++;
      else if (day === 6) semana['Sábado']++;
    }
    
    return semana;
  }

  private setMelhorDia() {
   return( Object.entries(this.semana).sort((a, b) => {
    /* b[1] - a[1] decrescente | a[1] - b[1] crescente */
    return b[1] - a[1]
  }))[0]
  }


}
