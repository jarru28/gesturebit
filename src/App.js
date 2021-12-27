import React from 'react'
import './firebase';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min';

import {BrowserRouter as Router,Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import ListBots from './components/ListBots'
import CreateBots from './components/CreateBots'
import {AuthProvider} from './components/Auth.js'
import ListStrategies from './components/ListStrategies'
import Home from './components/Home.js'
import CreateEx from './components/CreateEx.js'
import PrivateRoute from './components/PrivateRoute'
import SingUp from './components/SingUp'
import LogIn from './components/Login'

function App() {
  return (
    <AuthProvider>
      <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
        <Router>
          <Navigation/>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={LogIn}/>
          <Route path="/singup" exact component={SingUp}/>
          <PrivateRoute path="/bots" exact component={ListBots}/>
          <PrivateRoute path="/createBot" exact component={CreateBots}/>
          <PrivateRoute path="/strategies" exact component={ListStrategies}/>
          <PrivateRoute path="/createExchange" exact component={CreateEx}/>
        </Router>
        
        </div>
      </AuthProvider>
  );
}

export default App;
