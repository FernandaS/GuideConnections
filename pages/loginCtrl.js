var app = angular.module('myApp');


app.controller('loginCtrl', function($scope, $location, $firebase, authServices){


$scope.logMeIn = function(){
	authServices.login($scope.user,function(user){
		$scope.$emit("updateLoginButton")
		user.uid = user.uid.replace('simplelogin:', '')
		$scope.$apply(function(){
			$location.path('/layout/' + user.uid)
		})
	})
}

})