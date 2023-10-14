import React from "react";
import Header from "./Header";
import Table from 'react-bootstrap/Table';
import './App.css';
import './styles/TransactionHistory.css'

class TransactionHistory extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <center><h2>This is our Latest History</h2></center>
                <div class="wrapper">
                <Table striped class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>UserName</th>
          <th>Amount</th>
          <th>Receiver</th>
          <th>Transaction Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mohan</td>
          <td>1000</td>
          <td>Bhavya</td>
          <td>6/4/2022</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bhavya</td>
          <td>34000</td>
          <td>Mohan</td>
          <td>21/3/2022</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Srikanth</td>
          <td>36400</td>
          <td>Eswar</td>
          <td>31/7/2022</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Eswar</td>
          <td>38746</td>
          <td>Mohan</td>
          <td>3/9/2021</td>
        </tr>
        <tr>
          <td>5</td>
          <td>Krishna</td>
          <td>3645</td>
          <td>Mohan</td>
          <td>3/10/2020</td>
        </tr>
      </tbody>
    </Table>
                </div>
            </div>
        );
    }
}

export default TransactionHistory;