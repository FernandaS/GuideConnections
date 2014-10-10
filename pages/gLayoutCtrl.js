var app = angular.module('myApp');


app.controller('gLayoutCtrl', function($scope, $location, $firebase, authServices){
var ref = new Firebase ('https://guideconnection.firebaseio.com/users')
var sync = $firebase(ref);

var user = sync.$asObject();
user.$loaded().then(function(){
	console.log("user has id", user.$id);
});
$scope.user = user;
sync.$set(user)
});