angular.module( "AngularMail" )
.controller( "contactsCtrl", function( $scope, contactsService, $state ) {
	function init() {
		$scope.contacts = contactsService.getContacts();
	}

	init();
} );
