//DEFINES THE MESSAGES AND USERS
var db = require('../db/index.js');
const parse = require('querystring');
var req = require('request');


module.exports = {
  messages: {

    get: function (req, res) {
      // establish a connection with the database
      console.log('BEFORE QUERYING');
      db.query("SELECT * FROM messages", (err, info) => {
        if (err) {
          console.log('Couldn\'t grab any info', err);
        } else {
          // this would be the resonse 
          // selecct * from messages
          console.log('INFOMATIQUE', parse(info));
        }
        // use a query to get the username, room, and message text from db
      })
      // parse info
      // send info from model->controller

      //res.send('Hello from model~!');
    }, // a function which produces all the messages


    post: function (info) {
      // establish a connection with the database
      if (info.username !== undefined && info.message !== undefined && info.roomname !== undefined) {
        let body = '';
        let username = info.username; // username Valjean
        let roomname = info.roomname; // roomname Hello
        let message = info.message.replace(`'`, `\\'`); // message In mercy's name, three days is all I need.
        console.log('MESSAGE UNPARSED:', message);
        db.query(`INSERT INTO messages (username, roomname, message) \ 
        VALUES (${username}, ${roomname}, ${message})`); // SOME INSERT QUERY HERE
        
      }
    } // a function which can be used to insert a message into the database
  }, // end of messages object
  // post: ((err, info) => {
  //   if (err) {
  //     throw new Error('Error at post',err);
  //   } else {
  //     console.log(info)
  //   }
  // }

  // users: {
  //   // Ditto as above.
  //   get: function () {
  //     res.send('Hello from model~!');
  //   },
  //   post: function (info) {
      
  //   );

  //     req.on('end', (err, info) => {
  //       console.log('P0st request from user successful');
  //     })
  //   }
  // }
}; // end of modules.export
// models gets info from db
// controller gets info from models
// controller passes information to front end
// vice versa