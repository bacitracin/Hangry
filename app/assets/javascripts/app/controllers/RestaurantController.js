openTableApp.controller('RestaurantController', 
  ['$scope', 'Restaurant', 'OpenTableService', function($scope, Restaurant, OpenTableService){

    $scope.city = OpenTableService.city;
    $scope.price = OpenTableService.price;

    var restaurant = this;

    restaurant.restaurants = Restaurant.query();

  }]);
