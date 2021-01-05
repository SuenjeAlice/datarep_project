//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
//imported css stylesheet
import './App.css';
//imported Home, MyBooks, About, Add, and Update components
import { Home } from './components/home';
import { MyBooks } from './components/mybooks';
import { About } from './components/about';
import { Add } from './components/add';
import { Update } from './components/update';

//imported React Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//imported Nav 
import { Navbar, Nav } from 'react-bootstrap'

//imported BrowserRouter
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//import logo image
import book_logo from './media/book.png';

class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          {/*Navigation Bar includes Logo and links to homepage, mybooks page and about page */}
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img
                src= {book_logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Navbar logo"
              />
            </Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/mybooks">My Books</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar>

          {/*Set up paths for the Routing */}
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path = '/mybooks' component={MyBooks} />
            <Route path = '/about' component={About} />
            <Route path = '/add' component={Add} />
            <Route path = '/update/:id' component={Update} />
          </Switch>

          {/*Footer Section - includes logo and links */}
          <footer>
            <div className = "footerSection">
              <img
                  className="logo logoImg"
                  src={book_logo}
                  alt="book logo"
                />
                <p className="logo">My Books</p>
            </div>
            <div className = "footerSection middleSection">
              <ul>
                <li><Link to = {"/"}>Home</Link></li>
                <li><Link to = {"/mybooks"}>My Books</Link></li>
                <li><Link to = {"/about"}>About</Link></li>
              </ul>

            </div>
            <div className = "footerSection">
              <ul>
                <li><Link to = {"/mybooks"}>View Books</Link></li>
                <li><Link to = {"/add"}>Add Book</Link></li>
              </ul>

            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
