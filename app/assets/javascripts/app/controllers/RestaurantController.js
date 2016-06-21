openTableApp.controller('RestaurantController', 
  ['$scope', 'OpenTableService', function($scope, OpenTableService){

    $scope.city = OpenTableService.city;
    $scope.price = OpenTableService.price;

  }]);