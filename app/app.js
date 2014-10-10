var app = angular.module('myApp', ['ngRoute', 'firebase']);


app.config(['$routeProvider', function($routeProvider){
 
 $routeProvider
 	.when('/', {
 		templateUrl: 'pages/home.html',
 		controller: 'homeCtrl'
 	})
 	.when('/signup', {
 		templateUrl: 'pages/signup.html',
 		controller: 'signupCtrl'
 	}).when('/login',{
 		templateUrl: 'pages/login.html',
 		controller: 'loginCtrl'
 	})
 	.when('/connect',{
 		templateUrl: 'pages/connect.html',
 		controller: 'connectCtrl'
 	})
 	.when('/layout/:userId', {
 		templateUrl: 'pages/glayout.html',
 		controller: 'gLayoutCtrl',
 		resolve: {
 			user: function(authServices, $route){
 				return authServices.getUser($route.current.params.userId);
 			}
 		}
 	})
 	.otherwise({
 		redirectTo: '/'
 	})

 	


 	}]);