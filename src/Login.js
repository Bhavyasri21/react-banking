import React from "react";
import Header from "./Header";
import './App.css';
import './styles/Login.css'

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Login extends React.Component {
  render() {
    return (
      <div>
        <br></br>
        <div class="wrapper">
        <h1> Login Page </h1>
        <div class="form">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter gmail" />
              <Form.Text className="text-muted">
                Enter user registered email address
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              click here to Login
            </Button>
          </Form>
        </div>
        </div>
      </div>
    );
  }
}

export default Login;
