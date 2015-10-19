// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'songs' service
angular.module('songs').factory('Songs', ['$resource', function($resource) {
	// Use the '$resource' service to return a song '$resource' object
    return $resource('api/songs/:songId', {
        songId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);
