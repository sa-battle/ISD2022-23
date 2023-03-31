// Access from browser with http://localhost:8080

var express = require('express');

const PORT = 8080;
var app = express();
app.set("view engine","ejs");
app.use(express.static('static'));

app.get("/", function(request, response) {
    //response.send("Hello, World!");
    response.render("hello");
});

// start server
app.listen(PORT);
console.log('Listening on port %s', PORT);