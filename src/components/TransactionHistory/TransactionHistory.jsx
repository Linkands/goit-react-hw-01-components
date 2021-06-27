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
        {transactions.map((transaction) => (
          <TransactionTr key={transaction.id}>
            <TransactionTh>{transaction.type}</TransactionTh>
            <TransactionTh>{transaction.amount}</TransactionTh>
            <TransactionTh>{transaction.currency}</TransactionTh>
          </TransactionTr>
        ))}
      </TransactionBody>
    </TransactionTable>
  );
}

export default TransactionHistory;
