import React, { useState, useEffect } from "react";
import axios from 'axios';
import BalanceCard from "./BalanceCard";
import Totals from "./Totals";

export default function BalanceContainer(props) {

  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    if (!props.accessToken) {
      return;
    }
    const accessToken = props.accessToken;
    async function iWantBalances() {
      let res = await axios.post("http://localhost:8080/balances", {
        accessToken: accessToken,
      });
      let accounts = res.data.accounts;
      setAccounts(accounts);
    }
    iWantBalances();
  }, [props.accessToken]);

 

  return (
    <div style={{padding: '50px'}}>
      <Totals accounts={accounts}/>
      <BalanceCard accounts={accounts}/>
    </div>
  )
}
