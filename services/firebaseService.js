var app = angular.module('myApp');


app.factory('firebaseService', function($firebase){
	var baseUrl = 'https://guideconnection.firebaseio.com/';
	
	return {
		firebaseUrl: 'https://guideconnection.firebaseio.com/',
		getGuiders: function(){
		return $firebase(new Firebase(baseUrl + 'users'));
		},

		getGuiderComments: function(guiderId){
			return $firebase(new Firebase(baseUrl + 'users/' + guiderId + '/comments'));
		}
    }
});