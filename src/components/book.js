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
//imported CSS stylesheet
import '../App.css';

export class Book extends Component{

  //constructor
  constructor(){
    //super keyword
    super();

    //Binding
    this.DeleteBook  = this.DeleteBook.bind(this);
  }

  //DeleteBook method to delete a book
  DeleteBook(e){
    //preventDefault
    e.preventDefault();

    console.log("Delete: " + this.props.book._id)

    //used delete method to delete book
    axios.delete("http://localhost:4000/api/books/" + this.props.book._id)
        .then(()=> {
            //reloads page
            this.props.ReloadData();
        })
        .catch((err)=>{
          console.log(err);
        });
  }
  render(){
    
    //To determine whether or not a book was read
    var result = "";
    //if read is true change the result to "read" else change to "TBR" (To Be Read)
    if(this.props.book.read){
      result = "read";
    }else{
      result = "TBR";
    }

    return (
      <div className="App">
        {/*Used a card to display book */}
          <Card className = "card" style={{ width: '25rem' }}>
              <Card.Header><h2>{this.props.book.bTitle}</h2> <h3>{this.props.book.author}</h3></Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  {/*used data:image/jpg; data:image/png; data:image/jpeg;base64, plus cover to convert the base64 string saved in the database back to an immage, added a alt tag including the book title as well */}
                  <img src={ "data:image/jpg; data:image/png; data:image/jpeg;base64," + this.props.book.cover} alt = {"Cover of " + this.props.book.bTitle} className = "bookImg"></img>
                  <footer>
                    <p>Publisher: {this.props.book.publisher}</p>
                    <p>Genre: {this.props.book.genre}</p>
                    <p>Status: {result} </p>
                  </footer>
                </blockquote>
              </Card.Body>
              <div className = "btnsCard">
                {/* used Link as a Button and a Button to update or delete the book */}
                <Link to={"/update/" + this.props.book._id} className="btn btn-dark homeBtnLink">Update</Link>
                <Button className = "homeBtnLink" variant = "danger" onClick={this.DeleteBook}>Delete</Button>
              </div>
          </Card>
      </div>
    );
  }
}