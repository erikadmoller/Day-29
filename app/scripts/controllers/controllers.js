angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, $http) {

	$scope.filterBox = '';

	var promise = $http.get('http://tiny-pizza-server.herokuapp.com/collections/fancy-table')
		.success(function(response) {

			$scope.states = [];
			for(var i=0; i<response.length; i++) {

				console.log(i);
				console.log(response[i]);
				// console.log(response[i].imgURL);

					if(response[i].name && response[i].abbreviation) {
						$scope.states.push(response[i]);
						console.log($scope.states);
					}
			}

		})

});