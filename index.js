const express = require("express");
const bodyParser = require("body-parser");
const http = require('http');
const morgan = require('morgan');
const router = require('./router')
const cors = require('cors')

const app = express();

// lets us send JSON to the server. Let us parse incoming requests to JSON
app.use(bodyParser.json())

app.use(cors());

//routes
router(app);

// Server Setup. 
// port of app. 
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log(`Server listening on ${port}`)

module.exports = app;