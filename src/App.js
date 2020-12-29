//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
import './App.css';
import { Home } from './components/home';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MyBooks } from './components/mybooks';
import { About } from './components/about';


class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/mybooks">My Books</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path = '/mybooks' component={MyBooks} />
            <Route path = '/about' component={About} />
          </Switch>
          <footer>
            <h2>This is footer</h2>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
