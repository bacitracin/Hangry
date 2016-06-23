openTableApp.controller('RestaurantController', 
  ['$scope', '$resource','Restaurant', 'OpenTableService', function($scope, $resource, Restaurant, OpenTableService){

    $scope.city = OpenTableService.city;
    $scope.price = OpenTableService.price;

    var restaurant = this;

    //query() returns all the entries
    restaurant.restaurants = Restaurant.query();

  }]);
