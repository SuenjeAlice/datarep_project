//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
import '../App.css';
import { Book } from './book';

export class Books extends Component{
  render(){
    return this.props.books.map( (book) => {
        return <Book book = {book} Reload = {this.props.Reload}></Book>
    })
  }
}

