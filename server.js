const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;
//app.set('port', (process.env.PORT || 3001));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Express only serves static assets in production
console.log("NODE_ENV: ", process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

// Return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
    res.sendFile(path.resolve('client/build', 'index.html'));
});
}
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Connect to MySQL db
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "dash"
});

connection.connect((err) => {
	if(err) throw err;
	console.log("Connected to DB!");
});

// app.get("/",function(req,res){
//     connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
//         connection.end();
//         if (!err)
//             console.log('The solution is: ', rows);
//         else
//             console.log('Error while performing Query.');
//     });
// });




// app.set('views', path.join(__dirname, './client/public/index'));




// app.use('/', index);

 if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user:'ahpqraledgrwn7wx',
    password: 'n5lmgsnlna59gsgx',
    database: 'ljp5m42g4v3c087w'
  });
 };

app.listen(port, () => console.log("Listening on port " + port));
