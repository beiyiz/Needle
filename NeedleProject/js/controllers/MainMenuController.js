'use strict';
needleApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {

    	$scope.createUser = function () {
    		$location.path('/newUser').replace();
    	}
    	$scope.goHome = function () {
    		$location.path('/').replace();
    	}
    }
);