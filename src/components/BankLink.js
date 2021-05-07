import React from "react";

import { PlaidLink } from "react-plaid-link";

export default function BankLink(props) {
  const onExit = (error, metadata) => console.log("onExit", error, metadata);

  const onEvent = (eventName, metadata) => {
    console.log("onEvent", eventName, metadata);
  };

  const onSuccess = (token, metadata) => {
    // console.log('onSuccess', token, metadata);
    props.getAccessToken(token);
    console.log(metadata);
  };
  console.log(props.accessToken);

  return (
    <>
      {!props.accessToken && (
        <PlaidLink
          className="CustomButton"
          style={{
            padding: "20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "blue",
            color: "white",
          }}
          token={props.token ? props.token : ""}
          onExit={onExit}
          onSuccess={onSuccess}
          onEvent={onEvent}
        >
          Connect your bank!
        </PlaidLink>
      )}
    </>
  );
}
