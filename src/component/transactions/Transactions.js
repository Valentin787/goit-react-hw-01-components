import TransactionsList from "./TransactionsList";
import PropTypes from "prop-types";
import s from "./Transactions.module.css";

export default function Transactions({ data }) {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.transactionHead}>
        <tr>
          <th className={s.transactionElement}>Type</th>
          <th className={s.transactionElement}>Amount</th>
          <th className={s.transactionElement}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.transactionList}>
            <TransactionsList amount={amount} currency={currency} type={type} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ).isRequired,
};
