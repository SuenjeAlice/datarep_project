//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';

//imported Axios
import axios from 'axios';

import '../App.css';
import { Books } from './books';
import { Link } from 'react-router-dom';
//import ScrollUpButton, used https://www.npmjs.com/package/react-scroll-up-button
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
//import SearchField, used https://github.com/nutboltu/react-search-field
import SearchField from "react-search-field";



export class MyBooks extends Component{

    constructor(){
        super();

        //Binding
        this.ReloadData = this.ReloadData.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        
    }

    state = {
        books: [],
        searchValue: ''
    };

    componentDidMount(){
        axios.get('http://localhost:4000/api/books')
        .then(response => {
        this.setState({ books: response.data });
        })
        .catch((error) => {
        console.log(error);
        })

    }

    ReloadData(){
        axios.get('http://localhost:4000/api/books')
        .then(response =>{
                this.setState({
                    books: response.data
                })
        })
        .catch((error)=>{ 
            console.log(error)
        });
    }

    onSearchClick(value){
      console.log("The button was clicked");
      this.setState({
        searchValue: value
      })
      console.log(this.state.searchValue);
      
  
      //at the end reset searchValue to emtpy
    }

  render(){

    const filteredBooks =
      this.state.books.filter(book => {
        return book.bTitle.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })

      console.log(filteredBooks);
      console.log("This is the searchValue: " + this.state.searchValue);

    return (
      <div className="App mybooks">
        <h1>My Books</h1>
        <hr></hr>
        <div className = "myBooksBtn">
        <Link to = {"/add"} className="btn btn-dark myBooksBtnLink" >New Book</Link> 
        <SearchField
          value= {this.state.searchValue}
          placeholder="Search..."
          onSearchClick={this.onSearchClick}
          />
        </div>
        <ScrollUpButton/>
        <Books books = {filteredBooks} ReloadData = {this.ReloadData}></Books>
      </div>
    );
  }
}

