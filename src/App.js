import React from 'react'
import './firebase';
import 'bootstrap/dist/css/bootstrap.min.css'

import 'bootstrap/dist/js/bootstrap.bundle.min';

import {BrowserRouter as Router,Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import ListBots from './components/ListBots'
import CreateBots from './components/CreateBots'
import CreateUser from './components/CreateUser'
import ListStrategies from './components/ListStrategies'
import Home from './components/Home.js'
import CreateEx from './components/CreateEx.js'

function App() {
  return (
    <div>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"></link>
      <Router>
        <Navigation/>
        <Route path="/" exact component={Home}/>
        <Route path="/bots" exact component={ListBots}/>
        <Route path="/createBot" exact component={CreateBots}/>
        <Route path="/user" exact component={CreateUser}/>
        <Route path="/strategies" exact component={ListStrategies}/>
        <Route path="/createExchange" exact component={CreateEx}/>
      </Router>
      
      </div>
  );
}

export default App;
