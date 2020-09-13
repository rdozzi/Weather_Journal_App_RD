// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;

const server = app.listen(port, listening);

// Callback to debug
function listening() {
    console.log('Server Running');
    console.log(`Running on localhost: ${port}`);
}

// Initialize all route with a callback function
app.get('/all', sendData);

// Callback function to complete GET '/all
// req = request; res = response
function sendData(req, res){
    res.send(projectData);
}

// Post Route
app.post('/add', appendData);

//req = request; res = response
function appendData(req, res){
    //Define variable to capture data pulled from website and API connection
    let data = req.body;
    console.log(data);

    //Create the key-value pairs to capture all of the data: date, temperature, (user) feeling and append to projectDats
    projectData['date'] = data.date;
    projectData['location'] = data.location;
    projectData['country'] = data.country;
    projectData['temp'] = data.temp;
    projectData['content'] = data.content;
    console.log(projectData);
}

