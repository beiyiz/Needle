'use strict';


needleApp.controller('EditUserController',
    function EditUserController($scope, userData, $location) {
    	
    	$scope.user = {};

    	userData.getUsers()
            .$promise.then(
            function (users) {
            	$scope.users = users;
	            var maxId = 0;
            	for (var i = 0; i < $scope.users.length; i++) {
            		maxId = parseInt( $scope.users[i].userId);
            	}
            	$scope.maxId = maxId + 1;

	            console.log($scope.users);
            },
            function (error) { console.log(error); }
        );

    	$scope.saveProfile = function (profile) {
    		profile.userId = $scope.maxId;
    		profile.createdDate = new Date();
		    userData.saveUser(profile);

		    $location.path('/').replace();
    	};

    	$scope.cancelEditProfile = function () { $location.path('/').replace();  };

    });