import './App.css';
import { Container } from 'react-bootstrap'
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'
import { AuthProvider, useAuth } from './contexts/AuthContext';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Profile';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
import {auth} from './firebase'
import { render } from '@testing-library/react';
import axios from 'axios'
import BankLink from './components/BankLink';
import TransactionsContainer from './components/TransactionsContainer'
import BalanceContainer from './components/BalanceContainer';


export default class App extends Component {

  state = {
    token: null,
    access_token: null,
    transactions: [],
    balances: []
  }

  //Grabs temporary Link token generated from server and updates state with it client side
  createLinkToken = async () => {
  const res = await axios.post('http://localhost:8080/create_link_token');
  const data = res.data.link_token
  this.setState({ token: data })
  }

  //Ensures above action runs upon page load
  componentDidMount(){
    auth.onAuthStateChanged(userAuth => {
      this.setState({ user: userAuth});
    });
    this.createLinkToken()
  }

  getAccessToken = async (publicToken) => {
    console.log("client side public token", publicToken)
    //sends the public token to the app server
    const res = await axios.post('http://localhost:8080/get_access_token', {publicToken: publicToken})
    const data = res.data.access_token
    //updates state with permanent access token
    this.setState({ access_token: data})
  }



  render(){
    return (
      <div>
        <Router>
      <nav className="topnav">
        <div>
        <Link to="/" className="link">Home</Link>
        </div>

        <div>
        <Link to='/login' className="link">Log In</Link>
        {this.state.user && <Link to='/profile' className="link">Profile</Link>}
        <Link to='/link' className="link">Link</Link>
        <Link to ='/transactions' className="link">Transactions</Link>
        <Link to ='/balances' className="link">Balances</Link>
        </div>
      </nav>
        <AuthProvider>
        <Switch>
          <Route path='/transactions'><TransactionsContainer accessToken={this.state.access_token}/></Route>
          <Route path='/link'>
          <div>
          <BankLink token={this.state.token} accessToken={this.state.access_token} getAccessToken={this.getAccessToken} />
          </div>
          </Route>
          <Route path='/balances'>
          <div>
          <BalanceContainer accessToken={this.state.access_token} />
          </div>
          </Route>
          <Route exact path='/'><div className="header"><h1>Better Budgeting Systems</h1></div></Route>
          <Route path="/signup">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
                <SignUp />
              </div>
            </Container>
          </Route>
          <Route path="/login">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
              <Login />
              </div>
            </Container>
          </Route>
          <PrivateRoute path="/profile">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
              <Profile/>
              </div>
            </Container>
          </PrivateRoute>
          <PrivateRoute path="/update-profile">
            <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
              <UpdateProfile/>
              </div>
            </Container>
          </PrivateRoute>
          <Route path="/forgot-password">
          <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh",}}>
              <div className="w-100" style={{ maxWidth: '400px'}}>
              <ForgotPassword />
              </div>
            </Container>
          </Route>
        </Switch>
        </AuthProvider>
    
    </Router>
        
      </div>
    )
  }
}



