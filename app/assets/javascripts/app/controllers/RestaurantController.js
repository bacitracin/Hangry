openTableApp.controller('RestaurantController', 
  ['$scope', '$resource','Restaurant', 'OpenTableService', function($scope, $resource, Restaurant, OpenTableService){

    $scope.city = OpenTableService.city; //take these out
    $scope.price = OpenTableService.price;

    var restaurant = this;

    // query() returns all the entries - INDEX
    restaurant.restaurants = Restaurant.query();

  }]);
