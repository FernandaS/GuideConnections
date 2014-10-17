var app = angular.module('myApp');

app.controller('guiderReviewCtrl', function ($scope, guider, comments, user) {
	$scope.guider = guider.$asObject();
	$scope.comments = comments.$asArray();
	$scope.user = user
	$scope.addComment = function(){
		$scope.comment.submittedBy = $scope.user.name;
		$scope.comment.timestamp = new Date().toISOString();
		$scope.comments.$add($scope.comment);
	};

});