// Invoke 'strict' JavaScript mode
'use strict';

// Load the module dependencies
var users = require('../../app/controllers/users.server.controller'),
	songs = require('../../app/controllers/songs.server.controller');

// Define the routes module' method
module.exports = function(app) {
	// Set up the 'songs' base routes
	app.route('/api/songs')
	   .get(songs.list)
	   .post(users.requiresLogin, songs.create);

	// Set up the 'songs' parameterized routes
	app.route('/api/songs/:songId')
	   .get(songs.read)
	   .put(users.requiresLogin, songs.hasAuthorization, songs.update)
	   .delete(users.requiresLogin, songs.hasAuthorization, songs.delete);

	// Set up the 'songId' parameter middleware
	app.param('songId', songs.songByID);
};
