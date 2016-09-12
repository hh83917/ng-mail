angular.module( "AngularMail" )
.controller( "draftCtrl", function( $scope, $stateParams ) {

	$scope.newMessage = {
		to: $stateParams.email
	};

	$scope.sendMessage = function() {
		$scope.newMessage = {};
	}
} );
