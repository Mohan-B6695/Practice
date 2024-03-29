import React from 'react';
import './App.css';
import BookStoreFronPage from './components/BookStoreFronPage'
import OrderSuccessfull from './components/OrderSuccessfull'
import Footer from './components/Footer'
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Registration from './components/Registration';
import ResetPassword from './components/ResetPassword';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom'
import Cart from './components/Cart'

function App() {
  return (
    <div className="appDiv">

      < BrowserRouter >
       
          <Route path={"/"} exact component={BookStoreFronPage} />
          <Route path={"/cart"} exact component={Cart} />
          <Route path={"/ordersuccessfull"} exact component={OrderSuccessfull} />
          <Route path = {"/register"} component = { Registration } /> 
          <Route path = {"/login"} exact component = { Login }/> 
          <Route path = {"/forgotpassword"} component = { ForgotPassword }/> 
          <Route path = {"/resetpassword"} component = { ResetPassword }/>   
      </BrowserRouter >
      <Footer />
    </div>
  );
}

export default App;
