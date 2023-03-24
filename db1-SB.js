var mysql = require('mysql');

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

// SQL query with a placeholder '?'
var QUERY = "SELECT * FROM `public-bike-pumps` WHERE TYPE = ?";

connection.query(QUERY, ['On street bike pump'], function(err, rows, fields) {
    if (err) throw err;
    for (var i=0; i<rows.length; i++) {
        // change these attributes to those in your database
        console.log(rows[i].OBJECTID, rows[i].NAME, rows[i].TYPE);
    }
});

connection.end();
