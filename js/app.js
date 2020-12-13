var angularApp = angular.module('angularApp',['ngRoute', 'ngGrid']);

angularApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'about.html',
			controller: 'aboutController'
		});
});
