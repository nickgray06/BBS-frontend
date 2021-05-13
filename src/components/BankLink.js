import React from "react";
import "firebase/auth"
import 'firebase/firestore'
import firebase from 'firebase/app'
import { useAuth } from '../contexts/AuthContext'
import background from '../images/72.png'

import { PlaidLink } from "react-plaid-link";

export default function BankLink(props) {
  const onExit = (error, metadata) => console.log("onExit", error, metadata);

  const { currentUser } = useAuth()

  const onEvent = (eventName, metadata) => {
    console.log("onEvent", eventName, metadata);
  };

  const onSuccess = (token, metadata) => {
    // console.log('onSuccess', token, metadata);
    props.getAccessToken(token);
  };
  const storeTokenUser = (accessToken, currentUser) => {
    const db = firebase.firestore()
    const data = {
      access_token: accessToken,
      user_id: currentUser,
    };
    const storeUser = db.collection('users').add(data);
    console.log(accessToken);
  }

  return (
    <div style={{backgroundImage: `url(${background})`, height: "100vh", backgroundSize: "contain", backgroundPosition: 'right', backgroundRepeat: 'no-repeat', margin: "0px", padding: "20px", backgroundColor: 'lightblue' }}>
      <div className="home-text-container">
      <h1 style={{color: "white", fontSize: "4rem"}}>You are one step <br/> away to seeing <br/> your<span style={{color: 'aquamarine', fontWeight: 'bold'}}> accounts.</span></h1>
      <div>
        <h4 style={{color: 'white'}}>Sign in to your bank below. <br/> To see all your <span style={{color: 'aquamarine'}}>money</span> <br/>in one place.</h4>
      </div>
      <div style={{padding: '40px', margin: '0px'}}></div>
      {!props.accessToken && (
        <PlaidLink
          className="CustomButton"
          style={{
            padding: "20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#115293",
            color: "white",
            border: 'none'
          }}
          token={props.token ? props.token : ""}
          onExit={onExit}
          onSuccess={onSuccess}
          onEvent={onEvent}
        >
          Connect your bank!
        </PlaidLink>
      )}
      {/* {storeTokenUser(props.accessToken, currentUser.uid)} */}
      </div>
      </div>
  );
}
