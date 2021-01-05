//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
//imported CSS stylesheet
import '../App.css';
//imported Book component
import { Book } from './book';

export class Books extends Component{
  render(){
    //sort the books by title and map them, return the Book component
    return this.props.books.sort((a, b) => a.bTitle.localeCompare(b.bTitle)).map( (book) => {
            return <Book book = {book} ReloadData = {this.props.ReloadData}></Book>

    })
  }
}

