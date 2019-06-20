var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('GET MESSAGES:', req.body);
      models.messages.get(req);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('POSTMESSAGES', req);
      models.messages.post(req);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req);
      console.log('GETUSER', req);
    },
    post: function (req, res) {
      models.users.post(req);
      console.log('POSTUSER', req);
    }
  }
};

