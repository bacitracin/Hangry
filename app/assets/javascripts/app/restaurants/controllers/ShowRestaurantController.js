angular
  .module('openTableApp')
  .controller('ShowRestaurantController', ShowRestaurantController);

function ShowRestaurantController(Restaurant, $stateParams){

  var showRestaurant = this;

  showRestaurant.restaurant = Restaurant.get({ id: $stateParams.id });
}