//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';

//imported Axios
import axios from 'axios';

import '../App.css';
import { Books } from './books';



export class MyBooks extends Component{

    constructor(){
        super();

        //bind Reload()
        this.Reload = this.Reload.bind(this);
    }

    state = {
        books: []
    };

    componentDidMount(){
        axios.get('http://localhost:4000/api/books')
        .then(response => {
        this.setState({ books: response.data.books });
        })
        .catch((error) => {
        console.log(error);
        })

    }

    Reload(){
        axios.get('http://localhost:4000/api/books')
        .then((response)=>{
                this.setState({
                    books: response.data.book
                })
        })
        .catch((error)=>{ 
            console.log(error)
        });
    }

  render(){
    return (
      <div className="App">
        <h1>My Books</h1>
        <Books books = {this.state.books} Reload = {this.Reload}></Books>
      </div>
    );
  }
}

