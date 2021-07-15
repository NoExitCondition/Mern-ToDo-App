/*Import project dependencies*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

/*Initalize Express server*/
const app = express();

/*Call body-parser and cors middleware*/
let corsOption = {
    origin: 'http://localhost:3000' //4000
}

app.use(cors(bodyOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*Create default route*/
app.get('/', (req, res) => {
    res.json({message: "Welcome to the REST API"});
});

/*Set PORT and listen for request*/
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);;
});