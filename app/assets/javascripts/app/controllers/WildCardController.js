openTableApp.controller('WildCardController', 
  ['$scope', '$resource', 'CityService', 

  function($scope, $resource, CityService) {

        $scope.city = CityService.city;
        $scope.numResults = CityService.numResults;

        $scope.openTableAPI = $resource
        ('http://opentable.herokuapp.com/api/restaurants', {
          callback: "JSON_CALLBACK" }, {get: {method: "JSONP" }});

        $scope.openTableSearchResult = $scope.openTableAPI.get(
          {city: $scope.city, per_page: $scope.numResults});
     
  }]);