// const angular = require( "angular" );
// giving webpack access to angular and ui router, as they are no longer globals
import angular from "angular";
import uiRouter from "angular-ui-router";

// giving webpack access to our stylesheets
import "./styles.css";

// pulling in an html template as a string
import inboxHtml from "./templates/inbox.html";

// Controllers
// const inboxCtrl = require( "./controllers/inboxCtrl" );
import inboxCtrl from "./controllers/inboxCtrl";


// Services
import mailService from "./services/mailService";

// Direcitves

angular.module( "AngularMail", [ uiRouter ] )
.service( "mailService", mailService )
// .controller( "inboxCtrl", inboxCtrl )
.config( function( $stateProvider, $urlRouterProvider ) {
	$stateProvider
		.state( "inbox", {
			controller: inboxCtrl
			, url: "/"
			, template: inboxHtml
		} )
		// .state( "draft", {
		// 	controller: "draftCtrl"
		// 	, url: "/draft/:email"
		// 	, templateUrl: "./src/templates/draft.html"
		// } )
		// .state( "contacts", {
		// 	controller: "contactsCtrl"
		// 	, url: "/contacts"
		// 	, templateUrl: "./src/templates/contacts.html"
		// } );

	$urlRouterProvider.otherwise( "/" );
} );
