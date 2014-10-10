var app = angular.module('myApp');

app.controller('mainCtrl', function($scope, $firebase, authServices){
	var checkAuth = function(){
		if(	authServices.checkUser()){
			$scope.show = false;
		}else{
			$scope.show = true;
		}
	}
 checkAuth();


 $scope.logout = function(){
 	console.log('logout');
 	authServices.logoutUser();
 	checkAuth();
 }

 $scope.$on("updateLoginButton", function(event){
 	checkAuth();
 })


});