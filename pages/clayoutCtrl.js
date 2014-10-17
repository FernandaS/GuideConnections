var app = angular.module('myApp');

app.controller('clayoutCtrl', function($scope, $firebase, user, guiders){
	
	$scope.user = user;
	$scope.guiders = guiders.$asArray();

});