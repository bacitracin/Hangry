angular
  .module('openTableApp')
  .controller('WildCardController', WildCardController);

function WildCardController($scope, CityService, OpenTableService){

  $scope.city = CityService.city;
  $scope.numResults = CityService.numResults;

  $scope.openTableSearchResult = OpenTableService.getResults($scope.city, $scope.numResults);
}

