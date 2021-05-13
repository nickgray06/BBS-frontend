# Better Budgeting Sytems
-> All your finances in one place! <-


## Table of Contents
- [General Info](#general-info)
- [Intro Video](#intro-video)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Code Example](#code-example)
- [Status](#status)
- [Inspiration](#inspiration)
- [Contact](#contact)


## General Info
Better Budgeting systems allows you to take a look at all your accounts accross institutions.


## Intro Video
[Better Budeting Systems](https://www.youtube.com/watch?v=DI1tK2WFiG4)


# Technologies 
- Node 
- Express
- Javascript
- React
- Firebase
- HTML
- CSS
- Plaid API


## Setup 
To run Better Budgeting Sytems!, fork and clone this GitHub repository. Then run:


yarn watch on backend

npm start on frontend



## Code Example

```react
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
```

## Features
- Links to Plaid API to view accounts
- Can view accounts and see summaries
- Remembers previous users accounts


## Status
This project is currently finished. I may introduce new features or refactor existing code going forward.


## Inspiration
We built Better Budgeting Sytems as our Mod 5 capstone project. 


## Contact
Better Budgeting systmes was created by [Nick Gray](https://www.linkedin.com/in/nick-gray-06/)

Feel free to reach out!

