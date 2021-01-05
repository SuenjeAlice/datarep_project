//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332

import React, { Component } from 'react';
//imported axios
import axios from 'axios';
//imported CSS stylesheet
import '../App.css';

export class Update extends Component{
    //constructor
    constructor(){
        //super keyword
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
    //componentDidMount to get data from server
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
        //followed tutorial at https://medium.com/@blturner3527/storing-images-in-your-database-with-base64-react-682f5f3921c2
        //create a file and assign the file uploaded (first element in files array)
        let file = e.target.files[0] 
        //check if a file exists
        if (file){
            //check the size off the file (the server can't handle big files)
            if(file.size > 32200){
                //alert if file is too big
                alert("File is too big! The file must be smaller than 30KB!");

            }else{
                //create a FileReader and assign it to reader variable
                const reader = new FileReader();
            
                //load reader
                reader.onload = this._handleReaderLoaded.bind(this)
    
                //convert to Binary
                reader.readAsBinaryString(file)
            }
            
        }
    }

    //method used to handle reader when loaded, has readerEvt (reader event) as argument
    _handleReaderLoaded = (readerEvt) => {
        //use result from reader and assign to binaryString variable
        let binaryString = readerEvt.target.result
        //console log variable in btoa method (base64)
        console.log(btoa(binaryString))

        //update state with binaryString variable which has been converted to Base64 using btoa method
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
        //create a readVar variable and assign the value
        var readVar = e.target.value
        //console log readVar
        console.log(readVar);
        //check if readVar equals to Yes (in both type and value)
        if(readVar === "Yes"){
            //update state to true
            this.setState({
                read: "true"
            })
        //check if readVar equals to No (in both type and value)
        }else if(readVar === "No"){
            //update state to false
            this.setState({
                read: "false"
            })
        }
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

        //update book in server using put method
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
      <div className="App formPage">
          <div className = "formPageInner">
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
                    <br></br>
                    <input type="file"  accept = ".jpeg, .png, .jpg" onChange={this.onChangeCover}></input>
                    <small class="form-text text-muted">The file has to be smaller than 30KB!</small>
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
                    <select class="form-control"  value={this.state.read} onChange={this.onChangeRead}>
                            <option selected>Please select:</option>
                            <option>Yes</option>
                            <option>No</option>
                    </select>
                </div>
                <div className='form-group'>
                    <input type='submit' value='Update' className='btn btn-dark'></input>
                </div>
            </form>
            </div>
      </div>
    );
  }
}