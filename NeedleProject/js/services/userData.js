needleApp.factory('userData', function ($resource) {
	var resource = $resource('/data/users/:userId', { userId: '@userId' });

	return {
		getUsers: function () {
			return resource.query({ method: 'GET', isArray: true });
		},

		saveUser: function (user) {
			
			return resource.save(user);
		}
	}
})