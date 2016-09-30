// controller reduced to a function, wrapped by angular inside of app.js
function inboxCtrl( $scope, mailService ) {
	function init() {
		$scope.selectedMessage = null;
		$scope.mail = mailService.getMail();
	}

	$scope.selectMessage = function( message ) {
		$scope.selectedMessage = message;
	}

	init();
}

export default inboxCtrl;
// module.exports = inboxCtrl;
