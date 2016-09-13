angular.module( "AngularMail" )
.directive( "message", function() {
	return {
		restrict: "E"
		, scope: {
			message: "="
			, selectMessage: "&"
		}
		, templateUrl: "./src/features/message/message.html"
	}
} );
