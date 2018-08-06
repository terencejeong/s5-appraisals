const express = require("express");
const bodyParser = require("body-parser");
const http = require('http');
const morgan = require('morgan');
const router = require('./router')
const cors = require('cors')

const app = express();

// lets us send JSON to the server. Let us parse incoming requests to JSON
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//routes
router(app);

// Server Setup. 
// port of app. 
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`)

module.exports = app;