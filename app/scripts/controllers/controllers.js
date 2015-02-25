angular.module('basic.controllers', ['basic.services'])
.controller('BasicCtrl', function($scope, $http) {

	$scope.filterBox = '';
	$scope.reverseArray = [];
	$scope.stateArrow = true;
	$scope.abbArrow = true;

	function getRequest() {

		$http.get('http://tiny-pizza-server.herokuapp.com/collections/fancy-table')
		.success(function(response) {

			$scope.states = response;
			
		$scope.states = _.sortBy($scope.states, function(element) {
				return element.name + element.abbreviation;
			})

		$scope.newArray = _.sortBy($scope.states, function(element) {
				return element.name + element.abbreviation;
			})

		})
	}
	getRequest();


	$scope.titleClick = function() {

			if($scope.stateArrow) {
				$scope.stateArrow = false;
				$scope.reverseArray = $scope.newArray;
				$scope.newArray = $scope.reverseArray.reverse();

			} else if($scope.stateArrow === false) {
				$scope.stateArrow = true;
				$scope.reverseArray = $scope.newArray;
				$scope.newArray = $scope.reverseArray.reverse();
			}

		};

	$scope.abbClick = function() {

		if($scope.abbArrow) {
				$scope.abbArrow = false;
				$scope.reverseArray = $scope.newArray;
				$scope.newArray = $scope.reverseArray.reverse();

			} else if($scope.abbArrow === false) {
				$scope.abbArrow = true;
				$scope.reverseArray = $scope.newArray;
				$scope.newArray = $scope.reverseArray.reverse();
			}

	};

// filter expects and array and a function and if function returns true, than the element will return, and return false it gets removed

	$scope.$watch('filterBox', function() {

		$scope.newArray = _.filter($scope.states, function(element) {
			console.log(element.name.toLowerCase());
			console.log($scope.filterBox.toLowerCase());
			return element.name.toLowerCase().indexOf($scope.filterBox.toLowerCase()) === 0;

		});
		console.log($scope.newArray);
	});

});

