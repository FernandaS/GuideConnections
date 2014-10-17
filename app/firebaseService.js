var app = angular.module('myApp');

app.factory('firebaseService', function($firebase){
	var baseUrl = 'https://guideconnection.firebaseio.com/';
	
	return {
		getGuiders: function(){
			return $firebase(new Firebase(baseUrl + 'users'));
		},

		getGuider: function(guiderId){
			return $firebase(new Firebase(baseUrl + 'users/' + guiderId));
		},

		getGuiderComments: function(guiderId){
			return $firebase(new Firebase(baseUrl + 'users/' + guiderId + '/comments'));
		}
    }
});