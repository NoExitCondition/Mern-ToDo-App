/*Import project dependencies*/
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api.js');
const path = require('path');
require('dotenv').config();

/*Initalize Express server*/
const app = express();
const port = process.env.PORT || 5000;

/*Handling Cors for app*/
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

/*Middleware Test*/
app.use((req, res, next) => {
    res.send('Middleware works');
})

/*BodyParser*/
app.use(bodyParser.json());

/*Routing*/
app.use('/api', routes);

/*middleware Error Checking?*/
app.use((err, req, res, next) => {
    console.log(err);
    next();
});

/*Listening for port*/
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

/*DB Connection*/
const uri = "mongodb+srv://Admin:Password@todocluster.jihcn.mongodb.next/ToDoClusters?retryWrites=true&w=majority";

try{
    mongoose.connect(
        uri, 
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log("MongoDB connected successfully"),
    );       
}
catch(e){
    console.log("Error connecting");
}
