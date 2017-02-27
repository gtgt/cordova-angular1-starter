'use strict';

var app = angular.module('Application', [
	'ngTouch',
	'ngAnimate',
	'ngCordova',
	'ngResource',
	'ngMaterial',
	'ngMdIcons',
	'pascalprecht.translate',
	'ui.router'
]);

angular.module('Application')
	.config(function ($stateProvider, $urlRouterProvider) {

		// For any unmatched url, redirect to /tabs while there is no dashboard page
		$urlRouterProvider.otherwise("/tabs");

		// Now set up the states
		$stateProvider
			.state('dashboard', {
				url: "/dashboard",
				templateUrl: "webapp/views/dashboard.html",
				controller: 'DashboardCtrl',
				controllerAs: 'dashboard'
			})
			.state('tabs', {
				url: "/tabs",
				templateUrl: "webapp/views/tabs.html",
				controller: 'TabsCtrl',
				controllerAs: 'tabs'
			})
			.state('api', {
				url: "/api",
				templateUrl: "webapp/views/api.html",
				controller: 'ApiCtrl',
				controllerAs: 'api'
			})
			.state('apiMessages', {
				url: "/api/messages",
				templateUrl: "webapp/views/messages.html",
				controller: 'MessagesCtrl',
				controllerAs: 'messages'
			})
			.state('apiCars', {
				url: "/api/cars",
				templateUrl: "webapp/views/cars.html",
				controller: 'CarsCtrl',
				controllerAs: 'cars'
			})
			.state('apiShowCar', {
				url: "/api/car/:carId",
				templateUrl: "webapp/views/car-detail.html",
				controller: 'CarCtrl',
				controllerAs: 'car'
			})
			.state('dialogs', {
				url: "/dialogs",
				templateUrl: "webapp/views/dialogs.html",
				controller: 'dialogsCtrl',
				controllerAs: 'dialogs'
			})
			.state('cards', {
				url: "/cards",
				templateUrl: "webapp/views/cards.html",
				controller: 'CardsCtrl',
				controllerAs: 'cards'
			})
			.state('camera', {
				url: "/plugins/camera",
				templateUrl: "webapp/views/plugins/picture.html",
				controller: 'PictureCtrl',
				controllerAs: 'picture'
			})
			.state('deviceInfo', {
				url: "/plugins/deviceInfo",
				templateUrl: "webapp/views/plugins/device-info.html",
				controller: 'DeviceInfoCtrl',
				controllerAs: 'device'
			})
			.state('login', {
				url: "/auth/login",
				templateUrl: "webapp/views/auth/login.html",
				controller: 'LoginCtrl',
				controllerAs: 'login'
			});
	})
	.config(function ($mdThemingProvider) {
		$mdThemingProvider.theme('default')
			.primaryPalette('blue')
			.accentPalette('amber');

		$mdThemingProvider.theme('pink')
			.primaryPalette('pink', {
				'default': '400', // by default use shade 400 from the pink palette for primary intentions
				'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
				'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
				'hue-3': 'A100' // use shade A100 for the <code>md-hue-3</code> class
			})
			// If you specify less than all of the keys, it will inherit from the
			// default shades
			.accentPalette('purple', {
				'default': '200' // use shade 200 for default, and keep all other shades the same
			});
			//$mdThemingProvider.disableTheming();
	})
	.config(function ($compileProvider) {
		$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|http|ftp|mailto|file|tel):/);
	})
	.config(function ($translateProvider) {

		$translateProvider.preferredLanguage('en');
		$translateProvider.useSanitizeValueStrategy('escape');
		$translateProvider.useStaticFilesLoader({
			prefix: 'languages/',
			suffix: '.json'
		});

	});
