openTableApp.controller('HomeController', 
  ['$scope', 'CityService', 
  function($scope, CityService){

    $scope.city = CityService.city;
    $scope.numResults = CityService.numResults;

    $scope.$watch('city', function(){
      CityService.city = $scope.city;
    });

    $scope.$watch('numResults', function(){
      CityService.numResults = $scope.numResults;
    });

  }]);