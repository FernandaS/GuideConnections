var app = angular.module('myApp');


app.controller('gLayoutCtrl', function($scope, $location, $firebase, authServices, user){
	user.$loaded(function(data){
		console.log('THE DATA: ', data);
		$scope.user = data;
	})

	
});