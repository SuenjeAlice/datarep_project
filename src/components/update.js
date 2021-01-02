//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
//imported axios
import axios from 'axios';
import '../App.css';

export class Update extends Component{
    constructor(){
        super();

        //Binding
        this.onChangeBTitle = this.onChangeBTitle.bind(this);
        this.onChangeAuthor = this.onChangeAuthor.bind(this);
        this.onChangeCover = this.onChangeCover.bind(this);
        this.onChangePublisher = this.onChangePublisher.bind(this);
        this.onChangeGenre = this.onChangeGenre.bind(this);
        this.onChangeRead = this.onChangeRead.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        //Initialise State and set to blank
        this.state = {
            bTitle: '',
            author: '',
            cover: '',
            publisher: '',
            genre: '',
            read:''
        }
    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        //used get method
        axios.get('http://localhost:4000/api/books/' + this.props.match.params.id)
        .then(response => {
            this.setState({
                _id:response.data._id,
                bTitle:response.data.bTitle,
                author:response.data.author,
                cover:response.data.cover,
                publisher:response.data.publisher,
                genre:response.data.genre,
                read:response.data.read
            })
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    //onChangeBTitle method which assigns the value to the bTitle
    onChangeBTitle(e){
        //update state to include value
        this.setState({
            bTitle: e.target.value 
        })
    }

    //onChangeAuthor method which assigns the value to the author
    onChangeAuthor(e){
        //update state to include value
        this.setState({
            author: e.target.value 
        })
    }

    //onChangeCover method which assigns the value to the cover
    onChangeCover(e){
        //update state to include value
        this.setState({
            cover: e.target.value 
        })
    }

    //onChangePublisher method which assigns the value to the publisher
    onChangePublisher(e){
        //update state to include value
        this.setState({
            publisher: e.target.value 
        })
    }

    //onChangeGenre method which assigns the value to the genre
    onChangeGenre(e){
        //update state to include value
        this.setState({
            genre: e.target.value 
        })
    }

    //onChangeRead method which assigns the value to the read
    onChangeRead(e){
        //update state to include value
        this.setState({
            read: e.target.value 
        })
    }

    //onSubmit method 
    onSubmit(e){
        //to prevent the calling of button multiple times
        e.preventDefault();

        //created a book variable and added key value pairs
        const newBook = {
            bTitle: this.state.bTitle,
            author: this.state.author,
            cover: this.state.cover,
            publisher: this.state.publisher,
            genre: this.state.genre,
            read: this.state.read,
            _id: this.state._id
        }

        
        axios.put('http://localhost:4000/api/books/'  + this.state._id, newBook)
        .then((res)=> {
            //log responds
            console.log(res.data);
        })
        .catch((err)=> {
            //log error
            console.log(err);
        });

        //load MyBooks page
        window.location.href = 'http://localhost:3000/mybooks';
         
    }

    

  render(){
    return (
      <div className="App">
          <h1>Update your Book</h1>
            {/*Form to update the Book which will be submitted on button press */}
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Book Title: </label>
                    <input type='text' className='form-control' value={this.state.bTitle} onChange={this.onChangeBTitle}></input>
                </div>
                <div className="form-group">
                    <label>Author: </label>
                    <input type='text' className='form-control' value={this.state.author} onChange={this.onChangeAuthor}></input>
                </div>
                <div className="form-group">
                    <label>Cover: </label>
                    <textarea type='text' className='form-control' value={this.state.cover} onChange={this.onChangeCover}></textarea>
                </div>
                <div className="form-group">
                    <label>Publisher: </label>
                    <input type='text' className='form-control' value={this.state.publisher} onChange={this.onChangePublisher}></input>
                </div>
                <div className="form-group">
                    <label>Genre: </label>
                    <input type='text' className='form-control' value={this.state.genre} onChange={this.onChangeGenre}></input>
                </div>
                <div className="form-group">
                    <label>Did you read the book? </label>
                    <input type='text' className='form-control' value={this.state.read} onChange={this.onChangeRead}></input>
                </div>
                <div className='form-group'>
                    <input type='submit' value='Update' className='btn btn-dark'></input>
                </div>
            </form>
      </div>
    );
  }
}