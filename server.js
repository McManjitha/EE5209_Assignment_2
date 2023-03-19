const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movie = require('./models/movies');
const Apis = require('./models/api');
const Song = require('./models/songs');
const Book = require('./models/books');
const TV = require('./models/tv_series');



const path = require('path');

const mongoURI = 'mongodb+srv://SensorProject:SensorProject@cluster0.8wcby6i.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected!');
  })
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/login', (req, res) => {
  const title = req.query.title;
  const type = req.query.type;
  const apiKey = req.query.api;
  console.log('type = '+type);
    

    // Check if the API key exists in the user collection
  Apis.findOne({ api: "eg20193667" })
  .then(doc => {
    // handle doc data
    if (doc) {
      console.log("Valid api");
      console.log(doc);

      if(type == 'movie'){
        console.log("inside movie");
        Movie.findOne({name : title})
        .then(mdoc => {
          if(mdoc){
            res.send(mdoc);
          }else{
            console.log("Document not available");
            res.send("Not Available");
          }
        })
        .catch(err => {
          console.log(err);
          console.log("An error occurred finding movie");
        })

      }else if(type == 'song'){
        Song.findOne({song : title})
        .then(sdoc => {
          if(sdoc){
            res.send(sdoc);
          }else{
            console.log("Document not available");
            res.send("Not Available");
          }
        })
        .catch(err => {
          console.log(err);
          console.log("An error occurred finding song");
        })
      }else if(type == 'book'){
        Book.findOne({name : title})
        .then(bdoc => {
          if(bdoc){
            res.send(bdoc);
          }else{
            console.log("Document not available");
            res.send("Not Available");
          }
        })
        .catch(err => {
          console.log(err);
          console.log("An error occurred finding song");
        })
      }else if(type == 'tv_series'){
        TV.findOne({name : title})
        .then(tdoc => {
          if(tdoc){
            res.send(tdoc);
          }else{
            console.log("Document not available");
            res.send("Not Available");
          }
        })
        .catch(err => {
          console.log(err);
          console.log("An error occurred finding song");
        })
      }
      
    } else {
      console.log("Invalid API key");
      res.json({ success: false, message: 'Invalid API Key' });
    }
  })
  
  .catch(err => {
    // handle error
    console.log(err);
    console.log("An error occurred finding api key");
    res.json({ success: false, message: 'Error logging in. Please try again later' });
  });
    
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
