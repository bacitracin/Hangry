openTableApp.controller('WildCardController', ['$scope', '$resource', 'openTableService', 
  function($scope, $resource, openTableService) {

        $scope.city = openTableService.city;

        $scope.openTableAPI = $resource
        ('http://opentable.herokuapp.com/api/restaurants?per_page=100' + $scope.city, {
          callback: "JSON_CALLBACK" }, {get: {method: "JSONP"}});

        $scope.searchResult = $scope.openTableAPI.get({city: $scope.city});
  }]);
