angular.module('basic.services', [])

	.factory('Sort', function() {
		var resultArray1 = _.sortBy(states, function(element) {
			// return element.name;
			return 'Running a test';
		})
	})
