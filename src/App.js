//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
import './App.css';
import { Home } from './components/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/home">Home</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
            <Route path='/home' component={Home} exact />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
