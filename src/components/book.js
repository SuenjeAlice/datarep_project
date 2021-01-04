//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
//imported Card from React Bootstrap
import Card from 'react-bootstrap/Card';
//imported Link
import {Link} from 'react-router-dom';
//imported Button
import Button from 'react-bootstrap/Button';
//imported axios
import axios from 'axios';
import '../App.css';

export class Book extends Component{

  constructor(){
    super();

    //Binding
    this.DeleteBook  = this.DeleteBook.bind(this);
  }

  DeleteBook(e){
    e.preventDefault();

    console.log("Delete: " + this.props.book._id)

    axios.delete("http://localhost:4000/api/books/" + this.props.book._id)
        .then(()=> {
            this.props.ReloadData();
        })
        .catch((err)=>{
          console.log(err);
        });
  }
  render(){
    
    //To determine whether or not a book was read
    console.log(this.props.book.read);
    var result = "";
    if(this.props.book.read){
      result = "Read";
    }else{
      result = "Not Read";
    }

    return (
      <div className="App">
          <Card className = "card" style={{ width: '25rem' }}>
              <Card.Header><h2>{this.props.book.bTitle}</h2> <h3>{this.props.book.author}</h3></Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <img src={ "data:image/jpg; data:image/png; data:image/jpeg;base64," + this.props.book.cover} alt = {"Cover of " + this.props.book.bTitle} className = "bookImg"></img>
                  <footer className="blockquote-footer">
                    {this.props.book.author}
                    <p>{this.props.book.publisher}</p>
                    <p>{this.props.book.genre}</p>
                    <p>{result}</p>
                  </footer>
                </blockquote>
              </Card.Body>
              <div className = "btnsCard">
                <Link to={"/update/" + this.props.book._id} className="btn btn-dark homeBtnLink">Edit</Link>
                <Button className = "homeBtnLink" variant = "danger" onClick={this.DeleteBook}>Delete</Button>
              </div>
          </Card>
      </div>
    );
  }
}