'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  User_ID: {
    type: String,
    required: 'Kindly enter the user_ID'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  End_date:{
    type: Date,
    default: null
  }
});

module.exports = mongoose.model('Sessions', SessionSchema);