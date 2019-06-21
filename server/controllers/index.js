var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('GET MESSAGES:', req.body);
      models.messages.get(req);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('POSTMESSAGES');
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(req.body);
      console.log('GETUSER');

    },
    post: function (req, res) {
      console.log('POSTUSER');
      models.users.post(req.body);
    }
  }
};

