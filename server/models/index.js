//DEFINES THE MESSAGES AND USERS
var db = require('../db');


module.exports = {
  messages: {
    get: function (req, res) {
      // establish a connection with the database
      console.log('BEFORE QUERYING');
      dbConnection.query("SELECT * FROM messages", (err, info) => {
        if (err) {
          console.log('Couldn\'t grab any info');
        } else {
          // this would be the resonse 
          // selecct * from messages
          console.log('INFOMATIQUE', info.toString());
          
        }
        // use a query to get the username, room, and message text from db
      })
      // parse info
      // send info from model->controller

      res.send('Hello from model~!');
    }, // a function which produces all the messages
    post: function (req, res) {
      // establish a connection with the database
      req.on('data', (err, info) => {
        if (err) {
          console.error('Error inserting data to database.', error.messages);
        } else {
          
        }
        
      });
      // post information to the database
      req.on('end', (err, info) => {
        console.log('P0st request to database successful');
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (req, res) {
      res.send('Hello from model~!');
    },
    post: function (req, res) {
      req.on('data', (err, info) => {
        console.log('P0ST-HI');
      });

      req.on('end', (err, info) => {
        console.log('P0st request from user successful');
      })
    }
  }
};

// models gets info from db
// controller gets info from models
// controller passes information to front end