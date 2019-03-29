const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Contacts = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phoneNumber: {
    type: Number
  },
  email: {
    type: String
  },
  company: {
    type: String
  },
  photo: {
    type: String
  }
},{
  timestamps: true
});

module.exports = mongoose.model('Contacts', Contacts);