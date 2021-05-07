import React, { useState, useEffect } from "react";
import axios from 'axios';

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
      console.log(res);
      let accounts = res.data.accounts;
      setAccounts(accounts);
      console.log(accounts);
    }
    iWantBalances();
  }, [props.accessToken]);

  return (
    <div>
      <h1>This is Balances!</h1>
      {accounts.map(account => {
        return <div>
          <p>{account.name}</p>
          <p>{account.balances.current}</p>
        </div>
      })}
    </div>
  )
}
