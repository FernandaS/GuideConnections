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
 		templateUrl: 'pages/gLayout.html',
 		controller: 'gLayoutCtrl',
 		resolve: {
 			user: function(authServices, $route){
 				return authServices.getUser($route.current.params.userId);
 			}
 		}
 	})
 	.when('/connectLayout/:connecterId',{
 		templateUrl: 'pages/clayout.html',
 		controller: 'clayoutCtrl',
 		resolve: {
 			user: function(authServices, $route){
 				return authServices.getUser($route.current.params.connecterId);
 			},
 			guiders: function(firebaseService){
 				return firebaseService.getGuiders();
 			}
 		}
 	})
 	.when('/connectLayout/:connecterId/guider/:guiderId',{
 		templateUrl: 'pages/guiderReview.html',
 		controller: 'guiderReviewCtrl',
 		resolve: {
 			user: function(authServices, $route){
 				return authServices.getUser($route.current.params.connecterId);
 			},
 			guider: function(firebaseService, $route){
 				return firebaseService.getGuider($route.current.params.guiderId);
 			},
 			comments: function(firebaseService, $route){
 				return firebaseService.getGuiderComments($route.current.params.guiderId);
 			}
 		}
 	})
 	.otherwise({
 		redirectTo: '/'
 	});
}]);