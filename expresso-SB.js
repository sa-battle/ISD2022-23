// Access from browser with http://localhost:8080

var express = require('express');
var mysql = require('mysql');

const PORT = 8080;
// SQL query with a placeholder '?'
const QUERY = "SELECT * FROM `public-bike-pumps`";
const TYPE_QUERY = "SELECT * FROM `public-bike-pumps` WHERE TYPE=?";
const SEARCH_QUERY = "SELECT * FROM `public-bike-pumps` WHERE NAME LIKE ?";

var app = express();
app.set("view engine","ejs");
app.use(express.static('static'));

var connection = mysql.createConnection({
    "host"     : "mysql5.cems.uwe.ac.uk",
    "user"     : "fet88596980",
    "password" : "ISDblackboard",
    "database" : "fet88596980"
});

connection.connect(function(err){
	if (err) {
    	console.error("Connection error: ", err.message);    
	} else {
    	console.log("Connected as: ", connection.threadId);    
	}
});

app.get("/bikepumps.html", function(request, response) {
    connection.query(QUERY, function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        response.render("table", { 'rows': rows });
    });
});

app.get("/typetable.html", function(request, response) {
    connection.query(TYPE_QUERY, [ request.query.type ], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        response.render("table", { 'rows': rows });
    });
});

app.get("/search.html", function(request, response) {
    connection.query(SEARCH_QUERY, [ "%"+request.query.search+"%" ], function(err, rows, fields) {
        if (err) {
            response.status(500);
            response.send(err);
        }
        response.render("table", { 'rows': rows });
    });
});

// start server
app.listen(PORT);
console.log('Listening on port %s', PORT);