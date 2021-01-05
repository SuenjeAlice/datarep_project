//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';

//imported Axios
import axios from 'axios';
//imported CSS stylesheet
import '../App.css';
//imported Books component
import { Books } from './books';
//imported Link
import { Link } from 'react-router-dom';
//imported ScrollUpButton, used https://www.npmjs.com/package/react-scroll-up-button
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
//imported SearchField, used https://github.com/nutboltu/react-search-field
import SearchField from "react-search-field";



export class MyBooks extends Component{

    //constructor
    constructor(){
        //super keyword
        super();

        //Binding
        this.ReloadData = this.ReloadData.bind(this);
        this.onSearchClick = this.onSearchClick.bind(this);
        
    }

    // used object 'state' to store data
    state = {
      //created books array to store book object
        books: [],
        //created searchValue 
        searchValue: ''
    };

    //componentDidMount method get called everytime the component get mounted
    componentDidMount(){
        //used get method to get data at url (from server)
        axios.get('http://localhost:4000/api/books')
        .then(response => {
        this.setState({ books: response.data });
        })
        .catch((error) => {
        console.log(error);
        })

    }

    //created ReloadData to reload the page 
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

    //created onSearchClick method to assign the value typed into searchbar to searchValue
    onSearchClick(value){
      this.setState({
        searchValue: value
      })
      console.log(this.state.searchValue);
    }

  render(){

    //followed tutorial: https://medium.com/@reneecruz/search-bar-in-react-js-in-six-simple-steps-4849118b2134
    /* - Created a variable called filteredBooks
       - Used the filter method to filter through the books array
       - used toLowerCase method to change the text to lowercase, then used includes method to filter for text 
         that includse searchValue (which was also converted to lowercase)
       - bTitle, author, genre, publisher are searchable
     */
    const filteredBooks = 
      this.state.books.filter(book => {
        return book.bTitle.toLowerCase().includes(this.state.searchValue.toLowerCase()) + book.author.toLowerCase().includes(this.state.searchValue.toLowerCase()) + book.genre.toLowerCase().includes(this.state.searchValue.toLowerCase()) + book.publisher.toLowerCase().includes(this.state.searchValue.toLowerCase())
      })

      //console log filteredBooks and searchValue
      console.log(filteredBooks);
      console.log("This is the searchValue: " + this.state.searchValue);

    return (
      <div className="App mybooks">
        <div className = "mybooksBackground">
          <h1>My Books</h1>
          <hr></hr>
          <div className = "myBooksBtn">
            {/*Link as a Button to the add page to add a new book */}
            <Link to = {"/add"} className="btn btn-dark myBooksBtnLink" >New Book</Link> 
            {/*Searchbar which uses onSearchClick and onEnter functions*/}
            <SearchField
              value= {this.state.searchValue}
              placeholder="Search..."
              onSearchClick={this.onSearchClick}
              onEnter={this.onSearchClick}
              />
          </div>
          {/*Scroll Up Button which appears at the Scrollbar and jumps back to the top of the page when clicked */}
          <ScrollUpButton/>
          {/* used Books and assigned filteredBooks to books variable and ReloadData to ReloadData*/}
          <Books books = {filteredBooks} ReloadData = {this.ReloadData}></Books>
        </div>
      </div>
    );
  }
}

