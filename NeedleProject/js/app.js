'use strict';

var needleApp = angular.module('needleApp', ['ngSanitize', 'ngResource', 'ngRoute'])
	.config(function($routeProvider, $locationProvider) {
		$routeProvider.when('/newUser',
			{
				templateUrl: 'templates/NewUser.html',
				controller: 'EditUserController'
			}
		);
		$routeProvider.when('/',
			{
				templateUrl: 'templates/UserList.html',
				controller: 'UserListController'
			}
		);
		//$routeProvider.when('/user/:userId',
		//	{
		//		templateUrl: 'templates/EditUser.html',
		//		controller: 'UserController',
		//		resolve: {
		//			event: function($route, userData) {
		//				return userData.getUser($route.current.pathParams.userId).$promise;

		//			}
		//		}
		//	}
		//);

		$routeProvider.otherwise({ redirectTo: '/' });
		//$locationProvider.html5Mode(true);
	});
    