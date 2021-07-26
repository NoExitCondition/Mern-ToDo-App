/*Import project dependencies*/
const express = require('express');
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

/*Listening for port*/
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

