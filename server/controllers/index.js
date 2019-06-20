var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      if (req.url === '/messages') {
        res.writeHeader(200, headers);
        res.write('');
        res.end();
      }
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      if (req.url === '/messages') {
        res.writeHeader(201, headers);
        res.write('');
        res.end();
      }
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      if (req.url === '/messages') {
        res.writeHeader(200, headers);
        res.write('');
        res.end();
      }
    },
    post: function (req, res) {
      if (req.url === '/messages') {
        res.writeHeader(201, headers);
        res.write('');
        res.end();
      }
    }
  }
};

