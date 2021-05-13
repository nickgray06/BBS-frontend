import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from '../contexts/AuthContext'
import TransactionCard from "./TransactionCard";
import Chart from "./Chart";


export default function TransactionsContainer(props) {

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

  // const displayTransactions = () => transactions.map(transaction => {
  //   return <Chart key={transaction.transaction_id} transaction={transaction} />
  // })

  return (
    <div style={{padding: '60px'}} > 
        <TransactionCard transactions={transactions} />
        <Chart transactions={transactions} />
    </div>
  );
}
