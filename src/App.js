import React from 'react';
import './App.css';
import Main from './Scene/Main';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Training from './Scene/Training';
import NavBar from './Scene/NavBar'


function App() {
  return (
    <Router>
      <div >
        <NavBar/>
        <Switch>
        <Route path='/' exact component={Main}/>
        <Route path='/training' component={Training}/>
        </Switch>
    </div>
    </Router>
    
  );
}

export default App;
