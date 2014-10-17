var app = angular.module('myApp');

app.controller('signupCtrl', function($scope, $firebase, authServices, $location) {

$scope.signup = function(){
	authServices.guideSignUp($scope.user, function(userData){
		userData.uid = userData.uid.replace("simplelogin:", '');
		$scope.$apply(function(){
			$location.path('/layout/' + userData.uid);	
		})
		$scope.showForm = '';
	})
}


});