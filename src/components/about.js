//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
//import image
import book_logo from '../media/book.png';

export class About extends Component{
  render(){
    return (
      <div className="App about">
        <div className = "aboutInfo">
          <h1>About</h1>
          <h4>Welcome to the My Books App made by booklovers for booklovers!</h4>
          <h2>How does this App work?</h2>
          <p>This App is really simple. To get started simply click on <Link to = {"/mybooks"}>My Books</Link> or <Link to = {"/"}>Home</Link>. You can view your book list, add books and delete or update existing ones.</p>
          <h2>Why did we create this App?</h2>
          <p>Every avid reader knows the problem: there are just way too many books and no way to keep track... Well, until now!</p>
          <h2>Who are we?</h2>
          <div className = "aboutLogo">
            <img
                    className="logo"
                    src={book_logo}
                    alt="book logo"
                  />
            <p className="logo">My Books</p>
          </div>
          <p>We are a ficitonal company created for a college project.</p>
        </div>
      </div>
    );
  }
}

