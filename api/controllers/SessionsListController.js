'use strict';
var mongoose = require('mongoose'),
  Sessions = mongoose.model('Sessions');

exports.list_all_sessions = function (req, res) {
  Sessions.find({}, function (err, session) {
    if (err)
      res.send(err);
    res.json(session);
  });
};

exports.create_a_session = function (req, res) {
  var new_session = new Sessions(req.body);
  new_session.save(function (err, session) {
    if (err)
      res.send(err);
    res.json(session);
  });
};

exports.end_a_session = function (req, res) {
  Sessions.findOneAndUpdate({
    _id: req.params.sessionID
  }, {"End_date": Date.now()}, {
    new: true
  }, function (err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};