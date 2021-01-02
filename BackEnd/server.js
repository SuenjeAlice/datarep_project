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

//add use method for cors
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    }); 

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
    cover:Number,
    publisher:String,
    genre:String,
    read:Boolean
});

//created a Model
var BookModel = mongoose.model("book", bookSchema);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/books', (req, res) => {
    //find data
    BookModel.find((err, data) => {
        res.json(data);
    })
})

//used get method
app.get('/api/books/:id', (req, res)=>{
    console.log(req.params.id);
    
    //find movie by ID
    BookModel.findById(req.params.id, (err, data) => {
      res.json(data);
    })
})

app.put('/api/books/:id', (req, res)=>{
    console.log("Update book: " + req.params.id);
    console.log(req.body);

    BookModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, 
      (err,data)=>{
          res.send(data);
      })
})

//delete book
app.delete('/api/books/:id', (req, res) => {
    console.log("Delete Book: " + req.params.id);
    console.log(req.body);

    BookModel.findByIdAndDelete(req.params.id,(err, data)=>{
        res.send(data);
    })
})

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

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })