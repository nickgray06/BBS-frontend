import React from 'react'
import '../App.css'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export default function Totals({accounts}) {

  const liquidTotal = accounts[0] ? formatter.format((accounts[0].balances.current) + (accounts[1].balances.current) + (accounts[4].balances.current)) : []
  const investTotal = accounts[0] ? formatter.format((accounts[2].balances.current) + (accounts[6].balances.current) + (accounts[7].balances.current)) : []
  const debtTotal = accounts[0] ? formatter.format((accounts[3].balances.current) + (accounts[8].balances.current)) : []
  const netWorth = accounts[0] ? formatter.format(((accounts[0].balances.current) + (accounts[1].balances.current) + (accounts[4].balances.current)) + ((accounts[2].balances.current) + (accounts[6].balances.current) + (accounts[7].balances.current)) - ((accounts[3].balances.current) + (accounts[8].balances.current))) : []
  
  console.log(netWorth)
  return (
    <div style={{paddingBottom: '50px'}}>
      <h3 className="totals">Net Worth: <br/> {netWorth}</h3>
      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around',}}>
      <h3 className="totals">Liquid: <br style={{color: 'aquamarine', textAlign: 'center'}}/>{liquidTotal}</h3> 
      <h3 className="totals">Debt: <br/> {debtTotal}</h3>
      </div>
      <h3 className="totals">Investments: <br/> {investTotal}</h3>
    </div>
  )
}
