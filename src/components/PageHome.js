import React from 'react'
import background from '../images/72.png'
import "../App.css"
import { Button } from '@material-ui/core'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom'

export default function PageHome(props) {
  return (
    <div style={{backgroundImage: `url(${background})`, height: "100vh", backgroundSize: "contain", backgroundPosition: 'right', backgroundRepeat: 'no-repeat', margin: "0px", padding: "20px", backgroundColor: 'lightblue' }}>
      <div className="home-text-container">
      <h1 style={{color: "white", fontSize: "4rem"}}>Take control of <br/> your <span style={{color: 'aquamarine', fontWeight: 'bold'}}>finances.</span></h1>
      <div>
        <h4 style={{color: 'white'}}>Keep all your accounts in one place. <br/> Seeing where your <span style={{color: 'aquamarine'}}>money</span> is <br/>has never been this easy.</h4>
      </div>
      <div style={{padding: '40px', margin: '0px'}}>
        <Button variant="contained" color="primary" style={{position: 'center'}}>
          <Link to="/signup" style={{color: 'white', fontWeight: 'bold'}}>Sign up today!</Link>
        </Button>
        <span style={{color: 'white', fontWeight: 'bold', margin: '50px'}}>OR</span>
        <Button variant="contained" color="primary" style={{position: 'center'}}>
          <Link to="/login" style={{color: 'white', fontWeight: 'bold'}}>Log in</Link>
        </Button>
      </div>
      </div>
    </div>
  )
}
