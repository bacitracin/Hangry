angular
  .module('openTableApp')
  .controller('ShowRestaurantController', ShowRestaurantController);

function ShowRestaurantController(Restaurant, $stateParams, $scope, RestaurantService){

  var showRestaurant = this;

  showRestaurant.restaurant = Restaurant.get({ id: $stateParams.id });

  $scope.selectedRestaurant = showRestaurant.restaurant;
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  
  showRestaurant.updateScope = function(){
    RestaurantService.selectedRestaurant = $scope.selectedRestaurant;
  }
  
}
