import React from 'react'
import BalanceCard from './BalanceCard'
import BalanceContainer from './BalanceContainer'
import TransactionCard from './TransactionCard'
import TransactionsContainer from './TransactionsContainer'

export default function AccountCard(props) {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap'}}>
      <BalanceContainer accessToken={props.accessToken}/>
      <TransactionsContainer accessToken={props.accessToken}/>
    </div>
  )
}
