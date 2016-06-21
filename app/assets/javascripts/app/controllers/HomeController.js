openTableApp.controller('HomeController', 
  ['$scope', 'OpenTableService', function($scope, OpenTableService){

    $scope.city = OpenTableService.city;
    $scope.price = OpenTableService.price;

    $scope.$watch('city', function(){
      OpenTableService.city = $scope.city;
    });
    $scope.$watch('price', function(){
      OpenTableService.price = $scope.price;
    });

  }]);