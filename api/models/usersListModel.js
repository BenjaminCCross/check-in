'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  First_name: {
    type: String,
    required: 'Kindly enter the first name of the user'
  },
  Last_name: {
    type: String,
    required: 'Kindly enter the last name of the user'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  Last_check_in:{
    type: Date,
    default: Date.now
  },
  Top_Rope: {
      type: String,
      enum: ['Not Certified', 'First Check', 'Second Check', 'Certified'],
    default: 'Not Certified'
  },
  Setter: {
      type: String,
      enum: ['Not Certified', 'Training', 'Certified'],
    default: 'Not Certified'
  },
  Lead: {
      type: String,
      enum: ['Not Certified', 'Training', 'Certified'],
    default: 'Not Certified'
  }
});

module.exports = mongoose.model('Users', UserSchema);