angular.module( "AngularMail" )
.directive( "contact", function() {
	return {
		restrict: "A"
		, replace: true
		, templateUrl: "./src/features/contact/contact.html"
		, scope: {
			contactName: "@"
			, contactNumber: "="
			, contactEmail: "="
			, contactCompany: "="
		}
		, controller: "contactCtrl"
	}
} );
