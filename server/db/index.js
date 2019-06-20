//CONNECTS TO THE DATABASE SERVER
var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat'
})

connection.connect((err) => {
    if (err) {
        return console.error('error:', err.message);
    }

    console.log('Connected to the MySQL server');
})