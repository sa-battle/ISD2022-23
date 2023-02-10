var express = require('express');

const PORT = 8080;

var app = express();

app.get("/hello", function(request, response) {
    response.send("Hello, World!");
});

app.listen(PORT);
console.log('Listening on port %s', PORT);