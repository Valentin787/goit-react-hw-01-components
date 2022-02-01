import PropTypes from "prop-types";
import s from "./Transactions.module.css";

export default function TransactionsList({ type, currency, amount }) {
  return (
    <>
      <td className={s.transactionItem}>{type}</td>
      <td className={s.transactionItem}>{amount}</td>
      <td className={s.transactionItem}>{currency}</td>
    </>
  );
}

TransactionsList.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
