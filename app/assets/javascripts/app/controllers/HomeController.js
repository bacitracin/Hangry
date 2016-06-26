openTableApp.controller('HomeController', 
  ['$scope', 'CityService', 
  function($scope, CityService){

    $scope.city = CityService.city; 

    $scope.$watch('city', function(){
      CityService.city = $scope.city;
    });

  }]);