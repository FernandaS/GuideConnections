var app = angular.module('myApp');

app.controller('connectCtrl', function($scope, $firebase, authServices, $location){

	$scope.connectSignUp = function(){
	authServices.connectionSignUp($scope.user, function(userData){
		userData.uid = userData.uid.replace("simplelogin:", '');
		$scope.$apply(function(){
			$location.path('/connectLayout/' + userData.uid);	
		})
		$scope.showForm = '';



	})
	
	


	


}


});