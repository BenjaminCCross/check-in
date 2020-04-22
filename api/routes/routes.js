'use strict';
module.exports = function (app) {
  var usersList = require('../controllers/usersListController');
  var sessionsList = require('../controllers/SessionsListController');

  // todoList Routes
  app.route('/users')
    .get(usersList.list_all_users)
    .post(usersList.create_a_user);

  app.route('/users/:userID')
    .get(usersList.get_a_user)
    .put(usersList.update_a_user)
    .delete(usersList.delete_a_user);

  app.route('/sessions')
    .get(sessionsList.list_all_sessions)
    .post(sessionsList.create_a_session);
  app.route('/sessions/:sessionID')
    .put(sessionsList.end_a_session);
};