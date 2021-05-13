import React, {useState} from 'react'
import {Bar} from 'react-chartjs-2'

export default function Chart({transactions}) {

  const mayTrans = transactions[0] ? transactions.filter(transaction => {
    if(transaction.date.slice(0, 7) === "2021-05"){
      return transaction.amount
    }}) : []
  const mayTotal = mayTrans[0] ? mayTrans.map(total => total.amount).reduce((sum, ta) => sum + ta) : []

  const aprilTrans = transactions[0] ? transactions.filter(transaction => {
    if(transaction.date.slice(0, 7) === "2021-04"){
      return transaction.amount
    }})  : []
  const aprilTotal = aprilTrans[0] ? aprilTrans.map(total => total.amount).reduce((sum, ta) => sum + ta) : []

  const marchTrans = transactions[0] ? transactions.filter(transaction => {
    if(transaction.date.slice(0, 7) === "2021-03"){
      return transaction.amount
    }})  : []

  const marchTotal = marchTrans[0] ? marchTrans.map(total => total.amount).reduce((sum, ta) => sum + ta) : []

  const febTrans = transactions[0] ? transactions.filter(transaction => {
    if(transaction.date.slice(0, 7) === "2021-02"){
      return transaction.amount
    }}) : []
  const febTotal = febTrans[0] ? febTrans.map(total => total.amount).reduce((sum, ta) => sum + ta) : []

  const janTrans = transactions[0] ? transactions.filter(transaction => {
    if(transaction.date.slice(0, 7) === "2021-01"){
      return transaction.amount
    }}) : []
  const janTotal = janTrans[0] ? janTrans.map(total => total.amount).reduce((sum, ta) => sum + ta) : []


  return (
    <div className="chart" style={{height: '500px', backgroundColor: 'white', marginTop: '50px', borderRadius: '5px', boxShadow: '0px 1px 1px black', marginBottom: '50px'}}>
      <Bar
        data={{
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [{
            label: 'Spending',
            data: [(janTotal - 3284.22), febTotal, (marchTotal - 5029.95), (aprilTotal - 1243.25), mayTotal],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
          }]
        }}
        width={100}
        height={100}
        options={{ 
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }}
      />
    </div>
  )
}
