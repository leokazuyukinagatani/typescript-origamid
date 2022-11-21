import { coinToNumber } from "./coinToNumber";
import { stringToDate } from "./stringToDate";

declare global {
  type TransactionPayment = "Boleto" | "Cartão de Crédito";
  type TransactionStatus =
    | "Paga"
    | "Recusada pela operadora de cartão"
    | "Aguardando pagamento"
    | "Estornada";

  interface ITransactionAPI {
    Nome: string;
    ID: number;
    Data: string;
    Status: TransactionStatus;
    Email: string;
    ["Valor (R$)"]: string;
    ["Cliente Novo"]: number;
    ["Forma de Pagamento"]: TransactionPayment;
  }

  interface ITransaction {
    nome: string
    id: number
    data: Date
    status: TransactionStatus
    email: string
    moeda: string
    valor: number | null
    pagamento: TransactionPayment
    novo: boolean
  }
}
export function normalizarTransacao(transaction:ITransactionAPI):ITransaction {
  return {
    nome: transaction.Nome,
    id: transaction.ID,
    data: stringToDate(transaction.Data),
    status: transaction.Status,
    email: transaction.Email,
    moeda: transaction["Valor (R$)"],
    valor: coinToNumber(transaction["Valor (R$)"]),
    pagamento: transaction["Forma de Pagamento"],
    novo: Boolean(transaction["Cliente Novo"])
  };
}
