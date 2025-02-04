import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Login from './Login';
import TransactionHistory from './TransactionHistory';
import SendFunds from './SendFunds';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


const routing = (
  <BrowserRouter>
    <Routes>
      <Route path='/' Exact element={<Home/>}></Route>
      <Route path='/contact' Exact element={<Contact/>}></Route>
      <Route path='/about' Exact element={<About/>}></Route>
      <Route path='/transaction-history' Exact element={<TransactionHistory/>}></Route>
      <Route path='/send-funds' Exact element={<SendFunds/>}></Route>
      <Route path='login' Exact element={<Login/>}></Route>
      <Route path='register' Exact element={<Contact/>}></Route>

    </Routes>
  </BrowserRouter>
)

ReactDOM.render(routing, document.getElementById('root'))

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 reportWebVitals();
