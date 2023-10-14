import React from "react";
import Header from "./Header";
import { Button } from "bootstrap";

class SendFunds extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="wrapper">
          <h2>
            {" "}
            <strong>Make a Payment Now.</strong><br/>
            
          </h2>
          <br></br>
          <button type="button">Click Here To do Payment</button>
        </div>
      </div>
    );
  }
}

export default SendFunds;
