openTableApp.controller('HomeController', 
  ['$scope', 'OpenTableService', 
  function($scope, OpenTableService){

    $scope.city = OpenTableService.city; 

    $scope.$watch('city', function(){
      OpenTableService.city = $scope.city;
    });

  }]);