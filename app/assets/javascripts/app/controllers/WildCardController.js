openTableApp.controller('WildCardController', ['$scope', '$resource', 'OpenTableService', 
  function($scope, $resource, OpenTableService) {

        $scope.city = OpenTableService.city;

        $scope.openTableAPI = $resource
        ('http://opentable.herokuapp.com/api/restaurants?per_page=100' + $scope.city, {
          callback: "JSON_CALLBACK" }, {get: {method: "JSONP"}});

        $scope.searchResult = $scope.openTableAPI.get({city: $scope.city});
  }]);
