// Invoke 'strict' JavaScript mode
'use strict';

// Create the 'songs' controller
angular.module('songs').controller('SongsController', ['$scope', '$routeParams', '$location', 'Authentication', 'Songs',
    function($scope, $routeParams, $location, Authentication, Songs) {
    	// Expose the Authentication service
        $scope.authentication = Authentication;

        //Logic for adding notes to staging area while creating Songs
        function MainCtrl() {
            $scope.stuffs = [];
            $scope.submit = function() {
               $scope.stuffs.push({title: 'Hello', content: 'world'});
            }
        }

        // Create a new controller method for creating new articles
        $scope.create = function() {
        	// Use the form fields to create a new article $resource object
            var song = new Songs({
                title: this.title,
                content: this.content
            });

            // Use the article '$save' method to send an appropriate POST request
            song.$save(function(response) {
            	// If an article was created successfully, redirect the user to the article's page
                $location.path('songs/' + response._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for retrieving a list of articles
        $scope.find = function() {
        	// Use the article 'query' method to send an appropriate GET request
            $scope.songs = Songs.query();
        };

        // Create a new controller method for retrieving a single article
        $scope.findOne = function() {
        	// Use the article 'get' method to send an appropriate GET request
            $scope.song = Songs.get({
                songId: $routeParams.songId
            });
        };

        // Create a new controller method for updating a single article
        $scope.update = function() {
        	// Use the article '$update' method to send an appropriate PUT request
            $scope.song.$update(function() {
            	// If an article was updated successfully, redirect the user to the article's page
                $location.path('songs/' + $scope.song._id);
            }, function(errorResponse) {
            	// Otherwise, present the user with the error message
                $scope.error = errorResponse.data.message;
            });
        };

        // Create a new controller method for deleting a single article
        $scope.delete = function(song) {
        	// If an article was sent to the method, delete it
            if (song) {
            	// Use the article '$remove' method to delete the article
                song.$remove(function() {
                	// Remove the article from the articles list
                    for (var i in $scope.songs) {
                        if ($scope.songs[i] === song) {
                            $scope.songs.splice(i, 1);
                        }
                    }
                });
            } else {
            	// Otherwise, use the article '$remove' method to delete the article
                $scope.song.$remove(function() {
                    $location.path('songs');
                });
            }
        };
    }
]);
