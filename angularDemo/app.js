angular.module('myApp', ['ui.bootstrap', 'ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/app');
		$stateProvider
			.state('app', {
				url: '/app',
				templateUrl: 'view/app.html'
			})
			/*  nested list with custom controller*/
			.state('app.tab3', {
				url: '/hiram/tab3',
				templateUrl: 'view/tab3.html'
			})
			// nested list with just some random string data  
			.state('app.tab4', {
				url: '/hiram/tab4',
				templateUrl: 'view/tab4.html'
			})
	})
	.controller('TabsDemoCtrl', function($scope, $window) {

	})
	.controller('ButtonsCtrl', function($scope) {

	})
	.controller('CollapseDemoCtrl', function($scope) {
		
	})

;