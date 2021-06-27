import React from "react";
import transactions from "../../data/transactions.json";
import { randomBgColor } from "../../utils/randomBgColor";
import {
  TransactionTable,
  TransactionHead,
  TransactionTr,
  TransactionTh,
  TransactionBody,
} from "./TransactionHistory.styles";
import PropTypes from "prop-types";

function TransactionHistory() {
  return (
    <TransactionTable>
      <TransactionHead>
        <TransactionTr style={{ backgroundColor: randomBgColor() }}>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </TransactionTr>
      </TransactionHead>
      <TransactionBody>
        {transactions.map(({ id, type, amount, currency }) => (
          <TransactionTr key={id}>
            <TransactionTh>{type}</TransactionTh>
            <TransactionTh>{amount}</TransactionTh>
            <TransactionTh>{currency}</TransactionTh>
          </TransactionTr>
        ))}
      </TransactionBody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.node,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
