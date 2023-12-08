//Create web server
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const bodyParser = require('body-parser');

//Create static file server
app.use(express.static(path.join(__dirname, 'public')));

//Create a body parser
app.use(bodyParser.urlencoded({extended: true}));

//Create a route for the home page
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Create a route for the comments page
app.get('/comments', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'comments.html'));
});

//Create a route for the comments page
app.post('/comments', (req, res) => {
    console.log(req.body);
    res.send('Thank you for your comment!');
});

//Start the web server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});