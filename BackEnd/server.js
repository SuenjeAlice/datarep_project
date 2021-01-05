//Data Representation and Querying - Project - Sünje Ursa Alice Winteler - G00363332
const express = require('express')
const app = express()
const port = 4000


//include cors library
const cors = require('cors');
//include bodyParser
const bodyParser = require("body-parser");
//include mongoose
const mongoose = require('mongoose');
//include path
const path = require('path');
//include favicon
const favicon = require('serve-favicon');

//favicon
/*I added the favicon when I was still using Localhost:3000 for my front-end and it worked
  without any problems, when I ran the build and added it here it didn't work. */
app.use(favicon(path.join(__dirname, '../build', 'favicon.ico')))

//add use method for cors
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    }); 

//add use method to configure how to get from here to the build folder
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));   

//add use method for bodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//connected to mongoDB database
const connect = 'mongodb+srv://admin:admin@cluster0.z6v7i.mongodb.net/books?retryWrites=true&w=majority';
mongoose.connect(connect, {useNewUrlParser: true});

//created a mongoose Schema
const Schema = mongoose.Schema;

//created Schema for a book
var bookSchema = new Schema({
    bTitle:String,
    author:String,
    cover:String,
    publisher:String,
    genre:String,
    read:Boolean
});

//created a Model
var BookModel = mongoose.model("book", bookSchema);

//test if server works
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//used get method to display api
app.get('/api/books', (req, res) => {
    //find data
    BookModel.find((err, data) => {
        res.json(data);
    })
})

//used get method to display api entry with the given id
app.get('/api/books/:id', (req, res)=>{
    //logs id
    console.log(req.params.id);
    
    //finds the book by ID
    BookModel.findById(req.params.id, (err, data) => {
      res.json(data);
    })
})

//used put method to update book record with given id 
app.put('/api/books/:id', (req, res)=>{
    console.log("Update book: " + req.params.id);
    console.log(req.body);

    //used findByIdAndUpdate method to find the book record and update it
    BookModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, 
      (err,data)=>{
          res.send(data);
      })
})

//used delete method to delete book with the given id
app.delete('/api/books/:id', (req, res) => {
    console.log("Delete Book: " + req.params.id);
    console.log(req.body);

    //used findByIdAndDelete method to find the book record and delete it 
    BookModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

//used post method to create a book record
app.post('/api/books', (req, res) => {
    //create data
    BookModel.create({
        bTitle: req.body.bTitle,
        author: req.body.author,
        cover: req.body.cover,
        publisher: req.body.publisher,
        genre: req.body.genre,
        read: req.body.read,
    })

    //response to avoid replications
    res.send('Book has been added');
})

//used get method, * -> all unused paths 
app.get('*', (req, res)=>{
    //send back the index file  
    res.sendFile(path.join(__dirname + '/../build/index.html'));
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })