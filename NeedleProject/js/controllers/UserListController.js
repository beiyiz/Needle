'use strict';


needleApp.controller('UserListController',
    function UserListController($scope, userData) {

    	$scope.users = [];

    	userData.getUsers()
            .$promise.then(
            function (users) {
            	$scope.users = users;
            	
            },
            function (error) { console.log(error); }
        );

    	

    });