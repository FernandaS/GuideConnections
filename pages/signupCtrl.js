var app = angular.module('myApp');

app.controller('signupCtrl', function($scope, $firebase, authServices, firebaseService) {

$scope.signup = function(){
	authServices.guideSignUp($scope.user, function(userData){
		$scope.showForm = '';

	})
}


});