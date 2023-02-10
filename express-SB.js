var express = require('express');

const PORT = 8080;

var app = express();

app.set("view engine","ejs");
app.use(express.static('static'));

app.get("/page1.html", function(request, response) {
    response.render("page1");
});

app.get("/page2.html", function(request, response) {
    response.render("page2");
});

app.get("/bikepumps.html", function(request, response) {
    response.render("proto1-sb");
});

app.listen(PORT);
console.log('Listening on port %s', PORT);