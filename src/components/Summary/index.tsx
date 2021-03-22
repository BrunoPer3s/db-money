import { useTransactions } from '../../hooks/useTransactions';
import { formatCurrency } from '../../utils/formatValues';

import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary () {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit') {
      acc.deposits += transaction.amount
    } else {
      acc.withdraws -= transaction.amount
    }

    acc.total = acc.deposits + acc.withdraws;

    return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  });
  
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas"/>
        </header>
        <strong>{formatCurrency(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas"/>
        </header>
        <strong>{formatCurrency(summary.withdraws)}</strong>
      </div>
      <div className="total-card">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="total"/>
        </header>
        <strong>{formatCurrency(summary.total)}</strong>
      </div>
    </Container>
  );
}