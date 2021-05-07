import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from '../contexts/AuthContext'

export default function TransactionsContainer(props) {
  const { currentUser } = useAuth()
  console.log(currentUser.uid)
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    if (!props.accessToken) {
      return;
    }
    const accessToken = props.accessToken;
    async function iWantTransactions() {
      let res = await axios.post("http://localhost:8080/transactions", {
        accessToken: accessToken,
      });
      console.log(res);
      let transactions = res.data.transactions;
      setTransactions(transactions);
      console.log(transactions);
    }
    iWantTransactions();
  }, [props.accessToken]);

  return (
    <div>
      <h1>This is Transactions!</h1>
      {transactions.map((transaction) => {
        return (
          <div key={transaction.transaction_id}>
            <p>{transaction.name}</p>
            <p>{transaction.amount}</p>
            <p>{transaction.date}</p>
          </div>
        );
      })}
    </div>
  );
}
