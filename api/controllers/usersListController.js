'use strict';
var mongoose = require('mongoose'),
  User = mongoose.model('Users');

exports.list_all_users = function (req, res) {
  User.find({}, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.create_a_user = function (req, res) {
  var new_task = new User(req.body);
  new_task.save(function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.get_a_user = function (req, res) {
  User.findById(req.params.userID, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.update_a_user = function (req, res) {
  User.findOneAndUpdate({
    _id: req.params.userID
  }, req.body, {
    new: true
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

exports.delete_a_user = function (req, res) {
  User.deleteOne({
    _id: req.params.userID
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json({
      message: 'User successfully deleted'
    });
  });
};