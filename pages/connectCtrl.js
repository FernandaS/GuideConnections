var app = angular.module('myApp');

app.controller('connectCtrl', function($scope, $firebase, authServices){

	$scope.connectSignUp = function(){
	authServices.connectionSignUp($scope.user, function(userData){
		console.log(userData);

	
	})


	


}


});