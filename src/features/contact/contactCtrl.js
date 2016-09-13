angular.module( "AngularMail" )
.controller( "contactCtrl", function( $scope, $state ) {
	$scope.messageContact = function() {
		$state.go( "draft", { email: $scope.contactEmail } );
	} 
} );
