var app = angular.module('myApp');

app.controller('clayoutCtrl', function($scope, $firebase, authServices, connecter){

	connecter.$loaded(function(data){
		console.log('THE DATA: ', data);
		$scope.user = data;
	})


});