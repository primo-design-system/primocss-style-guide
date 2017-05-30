var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.use(express.static('public'));

app.listen(8080);

console.log("Running at Port 8080 http://localhost:8080");
