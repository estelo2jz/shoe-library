import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Navigation from './components/navigation';
import Nike from './components/pages/nike';
import Adidas from './components/pages/adidas';
import Jordan from './components/pages/jordan';
import Yeezy from './components/pages/yeezy';

import './App.css';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className='app'>
          <Navigation />
          <Switch>
            <Route exact path="/" />
            <Route path="/nike" component={Nike} />
            <Route path="/adidas" component={Adidas} />
            <Route path="/jordan" component={Jordan} />
            <Route path="/yeezy" component={Yeezy} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
