//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';

//imported Axios
import axios from 'axios';

import '../App.css';
import { Books } from './books';
import { Link } from 'react-router-dom';
import { Search } from './search';



export class MyBooks extends Component{

    constructor(){
        super();

        //bind Reload()
        this.ReloadData = this.ReloadData.bind(this);
    }

    state = {
        books: []
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

  render(){
    return (
      <div className="App mybooks">
        <h1>My Books</h1>
        <hr></hr>
        <div className = "myBooksBtn">
        <Link to = {"/add"} className="btn btn-dark myBooksBtnLink" >New Book</Link> 
        <Search />
        </div>
        <Books books = {this.state.books} ReloadData = {this.ReloadData}></Books>
      </div>
    );
  }
}

