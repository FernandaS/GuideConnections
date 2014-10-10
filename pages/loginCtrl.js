var app = angular.module('myApp');


app.controller('loginCtrl', function($scope, $timeout, $location, $firebase, authServices){


$scope.logMeIn = function(){
	authServices.login($scope.user,function(user){
		$scope.$emit("updateLoginButton")
		user.uid = user.uid.replace('simplelogin:', '');
		authServices.getUser(user.uid)
			.$loaded(function(data){
				$timeout(function(){
					$scope.$apply(function(){
						if(!data.isConnector){
							$location.path('/layout/' + user.uid)
						} else {
							$location.path('/connectLayout/' + user.uid)
						}
					}
				)}, 0)
				
			})
	})
}

})