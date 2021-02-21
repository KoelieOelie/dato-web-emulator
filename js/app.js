var angularApp = angular.module('angularApp',['ngRoute', 'ngGrid']);

angularApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		.when('/io', {
			templateUrl: 'io.html',
			controller: 'ioController'
		})
		.when('/about', {
			templateUrl: 'about.html',
			controller: 'aboutController'
		});
});
