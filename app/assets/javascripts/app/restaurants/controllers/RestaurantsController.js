angular 
  .module('openTableApp') 
  .controller('RestaurantsController', RestaurantsController);

function RestaurantsController(Restaurant, $location, $state) {
  
  var restaurants = this; 

  restaurants.restaurants = Restaurant.query();
};
