//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
//imported axios
import axios from 'axios';
import '../App.css';

export class Add extends Component{

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
        let file = e.target.files[0] 
        if (file){
            const reader = new FileReader();
            
            reader.onload = this._handleReaderLoaded.bind(this)

            reader.readAsBinaryString(file)
        }
        // //update state 
        // this.setState({
        //     cover: ;
        // })
    }

    _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result
        this.setState({
            cover: btoa(binaryString)
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

        //Testing
        alert("Book: " + this.state.bTitle);

        //created a book variable and added key value pairs
        const newBook = {
            bTitle: this.state.bTitle,
            author: this.state.author,
            cover: this.state.cover,
            publisher: this.state.publisher,
            genre: this.state.genre,
            read: this.state.read
        }

        //send book to server using post method
        axios.post('http://localhost:4000/api/books', newBook)
        .then((res)=> {
            //log responds
            console.log(res);
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
          <h1>Add a New Book to Your Booklist</h1>
            {/*Form to add a new Book which will be submitted on button press */}
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
                   {/* <textarea type='text' className='form-control' value={this.state.cover} onChange={this.onChangeCover}></textarea>*/}
                   <br></br>
                    <input type="file" id = "coverFile" name="coverFile" accept = ".jpeg, .png, .jpg" onChange={this.onChangeCover}></input>
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
                    <input type='submit' value='Add Book' className='btn btn-dark'></input>
                </div>
            </form>
      </div>
    );
  }
}