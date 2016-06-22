openTableApp.controller('RestaurantController', 
  ['$scope', 'OpenTableService', function($scope, OpenTableService){

    $scope.city = OpenTableService.city;
    $scope.price = OpenTableService.price;

    var restaurant = this;

    restaurant.restaurants = [
      {
        name: "Little Star Pizza",
        city: "San Francisco",
        price: "2"
      },
      {
        name: "NOPA",
        city: "San Francisco",
        price: "3"
      },
    ];

  }]);
