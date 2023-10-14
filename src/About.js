import React from "react";
import Header from "./Header";

class About extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class="wrapper">
          <h2>
            {" "}
           <center><strong>About My Bank</strong></center>
          </h2>
          <br></br>
          <h3> We done your payments more easy and more secure</h3>
          <h3> Join Now Immediately to maker faster transactions</h3>
        </div>
      </div>
    );
  }
}

export default About;
