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
		$scope.tabs = [{
			title: 'Dynamic Title 1',
			content: 'Dynamic content 1'
		}, {
			title: 'Dynamic Title 2',
			content: 'Dynamic content 2',
			disabled: true
		}];
		$scope.alertMe = function() {
			setTimeout(function() {
				$window.alert('You\'ve selected the alert tab!');
			});
		};
		$scope.model = {
			name: 'Tabs'
		};
	})
	.controller('ButtonsCtrl', function($scope) {
		$scope.singleModel = 1;
		$scope.radioModel = 'Middle';
		$scope.checkModel = {
			left: false,
			middle: true,
			right: false
		};
		$scope.checkResults = [];
		$scope.$watchCollection('checkModel', function() {
			$scope.checkResults = [];
			angular.forEach($scope.checkModel, function(value, key) {
				if(value) {
					$scope.checkResults.push(key);
				}
			});
		});
	})
	.controller('CollapseDemoCtrl', function($scope) {
		$scope.isNavCollapsed = true;
		$scope.isCollapsed = false;
		$scope.isCollapsedHorizontal = false;
	})

;