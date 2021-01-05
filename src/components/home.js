//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
//imported css stylesheet
import '../App.css';
//import Carousel from React Bootstrap
import Carousel from 'react-bootstrap/Carousel';
//import local image
import Background from '../media/white.png';
//import Link 
import { Link } from 'react-router-dom';

export class Home extends Component{
  render(){
    return (
      <div className="App home">

        <div className = "homepage">
          {/*Carousel with Quotes */}
            <Carousel className = "carousel">
              <Carousel.Item interval={8000}>
                <img
                  className="d-block w-100"
                  src={Background}
                  alt="background"
                />
                <Carousel.Caption className = "caption">
                  <h3>A  room without books is like a body without a soul.</h3>
                  <p>Cicero</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={Background}
                    alt="background"
                  />
                <Carousel.Caption className = "caption">
                  <h3>The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.</h3>
                  <p>Jane Austin</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={Background}
                    alt="background"
                  />
                <Carousel.Caption className = "caption">
                  <h3>Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be defeated.</h3>
                  <p>Neil Gaiman</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={8000}>
                <img
                  className="d-block w-100"
                  src={Background}
                  alt="background"
                />
                <Carousel.Caption className = "caption">
                  <h3>If one cannot enjoy reading a book over and over again, there is no use in reading it at all.</h3>
                  <p>Oscar Wilde</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={Background}
                    alt="background"
                  />
                <Carousel.Caption className = "caption">
                  <h3>"One must always be careful of books," said Tessa, "and what is inside them, for words have the power to change us."</h3>
                  <p>Cassandra Clare</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={Background}
                    alt="background"
                  />
                <Carousel.Caption className = "caption">
                  <h3>A children's story that can only be enjoyed by children is not a good children's story in the slightest.</h3>
                  <p>C.S. Lewis</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={8000}>
                <img
                    className="d-block w-100"
                    src={Background}
                    alt="background"
                  />
                <Carousel.Caption className = "caption">
                  <h3>After nurishment, shelter and companionship, stories are the thing we need most in the world.</h3>
                  <p>Phillip Pullmann</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

            {/*Welcome text and Buttons/Links as Buttons to add and mybooks*/}
            <div  className = "homeBottom">
              <div className = "homeButtons">
                <h2>Welcome to Your Books</h2>
                <p>You are a booklover just like us, so use this app to easily record the books you own! You can even add whether or not you've read them (to keep an eye on your TBR list)!</p>
                <p>Use the buttons below to start your bookish experience by either adding a new book or viewing your existing booklist!</p>
                <div className = "homeBtns">
                  <Link to = {"/add"} className="btn btn-dark homeBtnLink" >New Book</Link>
                  <Link to = {"/mybooks"} className="btn btn-dark homeBtnLink" >View Books</Link>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

