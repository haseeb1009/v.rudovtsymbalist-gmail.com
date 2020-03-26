import React from 'react';
import './App.scss';
import Main from './Scene/Main';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Training from './Scene/Training';
import Business from './Scene/Business'
import NavBar from './Components/NavBar.js'
import Footer from './Components/Footer.js'
import Research from './Scene/Research'
import Team from './Scene/Team'
import Blog from './Scene/Blog'
import Winners from './Scene/Winners'
import Coach from './Scene/Coach'

function App() {
  return (
    <Router>
      
        <NavBar title='volodymyr' />
        <Switch>
          <Route path='/' exact render={(props) => <Main name='Volodymyr' />} />
          <Route path='/training' component={Training} />
          <Route path='/business' component={Business} />
          <Route path='/research' component={Research} />
          <Route path='/coach' component={Coach}/>
          <Route path='/team' component={Team} />
          <Route path='/blog' component={Blog} />
          <Route path='/winners' component={Winners} />
        </Switch>
        <Footer />
    </Router>

  );
}

export default App;
